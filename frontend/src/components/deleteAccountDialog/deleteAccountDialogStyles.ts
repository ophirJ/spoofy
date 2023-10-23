import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
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
      height: '25px',
      alignItems: 'center',
    },
  },

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
