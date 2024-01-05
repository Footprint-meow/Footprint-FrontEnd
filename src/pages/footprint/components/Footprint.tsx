import { useState } from "react";
import FootprintTab from "./FootprintTab";
import GuestBookInfo from "../../../components/GuestBookInfo";
import PhotoAlbumTab from "./PhotoAlbumTab";
import { IGuestBookInfo, ITabInfo, TabIndex } from "../interfaces";

const Footprint = () => {
  const [tab, setTab] = useState<TabIndex>(0);

  const tabArr: ITabInfo[] = [
    {
      index: 0,
      tabTitle: "발자국 조회",
      content: <FootprintTab />,
    },
    {
      index: 1,
      tabTitle: "사진첩 보기",
      content: <PhotoAlbumTab />,
    },
  ];

  const guestBookInfo: IGuestBookInfo = {
    photo: "/src/assets/dummy2.jpg",
    name: "원쥬의 홈",
    address: "경상북도 구미시 인의동",
    count: 24,
  };

  const changeTab = (index: TabIndex) => {
    setTab(index);
  };
  return (
    <div className="absolute top-0 w-full pt-16 z-15">
      <GuestBookInfo info={guestBookInfo} hidden={null} />
      <div className="relative flex w-full pt-10 pb-2 text-center text-primary-1">
        {tabArr.map((item) => {
          return (
            <div
              key={item.index}
              onClick={() => {
                changeTab(item.index);
              }}
              className={item.index === tab ? " font-bold flex-1 " : "text-primary-2 flex-1 "}
            >
              <p>{item.tabTitle}</p>
            </div>
          );
        })}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-2">
          <div
            className={`${
              tab !== 0 ? "left-1/2" : "left-0"
            } duration-500 ease-in-out relative bottom-[2px] z-10 w-1/2 h-[3px] bg-primary-1`}
          ></div>
        </div>
      </div>
      {/* 탭에 따른 컴포넌트 보여주기 */}
      {tabArr[tab].content}
    </div>
  );
};

export default Footprint;
