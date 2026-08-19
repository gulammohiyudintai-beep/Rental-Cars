import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 👉 Jab real backend ready ho jaye, sirf ye URL badal dena
// example: "https://your-api.com/api/cars"
const API_URL = "/cars.json";

function CarCard({ car, theme }) {
  const isLocal = theme === "local";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-semibold text-gray-900 text-lg truncate">
          {car.name}
        </h3>
        <span className="font-bold text-gray-900 text-lg whitespace-nowrap shrink-0">
          ${car.price}
          <span className="text-sm font-normal text-gray-500">/day</span>
        </span>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
        <span className="flex items-center gap-1">👤 {car.seats}</span>
        <span className="flex items-center gap-1">⚙️ {car.transmission}</span>
        <span className="flex items-center gap-1">⛽ {car.fuel}</span>
      </div>

      <Link
        to={`/cars/${car.id}`}
        className={`mt-auto w-full text-center py-3 rounded-lg text-base font-medium transition-colors ${
          isLocal
            ? "bg-green-100 text-green-700 hover:bg-green-200"
            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
        }`}
      >
        Book Now
      </Link>
    </div>
  );
}

export default function CarsSection() {
  const [cars, setCars] = useState({ local: [], expensive: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cars");
        return res.json();
      })
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading cars...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">Error: {error}</p>;
  }

  return (
    <section id="cars-section" className="max-w-7xl mx-auto px-4 py-10">
      <p className="text-center text-orange-500 text-xs font-semibold tracking-wide mb-1">
        CHOOSE YOUR RIDE
      </p>
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
        Local &amp; Expensive Cars
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Local cars */}
        <div id="local-rental" className="bg-green-50 rounded-2xl p-5 scroll-mt-24">
          <h3 className="text-green-700 font-semibold text-sm mb-4">
            LOCAL CARS – AFFORDABLE &amp; RELIABLE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {cars.local.slice(0, 3).map((car) => (
              <CarCard key={car.id} car={car} theme="local" />
            ))}
          </div>
          <Link
            to="/cars"
            className="block text-center text-green-700 text-sm font-medium mt-4 hover:underline"
          >
            View More Local Cars →
          </Link>
        </div>

        {/* Expensive cars */}
        <div id="luxury-cars" className="bg-purple-50 rounded-2xl p-5 scroll-mt-24">
          <h3 className="text-purple-700 font-semibold text-sm mb-4">
            EXPENSIVE CARS – LUXURY &amp; PERFORMANCE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {cars.expensive.slice(0, 3).map((car) => (
              <CarCard key={car.id} car={car} theme="expensive" />
            ))}
          </div>
          <Link
            to="/cars"
            className="block text-center text-purple-700 text-sm font-medium mt-4 hover:underline"
          >
            View More Luxury Cars →
          </Link>
        </div>
      </div>
    </section>
  );
}