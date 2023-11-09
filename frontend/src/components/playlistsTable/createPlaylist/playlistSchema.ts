import * as yup from 'yup';

const PLAYLIST_NAME_ERROR = 'שדה השם הינו שדה חובה';
const SONGS_ERROR = 'שדה השירים הינו שדה חובה';

export const createPlaylistSchema = yup.object().shape({
  playlistName: yup.string().required(PLAYLIST_NAME_ERROR),
  songs: yup.array().of(yup.string()).min(1, SONGS_ERROR),
});
