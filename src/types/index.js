import { shape, string, number } from "prop-types";

export const contactType = shape({
  address1: string,
  address2: string,
  city: string,
  region: string,
  zip_postal: string,
  type: string,
  country: string,
  yearsAt: number
});

export const contactDefaultProps = {
  address1: "",
  address2: "",
  city: "",
  region: "",
  zip_postal: "",
  type: "",
  country: "",
  yearsAt: undefined
};
