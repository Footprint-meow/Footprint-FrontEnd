import { useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { CiCamera } from "react-icons/ci";
import { IGuesetBookState } from "../../interfaces";
import { confirmPhoto } from "../../utils";

const Photo = () => {
  const navigate = useNavigate();
  const { guestbook, setGuestbook } = useOutletContext<IGuesetBookState>();
  const [shake, setShake] = useState<boolean>(false);
  const [imgFile, setImgFile] = useState<string>("");
  const imgRef = useRef<HTMLInputElement>(null);

  const nextHandler = () => {
    if (confirmPhoto(guestbook)) {
      setShake(false);
      navigate("/add-guestbook/desc");
    } else {
      setShake(!shake);
    }
  };

  useEffect(() => {
    setGuestbook((prevState) => ({
      ...prevState!,
      photo: imgFile,
    }));

    console.log("Photo에서 : ", guestbook);
    console.log("imgFile: ", imgFile);
  }, [imgFile]);

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

            setImgFile(canvas.toDataURL("image/jpeg/png"));
          }
        };
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-2 py-4 w-full h-full flex flex-col justify-between">
      <div
        className={`text-xl font-bold py-8 leading-8 ${
          shake ? "animate-shake" : ""
        }`}
      >
        <p>방명록을 대표할 사진을</p>
        <p>설정해 주세요</p>
      </div>
      <div className="h-1/2">
        <form className="rounded-2xl flex-1 bg-[#D9D9D92B] h-full">
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
              <CiCamera
                size="3rem"
                style={{ color: "#878787", margin: "auto" }}
              />
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

      <div onClick={nextHandler}>
        {confirmPhoto(guestbook) ? (
          <button className="w-full bg-primary-1 text-white text-lg font-black leading-9 m-auto rounded-xl h-12 mb-6">
            다음
          </button>
        ) : (
          <button className="w-full bg-disabled text-white text-lg font-black leading-9 m-auto rounded-xl h-12 mb-6">
            다음
          </button>
        )}
      </div>
    </div>
  );
};

export default Photo;
