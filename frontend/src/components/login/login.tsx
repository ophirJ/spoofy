import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

import { GET_ALL_USERS } from '../../db/users/query';
import { User } from '../../models/interfaces/user';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/currentUserSlice';
import useStyles from './loginStyles';

const MUSIFY = 'Musify';
const SELECT_USER = 'בחר משתמש להתחברות';
const LOGIN = 'התחבר';

const LogIn: React.FC = () => {
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = useState<User>();
  const [users, setUsers] = useState<User[]>([]);
  const dispatch = useAppDispatch();

  const { data } = useQuery(GET_ALL_USERS, {
    onCompleted: () => {
      setUsers(data.allUsers.nodes);
    },
  });

  const logIn = () => {
    selectedUser && dispatch(setUser(selectedUser));
  };

  return (
    <div className={classes.page}>
      <Typography className={classes.musifyTitle}>{MUSIFY}</Typography>
      <FormControl className={classes.form}>
        <InputLabel className={classes.inputLabel}>{SELECT_USER}</InputLabel>
        <Select
          className={classes.selectUser}
          inputProps={{ className: classes.selectedUser }}
          onChange={(event: SelectChangeEvent) => {
            setSelectedUser(
              users.find((user) => user.id === event.target.value)
            );
          }}
        >
          {users.map((user) => (
            <MenuItem value={user.id} key={user.id}>
              {user.firstName + ' ' + user.lastName}
            </MenuItem>
          ))}
        </Select>
        <Link to={'/home'} className={classes.linkToHome}>
          <Button className={classes.loginBtn} onClick={logIn}>
            {LOGIN}
          </Button>
        </Link>
      </FormControl>
    </div>
  );
};

export default LogIn;
