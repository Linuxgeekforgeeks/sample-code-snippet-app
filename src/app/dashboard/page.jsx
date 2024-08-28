// app/dashboard/page.js
"use client"; // Add this directive to enable client-side rendering

import { useEffect, useState } from 'react';
import CodeSnippet from '@/components/CodeSnippet'; // Adjust the import path as needed

export default function Dashboard() {
  const [codeSnippets, setCodeSnippets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // Simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with actual API call

        // Replace with actual data fetching logic
        setCodeSnippets([
          {
            demoUrl: 'https://example.com/demo1', // Replace with actual demo URL
            videoUrl: 'https://example.com/video1.mp4', // Replace with actual video URL
            code: 'console.log("Hello, World!");',
          },
          {
            demoUrl: 'https://example.com/demo2', // Replace with actual demo URL
            videoUrl: 'https://example.com/video2.mp4', // Replace with actual video URL
            code: 'const add = (a, b) => a + b;',
          },
          // Add more code snippets here
        ]);
      } catch (err) {
        setError('Failed to load data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Code Snippets Dashboard</h1>

      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin h-12 w-12 border-t-4 border-blue-600 border-solid rounded-full"></div>
        </div>
      ) : error ? (
        <p className="text-lg text-red-500">{error}</p>
      ) : (
        <div className="space-y-4">
          {codeSnippets.length === 0 ? (
            <p className="text-lg text-gray-500">No code snippets available.</p>
          ) : (
            codeSnippets.map((snippet, index) => (
              <CodeSnippet
                key={index}
                demoUrl={snippet.demoUrl}
                videoUrl={snippet.videoUrl}
                code={snippet.code}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
