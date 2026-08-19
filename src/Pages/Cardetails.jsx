import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_URL = "/cars.json";

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cars");
        return res.json();
      })
      .then((data) => {
        const all = [...data.local, ...data.expensive];
        const found = all.find((c) => String(c.id) === id);
        if (!found) throw new Error("Car not found");
        setCar(found);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  function handleBooking(e) {
    e.preventDefault();
    setBooked(true);
  }

  if (loading) {
    return <p className="text-center py-16 text-gray-500">Loading car...</p>;
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500 mb-4">{error}</p>
        <Link to="/cars" className="text-amber-600 font-medium hover:underline">
          ← Back to all cars
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <Link
        to="/cars"
        className="text-sm text-gray-500 hover:text-gray-800 mb-6 inline-block"
      >
        ← Back to all cars
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Car info */}
        <div>
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-64 object-cover rounded-2xl mb-5"
          />
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            {car.name}
          </h1>
          <p className="text-amber-600 font-semibold text-lg mb-4">
            ${car.price}
            <span className="text-sm text-gray-500 font-normal">/day</span>
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>👤 {car.seats} Seats</span>
            <span>⚙️ {car.transmission}</span>
            <span>⛽ {car.fuel}</span>
          </div>
        </div>

        {/* Booking form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 text-lg mb-4">
            Book This Car
          </h2>

          {booked ? (
            <div className="text-center py-10">
              <p className="text-green-600 font-semibold mb-2">
                🎉 Booking Confirmed!
              </p>
              <p className="text-sm text-gray-500">
                We'll contact you shortly with pickup details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400"
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-gray-600 block mb-1">
                    Pick-up Date
                  </label>
                  <input
                    required
                    type="date"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">
                    Drop-off Date
                  </label>
                  <input
                    required
                    type="date"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-[#0d1b2a] font-semibold py-3 rounded-lg transition-colors"
              >
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}