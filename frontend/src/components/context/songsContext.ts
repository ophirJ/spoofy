import { createContext, Context } from 'react'

import { SongsContext } from '../../types/songsContext';

export const songsContext: Context<SongsContext> = createContext<SongsContext>({songs: []});