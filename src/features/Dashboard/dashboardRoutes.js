import { isAuthenticated } from "../../utils";
import { BusinessInformation } from "../BusinessInformation";
import { ProcessingRequirements } from "../ProcessingRequirements";
import { References } from "../References";

export default [
  {
    path: "/dashboard/processing-requirements",
    name: "Processing Requirements",
    component: ProcessingRequirements,
    isAuthenticated,
    privateRoute: true,
    exact: true
  },
  {
    path: "/dashboard/business-information",
    name: "Business Information",
    component: BusinessInformation,
    isAuthenticated,
    privateRoute: true,
    exact: true
  },
  {
    path: "/dashboard/references",
    name: "References",
    component: References,
    isAuthenticated,
    privateRoute: true,
    exact: true
  }
];
