import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/Authprovider/Authprovider";
import UseAdmin from "../../Hooks/UseAdmin/UseAdmin";
import UseSeller from "../../Hooks/UseSeller/UseSeller";
import UseUser from "../../Hooks/UseUser/UseUser";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  const [isSeller] = UseSeller(user?.email);
  const [isUser] = UseUser(user?.email);
  // const [isAdmin] = useAdmin(user?.email);
  return (
    <div className="max-w-[1440px] mx-auto">
      <Nav></Nav>,
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer-2"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content lg:mx-20">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dashboard-drawer-2"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 bg-blue-900 text-white text-center text-xl font-bold">
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                {/* <li><Link to='/dashboard/adddoctor'>Add Doctor</Link></li> */}
                {/* <li><Link to='/dashboard/managedoctors'>Manage Doctor</Link></li> */}
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/myproduct">My Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
              </>
            )}
            {isUser && (
              <>
                <li>
                  <Link to="/dashboard/dashboard">My Bookings</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
