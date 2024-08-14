import React from "react";
import Link from 'next/link';
import Dropdown from "./Dropdown";

export interface NavBarItem {
  title: string;
  route?: string;
  children?: NavBarItem[];
}

const navBarItems: NavBarItem[] = [
  {
    title: "Projects",
    children: [
      {
        title: "Placeholder",
        route: "/",
      },
    ],
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Blog",
    route: "/blog",
  },
];

const NavBar = () => {
  return (
    <header className="bg-bgSecondary py-2.5 px-2 flex justify-between items-center">
      <div className="flex-shrink-0">
        <Link className="text-mainText hover:bg-colorSecondary" href="/">
          <button className="hover:bg-colorSecondary rounded-md w-[75px] h-[30px]">Home</button>
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        {navBarItems.map((item) => {
          return item.hasOwnProperty("children") ? (
            <Dropdown item={item} />
          ) : (
            <Link className="text-mainText hover:bg-colorSecondary rounded-md w-[75px] h-[30px]" href={item?.route || ""}>
              <button className="hover:bg-colorSecondary rounded-md w-[75px] h-[30px]">{item.title}</button>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default NavBar;
