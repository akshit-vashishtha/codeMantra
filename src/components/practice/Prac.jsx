import React, { useState, useRef } from 'react';
import Editor from "@monaco-editor/react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from '../../constant';

export default function Prac({ testCase, checkAnswer, checkCases }) {
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

  const handleRun = async () => {
    try {
      let { passed, failed, results } = await checkCases(value, language); // ✅ Await the async function
  
      setResult({ passed, failed });
      setTestCaseResults(results || []); // fallback to empty array just in case
    } catch (err) {
      console.error("Error during test case checking:", err);
      setResult({ passed: 0, failed: 0 });
      setTestCaseResults([]);
    }
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
        <p>🧪 Total Test Cases: <strong>{testCaseResults.length}</strong></p>
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
