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

export const CREATE_PLAYLIST = gql`
  mutation MyMutation($name: String!, $userId: UUID!) {
    createPlaylist(input: { playlist: { name: $name, userId: $userId } }) {
      playlist {
        name
        id
      }
    }
  }
`;

export const UPDATE_PLAYLIST = gql`
  mutation MyMutation($id: UUID!, $name: String!) {
    updatePlaylistById(input: { playlistPatch: { name: $name }, id: $id }) {
      playlist {
        id
        name
      }
    }
  }
`;

export const DELETE_SONG_FROM_PLAYLIST = gql`
  mutation MyMutation($playlistId: UUID!, $songId: UUID!) {
    deleteSongPlaylistBySongIdAndPlaylistId(
      input: { songId: $songId, playlistId: $playlistId }
    ) {
      songPlaylist {
        playlistId
        songId
      }
    }
  }
`;
