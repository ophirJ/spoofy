import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  createSongDialog: {
    '&.MuiDialog-root': {
      width: '100%',
      backgroundColor: 'rgb(112, 106, 106)',
    },
    '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
      backgroundColor: 'rgb(112, 106, 106)',
      gap: '20px',
      borderRadius: '15px',
      maxWidth: '800px',
      height: '450px',
    },
  },

  dialogTitle: {
    '&.MuiDialogTitle-root': {
      color: 'white',
      fontSize: '40px',
      fontFamily: 'system-ui',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '800px',
    },
    backgroundColor: 'rgb(74, 191, 117)',
    borderRadius: '15px 15px 0 0',
  },

  greenCreateBtn: {
    '&.MuiButton-root': {
      '&:hover': {
        backgroundColor: 'rgb(72, 139, 42)',
      },
      backgroundColor: 'rgb(72, 139, 42)',
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
