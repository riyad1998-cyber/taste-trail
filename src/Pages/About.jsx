import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <section className="bg-gradient-to-r from-[#4b0082] via-[#6a5acd] to-[#1e3a8a] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-yellow-300">TasteTrail</span>
          </h1>
          <p className="text-lg md:text-xl">
            Discover the best places to eat, share your reviews, and join our
            community of food lovers. TasteTrail brings flavors to life!
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-700">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg">
              To make discovering great food simple and fun for everyone. We aim
              to connect food enthusiasts with authentic experiences and trusted
              reviews.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-700">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg">
              To become the most reliable platform for restaurant reviews and
              food exploration, inspiring people to try new flavors and support
              local businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <img
            src="https://i.ibb.co.com/gbwHb9sg/Adobe-Stock-106751253-1.webp"
            alt="Our story"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-700">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              TasteTrail started as a small blog to share our love for local
              cuisine. Over time, we built a community of food explorers who
              want to share honest reviews and discover new flavors.
            </p>
            <p className="text-gray-700 text-lg">
              Today, TasteTrail is more than a platform—it’s a journey for food
              lovers everywhere.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our Food Community
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Share your reviews, explore new restaurants, and become a part of
          TasteTrail today!
        </p>
        <a
          href="/auth/registration"
          className="inline-block px-6 py-3 rounded-full bg-yellow-300 text-purple-800 font-semibold text-lg hover:scale-105 transition-transform"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default About;
