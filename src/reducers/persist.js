// configStore.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import mainStore from './store';
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["isLogin", "token"]
};

const rootReducers = persistReducer(persistConfig, mainStore);
export default rootReducers;