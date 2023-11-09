import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useContext, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import GenericDialog from 'components/genericDialog/genericDialog';
import GenericTextField from 'components/genericDialog/genericTextField/genericTextField';
import GenericAutoComplete from 'components/genericDialog/genericAutoComplete/genericAutoComplete';
import { songsContext } from 'context/songsContext';
import { createPlaylistSchema } from '../createPlaylist/playlistSchema';
import useStyles from './editPlaylistStyles';

const SAVE = 'שמור';
const DIALOG_TITLE = 'עריכת פלייליסט';
const NAME = 'שם';
const SONGS = 'שירים';
const NAME_FIELD = 'playlistName';
const SONGS_FIELD = 'songs';

const EditPlaylist: React.FC = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { songs } = useContext(songsContext);

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
    setOpenDialog(false);
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
