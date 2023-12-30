import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import AddressModal from "./AddressModal";
import { IAddressObject, IGuesetBookState } from "../../interfaces";
import { confirmProfile, formattingAddress, getGeocode } from "../../utils";

const Profile = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { guestbook, setGuestbook } = useOutletContext<IGuesetBookState>();
  const [address, setAddress] = useState<string | null>(null);
  const [obj, setObj] = useState<IAddressObject | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [shake, setShake] = useState<boolean>(false);

  const nextHandler = () => {
    if (confirmProfile(guestbook)) {
      setShake(false);
      navigate("/add-guestbook/photo");
    } else {
      setShake(!shake);
    }
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (address) {
      setObj(formattingAddress(address));

      // @TODO: 성능 개선하기 -> 리렌더링 최소화 (useMemo or useCallback 사용)
      getGeocode(address).then((geocode) => {
        setGuestbook({
          address: address,
          name: name,
          latitude: geocode.latitude,
          longitude: geocode.longitude,
          description: null,
          photo: null,
        });
      });
      // 기본 설정 탭에서 이름, 주소 외에는 null로 입력했기 때문에
      // 다음 탭으로 갔다가 이전 탭으로 돌아올 경우 이전 데이터 소실을 염두에 둬야함 -> 필요하면 추후 리팩토링 @TODO
    }
  }, [address, name]);

  return (
    <div className="px-2 py-4 w-full h-full flex flex-col justify-between">
      {modal && <AddressModal setModal={setModal} setAddress={setAddress} />}
      <div className="flex flex-col justify-between">
        <div
          className={`text-xl font-bold py-8 leading-8 ${
            shake ? "animate-shake" : ""
          } `}
        >
          <p>등록하고 싶은 장소의</p>
          <p>기본 정보를 설정해 주세요</p>
        </div>

        <div className="py-4">
          <h3 className="font-semibold py-3">주소 등록하기</h3>
          <div onClick={() => setModal(!modal)} className="pb-2">
            {obj && obj.sigungu ? (
              <p>{obj.sigungu}</p>
            ) : (
              <p className="text-gray-400">건물, 지번 또는 도로명 검색</p>
            )}
          </div>
          <div onClick={() => setModal(!modal)}>
            {obj && obj.dong ? (
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
            value={name !== null ? name : ""}
          />
        </div>
      </div>
      {/* TODO: null값 있을 경우 버튼 회색 표시 */}
      <div onClick={nextHandler}>
        {confirmProfile(guestbook) ? (
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

export default Profile;
