"use client";

import { use } from "react";
import { MockUser } from "@/app/store/interface";

interface UserCardProps {
  userPromise: Promise<MockUser>;
}

export function UserCard({ userPromise }: UserCardProps) {
  // 🌟 React 19 magic: Unwraps the promise instantly!
  // If the data isn't ready yet, React pauses here and shows the Suspense fallback.
  const user = use(userPromise);

  return (
    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        {user.name}
      </h3>
      <p className="text-sm text-gray-500">{user.email}</p>
      <p className="text-xs text-blue-500 mt-2">🏢 {user.company.name}</p>
    </div>
  );
}
