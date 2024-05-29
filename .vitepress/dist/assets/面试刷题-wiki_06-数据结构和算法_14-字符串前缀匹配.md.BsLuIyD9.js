import{_ as s,c as a,o as i,a1 as n}from"./chunks/framework.BwTyoF0R.js";const g=JSON.parse('{"title":"搜索单词","description":"","frontmatter":{},"headers":[],"relativePath":"面试刷题-wiki/06-数据结构和算法/14-字符串前缀匹配.md","filePath":"面试刷题-wiki/06-数据结构和算法/14-字符串前缀匹配.md"}'),l={name:"面试刷题-wiki/06-数据结构和算法/14-字符串前缀匹配.md"},p=n(`<h1 id="搜索单词" tabindex="-1">搜索单词 <a class="header-anchor" href="#搜索单词" aria-label="Permalink to &quot;搜索单词&quot;">​</a></h1><p>字符串前缀匹配</p><h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-label="Permalink to &quot;题目&quot;">​</a></h2><p>请描述算法思路，不要求写出代码。</p><ul><li>先给一个英文单词库（数组），里面有几十万个英文单词</li><li>再给一个输入框，输入字母，搜索单词</li><li>输入英文字母，要实时给出搜索结果，按前缀匹配</li></ul><p>要求</p><ul><li>尽量快</li><li>不要使用防抖（输入过程中就及时识别）</li></ul><h2 id="常规思路" tabindex="-1">常规思路 <a class="header-anchor" href="#常规思路" aria-label="Permalink to &quot;常规思路&quot;">​</a></h2><p><code>keyup</code> 之后，拿当前的单词，遍历词库数组，通过 <code>indexOf</code> 来前缀匹配。</p><p>性能分析</p><ul><li>算法思路的时间复杂度是 <code>O(n)</code></li><li>外加 <code>indexOf</code> 也需要时间复杂度。实际的复杂度要超过 <code>O(n)</code></li></ul><h2 id="优化数据结构" tabindex="-1">优化数据结构 <a class="header-anchor" href="#优化数据结构" aria-label="Permalink to &quot;优化数据结构&quot;">​</a></h2><p>英文字母一共 26 个，可按照第一个字母分组，分为 26 组。这样搜索次数就减少很多。</p><p>可按照第一个字母分组，那也可以按照第二个、第三个字母分组。<br> 即，在程序初始化时，把数组变成一个树，然后按照字母顺序在树中查找。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;abs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;arab&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;array&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;arrow&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;boot&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;boss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 更多...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    a: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        b: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            s: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        r: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            a: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                b: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            r: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                a: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    y: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                o: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    w: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    b: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        o: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            o: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                t: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            s: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                s: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 更多...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这样时间复杂度就大幅度减少，从 <code>O(n)</code> 降低到 <code>O(m)</code> （<code>m</code> 是单词的最大长度）</p><h2 id="划重点" tabindex="-1">划重点 <a class="header-anchor" href="#划重点" aria-label="Permalink to &quot;划重点&quot;">​</a></h2><ul><li>对于已经明确的范围的数据，可以考虑使用哈希表</li><li>以空间换时间</li></ul>`,18),h=[p];function e(t,k,E,r,d,c){return i(),a("div",null,h)}const y=s(l,[["render",e]]);export{g as __pageData,y as default};
