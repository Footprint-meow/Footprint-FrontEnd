import React from "react";
import DaumPostcode from "react-daum-postcode";
import { IAddr, IAddressModalProp } from "../../interfaces";

/* @TODO: 모달창 전환 애니메이션 추가하기
https://velog.io/@hyumapr/React-Transition-Group을-도입해보자
*/

const AddressModal = ({ setModal, setAddress }: IAddressModalProp) => {
  const onCompletePost = (data: IAddr) => {
    setModal(false);
    if (data.jibunAddress) {
      setAddress(data.jibunAddress);
    } else if (data.address) {
      setAddress(data.address);
    }
  };

  return (
    <div
      onClick={() => setModal(false)}
      className="h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-60 text-center"
    >
      <div className="w-4/5 h-4/5 bg-white">
        <DaumPostcode style={{ height: "100%" }} onComplete={onCompletePost} />
      </div>
    </div>
  );
};

export default AddressModal;
