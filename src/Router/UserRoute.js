import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Authprovider/Authprovider";
import UseUser from "../Hooks/UseUser/UseUser";
import Loading from "../Shared/Loading/Loading";

const UserRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isUser, isUserLoading] = UseUser(user?.email);
    const location = useLocation();

    if (loading || isUserLoading) {
        return <Loading></Loading>
    }

    if (user && isUser) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default UserRoute;