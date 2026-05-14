"use client";

import { useState, Suspense, useEffect } from "react";
import { fetchUserProfile } from "@/app/utils/fetch-data-users";
import { UserCard } from "./user-card.component";
import { MockUser } from "@/app/store/interface";

export default function UserData() {
  // 1. Initialize with null or a pre-resolved placeholder promise so it doesn't fire immediately on mount
  const [userPromise, setUserPromise] = useState<Promise<MockUser> | null>(
    null,
  );

  // 2. Trigger the fetch safely IMMEDIATELY after the component safely mounts to the DOM
  useEffect(() => {
    setUserPromise(fetchUserProfile());
  }, []);

  //
  const handleRefresh = () => {
    setUserPromise(fetchUserProfile());
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">UserData</h2>
        <button
          onClick={handleRefresh}
          className="cursor-pointer   text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Refresh Data
        </button>
      </div>

      <Suspense
        fallback={
          <div className="p-4 border rounded-lg animate-pulse bg-gray-100 text-center text-sm text-gray-500">
            Loading profile from placeholder API...
          </div>
        }
      >
        {/* 3. Only render the card once the promise is safely initialized inside useEffect */}
        {userPromise && <UserCard userPromise={userPromise} />}
      </Suspense>
    </div>
  );
}
