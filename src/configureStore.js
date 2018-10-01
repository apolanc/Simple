import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const configureStore = preloadedState => {
  const enhancers = [];

  if (process.env.NODE_ENV === "development") {
    const { devToolsExtension } = window;

    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  return createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      ...enhancers
    )
  );
};

export default configureStore;
