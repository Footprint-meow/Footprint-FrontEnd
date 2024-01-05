import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

function FootprintTab() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }
  // #TODO 유저아이디랑 방명록 작성자 아이디가 같으면 읽음 처리 API 호출해야함
  // 비밀글인 경우에는 호출안해도 된다고 함
  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="w-full px-4">
      {/* 날자별 반복 */}
      <div className="pt-6">
        <p className="font-bold">2023년 12월 14일</p>
        {/* 발자국별 반복 */}
        <div className="grid grid-cols-3 gap-5 pt-5">
          <div onClick={openModal} className="flex flex-col items-center justify-center">
            <img src="/src/assets/green-paw-icon.png" />
            {/* #TODO 실제 데이터로 수정해야함 */}
            <p className="pt-2">차차</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/src/assets/green-paw-icon.png" />
            <p className="pt-2">원쥬</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/src/assets/green-paw-icon.png" />
            <p className="pt-2">승현</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/src/assets/green-paw-icon.png" />
            <p className="pt-2">차</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/src/assets/green-paw-icon.png" />
            <p className="pt-2">원</p>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center h-full min-h-full px-8 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col w-full p-6 overflow-hidden bg-white shadow-xl h-1/2 py-7 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div></div>
                    <div className="flex items-center gap-3">
                      <img src="/src/assets/green-paw-icon.png" className="w-6 h-5" />
                      <p className="text-xl font-bold text-gray-900">발자국</p>
                    </div>
                    <IoMdClose onClick={closeModal} size="1.5rem" />
                  </div>

                  <div className="flex items-center gap-2 p-1 pt-6 text-gray-500"></div>
                  <div className="flex flex-col justify-between flex-1 p-4 border rounded-xl">
                    <p className="text-left text-gray-500">
                      오늘은 정말 특별한 날이었어요.별어요한 날이었어요. 별어요한 날이었어요. 별어요한 날이었어요. ㅎㅎ
                    </p>
                    <p className="text-right text-gray-500">From 이승현</p>
                  </div>

                  <div className="pt-3">
                    <button
                      className="w-full p-3 text-white rounded-xl bg-primary-1 focus:outline-none"
                      onClick={closeModal}
                    >
                      내용을 확인했어요
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default FootprintTab;
