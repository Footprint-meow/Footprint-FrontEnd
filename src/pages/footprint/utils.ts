import { IFootprint } from "./interfaces";

export const confirmWriter = (footprint: IFootprint | null): boolean => {
  if (footprint && footprint.writer) {
    return true;
  }
  return false;
};

export const confirmImpression = (footprint: IFootprint | null): boolean => {
  if (footprint && footprint.content) {
    return true;
  }
  return false;
};

export const confirmPassword = (footprint: IFootprint | null): boolean => {
  if (footprint && footprint.password) {
    return true;
  }
  return false;
};
