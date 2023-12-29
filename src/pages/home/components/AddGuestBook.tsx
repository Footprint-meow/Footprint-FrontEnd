import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AddGuestBookBtn = () => {
  const style = {
    color: "#B6BBC4",
  };
  return (
    <Link to="/add-guestbook">
      <div className="w-32 h-32 bg-[#EEE] rounded-full flex items-center justify-center">
        <FaPlus size="2rem" style={style} />
      </div>
    </Link>
  );
};

export default AddGuestBookBtn;
