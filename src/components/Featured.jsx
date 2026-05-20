import FacilityCard from "./FacilityCard";
import Link from "next/link";
const facilities = [
  {
    _id: "1",
    name: "Green Field Football Turf",
    facility_type: "Football",
    image: "/assets/football.jpg",
    location: "Mirpur, Dhaka",
    price_per_hour: 800,
    capacity: 22,
    available_slots: "6:00 AM - 11:00 PM",
  },
  {
    _id: "2",
    name: "Smash Badminton Arena",
    facility_type: "Badminton",
    image: "/assets/batminton.jpg",
    location: "Dhanmondi, Dhaka",
    price_per_hour: 400,
    capacity: 4,
    available_slots: "7:00 AM - 10:00 PM",
  },
  {
    _id: "3",
    name: "AquaBlue Swimming Pool",
    facility_type: "Swimming",
    image: "/assets/pool.jpg",
    location: "Gulshan, Dhaka",
    price_per_hour: 600,
    capacity: 30,
    available_slots: "6:00 AM - 8:00 PM",
  },
  {
    _id: "4",
    name: "Ace Tennis Court",
    facility_type: "Tennis",
    image: "/assets/tennis.jpg",
    location: "Banani, Dhaka",
    price_per_hour: 700,
    capacity: 4,
    available_slots: "6:00 AM - 9:00 PM",
  },
  {
    _id: "5",
    name: "Champion Football Ground",
    facility_type: "Football",
    image: "/assets/football.jpg",
    location: "Uttara, Dhaka",
    price_per_hour: 1000,
    capacity: 22,
    available_slots: "5:00 AM - 11:00 PM",
  },
  {
    _id: "6",
    name: "Pro Badminton Club",
    facility_type: "Badminton",
    image: "/assets/batminton.jpg",
    location: "Mohammadpur, Dhaka",
    price_per_hour: 350,
    capacity: 4,
    available_slots: "7:00 AM - 11:00 PM",
  },
];

const Featured = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold">Featured Facilities</h2>
          <p className="text-zinc-400 mt-1">
            Handpicked sports facilities for you
          </p>
        </div>
        <Link
          href="/facilities"
          className="border border-[#22C55E] hover:border-[#16A34A]  text-[#22C55E] hover:text-[#16A34A]  text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
