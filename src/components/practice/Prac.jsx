import React, { useState, useRef } from 'react';
import Editor from "@monaco-editor/react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from '../../constant';

export default function Prac({ testCase, checkAnswer, checkCases }) {
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS[language]);
  const [result, setResult] = useState({ passed: 0, failed: 0 });
  const editorRef = useRef(null);
  const [testCaseResults, setTestCaseResults] = useState([]);
  const [error, setError] = useState(""); // Error message state
  const [run,setRun]=useState("Run");

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    setValue(CODE_SNIPPETS[selectedLang]);
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleRun = async () => {
    setRun("Running...");
    try {
      let { passed, failed, results, errors } = await checkCases(value, language); // ✅ Await the async function

      setResult({ passed, failed });
      setTestCaseResults(results || []); // fallback to empty array just in case

      // Check for errors
      if (errors && errors.length > 0) {
        // Split the error message into separate lines
        const errorMessage = errors[0].error;
        setError(errorMessage.split('\n')); // Split by newline and store in error state
      } else {
        setError([]); // No error found, clear the error state
      }
    } catch (err) {
      console.error("Error during test case checking:", err);
      setResult({ passed: 0, failed: 0 });
      setTestCaseResults([]);
      setError(["An unexpected error occurred during execution."]); // Set error message if exception occurs
    }
    setRun("Run");
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
          {run}
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

      {/* Error Box */}
      {error && error.length > 0 && (
        <div className="mt-4 p-2 rounded bg-red-100 border border-red-500 text-red-600">
          <strong>Error:</strong>
          <div className="mt-2 space-y-1">
            {error.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      )}
      {!error.length && result.failed === 0 && (
        <div className="mt-4 p-2 rounded bg-green-100 border border-green-500 text-green-600">
          <strong>No Error</strong>
        </div>
      )}

      {/* Result */}
      <div className="mt-4 text-sm">
        <p>✅ Test Cases Passed: <strong>{result.passed}</strong></p>
        <p>❌ Test Cases Failed: <strong>{result.failed}</strong></p>
      </div>

      <div className="mt-4 text-sm">
        <p>🧪 Total Test Cases: <strong>{testCaseResults.length}</strong></p>
        <div className="mt-2 space-y-1">
          {testCaseResults.map(({ testCase, status }) => (
            <div
              key={testCase}
              className={`p-2 rounded border ${status === "Passed" ? "border-green-400 bg-green-50" : "border-red-400 bg-red-50"}`}
            >
              <strong>Test Case {testCase}:</strong> {status}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
