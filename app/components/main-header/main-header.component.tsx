"use client";

import Link from "next/link";
import clsx from "clsx";

export const MainHeader = () => {
  const liStyles = clsx(`
  flex flex-row justify-center items-center 
     `);

  const aStyles = clsx(`
  flex flex-row justify-center items-center border-2 border-blue-800 bg-blue-500 
   animate-bounce hover:animate-pulse
   hover:bg-blue-400 px-2 rounded-md 
   transition-transform   active:scale-x-[1.2] active:scale-y-[0.7]
    `);
  //  transform: transiction
  //  transform: scale(1.2, 0.7);
  return (
    <header
      data-component="MainHeader"
      className="flex flex-col justify-center items-center w-full min-h-12 border border-amber-700"
    >
      <nav className="flex   justify-center items-center w-full">
        <ul className="flex flex-row justify-center items-center w-full gap-5">
          <li className={liStyles}>
            <Link className={aStyles} href="/">
              Home
            </Link>
          </li>
          <li className={liStyles}>
            <Link className={aStyles} href="/todos-form">
              Todo Form
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
