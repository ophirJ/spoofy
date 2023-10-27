import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { DELETE_USER } from 'db/users/mutation';
import { useAppSelector } from 'redux/hooks';
import useStyles from './deleteAccountDialogStyles';

const DELETE_MESSAGE = 'האם אתה בטוח שאתה רוצה למחוק את החשבון?';
const CANCEL = 'ביטול';
const APPROVE = 'אישור';
const LOGIN_PATH = '/';

interface props {
  openDeleteDialog: boolean;
  setOpenDeleteDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteAccountDialog: React.FC<props> = ({
  openDeleteDialog,
  setOpenDeleteDialog,
}) => {
  const classes = useStyles();
  const [deleteUser] = useMutation(DELETE_USER);
  const currentUser = useAppSelector((state) => state.currentUser);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpenDeleteDialog((prev) => !prev);
  };

  const deleteAccount = () => {
    deleteUser({
      variables: {
        id: currentUser.id,
      },
      onCompleted: () => {
        handleClick();
        navigate(LOGIN_PATH);
      },
    });
  };

  return (
    <>
      <Dialog
        open={openDeleteDialog}
        onClose={handleClick}
        className={classes.deleteDialog}
      >
        <DialogTitle className={classes.dialogContent}>
          {DELETE_MESSAGE}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClick} className={classes.cancelDeleteBtn}>
            {CANCEL}
          </Button>
          <Button
            onClick={deleteAccount}
            autoFocus
            className={classes.approveDeleteBtn}
          >
            {APPROVE}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteAccountDialog;
