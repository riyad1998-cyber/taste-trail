import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


import img1 from "../assets/ilya-mashkov-_qxbJUr9RqI-unsplash.jpg";
import img2 from "../assets/max-mota-N6BTNbaKZMo-unsplash.jpg";
import img3 from "../assets/radowan-nakif-rehan-gU6_KA8zCvM-unsplash.jpg";
import img4 from "../assets/sahal-hameed-Nq9KlQTTEbQ-unsplash.jpg";

const Slider = () => {
  const slides = [
    {
      img: img1,
      title: "Juicy Gourmet Burgers",
      subtitle: "Explore the hidden gems near you",
    },
    {
      img: img2,
      title: "Fresh & Flavorful Sea Food",
      subtitle: "Find top rated places to eat",
    },
    {
      img: img3,
      title: "Authentic Street Food Delights",
      subtitle: "Share and discover amazing recipes",
    },
    {
      img: img4,
      title: "Cheesy Pizza Heaven",
      subtitle: "Share and discover amazing recipes",
    },
  ];

  return (
    <section className="w-full h-[80vh] relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">

              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl font-bold">{slide.subtitle}</p>
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500  to-indigo-500 rounded-md font-semibold hover:bg-yellow-300 transition hover:scale-105 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)]
                                   hover:from-[#7b3ff2] hover:to-[#b17cff]
                                   active:scale-95">
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
