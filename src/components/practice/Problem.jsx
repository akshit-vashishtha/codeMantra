import React from 'react';

export default function Problem() {
  return (
    <div className="p-4 h-full overflow-auto">
      <h2 className="text-xl font-bold mb-4">Two Sum</h2>
      <p className="mb-4">
        Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
      </p>
      <div className="mb-2">
        <strong>Example 1:</strong>
        <pre className="bg-gray-100 p-2 rounded mt-1 text-sm">
{`Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`}
        </pre>
      </div>
      <div>
        <strong>Example 2:</strong>
        <pre className="bg-gray-100 p-2 rounded mt-1 text-sm">
{`Input: nums = [3,2,4], target = 6
Output: [1,2]`}
        </pre>
      </div>
    </div>
  );
}
