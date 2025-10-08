// src/pages/Contact.jsx
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      return toast.error("Please fill out all fields.");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email address.");
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% 10%, rgba(15,63,145,0.1), transparent 10%), linear-gradient(180deg,var(--color-bg),var(--color-surface))",
        color: "var(--color-text)",
      }}
    >
      <Toaster position="top-right" />

      {/* Header */}
      <section
        className="text-center py-16 shadow-md"
        style={{
          background:
            "linear-gradient(90deg,var(--color-primary),var(--color-primary-2))",
          color: "#fff",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch with DermaAI
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Whether you have questions, feedback, or partnership ideas, we’re here to help.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Form */}
        <div
          className="rounded-2xl shadow-xl p-8 border"
          style={{
            background: "var(--color-surface)",
            borderColor: "rgba(0,0,0,0.1)",
          }}
        >
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                borderColor: "rgba(0,0,0,0.2)",
                focusRingColor: "var(--color-primary)",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                borderColor: "rgba(0,0,0,0.2)",
              }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                borderColor: "rgba(0,0,0,0.2)",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                borderColor: "rgba(0,0,0,0.2)",
              }}
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-60"
              style={{
                background:
                  "linear-gradient(90deg,var(--color-primary),var(--color-primary-2))",
                color: "#fff",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Info Card */}
        <div
          className="flex flex-col justify-center rounded-2xl p-8 shadow-xl border transition-all duration-300"
          style={{
            background: "var(--color-surface)",
            borderColor: "rgba(0,0,0,0.1)",
          }}
        >
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            Contact Information
          </h2>
          <p className="mb-6" style={{ color: "var(--muted)" }}>
            Reach us directly via email, phone, or connect with us on our platforms.
          </p>

          <div className="space-y-3 text-[var(--color-text)]">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[var(--color-primary)]" />
              <span>support@dermaai.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[var(--color-primary)]" />
              <span>+237 6 78 45 12 34</span>
            </div>
          </div>

          <div className="flex gap-5 mt-8 text-2xl">
            <a
              href="#"
              className="transition-colors hover:opacity-80"
              style={{ color: "var(--color-primary)" }}
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="transition-colors hover:opacity-80"
              style={{ color: "var(--color-primary)" }}
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="transition-colors hover:opacity-80"
              style={{ color: "var(--color-primary)" }}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
