// components/CodeSnippet.js
"use client"; // Ensure client-side rendering

import { useState, useEffect } from 'react';

function CodeSnippet({ demoUrl, videoUrl, code, description }) {
  const [activeTab, setActiveTab] = useState('code');
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => setCopySuccess('Code copied to clipboard!'))
      .catch(() => setCopySuccess('Failed to copy code.'));
  };

  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => setCopySuccess(''), 3000); // Clear message after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-semibold mb-4">Code Snippet</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4 mb-4">
          <button
            className={`flex-1 py-2 text-center ${activeTab === 'demo' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('demo')}
          >
            Demo
          </button>
          <button
            className={`flex-1 py-2 text-center ${activeTab === 'video' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('video')}
          >
            Video
          </button>
          <button
            className={`flex-1 py-2 text-center ${activeTab === 'code' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('code')}
          >
            Code Snippet
          </button>
        </div>

        {activeTab === 'demo' && (
          <div>
            <iframe src={demoUrl} className="w-full h-64 border rounded" title="Demo" />
            {description && (
              <div className="mt-4 p-4 bg-gray-100 border rounded">
                <h3 className="text-lg font-semibold mb-2">Description:</h3>
                <p>{description}</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'video' && videoUrl && (
          <div>
            <video controls className="w-full h-64">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {activeTab === 'code' && (
          <div>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              {code}
            </pre>
            <button
              onClick={handleCopy}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Copy Code
            </button>
            {copySuccess && (
              <p className="mt-2 text-green-500">{copySuccess}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CodeSnippet;
