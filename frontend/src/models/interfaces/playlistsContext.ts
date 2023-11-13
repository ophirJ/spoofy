import { Playlist } from './playlist';

export interface PlaylistsContext {
  playlists: Playlist[];
  setPlaylists?: React.Dispatch<React.SetStateAction<Playlist[]>>;
}
