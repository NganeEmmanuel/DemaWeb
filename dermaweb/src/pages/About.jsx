// src/pages/About.jsx
import React from "react";
import { FaMicroscope, FaUpload, FaBrain, FaChartLine } from "react-icons/fa";

export default function About() {
  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% 10%, rgba(15,63,145,0.08), transparent 10%), linear-gradient(180deg,var(--color-bg),var(--color-surface))",
        color: "var(--color-text)",
      }}
    >
      {/* Hero Section */}
      <section
        className="text-center py-20 shadow-md"
        style={{
          background:
            "linear-gradient(90deg,var(--color-primary),var(--color-primary-2))",
          color: "#fff",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About DermaAI</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Empowering dermatological care through Artificial Intelligence and intuitive technology.
        </p>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            What is DermaAI?
          </h2>
          <p
            className="leading-relaxed mb-4"
            style={{ color: "var(--color-text)" }}
          >
            DermaAI is an intelligent dermatological analysis platform that leverages
            deep learning to detect, classify, and provide insights into skin lesions.
            Designed for both researchers and clinicians, it includes a mobile app for
            real-time diagnosis and a CLI tool for AI experimentation and batch processing.
          </p>
          <p
            className="leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Built with precision and privacy in mind, DermaAI combines advanced neural networks
            with a user-friendly interface to support faster, more reliable medical decisions.
          </p>
        </div>

        {/* Right Image Placeholder */}
        <div className="flex justify-center">
          <div
            className="w-80 h-80 rounded-2xl shadow-xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg,var(--color-primary-2),var(--color-primary))",
            }}
          >
            <FaMicroscope className="text-white text-7xl" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="py-20 transition-all duration-500"
        style={{
          background: "var(--color-surface)",
          color: "var(--color-text)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-semibold mb-12"
            style={{ color: "var(--color-primary)" }}
          >
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <FaUpload className="text-5xl mb-4" style={{ color: "var(--color-primary)" }} />,
                title: "Upload Image",
                desc: "Users upload a clear image of the affected skin region.",
              },
              {
                icon: <FaBrain className="text-5xl mb-4" style={{ color: "var(--color-primary)" }} />,
                title: "AI Analysis",
                desc: "The model processes the image using deep convolutional layers.",
              },
              {
                icon: <FaChartLine className="text-5xl mb-4" style={{ color: "var(--color-primary)" }} />,
                title: "Detection & Classification",
                desc: "Lesions are detected, analyzed, and classified into skin conditions.",
              },
              {
                icon: <FaMicroscope className="text-5xl mb-4" style={{ color: "var(--color-primary)" }} />,
                title: "Insights for Care",
                desc: "The system provides useful insights for diagnosis and follow-up.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex flex-col items-center text-center">
                  {step.icon}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Snapshot */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2
          className="text-3xl font-semibold mb-6"
          style={{ color: "var(--color-primary)" }}
        >
          System Architecture Overview
        </h2>
        <p
          className="max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          The DermaAI system integrates a trained CNN model with a secure backend API
          for predictions, and user-facing UIs for ease of access. Both mobile and CLI
          interfaces interact with the same backend, ensuring consistent results.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {["Input Image", "Preprocessing", "Model Inference", "Prediction Result"].map(
            (step, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full font-semibold shadow transition-colors duration-300"
                style={{
                  background: "linear-gradient(90deg,var(--color-primary-2),var(--color-primary))",
                  color: "#fff",
                }}
              >
                {step}
              </div>
            )
          )}
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="text-center py-20"
        style={{
          background:
            "linear-gradient(90deg,var(--color-primary),var(--color-primary-2))",
          color: "#fff",
        }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          To bridge the gap between artificial intelligence and dermatological care,
          making accurate, accessible, and ethical skin health diagnostics available
          to everyone — from doctors to individuals worldwide.
        </p>
      </section>
    </div>
  );
}
