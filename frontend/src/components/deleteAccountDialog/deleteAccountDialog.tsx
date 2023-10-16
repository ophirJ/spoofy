import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import useStyles from './deleteAccountDialogStyles';
import { DELETE_USER } from '../../db/users/mutations';
import { useAppSelector } from '../../redux/hooks';

const DELETE_ACCOUNT = 'מחק חשבון';
const DELETE_MESSAGE = 'האם אתה בטוח שאתה רוצה למחוק את החשבון?';
const CANCEL = 'ביטול';
const APPROVE = 'אישור';
const LOGIN_PATH = '/';


const DeleteAccountDialog: React.FC = () => {

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const classes = useStyles();
    const [deleteUser] = useMutation(DELETE_USER);
    const currentUser = useAppSelector(state => state.currentUser);

    const handleClick = () => {
        setOpenDeleteDialog(prev => !prev);
    };

    const deleteAccount = () => {
        handleClick();
        deleteUser({
            variables: {
                id: currentUser.id
            }})
    };


    return (
        <>
            <Button
                className={classes.deleteAccountBtn}
                onClick={handleClick}
            >
                {DELETE_ACCOUNT}
            </Button>

            <Dialog
                open={openDeleteDialog}
                onClose={handleClick}
                className={classes.deleteDialog}
            >
                <DialogTitle className={classes.dialogContent}>
                    {DELETE_MESSAGE}
                </DialogTitle>
                <DialogActions>
                    <Button
                        onClick={handleClick}
                        className={classes.cancelDeleteBtn}
                    >
                        {CANCEL}
                    </Button>
                    <Link to={LOGIN_PATH}>
                        <Button
                            onClick={deleteAccount}
                            autoFocus
                            className={classes.approveDeleteBtn}
                        >
                            {APPROVE}
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DeleteAccountDialog;