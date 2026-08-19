import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "David Johnson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Great experience! The car was clean, the process was smooth and the price was amazing.",
  },
  {
    name: "Sophia Martinez",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Booked a luxury car for my trip and it was absolutely perfect. Highly recommended!",
  },
  {
    name: "James Wilson",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    text: "Affordable prices for local rental and top-notch service. Will definitely rent again!",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <p className="text-center text-amber-500 text-xs font-semibold tracking-wide mb-1">
        TESTIMONIALS
      </p>
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
        Trusted by Thousands
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {REVIEWS.map((review) => (
          <div
            key={review.name}
            className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
          >
            <Quote className="absolute top-5 right-5 w-6 h-6 text-amber-200" />

            <div className="flex items-center gap-3 mb-3">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {review.name}
                </h4>
                <div className="flex gap-0.5 mt-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {REVIEWS.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === 0 ? "bg-amber-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}