function FootprintTab() {
  return (
    <div className="w-full px-4">
      {/* 날자별 반복 */}
      <div className="pt-6">
        <p className="font-bold">2023년 12월 14일</p>
        {/* 발자국별 반복 */}
        <div className="grid grid-cols-3 gap-5 pt-5">
          <div className="flex flex-col items-center justify-center">
            <img src="/src/assets/green-paw-icon.png" />
            <p>차차</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/src/assets/green-paw-icon.png" />
            <p>원쥬</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/src/assets/green-paw-icon.png" />
            <p>승현</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/src/assets/green-paw-icon.png" />
            <p>차</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/src/assets/green-paw-icon.png" />
            <p>원</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FootprintTab;
