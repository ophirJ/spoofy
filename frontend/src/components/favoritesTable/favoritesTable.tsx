import { useContext } from 'react';

import { songsContext } from 'context/songsContext';
import GenericTable from '../genericTable/genericTable';
import useStyles from './favoritesTableStyles';

const FAVORITES = 'מועדפים';

const FavoritesTable: React.FC = () => {
  const { songs } = useContext(songsContext);
  const classes = useStyles();

  return (
    <div className={classes.favoritesPage}>
      <GenericTable songs={songs.filter((song) => song.isFavorite)} />
    </div>
  );
};

export default FavoritesTable;
