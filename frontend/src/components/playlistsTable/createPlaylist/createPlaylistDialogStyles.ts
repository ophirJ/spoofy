import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  grayCreateBtn: {
    '&.MuiButton-root': {
      '&:hover': {
        backgroundColor: 'rgb(185, 172, 172)',
      },
      backgroundColor: 'rgb(185, 172, 172)',
      width: 'max-content',
      color: 'white',
      fontFamily: 'system-ui',
      fontSize: '15px',
      height: '30px',
      alignItems: 'center',
      borderRadius: '20px',
    },
  },

  dialogActions: {
    '&.MuiDialogActions-root': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
});

export default useStyles;
