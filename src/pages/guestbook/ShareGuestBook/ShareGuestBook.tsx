import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import { icons } from '../../../constants/header-icons';
import { IMenu, IMenuFunc } from '../../../types/header';
import { IGuestBookInfo } from '../../footprint/interfaces';
import KakaoShareButton from '../../../components/KakaoShareButton';
import { FiPaperclip } from 'react-icons/fi';

interface IlocationState {
  data: {
    img: string;
    info: IGuestBookInfo;
  };
}

// https://velog.io/@vanillovin/react-router-navigate-location-state
const ShareGuestBook = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const locationState = location.state as IlocationState;

  const menu: IMenu = {
    left: icons.BACK,
    center: locationState.data.info.name,
    right: null,
  };

  const func: IMenuFunc = {
    left_func: () => navigate(-1),
    right_func: null,
  };
  console.log(locationState.data);

  const handleCopyClipBoard = async () => {
    try {
      // #TODO 실제 QR코드 url로 수정해야 함
      await navigator.clipboard.writeText('QR코드 url복사');
      alert('복사 성공!');
    } catch (error) {
      alert('복사 실패!');
    }
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <Header menu={menu} func={func} />
        <div className="absolute top-0 w-full h-full pt-16 z-15">
          <div className="flex flex-col items-center justify-center h-full">
            <img src={locationState.data.img} />
            <div className="flex items-center gap-4">
              <KakaoShareButton info={locationState.data.info} />
              <FiPaperclip onClick={handleCopyClipBoard} size="3rem" className="p-2 border rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareGuestBook;
