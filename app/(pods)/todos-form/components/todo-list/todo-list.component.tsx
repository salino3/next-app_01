"use client";

import { MockTodo } from "@/app/store/interface";
import { use } from "react";

interface TodosProps {
  userPromiseTodo: Promise<MockTodo | MockTodo[]> | null;
}

export const TodoList = ({ userPromiseTodo }: TodosProps) => {
  if (!userPromiseTodo) {
    return <div className="text-sm text-gray-400">Initializing...</div>;
  }

  const todosData = use(userPromiseTodo);
  console.log("clog4", todosData);

  if (todosData && Array.isArray(todosData)) {
    return (
      <div data-component="TodoList">
        <ul className="flex flex-col justify-center items-center gap-1">
          {todosData &&
            todosData.length > 0 &&
            todosData.map((todo: MockTodo) => (
              <li
                key={todo.id}
                className="hover:text-blue-950 tex-bold hover:bg-blue-200 flex flex-col justify-center items-stretch w-full text-center gap-1 border px-2 rounded-sm"
              >
                {todo.title}
              </li>
            ))}
        </ul>
      </div>
    );
  }

  return (
    <div data-component="TodoList">
      <strong>{todosData && todosData.title}</strong>
    </div>
  );
};
