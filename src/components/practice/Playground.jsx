import React from 'react';
import Problem from './Problem';
import Prac from './prac';
import { useParams } from 'react-router-dom';
import problemList from './Problems';

export default function Playground() {
  const { sno } = useParams();
  const problem = problemList.find(p => p.sno === parseInt(sno));

  if (!problem) return <div className="p-4">Problem not found.</div>;

const name = problem.name;
const statement = problem.statement;
const example = problem.example;
const testcase = problem.testcase;
const checkAnswer = problem.checkAnswer;
const checkCases=problem.checkTestCases;

  console.log(typeof checkAnswer)

  return (
    <div className="h-display flex">
      {/* Problem Statement (40%) */}
      <div className="w-2/5 border-r border-gray-300">
        <Problem
          name={name}
          statement={statement}
          example={example}
        />
      </div>

      {/* Code Editor (60%) */}
      <div className="w-3/5">
        <Prac testcase={testcase} checkAnswer={checkAnswer} checkCases={checkCases}/>
      </div>
    </div>
  );
}
