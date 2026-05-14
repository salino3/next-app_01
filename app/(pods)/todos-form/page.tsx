"use client";

import { TodoForm } from "./components/todo-form/todo-form.component";

// fetchTodos
const TodosFormPage = () => {
  return (
    <div
      data-component="TodosFormPage"
      className="flex flex-col justify-center items-center gap-2 p-2"
    >
      <h1 className="text-center text-3xl">Todos Form Page</h1>

      <TodoForm />
    </div>
  );
};

export default TodosFormPage;
