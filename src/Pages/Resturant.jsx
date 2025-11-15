import React from 'react';
import pic1 from "../assets/unnamed (1).webp"
import pic2 from "../assets/DSC03804.webp"


const Resturant = () => {
  return (
    <div className="max-w-[1700px] mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Top Rated Restaurants
      </h1>
      <p className="text-center text-gray-500 mb-12">
        Explore your favorite restaurants and their top dishes!
      </p>

      {/* Restaurant Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/*  Restaurant Card 1*/}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src={pic1}
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Green & Pepper</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.7</span>
            </div>
            <p className="text-gray-600 mb-2">Location: House: 19, Rd 95, Dhaka 1212</p>
            <p className="text-gray-700 text-sm leading-relaxed">
            Green & Pepper is a contemporary dining destination that perfectly blends fresh, locally-sourced ingredients with innovative culinary techniques. 
            </p>
          </div>
        </div>

        {/* Restaurant Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src={pic2}
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Aquadeck</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.5</span>
            </div>
            <p className="text-gray-600 mb-2">Location: 1 Minto Rd, Dhaka 1000(inside inter continental)</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Aquadeck is a premier destination for refreshing beverages and light bites, offering a vibrant, modern atmosphere perfect for friends, family, or casual hangouts.
            </p>
          </div>
        </div>
        {/* Restaurant Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Restaurant Name</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.5</span>
            </div>
            <p className="text-gray-600 mb-2">Location: 456 Another St, City</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non lectus sit amet quam fermentum pretium.
            </p>
          </div>
        </div>
        {/* Restaurant Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Restaurant Name</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.5</span>
            </div>
            <p className="text-gray-600 mb-2">Location: 456 Another St, City</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non lectus sit amet quam fermentum pretium.
            </p>
          </div>
        </div>
        {/* Restaurant Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Restaurant Name</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.5</span>
            </div>
            <p className="text-gray-600 mb-2">Location: 456 Another St, City</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non lectus sit amet quam fermentum pretium.
            </p>
          </div>
        </div>
        {/* Restaurant Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Restaurant Name</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.5</span>
            </div>
            <p className="text-gray-600 mb-2">Location: 456 Another St, City</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non lectus sit amet quam fermentum pretium.
            </p>
          </div>
        </div>
        {/* Restaurant Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Restaurant Name</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.5</span>
            </div>
            <p className="text-gray-600 mb-2">Location: 456 Another St, City</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non lectus sit amet quam fermentum pretium.
            </p>
          </div>
        </div>
        {/* Restaurant Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Restaurant Name</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.5</span>
            </div>
            <p className="text-gray-600 mb-2">Location: 456 Another St, City</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non lectus sit amet quam fermentum pretium.
            </p>
          </div>
        </div>
        {/* Restaurant Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Restaurant Name</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.5</span>
            </div>
            <p className="text-gray-600 mb-2">Location: 456 Another St, City</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non lectus sit amet quam fermentum pretium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resturant;
