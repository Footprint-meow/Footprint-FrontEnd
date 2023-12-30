import { useEffect, useState } from 'react';
import FootprintTab from './components/FootprintTab';
import PhotoAlbumTab from './components/PhotoAlbumTab';
import GuestBookInfo from './components/GuestBookInfo';

type tab = 0 | 1;

function FootprintPage() {
  const [tab, setTab] = useState<tab>(0);

  const changeTab = (index: number) => {
    setTab(index);
  };

  return (
    <div className="w-full pt-5">
      <GuestBookInfo />
      <div className="flex pt-10 text-center text-primary-1">
        <div
          onClick={() => {
            changeTab(0);
          }}
          className={
            tab === 0
              ? 'border-b-4 font-bold flex-1 border-primary-1'
              : 'border-b-[3px] font-base flex-1 border-primary-1'
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
              ? 'border-b-4 font-bold flex-1 border-primary-1'
              : 'border-b-[3px] font-base flex-1 border-primary-1'
          }
        >
          <p>사진첩 보기</p>
        </div>
      </div>
      {/* 탭에 따른 컴포넌트 보여주기 */}
      {tab === 0 ? <FootprintTab /> : <PhotoAlbumTab />}
    </div>
  );
}

export default FootprintPage;
