// components/CodeSnippet.js
"use client"; // Add this directive to enable client-side rendering

import { useState } from 'react';

function CodeSnippet({ demoUrl, videoUrl, code }) {
  const [activeTab, setActiveTab] = useState('code');

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <ul className="flex space-x-4 border-b">
          <li
            className={`cursor-pointer px-4 py-2 ${activeTab === 'demo' ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'}`}
            onClick={() => setActiveTab('demo')}
          >
            Demo
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${activeTab === 'video' ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'}`}
            onClick={() => setActiveTab('video')}
          >
            Video
          </li>
          <li
            className={`cursor-pointer px-4 py-2 ${activeTab === 'code' ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'}`}
            onClick={() => setActiveTab('code')}
          >
            Code Snippet
          </li>
        </ul>
      </div>
      <div>
        {activeTab === 'demo' && demoUrl && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Demo</h3>
            <iframe src={demoUrl} className="w-full h-60 border rounded" title="Demo" />
          </div>
        )}
        {activeTab === 'video' && videoUrl && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Video</h3>
            <video controls className="w-full h-60">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {activeTab === 'code' && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Code Snippet</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              {code}
            </pre>
            <button
              onClick={() => navigator.clipboard.writeText(code)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Copy Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CodeSnippet;
