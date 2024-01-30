// uno.config.ts
import { defineConfig, presetWind, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons(),
    presetAttributify(),
  ],
})