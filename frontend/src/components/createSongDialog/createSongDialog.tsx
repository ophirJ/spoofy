import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useContext } from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useQuery, useMutation } from '@apollo/client';
import Autocomplete, {
  AutocompleteChangeReason,
} from '@mui/material/Autocomplete';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { GET_ALL_ARTISTS } from '../../db/artists/query';
import { Artist } from '../../models/interfaces/artist';
import { CREATE_SONG } from '../../db/songs/mutation';
import { songsContext } from '../../context/songsContext';
import { Song } from '../../models/interfaces/song';
import useStyles from './createSongDIalogStyles';
import { schema } from './yupSchema';

const ADD_SONG = 'צור שיר+';
const DIALOG_TITLE = 'יצירת שיר';
const SONG_NAME = 'שם';
const ARTIST = 'זמר';
const DURATION = 'משך שיר';
const CREATE_SONG_TEXT = 'צור שיר';

const CreateSongDialog: React.FC = () => {
  const classes = useStyles();
  const { setSongs } = useContext(songsContext);
  const [openCreateSong, setOpenCreateSong] = useState(false);
  const [artistName, setArtistName] = useState<string>('');
  const [songName, setSongName] = useState<string>('');
  const [artists, setArtists] = useState<Artist[]>([]);
  const [duration, setDuration] = useState<number>(0);

  const [createSong] = useMutation(CREATE_SONG);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = () => {
    reset();
    AddSong();
  };

  const handleClick = () => {
    setOpenCreateSong((prev) => !prev);
  };

  const { data } = useQuery(GET_ALL_ARTISTS, {
    onCompleted: () => {
      const artistsFromDB: Artist[] = [];
      data.allArtists.nodes.map((artist: { id: string; name: string }) =>
        artistsFromDB.push({
          id: artist.id,
          name: artist.name,
        })
      );
      setArtists(artistsFromDB);
    },
  });

  const changeArtistName = (
    value: string | null,
    reason: AutocompleteChangeReason
  ) => {
    value && setArtistName(value);
    reason === 'clear' && setArtistName('');
  };

  const changeDuration = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const durationString = event.target.value;
    const separatedDuration = durationString.split(':');
    setDuration(
      Number(separatedDuration[0]) * 60 + Number(separatedDuration[1])
    );
  };

  const closeDialog = () => {
    setOpenCreateSong((prev) => !prev);
    reset();
  };

  const AddSong = () => {
    const artistID = artists.find((artist) => artist.name === artistName);
    createSong({
      variables: {
        duration: duration,
        name: songName,
        artistId: artistID!.id,
      },
      onCompleted(data) {
        setOpenCreateSong(false);
        const song: Song = data.createSong.song;
        setSongs!((prev) => [
          ...prev,
          {
            id: song.id,
            name: songName,
            artistName: artistName,
            duration: duration,
          },
        ]);
      },
    });
  };

  return (
    <div>
      <Button className={classes.grayCreateSongBtn} onClick={handleClick}>
        {ADD_SONG}
      </Button>
      <Dialog
        className={classes.createSongDialog}
        open={openCreateSong}
        onClose={closeDialog}
      >
        <DialogTitle className={classes.createSongTitle}>
          {DIALOG_TITLE}
        </DialogTitle>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <DialogContent>
            <div className={classes.dialogField}>
              <Typography className={classes.titles}>{SONG_NAME}</Typography>
              <TextField
                {...register('songName')}
                className={classes.nameInput}
                onChange={(event) => setSongName(event.target.value)}
              ></TextField>
              <Typography className={classes.errorMessage}>
                {errors.songName?.message}
              </Typography>
            </div>
            <div className={classes.dialogField}>
              <Typography className={classes.titles}>{ARTIST}</Typography>
              <Autocomplete
                onChange={(event, value, reason) =>
                  changeArtistName(value, reason)
                }
                className={classes.selectArtist}
                disablePortal
                options={artists.map((artist) => artist.name)}
                renderInput={(params) => (
                  <TextField {...register('artistName')} {...params} />
                )}
              />
              <Typography className={classes.errorMessage}>
                {errors.artistName?.message}
              </Typography>
            </div>
            <div className={classes.dialogField}>
              <Typography className={classes.titles}>{DURATION}</Typography>
              <TextField
                {...register('duration')}
                onChange={(event) => changeDuration(event)}
                className={classes.durationInput}
              ></TextField>
              <Typography className={classes.errorMessage}>
                {errors.duration?.message}
              </Typography>
            </div>
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Button type="submit" className={classes.greenCreateSongBtn}>
              {CREATE_SONG_TEXT}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default CreateSongDialog;
