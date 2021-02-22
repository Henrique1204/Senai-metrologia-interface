import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dashboard from "./dashboard.js";

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ dashboard });
const store = configureStore({ reducer, middleware });

export default store;
