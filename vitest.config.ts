import { defineConfig, mergeConfig, UserConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(
  viteConfig as UserConfig,
  defineConfig({
    test: {
      include: [
        '**/__tests__/**/*.test.[tj]sx',
        '**/__tests__/**/*.test.[tj]s',
      ],
      exclude: ['**/node_modules/**', '**/dist/**'],
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['./setupTests.ts'],
    },
  })
)
