import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-amber-500 text-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">

        <div>
          <h1 className="text-3xl text-amber-500 font-serif">
            Manik
          </h1>

          <p className="text-[11px] tracking-[4px] text-gray-300">
            CATERERS
          </p>
        </div>

        <div className="border-l border-amber-500 pl-4">
          <h3 className="text-sm font-semibold text-amber-500 mb-2">
            QUICK LINKS
          </h3>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-300">
            <Link to="/" className="hover:text-amber-500 transition">
              Home
            </Link>

            <Link to="/menu" className="hover:text-amber-500 transition">
              Menu
            </Link>

            <Link to="/about" className="hover:text-amber-500 transition">
              About
            </Link>

            <Link to="/gallery" className="hover:text-amber-500 transition">
              Gallery
            </Link>

            <Link to="/services" className="hover:text-amber-500 transition">
              Services
            </Link>

            <Link to="/contact" className="hover:text-amber-500 transition">
              Contact
            </Link>
          </div>
        </div>

        <div className="border-l border-amber-500 pl-4">
          <h3 className="text-sm font-semibold text-amber-500 mb-2">
            SERVICES
          </h3>

          <div className="space-y-1 text-xs text-gray-300">
            <p>Wedding Catering</p>
            <p>Corporate Events</p>
            <p>Private Parties</p>
            <p>Birthday Events</p>
          </div>
        </div>

        <div className="border-l border-amber-500 pl-4">
          <h3 className="text-sm font-semibold text-amber-500 mb-2">
            CONTACT US
          </h3>

          <div className="space-y-1 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <Phone size={12} className="text-amber-500" />
              <span>+91 7876167162</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={12} className="text-amber-500" />
              <span>info@manikcaterers.com</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-amber-500" />
              <span>Himachal Pradesh, India</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Clock3 size={12} className="text-amber-500" />
              <span>Mon-Sun | 7 AM - 12 AM</span>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-amber-500 mt-4 pt-3 text-center text-[10px] text-gray-400">
        © 2025 Manik Caterers. All Rights Reserved.
      </div>
    </footer>
  );
}