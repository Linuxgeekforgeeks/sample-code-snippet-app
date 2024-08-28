// components/Loader.tsx
export default function Loader() {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce200"></div>
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce400"></div>
      </div>
    );
  }
  