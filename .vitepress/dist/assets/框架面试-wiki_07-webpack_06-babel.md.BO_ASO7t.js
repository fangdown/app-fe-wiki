import{_ as i,c as s,o as l,a1 as a}from"./chunks/framework.BwTyoF0R.js";const u=JSON.parse('{"title":"babel","description":"","frontmatter":{},"headers":[],"relativePath":"框架面试-wiki/07-webpack/06-babel.md","filePath":"框架面试-wiki/07-webpack/06-babel.md"}'),e={name:"框架面试-wiki/07-webpack/06-babel.md"},n=a(`<h1 id="babel" tabindex="-1">babel <a class="header-anchor" href="#babel" aria-label="Permalink to &quot;babel&quot;">​</a></h1><p>本节主要解决以下问题，相信很多同学都很懵</p><ul><li>babel-polyfill —— <strong>7.4 之后弃用，推荐直接使用 corejs 和 regenerator ？？</strong></li><li>babel-runtime</li></ul><h2 id="初始化环境" tabindex="-1">初始化环境 <a class="header-anchor" href="#初始化环境" aria-label="Permalink to &quot;初始化环境&quot;">​</a></h2><ul><li>安装 babel 插件 <code>npm i @babel/cli @babel/core @babel/preset-env -D</code></li><li>新建 <code>.babelrc</code>，配置 preset-env</li><li>新建 <code>src/index.js</code> ，写一个箭头函数</li><li>运行 <code>npx babel src/index.js</code> ，看结果</li></ul><h2 id="使用-polyfill" tabindex="-1">使用 polyfill <a class="header-anchor" href="#使用-polyfill" aria-label="Permalink to &quot;使用 polyfill&quot;">​</a></h2><p>什么是 babel-polyfill</p><ul><li>什么是 polyfill ？—— 即一个补丁，引入以兼容新 API（注意<strong>不是新语法</strong>，如箭头函数），如搜索“Object.keys polyfill” 和 “Promise polyfill”</li><li>core-js 集合了所有新 API 的 polyfill 。<a href="https://github.com/zloirock/core-js" target="_blank" rel="noreferrer">https://github.com/zloirock/core-js</a></li><li>regenerator 是 generator 的 polyfill 。 <a href="https://github.com/facebook/regenerator" target="_blank" rel="noreferrer">https://github.com/facebook/regenerator</a></li><li>babel-polyfill 即 core-js 和 regenerator 的集合，它只做了一层封装而已。</li></ul><p>基本使用</p><ul><li><code>src/index.js</code> 中写一个 Promise，打包看结果</li><li><code>npm install --save @babel/polyfill</code> 【注意】要 <code>--save</code></li><li>然后引入 <code>import &#39;@babel/polyfill&#39;</code></li><li>再打包，看结果 <ul><li>解释：babel 仅仅是处理 ES6 语法，并不关心模模块化的事情。模块化归 webpack 管理</li><li>全部引入 polyfill ，体积很大</li></ul></li></ul><p>按需加载</p><ul><li>新增 <code>&quot;useBuiltIns&quot;: &quot;usage&quot;</code> （注意要改写 preset 的 json 结构）</li><li>删掉入口的 <code>import &#39;@babel/polyfill&#39;</code></li><li>再打包，看结果 <ul><li>提示选择 core-js 的版本，增加 <code>&quot;corejs&quot;: 3</code></li><li>只引入了 promise 的 polyfill</li></ul></li></ul><h2 id="使用-runtime" tabindex="-1">使用 runtime <a class="header-anchor" href="#使用-runtime" aria-label="Permalink to &quot;使用 runtime&quot;">​</a></h2><p>babel-polyfill 的问题 —— 会污染全局变量</p><ul><li>如果是一个网站或者系统，无碍</li><li>如果是做一个第三方工具，给其他系统使用，则会有问题</li><li>不能保证其他系统会用 Promise 和 includes 做什么，即便他们用错了，那你也不能偷偷的给更改了</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 源代码</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 结果 —— 可以看到，Promise 和 includes 都未改动，因为以注入全局变量了</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;use strict&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;core-js/modules/es.array.includes.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;core-js/modules/es.object.to-string.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;core-js/modules/es.promise.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>使用 babel-runtime</p><ul><li><code>npm install --save-dev @babel/plugin-transform-runtime</code></li><li><code>npm install --save @babel/runtime</code>，注意是 <code>--save</code></li><li>配置 <code>&quot;plugins&quot;: [&quot;@babel/plugin-transform-runtime&quot;]</code><ul><li>其中 <code>&quot;corejs&quot;: 3,</code> v3 支持 API 如数组 includes ，v2.x 不支持</li></ul></li><li>删掉 <code>&quot;useBuiltIns&quot;: &quot;usage&quot;</code></li><li>运行代码</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>babel-polyfill 是什么，core-js 是什么</li><li>babel-polyfill 按需加载的配置</li><li>babel-polyfill 和 babel-runtime 的不同应用场景</li></ul>`,20),t=[n];function h(p,k,r,o,d,E){return l(),s("div",null,t)}const g=i(e,[["render",h]]);export{u as __pageData,g as default};
