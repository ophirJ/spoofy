import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({

    songsTable: {
        borderLeft: '1px solid white',
        paddingTop: '10px',
        paddingBottom: '10px',
        '&.MuiDataGrid-columnHeader': {
            fontSize: '20px'
        },
        '&.MuiDataGrid-cell': {
            fontSize: '10px',
            height: '50px'
        },
        '&.MuiDataGrid-root': {
            color: 'white',
            fontFamily: 'system-ui',
            alignItems: 'center',
            border: 0,
            '&>.MuiDataGrid-main': {
                width: '90%',
            }
        },
        '&.MuiDataGrid-row Mui-selected': {
            backgroundColor: 'rgb(129, 129, 129)'
        },
        '&.css-1lymaxv-MuiDataGrid-root .MuiDataGrid-row.Mui-selected': {
            backgroundColor: 'rgb(129, 129, 129)'
        },
        '&.css-1lymaxv-MuiDataGrid-root .MuiDataGrid-row.Mui-selected:hover, .css-1lymaxv-MuiDataGrid-root .MuiDataGrid-row.Mui-selected.Mui-hovered': {
            backgroundColor: 'rgb(129, 129, 129)'
        },
        "&.MuiDataGrid-root .MuiDataGrid-cell:focus": {
            outline: 'none'
        },
        "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus": {
            outline: 'none'
        },

    },

    songsPage: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center'
    },

    tableContainer: {
        backgroundColor: 'rgb(112, 106, 106)',
        // maxHeight: '600px',
        maxHeight: '40vh',
        width: '80vw',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column'
    },

    icons: {
        '&.MuiIconButton-root': {
            color: 'white'
        }
    },

    favoriteIcon: {
        '&.MuiSvgIcon-root': {
            fill: 'white'
        }
    },
});

export default useStyles;
