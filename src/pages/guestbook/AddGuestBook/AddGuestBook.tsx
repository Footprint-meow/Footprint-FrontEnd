import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import { IMenu, IMenuFunc } from "../../../types/header";
import { icons } from "../../../constants/header-icons";

const AddGuestBook = () => {
  const navigate = useNavigate();

  const menu: IMenu = {
    left: icons.CLOSE,
    center: "방명록 생성하기",
    right: null,
  };

  const func: IMenuFunc = {
    left_func: () => navigate(-1),
    right_func: null,
  };

  return (
    <div className="w-full">
      <Header menu={menu} func={func} />
      <div className="h-[calc(100vh-2.5rem)] pt-10 flex flex-col px-7">
        <div className="flex gap-3 pt-4">
          <div className="border-b-[3px] border-primary-1 leading-6 text-primary-1 font-bold">기본 설정</div>
          {/* <div className="text-[#D9D9D9] leading-6">기본 설정</div> */}
          <div className="text-[#D9D9D9] leading-6">프로필</div>
          <div className="text-[#D9D9D9] leading-6">소개</div>
        </div>
        <Outlet />
        {/* 현재위치를 나타내는 상태도 prop로 */}
      </div>
    </div>
  );
};

export default AddGuestBook;
