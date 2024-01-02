import { IAddressObject, IGeocode, IGuestBook } from "./interfaces";
import { setKey, setLanguage, setRegion, fromAddress } from "react-geocode";

export const formattingAddress = (ad: string | null): IAddressObject | null => {
  console.log(ad);
  if (ad) {
    const arr = ad.split(" ");
    console.log(arr);
    const obj = {
      sigungu: `${arr[0]} ${arr[1]}`,
      dong: arr[2],
    };
    return obj;
  }
  return null;
};

export const getGeocode = async (address: string | null): Promise<IGeocode> => {
  setKey(import.meta.env.VITE_GOOGLE_MAP_API);
  setLanguage("ko");
  setRegion("ko");

  const geocode: IGeocode = {
    latitude: null,
    longitude: null,
  };

  if (address) {
    await fromAddress(address)
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        geocode.latitude = lat;
        geocode.longitude = lng;
        console.log("in util: ", geocode);
      })
      .catch(console.error);
  }
  return geocode;
};

export const confirmProfile = (guestbook: IGuestBook | null): boolean => {
  if (guestbook && guestbook.address && guestbook.name) {
    return true;
  }
  return false;
};

export const confirmPhoto = (guestbook: IGuestBook | null): boolean => {
  if (guestbook && guestbook.photo?.length) {
    return true;
  }
  return false;
};

export const confirmDesc = (guestbook: IGuestBook | null) : boolean => {
  if(guestbook && guestbook.description) {
    return true;
  }
  return false;
}