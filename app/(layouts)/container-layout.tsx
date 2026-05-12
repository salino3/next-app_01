"use client";

interface Props {
  children: React.ReactNode;
}
const ContainerLayout = ({ children }: Props) => {
  return <div data-component="ContainerLayout">{children}</div>;
};

export default ContainerLayout;
