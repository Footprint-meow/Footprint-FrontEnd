import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IFootprintState } from "../../interfaces";
import { confirmWriter } from "../../utils";

const Writer = () => {
  const navigate = useNavigate();
  const { footprint, setFootprint } = useOutletContext<IFootprintState>();
  const [writer, setWriter] = useState<string>("");
  const [shake, setShake] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };

  const nextHandler = () => {
    if (confirmWriter(footprint)) {
      setShake(false);
      navigate("/footprint/add-step/impression");
    } else {
      setShake(!shake);
    }
  };

  useEffect(() => {
    setFootprint({
      writer: writer,
      guestbook: null,
      content: null,
      isSelect: null,
      password: null,
      latitude: null,
      longitude: null,
    });
  }, [writer]);

  return (
    <>
      <div className={shake ? "animate-shake" : ""}>
        <p className="text-lg font-bold">누구의 발자국인가요</p>
        <input
          onChange={onChange}
          type="text"
          placeholder="이름 또는 별명을 입력해주세요"
          className="w-full py-2 border-b outline-none "
        ></input>
      </div>
      <div className="w-full fixed left-0 bottom-0 p-7">
        {confirmWriter(footprint) ? (
          <button onClick={nextHandler} className="w-full p-4 text-lg font-black text-white  rounded-2xl bg-primary-1">
            다음
          </button>
        ) : (
          <button onClick={nextHandler} className="w-full p-4 text-lg font-black text-white  rounded-2xl bg-disabled">
            다음
          </button>
        )}
      </div>
    </>
  );
};

export default Writer;
