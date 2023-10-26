import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import DeleteAccountDialog from './deleteAccountDialog/deleteAccountDialog';
import { resetUser } from '../../../redux/currentUserSlice';
import { resetSong } from '../../../redux/playingSongSlice';
import useStyles from './personalDetailsStyles';

const LOGOUT = 'התנתקות';
const LOGIN_PATH = '/';
const HELLO = 'היי,';
const DELETE_ACCOUNT = 'מחק חשבון';

const PersonalDetails: React.FC = () => {
  const classes = useStyles();
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(resetUser());
    dispatch(resetSong());
    navigate(LOGIN_PATH);
  };

  const handleClick = () => {
    setOpenDeleteDialog((prev) => !prev);
  };

  return (
    <div className={classes.personalDetails}>
      <Typography className={classes.userName}>
        {HELLO + ' ' + currentUser.firstName + ' ' + currentUser.lastName}
      </Typography>
      <div className={classes.buttons}>
        <Button className={classes.logoutBtn} onClick={logOut}>
          {LOGOUT}
        </Button>
        <Button className={classes.deleteAccountBtn} onClick={handleClick}>
          {DELETE_ACCOUNT}
        </Button>
        <DeleteAccountDialog
          openDeleteDialog={openDeleteDialog}
          setOpenDeleteDialog={setOpenDeleteDialog}
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
