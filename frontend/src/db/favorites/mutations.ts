import { gql } from '@apollo/client'

export const ADD_FAVORITE = gql`
mutation MyMutation($songId: UUID!, $userId: UUID!) {
    createFavorite(input: {favorite: {userId: $userId, songId: $songId}}) {
      favorite {
        songId
        userId
      }
    }
  }
`

export const DELETE_FAVORITE = gql`
mutation MyMutation($songId: UUID!, $userId: UUID!) {
    deleteFavoriteByUserIdAndSongId(input: {userId: $userId, songId: $songId}) {
      favorite {
        songId
        userId
      }
    }
}
`