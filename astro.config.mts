import { defineConfig } from 'astro/config';
import unocss from "@unocss/astro";
import type { AttributifyAttributes } from 'unocss/preset-attributify'

export default defineConfig({
  integrations: [
    unocss({
        injectReset: true,
    }),
  ],
  site: 'https://tabarnouche.github.io',
  base: '/JankenResults',
});

declare global {
  namespace astroHTML.JSX {
    interface HTMLAttributes extends AttributifyAttributes { }
  }
}