import React from 'react';
import pic1 from "../assets/unnamed (1).webp"
import pic3 from "../assets/unnamed (2).webp"
import pic2 from "../assets/DSC03804.webp"
import pic4 from "../assets/36.webp"
import pic5 from "../assets/2021-06-20.webp"
import pic6 from "../assets/Image 08.webp"
import pic7 from "../assets/unnamed (3).webp"
import pic8 from "../assets/unnamed (4).webp"
import pic9 from "../assets/unnamed (5).webp"

const Resturant = () => {
  return (
    <div className="max-w-[1700px] mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Top Rated Restaurants
      </h1>
      <p className="text-center text-gray-500 mb-12">
        Explore your favorite restaurants and their top dishes!
      </p>

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
              <span className="font-medium">5</span>
            </div>
            <p className="text-gray-600 mb-2">Location: 1 Minto Rd, Dhaka 1000(inside inter continental)</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Aquadeck is a premier destination for refreshing beverages and light bites, offering a vibrant, modern atmosphere perfect for friends, family, or casual hangouts.
            </p>
          </div>
        </div>
        {/* Restaurant Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src={pic3}
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Grandiose Restaurant</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.8</span>
            </div>
            <p className="text-gray-600 mb-2">Location: Dhaka Regency Hotel & Resort (Level 6, Dhaka 1229)</p>
            <p className="text-gray-700 text-sm leading-relaxed">
             Grandiose Restaurant is a luxurious dining experience where elegance meets exceptional cuisine. Renowned for its gourmet dishes, sophisticated ambiance, and impeccable service.
            </p>
          </div>
        </div>
        {/* Restaurant Card 4 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src={pic4}
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">The Amber Room</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.7</span>
            </div>
            <p className="text-gray-600 mb-2">Location: 1 Minto Rd, Dhaka 1000</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              The Amber Room is an elegant dining destination known for its artfully crafted dishes and warm, inviting ambiance. With a focus on fresh ingredients and exquisite flavors.
            </p>
          </div>
        </div>
        {/* Restaurant Card 5 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src={pic5}
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">ICCB Heritage Restaurant</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.9</span>
            </div>
            <p className="text-gray-600 mb-2">Location: 456 Another St, City</p>
            <p className="text-gray-700 text-sm leading-relaxed">
             ICCB Heritage Restaurant celebrates traditional flavors with a modern twist, offering guests a cultural and culinary journey through its thoughtfully crafted menu.
            </p>
          </div>
        </div>
        {/* Restaurant Card 6 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src={pic6}
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Lake Terrace</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.6</span>
            </div>
            <p className="text-gray-600 mb-2">Location: House # 25/E, Lake Dr Rd, Dhaka 1230</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lake Terrace is a scenic dining spot offering breathtaking lake views alongside a menu of fresh, flavorful dishes. Perfect for relaxing lunches, romantic dinners.
            </p>
          </div>
        </div>
        {/* Restaurant Card 7 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src={pic7}
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Bistro-E</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.7</span>
            </div>
            <p className="text-gray-600 mb-2">Location: 1st Floor NE, 12 Madani Ave, Dhaka 1212</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Bistro-E is a chic and contemporary eatery that blends modern flavors with a cozy, inviting atmosphere. Known for its creative dishes, artisanal drinks, and stylish ambiance.
            </p>
          </div>
        </div>
        {/* Restaurant Card 8 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src={pic8}
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Grill On The Skyline</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.8</span>
            </div>
            <p className="text-gray-600 mb-2">Location: Regency Hotel & Resort, Dhaka 1229</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Perfect for romantic evenings, special celebrations, or casual hangouts, it combines a vibrant atmosphere with exceptional flavors, making every visit truly memorable.
            </p>
          </div>
        </div>
        {/* Restaurant Card 9 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src={pic9}
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
Breeze Restaurant</h2>
            <div className="flex items-center text-yellow-400 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.382-2.455a1 1 0 00-1.176 0l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              <span className="font-medium">4.7</span>
            </div>
            <p className="text-gray-600 mb-2">Location: House# 1/C, 1/D, Road# 16, Dhaka 1229</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Breeze Restaurant is a relaxing dining retreat where fresh, flavorful cuisine meets a serene atmosphere. Ideal for casual lunches, family gatherings, or evening dinners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resturant;
