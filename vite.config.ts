import tsdownConfig from './tsdown.config.js';

/// <reference types="vitest/config" />
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { playwright } from 'vite-plus/test/browser-playwright'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: {
    "*": "vp check --fix"
  },
  pack: tsdownConfig,
  fmt: {},
  lint: {"options":{"typeAware":true,"typeCheck":true}},
  root: './playground',
  plugins: [svelte()],
  test: {
    root: '.',
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      headless: true,
    },
  },
})
