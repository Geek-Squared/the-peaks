import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "../features/bookmark/bookmarkSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import {devToolsEnhancer} from  "redux-devtools-extension"

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const reducer = combineReducers({
  bookmark: bookmarkReducer,
  enhancer: devToolsEnhancer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
