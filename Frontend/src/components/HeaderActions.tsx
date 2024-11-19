"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type AboutThisPropertyProps = {
  hotel: {
    title: string;
    description: string;
  };
};

export default function HeaderActions({ hotel }: AboutThisPropertyProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    // Set client-side rendering
    setIsClient(true);
  }, []);

  const handleShareClick = () => {
    setIsShareOpen(true);
  };

  const handleDismiss = () => {
    setIsShareOpen(false);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 mx-auto container mx-auto p-4">
      {/* Back Button */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => router.back()}
          className="text-blue-500 hover:underline"
        >
          ← See all properties
        </button>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleShareClick}
          className="flex items-center px-4 py-2 text-blue-500 border border-gray-300 rounded-full hover:bg-gray-100"
        >
          <span className="mr-2">🔗</span> Share
        </button>
        <button className="flex items-center px-4 py-2 text-red-500 border border-gray-300 rounded-full hover:bg-gray-100">
          <span className="mr-2">❤️</span> Save
        </button>
      </div>

      {/* Share Modal */}
      {isShareOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-80">
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Share</h2>
              <button
                onClick={handleDismiss}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-4 space-y-4">
              <p className="text-sm">
                {hotel.title} - {hotel.rating}
              </p>
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center space-y-1">
                  <span>📩</span>
                  <span className="text-xs">Messages</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                  <span>🟢</span>
                  <span className="text-xs">WhatsApp</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                  <span>💬</span>
                  <span className="text-xs">Messenger</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                  <span>🔵</span>
                  <span className="text-xs">Facebook</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                  <span>✖️</span>
                  <span className="text-xs">X</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                  <span>🔗</span>
                  <span className="text-xs">Copy Link</span>
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-4">
              <button
                onClick={handleDismiss}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
