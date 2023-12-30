import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../../../components/Header";
import { IMenu, IMenuFunc } from "../../../types/header";
import { icons } from "../../../constants/header-icons";
import { IGuestBook } from "../interfaces";

// @TODO: 화면 전환 애니메이션 추가하기

const AddGuestBook = () => {
  const navigate = useNavigate();
  const [guestbook, setGuestbook] = useState<IGuestBook | null>(null);
  const { pathname } = useLocation();

  const menu: IMenu = {
    left: icons.CLOSE,
    center: "방명록 생성하기",
    right: null,
  };

  const func: IMenuFunc = {
    left_func: () => navigate(-1),
    right_func: null,
  };

  const style = {
    textDecoration: "underline",
  };

  return (
    <div className="w-full">
      <Header menu={menu} func={func} />
      <div className="h-[calc(100vh-2.5rem)] mt-10 flex flex-col px-7">
        <div className="flex gap-3 pt-4">
          {/* @TODO: 리팩토링때에 Tab.tsx 컴포넌트로 분리해도 될듯 (props:url, text)*/}
          <div
            style={pathname === "/add-guestbook" ? style : undefined}
            className={`${
              pathname === "/add-guestbook"
                ? "border-b-[3px] border-primary-1 leading-6 text-primary-1 font-bold"
                : "text-[#D9D9D9]"
            }`}
          >
            기본 정보
          </div>
          <div
            style={pathname === "/add-guestbook/photo" ? style : undefined}
            className={`${
              pathname === "/add-guestbook/photo"
                ? "border-b-[3px] border-primary-1 leading-6 text-primary-1 font-bold"
                : "text-[#D9D9D9]"
            }`}
          >
            프로필
          </div>
          <div
            style={pathname === "/add-guestbook/desc" ? style : undefined}
            className={`${
              pathname === "/add-guestbook/desc"
                ? "border-b-[3px] border-primary-1 leading-6 text-primary-1 font-bold"
                : "text-[#D9D9D9]"
            }`}
          >
            소개
          </div>
        </div>
        <Outlet
          context={{
            guestbook,
            setGuestbook,
          }}
        />
        {/* 현재위치를 나타내는 상태도 prop로 */}
      </div>
    </div>
  );
};

export default AddGuestBook;
