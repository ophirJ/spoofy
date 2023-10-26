import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    paddingRight: '15px',
  },

  menuItem: {
    '&.MuiButton-root': {
      '&:hover': {
        backgroundColor: 'rgb(191, 177, 177)',
      },
      backgroundColor: 'rgb(191, 177, 177)',
      width: '180px',
      color: 'white',
      fontFamily: 'system-ui',
      fontSize: '20px',
      height: '25px',
      alignItems: 'center',
    },
  },

  selectedMenuItem: {
    '&.MuiButton-root': {
      '&:hover': {
        backgroundColor: 'rgb(74, 191, 117)',
      },
      backgroundColor: 'rgb(74, 191, 117)',
    },
  },
});

export default useStyles;
