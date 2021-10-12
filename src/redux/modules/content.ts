import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Content, Episode } from "../../contents";
import { storeState } from "../configStore";

interface ContentInitialState {
  contents: Content[];
  currentContentId: string;
  currentEpisodeId: string;
}

export const contentInitialState: ContentInitialState = {
  contents: [],
  currentContentId: "",
  currentEpisodeId: "",
};

const content = createSlice({
  name: "contents",
  initialState: contentInitialState,
  reducers: {
    updateContents: (state, { payload }: PayloadAction<Content[]>) => {
      state.contents = payload;
    },
    updateCurrentContent: (state, { payload }: PayloadAction<string>) => {
      state.currentContentId = payload;
    },
    updateCurrentEpisode: (state, { payload }: PayloadAction<string>) => {
      state.currentEpisodeId = payload;
    },
    updateEpisodeIsBuy: (
      state,
      {
        payload,
      }: PayloadAction<{
        contentId: string;
        episodeId: string;
      }>
    ) => {
      const contentIdx = state.contents.findIndex(
        (content) => content.id === payload.contentId
      );
      const episodeIdx = state.contents[contentIdx].episodes.findIndex(
        (episode) => episode.id === payload.episodeId
      );
      state.contents[contentIdx].episodes[episodeIdx].isBuy = true;
    },
  },
});

export const selectCurrentContent = (state: storeState) => {
  return state.contentReducer.currentContentId;
};
//
export const selectCurrentEpisode = (state: storeState) =>
  state.contentReducer.currentEpisodeId;

export const selectContents = (state: storeState) =>
  state.contentReducer.contents;

export const {
  updateContents,
  updateCurrentContent,
  updateCurrentEpisode,
  updateEpisodeIsBuy,
} = content.actions;
const contentReducer = content.reducer;
export default contentReducer;
