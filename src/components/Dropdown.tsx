import React, { useState } from "react";
import Link from "next/link";
import { NavBarItem } from "./NavBar";

interface Props {
  item: NavBarItem;
}

const Dropdown = (props: Props) => {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children ? item.children : [];

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <div
        className="relative"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <button className="text-mainText rounded-md w-[75px] h-[30px]">
          {item.title}
        </button>
        <div
          className={`fixed top-8 z-30 w-[250px] min-h-[350px] -translate-y-6 flex flex-col py-4 bg-bgHover rounded-md ${transClass}`}
        >
          <Link
            className="text-colorPrimary underline px-4 py-1 -translate-y-2 hover:bg-colorSecondary"
            href="/projects"
          >
            Projects
          </Link>
          {menuItems.map((item) => (
            <Link
              key={item.route}
              className="text-mainText hover:bg-colorSecondary px-4 py-1"
              href={item?.route || ""}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {isOpen ? (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-20"></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Dropdown;
