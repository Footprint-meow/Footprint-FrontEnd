import { IAddressObject } from "./interfaces";

export const formattingAddress = (ad: string): IAddressObject => {
  console.log(ad);
  const arr = ad.split(" ");
console.log(arr);
  const obj = {
    sigungu: `${arr[0]} ${arr[1]}`,
    dong: arr[2],
  };

  return obj;
};
