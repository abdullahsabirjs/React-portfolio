import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Email is invalid";
    if (!form.message.trim()) errs.message = "Message cannot be empty";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }
  }

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
        <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
          Contact Me
        </span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 space-y-6"
      >
        {/* Name */}
        <div>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/60"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/60"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="6"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/60"
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button className="w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-red-600 to-yellow-500 shadow-md hover:scale-105 transition transform">
          Send Message
        </button>

        {/* Success Message */}
        {sent && (
          <p className="text-sm text-green-600 mt-2 text-center">
            ✅ Message sent (demo). I will connect this to an email service
            later.
          </p>
        )}
      </form>
    </section>
  );
}
