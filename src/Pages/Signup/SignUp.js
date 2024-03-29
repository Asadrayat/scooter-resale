import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Authprovider/Authprovider";
import useToken from "../../Hooks/UseToken/UseToken";


const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    if (token) {
        navigate('/')

    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                toast('User Created Successfully.')
                navigate('/')
                const userInfo = {
                    displayName: user.displayName,
                    email: user.email,
                    role: 'user'
                }
                updateUser(userInfo)
                    .then(() => { })
                saveUser(user.displayName, user.email, user.role)
                    .catch(err => console.log(err));

            })
            .catch(error => {
                console.error(error)

            });
    }
    const handleSignUp = (data) => {
        // console.log(data.role);
        setSignUPError('');
        createUser(data.email, data.password, data.displayName, data.role)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.displayName,
                    email: data.email,
                    role: data.role
                }
                updateUser(userInfo)
                    .then(() => { })
                saveUser(data.displayName, data.email, data.role)
                    .catch(err => console.log(err));
            })
            .catch(error => {
                // console.log(error)
                setSignUPError(error.message)
            });

    }
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://scooter-service.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
            })
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl lg:text-5xl my-12 text-center text-blue-900 font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("displayName", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },

                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <select required className="my-4" {...register("role")}>
                        <option value="user">user</option>
                        <option value="seller">seller</option>
                    </select>
                    <input className='btn bg-gradient-to-r from-red-500 to-red-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300  text-xl text-white w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className="my-2">Already have an account <Link className='text-error' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn bg-gradient-to-r from-red-500 to-red-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300  text-xl  mt-3 border text-center w-full d-flex flex-row-reverse align-items-center justify-content-evenly py-3 px-5 m-auto">
                    <div className="w-10">
                        <img
                            className=" px-2 image-fluid btn-image"
                            src="https://img.icons8.com/color/344/google-logo.png"
                            alt=""
                        />
                    </div>

                    <p className="fw-bold">Google SignIn</p>
                </button>

            </div>
        </div>
    );
};

export default SignUp;