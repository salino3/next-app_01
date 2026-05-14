"use server";
import { MockTodo } from "../store/interface";

export async function fetchTodos(id?: number): Promise<MockTodo | MockTodo[]> {
  return fetch("https://jsonplaceholder.typicode.com/todos/" + String(id)).then(
    (res) => {
      if (!res.ok) throw new Error("Failed to fetch todo" + id ? "s" : "");
      return res.json();
    },
  );
}
