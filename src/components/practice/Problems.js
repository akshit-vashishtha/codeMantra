import { executeCode } from './api';

const checkTwoSumResult = (solutions, actualResult) => {
  console.log("check sol");

  console.log("Type of solutions:", typeof solutions);
  console.log("Type of actualResult:", typeof actualResult);
  console.log("solutions:", solutions);
  console.log("actualResult:", actualResult);

  if (typeof solutions === 'object' && solutions.hasOwnProperty('array')) {
    solutions = solutions.array;
  }

  for (let i = 0; i < solutions.length; i++) {
    const solutionArray = solutions[i];
    const toCheck = solutionArray.join(' ').trim();
    if (toCheck === actualResult.trim()) {
      console.log("passed");
      return true;
    }
  }

  console.log("failed");
  return false;
};

const checkTwoSumCases = async (code, language) => {
  let passed = 0;
  let failed = 0;
  const results = [];
  const TEST_CASES = problemList.find(problem => problem.sno === 1).testcase;
  console.log("testcases")
  console.log(TEST_CASES);
  for (let i = 0; i < TEST_CASES.length; i++) {
    const { n, vector, target, solution } = TEST_CASES[i];
    const input = `${n}\n${vector.join(' ')}\n${target}`;
    console.log(`\nTest Case ${i + 1}:`);
    console.log("Input passed to Piston:");
    console.log(input);

    try {
      // Execute the code here (simulating with your executeCode function)
      const response =await executeCode(language, code, input);
      console.log(response);
      const resultOutput = response?.run?.stdout?.trim();
      console.log("Raw Output:", resultOutput);

      if (!resultOutput) {
        console.error(`No output for Test Case ${i + 1}`);
        results.push({ testCase: i + 1, status: "Failed" });
        failed++;
        continue;
      }

      // Check if the result matches the expected solution
      if (checkTwoSumResult(solution, resultOutput)) {
        results.push({ testCase: i + 1, status: "Passed" });
        passed++;
      } else {
        results.push({ testCase: i + 1, status: "Failed" });
        failed++;
      }
    } catch (err) {
      console.error("Execution Error:", err);
      results.push({ testCase: i + 1, status: "Failed" });
      failed++;
    }
  }
  console.log("two sum logic done");
  return { passed, failed, results };
  
};


const problemList = [
  {
    sno: 1,
    name: "Two Sum",
    statement:
      "Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    example: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    testcase: [
      {
        n: 4,
        vector: [2, 7, 11, 15],
        target: 9,
        solution: [[0, 1]],
      },
      {
        n: 4,
        vector: [1, 2, 3, 4],
        target: 5,
        solution: [
          [0, 3],
          [1, 2],
        ],
      },
      {
        n: 5,
        vector: [3, 2, 4, 7, 1],
        target: 6,
        solution: [[1, 2]],
      },
      {
        n: 5,
        vector: [5, 12, 10, 9, 1],
        target: 13,
        solution: [[1, 4]],
      },
      {
        n: 3,
        vector: [10, 20, 30],
        target: 40,
        solution: [[0, 2]],
      },
    ],
    checkAnswer: checkTwoSumResult,
    checkTestCases: checkTwoSumCases,
  },
];

export default problemList;
