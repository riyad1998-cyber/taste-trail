import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import { AuthContext } from '../Provider/AuthProvider';

const AllReview = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReviews, setFilteredReviews] = useState(Array.isArray(data) ? data : []);

  useEffect(() => {
    if (user?.email) {
      const stored = localStorage.getItem(`myFavourites_${user.email}`);
      setFavorites(stored ? JSON.parse(stored) : []);
    }
  }, [user]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const filtered = data.filter(item =>
        item.foodName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredReviews(filtered);
    }
  }, [searchTerm, data]);

  const handleToggleFavorite = (item, fav) => {
    if (!user?.email) return;
    let updated;
    if (fav) {
      updated = [...favorites, item];
    } else {
      updated = favorites.filter(favItem => favItem._id !== item._id);
    }
    setFavorites(updated);
    localStorage.setItem(`myFavourites_${user.email}`, JSON.stringify(updated));
  };

  return (
    <div className='mt-4 max-w-[1700px] mx-auto px-4'>
      <div className='flex flex-col items-center mb-6'>
        <h1 className='text-3xl font-bold bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent'>
          All Reviews
        </h1>
        <p className='text-xl text-gray-600'>Explore Your Taste Experience</p>
      </div>

      <div className='flex justify-center mb-6'>
        <input
          type='text'
          placeholder='Search by food name...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-pink-400'
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {Array.isArray(filteredReviews) && filteredReviews.map(item => (
          <ReviewCard
            key={item._id}
            item={item}
            onViewDetails={(id) => console.log("View:", id)}
            onToggleFavorite={(id, fav) => handleToggleFavorite(item, fav)}
            isFav={favorites.some(favItem => favItem._id === item._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllReview;
