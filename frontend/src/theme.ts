import { createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

export const rtlTheme = createTheme({
  direction: 'rtl',
});

export const cacheRtl = createCache({
  key: 'muirtl',
  prepend: true,
  stylisPlugins: [rtlPlugin],
});
