import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import reducer from "./reducer";

export const store = createStore(reducer);