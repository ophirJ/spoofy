import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useMutation } from '@apollo/client';
import { useContext } from 'react';

import { useAppSelector } from '../../../redux/hooks';
import { ADD_FAVORITE, DELETE_FAVORITE } from '../../../db/favorites/mutation';
import { songsContext } from '../../../context/songsContext';
import useStyles from './addFavoriteStyles';

interface props {
  isFavorite: boolean;
  songID: string;
}

const AddFavorite: React.FC<props> = ({ isFavorite, songID }) => {
  const classes = useStyles();
  const { setSongs } = useContext(songsContext);
  const currentUser = useAppSelector((state) => state.currentUser);
  const [addToFavorites] = useMutation(ADD_FAVORITE);
  const [deleteFavorite] = useMutation(DELETE_FAVORITE);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event?.stopPropagation();
    isFavorite
      ? deleteFavorite({
          variables: {
            userId: currentUser.id,
            songId: songID,
          },
          onCompleted() {
            setSongs!((prev) =>
              prev.map((song) => {
                if (song.id === songID) {
                  return { ...song, isFavorite: false };
                }
                return song;
              })
            );
          },
        })
      : addToFavorites({
          variables: {
            userId: currentUser.id,
            songId: songID,
          },
          onCompleted() {
            setSongs!((prev) =>
              prev.map((song) => {
                if (song.id === songID) {
                  return { ...song, isFavorite: true };
                }
                return song;
              })
            );
          },
        });
  };

  return (
    <div>
      <IconButton
        className={classes.heartIcon}
        onClick={(event) => handleClick(event)}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </div>
  );
};

export default AddFavorite;
