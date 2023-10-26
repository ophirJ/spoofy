import * as yup from 'yup';

const SONG_ERROR = 'שדה השם הינו שדה חובה';
const ARTIST_ERROR = 'שדה הזמר הינו שדה חובה';
const DURATION_ERROR = ' שדה משך השיר חייב להיות בפורמט mm:ss';
const DURATION_REQUIRED_ERROR = 'שדה משך השיר הינו שדה חובה';

export const schema = yup.object().shape({
  songName: yup.string().required(SONG_ERROR),
  artistName: yup.string().required(ARTIST_ERROR),
  duration: yup
    .string()
    .required(DURATION_REQUIRED_ERROR)
    .matches(/[0-5][0-9]:[0-5][0-9]/, DURATION_ERROR),
});
