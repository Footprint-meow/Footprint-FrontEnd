import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddressModal from "./AddressModal";

const Profile = () => {
  const [modal, setModal] = useState(false);
// 주소 정보 담아서 prop 전달

  useEffect(() => {
    console.log("모달은", modal);
  }, [modal]);

  return (
    <div className="px-2 py-4 h-full flex flex-col justify-between ">
      {modal && <AddressModal setModal={setModal} />}
      <div className="h-2/3 flex flex-col justify-between">
        <div className="text-xl font-bold pt-8 leading-8">
          <p>등록하고 싶은 장소의</p>
          <p>기본 정보를 설정해 주세요</p>
        </div>

        <div>
          <h3 className="font-semibold py-3">주소 등록하기</h3>
          <input
            type="text"
            placeholder="건물, 지번 또는 도로명 검색"
            onClick={() => setModal(!modal)}
          />
          <input type="text" placeholder="시 구군 동 주소" value="helo" />
        </div>

        <div>
          <h3 className="font-semibold py-3">방명록 이름 설정하기</h3>
          <input type="text" placeholder="두 글자 이상의 이름을 지어 주세요" />
        </div>
      </div>
      <Link to="/add-guestbook/photo">
        <button className="w-full bg-primary-1 text-white text-lg font-black leading-9 m-auto rounded-xl h-12 mb-6">
          다음
        </button>
      </Link>
    </div>
  );
};

export default Profile;
