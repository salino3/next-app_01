"use client";

interface Props {
  pending: boolean;
}

export function SubmitBtnTodo({ pending }: Props) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
    >
      {pending ? "Loading..." : "Submit"}
    </button>
  );
}
