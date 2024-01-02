import Header from '../../components/Header';
import { icons } from '../../constants/header-icons';
import { IMenu, IMenuFunc } from '../../types/header';

function SignUpPage() {
  const menu: IMenu = {
    left: icons.BACK,
    center: '회원가입',
    right: null,
  };

  const func: IMenuFunc = {
    left_func: null,
    right_func: null,
  };

  return (
    <div className="relative w-full h-screen">
      <Header menu={menu} func={func} />
      <div className="absolute top-0 w-full h-full pt-14 pb-36 z-15">
        <div className="w-full h-full px-8 pt-3 ">
          <div className="flex flex-col gap-1 text-xl font-bold text-left">
            <p>친구의 방명록에</p>
            <div className="flex items-center gap-2">
              <p>발자국을 남겨보세요</p>
              <img src="/src/assets/group-paw-icon.png" className="w-6 h-5" />
            </div>
          </div>
          <form className="w-full pt-10 ">
            <div>
              <label htmlFor="email" className="font-bold">
                이메일
              </label>
              <div className="flex gap-4">
                <input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  className="flex-1 w-full py-2 text-sm border-b outline-none "
                ></input>
                {/* #TODO 버튼 비활성화 하기 */}
                <button className="px-3 text-sm font-bold text-white rounded-lg bg-primary-1">인증받기</button>
              </div>
            </div>
            <div className="pt-4">
              <label htmlFor="authNumber" className="font-bold">
                인증번호
              </label>
              <input
                id="authNumber"
                type="text"
                placeholder="인증번호 4자리를 입력해주세요"
                className="w-full py-2 text-sm border-b outline-none"
              ></input>
            </div>
            <div className="pt-4">
              <label htmlFor="password" className="font-bold">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                placeholder="8~30자리 영대소문자,숫자,특수문자 조합"
                className="w-full py-2 text-sm border-b outline-none"
              ></input>
            </div>
            <div className="pt-4">
              <label htmlFor="passwordCheck" className="font-bold">
                비밀번호 확인
              </label>
              <input
                id="passwordCheck"
                type="password"
                placeholder="8~30자리 영대소문자,숫자,특수문자 조합"
                className="w-full py-2 text-sm border-b outline-none"
              ></input>
            </div>
            <div className="pt-4">
              <label htmlFor="name" className="font-bold">
                이름
              </label>
              <input
                id="name"
                type="text"
                placeholder="이름을 입력해주세요"
                className="w-full py-2 text-sm border-b outline-none"
              ></input>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 w-full p-6">
        {/* #TODO 버튼 비활성화 하기 */}
        <button className="w-full p-4 text-xl font-bold text-white rounded-2xl bg-[#878787]">가입완료</button>
      </div>
    </div>
  );
}

export default SignUpPage;
