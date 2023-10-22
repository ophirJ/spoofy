import { useState } from "react";
import { useQuery } from '@apollo/client';

import TopBar from "../../components/topBar/topBar";
import useStyles from "./homeStyles"
import Menu from "../../components/menu/menu";
import SongsTable from "../../components/songsTable/songsTable";
import FavoritesTable from "../../components/favoritesTable/favoritesTable";
import PlaylistsTable from "../../components/playlistsTable/playlistsTable";
import { useAppSelector } from "../../redux/hooks";
import Playline from "../../components/playline/playline";
import { songsContext } from "../../components/context/songsContext";
import { Song } from "../../types/song";
import { GET_ALL_SONGS } from "../../db/songs/queries";

const Home: React.FC = () => {

    const classes = useStyles();
    const Tables = {
        'songs': <SongsTable />,
        'playlists': <PlaylistsTable />,
        'favorites': <FavoritesTable />,
        'none': <></>
    };
    const currentTableMode = useAppSelector(state => state.currentTableMode.currentTableMode);
    const playingSong = useAppSelector(state => state.playingSong.song);
    const [songs, setSongs] = useState<Song[]>([]);
    const currentUser = useAppSelector(state => state.currentUser);

    useQuery(GET_ALL_SONGS, {
        variables: { 'userId': currentUser.id },
        onCompleted: (data) => {
            data.allSongs.nodes.map((song: { id: string; name: string; duration: number; artistByArtistId: { name: string; }; favoritesBySongId: { totalCount: number } }) =>
                setSongs(prev => [...prev, {
                    id: song.id,
                    name: song.name,
                    duration: song.duration,
                    artistName: song.artistByArtistId.name,
                    isFavorite: song.favoritesBySongId.totalCount === 1
                }])
            )
        }
    });

    return (
        <songsContext.Provider value={{ songs, setSongs }}>
            <div className={classes.homepage}>
                <TopBar />
                <div className={classes.tableAndMenu}>
                    <Menu />
                    <div className={classes.table}>
                        {Tables[currentTableMode]}
                    </div>
                </div>
                {playingSong && <Playline />}
            </div>
        </songsContext.Provider>
    );
};

export default Home;