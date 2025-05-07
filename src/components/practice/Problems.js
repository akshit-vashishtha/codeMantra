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

const checkLongestPalindromeCases = async (code, language) => {
  console.log("prog started");
  let passed = 0;
  let failed = 0;
  const results = [];
  const TEST_CASES = problemList.find(problem => problem.sno === 2).testcase;
  console.log(TEST_CASES);
  for (let i = 0; i < TEST_CASES.length; i++) {
    const { s, solution } = TEST_CASES[i]; // solution is a string
    const input = s;

    try {
      const response = await executeCode(language, code, input);
      console.log(response);
      const resultOutput = response?.run?.stdout?.trim();
      console.log(resultOutput);
      if (!resultOutput) {
        results.push({ testCase: i + 1, status: "Failed" });
        failed++;
        continue;
      }

      if (resultOutput === solution) {
        results.push({ testCase: i + 1, status: "Passed" });
        passed++;
      } else {
        results.push({ testCase: i + 1, status: "Failed" });
        failed++;
      }
    } catch (err) {
      results.push({ testCase: i + 1, status: "Failed" });
      failed++;
    }
  }

  return { passed, failed, results };
};

const checkFirstUniqueCharCases=async (code, language)=>{
  console.log("prog started");
  let passed = 0;
  let failed = 0;
  const results = [];
  const TEST_CASES = problemList.find(problem => problem.sno === 3).testcase;
  console.log(TEST_CASES);
  for (let i = 0; i < TEST_CASES.length; i++) {
    const { s, solution } = TEST_CASES[i]; // solution is a string
    const input = s;

    try {
      const response = await executeCode(language, code, input);
      console.log(response);
      const resultOutput = response?.run?.stdout?.trim();
      console.log(resultOutput);
      if (!resultOutput) {
        results.push({ testCase: i + 1, status: "Failed" });
        failed++;
        continue;
      }

      if (resultOutput === solution) {
        results.push({ testCase: i + 1, status: "Passed" });
        passed++;
      } else {
        results.push({ testCase: i + 1, status: "Failed" });
        failed++;
      }
    } catch (err) {
      results.push({ testCase: i + 1, status: "Failed" });
      failed++;
    }
  }

  return { passed, failed, results };
}

const checkMajorityElementCases= async(code,language)=>{
  console.log("prog started");
  let passed = 0;
  let failed = 0;
  const results = [];
  const TEST_CASES = problemList.find(problem => problem.sno === 4).testcase;
  console.log(TEST_CASES);
  for (let i = 0; i < TEST_CASES.length; i++) {
    const {n, vector, solution } = TEST_CASES[i];
    const input = `${n}\n${vector.join(' ')}`;
    try {
      const response = await executeCode(language, code, input);
      console.log(response);
      const resultOutput = response?.run?.stdout?.trim();
      console.log(resultOutput);
      if (!resultOutput) {
        results.push({ testCase: i + 1, status: "Failed" });
        failed++;
        continue;
      }

      if (resultOutput === solution) {
        results.push({ testCase: i + 1, status: "Passed" });
        passed++;
      } else {
        results.push({ testCase: i + 1, status: "Failed" });
        failed++;
      }
    } catch (err) {
      results.push({ testCase: i + 1, status: "Failed" });
      failed++;
    }
  }

  return { passed, failed, results };
}

const checkMissingNumberCases= async(code, language)=>{
  console.log("prog started");
  let passed = 0;
  let failed = 0;
  const results = [];
  const TEST_CASES = problemList.find(problem => problem.sno === 5).testcase;
  console.log(TEST_CASES);
  for (let i = 0; i < TEST_CASES.length; i++) {
    const {n, vector, solution } = TEST_CASES[i];
    const input = `${n}\n${vector.join(' ')}`;
    try {
      const response = await executeCode(language, code, input);
      console.log(response);
      const resultOutput = response?.run?.stdout?.trim();
      console.log(resultOutput);
      if (!resultOutput) {
        results.push({ testCase: i + 1, status: "Failed" });
        failed++;
        continue;
      }

      if (resultOutput === solution) {
        results.push({ testCase: i + 1, status: "Passed" });
        passed++;
      } else {
        results.push({ testCase: i + 1, status: "Failed" });
        failed++;
      }
    } catch (err) {
      results.push({ testCase: i + 1, status: "Failed" });
      failed++;
    }
  }

  return { passed, failed, results };
}

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
  {
    sno: 2,
    name: "Longest Palindromic Substring",
    statement:
      "Given a string <code>s</code>, return the longest palindromic substring in <code>s</code>. A palindrome is a string that reads the same forward and backward.",
    example: [
      {
        input: "s = 'babad'",
        output: "'bab' or 'aba'",
        explanation: "Both 'bab' and 'aba' are valid answers. You can return either.",
      },
      {
        input: "s = 'cbbd'",
        output: "'bb'",
      },
    ],
    testcase: [
      {
        s: "racecar",
        solution: "racecar",
      },
      {
        s: "abacdfgdcabba",
        solution: "abba",
      },
      {
        s: "abcdedcbaaaa",
        solution: "abcdedcba",
      },
      {
        s: "abcddcbae",
        solution: "abcddcba",
      },
      {
        s: "abccbax",
        solution: "abccba",
      },
      {
        s: "aaabaaa",
        solution: "aaabaaa",
      },
      {
        s: "abcdefgfedcbaabcd",
        solution: "abcdefgfedcba",
      },
    ],
    checkTestCases: checkLongestPalindromeCases,
  },
  {
    sno: 3,
    name: "First Unique Character",
    statement:
      "Given a string <code>s</code>, return the index of the first non-repeating character in it. If it does not exist, return <code>-1</code>.",
    example: [
      {
        input: "s = 'leetcode'",
        output: "0",
        explanation: "The first non-repeating character is 'l' at index 0.",
      },
      {
        input: "s = 'aabb'",
        output: "-1",
      },
    ],
    testcase: [
      { s: "leetcode", solution: "0" },
      { s: "loveleetcode", solution: "2" },
      { s: "aabb", solution: "-1" },
      { s: "z", solution: "0" },
      { s: "aabbccddeef", solution: "10" },
    ],
    checkTestCases: checkFirstUniqueCharCases,
  },
  {
    sno: 4,
    name: "Majority Element",
    statement:
      "Given an array <code>nums</code> of size <code>n</code>, return the majority element. The majority element is the element that appears more than <code>⌊n / 2⌋</code> times. You may assume that the majority element always exists.",
    example: [
      {
        input: "nums = [3,2,3], n=3",
        output: "3",
      },
      {
        input: "nums = [2,2,1,1,1,2,2], n=7",
        output: "2",
      },
    ],
    testcase: [
      {n:3, vector: [3, 2, 3], solution: "3" },
      {n:7, vector: [2, 2, 1, 1, 1, 2, 2], solution: "2" },
      {n:5, vector: [1, 1, 1, 2, 3], solution: "1" },
      {n:6, vector: [4, 4, 4, 4, 5, 5], solution: "4" },
      {n:7, vector: [9, 9, 9, 1, 2, 3, 9], solution: "9" },
    ],
    checkTestCases: checkMajorityElementCases,
  },
  {
    sno: 5,
    name: "Missing Number",
    statement:
      "Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return the one number that is missing from the array.",
    example: [
      {
        input: "nums = [3,0,1], n = 3",
        output: "2",
      },
      {
        input: "nums = [0,1], n = 2",
        output: "2",
      },
    ],
    testcase: [
      {n:3, vector: [3, 0, 1], solution: "2" },
      {n:2, vector: [0, 1], solution: "2" },
      {n:9, vector: [9, 6, 4, 2, 3, 5, 7, 0, 1], solution: "8" },
      {n:4, vector: [0,1,4,2], solution: "3" },
      {n:1, vector: [0], solution: "1" },
    ],
    checkTestCases: checkMissingNumberCases,
  }
  
  
  
  
];

export default problemList;
