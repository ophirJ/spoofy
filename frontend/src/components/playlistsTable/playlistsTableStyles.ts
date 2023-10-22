import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({

    playlitsPage: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        alignItems: 'center',
    },

    playlistName: {
        '&.MuiTypography-root': {
            color: 'white',
            fontFamily: 'system-ui',
            padding: '5px'
        }
    },

    playlistTitle: {
        display: 'flex'
    },

    editIcon: {
        '&.MuiSvgIcon-root': {
            backgroundColor: 'white'
        }
    }
});

export default useStyles;
