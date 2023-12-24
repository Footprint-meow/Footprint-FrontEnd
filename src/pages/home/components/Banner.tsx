import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-start justify-between bg-sub-2 w-screen px-7 h-1/3">
      <div className="flex flex-col items-start text-xl font-bold py-10">
        <p>👋🏻 안녕하세요 이원주님,</p>
        <p>오늘의 발자국을 확인해 보세요</p>
      </div>
      <div className="py-5">발자국 등급</div>
    </div>
  );
};

export default Banner;
