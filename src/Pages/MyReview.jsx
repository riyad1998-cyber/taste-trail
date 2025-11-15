import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [deleteId, setDeleteId] = useState(null); // for modal

  // Fetch all reviews by this user
  const fetchReviews = async () => {
    if (!user?.email) return;
    try {
      const res = await fetch("http://localhost:3000/reviews");
      const data = await res.json();
      const userReviews = data.filter(r => r.reviewerName === user.email);
      setReviews(userReviews);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load reviews");
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [user]);

  // Delete review
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/reviews/${deleteId}`, {
        method: "DELETE",
      });
      toast.success("Review deleted successfully");
      setDeleteId(null);
      fetchReviews();
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete review");
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent">
        My Reviews
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4">Food Image</th>
              <th className="py-2 px-4">Food Name</th>
              <th className="py-2 px-4">Restaurant Name</th>
              <th className="py-2 px-4">Posted Date</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No reviews added yet.
                </td>
              </tr>
            )}
            {reviews.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="py-2 px-4">
                  <img
                    src={item.photo}
                    alt={item.foodName}
                    className="w-20 h-20 object-cover rounded"
                    onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/100x100?text=No+Image")}
                  />
                </td>
                <td className="py-2 px-4">{item.foodName}</td>
                <td className="py-2 px-4">{item.restaurantName}</td>
                <td className="py-2 px-4">{item.createdAt}</td>
                <td className="py-2 px-4 flex gap-2">
                  <Link
                    to={`/edit-review/${item._id}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => setDeleteId(item._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Confirm Delete</h3>
            <p className="mb-4">Are you sure you want to delete this review?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReview;
