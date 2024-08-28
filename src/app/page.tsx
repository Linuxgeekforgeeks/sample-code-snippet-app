// app/landing/page.tsx
"use client";

import Link from 'next/link';
// Ensure this is the correct import path
import { QrCodeIcon } from '@heroicons/react/16/solid';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Code Snippets</h1>
      <QrCodeIcon className="h-12 w-12 text-blue-500 mb-4" />
      <p className="text-lg mb-8">
        Discover and manage your code snippets effortlessly.
      </p>
      <Link href="/dashboard" legacyBehavior>
        <a className="px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition duration-200">
          Go to Dashboard
        </a>
      </Link>
    </div>
  );
}
