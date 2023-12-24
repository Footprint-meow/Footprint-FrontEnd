// import React from "react";
import Header from "../../components/Header";
import { icons } from "../../constants/header-icons";
import { MenuFuncType, MenuType } from "../../types/header";
function HomePage() {
  const menu: MenuType = {
    left: null,
    right: icons.HAMBERGER,
  };

  const func: MenuFuncType = {
    left_func: null,
    right_func: () => console.log("right_func"),
  };
  
  return (
    <div className="text-center w-full">
      <Header menu={menu} func={func} />
      <p className="text-3xl font-bold">1홈화면</p>
      <p className="text-3xl font-bold">홈화면</p>
    </div>
  );
}

export default HomePage;
