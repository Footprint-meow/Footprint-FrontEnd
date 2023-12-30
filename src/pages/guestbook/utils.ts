import { IAddressObject, IGeocode } from "./interfaces";
import { setKey, setLanguage, setRegion, fromAddress } from "react-geocode";

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

export const getGeocode = async (address: string): Promise<IGeocode> => {
  setKey(import.meta.env.VITE_GOOGLE_MAP_API);
  setLanguage("ko");
  setRegion("ko");

  const geocode: IGeocode = {
    latitude: null,
    longitude: null,
  };

  await fromAddress(address)
    .then(({ results }) => {
      const { lat, lng } = results[0].geometry.location;
      geocode.latitude = lat;
      geocode.longitude = lng;
      console.log("in util: ", geocode);
    })
    .catch(console.error);
  return geocode;
};
