// vite.config.js
import svgr from "vite-plugin-svgr";

export default{
  root: 'src',
  build: {
    outDir: '../public',
    plugins: [svgr()],
  },
};
