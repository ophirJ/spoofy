import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';

import { playlistsContext } from 'context/playlistsContext';
import { ADD_SONG_TO_PLAYLIST } from 'db/playlists/mutation';
import useStyles from './addToPlaylistStyles';
import { Playlist } from 'src/modules/interfaces/playlist';
import { Song } from 'src/modules/interfaces/song';
import { StringToNumberDuration } from 'src/utils/StringToNumberDuration';
import { songsContext } from 'src/context/songsContext';

const ADD_TO_PLAYLIST = 'הוסף לפלייליסט';
const THE_SONG = 'השיר';
const ADDED_SUCCESSFULLY = 'נוסך בהצלחה לפלייליסט';
const SONG_EXISTS = 'קיים כבר בפלייליסט';
const ERROR = 'error';
const SUCCESS = 'success';

interface props {
  selectedSong: Song;
  songId: string;
}

const AddToPlaylist: React.FC<props> = ({ songId }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { playlists, setPlaylists } = useContext(playlistsContext);
  const [addToPlaylist] = useMutation(ADD_SONG_TO_PLAYLIST);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [songExists, setSongExsits] = useState<boolean>(false);
  const [chosenPlaylist, setChosenPlaylist] = useState<Playlist>();
  const { songs } = useContext(songsContext);
  const selectedSong = songs.find((song) => song.id === songId);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handlePlaylistClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const playlist = playlists.find(
      (playlist) => playlist.id === event.target.id
    );
    if (playlist?.songs.find((song) => song.id === songId)) {
      setSongExsits(true);
      setOpenAlert(true);
    } else {
      setSongExsits(false);
      addToPlaylist({
        variables: {
          songId: songId,
          playlistId: playlist?.id,
        },
        onCompleted: () => {
          setPlaylists!((prev) =>
            prev.map((currentPlaylist) => {
              if (currentPlaylist.id === playlist?.id) {
                currentPlaylist.songs.push(selectedSong!);
                return currentPlaylist;
              } else {
                return currentPlaylist;
              }
            })
          );
          setOpenAlert(true);
        },
      });
    }
    setChosenPlaylist(playlist);
  };

  return (
    <div>
      <IconButton className={classes.plusIcon} onClick={handleClick}>
        <AddIcon />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className={classes.playlistList}>
          <Typography className={classes.underlinedText}>
            {ADD_TO_PLAYLIST}
          </Typography>
          {playlists.map((playlist) => (
            <Button
              onClick={(event) => handlePlaylistClick(event)}
              className={classes.playlistName}
              id={playlist.id}
            >
              {playlist.name}
            </Button>
          ))}
        </div>
      </Popover>
      <Popover open={openAlert} anchorEl={anchorEl} onClose={handleClose}>
        <Alert
          className={classes.alert}
          severity={songExists ? ERROR : SUCCESS}
        >
          {songExists
            ? `${THE_SONG} ${selectedSong?.name} ${SONG_EXISTS} ${chosenPlaylist?.name}`
            : `${THE_SONG} ${selectedSong?.name} ${ADDED_SUCCESSFULLY} ${chosenPlaylist?.name}`}
          <IconButton
            onClick={() => {
              setOpenAlert(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Alert>
      </Popover>
    </div>
  );
};

export default AddToPlaylist;
