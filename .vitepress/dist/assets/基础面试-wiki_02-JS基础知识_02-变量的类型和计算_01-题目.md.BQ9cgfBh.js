import{_ as s,c as i,o as a,a1 as n}from"./chunks/framework.BwTyoF0R.js";const g=JSON.parse('{"title":"变量的类型和计算 - 题目","description":"","frontmatter":{},"headers":[],"relativePath":"基础面试-wiki/02-JS基础知识/02-变量的类型和计算/01-题目.md","filePath":"基础面试-wiki/02-JS基础知识/02-变量的类型和计算/01-题目.md"}'),t={name:"基础面试-wiki/02-JS基础知识/02-变量的类型和计算/01-题目.md"},l=n(`<h1 id="变量的类型和计算-题目" tabindex="-1">变量的类型和计算 - 题目 <a class="header-anchor" href="#变量的类型和计算-题目" aria-label="Permalink to &quot;变量的类型和计算 - 题目&quot;">​</a></h1><ul><li><code>typeof</code> 能判断哪些类型</li><li>何时使用 <code>==</code> 何时使用 <code>===</code></li><li>值类型和引用类型的区别</li><li>手写深拷贝</li></ul><p>值类型和引用类型的区别是场景题</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 值类型和引用类型的区别</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { x: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj1.x</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj2.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 101</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 102</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj1) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里打印出什么？</span></span></code></pre></div>`,4),h=[l];function e(p,k,d,r,o,c){return a(),i("div",null,h)}const y=s(t,[["render",e]]);export{g as __pageData,y as default};
