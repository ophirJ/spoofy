import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import logo from '../../assets/musify-logo.png';
import useStyles from './topBarStyles';
import DeleteAccountDialog from '../deleteAccountDialog/deleteAccountDialog';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { resetUser } from '../../redux/currentUserSlice';
import { resetSong } from '../../redux/playingSongSlice';

const LOGOUT = 'התנתקות';
const LOGIN_PATH = '/';
const HELLO = 'היי,';

const TopBar: React.FC = () => {
  const classes = useStyles();
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(resetUser());
    dispatch(resetSong());
  };

  return (
    <div className={classes.topBar}>
      <img src={logo} className={classes.musifyLogo} />
      <div className={classes.personalDetails}>
        <Typography className={classes.userName}>
          {HELLO + ' ' + currentUser.firstName + ' ' + currentUser.lastName}
        </Typography>
        <div className={classes.buttons}>
          <Link to={LOGIN_PATH} className={classes.linkToLogin}>
            <Button className={classes.logoutBtn} onClick={logOut}>
              {LOGOUT}
            </Button>
          </Link>
          <DeleteAccountDialog />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
