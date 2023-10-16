import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    
    personalDetails: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid white',
        borderRadius: '10px',
        fontFamily: 'system-ui'
    },

    buttons: {
        display: 'flex',
        gap: '15px',
        padding: '5px',
        height: '25px'
    },

    topBar: {
        display: 'flex',
        justifyContent: 'space-between',
        direction: 'rtl',
        padding: '10px'
    },

    musifyLogo: {
        width: '190px',
        height: '70px'
    },

    logoutBtn: {
        '&.MuiButton-root':{
            backgroundColor: 'rgb(130, 130, 124)',
            borderRadius: '30px',
            width: '120px',
            color: 'white',
            height: '25px',
            alignItems: 'center',
            '&:hover': {
                backgroundColor: 'rgb(130, 130, 124)'
            },
            fontFamily: 'system-ui'
        }
    },

    userName: {
        padding: '5px',
        color: 'white'
    },

    linkToLogin: {
        textDecoration: 'none'
    }
});

export default useStyles;