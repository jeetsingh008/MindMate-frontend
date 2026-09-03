import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          <div className="flex justify-center items-center gap-2">
            <span className="h-12 w-12">
              <img src="./mh.png" alt="" />
            </span>{" "}
            MindMate
          </div>
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded-md"
          >
            Features
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded-md"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
