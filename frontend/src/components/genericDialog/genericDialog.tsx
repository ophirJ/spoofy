import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { FormProvider, FieldValues, UseFormReturn } from 'react-hook-form';

import useStyles from './genericDialogStyles';

interface props {
  onSubmitHandler: (data: FieldValues) => void;
  greenCreateBtnText: string;
  dialogTitle: string;
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  methods: UseFormReturn<any, any, undefined>;
  children: JSX.Element;
}

const GenericDialog: React.FC<props> = ({
  greenCreateBtnText,
  onSubmitHandler,
  dialogTitle,
  openDialog,
  setOpenDialog,
  methods,
  children,
}) => {
  const classes = useStyles();

  const closeDialog = () => {
    setOpenDialog((prev) => !prev);
    methods.reset();
  };

  return (
    <div>
      <Dialog
        className={classes.createSongDialog}
        open={openDialog}
        onClose={closeDialog}
      >
        <DialogTitle className={classes.dialogTitle}>{dialogTitle}</DialogTitle>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
            <DialogContent>{children}</DialogContent>
            <DialogActions className={classes.dialogActions}>
              <Button type="submit" className={classes.greenCreateBtn}>
                {greenCreateBtnText}
              </Button>
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
    </div>
  );
};

export default GenericDialog;
