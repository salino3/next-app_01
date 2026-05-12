"use client";
import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "./store/store-provider";

export default function Home() {
  const { user } = useAppStore(
    useShallow((state) => ({
      user: state.user,
    })),
  );

  console.log("clog1", user);
  return (
    <div data-component="Home">
      <h1>Hi</h1>
    </div>
  );
}
