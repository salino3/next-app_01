"use server";

import { MockUser } from "../store/interface";

export async function fetchUserProfile(): Promise<MockUser> {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => {
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
  });
}
