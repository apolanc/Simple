import { Login, Register, ForgotPassword } from "../features/Auth";
import { Dashboard } from "../features/Dashboard";
import { isAuthenticated } from "../utils";

export default [
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    isAuthenticated,
    privateRoute: true
  },
  { from: "/", to: "/login", redirect: true }
];
