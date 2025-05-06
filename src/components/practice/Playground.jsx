import React from 'react';
import Problem from './Problem';
import Prac from './prac';
export default function Playground() {
  return (
    <div className="h-display flex">
      {/* Problem Statement (40%) */}
      <div className="w-2/5 border-r border-gray-300">
        <Problem />
      </div>

      {/* Code Editor (60%) */}
      <div className="w-3/5">
        <Prac />
      </div>
    </div>
  );
}
