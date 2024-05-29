import{_ as a,c as e,o as l,a1 as i}from"./chunks/framework.BwTyoF0R.js";const S=JSON.parse('{"title":"技术选型","description":"","frontmatter":{},"headers":[],"relativePath":"面试刷题-wiki/07-项目设计/10-技术选型.md","filePath":"面试刷题-wiki/07-项目设计/10-技术选型.md"}'),t={name:"面试刷题-wiki/07-项目设计/10-技术选型.md"},o=i('<h1 id="技术选型" tabindex="-1">技术选型 <a class="header-anchor" href="#技术选型" aria-label="Permalink to &quot;技术选型&quot;">​</a></h1><h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-label="Permalink to &quot;题目&quot;">​</a></h2><p>如何做技术选型？</p><h2 id="选什么" tabindex="-1">选什么 <a class="header-anchor" href="#选什么" aria-label="Permalink to &quot;选什么&quot;">​</a></h2><p>制定项目技术方案，技术选型是非常重要的一个环节。</p><ul><li>框架</li><li>JS vs TS</li></ul><h2 id="误区" tabindex="-1">误区 <a class="header-anchor" href="#误区" aria-label="Permalink to &quot;误区&quot;">​</a></h2><blockquote><p>技术没有好坏之分，要看是否适合自己和团队成员</p></blockquote><p>不要用自己的意识形态来评价技术的好坏，例如</p><ul><li>React 就是比 Vue 好，用 Vue 的都是 JS 小白</li><li>Svelte 是新出的框架，我们要提前拥抱未来</li><li>Vue3 发布了，我们赶紧用，体验新技术</li><li>TS 比 JS 好，大家都说好</li></ul><p>以上这些想法都是不对的，不能因此而做技术选型。<br> 我很清晰的记得，去年有一个同事，在没有评审的情况下，私自用 Svelte 搭建了一个项目，结果被领导强烈拒绝。</p><p>这就好比很多人说：xxx 车就是好，这儿好，那儿好 —— 结果，看看大街上，没几个人买。</p><h2 id="技术选型的依据" tabindex="-1">技术选型的依据 <a class="header-anchor" href="#技术选型的依据" aria-label="Permalink to &quot;技术选型的依据&quot;">​</a></h2><p>第一，选择社区已经成熟的，用户已经足够多的 —— 经受了大量用户的验证，出了问题也好找人讨论</p><ul><li>Vue React TS 都具备这个条件，而 Angular 至少在国内没有</li><li>Vue3 Svelte 等新发布的，等等再用</li></ul><p>第二，选择你公司已经有技术沉淀的，甚至已经有了很多第三方的可用组件，节省开发成本</p><p>第三，要考虑团队成员的学习成本，不要只考虑自己 —— 什么，你想带领大家一起学习？省省吧，用不着你去拯救别人</p><p>第四，考虑它的价值，能否抵消它的成本。例如</p><ul><li>你们做的是一个大型系统，用 TS 确实能减少很多 bug ，那就用 —— 你要考虑 TS 的学习成本，以及维护成本（规避各种 <code>any</code>）</li><li>你们做的是一个小型系统，用 TS 提升也不太大，那就别用</li></ul><p>总之，不要为了技术而技术，也不要只考虑自己而是全局考虑。要达到这个境界，你就需要去学习各种框架和技术，而不是只会某一个框架。</p><h2 id="答案" tabindex="-1">答案 <a class="header-anchor" href="#答案" aria-label="Permalink to &quot;答案&quot;">​</a></h2><ul><li>考虑社区成熟度</li><li>考虑公司的技术积累</li><li>考虑团队成员的学习成本</li><li>考虑它的价值是否真的被利用</li></ul>',22),r=[o];function n(c,h,u,s,d,p){return l(),e("div",null,r)}const b=a(t,[["render",n]]);export{S as __pageData,b as default};
