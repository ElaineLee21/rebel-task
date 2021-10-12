import { createSlice } from "@reduxjs/toolkit";
import { storeState } from "../configStore";

interface ModalInitialState {
  modal: boolean;
}

export const modalInitialState: ModalInitialState = {
  modal: false,
};

// 액션을 실행할 때 마다 true false를 오간다. 스위치를 끄고 켜는 느낌
const modal = createSlice({
  name: "modal",
  initialState: modalInitialState,
  reducers: {
    // Modal
    actionModal: (state, action) => {
      state.modal = !state.modal;
      // 모달 켜져있을 때 원래화면 스크롤 방지
      if (state.modal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    },
  },
});

export const selectModal = (state: storeState) => state.modalReducer.modal;

export const { actionModal } = modal.actions;

const modalReducer = modal.reducer;
export default modalReducer;
