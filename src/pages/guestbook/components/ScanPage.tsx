import React from "react";
import { useNavigate } from "react-router-dom";
import { IMenu, IMenuFunc } from "../../../types/header";
import { icons } from "../../../constants/header-icons";
import Header from "../../../components/Header";
import QRScanner from "./QRScanner";

const ScanPage = () => {
  const navigate = useNavigate();
  const menu: IMenu = {
    left: icons.BACK,
    center: "QR 스캔하기",
    right: null,
  };

  const func: IMenuFunc = {
    left_func: () => navigate(-1),
    right_func: null,
  };
  return (
    <div className="w-full">
      <Header menu={menu} func={func} />
      <div className="h-[calc(100vh-2.5rem)] mt-10 flex flex-col">
        <QRScanner />
      </div>
    </div>
  );
};

export default ScanPage;
