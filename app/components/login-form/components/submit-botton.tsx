"use client";
import { useFormStatus } from "react-dom";

// 2. A Dedicated Submit Button Component
// This must be a separate component to properly consume useFormStatus()
export function SubmitButton() {
  const { pending, action, data, method } = useFormStatus();

  const emailBeingSubmitted = data?.get("email") as string;

  // 'action' is for having the function reference

  console.log("Check type method:", method);

  return (
    <div>
      {/* 2. Show a personalized loading message */}
      {pending && emailBeingSubmitted && (
        <p className="text-sm text-blue-500 animate-pulse mb-2">
          Verifying security tokens for {emailBeingSubmitted}...
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {pending ? "Loading..." : "Sign In"}
      </button>
    </div>
  );
}
