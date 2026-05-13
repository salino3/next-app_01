"use client";

import { useShallow } from "zustand/react/shallow";
import LoginFormComponent from "@/app/components/login-form/login-form.component";
import DashboardPage from "@/app/components/users-list/users-list.components";
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
    <div data-component="HomePage">
      <h1>HomePage</h1>
      <LoginFormComponent />
      {currentUser && currentUser.id && <DashboardPage />}
    </div>
  );
};

export default HomePage;
