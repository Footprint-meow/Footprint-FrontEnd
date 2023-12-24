import { ReactNode } from "react";

export interface MenuType {
  [key: string]: ReactNode;
}

export interface MenuTypeProp {
  menu: MenuType;
}
