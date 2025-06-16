import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      name: 'MyLitLibrary',
      fileName: (format) => `my-lit-library.${format}.js`,
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});

