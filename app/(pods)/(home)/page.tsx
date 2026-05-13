"use client";

import { useShallow } from "zustand/react/shallow";
import LoginFormComponent from "@/app/components/login-form/login-form.component";
import UserData from "@/app/components/users-list/users-list.components";
import { useAppStore } from "@/app/store/store-provider";
import { useUserStore } from "@/app/store/interface";

const HomePage = () => {
  const { user: currentUser } = useAppStore<useUserStore>(
    useShallow((state) => ({
      ...state,
      user: state.user,
    })),
  );

  return (
    <div
      data-component="HomePage"
      className="flex flex-col justify-center items-center gap-2 p-2"
    >
      <h1 className="text-center text-3xl">HomePage</h1>
      <LoginFormComponent />
      {currentUser && currentUser.id && <UserData />}
    </div>
  );
};

export default HomePage;
