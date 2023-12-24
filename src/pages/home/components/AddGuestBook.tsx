import React from "react";
import { FaPlus } from "react-icons/fa6";

const AddGuestBook = () => {
  const style = {
    color: "#B6BBC4",
  };
  return (
    <div className="w-32 h-32 bg-[#EEE] rounded-full flex items-center justify-center">
      <FaPlus size="2rem" style={style} />
    </div>
  );
};

export default AddGuestBook;
