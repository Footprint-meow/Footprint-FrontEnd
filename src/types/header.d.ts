import { ReactNode } from "react";

// 헤더 아이콘 type
export interface MenuType {
  [key: string]: ReactNode | null;
}

// 아이콘에 할당할 함수 type
export interface MenuFuncType {
  left_func: MouseEventHandler<HTMLDivElement> | null;
  right_func: MouseEventHandler<HTMLDivElement> | null;
}

export interface HeaderProp {
  menu: MenuType;
  func: MenuFuncType;
}
