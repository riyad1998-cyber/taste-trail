import React from "react";

const AddReview = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
        Add Review
      </h2>

      <form className="space-y-5">


        <div>
          <label className="block font-semibold mb-1">Food Name</label>
          <input
            type="text"
            name="foodName"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter food name"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Food Image URL</label>
          <input
            type="text"
            name="foodImage"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Upload image URL"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Restaurant Name</label>
          <input
            type="text"
            name="restaurantName"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Restaurant name"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Dhaka, Bangladesh"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Star Rating</label>
          <select
            name="rating"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          >
            <option value="">Select Rating</option>
            <option value="1">⭐ 1 Star</option>
            <option value="2">⭐⭐ 2 Stars</option>
            <option value="3">⭐⭐⭐ 3 Stars</option>
            <option value="4">⭐⭐⭐⭐ 4 Stars</option>
            <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Review Text</label>
          <textarea
            name="reviewText"
            className="w-full px-4 py-3 h-28 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Write your review..."
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button className="px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-100 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-95">
            Submit Review
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddReview;
