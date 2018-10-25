import { isAuthenticated } from "../../utils";
import { BusinessInformation } from "../BusinessInformation";
import { ProcessingRequirements } from "../ProcessingRequirements";

export default [
  {
    path: "/dashboard/processing-requirements",
    name: "Processing Requirements",
    component: ProcessingRequirements,
    isAuthenticated,
    privateRoute: true,
    exact: true,
    render: true
  },
  {
    path: "/dashboard/business-information",
    name: "Business Information",
    component: BusinessInformation,
    isAuthenticated,
    privateRoute: true,
    exact: true,
    render: true
  }
];
