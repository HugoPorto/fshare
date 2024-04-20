import { WebPlugin } from '@capacitor/core';

import type { fsharePlugin } from './definitions';

export class fshareWeb extends WebPlugin implements fsharePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
