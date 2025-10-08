import React from "react";
import { FaMicroscope, FaUpload, FaBrain, FaChartLine } from "react-icons/fa";

export default function About() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About DermaAI</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Empowering dermatological care through Artificial Intelligence and intuitive technology.
        </p>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">What is DermaAI?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            DermaAI is an intelligent dermatological analysis platform that leverages
            deep learning to detect, classify, and provide insights into skin lesions.  
            Designed for both researchers and clinicians, it includes a mobile app for 
            real-time diagnosis and a CLI tool for AI experimentation and batch processing.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Built with precision and privacy in mind, DermaAI combines advanced neural networks
            with a user-friendly interface to support faster, more reliable medical decisions.
          </p>
        </div>

        {/* Right image placeholder */}
        <div className="flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-tr from-blue-200 to-blue-400 dark:from-blue-800 dark:to-blue-600 rounded-2xl shadow-lg flex items-center justify-center">
            <FaMicroscope className="text-white text-7xl" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <FaUpload className="text-5xl text-primary mb-4" />,
                title: "Upload Image",
                desc: "Users upload a clear image of the affected skin region.",
              },
              {
                icon: <FaBrain className="text-5xl text-primary mb-4" />,
                title: "AI Analysis",
                desc: "The model processes the image using deep convolutional layers.",
              },
              {
                icon: <FaChartLine className="text-5xl text-primary mb-4" />,
                title: "Detection & Classification",
                desc: "Lesions are detected, analyzed, and classified into skin conditions.",
              },
              {
                icon: <FaMicroscope className="text-5xl text-primary mb-4" />,
                title: "Insights for Care",
                desc: "The system provides useful insights for diagnosis and follow-up.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {step.icon}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Snapshot */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">System Architecture Overview</h2>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
          The DermaAI system integrates a trained CNN model with a secure backend API
          for predictions, and user-facing UIs for ease of access. Both mobile and CLI
          interfaces interact with the same backend, ensuring consistent results.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {["Input Image", "Preprocessing", "Model Inference", "Prediction Result"].map(
            (step, index) => (
              <div
                key={index}
                className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-6 py-3 rounded-full font-semibold shadow"
              >
                {step}
              </div>
            )
          )}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          To bridge the gap between artificial intelligence and dermatological care, 
          making accurate, accessible, and ethical skin health diagnostics available 
          to everyone — from doctors to individuals worldwide.
        </p>
      </section>
    </main>
  );
}
