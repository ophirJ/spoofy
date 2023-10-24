import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
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
});

export default useStyles;
