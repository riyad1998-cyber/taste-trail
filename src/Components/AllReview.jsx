import React from 'react';
import { useLoaderData } from 'react-router';
import ReviewCard from './ReviewCard';

const AllReview = () => {
  const data = useLoaderData(); 
  console.log(data);

  return (
    <div className='mt-4 max-w-[1700px] mx-auto px-4'>
      <div className='flex flex-col items-center mb-6'>
        <h1 className='text-2xl font-bold bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent'>
          All Reviews
        </h1>
        <p className='text-xl text-gray-600'>
          Explore Your Taste Experience
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data?.map((item) => (
          <ReviewCard
            key={item._id}
            item={item}
            onViewDetails={(id) => console.log("View:", id)}
            onToggleFavorite={(id, fav) => console.log("Fav:", id, fav)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllReview;
