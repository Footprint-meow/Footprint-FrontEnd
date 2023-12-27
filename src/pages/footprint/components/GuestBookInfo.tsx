const GuestBookInfo = () => {
  return (
    <div className="px-5">
      <div className="flex items-center w-full px-6 pl-3 rounded-full bg-sub-2">
        <img src="/src/assets/dummy2.jpg" className="object-cover w-20 h-20 rounded-full" />
        <div className="bg-white rounded-full "></div>
        <div className="flex flex-col gap-1 p-2 basis-4/5">
          <div className="flex items-center gap-3">
            <p className="font-bold ">원쥬의 홈</p>
            <img src="/src/assets/green-paw-icon.png" alt="green-paw-icon" className="w-5 h-4" />
            <p className="font-bold text-primary-1">24</p>
          </div>
          <div className="text-sm">경상 북도 구미시 인의동</div>
          <div className="flex justify-between gap-2 text-center text-white">
            <div className="flex-1 p-1 text-sm rounded-md bg-primary-1">방명록 편집</div>
            <div className="flex-1 p-1 text-sm rounded-md bg-primary-1">방명록 공유</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestBookInfo;
