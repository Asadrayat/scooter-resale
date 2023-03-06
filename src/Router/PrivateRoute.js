import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Authprovider/Authprovider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <button type="button" className="bg-indigo-500 ..." disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </button>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ form: location }} replace></Navigate>
};

export default PrivateRoute;