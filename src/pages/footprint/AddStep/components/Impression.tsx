import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IFootprintState } from "../../interfaces";
import { confirmImpression } from "../../utils";

const Impression = () => {
  const MAX_LENGTH: number = 30;
  const navigate = useNavigate();
  const { footprint, setFootprint } = useOutletContext<IFootprintState>();
  const [isSelect, setIsSelect] = useState(false);
  const [content, setContent] = useState<string>("");
  const [shake, setShake] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const nextHandler = () => {
    if (confirmImpression(footprint)) {
      setShake(false);
      navigate("/footprint/add-step/pwd");
    } else {
      setShake(!shake);
    }
  };

  useEffect(() => {
    setFootprint((prevState) => ({
      ...prevState!,
      content: content,
      isSelect: isSelect,
    }));
  }, [content, isSelect]);

  return (
    <div>
      <div className={shake ? "animate-shake" : ""}>
        <div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg font-bold">비공개 여부를 설정해주세요</p>
            <div className="flex">
              <Switch
                checked={isSelect}
                onChange={setIsSelect}
                className={`${isSelect ? "bg-primary-1" : "bg-black/10"}
relative inline-flex h-[33px] w-[69px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
              >
                <span
                  aria-hidden="true"
                  className={`${isSelect ? "translate-x-9" : "translate-x-0"}
  pointer-events-none inline-block h-[29px] w-[29px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
          </div>
        </div>
        <div className="py-4">
          <div>
            <p className="py-4 text-lg font-bold">방문한 소감을 남겨주세요</p>
            <textarea
              cols={15}
              rows={6}
              maxLength={MAX_LENGTH}
              onChange={onChange}
              className="w-full p-4 bg-[#D9D9D92B] rounded-xl outline-none resize-none"
              placeholder="최소 10자 이상 방명록을 남겨주세요"
            ></textarea>
            <p className="pr-2 text-right">
              {content.length} / {MAX_LENGTH}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full fixed left-0 bottom-0 p-7">
        {confirmImpression(footprint) ? (
          <button onClick={nextHandler} className="w-full p-4 text-lg font-black text-white  rounded-2xl bg-primary-1">
            다음
          </button>
        ) : (
          <button onClick={nextHandler} className="w-full p-4 text-lg font-black text-white  rounded-2xl bg-disabled">
            다음
          </button>
        )}
      </div>
    </div>
  );
};

export default Impression;
