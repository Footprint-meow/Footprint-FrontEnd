import React from "react";
import { useNavigate } from "react-router-dom";
import { IMenu, IMenuFunc } from "../../../types/header";
import Header from "../../../components/Header";
import { icons } from "../../../constants/header-icons";
import { Link } from "react-router-dom";

const EditGuestBook = () => {
  const navigate = useNavigate();

  const menu: IMenu = {
    left: icons.BACK,
    center: "방명록 편집",
    right: null,
  };

  const func: IMenuFunc = {
    left_func: () => navigate(-1),
    right_func: null,
  };

  return (
    <div className="w-full">
      <Header menu={menu} func={func} />
      <div className="h-[calc(100vh-2.5rem)] mt-10 flex flex-col bg-[#F1F1F16B] gap-3 overflow-y-auto">
        <div className="pt-3">
          <div className="bg-white px-7 pt-5 pb-7">
            <h2 className="text-lg font-bold py-2">방명록 이름</h2>
            <input type="text" placeholder="원쥬의 홈" className="w-full" />
          </div>
          <div className="bg-white px-7 py-3">
            <h2 className="text-lg font-bold py-2">주소</h2>
            <input
              type="text"
              placeholder="경북 구미시"
              className="w-full mb-2"
            />
            <input type="text" placeholder="인의동" className="w-full" />
          </div>
        </div>
        <div className="bg-white px-7 pt-5 pb-7">
          <h2 className="text-lg font-bold py-2">대표 이미지</h2>
          <img src="/src/assets/home-img.png" alt="home" />
        </div>
        <div className="bg-white px-7 pt-5 pb-7">
          <h2 className="text-lg font-bold py-2">인사말</h2>
          <textarea
            placeholder="방문자에게 하고싶은 말을 남겨 보세요"
            cols={30}
            rows={10}
            maxLength={30}
            style={{ resize: "none" }}
            className="bg-[#d9d9d93f] p-7 w-full h-2/3 rounded-xl"
          ></textarea>
          <Link to="/guestbook">
            <button className="w-full bg-primary-1 text-white text-lg font-black leading-9 m-auto rounded-xl h-12 mt-7">
              수정하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditGuestBook;
