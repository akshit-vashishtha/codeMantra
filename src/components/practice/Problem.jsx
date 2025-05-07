import React from 'react';

export default function Problem({ name, statement, example }) {
  return (
    <div className="p-4 h-full overflow-auto">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <p className="mb-4" dangerouslySetInnerHTML={{ __html: statement }}></p>

      {example.map((ex, index) => (
        <div className="mb-2" key={index}>
          <strong>Example {index + 1}:</strong>
          <pre className="bg-gray-100 p-2 rounded mt-1 text-sm">
{`Input: ${ex.input}
Output: ${ex.output}${ex.explanation ? `\nExplanation: ${ex.explanation}` : ''}`}
          </pre>
        </div>
      ))}
    </div>
  );
}
