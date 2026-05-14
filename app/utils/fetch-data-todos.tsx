"use server";
import { MockTodo } from "../store/interface";

export async function fetchTodos(
  id?: number | null,
): Promise<MockTodo | MockTodo[]> {
  return fetch(
    id
      ? `https://jsonplaceholder.typicode.com/todos/${String(id)}`
      : "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=20",
  ).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch todo" + (id ? "s" : ""));
    return res.json();
  });
}
