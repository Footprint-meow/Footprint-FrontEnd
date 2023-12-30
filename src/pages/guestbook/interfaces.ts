export interface IAddress {
  value: string | number | readonly string[] | undefined;
}

export interface IAddressObject {
  sigungu: string | number | readonly string[] | undefined;
  dong: string | number | readonly string[] | undefined;
}

export interface IGuestBook {
  name: string | null;
  address: string | null;
  description: string | null;
  photo: string | null;
  latitude: number | undefined | null;
  longitude: number | undefined | null;
}

export interface IGuesetBookState {
  guestbook: IGuestBook | null;
  setGuestbook: React.Dispatch<React.SetStateAction<IGuestBook | null>>;
}