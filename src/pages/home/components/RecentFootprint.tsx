import React from "react";
import { FaPaw } from "react-icons/fa";

const RecentFootprint = () => {
  const style = { color: "#88AB8E" };
  return (
    <div className="flex flex-col items-start px-7 py-5 h-1/3 w-screen">
      <p className="text-xl font-bold">최근에 달린 발자국</p>
      <div className="pt-5">
        <ul className="flex gap-4">
          <li>
            <FaPaw size="4rem" style={style} />
          </li>
          <li>
            <FaPaw size="4rem" style={style} />
          </li>
          <li>
            <FaPaw size="4rem" style={style} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentFootprint;
