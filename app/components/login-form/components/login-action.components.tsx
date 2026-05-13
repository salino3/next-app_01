"use server";

import { User } from "@/app/store/interface";

// 1. The Server Action / Local Form Handler
// In a full app, this function would call your backend API
export async function loginAction(prevState: any, formData: FormData) {
  //   const data = Object.fromEntries(formData.entries());
  //   console.log("Data form:", data); // result on terminal, like Nodejs
  // Or one by one
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Simulate API Network Delay (1 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simple validation check
  if (!email || !password) {
    return { success: false, error: "All fields are required." };
  }

  if (password.length < 6) {
    return { success: false, error: "Password must be at least 6 characters." };
  }

  // Mock successful response user data matching your User interface
  const mockUserData: User = {
    id: 101,
    name: name,
    email: email,
  };

  // If successful, update our Zustand store!
  if (mockUserData.name && mockUserData.email) {
    return { success: true, error: null, user: mockUserData };
  }
}
