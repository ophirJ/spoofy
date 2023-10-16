import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import useStyles from './loginStyles';
import { useState } from 'react';
import { GET_ALL_USERS } from '../../db/users/queries';
import { User } from '../../types/user';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/currentUserSlice';
import { setTableMode } from '../../redux/currentTableSlice';
import { SideMenu } from '../../types/sideMenu';

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
        } 
    });

    const logIn = () => {
        selectedUser && dispatch(setUser(selectedUser));
        dispatch(setTableMode(SideMenu.SONGS));
    }

    return (
        <div className={classes.page}>
            <Typography className={classes.musifyTitle}>
                {MUSIFY}
            </Typography>
            <FormControl className={classes.form}>
                <InputLabel className={classes.inputLabel}>{SELECT_USER}</InputLabel>
                <Select
                    className={classes.selectUser}
                    inputProps={
                        { className: classes.selectedUser }
                    }
                    onChange={(event: any) => {
                        setSelectedUser(users.find(user => (user.firstName + ' ' + user.lastName) == event.target.value))}}
                >
                    {users.map(user => 
                        <MenuItem 
                            value={user.firstName + ' ' + user.lastName} 
                            key={user.id}
                            id={user.id}
                        >
                            {user.firstName + ' ' + user.lastName}
                        </MenuItem>)}
                </Select>
                <Link to={'/home'} className={classes.linkToHome}>
                    <Button 
                        className={classes.loginBtn}
                        onClick={logIn}
                    >
                        {LOGIN}
                    </Button>
                </Link>
            </FormControl>
        </div>
    );
};

export default LogIn