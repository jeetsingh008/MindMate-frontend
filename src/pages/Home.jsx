import React, { useState } from "react";
import { motion } from "framer-motion";
import Therapy from "../components/Therapy";

function Home() {
  const [inputText, setInputText] = useState("");
  const [predictedStatus, setPredictedStatus] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();
      setPredictedStatus(data.predicted_status);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-8 flex flex-col items-center">
      {/* Main Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-blue-700  drop-shadow-lg mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Mental Health Status Detection
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-2xl text-blue-800 font-semibold mb-6 text-center mt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="bg-blue-200 p-2 rounded-lg">AI-Powered</span> Analysis for Your Mental Well-being
      </motion.h2>

      {/* Input Box */}
      <motion.input
        type="text"
        placeholder="Enter your mental state here..."
        value={inputText}
        onChange={handleInputChange}
        className="border-2 mt-6 border-blue-400 rounded-lg p-4 w-full max-w-md mb-6 shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Submit Button */}
      <motion.button
        onClick={handleSubmit}
        className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-200 hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Detect
      </motion.button>

      {/* Display Predicted Status */}
      {predictedStatus && (
        <motion.div
          className="mt-8 p-8 bg-white rounded-lg shadow-xl text-center w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-3xl font-bold text-blue-700 mb-4">
            Predicted Status:{" "}
            <span className="text-green-600">{predictedStatus}</span>
          </p>
          <Therapy disorderName={predictedStatus} />
        </motion.div>
      )}
    </div>
  );
}

export default Home;
