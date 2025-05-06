import React from 'react';
import { Link } from 'react-router-dom';
export default function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="space-x-4">
        <Link to="/ide">
        <button className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          IDE
        </button>
        </Link>
        <Link to="/prac">
        <button className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
          Practice
        </button>
        </Link>
        
      </div>
    </div>
  );
}
