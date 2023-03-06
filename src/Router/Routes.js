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



const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");
const { default: Signup } = require("../Pages/Signup/SignUp");

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
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/catagoryOptions/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://recycle-bin-server-rose.vercel.app/catagoryOptions/${params.id}`)
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