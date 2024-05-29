import{_ as a,c as l,o as i,a1 as e}from"./chunks/framework.BwTyoF0R.js";const t="/assets/RBAC1.zdJrfekH.png",r="/assets/RBAC2.C84eLC-I.png",f=JSON.parse('{"title":"权限管理","description":"","frontmatter":{},"headers":[],"relativePath":"面试刷题-wiki/07-项目设计/07-角色权限模型.md","filePath":"面试刷题-wiki/07-项目设计/07-角色权限模型.md"}'),o={name:"面试刷题-wiki/07-项目设计/07-角色权限模型.md"},s=e('<h1 id="权限管理" tabindex="-1">权限管理 <a class="header-anchor" href="#权限管理" aria-label="Permalink to &quot;权限管理&quot;">​</a></h1><h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-label="Permalink to &quot;题目&quot;">​</a></h2><p>如何设计一个基础的 用户-角色-权限 模型？<br> 例如，一个博客管理后台，可以添加很多用户，分配不同的角色，不同角色具有不同权限</p><ul><li>普通用户：查看博客，审核通过博客，下架博客</li><li>管理员：修改博客，删除博客 + 普通用户的权限</li><li>超级管理员：添加用户，删除用户，绑定用户和角色 + 管理员的权限</li></ul><h2 id="分析" tabindex="-1">分析 <a class="header-anchor" href="#分析" aria-label="Permalink to &quot;分析&quot;">​</a></h2><p>很多公司招聘前端工程师来开发、维护后台管理系统，toB 的系统。角色权限管理是最基本的模块。<br> 要想成为项目技术负责人，必须要熟知这部分内容的设计。</p><h2 id="rbac-模型" tabindex="-1">RBAC 模型 <a class="header-anchor" href="#rbac-模型" aria-label="Permalink to &quot;RBAC 模型&quot;">​</a></h2><p>RBAC - Role-based access control 基于角色的访问控制。它可以满足我们绝大部分管理系统的管理权限控制。</p><ul><li>三个模型 <ul><li>用户</li><li>角色</li><li>权限</li></ul></li><li>两个关系（以角色为“轴”） <ul><li>角色 - 用户</li><li>角色 - 权限</li></ul></li></ul><p><img src="'+t+'" alt=""></p><h2 id="举例" tabindex="-1">举例 <a class="header-anchor" href="#举例" aria-label="Permalink to &quot;举例&quot;">​</a></h2><p><img src="'+r+'" alt=""></p><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><p>用户管理</p><ul><li>增删改查</li><li>绑定角色</li></ul><p>角色管理</p><ul><li>增删改查</li><li>绑定权限</li></ul><p>权限管理</p><ul><li>增删改查</li></ul><h2 id="答案" tabindex="-1">答案 <a class="header-anchor" href="#答案" aria-label="Permalink to &quot;答案&quot;">​</a></h2><p>RBAC 模型</p><ul><li>数据结构</li><li>功能</li></ul><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><p>我刚毕业时，开发一个企业项目管理系统，里面会加很多大家临时想出来的功能。后来我考了 PMP ，才发现很多事情都是已经有了既定解决方案的，不需要自己创新。</p>',24),n=[s];function h(c,d,_,u,p,b){return i(),l("div",null,n)}const q=a(o,[["render",h]]);export{f as __pageData,q as default};
