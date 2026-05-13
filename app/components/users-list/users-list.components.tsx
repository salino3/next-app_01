"use client";

import { useState, Suspense } from "react";
import { fetchUserProfile } from "@/app/utils/fetch-data-users.components";
import { UserCard } from "./user-card.component";
import { MockUser } from "@/app/store/interface";

export default function DashboardPage() {
  // We store the PROMISE itself in useState, NOT the resolved user data!
  const [userPromise, setUserPromise] = useState<Promise<MockUser>>(() =>
    fetchUserProfile(),
  );

  const handleRefresh = () => {
    // Creating a fresh promise triggers a re-fetch and makes Suspense load again
    setUserPromise(fetchUserProfile());
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button
          onClick={handleRefresh}
          className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Refresh Data
        </button>
      </div>

      {/* 🌟 CRITICAL: 'use' REQUIRES a Suspense boundary to show a loading state */}
      <Suspense
        fallback={
          <div className="p-4 border rounded-lg animate-pulse bg-gray-100 text-center text-sm text-gray-500">
            Loading profile from placeholder API...
          </div>
        }
      >
        <UserCard userPromise={userPromise} />
      </Suspense>
    </div>
  );
}
