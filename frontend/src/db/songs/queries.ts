import { gql } from '@apollo/client'

export const GET_ALL_SONGS = gql`
query MyQuery($userId: UUID!) {
  allSongs {
    nodes {
      id
      name
      duration
      artistByArtistId {
        name
        id
      }
      favoritesBySongId(condition: {userId: $userId}) {
        totalCount
      }
    }
  }
}
`

export const GET_FAVORITES_ID_BY_USER = gql`
query MyQuery($userId: UUID) {
    allFavorites(condition: {userId: $userId}) {
      nodes {
        songBySongId {
          id
        }
      }
    }
  }
`