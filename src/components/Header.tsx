import React from "react";
import { MenuTypeProp } from "../types/header";
import { useNavigate } from "react-router-dom";
const Header = (menu: MenuTypeProp) => {
  const {left, right} = menu.menu;
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  
  return (
    <div className="w-full flex justify-between px-5">
      <div onClick={goBack}>{left}</div>
      <div>{right}</div>
    </div>
  );
};

export default Header;
