export const TodoForm = () => {
  return (
    <form data-component="TodoForm" action="">
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
