import { useContext } from 'react';

import GenericTable from '../genericTable/genericTable';
import GenericTitle from '../genericTitle/genericTitle';
import { songsContext } from '../context/songsContext';
import useStyles from './favoritesTableStyles';

const FAVORITES = 'מועדפים';

const FavoritesTable: React.FC = () => {
  const { songs } = useContext(songsContext);
  const classes = useStyles();

  return (
    <div className={classes.favoritesPage}>
      <GenericTitle text={FAVORITES} />
      <GenericTable songs={songs.filter((song) => song.isFavorite)} />
    </div>
  );
};

export default FavoritesTable;
