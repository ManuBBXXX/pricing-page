import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind({
    applyBaseStyles: true
  })
  // vercel({webAnalytics: {
  //   token: 'YOUR_WEBANALYTICS_TOKEN',
  // }})
  , react()],
  output: 'static'
});