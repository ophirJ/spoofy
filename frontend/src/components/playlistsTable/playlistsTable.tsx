import { useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';

import GenericTable from '../genericTable/genericTable';
import useStyles from './playlistsTableStyles';
import { playlistsContext } from 'src/context/playlistsContext';
import CreatePlaylistDialog from './createPlaylist/createPlaylistDialog';
import EditPlaylist from './editPlaylist/editPlaylist';

const PlaylistsTable: React.FC = () => {
  const classes = useStyles();
  const { playlists } = useContext(playlistsContext);

  return (
    <div className={classes.playlitsPage}>
      <div className={classes.playlistTables}>
        {playlists.map((playlist) => (
          <div key={playlist.id}>
            <div className={classes.playlistTitle}>
              <Typography className={classes.playlistName}>
                {playlist.name}
              </Typography>
              {/* <IconButton>
                <EditIcon className={classes.editIcon} />
              </IconButton> */}
              <EditPlaylist />
            </div>
            <GenericTable songs={playlist.songs} />
          </div>
        ))}
      </div>
      <CreatePlaylistDialog />
    </div>
  );
};

export default PlaylistsTable;
