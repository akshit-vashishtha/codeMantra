import React from "react";
import { LANGUAGE_VERSIONS } from "../../constant.js";

export default function LanguageSelector({ language, onSelect }) {
  return (
    <div className="mb-4">
      <select
        value={language}
        onChange={(e) => onSelect(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      >
        {Object.keys(LANGUAGE_VERSIONS).map((lang) => (
          <option key={lang} value={lang}>
            {`${lang.toUpperCase()} ${LANGUAGE_VERSIONS[lang]}`}
          </option>
        ))}
      </select>
    </div>
  );
}
