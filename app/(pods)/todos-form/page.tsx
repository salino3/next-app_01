"use client";

import { Suspense, use, useEffect, useState } from "react";
import { TodoForm } from "./components/todo-form/todo-form.component";
import { MockTodo } from "@/app/store/interface";
import { fetchTodos } from "@/app/utils/fetch-data-todos";
import { TodoList } from "./components/todo-list/todo-list.component";

const TodosFormPage = () => {
  const [userPromiseTodo, setPromiseTodo] = useState<Promise<
    MockTodo | MockTodo[]
  > | null>(null);

  useEffect(() => {
    // Innesca la promise una volta sola al mount del componente
    setPromiseTodo(fetchTodos());
  }, []);

  return (
    <div
      data-component="TodosFormPage"
      className="flex flex-col justify-center items-center gap-2 p-2"
    >
      <h1 className="text-center text-3xl">Todos Form Page</h1>

      <TodoForm />
      <Suspense
        fallback={
          <div className="p-4 border rounded-lg animate-pulse bg-gray-100 text-center text-sm text-gray-500">
            Loading profile from placeholder API...
          </div>
        }
      >
        <TodoList userPromiseTodo={userPromiseTodo} />
      </Suspense>
    </div>
  );
};

export default TodosFormPage;
