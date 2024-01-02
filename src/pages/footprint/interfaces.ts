export interface ITabInfo {
  index: TabIndex;
  tabTitle: string;
  content: React.ReactNode;
}

export type TabIndex = 0 | 1;

export interface IGuestBookInfo {
  photo: string;
  name: string;
  address: string;
  count: number;
}
export interface IGuestBookInfoProp {
  info: IGuestBookInfo;
  hidden: string | null;
  // 버튼이 하나면 hidden속성에 hidden 넣어주시구 아니라면 null넣으면 됩니다
}
