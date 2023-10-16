import { Song } from "./song";

export interface SongsContext {
    songs: Song[],
    setSongs?: React.Dispatch<React.SetStateAction<Song[]>>
};