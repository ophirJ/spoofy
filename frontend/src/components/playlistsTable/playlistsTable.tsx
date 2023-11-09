import { useContext } from 'react';
import { Typography } from '@mui/material';

import GenericTable from '../genericTable/genericTable';
import useStyles from './playlistsTableStyles';
import { playlistsContext } from 'src/context/playlistsContext';
import CreatePlaylistDialog from './createPlaylist/createPlaylistDialog';
import EditPlaylist from './editPlaylist/editPlaylistDialog';

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
              <EditPlaylist currentPlaylist={playlist} />
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
