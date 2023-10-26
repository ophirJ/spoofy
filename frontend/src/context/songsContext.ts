import { createContext, Context } from 'react';

import { SongsContext } from '../models/interfaces/songsContext';

export const songsContext: Context<SongsContext> = createContext<SongsContext>({
  songs: [],
});
