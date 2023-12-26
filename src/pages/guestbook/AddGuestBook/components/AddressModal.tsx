import React from "react";
import DaumPostcode from "react-daum-postcode";

const AddressModal = ({ setModal }: any) => {
  const postCodeStyle = {
    width: "250px",
    height: "400px",
    // display: modalState ? "block" : "none",
  };
  const onCompletePost = (data: any) => {
    setModal(false);
    console.log("주소 선택!", data);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center">
      <div className="bg-white rounded w-10/12 md:w-1/3">
        <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />
      </div>
    </div>
  );
};

export default AddressModal;
