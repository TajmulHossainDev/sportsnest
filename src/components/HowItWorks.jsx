import { FaSearch, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaSearch className="text-3xl text-[#22C55E]" />,
    title: "Find a Facility",
    description:
      "Browse through our list of top-rated sports facilities near you. Filter by sport type, location or price.",
  },
  {
    id: "02",
    icon: <FaCalendarAlt className="text-3xl text-[#22C55E]" />,
    title: "Pick a Time Slot",
    description:
      "Choose your preferred date and available time slot. See real-time availability instantly.",
  },
  {
    id: "03",
    icon: <FaCheckCircle className="text-3xl text-[#22C55E]" />,
    title: "Confirm Booking",
    description:
      "Complete your booking in seconds. Get instant confirmation and manage it from your dashboard.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#0D1B2A] py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white">
            How It Works
          </h2>
          <p className="text-zinc-400 mt-2">
            Book your facility in just 3 simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 text-center hover:border-emerald-500/50 transition-colors"
            >
              <div className="text-zinc-700 text-6xl font-bold mb-4">
                {step.id}
              </div>
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;