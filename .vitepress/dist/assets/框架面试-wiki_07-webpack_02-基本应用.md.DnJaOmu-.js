import{_ as e,c as l,o as a,a1 as i}from"./chunks/framework.BwTyoF0R.js";const m=JSON.parse('{"title":"webpack 基本应用","description":"","frontmatter":{},"headers":[],"relativePath":"框架面试-wiki/07-webpack/02-基本应用.md","filePath":"框架面试-wiki/07-webpack/02-基本应用.md"}'),o={name:"框架面试-wiki/07-webpack/02-基本应用.md"},d=i('<h1 id="webpack-基本应用" tabindex="-1">webpack 基本应用 <a class="header-anchor" href="#webpack-基本应用" aria-label="Permalink to &quot;webpack 基本应用&quot;">​</a></h1><p>【注意】只过一遍知识点，不再详细代码演示了。</p><h2 id="安装和配置-——-拆分-dev-prod-配置-然后-merge" tabindex="-1">安装和配置 —— 拆分 dev prod 配置，然后 merge <a class="header-anchor" href="#安装和配置-——-拆分-dev-prod-配置-然后-merge" aria-label="Permalink to &quot;安装和配置 —— 拆分 dev prod 配置，然后 merge&quot;">​</a></h2><ul><li><p>安装 nodejs</p></li><li><p>初始化 <code>npm init -y</code></p></li><li><p>安装插件 <code>npm i webpack webpack-cli webpack-merge --save-dev</code></p></li><li><p>新建 <code>src</code> 及其测试 js 代码（包含 ES6 模块化）</p></li><li><p>创建配置文件</p></li><li><p>增加 <code>scripts</code> ，运行</p></li><li><p>安装 <code>npm i clean-webpack-plugin --save-dev</code></p></li><li><p>配置 prod</p></li></ul><h2 id="本地服务和代理" tabindex="-1">本地服务和代理 <a class="header-anchor" href="#本地服务和代理" aria-label="Permalink to &quot;本地服务和代理&quot;">​</a></h2><ul><li>新建 <code>index.html</code></li><li>安装 <code>npm i html-webpack-plugin --save-dev</code> ，并配置</li><li>安装 <code>npm i webpack-dev-server --save-dev</code> ，并配置</li><li>修改 <code>scripts</code> 的 <code>dev</code> ，运行</li></ul><h2 id="处理-es6" tabindex="-1">处理 ES6 <a class="header-anchor" href="#处理-es6" aria-label="Permalink to &quot;处理 ES6&quot;">​</a></h2><p>先引入简单的 babel ，polyfill 以后会单独讲</p><ul><li>安装 <code>npm i @babel/core @babel/preset-env babel-loader --save-dev</code></li><li>配置 webpack module</li><li>配置 <code>.babelrc</code></li><li>运行 dev</li></ul><h2 id="处理样式" tabindex="-1">处理样式 <a class="header-anchor" href="#处理样式" aria-label="Permalink to &quot;处理样式&quot;">​</a></h2><p>基本使用</p><ul><li>安装 <code>npm i style-loader css-loader less-loader less --save-dev</code> （注意要安装 less）</li><li>配置 webpack module</li><li>新建 css less 文件，引入 index.js</li><li>运行 dev</li></ul><p>postcss</p><ul><li>安装 <code>npm i postcss-loader autoprefixer -D</code></li><li>新建 <code>postcss.config.js</code></li><li>配置 webpack module ，增加 <code>postcss-loader</code></li><li>增加 css <code>transform: rotate(-45deg);</code></li><li>运行 dev</li></ul><h2 id="处理图片" tabindex="-1">处理图片 <a class="header-anchor" href="#处理图片" aria-label="Permalink to &quot;处理图片&quot;">​</a></h2><p>考虑 base64 格式</p><ul><li>安装 <code>npm i file-loader url-loader --save-dev</code></li><li>分别配置 webpack.dev 和 webpack.prod</li><li>新建图片文件，并引入到 js 中，插入页面</li><li>运行 dev</li><li>运行 build</li></ul>',17),c=[d];function s(p,r,t,n,b,h){return a(),l("div",null,c)}const _=e(o,[["render",s]]);export{m as __pageData,_ as default};
