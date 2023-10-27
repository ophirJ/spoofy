import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  plusIcon: {
    '&.MuiIconButton-root': {
      color: 'white',
    },
  },

  playlistList: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(187, 173, 173)',
    textAlign: 'center',
    width: '110px',
  },

  underlinedText: {
    '&.MuiTypography-root': {
      textDecoration: 'underline',
      color: 'white',
      borderBottom: '1px solid white',
      padding: '5px',
      fontFamily: 'system-ui',
      fontWeight: 'bold',
      fontSize: '12px',
    },
  },

  playlistName: {
    '&.MuiTypography-root': {
      color: 'white',
      borderBottom: '1px solid white',
      fontFamily: 'system-ui',
      padding: '5px',
      fontSize: '12px',
    },
    '&.MuiButton-root': {
      color: 'white',
      borderBottom: '1px solid white',
      fontFamily: 'system-ui',
      padding: '5px',
      fontSize: '12px',
    },
  },
});

export default useStyles;
