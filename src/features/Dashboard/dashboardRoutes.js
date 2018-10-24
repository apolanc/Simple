import { ProcessingRequirements } from "../ProcessingRequirements";
import { isAuthenticated } from "../../utils";

export default [
  {
    path: "/dashboard/processing-requirements",
    name: "Processing Requirements",
    component: ProcessingRequirements,
    isAuthenticated,
    privateRoute: true,
    exact: true,
    render: true
  }
];
