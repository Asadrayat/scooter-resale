import Blog from "../Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Why from "../Pages/Home/Why/Why";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Shared/DashboardLayout/DashboardLayout";
import DisplayError from "../Shared/DisplayError/DisplayError";
import MyAppointment from "../Shared/MyAppointment/MyAppointment";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllUsers from "../Pages/Home/Dashboard/Allusers/Allusers";
import AddProducts from "../Pages/Home/Dashboard/AddProducts/AddProducts";
import MyProduct from "../Pages/Home/Dashboard/MyProduct/MyProduct";
import SellerRoute from "./SellerRout";
import AllBuyers from "../Pages/Home/Dashboard/AllBuyers/AllBuyers";
import Contact from "../Pages/Home/Contact/Contact";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/Signup/SignUp";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/catagoryOptions/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagoryOptions/${params.id}`)
            },
            {
                path: '/why',
                element: <Why></Why>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            //     {
            //         path: '/dashboard/payment/:id',
            //         element: <Payment></Payment>,
            //         loader: ({ params }) => fetch(`https://doctors-server-two.vercel.app/bookings/${params.id}`)
            //     }
        ]
    },
])

export default router;