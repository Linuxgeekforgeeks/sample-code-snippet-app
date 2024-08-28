// src/app/dashboard/page.js
"use client"; // Ensure client-side rendering

import CodeSnippet from '@/components/CodeSnippet';

const mockData = [
  {
    id: 1,
    demoUrl: 'https://example.com/demo1',
    videoUrl: 'https://example.com/video1.mp4',
    code: 'console.log("Demo Code 1");',
    description: 'This demo showcases a simple console log statement. It’s useful for demonstrating basic logging in JavaScript.',
  },
  {
    id: 2,
    demoUrl: 'https://example.com/demo2',
    videoUrl: 'https://example.com/video2.mp4',
    code: 'console.log("Demo Code 2");',
    description: 'This demo displays another console log statement with a different message. It’s useful for showcasing various logging techniques.',
  },
  {
    id: 3,
    demoUrl: 'https://example.com/demo3',
    videoUrl: 'https://example.com/video3.mp4',
    code: 'console.log("Demo Code 3");',
    description: 'This demo illustrates how to use different logging levels in JavaScript. It’s useful for understanding log verbosity.',
  },
  {
    id: 4,
    demoUrl: 'https://example.com/demo4',
    videoUrl: 'https://example.com/video4.mp4',
    code: 'console.log("Demo Code 4");',
    description: 'This demo showcases a more complex logging scenario with formatted messages. It’s useful for structured logging practices.',
  },
  {
    id: 5,
    demoUrl: 'https://example.com/demo5',
    videoUrl: 'https://example.com/video5.mp4',
    code: 'console.log("Demo Code 5");',
    description: 'This demo demonstrates the use of console methods for debugging. It’s useful for developers looking to enhance their debugging skills.',
  },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Code Snippets Dashboard</h1>
      <div className="space-y-4">
        {mockData.map((snippet) => (
          <CodeSnippet
            key={snippet.id}
            demoUrl={snippet.demoUrl}
            videoUrl={snippet.videoUrl}
            code={snippet.code}
            description={snippet.description}
          />
        ))}
      </div>
    </div>
  );
}
