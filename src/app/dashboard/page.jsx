"use client"; // Ensure client-side rendering

import { useState, useEffect } from 'react';
import CodeSnippetForm from './CodeSnippetForm';
import CodeSnippetList from './CodeSnippetList';

export default function Dashboard() {
  const [codeSnippets, setCodeSnippets] = useState([]);

  useEffect(() => {
    async function fetchSnippets() {
      const response = await fetch('/api/snippets');
      const snippets = await response.json();
      setCodeSnippets(snippets);
    }
    fetchSnippets();
  }, []);

  const addSnippet = async (newSnippet) => {
    const response = await fetch('/api/snippets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSnippet),
    });
    const createdSnippet = await response.json();
    setCodeSnippets((prev) => [...prev, createdSnippet]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Code Snippets Dashboard</h1>
      
      <CodeSnippetForm addSnippet={addSnippet} />
      
      <CodeSnippetList snippets={codeSnippets} />
    </div>
  );
}
