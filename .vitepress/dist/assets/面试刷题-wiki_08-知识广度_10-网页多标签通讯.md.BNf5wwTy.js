import{_ as s,c as i,o as a,a1 as e}from"./chunks/framework.BwTyoF0R.js";const c=JSON.parse('{"title":"网页多标签页之间的通讯","description":"","frontmatter":{},"headers":[],"relativePath":"面试刷题-wiki/08-知识广度/10-网页多标签通讯.md","filePath":"面试刷题-wiki/08-知识广度/10-网页多标签通讯.md"}'),n={name:"面试刷题-wiki/08-知识广度/10-网页多标签通讯.md"},t=e(`<h1 id="网页多标签页之间的通讯" tabindex="-1">网页多标签页之间的通讯 <a class="header-anchor" href="#网页多标签页之间的通讯" aria-label="Permalink to &quot;网页多标签页之间的通讯&quot;">​</a></h1><h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-label="Permalink to &quot;题目&quot;">​</a></h2><p>网络多标签之间如何通讯？<br> 例如打开两个 chrome 标签，一个访问列表页，一个访问详情页。在详情页修改了标题，列表页也要同步过来。</p><h2 id="websocket" tabindex="-1">webSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;webSocket&quot;">​</a></h2><p>通过 webSocket 多页面通讯，无跨域限制。</p><h2 id="localstorage" tabindex="-1">localStorage <a class="header-anchor" href="#localstorage" aria-label="Permalink to &quot;localStorage&quot;">​</a></h2><p>同域的两个页面，可以通过 localStorage 通讯。A 页面可以监听到 B 页面的数据变化。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// list 页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;storage&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, event.key)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;newValue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, event.newValue)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// detail 页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;changeInfo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xxx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="sharedworker" tabindex="-1">SharedWorker <a class="header-anchor" href="#sharedworker" aria-label="Permalink to &quot;SharedWorker&quot;">​</a></h2><p>Javascript 是单线程的，而且和页面渲染线程互斥。所以，一些计算量大的操作会影响页面渲染。<br></p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers" target="_blank" rel="noreferrer">WebWorker</a> 可以 <code>new Worker(&#39;xxx.js&#39;)</code> 用来进行 JS 计算，并通过 <code>postMessage</code> 和 <code>onmessage</code> 和网页通讯。<br> 但这个 worker 是当前页面专有的，不得多个页面、iframe 共享。</p><p>PS：WebWorker 专用于 JS 计算，不支持 DOM 操作。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/SharedWorker" target="_blank" rel="noreferrer">SharedWorker</a> 可以被同域的多个页面共享使用，也可以用于通讯。<br> 源码参考 msg-sharedWork-list.html 和 msg-sharedWork-detail.html 。注意，worker 中的日志需要 <code>chrome://inspect</code> 中打开控制台查看。</p><p>PS：注意浏览器兼容性，不支持 IE11</p><h2 id="答案" tabindex="-1">答案 <a class="header-anchor" href="#答案" aria-label="Permalink to &quot;答案&quot;">​</a></h2><ul><li>webSocket 需要服务端参与，但不限制跨域</li><li>localStorage 简单易用</li><li>SharedWorker 本地调试不太方便，考虑浏览器兼容性</li></ul><h2 id="连环问-iframe-通讯" tabindex="-1">连环问：iframe 通讯 <a class="header-anchor" href="#连环问-iframe-通讯" aria-label="Permalink to &quot;连环问：iframe 通讯&quot;">​</a></h2><p>除了上述几个方法，iframe 通讯最常用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage" target="_blank" rel="noreferrer">window.postMessage</a> ，支持跨域。</p><p>通过 <code>window.postMessage</code> 发送消息。注意第二个参数，可以限制域名，如发送敏感信息，要限制域名。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 父页面向 iframe 发送消息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.iframe1.contentWindow.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// iframe 向父页面发送消息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.parent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>可监听 <code>message</code> 来接收消息。可使用 <code>event.origin</code> 来判断信息来源是否合法，可选择不接受。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;origin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, event.origin) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 通过 origin 判断是否来源合法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;child received&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, event.data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,22),l=[t];function h(k,p,r,o,d,E){return a(),i("div",null,l)}const y=s(n,[["render",h]]);export{c as __pageData,y as default};
