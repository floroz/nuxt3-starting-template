import { defineConfig } from "cypress";
import { loadNuxt, buildNuxt } from "@nuxt/kit";

export async function getViteConfig() {
  const nuxt = await loadNuxt({ configFile: "./nuxt.config.ts" });
  console.log("loaded nuxt");

  return new Promise((resolve, reject) => {
    nuxt.hook("vite:extendConfig", (config) => {
      resolve(config);
      throw new Error("_stop_");
    });
    buildNuxt(nuxt).catch((err) => {
      if (!err.toString().includes("_stop_")) {
        reject(err);
      }
    });
  }).finally(() => nuxt.close());
}

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: async () => {
        console.log("viteconfig");
        const config = await getViteConfig();

        console.log(config);

        return {};
      },
    },
  },
});
