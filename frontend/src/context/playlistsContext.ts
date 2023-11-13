import { createContext, Context } from 'react';

import { PlaylistsContext } from 'src/models/interfaces/playlistsContext';

export const playlistsContext: Context<PlaylistsContext> =
  createContext<PlaylistsContext>({
    playlists: [],
  });
