// astro.config.mjs
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Unbounded",
      cssVariable: "--font-unbounded",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Unbounded-Regular-subset.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Unbounded-Bold-subset.woff2"],
            weight: "700",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Hypsan",
      cssVariable: "--font-hypsan",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/hypsan.woff2"],
            weight: "400",
            style: "normal",
          },
        ],
      },
    },
  ],
});