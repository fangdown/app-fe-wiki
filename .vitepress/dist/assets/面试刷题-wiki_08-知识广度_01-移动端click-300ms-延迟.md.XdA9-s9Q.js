import{_ as i,c as s,o as a,a1 as t}from"./chunks/framework.BwTyoF0R.js";const e="/assets/nytimes.72Y0q_7F.jpeg",u=JSON.parse('{"title":"移动端 click 300ms 延迟","description":"","frontmatter":{},"headers":[],"relativePath":"面试刷题-wiki/08-知识广度/01-移动端click-300ms-延迟.md","filePath":"面试刷题-wiki/08-知识广度/01-移动端click-300ms-延迟.md"}'),l={name:"面试刷题-wiki/08-知识广度/01-移动端click-300ms-延迟.md"},h=t('<h1 id="移动端-click-300ms-延迟" tabindex="-1">移动端 click 300ms 延迟 <a class="header-anchor" href="#移动端-click-300ms-延迟" aria-label="Permalink to &quot;移动端 click 300ms 延迟&quot;">​</a></h1><h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-label="Permalink to &quot;题目&quot;">​</a></h2><p>移动端 click 300ms 延迟，如何解决</p><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>智能手机开始流行的前期，浏览器可以点击缩放（double tap to zoom）网页。这样在手机上就可以浏览 PC 网页，很酷炫。</p><p><img src="'+e+`" alt=""></p><p>浏览器为了分辨 click 还是“点击缩放”，就强行把 click 时间延迟 300ms 触发。</p><h2 id="初期解决方案" tabindex="-1">初期解决方案 <a class="header-anchor" href="#初期解决方案" aria-label="Permalink to &quot;初期解决方案&quot;">​</a></h2><p><a href="https://www.npmjs.com/package/fastclick" target="_blank" rel="noreferrer">FastClick</a> 专门用于解决这个问题。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// FastClick 使用非常简单</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;load&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    FastClick.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( document.body )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> )</span></span></code></pre></div><p>它的内部原理是</p><ul><li>监听 <code>touchend</code> 事件 （<code>touchstart</code> <code>touchend</code> 会先于 <code>click</code> 事件被触发）</li><li>通过 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent" target="_blank" rel="noreferrer">DOM 自定义事件</a> 模拟一个 click 事件</li><li>把 300ms 之后触发的 click 事件阻止掉</li></ul><h2 id="现代浏览器的改进" tabindex="-1">现代浏览器的改进 <a class="header-anchor" href="#现代浏览器的改进" aria-label="Permalink to &quot;现代浏览器的改进&quot;">​</a></h2><p>随着近几年移动端响应式的大力发展，移动端网页和 PC 网页有不同的设计，不用再缩放查看。<br> 这 300ms 的延迟就多余了，现代浏览器可以通过禁止缩放来取消这 300ms 的延迟。</p><ul><li>Chrome 32+ on Android</li><li>iOS 9.3</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="答案" tabindex="-1">答案 <a class="header-anchor" href="#答案" aria-label="Permalink to &quot;答案&quot;">​</a></h2><ul><li>原因：点击缩放（double tap to zoom）网页</li><li>可使用 FastClick 解决</li><li>现代浏览器可使用 <code>width=device-width</code> 规避</li></ul>`,18),n=[h];function c(k,o,p,d,r,E){return a(),s("div",null,n)}const g=i(l,[["render",c]]);export{u as __pageData,g as default};
