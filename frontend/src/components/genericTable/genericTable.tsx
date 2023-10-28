import {
  DataGridPro,
  GridRowParams,
  GridRowSelectionModel,
  LicenseInfo,
} from '@mui/x-data-grid-pro';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid-pro';

import { DurationToString } from 'utils/DurationToString';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setSong, setSelectionModel } from 'redux/playingSongSlice';
import { Song } from 'modules/interfaces/song';
import AddFavorite from './addFavorite/addFavorite';
import useStyles from './genericTableStyles';
import AddToPlaylist from './addToPlaylist/addToPlaylist';

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
      sortable: false,
    },
    {
      field: 'artist',
      headerName: ARTIST,
      headerClassName: classes.songsTable,
      width: 260,
      sortable: false,
    },
    {
      field: 'duration',
      headerName: DURATION,
      headerClassName: classes.songsTable,
      width: 120,
      sortable: false,
    },
    {
      field: 'addToPlaylist',
      headerName: '',
      renderCell: (params) => {
        return (
          <div className={classes.songActions}>
            <AddToPlaylist
              songId={String(params.id)}
              songName={params.row.song}
            />
            <AddFavorite
              isFavorite={params.row.isFavorite}
              songID={String(params.id)}
            />
          </div>
        );
      },
      width: 100,
      sortable: false,
    },
  ];

  const changeSelectionMode = (newSelectionModel: GridRowSelectionModel) => {
    if (newSelectionModel[0] === selectionModel[0]) {
      dispatch(setSelectionModel([]));
    } else {
      dispatch(setSelectionModel(newSelectionModel));
    }
  };

  const selectSong = (params: GridRowParams) => {
    dispatch(
      setSong(
        playingSong?.id !== params.id
          ? songs.find((song) => song.id === params.id)
          : undefined
      )
    );
  };

  const rows: {
    id: string;
    song: string;
    artist: string;
    duration: string;
    isFavorite: boolean | undefined;
  }[] = songs.map((song) => ({
    id: song.id,
    song: song.name,
    artist: song.artistName,
    duration: DurationToString(song.duration),
    isFavorite: song.isFavorite,
  }));

  return (
    <div className={classes.tableContainer}>
      <DataGridPro
        className={classes.songsTable}
        rows={rows}
        columns={columns}
        disableColumnMenu
        disableColumnResize
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
