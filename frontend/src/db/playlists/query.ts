import { gql } from '@apollo/client';

export const GET_ALL_PLAYLISTS_BY_USER = gql`
  query MyQuery($userId: UUID!) {
    allPlaylists(condition: { userId: $userId }) {
      nodes {
        id
        name
        songPlaylistsByPlaylistId {
          nodes {
            songBySongId {
              duration
              id
              name
              artistByArtistId {
                name
              }
              favoritesBySongId {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;
