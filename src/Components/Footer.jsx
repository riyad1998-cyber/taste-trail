import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4b0082] via-[#6a5acd] to-[#1e3a8a] text-white mt-10">
      <div className="max-w-[1700px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h1 className="text-2xl font-extrabold mb-2">🍴 Taste<span className="text-yellow-300">Trail</span></h1>
          <p className="text-sm text-white/80">
            Connect with local food lovers, share reviews, and explore amazing flavors near you!
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-3 bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent">Quick Links</h2>
          <ul className="space-y-2 text-white/90">
            <li><Link className="hover:text-yellow-400 transition" to="/">Home</Link></li>
            <li><Link className="hover:text-yellow-400 transition" to="/reviews">All Reviews</Link></li>
            <li><Link className="hover:text-yellow-400 transition" to="/add-review">Add Review</Link></li>
            <li><Link className="hover:text-yellow-400 transition" to="/my-reviews">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-3 bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition"><Facebook size={24} /></a>
            <a href="#" className="hover:text-yellow-400 transition"><Instagram size={24} /></a>
            <a href="#" className="hover:text-yellow-400 transition"><Twitter size={24} /></a>
            <a href="#" className="hover:text-yellow-400 transition"><Youtube size={24} /></a>
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-3 bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent">Get the Latest Bites & Reviews!</h2>
          <p className="text-white/80 mb-2">Subscribe for latest food reviews!</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-2 rounded-l-md border-none outline-white text-white w-full"
            />
            <button className="bg-gradient-to-r from-purple-500  to-indigo-500 px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="bg-black/40 text-center py-4 mt-6 text-white/70 text-sm">
        &copy; {new Date().getFullYear()} FoodieConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
