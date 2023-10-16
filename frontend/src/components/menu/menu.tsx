import Button from '@mui/material/Button';

import useStyles from './menuStyles';
import { SideMenu } from '../../types/sideMenu';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setTableMode } from '../../redux/currentTableSlice';
import { useState } from 'react';

const SONGS = 'שירים';
const PLAYLISTS = 'פלייליסטים';
const FAVORITES = 'מועדפים';

const MENU_ITEMS = [
    { [SONGS]: SideMenu.SONGS }, { [PLAYLISTS]: SideMenu.PLAYLISTS }, { [FAVORITES]: SideMenu.FAVORITES }
];


const Menu: React.FC = () => {

    const classes = useStyles();
    const dispatch = useAppDispatch();
    const [isChosen, setIsChosen] = useState<boolean>(false);
    const currentTableMode = useAppSelector(state => state.currentTableMode.currentTableMode);
    
    return (
        <div className={classes.menu}>
            {
                MENU_ITEMS.map(item =>
                    <Button
                        key={MENU_ITEMS.indexOf(item)}
                        className={currentTableMode == Object.values(item)[0] ? classes.selectedMenuItem : classes.menuItem}
                        onClick={() => {
                            dispatch(setTableMode(Object.values(item)[0]))
                        }}
                    >
                        {Object.keys(item)[0]}
                    </Button>)
            }
        </div>
    );
};

export default Menu;