function PhotoAlbumTab() {
  return (
    <div className="w-full">
      {/* 날자별 반복 */}
      <div className="pt-6">
        <p className="px-4 font-bold">2023년 12월 14일</p>
        {/* 발자국별 반복 */}
        <div className="grid grid-cols-3 pt-5">
          <img className="object-cover w-full h-28" src="/src/assets/dummy1.png" />
          <img className="object-cover w-full h-28" src="/src/assets/dummy2.jpg" />
          <img className="object-cover w-full h-28" src="/src/assets/dummy1.png" />
          <img className="object-cover w-full h-28" src="/src/assets/dummy2.jpg" />
        </div>
      </div>
    </div>
  );
}

export default PhotoAlbumTab;
