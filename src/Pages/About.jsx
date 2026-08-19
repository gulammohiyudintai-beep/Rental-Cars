export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <p className="text-center text-amber-500 text-xs font-semibold tracking-wide mb-1">
        ABOUT US
      </p>
      <h1 className="text-center text-2xl font-bold text-gray-900 mb-4">
        Driving You Forward Since Day One
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        DriveGo connects you with the right car for every journey — from
        affordable daily drivers to premium luxury rides. Transparent
        pricing, easy booking, and support whenever you need it.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
          <p className="text-sm text-gray-600">
            Make car rental simple, transparent, and stress-free for every
            traveler.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Our Fleet</h3>
          <p className="text-sm text-gray-600">
            From budget-friendly local cars to premium luxury rides, we've
            got every journey covered.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Our Promise</h3>
          <p className="text-sm text-gray-600">
            No hidden charges, flexible cancellations, and support whenever
            you need it.
          </p>
        </div>
      </div>
    </section>
  );
}