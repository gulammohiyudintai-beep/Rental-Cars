import { MapPin } from "lucide-react";

const LOCATIONS = [
  {
    name: "New York",
    image:
      "https://media.istockphoto.com/id/521714583/photo/new-york-city-midtown-with-empire-state-building-at-sunset.jpg?s=612x612&w=0&k=20&c=paLoZfZnaZSfaBK_DxLls_Ii0hD3r2PBKSlS6M1QxVU=",
  },
  {
    name: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=400&q=80",
  },
  {
    name: "Miami",
    image:
      "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=400&q=80",
  },
  {
    name: "Chicago",
    image:
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=400&q=80",
  },
  {
    name: "Las Vegas",
    image:
      "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=400&q=80",
  },
];

export default function PopularLocations() {
  return (
    <section id="locations" className="max-w-7xl mx-auto px-4 py-10 scroll-mt-24">
      <p className="text-center text-amber-500 text-xs font-semibold tracking-wide mb-1">
        POPULAR LOCATIONS
      </p>
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
        Pick-up &amp; Drop-off Across Top Cities
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.name}
            className="relative rounded-xl overflow-hidden h-44 group cursor-pointer"
          >
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-sm font-medium">
              <MapPin className="w-4 h-4" />
              {loc.name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-2 border border-amber-400 text-amber-600 font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-amber-50 transition-colors">
          View All Locations
          <MapPin className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}