import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  homepage: {
    backgroundColor: 'rgb(80, 77, 77)',
    width: '100vw',
    height: '100vh',
    direction: 'rtl',
    display: 'flex',
    flexDirection: 'column',
  },

  titleAndTable: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    height: '70vh',
  },

  title: {
    '&.MuiTypography-root': {
      color: 'white',
      fontSize: '30px',
      fontFamily: 'system-ui',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    backgroundColor: 'rgb(74, 191, 117)',
    borderRadius: '15px',
    width: '70vw',
  },

  mainPage: {
    display: 'flex',
    gap: '40px',
  },
});

export default useStyles;
