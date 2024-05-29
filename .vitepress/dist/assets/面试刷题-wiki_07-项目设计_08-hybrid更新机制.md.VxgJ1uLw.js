import{_ as a,c as i,o as e,a1 as r}from"./chunks/framework.BwTyoF0R.js";const t="/assets/hybrid1.Bpr-nJqu.png",d="/assets/hybrid2.CK-kxGPN.png",m=JSON.parse('{"title":"hybrid 更新机制","description":"","frontmatter":{},"headers":[],"relativePath":"面试刷题-wiki/07-项目设计/08-hybrid更新机制.md","filePath":"面试刷题-wiki/07-项目设计/08-hybrid更新机制.md"}'),h={name:"面试刷题-wiki/07-项目设计/08-hybrid更新机制.md"},o=r('<h1 id="hybrid-更新机制" tabindex="-1">hybrid 更新机制 <a class="header-anchor" href="#hybrid-更新机制" aria-label="Permalink to &quot;hybrid 更新机制&quot;">​</a></h1><h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-label="Permalink to &quot;题目&quot;">​</a></h2><p>请设计一个 hybrid 包的更新流程</p><h2 id="hybrid-运作流程" tabindex="-1">hybrid 运作流程 <a class="header-anchor" href="#hybrid-运作流程" aria-label="Permalink to &quot;hybrid 运作流程&quot;">​</a></h2><p><img src="'+t+'" alt=""></p><p>小提示：hybrid html 中 ajax 请求的 url 不能省略协议名称（如 <code>//xxx.com/api/getInfo</code>），否则会默认以 <code>file</code> 协议请求。必须明确协议名称 <code>http</code> 或者 <code>https</code>。</p><h2 id="上传新版本的-hybrid-包" tabindex="-1">上传新版本的 hybrid 包 <a class="header-anchor" href="#上传新版本的-hybrid-包" aria-label="Permalink to &quot;上传新版本的 hybrid 包&quot;">​</a></h2><p>hybrid 包是需要实时更新的，就跟 H5 网上上线一样。更新之后，App 要下载、使用最新版本的 hybrid 包。</p><p><img src="'+d+'" alt=""></p><p>何时触发检查、下载最新版本呢？有两种选择</p><ul><li>App 启动时检查、下载</li><li>实时检查、下载（如每隔 5min）</li></ul><h2 id="延迟使用" tabindex="-1">延迟使用 <a class="header-anchor" href="#延迟使用" aria-label="Permalink to &quot;延迟使用&quot;">​</a></h2><p>以上两种时机，都会遇到一个问题：如果检查到最新版本，立刻下载使用，可能会影响的性能。 为了避免这个影响，可以考虑“延迟使用”。</p><ul><li>检测到新版本，先后台下载，目前先使用旧版本</li><li>待现在完成，再替换为新版本使用</li></ul><h2 id="答案" tabindex="-1">答案 <a class="header-anchor" href="#答案" aria-label="Permalink to &quot;答案&quot;">​</a></h2><ul><li>hybrid 基本概念，和基本流程</li><li>最新包的延迟使用</li></ul>',16),l=[o];function s(c,n,p,b,_,u){return e(),i("div",null,l)}const f=a(h,[["render",s]]);export{m as __pageData,f as default};
