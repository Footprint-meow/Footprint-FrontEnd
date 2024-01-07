import { useNavigate } from "react-router-dom";
import { IMenu, IMenuFunc } from "../../../types/header";
import Header from "../../../components/Header";
import { icons } from "../../../constants/header-icons";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const EditGuestBook = () => {
  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState<string>("");
  const imgRef = useRef<HTMLInputElement>(null);

  const menu: IMenu = {
    left: icons.BACK,
    center: "방명록 편집",
    right: null,
  };

  const func: IMenuFunc = {
    left_func: () => navigate(-1),
    right_func: null,
  };

  const saveImgFile = () => {
    const file = imgRef.current?.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          const size = Math.min(img.width, img.height);
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          if (ctx) {
            canvas.width = size;
            canvas.height = size;
            ctx.drawImage(
              img,
              (img.width - size) / 2,
              (img.height - size) / 2,
              size,
              size,
              0,
              0,
              size,
              size
            );

            setImgFile(canvas.toDataURL("image/jpeg"));
          }
        };
      };

      reader.readAsDataURL(file);
      
    }
  };

  return (
    <div className="w-full">
      <Header menu={menu} func={func} />
      <div className="h-[calc(100vh-2.5rem)] mt-10 flex flex-col bg-[#F1F1F16B] gap-3 overflow-y-auto">
        <div className="">
          <div className="bg-white px-7 pt-5 pb-7">
            <h2 className="text-lg font-bold py-2">방명록 이름</h2>
            <input type="text" placeholder="원쥬의 홈" className="w-full" />
          </div>
          <div className="bg-white px-7 pb-7">
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
          <form className="rounded-2xl flex-1 bg-[#D9D9D92B]">
            <label
              className="flex items-center justify-center w-full h-full"
              htmlFor="photoImg"
            >
              {imgFile ? (
                <img
                  src={imgFile}
                  className="object-cover w-full h-full rounded-2xl"
                ></img>
              ) : (
                <img
                  src="/src/assets/home-img.png"
                  className="object-cover w-full h-full rounded-2xl"
                ></img>
              )}
            </label>
            <input
              onChange={saveImgFile}
              ref={imgRef}
              type="file"
              accept="image/*"
              id="photoImg"
              className="hidden w-full h-full cursor-pointer"
            ></input>
          </form>
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
