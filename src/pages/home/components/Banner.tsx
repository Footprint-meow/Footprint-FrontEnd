const Banner = () => {
  return (
    <div className="flex flex-col items-start justify-between bg-sub-2 w-screen pl-7 pr-5 h-1/3">
      <div className="flex flex-col items-start text-xl font-bold pt-12 pb-5 leading-8">
        <p>👋🏻 안녕하세요 이원주님,</p>
        <p>오늘의 발자국을 확인해 보세요</p>
      </div>

      {/* 발자국 스탬프 프로그레스 바 */}
      <div className="w-full">

        <div className="flex items-center text-left font-semibold text-primary-1">
          {/* @TODO: 추후 실제 발자국 개수로 수정 */}
          15
          <img
            src="/src/assets/green-paw-icon.png"
            alt="green-paw-icon"
            className="w-5 h-4 mx-1"
          />
          until next grage
        </div>

        <div className="pb-5 w-full flex items-center gap-2">

          {/* 게이지바 */}
          <div className="w-4/5 bg-gray-300 rounded-full h-2.5">
            <div
              className="bg-primary-1 h-2.5 rounded-full"
              style={{ width: "45%" }} // @TODO: 추후 실제 data값으로 수정
            ></div>
          </div>

          <div className="w-1/5 flex items-center">
            <span className="text-primary-1 text-2xl font-bold">24</span>
            <div>
              {/* @TODO: 추후 실제 발자국 개수로 수정 
                등급별 발자국 개수 안내 페이지 필요
              */}
              /40
              <img
                src="/src/assets/paw-icon.png"
                alt="paw-icon"
                className="w-3 inline"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
