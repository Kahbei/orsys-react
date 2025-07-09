import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentReducer from "./current";
import { loadAsyncRessources } from "./ressources";

export const store = configureStore({ reducer: combineReducers({ current: currentReducer }) });

store.subscribe(() => console.log(store.getState()));
store.dispatch(loadAsyncRessources());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;