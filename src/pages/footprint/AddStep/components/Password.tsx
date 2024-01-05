import { useNavigate, useOutletContext } from "react-router-dom";
import { IFootprintState } from "../../interfaces";
import { useEffect, useState } from "react";
import { confirmPassword } from "../../utils";

const Password = () => {
  const navigate = useNavigate();
  const MAX_LENGTH: number = 4;
  const { footprint, setFootprint } = useOutletContext<IFootprintState>();
  const [password, setPassword] = useState<string>("");
  const [shake, setShake] = useState<boolean>(false);

  const nextHandler = () => {
    if (confirmPassword(footprint)) {
      setShake(false);
      navigate("/footprint");
    } else {
      setShake(!shake);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      setPassword(e.target.value.slice(0, MAX_LENGTH));
    } else {
      setPassword(e.target.value);
    }
  };

  const disableNumberInputWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    target.blur();
    e.stopPropagation();
  };

  useEffect(() => {
    setFootprint((prevState) => ({
      ...prevState!,
      password: password,
    }));

    console.log(footprint);
  }, [password]);

  return (
    <>
      <div className={`py-8 ${shake ? "animate-shake" : ""}`}>
        {/* #TODO 암호를 걸어주는데에서는 키패드가 숫자로 뜨게 */}
        <p className="text-lg font-bold">발자국의 암호를 걸어 주세요</p>
        <input
          onChange={onChange}
          maxLength={MAX_LENGTH}
          value={password}
          type="number"
          inputMode="numeric"
          pattern="\d*"
          placeholder="비밀번호 숫자 4자리를 입력해주세요"
          className="w-full py-2 border-b outline-none"
          onWheel={disableNumberInputWheel}
        ></input>
      </div>
      <div className="w-full fixed left-0 bottom-0 p-7">
        {confirmPassword(footprint) ? (
          <button onClick={nextHandler} className="w-full p-4 text-lg font-black text-white  rounded-2xl bg-primary-1">
            방자국 등록하기
          </button>
        ) : (
          <button onClick={nextHandler} className="w-full p-4 text-lg font-black text-white  rounded-2xl bg-disabled">
            방자국 등록하기
          </button>
        )}
      </div>
    </>
  );
};

export default Password;
