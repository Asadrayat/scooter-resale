import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Context/Authprovider/Authprovider";
import Loading from "../../../../Shared/Loading/Loading";



const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostingKey = process.env.REACT_APP_IMAGE_BB;
    const navigate = useNavigate();
    // console.log(imgHostingKey);
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://scooter-service.vercel.app/bookingSpeciality')
            const data = await res.json();
            console.log(data);
            // console.log(data);
            return data;
        }
    })
    const handleAddProduct = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
        console.log(url);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const Product = {
                        title: data.name,
                        seller: data.email,
                        catagory: data.catagory,
                        location: data.adress,
                        condition: data.condition,
                        phone: data.phone,
                        original_price: data.Oprice,
                        resale_price: data.Sprice,
                        picture: imgData.data.url
                    }
                    // save product information to the database
                    fetch(`https://scooter-service.vercel.app/${data.catagory}`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(Product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.catagory
                            } is added successfully`);
                            navigate('/')
                        })
                        .catch(err => console.log(err));
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-1/2 lg:mx-auto p-7'>
            <h2 className="text-2xl lg:text-5xl text-blue-900 font-bold my-5 text-center">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="text" {...register("Oprice", {
                        required: "Price is Required"
                    })} className="input input-bordered w-full " />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Selling Price</span></label>
                    <input type="text" {...register("Sprice", {
                        required: "Price is Required"
                    })} className="input input-bordered w-full " />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Address</span></label>
                    <input type="text" {...register("adress", {
                        required: "Address is Required"
                    })} className="input input-bordered w-full " />
                    {errors.adress && <p className='text-red-500'>{errors.adress.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Phone</span></label>
                    <input type="text" {...register("phone", {
                        required: "Address is Required"
                    })} className="input input-bordered w-full " />
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" readOnly defaultValue={user?.email}  {...register("email", {
                        required: true
                    })} className="input input-bordered w-full to-blue-200 " />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Catagory</span></label>
                    <select
                        {...register('catagory')}
                        className="select input-bordered w-full ">
                        {
                            specialties.map(specialty => <option
                                
                                key={specialty._id}
                                value={specialty.catagory}
                            >{specialty.catagory}</option>)
                        }


                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select required className="my-4" {...register("condition")}>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="excelent">Excelent</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full " />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn bg-gradient-to-r from-red-500 to-red-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300  text-xl btn-outline w-full mt-4' value="Add Products" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;