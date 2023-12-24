// import React from "react";
import Header from "../../components/Header";
import { icons } from "../../constants/header-icons";
import { MenuFuncType, MenuType } from "../../types/header";
import Banner from "./components/Banner";
import MyGuestBookList from "./components/MyGuestBookList";
import RecentFootprint from "./components/RecentFootprint";
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
    <div className="text-center w-full relative">
      <Header menu={menu} func={func} />
      <div className="h-[calc(100vh-2.5rem)] absolute top-0 z-15 flex flex-col justify-between">
        <Banner />
        <MyGuestBookList />
        <RecentFootprint />
      </div>
    </div>
  );
}

export default HomePage;
