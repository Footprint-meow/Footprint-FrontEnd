import Header from '../../components/Header';
import { icons } from '../../constants/header-icons';
import { IMenu, IMenuFunc } from '../../types/header';

function LoginPage() {
  const menu: IMenu = {
    left: icons.BACK,
    center: '',
    right: null,
  };

  const func: IMenuFunc = {
    left_func: null,
  };

  return (
    <div className="relative w-full h-screen">
      <Header menu={menu} func={func} />
      <div className="absolute top-0 w-full h-full pt-14 pb-36 z-15">
        <div className="flex flex-col items-center w-full">
          <div>
            <img src="/src/assets/group-paw-icon.png" />
          </div>
          <div className="w-full px-11">
            <form className="w-full pt-8 font-semibold">
              <div>
                <label htmlFor="email">이메일</label>
                <input id="email" type="email" className="mt-1 w-full p-4 border border-[#878787] rounded-3xl"></input>
              </div>
              <div className="pt-4">
                <label htmlFor="password">비밀번호</label>
                <input
                  id="password"
                  type="text"
                  className="mt-1 w-full p-4 border border-[#878787] rounded-3xl"
                ></input>
              </div>
            </form>
            <div className="pt-4">
              <button className="w-full p-4 text-xl font-bold text-white rounded-3xl bg-primary-1">로그인</button>
            </div>
            <div className="py-4 flex justify-center gap-2 text-[#949494]">
              <p>아이디찾기</p>
              <p>|</p>
              <p>비밀번호 찾기</p>
            </div>
            <div className="pt-2">
              <button className="w-full p-4 text-xl font-bold border text-primary-1 border-primary-1 rounded-3xl ">
                회원가입
              </button>
            </div>

            <div className="flex justify-center gap-2 pt-6">
              <img src="/src/assets/kakao.png"></img>
              <img src="/src/assets/google.png"></img>
              <img src="/src/assets/naver.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
