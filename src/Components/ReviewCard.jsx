import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const ReviewCard = ({ item, onViewDetails, onToggleFavorite }) => {
  const [isFav, setIsFav] = useState(false);

  const handleToggleFav = () => {
    const newFav = !isFav;
    setIsFav(newFav);
    if (onToggleFavorite) onToggleFavorite(item._id, newFav);
  };

  const handleViewDetails = () => {
    if (onViewDetails) onViewDetails(item._id);
  };

  return (
    <article
      className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col"
      role="article"
      aria-labelledby={`title-${item._id}`}
    >
      <div className="relative w-full h-44 md:h-56 lg:h-48 overflow-hidden">
        <img
          src={item.photo}
          alt={`${item.foodName} at ${item.restaurantName}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/600x400?text=No+Image";
          }}
        />

        <button
          onClick={handleToggleFav}
          aria-pressed={isFav}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow hover:scale-105 transition"
          type="button"
        >
          {isFav ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-700" />}
        </button>
      </div>

      <div className="p-4 flex-1 flex flex-col">
 
        <header className="mb-2">
          <h3 id={`title-${item._id}`} className="text-lg font-semibold text-slate-800">
            {item.foodName}
          </h3>
          <p className="text-sm text-slate-500">
            {item.restaurantName} •{" "}
            <span className="text-xs">{item.restaurantLocation}</span>
          </p>
        </header>

        <div className="flex items-center gap-2 mb-4">
          <div className="inline-flex items-center bg-yellow-50 rounded-md px-2 py-1">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="font-medium text-sm">
             {item.rating !== undefined && !isNaN(Number(item.rating))
  ? Number(item.rating).toFixed(1)
  : "N/A"}
            </span>
          </div>
          <span className="text-sm text-slate-600">
            Reviewed by{" "}
            <span className="font-semibold text-slate-800">
              {item.reviewerName}
            </span>
          </span>
        </div>

        <button
          onClick={handleViewDetails}
          className="mt-auto text-sm font-semibold px-3 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-100 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-95 text-white"
          type="button"
          aria-label={`View details for ${item.foodName}`}
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default ReviewCard;
