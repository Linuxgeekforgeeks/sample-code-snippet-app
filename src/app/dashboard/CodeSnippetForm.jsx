"use client"; // Ensure client-side rendering

import { useState } from 'react';

export default function CodeSnippetForm({ addSnippet }) {
  const [newSnippet, setNewSnippet] = useState({
    demoUrl: '',
    videoUrl: '',
    code: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSnippet((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSnippet(newSnippet);
    setNewSnippet({ demoUrl: '', videoUrl: '', code: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        name="demoUrl"
        placeholder="Demo URL"
        value={newSnippet.demoUrl}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="videoUrl"
        placeholder="Video URL"
        value={newSnippet.videoUrl}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
      />
      <textarea
        name="code"
        placeholder="Code Snippet"
        value={newSnippet.code}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      ></textarea>
      <textarea
        name="description"
        placeholder="Description"
        value={newSnippet.description}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Code Snippet
      </button>
    </form>
  );
}
