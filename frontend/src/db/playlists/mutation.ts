import { gql } from '@apollo/client';

export const ADD_SONG_TO_PLAYLIST = gql`
  mutation MyMutation($playlistId: UUID!, $songId: UUID!) {
    createSongPlaylist(
      input: { songPlaylist: { songId: $songId, playlistId: $playlistId } }
    ) {
      songPlaylist {
        playlistId
        songId
      }
    }
  }
`;
