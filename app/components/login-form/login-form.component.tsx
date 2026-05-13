"use client";

import { useActionState, useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { useAppStore } from "@/app/store/store-provider";
import { SubmitButton } from "./components/submit-botton";
import { loginAction } from "./components/login-action.components";
import { useUserStore } from "@/app/store/interface";

// 3. Main Login Form Component
export default function LoginFormComponent() {
  const {
    user: currentUser,
    setUser,
    clearUser,
  } = useAppStore<useUserStore>(
    useShallow((state) => ({
      user: state.user,
      setUser: state.setUser,
      clearUser: state.clearUser,
    })),
  );

  //

  // React 19 useActionState manages the form submission state smoothly
  // I can not pass third parameter for the fuction
  const [state, formAction] = useActionState(
    async (prevState: any, formData: FormData) =>
      await loginAction(prevState, formData),
    { success: false, error: "" },
  );

  console.log("clog2", state);

  useEffect(() => {
    if (state && state.success && state?.user) {
      setUser && setUser(state?.user);
    }
  }, [state && state.success]);

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
          <button
            className="cursor-pointer border-2 rounded-sm px-1 border-cyan-300 hover:animate-pulse"
            onClick={() => clearUser()}
          >
            Logout
          </button>
        </div>
      ) : (
        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-gray-900 dark:text-white"
            />
          </div>
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
