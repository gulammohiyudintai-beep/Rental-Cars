import { ShieldCheck, RefreshCcw, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "No Hidden Charges",
    desc: "Transparent pricing",
  },
  {
    icon: RefreshCcw,
    title: "Flexible Cancellation",
    desc: "Cancel anytime",
  },
  {
    icon: Zap,
    title: "Quick Response",
    desc: "Fast confirmation",
  },
];

export default function CTABanner() {
  return (
    <section id="offers" className="max-w-7xl mx-auto px-4 py-10 scroll-mt-24">
      <div className="relative rounded-2xl overflow-hidden bg-[#0d1b2a] grid md:grid-cols-2 items-center">
        {/* Text side */}
        <div className="px-8 py-10 md:py-14 z-10">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
            Ready to Hit the Road?
          </h2>
          <p className="text-white/60 text-sm mb-6">
            Choose your car and enjoy the journey with comfort and style.
          </p>

          <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#0d1b2a] font-semibold text-sm px-6 py-3 rounded-lg mb-8 transition-colors">
            Book Your Car →
          </button>

          <div className="grid grid-cols-3 gap-4">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title}>
                  <Icon className="w-5 h-5 text-amber-400 mb-2" strokeWidth={1.5} />
                  <h4 className="text-white text-xs font-semibold mb-0.5">
                    {f.title}
                  </h4>
                  <p className="text-white/50 text-xs">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image side */}
        <div className="relative h-56 md:h-full">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
            alt="Rental car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a] via-transparent to-transparent md:bg-gradient-to-r md:from-[#0d1b2a] md:via-[#0d1b2a]/10 md:to-transparent" />
        </div>
      </div>
    </section>
  );
}