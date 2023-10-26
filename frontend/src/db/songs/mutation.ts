import { gql } from '@apollo/client';

export const CREATE_SONG = gql`
  mutation MyMutation($duration: Int!, $name: String!, $artistId: UUID!) {
    createSong(
      input: { song: { duration: $duration, name: $name, artistId: $artistId } }
    ) {
      song {
        id
        name
        duration
        artistId
      }
    }
  }
`;
