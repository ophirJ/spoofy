import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({

    playline: {
        height: '25vh',
        width: '100vw',
        backgroundColor: 'rgb(112, 106, 106)',
        // position: 'absolute',
        bottom: 0,
       paddingRight: '20px'
    },

    SongAndIcons: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },

    songDetails: {
        display: 'flex',
        position: 'absolute',
        right: 0,
        flexDirection: 'column',
        fontFamily: 'system-ui',
        color: 'white',
        paddingRight: '20px'
    },

    songName: {
        fontSize: '25px'
    },

    artistName: {
        fontSize: '15px'
    },

    controlIcons: {
        alignItems: 'center'
    },

    icon: {
        '&.MuiSvgIcon-root': {
            color: 'white',
            fontSize: '50px'
        }
    },

    songSlider: {
        '&.MuiSlider-root': {
            color: 'white'
        },
        paddingLeft: '50px'
    },

    songTime: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        color: 'white',
        fontFamily: 'system-ui'
    },

    sliderAndTime: {
        paddingLeft: '40px'
    }
});

export default useStyles;