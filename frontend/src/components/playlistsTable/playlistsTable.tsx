import { useQuery } from "@apollo/client";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

import GenericTable from "../genericTable/genericTable";
import GenericTitle from "../genericTitle/genericTitle";
import useStyles from "./playlistsTableStyles";
import { GET_ALL_PLAYLISTS_BY_USER } from "../../db/playlists/queires";
import { Playlist } from "../../types/playlist";
import { Song } from "../../types/song";
import { Typography } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";


const PLAYLISTS = 'פלייליסטים';

const PlaylistsTable: React.FC = () => {

    const classes = useStyles();
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const currentUser = useAppSelector(state => state.currentUser);

    useQuery(GET_ALL_PLAYLISTS_BY_USER, {
        variables: {
            'userId': currentUser.id
        },
        onCompleted: (data) => {
            const playlistsDB = data.allPlaylists.nodes;

            playlistsDB.map((playlist: { songPlaylistsByPlaylistId: { nodes: any[]; }; id: string; name: string; }) => {
                const songsList: Song[] = [];
                playlist.songPlaylistsByPlaylistId.nodes.map(song =>
                    songsList.push({
                        id: song.songBySongId.id,
                        name: song.songBySongId.name,
                        duration: song.songBySongId.duration,
                        artistName: song.songBySongId.artistByArtistId.name
                    })
                )
                setPlaylists(prev => [...prev, {
                    id: playlist.id,
                    name: playlist.name,
                    songs: songsList
                }])
            })
        }
    });

    return (
        <div className={classes.playlitsPage}>
            <GenericTitle text={PLAYLISTS} />
            {playlists.map(playlist =>
                <div key={playlist.id}>
                    <div className={classes.playlistTitle}>
                        <Typography className={classes.playlistName}>{playlist.name}</Typography>
                        <IconButton>
                            <EditIcon className={classes.editIcon} />
                        </IconButton>
                    </div>
                    <GenericTable songs={playlist.songs} />
                </div>
            )}
        </div>
    );
};

export default PlaylistsTable;