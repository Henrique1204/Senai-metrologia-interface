import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dashboard from "./dashboard.js";
import login from "./login.js";
import emails from "./emails.js";

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ dashboard, login, emails });
const store = configureStore({ reducer, middleware });

export default store;
