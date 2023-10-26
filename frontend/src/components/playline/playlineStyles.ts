import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  playline: {
    height: '17vh',
    backgroundColor: 'rgb(112, 106, 106)',
    bottom: 0,
    paddingRight: '20px',
  },

  SongAndIcons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '5vh',
  },

  songDetails: {
    display: 'flex',
    position: 'absolute',
    right: 0,
    flexDirection: 'column',
    fontFamily: 'system-ui',
    color: 'white',
    paddingRight: '20px',
  },

  songName: {
    fontSize: '20px',
  },

  artistName: {
    fontSize: '15px',
  },

  controlIcons: {
    alignItems: 'center',
  },

  icon: {
    '&.MuiSvgIcon-root': {
      color: 'white',
      fontSize: '35px',
    },
  },

  songSlider: {
    '&.MuiSlider-root': {
      color: 'white',
    },
    paddingLeft: '50px',
  },

  songTime: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    fontFamily: 'system-ui',
  },

  sliderAndTime: {
    paddingLeft: '40px',
    paddingTop: '10px',
  },
});

export default useStyles;
