import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';

function PhotoAlbumTab() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="w-full">
      {/* 날자별 반복 */}
      <div className="pt-6">
        <p className="px-4 font-bold">2023년 12월 14일</p>
        {/* 발자국별 반복 */}
        <div className="grid grid-cols-3 pt-5">
          <img onClick={openModal} className="object-cover w-full h-28" src="/src/assets/dummy1.png" />
          <img className="object-cover w-full h-28" src="/src/assets/dummy2.jpg" />
          <img className="object-cover w-full h-28" src="/src/assets/dummy1.png" />
          <img className="object-cover w-full h-28" src="/src/assets/dummy2.jpg" />
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
            <div className="fixed inset-0 bg-black" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center h-full min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col w-full h-full overflow-hidden shadow-xl ">
                  <div className="p-5 ">
                    <div className="relative flex flex-col gap-1 text-white">
                      <p>2023년 12월 14일</p>
                      <p>이승현</p>
                      <IoMdClose className="absolute top-0 right-0" onClick={closeModal} size="2rem" color="white" />
                    </div>
                  </div>
                  {/* contain 으로 할지 cover로 할지 */}
                  <img onClick={openModal} className="object-contain w-full h-4/5" src="/src/assets/dummy1.png" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default PhotoAlbumTab;
