"use server";
import { MockTodo } from "../store/interface";

export async function fetchTodos(id: string): Promise<MockTodo | MockTodo[]> {
  return fetch(
    id
      ? `https://jsonplaceholder.typicode.com/todos/${id}`
      : "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=20",
  ).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch todo" + (id ? "s" : ""));
    return res.json();
  });
}
