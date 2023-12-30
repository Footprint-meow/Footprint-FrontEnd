import React, { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { CiCamera } from "react-icons/ci";
import { IGuesetBookState } from "../../interfaces";
import { confirmPhoto } from "../../utils";

const Photo = () => {
  const navigate = useNavigate();
  const { guestbook, setGuestbook } = useOutletContext<IGuesetBookState>();
  const [photo, setPhoto] = useState([]);
  const [shake, setShake] = useState<boolean>(false);

  const onChange = (imageList: ImageListType) => {
    setPhoto(imageList as never[]);
  };

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
      photo: photo,
    }));

    console.log("Photo에서 : ", guestbook);
  }, [photo]);

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
        <ImageUploading
          value={photo}
          onChange={onChange}
          maxNumber={1}
          dataURLKey="data_url"
        >
          {({ imageList, onImageUpload, onImageUpdate }) => (
            // write your building UI
            <div className="h-full">
              {imageList.length <= 0 && (
                <button
                  onClick={onImageUpload}
                  className="w-full h-full bg-[#d9d9d93f] rounded-xl"
                >
                  <CiCamera
                    size="3rem"
                    style={{ color: "#878787", margin: "auto" }}
                  />
                </button>
              )}
              {imageList.map((image, index) => (
                <div key={index} className="">
                  <button
                    onClick={() => onImageUpdate(index)}
                    className="w-full"
                  >
                    <img
                      src={image["data_url"]}
                      alt="guestbook-profile-image"
                      className="w-full"
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
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
