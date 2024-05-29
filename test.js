const arr = [
  { text: "wiki", link: "/基础面试-wiki/index.md" },
  { text: "wiki", link: "/基础面试-wiki/README.md" },
  { text: "x2-学习过程", collapsed: false, items: [Array] },
  { text: "x1-教学互动", collapsed: false, items: [Array] },
  { text: "12-升级-http面试题", collapsed: false, items: [Array] },
  { text: "11-升级-CSS面试题", collapsed: false, items: [Array] },
  { text: "10-升级-面试准备", collapsed: false, items: [Array] },
  { text: "09-升级-JS异步进阶", collapsed: false, items: [Array] },
  { text: "08-面试题讲解", collapsed: false, items: [Array] },
  { text: "07-其他", collapsed: false, items: [Array] },
  { text: "06-运行环境", collapsed: false, items: [Array] },
  { text: "04-开发环境", collapsed: false, items: [Array] },
  { text: "03-JS-Web-API", collapsed: false, items: [Array] },
  { text: "02-JS基础知识", collapsed: false, items: [Array] },
  { text: "01-从题目到基础知识", collapsed: false, items: [Array] },
  { text: "00-前言", collapsed: false, items: [Array] },
];
arr.sort((a, b) => a.text.substring(0, 2) - b.text.substring(0, 2));
console.log(arr);
