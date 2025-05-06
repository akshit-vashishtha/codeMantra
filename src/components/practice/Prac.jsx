import React, { useState, useRef } from 'react';
import Editor from "@monaco-editor/react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from '../../constant';
import { executeCode } from './api';
import TEST_CASES from './testcase';

export default function Prac() {
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS[language]);
  const [result, setResult] = useState({ passed: 0, failed: 0 });
  const editorRef = useRef(null);
  const [testCaseResults, setTestCaseResults] = useState([]);


  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    setValue(CODE_SNIPPETS[selectedLang]);
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };


  // Function to check if the actual result matches any of the valid solutions
  const checkTwoSumResult = (solutions, actualResult) => {
    console.log("check sol");

    // Log the types of solutions and actualResult for debugging
    console.log("Type of solutions:", typeof solutions);
    console.log("Type of actualResult:", typeof actualResult);
    console.log("solutions:", solutions);
    console.log("actualResult:", actualResult);

    // If solutions is an object, access the 2D array inside it
    if (typeof solutions === 'object' && solutions.hasOwnProperty('array')) {
        solutions = solutions.array; // Assuming the 2D array is inside the 'array' property
    }

    // Iterate through the 2D solutions array
    for (let i = 0; i < solutions.length; i++) {
        const solutionArray = solutions[i];
        console.log("Type of solutionArray:", typeof solutionArray);

        // Convert both the solutionArray and actualResult to strings and compare

        const toCheck = solutionArray.join(' ');
        console.log("Type of toCheck:", typeof toCheck);
        console.log("toCheck:", toCheck);
        toCheck.trim();
        if (toCheck === actualResult) {
            console.log("passed")
            return true; // If a match is found, return true
        }
    }

    // If no match was found, return false
    console.log("failed");
    return false;
};


const handleRun = async () => {
    let passed = 0;
    let failed = 0;
    const results = [];
  
    for (let i = 0; i < TEST_CASES.length; i++) {
      const { n, vector, target, solution } = TEST_CASES[i];
      const input = `${n}\n${vector.join(' ')}\n${target}`;
      console.log(`\nTest Case ${i + 1}:`);
      console.log("Input passed to Piston:");
      console.log(input);
  
      try {
        const response = await executeCode(language, value, input);
        const resultOutput = response?.run?.stdout?.trim();
        console.log("Raw Output:", resultOutput);
  
        if (!resultOutput) {
          console.error(`No output for Test Case ${i + 1}`);
          results.push({ testCase: i + 1, status: "Failed" });
          failed++;
          continue;
        }
  
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
  
    setResult({ passed, failed });
    setTestCaseResults(results);
  };
  


  return (
    <div className="p-4 h-full flex flex-col">
      {/* Header */}
      <div className="mb-3 flex justify-between items-center">
        <div>
          <label htmlFor="language" className="mr-2 font-medium">Language:</label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="border px-2 py-1 rounded text-sm"
          >
            {Object.keys(LANGUAGE_VERSIONS).map((lang) => (
              <option key={lang} value={lang}>
                {`${lang.toUpperCase()} ${LANGUAGE_VERSIONS[lang]}`}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleRun}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
        >
          Run
        </button>
      </div>

      {/* Editor */}
      <div className="border rounded flex-1 min-h-[500px]">
        <Editor
          height="100%"
          theme="vs-dark"
          language={language}
          value={value}
          onMount={onMount}
          onChange={(val) => setValue(val)}
        />
      </div>

      {/* Result */}
      <div className="mt-4 text-sm">
        <p>✅ Test Cases Passed: <strong>{result.passed}</strong></p>
        <p>❌ Test Cases Failed: <strong>{result.failed}</strong></p>
      </div>


        <div className="mt-4 text-sm">
            <p>🧪 Total Test Cases: <strong>{TEST_CASES.length}</strong></p>
            <div className="mt-2 space-y-1">
                {testCaseResults.map(({ testCase, status }) => (
                <div
                    key={testCase}
                    className={`p-2 rounded border ${
                    status === "Passed" ? "border-green-400 bg-green-50" : "border-red-400 bg-red-50"
                    }`}
                >
                    <strong>Test Case {testCase}:</strong> {status}
                </div>
                ))}
            </div>
        </div>

    </div>
  );
}
