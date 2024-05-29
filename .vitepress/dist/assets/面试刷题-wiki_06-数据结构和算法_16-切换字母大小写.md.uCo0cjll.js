import{_ as a,c as e,o as t,a1 as i}from"./chunks/framework.BwTyoF0R.js";const m=JSON.parse('{"title":"切换字母大小写","description":"","frontmatter":{},"headers":[],"relativePath":"面试刷题-wiki/06-数据结构和算法/16-切换字母大小写.md","filePath":"面试刷题-wiki/06-数据结构和算法/16-切换字母大小写.md"}'),o={name:"面试刷题-wiki/06-数据结构和算法/16-切换字母大小写.md"},l=i('<h1 id="切换字母大小写" tabindex="-1">切换字母大小写 <a class="header-anchor" href="#切换字母大小写" aria-label="Permalink to &quot;切换字母大小写&quot;">​</a></h1><h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-label="Permalink to &quot;题目&quot;">​</a></h2><p>切换字母大小写，输入 <code>&#39;aBc&#39;</code> 输出 <code>&#39;AbC&#39;</code></p><h2 id="分析" tabindex="-1">分析 <a class="header-anchor" href="#分析" aria-label="Permalink to &quot;分析&quot;">​</a></h2><p>需要判断字母是大写还是小写</p><ul><li>正则表达式</li><li><code>charCodeAt</code> 获取 ASCII 码（ASCII 码表，可以网上搜索）</li></ul><p>性能分析</p><ul><li>正则表达式性能较差</li><li>ASCII 码性能较好</li></ul><h2 id="答案" tabindex="-1">答案 <a class="header-anchor" href="#答案" aria-label="Permalink to &quot;答案&quot;">​</a></h2><p>使用 <code>charCodeAt</code> ，参考代码 switch-case.ts</p><h2 id="划重点" tabindex="-1">划重点 <a class="header-anchor" href="#划重点" aria-label="Permalink to &quot;划重点&quot;">​</a></h2><ul><li>慎用正则表达式</li><li>ASCII 码</li></ul>',12),r=[l];function c(d,_,h,s,n,u){return t(),e("div",null,r)}const f=a(o,[["render",c]]);export{m as __pageData,f as default};
