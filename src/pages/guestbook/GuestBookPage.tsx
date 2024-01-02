import { useNavigate } from "react-router-dom";
import { IMenu, IMenuFunc } from "../../types/header";
import { icons } from "../../constants/header-icons";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import QRScanner from "./components/QRScanner";

function GuestBookPage() {
  const navigate = useNavigate();
  const menu: IMenu = {
    left: icons.BACK,
    center: "방명록",
    right: icons.QRCODE,
  };

  const func: IMenuFunc = {
    left_func: () => navigate(-1),
    right_func: () => navigate("/qr-scanner"),
  };
  
  return (
    <div className="w-full">
      {/* @TODO: 이미지 중앙이 보이도록 */}
      <img src="/src/assets/home-img2.png" alt="" className="w-screen" />
      <Header menu={menu} func={func} />
      <div className="h-[calc(100vh-11rem)] pt-2 w-full absolute bottom-0 bg-white flex flex-col items-center z-10 rounded-t-[3.2rem]">
        {/* @TODO: 방명록 타이틀 컴포넌트로 수정 */}
        <div className="flex items-center w-[calc(100%-1rem)] px-6 pl-3 rounded-full bg-sub-2">
          <img
            src="/src/assets/dummy2.jpg"
            className="object-cover w-20 h-20 rounded-full"
          />
          <div className="bg-white rounded-full "></div>
          <div className="flex flex-col gap-1 p-2 basis-4/5">
            <div className="flex items-center gap-3">
              <p className="font-bold ">원쥬의 홈</p>
              <img
                src="/src/assets/green-paw-icon.png"
                alt="green-paw-icon"
                className="w-5 h-4"
              />
              <p className="font-bold text-primary-1">24</p>
            </div>
            <div className="text-sm">경상 북도 구미시 인의동</div>
            <div className="flex justify-between gap-2 text-center text-white">
              <div className="flex-1 p-1 text-sm rounded-md bg-primary-1">
                방명록 편집
              </div>
              <div className="flex-1 p-1 text-sm rounded-md bg-primary-1">
                방명록 공유
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-7">
          <div className="border-slate-800 rounded-lg h-full">
            어서와 우리집은 처음이지
            <QRScanner />
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
