import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  grayCreateSongBtn: {
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

  createSongDialog: {
    '&.MuiDialog-root': {
      width: '100%',
      backgroundColor: 'rgb(112, 106, 106)',
    },
    '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
      backgroundColor: 'rgb(112, 106, 106)',
      gap: '20px',
      borderRadius: '15px',
      maxWidth: '1100px',
      minHeight: '500px',
    },
  },

  nameInput: {
    '& .MuiInputBase-input MuiOutlinedInput-input': {
      border: 0,
    },
    '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
      color: 'white',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
  },

  dialogField: {
    display: 'flex',
    direction: 'rtl',
    gap: '20px',
    padding: '10px',
    borderTop: '1px solid white',
  },

  titles: {
    '&.MuiTypography-root': {
      color: 'white',
      fontSize: '20px',
      fontFamily: 'system-ui',
    },
  },

  durationInput: {
    '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
      color: 'white',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
  },

  createSongTitle: {
    '&.MuiDialogTitle-root': {
      color: 'white',
      fontSize: '40px',
      fontFamily: 'system-ui',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '1000px',
    },
    backgroundColor: 'rgb(74, 191, 117)',
    borderRadius: '15px 15px 0 0',
  },

  selectArtist: {
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
      width: '200px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
  },

  greenCreateSongBtn: {
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

  errorMessage: {
    '&.MuiTypography-root': {
      color: 'red',
      fontSize: '15px',
      fontFamily: 'system-ui',
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
