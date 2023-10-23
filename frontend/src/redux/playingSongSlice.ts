import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GridRowId } from '@mui/x-data-grid-pro';

import { Song } from '../types/song';

interface playingSong {
  song: Song | undefined;
  selectionModel: GridRowId[];
}

const initialState: playingSong = {
  song: undefined,
  selectionModel: [],
};

export const playingSongSlice = createSlice({
  name: 'playingSong',
  initialState,
  reducers: {
    setSong: (state, action: PayloadAction<Song | undefined>) => {
      state.song = action.payload;
    },
    setSelectionModel: (state, action: PayloadAction<GridRowId[]>) => {
      state.selectionModel = action.payload;
    },
    resetSong: (state) => {
      state.selectionModel = [];
      state.song = undefined;
    },
  },
});

export const { setSong, setSelectionModel, resetSong } =
  playingSongSlice.actions;
export default playingSongSlice.reducer;
