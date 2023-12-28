import { useEffect, useState } from 'react';
import FootprintTab from './FootprintTab';
import GuestBookInfo from './GuestBookInfo';
import PhotoAlbumTab from './PhotoAlbumTab';

type tab = 0 | 1;

const Footprint = () => {
  const [tab, setTab] = useState<tab>(0);

  const changeTab = (index: number) => {
    setTab(index);
  };
  return (
    <div className="absolute top-0 w-full pt-16 z-15">
      <GuestBookInfo />
      <div className="flex pt-10 text-center text-primary-1">
        <div
          onClick={() => {
            changeTab(0);
          }}
          className={
            tab === 0
              ? 'border-b-[3px] font-bold flex-1 border-primary-1'
              : 'border-b-[1px] text-primary-2 font-base flex-1 border-primary-2'
          }
        >
          <p>발자국 조회</p>
        </div>
        <div
          onClick={() => {
            changeTab(1);
          }}
          className={
            tab === 1
              ? 'border-b-[3px] font-bold flex-1 border-primary-1'
              : 'border-b-[1px] font-base flex-1 text-primary-2 border-primary-2'
          }
        >
          <p>사진첩 보기</p>
        </div>
      </div>
      {/* 탭에 따른 컴포넌트 보여주기 */}
      {tab === 0 ? <FootprintTab /> : <PhotoAlbumTab />}
    </div>
  );
};

export default Footprint;
