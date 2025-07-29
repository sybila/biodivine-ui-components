import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      name: 'BiodivineUiComponents',
      fileName: (format) => `biodivine-ui-components.${format}.js`,
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});

