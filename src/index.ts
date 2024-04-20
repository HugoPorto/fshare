import { registerPlugin } from '@capacitor/core';

import type { fsharePlugin } from './definitions';

const fshare = registerPlugin<fsharePlugin>('fshare', {
  web: () => import('./web').then(m => new m.fshareWeb()),
});

export * from './definitions';
export { fshare };
