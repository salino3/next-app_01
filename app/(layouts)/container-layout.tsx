"use client";

import { MainHeader } from "../components/main-header/main-header.component";

interface Props {
  children: React.ReactNode;
}
const ContainerLayout = ({ children }: Props) => {
  return (
    <div
      data-component="ContainerLayout"
      className="flex flex-col justify-center w-full"
    >
      <MainHeader />
      {children}
    </div>
  );
};

export default ContainerLayout;
