import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    
    homepage: {
        backgroundColor: 'rgb(80, 77, 77)',
        width: '100vw',
        // height: '100vh',
        direction: 'rtl',
        display: 'flex',
        flexDirection: 'column',
        // gap: '20px'
    },

    tableAndMenu: {
        display: 'flex',
        gap: '40px',
        paddingTop: '30px',
        height: '70vh'
    },

    table: {
        display: 'flex',
        justifyContent: 'center',
        width: '1400px'
    }
});

export default useStyles;