"use client";

import { Dispatch, SetStateAction, useActionState } from "react";
import { searchByIdAction } from "../search-by-id-action/search-by-id-action.component";

interface TodoFormProps {
  setSearchTodoById: Dispatch<SetStateAction<number | null>>;
}

export const TodoForm = ({ setSearchTodoById }: TodoFormProps) => {
  //
  const [state, formAction] = useActionState(
    async (prevState: any, formData: FormData) =>
      await searchByIdAction(prevState, formData),
    { success: false, error: "" },
  );

  console.log(setSearchTodoById);
  return (
    <form data-component="TodoForm" action={formAction}>
      <fieldset disabled={false} className={""}>
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
      </fieldset>
    </form>
  );
};
