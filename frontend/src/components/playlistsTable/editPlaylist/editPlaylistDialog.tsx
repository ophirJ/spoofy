import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useContext, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@apollo/client';

import GenericDialog from 'components/genericDialog/genericDialog';
import GenericTextField from 'components/genericDialog/genericTextField/genericTextField';
import GenericAutoComplete from 'components/genericDialog/genericAutoComplete/genericAutoComplete';
import { songsContext } from 'context/songsContext';
import { playlistsContext } from 'context/playlistsContext';
import { Playlist } from 'modules/interfaces/playlist';
import { Song } from 'modules/interfaces/song';
import {
  UPDATE_PLAYLIST,
  ADD_SONG_TO_PLAYLIST,
  DELETE_SONG_FROM_PLAYLIST,
} from 'db/playlists/mutation';
import { createPlaylistSchema } from '../createPlaylist/playlistSchema';
import useStyles from './editPlaylistDialogStyles';

const SAVE = 'שמור';
const DIALOG_TITLE = 'עריכת פלייליסט';
const NAME = 'שם';
const SONGS = 'שירים';
const NAME_FIELD = 'playlistName';
const SONGS_FIELD = 'songs';

interface props {
  currentPlaylist: Playlist;
}

const EditPlaylist: React.FC<props> = ({ currentPlaylist }) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { songs } = useContext(songsContext);
  const { setPlaylists } = useContext(playlistsContext);
  const [updatePlaylist] = useMutation(UPDATE_PLAYLIST);
  const [addSongToPlaylist] = useMutation(ADD_SONG_TO_PLAYLIST);
  const [deleteSongFromPlaylist] = useMutation(DELETE_SONG_FROM_PLAYLIST);

  const defaultValues = {
    playlistName: currentPlaylist.name,
    songs: currentPlaylist.songs.map((song) => song.name),
  };
  console.log(currentPlaylist);

  const methods = useForm({
    resolver: yupResolver(createPlaylistSchema),
    defaultValues: defaultValues,
  });

  const onSubmitHandler = (data: FieldValues) => {
    methods.reset();
    editPlaylist(data);
    setOpenDialog(false);
  };

  const editPlaylist = (data: FieldValues) => {
    const updatedSongs: Song[] = data.songs.map((songData: string) =>
      songs.find((song) => song.name === songData)
    );
    updatedSongs.map((newSong) => {
      !currentPlaylist.songs.find((song) => song.id === newSong.id) &&
        addSongToPlaylist({
          variables: { playlistId: currentPlaylist.id, songId: newSong.id },
          onCompleted() {
            setPlaylists!((prev) =>
              prev.map((playlist) => {
                if (playlist.id === currentPlaylist.id) {
                  return { ...playlist, songs: updatedSongs };
                }
                return playlist;
              })
            );
          },
        });
    });
    updatePlaylist({
      variables: { id: currentPlaylist.id, name: data.playlistName },
      onCompleted(data) {
        const updatedPlaylist = data.updatePlaylistById.playlist;
        setPlaylists!((prev) =>
          prev.map((playlist) => {
            if (playlist.id === updatedPlaylist.id) {
              return { ...playlist, name: updatedPlaylist.name };
            }
            return playlist;
          })
        );
      },
    });
    currentPlaylist.songs.map((song) => {
      !updatedSongs.find((newSong) => newSong.id === song.id) &&
        deleteSongFromPlaylist({
          variables: { songId: song.id, playlistId: currentPlaylist.id },
          onCompleted(data) {
            console.log(data);
            const playlistId =
              data.deleteSongPlaylistBySongIdAndPlaylistId.songPlaylist
                .playlistId;
            const songId =
              data.deleteSongPlaylistBySongIdAndPlaylistId.songPlaylist.songId;
            setPlaylists!((prev) =>
              prev.map((playlist) => {
                if (playlist.id === playlistId) {
                  return {
                    ...playlist,
                    songs: playlist.songs.filter((song) => song.id === songId),
                  };
                }
                return playlist;
              })
            );
          },
        });
    });
  };

  return (
    <div>
      <IconButton onClick={() => setOpenDialog(true)}>
        <EditIcon className={classes.editIcon} />
      </IconButton>
      <GenericDialog
        greenCreateBtnText={SAVE}
        onSubmitHandler={onSubmitHandler}
        dialogTitle={DIALOG_TITLE}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        methods={methods}
        children={
          <div>
            <GenericTextField
              fieldName={NAME_FIELD}
              fieldTitle={NAME}
              errorMessage={methods.formState.errors.playlistName?.message}
            />
            <GenericAutoComplete
              fieldName={SONGS_FIELD}
              isMultiple={true}
              options={songs.map((song) => song.name)}
              fieldTitle={SONGS}
              errorMessage={methods.formState.errors.songs?.message}
            />
          </div>
        }
      />
    </div>
  );
};

export default EditPlaylist;
