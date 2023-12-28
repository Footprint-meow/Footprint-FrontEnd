import { icons } from '../../constants/header-icons';
import { IMenuFunc, IMenu } from '../../types/header';
import Header from '../../components/Header';
import { Outlet, useNavigate } from 'react-router-dom';

function FootprintPage() {
  // const navigate = useNavigate();

  const menu: IMenu = {
    left: icons.BACK,
    center: '방명록',
    right: null,
  };

  const func: IMenuFunc = {
    left_func: null,
  };

  return (
    <div className="relative w-full">
      <Header menu={menu} func={func} />
      <Outlet />
    </div>
  );
}

export default FootprintPage;
