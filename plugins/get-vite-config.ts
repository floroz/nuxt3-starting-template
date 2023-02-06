import { loadNuxt, buildNuxt, LoadNuxtOptions } from "@nuxt/kit";
// https://github.com/nuxt/nuxt/issues/14534
export async function getViteConfig() {
  const options: LoadNuxtOptions = {
    cwd: process.cwd(),
    dev: false,
  };
  const nuxt = await loadNuxt(options);
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
