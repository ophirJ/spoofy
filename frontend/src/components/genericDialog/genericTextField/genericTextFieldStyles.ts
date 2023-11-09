import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  TextField: {
    '& .MuiInputBase-input MuiOutlinedInput-input': {
      border: 0,
    },
    '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
      color: 'white',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
    width: '500px',
  },
  titles: {
    '&.MuiTypography-root': {
      color: 'white',
      fontSize: '20px',
      fontFamily: 'system-ui',
    },
  },

  errorMessage: {
    '&.MuiTypography-root': {
      color: 'red',
      fontSize: '15px',
      fontFamily: 'system-ui',
    },
  },

  dialogField: {
    display: 'flex',
    direction: 'rtl',
    gap: '20px',
    padding: '10px',
    borderTop: '1px solid white',
  },
});

export default useStyles;
