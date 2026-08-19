import { Car, Tag, CalendarCheck, Headset, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Car,
    title: "Wide Range of Cars",
    desc: "From economy to luxury, we have it all.",
  },
  {
    icon: Tag,
    title: "Best Price Guarantee",
    desc: "Get the best rates every time.",
  },
  {
    icon: CalendarCheck,
    title: "Easy & Fast Booking",
    desc: "Book your car in just a few clicks.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    desc: "We're here to help you anytime, anywhere.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    desc: "Your safety is our top priority.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-10">
      <div className="bg-[#0d1b2a] rounded-2xl px-6 py-8">
        <h2 className="text-center text-white font-semibold tracking-wide mb-8">
          WHY CHOOSE US?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center text-center px-2 ${
                  i !== 0 ? "md:border-l md:border-white/10" : ""
                }`}
              >
                <Icon className="w-8 h-8 text-amber-400 mb-3" strokeWidth={1.5} />
                <h3 className="text-white font-semibold text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}