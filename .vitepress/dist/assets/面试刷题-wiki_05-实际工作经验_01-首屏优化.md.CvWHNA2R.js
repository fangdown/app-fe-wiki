import{_ as a,c as e,o as l,a1 as i}from"./chunks/framework.BwTyoF0R.js";const b=JSON.parse('{"title":"首屏优化","description":"","frontmatter":{},"headers":[],"relativePath":"面试刷题-wiki/05-实际工作经验/01-首屏优化.md","filePath":"面试刷题-wiki/05-实际工作经验/01-首屏优化.md"}'),t={name:"面试刷题-wiki/05-实际工作经验/01-首屏优化.md"},r=i('<h1 id="首屏优化" tabindex="-1">首屏优化 <a class="header-anchor" href="#首屏优化" aria-label="Permalink to &quot;首屏优化&quot;">​</a></h1><h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-label="Permalink to &quot;题目&quot;">​</a></h2><p>H5 如何进行首屏优化？尽量说全</p><h2 id="前端通用的优化策略" tabindex="-1">前端通用的优化策略 <a class="header-anchor" href="#前端通用的优化策略" aria-label="Permalink to &quot;前端通用的优化策略&quot;">​</a></h2><p>压缩资源，使用 CDN ，http 缓存等。本节只讨论首屏，这些先不讲。</p><h2 id="路由懒加载" tabindex="-1">路由懒加载 <a class="header-anchor" href="#路由懒加载" aria-label="Permalink to &quot;路由懒加载&quot;">​</a></h2><p>如果是 SPA ，优先保证首页加载。</p><h2 id="服务端渲染-ssr" tabindex="-1">服务端渲染 SSR <a class="header-anchor" href="#服务端渲染-ssr" aria-label="Permalink to &quot;服务端渲染 SSR&quot;">​</a></h2><p>传统的 SPA 方式过程繁多</p><ul><li>下载 html ，解析，渲染</li><li>下载 js ，执行</li><li>ajax 异步加载数据</li><li>重新渲染页面</li></ul><p>而 SSR 则只有一步</p><ul><li>下载 html ，接续，渲染</li></ul><p>如果是纯 H5 页面，SSR 就是首屏优化的终极方案。</p><p>技术方案：</p><ul><li>传统的服务端模板，如 ejs smarty jsp 等</li><li>Nuxt.js ( Vue 同构 )</li><li>Next.js ( React 同构 )</li></ul><h2 id="app-预取" tabindex="-1">App 预取 <a class="header-anchor" href="#app-预取" aria-label="Permalink to &quot;App 预取&quot;">​</a></h2><p>如果 H5 在 App webview 中展示，可以使用 App 预取资源</p><ul><li>在列表页，App 预取数据（一般是标题、首页文本，不包括图片、视频）</li><li>进入详情页，H5 直接即可渲染 App 预取的数据</li><li>可能会造成“浪费”：预期了，但用户未进入该详情页 —— 不过没关系，现在流量便宜</li></ul><p>例如，你在浏览朋友圈时，可以快速的打开某个公众号的文章。</p><p>这里可以联想到 <code>prefetch</code> ，不过它是预取 js css 等静态资源，并不是首屏的内容。 不要混淆。</p><h2 id="分页" tabindex="-1">分页 <a class="header-anchor" href="#分页" aria-label="Permalink to &quot;分页&quot;">​</a></h2><p>根据显示设备的高度，设计尽量少的页面内容。即，首评内容尽量少，其他内容上滑时加载。</p><h2 id="图片-lazyload" tabindex="-1">图片 lazyLoad <a class="header-anchor" href="#图片-lazyload" aria-label="Permalink to &quot;图片 lazyLoad&quot;">​</a></h2><p>先加载内容，再加载图片。<br> 注意，提前设置图片容器的尺寸，尽量重绘，不要重排。</p><h2 id="离线包-hybrid" tabindex="-1">离线包 hybrid <a class="header-anchor" href="#离线包-hybrid" aria-label="Permalink to &quot;离线包 hybrid&quot;">​</a></h2><p>提前将 html css js 等下载到 App 内。<br> 当在 App 内打开页面时，webview 使用 <code>file://</code> 协议加载本地的 html css js ，然后再 ajax 请求数据，再渲染。</p><p>可以结合 App 预取。</p><h2 id="答案" tabindex="-1">答案 <a class="header-anchor" href="#答案" aria-label="Permalink to &quot;答案&quot;">​</a></h2><ul><li>SSR</li><li>预取</li><li>分页</li><li>图片 lazyLoad</li><li>hybrid</li></ul><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><p>做完性能优化，还要进行统计、计算、评分，作为你的工作成果。</p><p>优化体验：如 骨架屏 loading</p>',32),o=[r];function h(p,s,d,n,c,u){return l(),e("div",null,o)}const m=a(t,[["render",h]]);export{b as __pageData,m as default};
