// components/CodeSnippet.js
"use client"; // Ensure client-side rendering

import { useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline'; // or '@heroicons/react/24/solid'

function CodeSnippet({ demoUrl, videoUrl, code, description }) {
  const [activeTab, setActiveTab] = useState('code');
  const [copySuccess, setCopySuccess] = useState('');
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([
    "This code is fantastic! Helped me a lot.",
    "Nice implementation, but can you explain the logic behind it?",
    "Great work! It would be helpful if you add more examples.",
  ]);
  const [newComment, setNewComment] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => setCopySuccess('Code copied to clipboard!'))
      .catch(() => setCopySuccess('Failed to copy code.'));
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
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

        <button
          onClick={handleLike}
          className={`flex items-center mt-4 ${liked ? 'text-red-500' : 'text-gray-500'}`}
        >
          <HeartIcon className="w-6 h-6" />
          <span className="ml-2">{liked ? 'Liked' : 'Like'}</span>
        </button>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Comments</h3>
          <div className="flex flex-col space-y-4">
            <textarea
              value={newComment}
              onChange={handleCommentChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Add a comment..."
              rows="3"
            />
            <button
              onClick={handleAddComment}
              className="py-2 px-4 bg-blue-500 text-white rounded"
            >
              Add Comment
            </button>
            <div className="mt-4 space-y-2">
              {comments.map((comment, index) => (
                <div key={index} className="p-4 bg-gray-100 border rounded">
                  <p>{comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeSnippet;
