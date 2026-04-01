/// <reference types="vitest/config" />
import { svelte as svelteVitePlugin } from "@sveltejs/vite-plugin-svelte"
import { defineConfig } from "vite-plus"
import { sveltePreprocess } from 'svelte-preprocess'
import { svelteDtsPlugin } from './scripts/tsdown-plugin-svelte-dts.js'
import svelte from "rollup-plugin-svelte";

export default defineConfig({
  staged: {
    "*": "vp check --fix"
  },
  pack: {
    dts: true,
    platform: "neutral",
    exports: true,
    plugins: [
      svelte({ preprocess: sveltePreprocess() }),
      svelteDtsPlugin({
        declarationDir: "./dist",
        libRoot: "./src",
        tsconfig: "tsconfig.json",
      }),
    ],
  },
  fmt: {},
  lint: {"options":{"typeAware":true,"typeCheck":true}},
  root: "./playground",
  plugins: [svelteVitePlugin()],
  
})
