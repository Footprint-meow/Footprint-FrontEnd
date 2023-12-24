import { HeaderProp } from "../types/header";

const Header = (props: HeaderProp) => {
  const { left, right } = props.menu;
  const { left_func, right_func } = props.func;

  return (
    <div className="w-full flex justify-between items-center px-5 h-10 bg-purple-300">
      <div onClick={left_func}>{left}</div>
      <div onClick={right_func}>{right}</div>
    </div>
  );
};

export default Header;
