import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddressModal from "./AddressModal";
import { IAddressObject } from "../../interfaces";
import { formattingAddress } from "../../utils";

const Profile = () => {
  const [modal, setModal] = useState(false);
  const [address, setAddress] = useState("");
  const [obj, setObj] = useState<IAddressObject>({
    sigungu: "",
    dong: "",
  });
  const [name, setName] = useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (address) {
      setObj(formattingAddress(address));
    }
    console.log(name);
  }, [modal]);

  return (
    <div className="px-2 py-4 w-full h-full flex flex-col justify-between ">
      {modal && <AddressModal setModal={setModal} setAddress={setAddress} />}
      <div className="flex flex-col justify-between">
        <div className="text-xl font-bold py-8 leading-8">
          <p>등록하고 싶은 장소의</p>
          <p>기본 정보를 설정해 주세요</p>
        </div>

        <div className="py-4">
          <h3 className="font-semibold py-3">주소 등록하기</h3>
          <div onClick={() => setModal(!modal)} className="pb-2">
            {obj.sigungu ? (
              <p>{obj.sigungu}</p>
            ) : (
              <p className="text-gray-400">건물, 지번 또는 도로명 검색</p>
            )}
          </div>
          <div onClick={() => setModal(!modal)}>
            {obj.dong ? (
              <p>{obj.dong}</p>
            ) : (
              <p className="text-gray-400">동 주소</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-semibold py-3">방명록 이름 설정하기</h3>
          <input
            type="text"
            placeholder="두 글자 이상의 이름을 지어 주세요"
            className="w-full"
            onChange={onChangeName}
          />
        </div>
      </div>
      <Link to="/add-guestbook/photo">
        <button
          className="w-full bg-primary-1 text-white text-lg font-black leading-9 m-auto rounded-xl h-12 mb-6"
        >
          다음
        </button>
      </Link>
    </div>
  );
};

export default Profile;
