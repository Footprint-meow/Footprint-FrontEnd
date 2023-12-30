import { IAddressObject } from "./interfaces";

export const formattingAddress = (ad: string): IAddressObject => {
  const arr = ad.split(" ");

  const obj = {
    sigungu: `${arr[0]} ${arr[1]}`,
    dong: arr[2],
  };

  return obj;
};
