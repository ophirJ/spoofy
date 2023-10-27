import { useState } from 'react';
import { useQuery } from '@apollo/client';
import Typography from '@mui/material/Typography';

import { songsContext } from 'context/songsContext';
import { Song } from 'modules/interfaces/song';
import { GET_ALL_SONGS } from 'db/songs/query';
import { SideMenu } from 'modules/enums/sideMenu';
import TopBar from './topBar/topBar';
import useStyles from './homeStyles';
import Menu from './menu/menu';
import SongsTable from '../songsTable/songsTable';
import FavoritesTable from '../favoritesTable/favoritesTable';
import PlaylistsTable from '../playlistsTable/playlistsTable';
import { useAppSelector } from '../../redux/hooks';
import Playline from '../playline/playline';

const Tables = {
  [SideMenu.SONGS]: <SongsTable />,
  [SideMenu.PLAYLISTS]: <PlaylistsTable />,
  [SideMenu.FAVORITES]: <FavoritesTable />,
};

const Home: React.FC = () => {
  const classes = useStyles();
  const [tableMode, setTableMode] = useState<SideMenu | undefined>(
    SideMenu.SONGS
  );
  const playingSong = useAppSelector((state) => state.playingSong.song);
  const [songs, setSongs] = useState<Song[]>([]);
  const currentUser = useAppSelector((state) => state.currentUser);

  useQuery(GET_ALL_SONGS, {
    variables: { userId: currentUser.id },
    onCompleted: (data) => {
      const songsFromDb = data.allSongs.nodes.map(
        (song: {
          id: string;
          name: string;
          duration: number;
          artistByArtistId: { name: string };
          favoritesBySongId: { totalCount: number };
        }) => ({
          id: song.id,
          name: song.name,
          duration: song.duration,
          artistName: song.artistByArtistId.name,
          isFavorite: song.favoritesBySongId.totalCount === 1,
        })
      );
      setSongs(songsFromDb);
    },
  });

  return (
    <songsContext.Provider value={{ songs, setSongs }}>
      <div className={classes.homepage}>
        <TopBar />
        <div className={classes.mainPage}>
          <div>
            <Menu tableMode={tableMode} setTableMode={setTableMode} />
          </div>
          <div className={classes.titleAndTable}>
            <Typography className={classes.title}>{tableMode}</Typography>
            {tableMode && Tables[tableMode]}
          </div>
        </div>
        {playingSong && <Playline />}
      </div>
    </songsContext.Provider>
  );
};

export default Home;
