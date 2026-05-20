"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#0D1B2A] border-b px-5 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="text-[#FFFFFF] hover:text-[#16A34A] text-sm font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/facilities"
              className="text-[#FFFFFF] hover:text-[#16A34A] text-sm font-medium"
            >
              All Facilities
            </Link>
          </li>
          <li>
            <Link
              href="/my-bookings"
              className="text-[#FFFFFF] hover:text-[#16A34A] text-sm font-medium"
            >
              My Bookings
            </Link>
          </li>
          <li>
            <Link
              href="/add-facility"
              className="text-[#FFFFFF] hover:text-[#16A34A] text-sm font-medium"
            >
              Add Facility
            </Link>
          </li>
          <li>
            <Link
              href="/manage-facilities"
              className="text-[#FFFFFF] hover:text-[#16A34A] text-sm font-medium"
            >
              Manage Facilities
            </Link>
          </li>
        </ul>
        <Link
          href="/login"
          className="bg-[#22C55E] hover:bg-[#16A34A] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
