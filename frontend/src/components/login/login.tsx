import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import { GET_ALL_USERS } from 'db/users/query';
import { User } from 'src/modules/interfaces/user';
import { useAppDispatch } from 'redux/hooks';
import { setUser } from 'redux/currentUserSlice';
import useStyles from './loginStyles';
import { rtlTheme, cacheRtl } from 'src/theme';

const MUSIFY = 'Musify';
const SELECT_USER = 'בחר משתמש להתחברות';
const LOGIN = 'התחבר';
const SELECT_USER_VALUE = '-1';
const HOME_PATH = '/home';

const LogIn: React.FC = () => {
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = useState<User>();
  const [users, setUsers] = useState<User[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data } = useQuery(GET_ALL_USERS, {
    onCompleted: () => {
      setUsers(data.allUsers.nodes);
    },
  });

  const logIn = () => {
    selectedUser && dispatch(setUser(selectedUser));
    navigate(HOME_PATH);
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>
        <div className={classes.page}>
          <Typography className={classes.musifyTitle}>{MUSIFY}</Typography>
          <div className={classes.form}>
            <Select
              className={classes.selectUser}
              inputProps={{ className: classes.selectedUser }}
              onChange={(event: SelectChangeEvent) => {
                setSelectedUser(
                  users.find((user) => user.id === event.target.value)
                );
              }}
              defaultValue={SELECT_USER_VALUE}
            >
              <MenuItem value={SELECT_USER_VALUE} disabled>
                {SELECT_USER}
              </MenuItem>
              {users.map((user) => (
                <MenuItem
                  value={user.id}
                  key={user.id}
                  className={classes.menuItem}
                >
                  {user.firstName + ' ' + user.lastName}
                </MenuItem>
              ))}
            </Select>
            <Button
              className={classes.loginBtn}
              onClick={logIn}
              disabled={!selectedUser}
            >
              {LOGIN}
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default LogIn;
