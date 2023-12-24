// import React from "react";
import Header from "../../components/Header";
import { icons } from "../../constants/header-icons";
import { MenuType } from "../../types/header";
function HomePage() {
  const menu: MenuType = {
    left: icons.BACK,
    right: icons.HAMBERGER,
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
