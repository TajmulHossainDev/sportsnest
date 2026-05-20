import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A]  border-t text-white px-6 md:px-16 py-16 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="flex items-center gap-2">
              <div className=" p-2 rounded-lg">
                <Image
                  src={logo}
                  width={150}
                  height={100}
                  alt="logo"
                  className="rounded-xl"
                ></Image>
              </div>
            </Link>
          </div>
          <p className="max-w-sm text-sm leading-relaxed">
            Your go-to platform for booking sports facilities — football turfs,
            badminton courts, swimming lanes and more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-sm font-semibold mb-3 tracking-widest uppercase">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Get updates on new facilities and exclusive offers.
            </p>
            <div className="flex items-center bg-zinc-800 border border-zinc-700 px-4 py-3 rounded-lg">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-zinc-500"
              />
              <span className="text-[#22C55E] text-lg">↗</span>
            </div>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold mb-3 tracking-widest uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  All Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/my-bookings"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  href="/add-facility"
                  className="hover:text-[#16A34A] transition-colors"
                >
                  Add Facility
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold mb-3 tracking-widest uppercase">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#16A34A] cursor-pointer transition-colors">
                Help Center
              </li>
              <li className="hover:text-[#16A34A] cursor-pointer transition-colors">
                Terms of Service
              </li>
              <li className="hover:text-[#16A34A] cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-[#16A34A] cursor-pointer transition-colors">
                Refund Policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold mb-3 tracking-widest uppercase">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <IoCall /> +880 1712 000888
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> support@sportnest.com
              </li>
              <li className="flex items-center gap-2">
                <IoLocation /> Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2026 SportNest. All rights reserved.</p>
          <div className="flex gap-5">
            <FaTwitter className="hover:text-[#16A34A] cursor-pointer text-lg transition-colors" />
            <FaInstagram className="hover:text-[#16A34A] cursor-pointer text-lg transition-colors" />
            <FaLinkedin className="hover:text-[#16A34A] cursor-pointer text-lg transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
