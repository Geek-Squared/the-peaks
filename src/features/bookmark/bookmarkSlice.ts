import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BookmarkState {
  bookmarks: any;
  isBookmarked: boolean;
  nextPage: number;
}

const initialState: BookmarkState = {
  bookmarks: [],
  isBookmarked: false,
  nextPage: 1,
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<string>) => {
      state.bookmarks.push(action.payload);
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      state.bookmarks.splice(state.bookmarks.indexOf(action.payload), 1);
    },
  
  },
});

export const { addBookmark, removeBookmark } =
  bookmarkSlice.actions;

export default bookmarkSlice.reducer;
