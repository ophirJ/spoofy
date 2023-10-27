import { createContext, Context } from 'react';

import { PlaylistsContext } from 'modules/interfaces/playlistsContext';

export const playlistsContext: Context<PlaylistsContext> =
  createContext<PlaylistsContext>({
    playlists: [],
  });
