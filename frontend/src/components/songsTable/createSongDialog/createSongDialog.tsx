import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useQuery, useMutation } from '@apollo/client';
import Autocomplete from '@mui/material/Autocomplete';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { GET_ALL_ARTISTS } from 'db/artists/query';
import { Artist } from 'modules/interfaces/artist';
import { CREATE_SONG } from 'db/songs/mutation';
import { songsContext } from 'context/songsContext';
import { StringToNumberDuration } from 'utils/StringToNumberDuration';
import { Song } from 'modules/interfaces/song';
import GenericDialog from 'src/components/genericDialog/genericDialog';
import GenericTextField from 'components/genericDialog/genericTextField/genericTextField';
import GenericAutoComplete from 'components/genericDialog/genericAutoComplete/genericAutoComplete';
import useStyles from './createSongDIalogStyles';
import { schema } from './SongSchema';

const ADD_SONG = 'צור שיר+';
const DIALOG_TITLE = 'יצירת שיר';
const SONG_NAME = 'שם';
const ARTIST = 'זמר';
const DURATION = 'משך שיר';
const CREATE_SONG_TEXT = 'צור שיר';
const NAME_FIELD = 'songName';
const ARTIST_FIELD = 'artistName';
const DURATION_FIELD = 'duration';

const CreateSongDialog: React.FC = () => {
  const classes = useStyles();
  const { setSongs } = useContext(songsContext);
  const [openCreateSong, setOpenCreateSong] = useState(false);
  const [artists, setArtists] = useState<Artist[]>([]);

  const [createSong] = useMutation(CREATE_SONG);

  const defaultValues = {
    songName: '',
    artistName: '',
    duration: '',
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmitHandler = (data: FieldValues) => {
    methods.reset();
    AddSong(data);
  };

  const handleClick = () => {
    setOpenCreateSong((prev) => !prev);
  };

  const { data } = useQuery(GET_ALL_ARTISTS, {
    onCompleted: () => {
      const artistsFromDB: Artist[] = data.allArtists.nodes.map(
        (artist: { id: string; name: string }) => ({
          id: artist.id,
          name: artist.name,
        })
      );
      setArtists(artistsFromDB);
    },
  });

  const AddSong = (formData: FieldValues) => {
    const artist = artists.find(
      (artist) => artist.name === formData.artistName
    );
    const duration = StringToNumberDuration(formData.duration);

    createSong({
      variables: {
        duration: duration,
        name: formData.songName,
        artistId: artist!.id,
      },
      onCompleted(data) {
        setOpenCreateSong(false);
        const song: Song = data.createSong.song;
        setSongs!((prev) => [
          ...prev,
          {
            id: song.id,
            name: song.name,
            artistName: artist!.name,
            duration: song.duration,
          },
        ]);
      },
    });
  };

  return (
    <div>
      <Button className={classes.grayCreateSongBtn} onClick={handleClick}>
        {ADD_SONG}
      </Button>

      <GenericDialog
        greenCreateBtnText={CREATE_SONG_TEXT}
        onSubmitHandler={onSubmitHandler}
        dialogTitle={DIALOG_TITLE}
        openDialog={openCreateSong}
        setOpenDialog={setOpenCreateSong}
        methods={methods}
        children={
          <div>
            <GenericTextField
              fieldName={NAME_FIELD}
              fieldTitle={SONG_NAME}
              errorMessage={methods.formState.errors.songName?.message}
            />
            <GenericAutoComplete
              fieldName={ARTIST_FIELD}
              isMultiple={false}
              options={artists.map((artist) => artist.name)}
              fieldTitle={ARTIST}
              errorMessage={methods.formState.errors.artistName?.message}
            />
            <GenericTextField
              fieldName={DURATION_FIELD}
              fieldTitle={DURATION}
              errorMessage={methods.formState.errors.duration?.message}
            />
          </div>
        }
      />
    </div>
  );
};

export default CreateSongDialog;
