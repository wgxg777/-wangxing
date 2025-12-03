// vite.config.ts
import { defineConfig } from "file:///D:/code/%E7%8E%8B%E5%85%B4%E7%BB%84%E4%BB%B6%E5%BA%93/node_modules/.pnpm/vite@5.4.21/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/code/%E7%8E%8B%E5%85%B4%E7%BB%84%E4%BB%B6%E5%BA%93/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vi_eb5fa99d0c6bdbd289970eebe9f7a2b1/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///D:/code/%E7%8E%8B%E5%85%B4%E7%BB%84%E4%BB%B6%E5%BA%93/node_modules/.pnpm/vite-plugin-dts@3.9.1_rollu_b29faed312d8e2813f9dbe17d2db8a72/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [vue(), dts({ include: ["src"] })],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "WangXingBusiness",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // Do not bundle peer dependencies; expect consumer to provide them
      external: ["vue", "element-plus"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXFx1NzM4Qlx1NTE3NFx1N0VDNFx1NEVGNlx1NUU5M1xcXFxwYWNrYWdlc1xcXFxidXNpbmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxcdTczOEJcdTUxNzRcdTdFQzRcdTRFRjZcdTVFOTNcXFxccGFja2FnZXNcXFxcYnVzaW5lc3NcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvJUU3JThFJThCJUU1JTg1JUI0JUU3JUJCJTg0JUU0JUJCJUI2JUU1JUJBJTkzL3BhY2thZ2VzL2J1c2luZXNzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbdnVlKCksIGR0cyh7IGluY2x1ZGU6IFsnc3JjJ10gfSldLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6ICdzcmMvaW5kZXgudHMnLFxyXG4gICAgICBuYW1lOiAnV2FuZ1hpbmdCdXNpbmVzcycsXHJcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJ11cclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIC8vIERvIG5vdCBidW5kbGUgcGVlciBkZXBlbmRlbmNpZXM7IGV4cGVjdCBjb25zdW1lciB0byBwcm92aWRlIHRoZW1cclxuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgJ2VsZW1lbnQtcGx1cyddXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVSxTQUFTLG9CQUFvQjtBQUM5VixPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBRWhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDMUMsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3ZCO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxPQUFPLGNBQWM7QUFBQSxJQUNsQztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
