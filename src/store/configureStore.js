import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dashboard from "./dashboard.js";
import login from "./login.js";

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ dashboard, login });
const store = configureStore({ reducer, middleware });

export default store;
