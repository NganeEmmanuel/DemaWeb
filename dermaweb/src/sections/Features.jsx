import React from "react";
import { FaShieldAlt, FaUserMd, FaLock, FaRobot } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot className="w-12 h-12 text-primary" />,
    title: "AI Diagnosis",
    description:
      "Advanced AI model that classifies and detects skin lesions with exceptional accuracy.",
  },
  {
    icon: <FaUserMd className="w-12 h-12 text-primary" />,
    title: "Doctor Assistance",
    description:
      "Designed to assist dermatologists with quick, image-based diagnostic insights.",
  },
  {
    icon: <FaLock className="w-12 h-12 text-primary" />,
    title: "Privacy First",
    description:
      "Your data is protected using privacy-respecting local processing.",
  },
  {
    icon: <FaShieldAlt className="w-12 h-12 text-primary" />,
    title: "Reliable Performance",
    description:
      "Optimized models ensure accurate and consistent results across diverse skin tones.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Key Features of DermaAI
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
