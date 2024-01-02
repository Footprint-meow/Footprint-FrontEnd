import { useState } from 'react';
import { Switch } from '@headlessui/react';

const AddStep = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      {/* #TODO 추후에 페이지 변경 할 수 도 있음 */}
      <div className="relative w-full ">
        <div className="absolute top-0 w-full pt-16 z-15">
          <div className="px-8 pt-3">
            <div className="">
              <p className="text-lg font-bold">누구의 발자국인가요</p>
              <input
                type="text"
                placeholder="이름 또는 별명을 입력해주세요"
                className="w-full py-2 border-b outline-none "
              ></input>
            </div>
            <div className="py-8">
              <div>
                <p className="py-4 text-lg font-bold">방문한 소감을 남겨주세요</p>
                <textarea
                  rows={6}
                  className="w-full p-4 bg-[#D9D9D92B] rounded-lg outline-none resize-none"
                  placeholder="최소 10자 이상 방명록을 남겨주세요"
                ></textarea>
                <p className="pr-2 text-right">0 / 100</p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-bold">비공개 여부를 설정해주세요</p>
                <div className="flex">
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-primary-1' : 'bg-black/10'}
          relative inline-flex h-[33px] w-[69px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                  >
                    <span
                      aria-hidden="true"
                      className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[29px] w-[29px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
              </div>
            </div>
            <div className="py-8">
              {/* #TODO 암호를 걸어주는데에서는 키패드가 숫자로 뜨게 */}
              <p className="text-lg font-bold">발자국의 암호를 걸어 주세요</p>
              <input
                type="text"
                placeholder="비밀번호 숫자 4자리를 입력해주세요"
                className="w-full py-2 border-b outline-none"
              ></input>
            </div>
            <div className="py-8">
              {/* #TODO 버튼 비활성화 해야함 */}
              <button className="w-full p-4 text-xl font-bold text-white rounded-2xl bg-primary-1">
                발자국 남기기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStep;
