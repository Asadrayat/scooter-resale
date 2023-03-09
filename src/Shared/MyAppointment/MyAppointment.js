import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/Authprovider/Authprovider";


const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
  
    return (
        <div className="">
            <p className='text-3xl my-5 text-center font-bold'>My Orders</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.length &&
                            bookings?.map((booking, i) => <tr>
                                <th>{i+1}</th>
                                <td><img src={booking.picture}  className="rounded-full w-24 " alt="" /></td>
                                <td>{booking.title}</td>
                                <td>{booking.resale_price}</td>
                                <td><button className="btn btn-primary btn-sm">Pay</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;