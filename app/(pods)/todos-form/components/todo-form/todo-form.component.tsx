"use client";

import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { searchByIdAction } from "../search-by-id-action/search-by-id-action.component";
import { SubmitBtnTodo } from "../submit-btn-todo/submit-btn-todo.component";

interface TodoFormProps {
  setSearchTodoById: Dispatch<SetStateAction<string>>;
}

export const TodoForm = ({ setSearchTodoById }: TodoFormProps) => {
  //
  const [state, formAction] = useActionState(
    async (prevState: any, formData: FormData) =>
      await searchByIdAction(prevState, formData),
    { success: false, error: "" },
  );

  useEffect(() => {
    if (state.success && state.id) {
      setSearchTodoById(state.id);
    }
  }, [state]);

  return (
    <form data-component="TodoForm" action={formAction}>
      <fieldset disabled={false} className={"flex flex-col gap-2"}>
        <legend>Todo Form</legend>
        <div className="bg-blue-400 border flex flex-col w-[250px] rounded-sm p-2">
          <label htmlFor="id">ID Todo</label>
          <input
            className="border bg-black pl-0.5 rounded-sm"
            placeholder="Search a Todo (number)"
            name="id"
            id="id"
            type="number"
          />
        </div>
        {state?.error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
            {state.error}
          </div>
        )}
        <SubmitBtnTodo />
      </fieldset>
    </form>
  );
};
