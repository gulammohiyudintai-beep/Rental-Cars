import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    // 👉 Yahan real API call hoga jab backend ready ho
    // fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })

    setTimeout(() => {
      setSending(false);
      setSent(true);

      // 2 second success message dikhane ke baad Home pe redirect
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 1000);
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <p className="text-center text-amber-500 text-xs font-semibold tracking-wide mb-1">
        CONTACT US
      </p>
      <h1 className="text-center text-2xl font-bold text-gray-900 mb-4">
        We'd Love to Hear From You
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Questions about a booking, a car, or anything else? Reach out and
        our team will get back to you shortly.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact info */}
        <div>
          <h2 className="font-semibold text-gray-900 text-lg mb-4">
            Get in Touch
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>📞 +1 234 567 8900</li>
            <li>✉️ info@drivego.com</li>
            <li>📍 123 Drive Street, New York, USA</li>
            <li>🕐 Mon – Sun: 8:00 AM – 10:00 PM</li>
          </ul>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4"
        >
          {sent ? (
            <div className="text-center py-10">
              <p className="text-green-600 font-semibold mb-2">
                ✅ Message Sent!
              </p>
              <p className="text-sm text-gray-500">
                Taking you back to the homepage...
              </p>
            </div>
          ) : (
            <>
              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-amber-400 hover:bg-amber-500 disabled:opacity-60 text-[#0d1b2a] font-semibold py-3 rounded-lg transition-colors"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}