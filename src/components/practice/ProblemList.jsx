import React from 'react';
import problemList from './Problems';
import { useNavigate } from 'react-router-dom';

export default function ProblemList() {
  const navigate = useNavigate();

  const handleClick = (sno) => {
    navigate(`/playground/${sno}`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Problem List</h2>
      <ul className="space-y-3">
        {problemList.map((problem) => (
          <li
            key={problem.sno}
            className="p-4 border rounded-lg shadow hover:bg-gray-100 transition cursor-pointer"
            onClick={() => handleClick(problem.sno)}
          >
            <span className="font-medium">#{problem.sno}</span> - {problem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
