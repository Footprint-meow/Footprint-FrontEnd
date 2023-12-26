import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import { IMenu, IMenuFunc } from "../../../types/header";
import { icons } from "../../../constants/header-icons";

const AddGuestBook = () => {
  const navigate = useNavigate();

  const menu: IMenu = {
    left: icons.CLOSE,
    right: null,
  };

  const func: IMenuFunc = {
    left_func: () => navigate(-1),
    right_func: null,
  };

  return (
    <div className="w-full">
      <Header menu={menu} func={func} />
      <div className="h-[calc(100vh-2.5rem)] absolute top-10 z-15 flex flex-col justify-between">
        Helo add your guest book;
        <Outlet />
      </div>
    </div>
  );
};

export default AddGuestBook;
