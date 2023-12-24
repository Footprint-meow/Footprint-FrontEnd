import React from "react";
import { MenuTypeProp } from "../types/header";
const Header = (menu: MenuTypeProp) => {
  const {left, right} = menu.menu;

  return (
    <div className="w-full flex justify-between px-5">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

export default Header;
