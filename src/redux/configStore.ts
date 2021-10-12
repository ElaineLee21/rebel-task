import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contentReducer, { contentInitialState } from "./modules/content";
import modalReducer, { modalInitialState } from "./modules/modal";

export interface storeState {
  contentReducer: typeof contentInitialState;
  modalReducer: typeof modalInitialState;
}

const reducer = combineReducers({
  contentReducer,
  modalReducer,
});

const store = configureStore({
  reducer,
});

export default store;
