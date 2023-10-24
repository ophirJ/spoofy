import {
  DataGridPro,
  GridRowParams,
  GridRowSelectionModel,
  LicenseInfo,
} from '@mui/x-data-grid-pro';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid-pro';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

import { DurationToString } from '../../DurationToString';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSong, setSelectionModel } from '../../redux/playingSongSlice';
import AddFavorite from '../addFavorite/addFavorite';
import { Song } from '../../types/song';
import useStyles from './genericTableStyles';

const SONG = 'שיר';
const ARTIST = 'זמר';
const DURATION = 'משך שיר';

interface props {
  songs: Song[];
}

const GenericTable: React.FC<props> = ({ songs }) => {
  const selectionModel = useAppSelector(
    (state) => state.playingSong.selectionModel
  );

  const classes = useStyles();
  const dispatch = useAppDispatch();
  const playingSong = useAppSelector((state) => state.playingSong.song);

  LicenseInfo.setLicenseKey(
    '6239d8e4e4e446a3d208d638ff7603bdT1JERVI6Um9tLVRlc3QsRVhQSVJZPTIyMjMwNjEyMDAwMDAsS0VZVkVSU0lPTj0x'
  );

  const columns: GridColDef[] = [
    {
      field: 'song',
      headerName: SONG,
      headerClassName: classes.songsTable,
      width: 350,
    },
    {
      field: 'artist',
      headerName: ARTIST,
      headerClassName: classes.songsTable,
      width: 260,
    },
    {
      field: 'duration',
      headerName: DURATION,
      headerClassName: classes.songsTable,
      width: 120,
    },
    {
      field: 'addToPlaylist',
      headerName: '',
      renderCell: () => {
        return (
          <IconButton className={classes.icons}>
            <AddIcon />
          </IconButton>
        );
      },
      width: 30,
    },
    {
      field: 'addToFavorites',
      headerName: '',
      renderCell: (params) => {
        return (
          <AddFavorite
            isFavorite={params.row.isFavorite}
            songID={String(params.id)}
          />
        );
      },
      width: 30,
    },
  ];

  const changeSelectionMode = (newSelectionModel: GridRowSelectionModel) => {
    if (newSelectionModel[0] === selectionModel[0]) {
      dispatch(setSelectionModel([]));
    } else {
      dispatch(setSelectionModel(newSelectionModel));
    }
  };

  const selectSong = (params: GridRowParams<any>) => {
    let song;
    playingSong?.id == params.id
      ? (song = undefined)
      : (song = songs.find((song) => song.id == params.id));
    dispatch(setSong(song));
  };

  const rows: GridRowsProp[] = [];
  songs.map((song) =>
    rows.push({
      id: song.id,
      song: song.name,
      artist: song.artistName,
      duration: DurationToString(song.duration),
      isFavorite: song.isFavorite,
    })
  );

  return (
    <div className={classes.tableContainer}>
      <DataGridPro
        className={classes.songsTable}
        rows={rows}
        columns={columns}
        disableColumnMenu
        hideFooter
        onRowClick={(params) => selectSong(params)}
        onRowSelectionModelChange={(newSelectionModel) =>
          changeSelectionMode(newSelectionModel)
        }
        rowSelectionModel={selectionModel}
      />
    </div>
  );
};

export default GenericTable;
