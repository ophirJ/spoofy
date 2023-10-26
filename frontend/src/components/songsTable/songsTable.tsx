import { useContext } from 'react';

import { songsContext } from '../../context/songsContext';
import useStyles from './songsTableStyles';
import GenericTable from '../genericTable/genericTable';
import CreateSongDialog from '../createSongDialog/createSongDialog';

const SONG_LIST = 'רשימת שירים';

const SongsTable: React.FC = () => {
  const { songs } = useContext(songsContext);

  const classes = useStyles();

  return (
    <div className={classes.songsPage}>
      <GenericTable songs={songs} />
      <CreateSongDialog />
    </div>
  );
};

export default SongsTable;
