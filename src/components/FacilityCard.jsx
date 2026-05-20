import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaClock, FaUsers } from "react-icons/fa";

const FacilityCard = ({ facility }) => {
  return (
    <div className="bg-[#0D1B2A] border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors">
      <div className="relative h-48 w-full">
        <Image
          src={facility.image}
          alt={facility.name}
          fill
          className="object-cover"
        />

        <div className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {facility.facility_type}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-2">{facility.name}</h3>

        <div className="flex items-center gap-2 text-zinc-400 text-sm mb-1">
          <FaMapMarkerAlt className="text-[#22C55E]" />
          <span>{facility.location}</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-400 text-sm mb-1">
          <FaClock className="text-[#22C55E]" />
          <span>{facility.available_slots}</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-400 text-sm mb-4">
          <FaUsers className="text-[#22C55E]" />
          <span>Capacity: {facility.capacity} people</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-[#22C55E] text-xl font-bold">
              ৳{facility.price_per_hour}
            </span>
            <span className="text-zinc-500 text-sm"> / hour</span>
          </div>

          <Link
            href={`/facilities/${facility._id}`}
            className="bg-[#22C55E] hover:bg-[#16A34A] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
