import { defineConfig } from "vitepress";
// import { getSideBar } from "vitepress-plugin-autobar";
import AutoSidebar from "@iminu/vitepress-plugin-auto-sidebar";
import path from "path";

const sortFn = (arr) => {
  if (Array.isArray(arr)) {
    arr.sort((a, b) => a.text.substring(0, 2) - b.text.substring(0, 2));
    arr.forEach((item) => {
      if (item.items) {
        sortFn(item.items);
      }
    });
  }
};
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "fewiki",
  title: "前端wiki",
  description: "前端知识体系",
  srcDir: "./src",
  themeConfig: {
    // sidebar: getSideBar("./src", {
    //   ignoreMDFiles: ["index"],
    //   ignoreDirectory: ["node_modules"],
    // }),
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "基础面试-wiki", link: "/基础面试-wiki" },
      { text: "框架面试-wiki", link: "/框架面试-wiki" },
      { text: "面试刷题-wiki", link: "/面试刷题-wiki" },
      { text: "模拟面试-wiki", link: "/模拟面试-wiki" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  vite: {
    plugins: [
      AutoSidebar({
        // 忽略一些文件
        ignores: ["index.md"],
        sidebarResolved(value) {
          Object.keys(value).forEach((key) => sortFn(value[key]));
        },
        /**
         * 指定 .vitepress 目录，默认会通过 glob 匹配到，
         * 如果页面有多个 .vitepress 需要手动配置
         */
        root: path.resolve(process.cwd(), "src"),
      }),
    ],
  },
});
