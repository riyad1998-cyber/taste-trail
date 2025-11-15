import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";

const EditReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState(null);

  const fetchReview = async () => {
    try {
      const res = await fetch(`http://localhost:3000/reviews/${id}`);
      const data = await res.json();
      if (data?.result?.reviewerName !== user.email) {
        toast.error("You are not authorized to edit this review");
        navigate("/myReviews");
        return;
      }
      setReview(data.result);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load review");
    }
  };

  useEffect(() => {
    if (user?.email) fetchReview();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(
      today.getMonth() + 1
    ).padStart(2, "0")}/${today.getFullYear()}`;

    const updatedData = {
      foodName: e.target.foodName.value,
      photo: e.target.photo.value,
      restaurantName: e.target.restaurantName.value,
      restaurantLocation: e.target.restaurantLocation.value,
      rating: e.target.rating.value,
      description: e.target.description.value,
      createdAt: formattedDate,
    };

    try {
      const res = await fetch(`http://localhost:3000/reviews/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Review updated successfully!");
        navigate("/myReviews");
      } else {
        toast.error("Failed to update review");
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to update review");
    }
  };

  if (!review) return <p className="text-center mt-10">Loading review...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-center mb-6 inline-block bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent">
        Edit Review
      </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold mb-1">Food Name</label>
          <input
            type="text"
            name="foodName"
            defaultValue={review.foodName}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Food Image URL</label>
          <input
            type="text"
            name="photo"
            defaultValue={review.photo}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Restaurant Name</label>
          <input
            type="text"
            name="restaurantName"
            defaultValue={review.restaurantName}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="restaurantLocation"
            defaultValue={review.restaurantLocation}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Star Rating</label>
          <select
            name="rating"
            defaultValue={review.rating}
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
            name="description"
            defaultValue={review.description}
            className="w-full px-4 py-3 h-28 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button className="px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-100 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-95">
            Update Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
