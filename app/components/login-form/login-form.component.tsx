"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useAppStore } from "@/app/store/store-provider";
import { User } from "@/app/store/interface";

// 1. The Server Action / Local Form Handler
// In a full app, this function would call your backend API
async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Simulate API Network Delay (1.5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simple validation check
  if (!email || !password) {
    return { success: false, error: "All fields are required." };
  }

  if (password.length < 6) {
    return { success: false, error: "Password must be at least 6 characters." };
  }

  // Mock successful response user data matching your User interface
  const mockUserData: User = {
    id: 101,
    name: email.split("@")[0], // Mock name from email prefix
    email: email,
  };

  return { success: true, error: null, user: mockUserData };
}

// 2. A Dedicated Submit Button Component
// This must be a separate component to properly consume useFormStatus()
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
    >
      {pending ? "Logging in..." : "Sign In"}
    </button>
  );
}

// 3. Main Login Form Component
export default function LoginFormComponent() {
  const setUser = useAppStore((state) => state.setUser);
  const currentUser = useAppStore((state) => state.user);

  // React 19 useActionState manages the form submission state smoothly
  const [state, formAction] = useActionState(
    async (prevState: any, formData: FormData) => {
      const result = await loginAction(prevState, formData);

      // If successful, update our Zustand store!
      if (result.success && result.user) {
        setUser(result.user);
      }

      return result;
    },
    { success: false, error: "" },
  );

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        Account Login
      </h2>

      {/* If user is already stored in Zustand, show a welcome message instead */}
      {currentUser && currentUser.id !== null ? (
        <div className="text-center py-4">
          <p className="text-green-600 font-medium mb-2">
            ✓ Successfully Logged In!
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome back, {currentUser.name}
          </p>
        </div>
      ) : (
        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-gray-900 dark:text-white"
            />
          </div>

          {/* Render error alerts cleanly without separate useEffect hooks */}
          {state?.error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
              {state.error}
            </div>
          )}

          <SubmitButton />
        </form>
      )}
    </div>
  );
}
