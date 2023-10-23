import { useContext } from 'react';

import useStyles from './songsTableStyles';
import GenericTitle from '../genericTitle/genericTitle';
import GenericTable from '../genericTable/genericTable';
import CreateSongDialog from '../createSongDialog/createSongDialog';
import { songsContext } from '../context/songsContext';

const SONG_LIST = 'רשימת שירים';

const SongsTable: React.FC = () => {
  const { songs } = useContext(songsContext);

  const classes = useStyles();

  return (
    <div className={classes.songsPage}>
      <GenericTitle text={SONG_LIST} />
      <GenericTable songs={songs} />
      <CreateSongDialog />
    </div>
  );
};

export default SongsTable;
