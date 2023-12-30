import React from "react";
import DaumPostcode from "react-daum-postcode";

const AddressModal = ({ setModal, setAddress }: any) => {
  const onCompletePost = (data: any) => {
    setModal(false);
    console.log("주소 선택!", data);
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
