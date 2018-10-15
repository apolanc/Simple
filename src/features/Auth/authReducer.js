import { Record, Map } from "immutable";
import { SIGN_IN, SIGN_UP, FORGOT_PASSWORD } from "./authActions";

const AuthModel = new Record({
  user: new Map(),
  email: "",
  error: ""
});

export default (state = new AuthModel(), { type, payload }) => {
  switch (type) {
    case SIGN_UP:
      return state.merge({
        user: payload
      });
    case SIGN_IN:
      return state.merge({
        user: payload
      });
    case FORGOT_PASSWORD:
      return state.merge({
        email: payload
      });
    default:
      return state;
  }
};
