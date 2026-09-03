import React from "react";

function Features() {
  const features = [
    "AI-powered mental health status detection.",
    "Personalized therapy suggestions.",
    "Interactive and user-friendly design.",
    "Secure and private data handling.",
  ];

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">
        Features of MindMate
      </h2>
      <ul className="space-y-4 text-lg text-blue-800">
        {features.map((feature, index) => (
          <li
            key={index}
            className="bg-blue-100 px-4 py-2 rounded-lg shadow-md hover:bg-blue-200 transition"
          >
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
