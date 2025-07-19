import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'], // ✅ tells Vitest where to look
    globals: true,
    environment: 'jsdom', // important for DOM testing
  },
})