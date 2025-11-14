import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You Logged Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md font-semibold transition-all duration-300 ${
            isActive ? "bg-white text-pink-600" : "text-white hover:bg-white/20"
          }`
        }
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/reviews"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md font-semibold transition-all duration-300 ${
            isActive ? "bg-white text-pink-600" : "text-white hover:bg-white/20"
          }`
        }
      >
        All Reviews
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/myReviews"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md font-semibold transition-all duration-300 ${
            isActive ? "bg-white text-pink-600" : "text-white hover:bg-white/20"
          }`
        }
      >
        Add Reviews
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/resturants"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md font-semibold transition-all duration-300 ${
            isActive ? "bg-white text-pink-600" : "text-white hover:bg-white/20"
          }`
        }
      >
        Restaurants
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md font-semibold transition-all duration-300 ${
            isActive ? "bg-white text-pink-600" : "text-white hover:bg-white/20"
          }`
        }
      >
        About
      </NavLink>
    </li>
  </>
);


  return (
    <div className="bg-gradient-to-r from-[#4b0082] via-[#6a5acd] to-[#1e3a8a] shadow-lg">
      <div className="navbar max-w-[1700px] mx-auto text-white px-4">
        <div className="navbar-start flex items-center">
          <div className="dropdown lg:hidden">
            <button className="btn btn-ghost">
              <span className="text-2xl font-bold">☰</span>
            </button>
            <ul className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-2 shadow text-white">
              {links}

              <div className="block md:hidden">
                <li className="mt-2">
                  <Link
                    to="/auth/registration"
                    className="px-3 py-2 rounded-md font-semibold transition-all duration-300 text-white hover:bg-white/20"
                  >
                    Registration
                  </Link>
                </li>
                <li>
                  {user ? (
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left px-3 py-2 rounded-md font-semibold transition-all duration-300 text-white hover:bg-white/20"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/auth/login"
                      className="px-3 py-2 rounded-md font-semibold transition-all duration-300 text-white hover:bg-white/20"
                    >
                      Login
                    </Link>
                  )}
                </li>
              </div>
            </ul>
          </div>

          <Link to="/" className="text-2xl font-extrabold flex items-center gap-2">
            <span>🍴</span>
            <span>
              Taste<span className="text-yellow-300">Trail</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-4 hidden md:flex">
          <Link
            to="/auth/registration"
            className="font-medium px-3 py-2 rounded transition-all duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-100 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-95"
          >
            Registration
          </Link>
          {user ? (
            <button
              onClick={handleLogOut}
              className="font-medium px-3 py-2 rounded transition-all duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-100 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-95"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="font-medium px-3 py-2 rounded transition-all duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-100 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-95"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
