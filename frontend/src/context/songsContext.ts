import { createContext, Context } from 'react';

import { SongsContext } from 'modules/interfaces/songsContext';

export const songsContext: Context<SongsContext> = createContext<SongsContext>({
  songs: [],
});
