import logo from 'assets/musify-logo.png';
import useStyles from './topBarStyles';
import PersonalDetails from './personalDetails/personalDetails';

const TopBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.topBar}>
      <img src={logo} className={classes.musifyLogo} />
      <PersonalDetails />
    </div>
  );
};

export default TopBar;
