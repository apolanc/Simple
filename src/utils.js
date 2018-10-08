const utils = {
  isAuthenticated: () => localStorage.getItem("logged"),
  singin: () => localStorage.setItem("logged", true),
  singout: () => localStorage.setItem("logged", false)
};

export default utils;
