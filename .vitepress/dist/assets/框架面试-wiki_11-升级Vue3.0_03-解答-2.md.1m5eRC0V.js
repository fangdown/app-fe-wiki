import{_ as s,c as i,o as a,a1 as e}from"./chunks/framework.BwTyoF0R.js";const g=JSON.parse('{"title":"解答-2","description":"","frontmatter":{},"headers":[],"relativePath":"框架面试-wiki/11-升级Vue3.0/03-解答-2.md","filePath":"框架面试-wiki/11-升级Vue3.0/03-解答-2.md"}'),n={name:"框架面试-wiki/11-升级Vue3.0/03-解答-2.md"},t=e(`<h1 id="解答-2" tabindex="-1">解答-2 <a class="header-anchor" href="#解答-2" aria-label="Permalink to &quot;解答-2&quot;">​</a></h1><h2 id="如何理解-ref-toref-torefs" tabindex="-1">如何理解 <code>ref</code> <code>toRef</code> <code>toRefs</code> <a class="header-anchor" href="#如何理解-ref-toref-torefs" aria-label="Permalink to &quot;如何理解 \`ref\` \`toRef\` \`toRefs\`&quot;">​</a></h2><p>细节的知识点，在整个 Composition API 中算是比较难理解的。 甚至出现了 ref sugar 的讨论。</p><p>ref 和 reactive 结合起来使用，更是难以理解。 既然有 reactive ，为何还要 ref 呢？？？</p><p><a href="https://v3.cn.vuejs.org/api/refs-api.html" target="_blank" rel="noreferrer">https://v3.cn.vuejs.org/api/refs-api.html</a></p><h3 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;ref&quot;">​</a></h3><p>创建响应式对象一般用 reactive</p><p>第一，响应式 （代码参考 <code>RefBasic.vue</code>）</p><ul><li>生成值类型的响应式数据</li><li>可直接用于模板和 reactive</li><li>可通过 <code>.value</code> 修改值</li></ul><p>第二，模板引用（代码参考 <code>RefTemplate.vue</code>）</p><h3 id="toref" tabindex="-1">toRef <a class="header-anchor" href="#toref" aria-label="Permalink to &quot;toRef&quot;">​</a></h3><p>代码参考 <code>ToRef.vue</code></p><p>可以用来为源响应式对象上的 property 新创建一个 ref。然后可以将 ref 传递出去，从而保持对其源 property 的响应式连接。</p><ul><li>针对一个<strong>响应式对象</strong>的 property</li><li>创建一个 ref 具有响应式</li><li>保持<strong>引用</strong>关系</li></ul><p>【注意】必须是响应式对象，普通对象不具有响应式。</p><h3 id="torefs" tabindex="-1">toRefs <a class="header-anchor" href="#torefs" aria-label="Permalink to &quot;toRefs&quot;">​</a></h3><p>代码参考 <code>ToRefs.vue</code></p><p>将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref 。</p><ul><li>将<strong>响应式对象</strong>转换为普通对象 obj</li><li>obj 的每个属性都是对应的 ref</li><li>保持<strong>引用</strong>关系</li></ul><p>【注意】必须是响应式对象，普通对象不具有响应式。</p><p>当从合成函数返回响应式对象时，toRefs 非常有用。 这样消费组件就可以在不丢失响应性的情况下对返回的对象进行分解/扩散：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useFeatureX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 逻辑运行状态，省略 N 行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 返回时转换为ref</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> toRefs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(state)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 可以在不失去响应性的情况下破坏结构</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useFeatureX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      x,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      y</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="ref-和-reactive" tabindex="-1">ref 和 reactive <a class="header-anchor" href="#ref-和-reactive" aria-label="Permalink to &quot;ref 和 reactive&quot;">​</a></h3><p>既然有 reactive ，为何还要 ref 呢？</p><ul><li>返回值类型，会丢失响应式</li><li>如在 setup、computed、合成函数，都有可能返回值类型</li><li>Vue 如不定义 ref ，用户将自造 ref ，反而混乱</li></ul><p>代码参考 <code>ref/WhyRef.vue</code></p><h3 id="为何需要-value" tabindex="-1">为何需要 <code>.value</code> <a class="header-anchor" href="#为何需要-value" aria-label="Permalink to &quot;为何需要 \`.value\`&quot;">​</a></h3><ul><li>因为要保证响应式，需要把值类型封装成一个对象形式，所以用 <code>.value</code> 表示这个值</li><li>模板，reactive 使用时，不需要 <code>.value</code></li><li>其他情况都需要 <code>.value</code></li></ul><p>结合 computed 的内部实现，可如下解释：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 伪代码：不具有响应式，即改变值不会触发渲染</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">getter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  watchEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// value 是值类型，值拷贝，value 的变化不会传递到下游</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 伪代码：具有响应式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">getter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ref</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  watchEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ref.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ref 是引用类型，指针拷贝，ref 的变化会传递到下游</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ref</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>上述代码，可以把 <code>watchEffect</code> 改为 <code>setTimeout</code> 模拟一下</p><h3 id="再聊-toref-和-torefs" tabindex="-1">再聊 toRef 和 toRefs <a class="header-anchor" href="#再聊-toref-和-torefs" aria-label="Permalink to &quot;再聊 toRef 和 toRefs&quot;">​</a></h3><ul><li>设计初衷：不丢失响应性的情况下对返回的对象进行<strong>分解/扩散</strong></li><li>必须存在：因为直接 property 或者 <code>...state</code> ，会直接拿到属性的值。如果属性是<strong>值类型</strong>，则会丢失响应式 ！！！（响应式是 Proxy 实现的）</li><li>注意事项：不创造响应式，而是<strong>延续</strong>响应式 （所以针对普通对象不行，必须是响应式对象）</li></ul><p>toRef toRefs 必须针对一个响应式对象，普通对象是无法变成响应式的。 它俩的设计初衷，本来也是针对响应式对象的 <a href="https://vue-composition-api-rfc.netlify.app/zh/api.html#toref" target="_blank" rel="noreferrer">https://vue-composition-api-rfc.netlify.app/zh/api.html#toref</a> 即，想要实现响应式，只有两个方法：<code>ref</code> <code>reactive</code></p><ul><li><code>ref</code> <strong>创造</strong>响应式</li><li><code>toRef</code> 和 <code>toRefs</code> <strong>延续</strong>响应式</li></ul><p>为何必须使用 <code>toRef(state, &#39;name&#39;)</code> 和 <code>toRefs(state)</code> ？？？ 因为直接 property 或者 <code>...state</code> ，会直接拿到属性的值。如果属性是<strong>值类型</strong>，则会丢失响应式。（响应式是 Proxy 实现的） 这也是引入 <code>ref</code> 的根源！！！ 也是引入 Composition API ，抛弃 this ，带来的结果。</p><h3 id="从使用角度" tabindex="-1">从使用角度 <a class="header-anchor" href="#从使用角度" aria-label="Permalink to &quot;从使用角度&quot;">​</a></h3><p>理解和应用要分开总结，这很重要。即便你听不懂原理，也要知道如何使用。</p><ul><li>ref 值类型响应式</li><li>ref 模板引用</li><li>setup 返回时用 <code>toRefs(state)</code></li><li>用于第三方的逻辑函数，如 demo 中的 <code>useMousePosition</code></li><li>为所有的 ref 名加类似 <code>xxxRef</code> 的后缀</li></ul><hr><p>ref 和 reactive 混合起来，真的非常乱。 相比之下，React Hooks 只有 <code>useState</code> ，反而简单很多。—— 当然它也有其他的一些理解成本。</p>`,41),l=[t];function p(h,r,k,o,d,c){return a(),i("div",null,l)}const f=s(n,[["render",p]]);export{g as __pageData,f as default};
