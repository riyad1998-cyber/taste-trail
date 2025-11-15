import React from 'react';
import { useLoaderData } from 'react-router';

const ReviewDetail = () => {

const data = useLoaderData()
const review = data.result

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-6">
        <img
          src={review.photo}
          alt={review.foodName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent inline-block">{review.foodName}</h1>
        <div className="flex flex-wrap items-center text-gray-600 text-sm gap-4">
          <span className="font-medium">Restaurant:</span> <span>{review.restaurantName}</span>
          <span className="font-medium">Location:</span> <span>{review.restaurantLocation}</span>
          <span className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-400 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
            {review.rating}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {review.description}
        </p>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Reviewer</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">{review.reviewerName}</p>
            <p className="text-gray-500 text-sm">{review.date}</p>
          </div>
          <div className="flex items-center">         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
