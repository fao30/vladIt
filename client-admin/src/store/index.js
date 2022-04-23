import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
