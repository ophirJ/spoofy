import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Slider from '@mui/material/Slider';
import { useEffect, useState, useContext } from 'react';

import { DurationToString } from 'utils/DurationToString';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { songsContext } from 'context/songsContext';
import { setSong } from 'redux/playingSongSlice';
import useStyles from './playlineStyles';

const SONG_DURATION = 235;

const Playline: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [lastSong, setLastSong] = useState<boolean>(false);
  const [firstSong, setFirstSong] = useState<boolean>(false);
  const [songDuration, setSongDuration] = useState<number>(0);
  const playingSong = useAppSelector((state) => state.playingSong.song);
  const { songs } = useContext(songsContext);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setSongDuration((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  useEffect(() => {
    setSongDuration(0);
    const currentIndex = songs.indexOf(playingSong!);
    setLastSong(currentIndex === songs.length - 1);
    setFirstSong(currentIndex === 0);
  }, [playingSong]);

  useEffect(() => {
    if (songDuration === playingSong?.duration) {
      setSongDuration(0);
      skipForward();
    }
  }, [songDuration]);

  const skipForward = () => {
    const currentIndex = songs.indexOf(playingSong!);
    const nextSong = songs[currentIndex + 1];
    dispatch(setSong(nextSong));
  };

  const SkipPrevious = () => {
    const currentIndex = songs.indexOf(playingSong!);
    const previousSong = songs[currentIndex - 1];
    dispatch(setSong(previousSong));
  };

  return (
    <div className={classes.playline}>
      <div className={classes.SongAndIcons}>
        <div className={classes.songDetails}>
          <span className={classes.songName}>{playingSong?.name}</span>
          <span className={classes.artistName}>{playingSong?.artistName}</span>
        </div>
        <div className={classes.controlIcons}>
          <IconButton onClick={skipForward} disabled={lastSong}>
            <SkipNextIcon className={classes.icon} />
          </IconButton>
          <IconButton onClick={() => setIsPlaying((prev) => !prev)}>
            {isPlaying ? (
              <PauseIcon className={classes.icon} />
            ) : (
              <PlayArrowIcon className={classes.icon} />
            )}
          </IconButton>
          <IconButton onClick={SkipPrevious} disabled={firstSong}>
            <SkipPreviousIcon className={classes.icon} />
          </IconButton>
        </div>
      </div>
      <div className={classes.sliderAndTime}>
        <Slider
          max={SONG_DURATION}
          value={songDuration}
          className={classes.songSlider}
          size="small"
        />
        <div className={classes.songTime}>
          <span>{DurationToString(playingSong!.duration)}</span>
          <span>{DurationToString(songDuration)}</span>
        </div>
      </div>
    </div>
  );
};

export default Playline;
