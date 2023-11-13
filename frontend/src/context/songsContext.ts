import { createContext, Context } from 'react';

import { SongsContext } from 'src/models/interfaces/songsContext';

export const songsContext: Context<SongsContext> = createContext<SongsContext>({
  songs: [],
});
