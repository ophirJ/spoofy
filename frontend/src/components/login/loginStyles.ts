import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  page: {
    backgroundColor: 'rgb(80, 77, 77)',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
  },

  musifyTitle: {
    '&.MuiTypography-root': {
      color: 'rgb(74,191,117)',
      fontSize: '150px',
    },
    textShadow: '2px 2px 5px black',
    fontFamily: 'system-ui',
  },

  selectUser: {
    width: '300px',
    '&.MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
    backgroundColor: 'rgb(112, 106, 106)',
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
    borderRadius: '20px',
    '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
      {
        color: 'white',
        fontSize: '20px',
      },
  },

  loginBtn: {
    '&.MuiButton-root': {
      backgroundColor: 'rgb(70, 138, 41)',
      fontFamily: 'system-ui',
      '&:hover': {
        backgroundColor: 'rgb(70, 138, 41)',
      },
      color: 'white',
      width: '100px',
      borderRadius: '10px',
      fontSize: '20px',
    },
  },

  form: {
    '&.MuiFormControl-root': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
    },
  },

  inputLabel: {
    '&.MuiInputLabel-root': {
      color: 'white',
      fontFamily: 'system-ui',
      fontSize: '20px',
    },
    '&.MuiInputLabel-root.Mui-focused': {
      color: 'white',
    },
  },

  selectedUser: {
    color: 'white',
    fontSize: '20px',
    direction: 'rtl',
    fontFamily: 'system-ui',
  },

  linkToHome: {
    textDecoration: 'none',
  },

  menuItem: {
    textAlign: 'right',
  },
});

export default useStyles;
