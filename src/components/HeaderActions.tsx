// components/HeaderActions.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderActions() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side rendering
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 mx-auto container mx-auto p-4 ">
      <div className="flex items-center space-x-2 ">
        <button
          onClick={() => router.back()}
          className="text-blue-500 hover:underline"
        >
          ← See all properties
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center px-4 py-2 text-blue-500 border border-gray-300 rounded-full hover:bg-gray-100">
          <span className="mr-2">🔗</span> Share
        </button>
        <button className="flex items-center px-4 py-2 text-red-500 border border-gray-300 rounded-full hover:bg-gray-100">
          <span className="mr-2">❤️</span> Save
        </button>
      </div>
    </div>
  );
}
