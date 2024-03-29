import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Authprovider/Authprovider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.type);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <React.Fragment>
      <li className="text-xl font-bold text-blue-900 transition  ">
        <Link to="/">Home</Link>
      </li>
      {/* <li className="text-xl font-bold text-blue-900 transition "><Link to="/appointment">Appointment</Link></li> */}
      <li className="text-xl font-bold text-blue-900 transition ">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="text-xl font-bold text-blue-900 transition ">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="text-xl font-bold text-blue-900 transition ">
        <Link
          activeClass="active"
          to="/why"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Why
        </Link>
      </li>
      {user?.uid ? (
        <>
          <li className="text-xl font-bold text-blue-900 transition ">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="text-xl font-bold text-blue-900 transition ">
            <button onClick={handleLogOut}>Sign out</button>
          </li>
        </>
      ) : (
        <li className="text-xl font-bold text-blue-900 transition ">
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between max-w-[1440px] mx-auto my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn bg-gradient-to-r from-red-500 to-red-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300  text-xl lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content m-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn  btn-outline text-blue-900 ml-5  text-xl"
        >
          Scooter Resale
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        tabIndex={2}
		htmlFor="dashboard-drawer-2" 
        className="btn bg-gradient-to-r from-red-500 to-red-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300  text-xl lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Nav;
