import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Song } from '../modules/interfaces/song';

interface playingSong {
  song: Song | undefined;
}

const initialState: playingSong = {
  song: undefined,
};

export const playingSongSlice = createSlice({
  name: 'playingSong',
  initialState,
  reducers: {
    setSong: (state, action: PayloadAction<Song | undefined>) => {
      state.song = action.payload;
    },
    resetSong: (state) => {
      state.song = undefined;
    },
  },
});

export const { setSong, resetSong } = playingSongSlice.actions;
export default playingSongSlice.reducer;
