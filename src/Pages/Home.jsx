import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import ReviewCard from "../Components/ReviewCard";
import { Link } from "react-router";  // already imported

const Home = () => {
  const [topReviews, setTopReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.rating - a.rating);
        setTopReviews(sorted.slice(0, 6));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Slider />
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="mt-10 text-center">
          <h2 className='text-2xl font-bold inline-block bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent'>
            Top Rated Foods
          </h2>
          <p className="text-gray-600 text-sm ">
            Explore the highest-rated dishes from our food community!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {topReviews.map((item) => (
            <ReviewCard key={item._id} item={item} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/reviews"
            className="px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-100 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-95 text-white rounded-xl"
          >
            Show All
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
