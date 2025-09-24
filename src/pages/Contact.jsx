import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "51813a83-0a10-4898-a9ed-4f549a7bd440");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false);

    if (res.success) {
      setSent(true);
      event.target.reset();
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-start">
      
      {/* Left: Contact Info */}
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-gray-900">
          <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-lg text-gray-700">
          Feel free to reach out via the form or directly through email/phone.
        </p>
        <div className="space-y-3 text-gray-800">
          <p>
            📧 <span className="font-semibold">mailk1abdullah892@gmail.com</span>
          </p>
          <p>
            📱 <span className="font-semibold">+92 312-6116557</span>
          </p>
        </div>
      </div>

      {/* Right: Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 space-y-6"
      >
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/60"
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/60"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            placeholder="Your message"
            rows="6"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/60"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-red-600 to-yellow-500 shadow-md hover:scale-105 transition transform"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Success Message */}
        {sent && (
          <p className="text-sm text-green-600 mt-2 text-center">
            ✅ Message sent successfully! I will reply soon.
          </p>
        )}
      </form>
    </section>
  );
}
