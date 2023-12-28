import { useEffect, useRef, useState } from 'react';
import { CiCamera } from 'react-icons/ci';

const AddPhoto = () => {
  const guestbook: string = '원쥬의 홈';
  const [imgFile, setImgFile] = useState<string>('');
  const imgRef = useRef<HTMLInputElement>(null);

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    if (imgRef.current && imgRef.current.files) {
      const file: File | undefined = imgRef.current.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const result: string | null = reader.result as string;
          setImgFile(result || '');
        };

        console.log(imgFile);
        console.log(file);
        console.log(reader);
      }
    }
  };

  return (
    <>
      <div className="absolute top-0 w-full h-full pt-16 pb-36 z-15">
        <div className="flex flex-col h-full px-6 pt-3">
          <div className="pb-8 text-xl font-bold">
            <p>{guestbook}에</p>
            <div className="flex items-center gap-2">
              <p>발자국을 남겨보세요</p>
              <img src="/src/assets/green-paw-icon.png" className="w-6 h-5" />
            </div>
            <p className="pt-2 text-sm text-[#7C7C7C8F]">사진은 한장만 등록 할 수 있어요</p>
          </div>
          {/* 이미지 업로드 코드 */}
          <form className=" rounded-2xl flex-1 bg-[#D9D9D92B]">
            <label className="flex items-center justify-center w-full h-full" htmlFor="photoImg">
              {imgFile ? (
                <img src={imgFile} className="object-cover w-full h-full rounded-2xl"></img>
              ) : (
                <CiCamera size="2rem" color="#878787" />
              )}
            </label>
            <input
              onChange={saveImgFile}
              ref={imgRef}
              type="file"
              accept="image/*"
              id="photoImg"
              className="hidden w-full h-full cursor-pointer"
            ></input>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 w-full p-6">
        <button className="w-full p-4 text-xl font-bold text-white rounded-2xl bg-primary-1">사진 등록하기</button>
      </div>
    </>
  );
};

export default AddPhoto;
