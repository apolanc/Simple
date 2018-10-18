import { OwnershipInfo } from "./features/OwnershipInformation";
import { ProcessingRequirements } from "./features/ProcessingRequirements";

export const isAuthenticated = () => localStorage.getItem("logged");

export const login = () => localStorage.setItem("logged", true);

export const logout = () => localStorage.setItem("logged", false);

export const componentDispenser = type => {
  switch (type) {
    case "Ownership Information":
      return OwnershipInfo;
    case "Processing Requirements":
      return ProcessingRequirements;
    default:
      return "";
  }
};
