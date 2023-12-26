import { ReactNode } from "react";

// 헤더 아이콘 type
export interface IMenu {
  [key: string]: ReactNode | string | null;
}

// 아이콘에 할당할 함수 type
export interface IMenuFunc {
  left_func: MouseEventHandler<HTMLDivElement> | null;
  right_func: MouseEventHandler<HTMLDivElement> | null;
}

export interface IHeaderProp {
  menu: IMenu;
  func: IMenuFunc;
}
