import { IAddressObject } from "./interfaces";

export const formattingAddress = (ad: string): IAddressObject => {
  const regex1 = /^(.*?[도시광역시도])\s/;
  const regex2 = /\s(.*?[동읍면])\s/;

  const match1 = regex1.exec(ad);
  const match2 = regex2.exec(ad);

  let dong = match2 ? match2[1] : '';

  // 부가적인 로직: 띄어쓰기를 기준으로 첫 번째 요소 제거
  dong = dong.split(' ').slice(1).join(' ');

  const obj = {
    sigungu: match1 ? match1[1] : "",
    dong: dong,
  };

  console.log("obj: ", match2);
  return obj;
};