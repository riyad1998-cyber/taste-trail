import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You Logged Out Successfully");
        setOpen(false);
      })
      .catch((error) => console.log(error));
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
          to="/addReviews"
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

  const userPhoto = user?.photoURL ? user.photoURL : "https://i.ibb.co/placeholder.png";

  return (
    <div className="bg-gradient-to-r from-[#4b0082] via-[#6a5acd] to-[#1e3a8a] shadow-lg relative">
      <div className="navbar max-w-[1700px] mx-auto text-white px-4">
        <div className="navbar-start flex items-center">
          <div className="dropdown lg:hidden">
            <button className="btn btn-ghost">
              <span className="text-xl font-bold">☰</span>
            </button>
            <ul className="menu menu-sm dropdown-content mt-3 w-48 rounded-box bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-2 shadow text-white">
              {links}
            </ul>
          </div>

          <Link to="/" className="text-xl font-extrabold flex items-center gap-1">
            <span>🍴</span>
            <span>
              Taste<span className="text-yellow-300">Trail</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-2 md:gap-4 flex relative">
          {user ? (
            <>
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <img src={userPhoto} alt={user.displayName || "User"} className="w-full h-full object-cover" />
              </div>

              {open && (
                <div className="absolute right-0 top-14 bg-white w-44 rounded-lg shadow-xl p-3 text-gray-800 z-50">
                  <p className="font-semibold text-black border-b pb-2">{user.displayName || "User"}</p>

                  <Link
                    to="/myFavourite"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 mt-2 rounded-md hover:bg-gray-100 font-medium"
                  >
                    ❤️ My Favourite
                  </Link>

                  <Link
                    to="/myReviews"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 font-medium"
                  >
                    ⭐ My Reviews
                  </Link>

                  <button
                    onClick={handleLogOut}
                    className="w-full mt-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)] active:scale-95 text-white rounded-md font-semibold"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link
                to="/auth/registration"
                className="font-medium px-3 py-1 md:px-3 md:py-2 rounded transition-all duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)] active:scale-95 text-sm md:text-base"
              >
                Registration
              </Link>
              <Link
                to="/auth/login"
                className="font-medium px-3 py-1 md:px-3 md:py-2 rounded transition-all duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)] active:scale-95 text-sm md:text-base"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
