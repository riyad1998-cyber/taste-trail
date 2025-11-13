import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4b0082] via-[#6a5acd] to-[#1e3a8a] text-white mt-10">
      <div className="max-w-[1700px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <Link to="/" className="text-2xl font-extrabold mb-2">🍴 Taste<span className="text-yellow-300">Trail</span></Link>
          <p className="text-sm text-white/80">
            Connect with local food lovers, share reviews, and explore amazing flavors near you!
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-3 bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent">Quick Links</h2>
          <ul className="space-y-2 text-white/90">
            <li><Link className="hover:text-yellow-400 transition" to="/">Home</Link></li>
            <li><Link className="hover:text-yellow-400 transition" to="/reviews">All Reviews</Link></li>
            <li><Link className="hover:text-yellow-400 transition" to="/resturants">Resturants</Link></li>
            <li><Link className="hover:text-yellow-400 transition" to="/about">About Us</Link></li>
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
            <button className="bg-gradient-to-r from-purple-500  to-indigo-500 px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-500 transition hover:scale-100 hover:shadow-[0_0_20px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-95">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="bg-black/40 text-center py-4 mt-6 text-white/70 text-sm">
      <div className="bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent font-bold">
        &copy; {new Date().getFullYear()} TasteTrail All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
