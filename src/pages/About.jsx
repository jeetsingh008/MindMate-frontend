import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-4xl font-extrabold text-blue-700">
            About Mental Health Status Detection
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering individuals to take charge of their mental well-being with AI-driven insights.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="h-96 w-80 pl-6 mt-5">
            <img
              src="./MH-pic.png"
              alt="Mental Health"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At **Mental Health Status Detection**, we aim to make mental health
              care more accessible and proactive. By leveraging cutting-edge
              AI technology, our platform detects emotional distress patterns
              and provides personalized recommendations for therapy and
              self-care.
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <span className="text-blue-500 text-2xl mr-3">✓</span>
                <span className="text-gray-700 text-lg">
                  Detect early signs of mental distress.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 text-2xl mr-3">✓</span>
                <span className="text-gray-700 text-lg">
                  Provide actionable insights for well-being.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 text-2xl mr-3">✓</span>
                <span className="text-gray-700 text-lg">
                  Empower individuals to seek help confidently.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Goal Section */}
        <motion.div
          className="mt-16 bg-white shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
            Our Goal
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Our goal is to break the stigma around mental health by providing
            a safe, user-friendly platform for individuals to understand and
            address their mental state. With AI-powered insights and
            compassionate resources, we’re here to create a world where mental
            health is prioritized and accessible to everyone.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-200 hover:shadow-xl">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
