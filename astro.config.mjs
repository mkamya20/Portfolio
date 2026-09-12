import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Project site: https://mkamya20.github.io/Portfolio/
export default defineConfig({
  site: "https://mkamya20.github.io",
  base: "/Portfolio/",
  integrations: [tailwind()],
  output: "static",
});
