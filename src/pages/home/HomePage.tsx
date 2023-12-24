// import React from "react";
import Header from "../../components/Header";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { MenuType } from "../../types/header";
function HomePage() {
  const menu: MenuType = {
    left: <IoChevronBackOutline size="2rem" />,
    right: <IoMdMenu size="2rem" />,
  };

  return (
    <div className="text-center w-full">
      <Header menu={menu} />
      <p className="text-3xl font-bold">1홈화면</p>
      <p className="text-3xl font-bold">홈화면</p>

    </div>
  );
}

export default HomePage;
