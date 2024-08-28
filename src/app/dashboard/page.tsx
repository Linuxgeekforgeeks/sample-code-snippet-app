// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [codeSnippets, setCodeSnippets] = useState<string[]>([]);

  useEffect(() => {
    // Simulate fetching data from an API
    // Replace this with your actual data fetching logic
    setCodeSnippets([
      'console.log("Hello, World!");',
      'const add = (a, b) => a + b;',
      'function greet(name) { return `Hello, ${name}!`; }',
      // Add more code snippets here
    ]);
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Code Snippets Dashboard</h1>
      <div className="space-y-4">
        {codeSnippets.length === 0 ? (
          <p className="text-lg text-gray-500">No code snippets available.</p>
        ) : (
          codeSnippets.map((snippet, index) => (
            <pre key={index} className="bg-gray-800 text-white p-4 rounded-md shadow-md overflow-x-auto">
              {snippet}
            </pre>
          ))
        )}
      </div>
    </div>
  );
}
