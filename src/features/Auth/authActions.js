export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";

export const singUpRequest = payload => ({ type: SIGN_UP, payload });
export const singInRequest = payload => ({ type: SIGN_IN, payload });
export const forgotPasswordRequest = payload => ({
  type: FORGOT_PASSWORD,
  payload
});

export const signUp = user => async dispatch => dispatch(singUpRequest(user));
export const signIn = user => async dispatch => dispatch(singInRequest(user));
export const forgotPassword = email => async dispatch =>
  dispatch(forgotPassword(email));
