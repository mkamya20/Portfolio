import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// For https://<username>.github.io/ use base: "/"
// For https://<username>.github.io/Portfolio/ use base: "/Portfolio/"
export default defineConfig({
  site: "https://mkamya20.github.io",
  base: "/",
  integrations: [tailwind()],
  output: "static",
});
