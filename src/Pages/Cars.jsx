import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "/cars.json";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cars");
        return res.json();
      })
      .then((data) => {
        setCars([...data.local, ...data.expensive]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-16 text-gray-500">Loading cars...</p>;
  }

  if (error) {
    return <p className="text-center py-16 text-red-500">Error: {error}</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <p className="text-center text-amber-500 text-xs font-semibold tracking-wide mb-1">
        ALL CARS
      </p>
      <h1 className="text-center text-2xl font-bold text-gray-900 mb-8">
        Browse Our Full Fleet
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col hover:shadow-md transition-shadow"
          >
            <Link to={`/cars/${car.id}`}>
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-36 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-gray-900">{car.name}</h3>
            </Link>
            <p className="text-sm text-gray-500 mb-3">
              ${car.price}
              <span className="text-xs">/day</span>
            </p>

            <div className="mt-auto flex flex-col gap-2">
              <Link
                to={`/cars/${car.id}`}
                className="bg-amber-400 hover:bg-amber-500 text-[#0d1b2a] text-sm font-semibold text-center py-2.5 rounded-lg transition-colors"
              >
                Book Now
              </Link>
              <Link
                to={`/cars/${car.id}`}
                className="text-amber-600 text-xs font-medium text-center hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}