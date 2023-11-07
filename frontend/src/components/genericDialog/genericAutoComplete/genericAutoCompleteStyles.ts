import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  autoComplete: {
    backgroundColor: 'rgb(112, 106, 106)',
    '& .MuiSvgIcon-root': {
      color: 'white',
      right: 'auto',
      left: '2px',
    },
    borderRadius: '20px',
    '& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root': {
      color: 'white',
    },
    '& .css-wb57ya-MuiFormControl-root-MuiTextField-root': {
      width: '90%',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
    '&.MuiAutocomplete-root': {
      width: '500px',
    },
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
