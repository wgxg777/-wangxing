import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [vue(), dts({ include: ['src'] })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'WangXingBusiness',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'index.es.js' : 'index.js'
    },
    rollupOptions: {
      // Do not bundle peer dependencies; expect consumer to provide them
      external: ['vue', 'element-plus']
    }
  }
});
