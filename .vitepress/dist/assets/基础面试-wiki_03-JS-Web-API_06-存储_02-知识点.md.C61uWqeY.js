import{_ as e,c as o,o as a,a1 as t}from"./chunks/framework.BwTyoF0R.js";const g=JSON.parse('{"title":"知识点","description":"","frontmatter":{},"headers":[],"relativePath":"基础面试-wiki/03-JS-Web-API/06-存储/02-知识点.md","filePath":"基础面试-wiki/03-JS-Web-API/06-存储/02-知识点.md"}'),c={name:"基础面试-wiki/03-JS-Web-API/06-存储/02-知识点.md"},i=t('<h1 id="知识点" tabindex="-1">知识点 <a class="header-anchor" href="#知识点" aria-label="Permalink to &quot;知识点&quot;">​</a></h1><h2 id="cookie" tabindex="-1">cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;cookie&quot;">​</a></h2><p>cookie 本身不是用来做服务器端存储的（计算机领域有很多这种“狗拿耗子”的例子，例如 css 中的 float），它设计是用来在服务器和客户端进行信息传递的，因此我们的每个 http 请求都带着 cookie。但是 cookie 也具备浏览器端存储的能力（例如记住用户名和密码），因此就被开发者用上了。</p><p>使用起来也非常简单<code>document.cookie = ....</code>即可。</p><p>但是 cookie 有它致命的缺点：</p><ul><li>存储量太小，只有 4KB</li><li>所有 http 请求都带着，会影响获取资源的效率</li><li>API 简单，需要封装才能用</li></ul><h2 id="locationstorage-和-sessionstorage" tabindex="-1">locationStorage 和 sessionStorage <a class="header-anchor" href="#locationstorage-和-sessionstorage" aria-label="Permalink to &quot;locationStorage 和 sessionStorage&quot;">​</a></h2><p>后来，HTML5标准就带来了<code>sessionStorage</code>和<code>localStorage</code>，先拿<code>localStorage</code>来说，它是专门为了浏览器端缓存而设计的。其优点有：</p><ul><li>存储量增大到 5M</li><li>不会带到 http 请求中</li><li>API 适用于数据存储 <code>localStorage.setItem(key, value)</code> <code>localStorage.getItem(key)</code></li></ul><p><code>sessionStorage</code>的区别就在于它是根据 session 过去时间而实现，而<code>localStorage</code>会永久有效，应用场景不懂。例如，一些重要信息需要及时失效的放在<code>sessionStorage</code>中，一些不重要但是不经常设置的信息，放在<code>localStorage</code></p><p>另外告诉大家一个小技巧，iOS系统的safari浏览器的隐藏模式，使用<code>localStorage.setItem</code>，因此使用时尽量加入到<code>try-catch</code>中</p>',11),s=[i];function l(r,d,n,_,p,h){return a(),o("div",null,s)}const k=e(c,[["render",l]]);export{g as __pageData,k as default};
