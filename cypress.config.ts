import { loadNuxt, buildNuxt } from "@nuxt/kit";
import { defineConfig } from "cypress";

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
        const config = await getViteConfig();
        console.log("log:loaded viteconfig");
        return {
          ...config,
          server: {
            middlewareMode: false,
          },
        };
      },
    },
  },
});

async function getViteConfig() {
  const nuxt = await loadNuxt({ dev: false, cwd: process.cwd() });
  console.log("log:loaded nuxt instance");

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
  }).finally(() => {
    nuxt.close();
  });
}
