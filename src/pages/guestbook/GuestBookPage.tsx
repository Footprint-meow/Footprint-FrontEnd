import { useNavigate } from "react-router-dom";
import { IMenu, IMenuFunc } from "../../types/header";
import { icons } from "../../constants/header-icons";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { IGuestBookInfo } from "../footprint/interfaces";
import GuestBookInfo from "../../components/GuestBookInfo";

function GuestBookPage() {
  const navigate = useNavigate();

  const guestBookInfo: IGuestBookInfo = {
    photo: '/src/assets/dummy2.jpg',
    name: '원쥬의 홈',
    address: '경상북도 구미시 인의동',
    count: 24,
  };

  const menu: IMenu = {
    left: icons.BACK,
    center: "방명록",
    right: icons.QRCODE,
  };

  const func: IMenuFunc = {
    left_func: () => navigate(-1),
    right_func: null,
  };
  return (
    <div className="w-full">
      {/* @TODO: 이미지 중앙이 보이도록 */}
      <img src="/src/assets/home-img2.png" alt="" className="w-screen" />
      <Header menu={menu} func={func} />
      <div className="h-[calc(100vh-11rem)] pt-2 w-full absolute bottom-0 bg-white flex flex-col items-center z-10 rounded-t-[3.2rem]">
        {/* @TODO: 방명록 타이틀 컴포넌트로 수정 */}
        <GuestBookInfo info={guestBookInfo} hidden={"hidden"} />
        <div className="w-full px-7">
          <div className="border-slate-800 rounded-lg h-full">
            어서와 우리집은 처음이지
          </div>
          <Link to="/add-guestbook">
            <button className="w-full bg-primary-1 text-white text-lg font-black leading-9 m-auto rounded-xl h-14 shadow-md mb-2">
              내 발자국 남기기
            </button>
          </Link>
          <Link to="/footprint">
            <button className="w-full bg-primary-1 text-white text-lg font-black leading-9 m-auto rounded-xl h-14 shadow-md">
              다른 사람의 발자국 구경하기
            </button>
          </Link>
          <Link to="/login">
            <p className="text-center py-4 text-primary-1 text-sm font-semibold underline">
              나도 방명록 만들기
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GuestBookPage;
