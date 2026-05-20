import { FaShieldAlt, FaClock, FaMoneyBillWave, FaStar } from "react-icons/fa";
const features = [
  {
    icon: <FaShieldAlt className="text-2xl text-[#22C55E]" />,
    title: "100% Secure Booking",
    description:
      "Your bookings and personal data are fully protected. We use industry-standard security.",
  },
  {
    icon: <FaClock className="text-2xl text-[#22C55E]" />,
    title: "24/7 Availability",
    description:
      "Book any time of the day or night. Our platform is always available for you.",
  },
  {
    icon: <FaMoneyBillWave className="text-2xl text-[#22C55E]" />,
    title: "Best Price Guarantee",
    description:
      "Get the best rates for top facilities. No hidden charges, no surprises.",
  },
  {
    icon: <FaStar className="text-2xl text-[#22C55E]" />,
    title: "Top Rated Facilities",
    description:
      "All facilities are verified and rated by real users. Only the best make it here.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-[#0D1B2A]">Why Choose SportNest</h2>
        <p className="text-zinc-400 mt-2">
          We make sports facility booking simple, fast and reliable
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-start gap-5 bg-[#0D1B2A] border border-zinc-800 rounded-2xl p-6 hover:border-green-500/50 transition-colors"
          >
            <div className="bg-green-500/10 p-4 rounded-xl shrink-0">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WhyChooseUs;
