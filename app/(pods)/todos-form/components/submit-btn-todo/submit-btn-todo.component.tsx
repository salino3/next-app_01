"use client";

import { use } from "react";
import { useFormStatus } from "react-dom";
import { FormStateContext } from "@/app/context/form-state-context";

export function SubmitBtnTodo() {
  const { pending } = useFormStatus();

  // Using 'use' to extract state from context
  const { id } = use(FormStateContext);

  return (
    <button
      type="submit"
      disabled={pending}
      className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
    >
      {pending ? "Loading..." : id ? "Call Todos List" : "Submit Todo Search"}
    </button>
  );
}
