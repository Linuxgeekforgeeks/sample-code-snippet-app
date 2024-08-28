"use client"; // Ensure client-side rendering

import { useState, useEffect } from 'react';
import CodeSnippetForm from './CodeSnippetForm';
import CodeSnippetList from "./CodeSnippetList";

export default function Dashboard() {
  const [codeSnippets, setCodeSnippets] = useState([]);

  useEffect(() => {
    const savedSnippets = JSON.parse(localStorage.getItem('codeSnippets')) || [];
    setCodeSnippets(savedSnippets);
  }, []);

  useEffect(() => {
    localStorage.setItem('codeSnippets', JSON.stringify(codeSnippets));
  }, [codeSnippets]);

  const addSnippet = (newSnippet) => {
    setCodeSnippets((prev) => [...prev, { ...newSnippet, id: prev.length + 1 }]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Code Snippets Dashboard</h1>
      
      <CodeSnippetForm addSnippet={addSnippet} />
      
      <CodeSnippetList snippets={codeSnippets} />
    </div>
  );
}
