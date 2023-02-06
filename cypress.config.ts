import { defineConfig } from "cypress";
import { getViteConfig } from "./plugins/get-vite-config";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: async () => {
        const config = await getViteConfig();
        return config;
      },
    },
  },
});
