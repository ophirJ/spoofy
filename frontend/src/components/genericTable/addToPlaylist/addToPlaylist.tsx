import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';

import { playlistsContext } from 'context/playlistsContext';
import { ADD_SONG_TO_PLAYLIST } from 'db/playlists/mutation';
import useStyles from './addToPlaylistStyles';

const ADD_TO_PLAYLIST = 'הוסף לפלייליסט';

interface props {
  songId: string;
}

const AddToPlaylist: React.FC<props> = ({ songId }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { playlists } = useContext(playlistsContext);
  const [addToPlaylist] = useMutation(ADD_SONG_TO_PLAYLIST);

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
    addToPlaylist({
      variables: {
        songId: songId,
        playlistId: playlists.find(
          (playlist) => playlist.id === event.target.id
        )?.id,
      },
      onCompleted: (data) => {
        console.log(data);
      },
    });
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
            // <Typography
            //   className={classes.playlistName}
            //   onClick={(event) => handlePlaylistClick(event)}
            // >
            //   {playlist.name}
            // </Typography>
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
    </div>
  );
};

export default AddToPlaylist;
