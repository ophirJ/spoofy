import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useState, useContext } from 'react';

import useStyles from './addToPlaylistStyles';
import { playlistsContext } from 'context/playlistsContext';

const ADD_TO_PLAYLIST = 'הוסף לפלייליסט';

const AddToPlaylist: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { playlists } = useContext(playlistsContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
            <Typography className={classes.playlistName}>
              {playlist.name}
            </Typography>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default AddToPlaylist;
