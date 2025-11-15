import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';

const MyFavourite = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if(user?.email) {
      const stored = localStorage.getItem(`myFavourites_${user.email}`);
      setFavorites(stored ? JSON.parse(stored) : []);
    }
  }, [user]);

  const handleRemove = (id) => {
    const updated = favorites.filter(item => item._id !== id);
    setFavorites(updated);
    localStorage.setItem(`myFavourites_${user.email}`, JSON.stringify(updated));
  };

  if(!user) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-xl font-semibold">
        Please log in to see your favorites.
      </div>
    );
  }

  if(favorites.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-xl font-semibold">
        No favorites added yet.
      </div>
    );
  }

  return (
    <div className="mt-4 max-w-[1700px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {favorites.map(item => (
        <article
          key={item._id}
          className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative w-full h-44 md:h-56 lg:h-48 overflow-hidden">
            <img
              src={item.photo}
              alt={`${item.foodName} at ${item.restaurantName}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x400?text=No+Image"; }}
            />
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <header className="mb-2">
              <h3 className="text-lg font-semibold text-slate-800">{item.foodName}</h3>
              <p className="text-sm text-slate-500">
                {item.restaurantName} • <span className="text-xs">{item.restaurantLocation}</span>
              </p>
            </header>

            <div className="flex items-center gap-2 mb-4">
              <div className="inline-flex items-center bg-yellow-50 rounded-md px-2 py-1">
                <FaStar className="text-yellow-500 mr-1" />
                <span className="font-medium text-sm">{item.rating ? Number(item.rating).toFixed(1) : "N/A"}</span>
              </div>
              <span className="text-sm text-slate-600">
                Reviewed by <span className="font-semibold text-slate-800">{item.reviewerName}</span>
              </span>
            </div>

            <div className="mt-auto flex flex-col gap-2">
              <Link
                to={`/reviewDetail/${item._id}`}
                className="text-center text-sm font-semibold px-3 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-100 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-95 text-white"
              >
                View Details
              </Link>

              <button
                onClick={() => handleRemove(item._id)}
                className="px-3 py-2 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default MyFavourite;
