import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  approveDeleteBtn: {
    '&.MuiButton-root': {
      backgroundColor: 'rgb(74, 191, 117)',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgb(74, 191, 117)',
      },
      fontFamily: 'system-ui',
    },
  },

  cancelDeleteBtn: {
    '&.MuiButton-root': {
      color: 'black',
      fontFamily: 'system-ui',
    },
  },

  deleteDialog: {
    direction: 'rtl',
  },

  dialogContent: {
    '&.MuiDialogTitle-root': {
      fontFamily: 'system-ui',
    },
  },
});

export default useStyles;
