import Button from '@mui/material/Button';
import { clsx } from 'clsx';

import { SideMenu } from '../../models/enums/sideMenu';
import useStyles from './menuStyles';

interface props {
  tableMode: SideMenu | undefined;
  setTableMode: React.Dispatch<React.SetStateAction<SideMenu | undefined>>;
}

const Menu: React.FC<props> = ({ tableMode, setTableMode }) => {
  const classes = useStyles();

  const handleClick = (option: SideMenu) => {
    option === tableMode ? setTableMode(undefined) : setTableMode(option);
  };

  return (
    <div className={classes.menu}>
      {Object.values(SideMenu).map((option) => (
        <Button
          key={option}
          className={clsx({
            [classes.menuItem]: true,
            [classes.selectedMenuItem]: tableMode === option,
          })}
          onClick={() => handleClick(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default Menu;
