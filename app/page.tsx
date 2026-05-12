"use client";
import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "./store/store-provider";
import ContainerLayout from "./(layouts)/container-layout";
import HomePage from "./(pods)/(home)/page";

export default function Home() {
  const { user } = useAppStore(
    useShallow((state) => ({
      user: state.user,
    })),
  );

  console.log("clog1", user);
  return (
    <div data-component="Home">
      <ContainerLayout>
        <HomePage />
      </ContainerLayout>
    </div>
  );
}
