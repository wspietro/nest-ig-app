import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'], // pegar apenas testes com a extensão e2e
    globals: true,
    root: './',
    setupFiles: ['./test/setup-e2e.ts'], // executado antes de cada teste e2e
  },
  plugins: [
    tsConfigPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})
