import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { FieldValues, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@apollo/client';

import { CREATE_PLAYLIST, ADD_SONG_TO_PLAYLIST } from 'db/playlists/mutation';
import GenericDialog from 'components/genericDialog/genericDialog';
import { songsContext } from 'context/songsContext';
import { playlistsContext } from 'context/playlistsContext';
import GenericTextField from 'components/genericDialog/genericTextField/genericTextField';
import GenericAutoComplete from 'components/genericDialog/genericAutoComplete/genericAutoComplete';
import { useAppSelector } from 'redux/hooks';
import { Song } from 'src/models/interfaces/song';
import useStyles from './createPlaylistDialogStyles';
import { createPlaylistSchema } from './playlistSchema';

const ADD_PLAYLIST = 'צור פלייליסט חדש+';
const CREATE_PLAYLIST_TEXT = 'צור פלייליסט';
const DIALOG_TITLE = 'יצירת פלייליסט';
const NAME = 'שם';
const SONGS = 'שירים';
const NAME_FIELD = 'playlistName';
const SONGS_FIELD = 'songs';

const CreatePlaylistDialog: React.FC = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const { songs } = useContext(songsContext);
  const { setPlaylists } = useContext(playlistsContext);
  const [createPlaylist] = useMutation(CREATE_PLAYLIST);
  const [addSongToPlaylist] = useMutation(ADD_SONG_TO_PLAYLIST);
  const currentUser = useAppSelector((state) => state.currentUser);

  const handleClick = () => {
    setOpenDialog((prev) => !prev);
  };

  const defaultValues = {
    playlistName: '',
    songs: [],
  };

  const methods = useForm({
    resolver: yupResolver(createPlaylistSchema),
    defaultValues: defaultValues,
  });

  const onSubmitHandler = (data: FieldValues) => {
    methods.reset();
    newPlaylist(data);
    setOpenDialog(false);
  };

  const newPlaylist = (formData: FieldValues) => {
    createPlaylist({
      variables: { name: formData.playlistName, userId: currentUser.id },
      onCompleted(data) {
        const songList: Song[] = formData.songs.map((songData: string) =>
          songs.find((song) => song.name === songData)
        );
        const playlist = data.createPlaylist.playlist;
        songList.map((song) =>
          addSongToPlaylist({
            variables: { playlistId: playlist.id, songId: song.id },
          })
        );
        setPlaylists!((prev) => [
          ...prev,
          {
            id: playlist.id,
            name: playlist.name,
            songs: songList,
          },
        ]);
      },
    });
  };

  return (
    <div>
      <Button className={classes.grayCreateBtn} onClick={handleClick}>
        {ADD_PLAYLIST}
      </Button>
      <GenericDialog
        greenCreateBtnText={CREATE_PLAYLIST_TEXT}
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

export default CreatePlaylistDialog;
