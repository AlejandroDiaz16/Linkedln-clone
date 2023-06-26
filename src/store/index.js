import { applyMiddleware, createStore } from "redux";
import rootReducers from "../reducers";
import ThunkMiddleware from "redux-thunk";

const store = createStore(rootReducers, applyMiddleware(ThunkMiddleware));

export default store;
