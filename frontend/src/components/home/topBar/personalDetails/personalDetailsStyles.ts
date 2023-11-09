import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  personalDetails: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid white',
    borderRadius: '10px',
    fontFamily: 'system-ui',
    fontSize: '10px',
    height: '60px',
  },

  buttons: {
    display: 'flex',
    gap: '15px',
    height: '15px',
    paddingLeft: '5px',
    paddingRight: '5px',
  },

  logoutBtn: {
    '&.MuiButton-root': {
      backgroundColor: 'rgb(130, 130, 124)',
      borderRadius: '30px',
      width: '120px',
      color: 'white',
      height: '20px',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: 'rgb(130, 130, 124)',
      },
      fontFamily: 'system-ui',
    },
  },

  userName: {
    padding: '5px',
    color: 'white',
  },

  linkToLogin: {
    textDecoration: 'none',
  },

  deleteAccountBtn: {
    '&.MuiButton-root': {
      backgroundColor: 'rgb(191, 90, 74)',
      borderRadius: '30px',
      width: '120px',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgb(191, 90, 74)',
      },
      fontFamily: 'system-ui',
      height: '20px',
      alignItems: 'center',
    },
  },
});

export default useStyles;
