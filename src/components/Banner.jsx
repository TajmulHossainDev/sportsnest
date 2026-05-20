import Link from "next/link";
import { IoFootballOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { MdOutlineSportsHandball } from "react-icons/md";
import { MdOutlineSportsTennis } from "react-icons/md";

const Banner = () => {
  return (
    <section className="relative bg-[#0D1B2A] overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 py-24 md:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-[#16A34A] text-sm font-medium px-4 py-2 rounded-full mb-6">
            <IoFootballOutline className="text-xs" />
            Bangladesh&apos;s #1 Sports Booking Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Book Your <span className="text-[#16A34A]">Dream Court</span>{" "}
            Instantly
          </h1>

          <p className="text-white text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Explore top-rated football turfs, badminton courts, swimming lanes
            and tennis courts near you. Reserve in seconds.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/facilities"
              className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Explore Facilities
              <FaArrowRight />
            </Link>

            <Link
              href="/login"
              className="flex items-center gap-2 border border-white hover:border-[#16A34A] text-white hover:text-[#16A34A] font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-14">
            <p className="text-zinc-300 text-sm uppercase tracking-widest">
              Available Sports
            </p>

            <div className="flex items-center gap-2 text-zinc-300">
              <IoFootballOutline className="text-[#22C55E] text-xl" />
              <span className="text-sm">Football</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-300">
              <MdOutlineSportsBaseball className="text-[#22C55E] text-xl" />
              <span className="text-sm">Badminton</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-300">
              <MdOutlineSportsHandball className="text-[#22C55E] text-xl" />
              <span className="text-sm">Swimming</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-300">
              <MdOutlineSportsTennis className="text-[#22C55E] text-xl" />
              <span className="text-sm">Tennis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
