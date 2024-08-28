"use client"; // Ensure client-side rendering

import CodeSnippet from '../../components/CodeSnippet';

export default function CodeSnippetList({ snippets }) {
  return (
    <div className="space-y-4">
      {snippets.map((snippet) => (
        <CodeSnippet
          key={snippet.id}
          demoUrl={snippet.demoUrl}
          videoUrl={snippet.videoUrl}
          code={snippet.code}
          description={snippet.description}
        />
      ))}
    </div>
  );
}
