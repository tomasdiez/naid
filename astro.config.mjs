// @ts-check
import { defineConfig } from 'astro/config';
import Unocss from 'unocss/astro';

import icon from 'astro-icon';

import db from '@astrojs/db';
import node from '@astrojs/node';
import studiocms from 'studiocms';

import { defineStudioCMSConfig } from 'studiocms/config';
import html from '@studiocms/html';
import md from '@studiocms/md';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321/', 
  output: 'server',
  integrations: [Unocss({ injectReset: true, injectEntry: true }), icon(), db(), studiocms()],
  plugins: [
    html ,
    md ,
  ],

  adapter: node({
    mode: 'standalone'
  })
});
