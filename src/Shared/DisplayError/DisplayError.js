import { useContext } from "react";
import { useNavigate, useRouteError, } from "react-router-dom";
import { AuthContext } from "../../Context/Authprovider/Authprovider";
const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src='https://i.ibb.co/fHjjdBH/error.webp' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className='text-red-500'>Something went wrong!!!</p>
                        <p className='text-red-400'>{error.statusText || error.message}</p>
                        <h4 className="text-3xl"> Please <button className="btn btn-error" onClick={handleLogOut}>Sign out</button> and log back in</h4>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DisplayError;