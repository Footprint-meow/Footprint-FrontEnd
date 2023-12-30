import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { IGuesetBookState } from "../../interfaces";

/*
텍스트 에디터 넣고 싶음. 호스트도 자기 방명록에 대한 소개 문구를 커스텀하고 싶어하지 않을까
@TODO: 추후 React-Quill 추가하기
참고: https://velog.io/@stakbucks/React-Quill-WYSIWYG-에디터-사용하기 
*/

const Description = () => {
  const { guestbook, setGuestbook } = useOutletContext<IGuesetBookState>();
  const [desc, setDesc] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  useEffect(() => {
    setGuestbook((prevState) => ({
      ...prevState!,
      description: desc,
    }));
  }, [desc]);

  return (
    <div className="px-2 py-4 w-full h-full flex flex-col justify-between">
      <div className="text-xl font-bold py-8 leading-8">
        <p>방명록의 소개 문구를</p>
        <p>작성해 주세요</p>
      </div>
      <div className="h-1/2">
        <textarea
          placeholder="방문자에게 하고싶은 말을 남겨 보세요"
          cols={30}
          rows={10}
          maxLength={30}
          style={{ resize: "none" }}
          onChange={onChange}
          className="bg-[#d9d9d93f] p-7 w-full h-full rounded-xl"
        ></textarea>
      </div>
      <Link to="/" onClick={()=> console.log(guestbook)}>
        <button className="w-full bg-primary-1 text-white text-lg font-bold leading-9 m-auto rounded-xl h-12 mb-6">
          방명록 등록하기
        </button>
      </Link>
    </div>
  );
};

export default Description;
