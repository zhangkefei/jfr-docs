import{_ as s,c as n,o as a,a as l}from"./app.a4a9e2d3.js";const A=JSON.parse('{"title":"\u4F7F\u7528\u63D2\u4EF6","description":"","frontmatter":{"title":"\u4F7F\u7528\u63D2\u4EF6"},"headers":[{"level":2,"title":"\u6DFB\u52A0\u4E00\u4E2A\u63D2\u4EF6","slug":"adding-a-plugin"},{"level":2,"title":"\u67E5\u627E\u63D2\u4EF6","slug":"finding-plugins"},{"level":2,"title":"\u5F3A\u5236\u63D2\u4EF6\u6392\u5E8F","slug":"enforcing-plugin-ordering"},{"level":2,"title":"\u6309\u9700\u5E94\u7528","slug":"conditional-application"},{"level":2,"title":"\u521B\u5EFA\u63D2\u4EF6","slug":"building-plugins"}],"relativePath":"guide/using-plugins.md"}'),p={name:"guide/using-plugins.md"},o=l(`<h1 id="using-plugins" tabindex="-1">\u4F7F\u7528\u63D2\u4EF6 <a class="header-anchor" href="#using-plugins">\xB6</a></h1><p>Vite \u53EF\u4EE5\u4F7F\u7528\u63D2\u4EF6\u8FDB\u884C\u6269\u5C55\uFF0C\u8FD9\u5F97\u76CA\u4E8E Rollup \u4F18\u79C0\u7684\u63D2\u4EF6\u63A5\u53E3\u8BBE\u8BA1\u548C\u4E00\u90E8\u5206 Vite \u72EC\u6709\u7684\u989D\u5916\u9009\u9879\u3002\u8FD9\u610F\u5473\u7740 Vite \u7528\u6237\u53EF\u4EE5\u5229\u7528 Rollup \u63D2\u4EF6\u7684\u5F3A\u5927\u751F\u6001\u7CFB\u7EDF\uFF0C\u540C\u65F6\u6839\u636E\u9700\u8981\u4E5F\u80FD\u591F\u6269\u5C55\u5F00\u53D1\u670D\u52A1\u5668\u548C SSR \u529F\u80FD\u3002</p><h2 id="adding-a-plugin" tabindex="-1">\u6DFB\u52A0\u4E00\u4E2A\u63D2\u4EF6 <a class="header-anchor" href="#adding-a-plugin">\xB6</a></h2><p>\u82E5\u8981\u4F7F\u7528\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u9700\u8981\u5C06\u5B83\u6DFB\u52A0\u5230\u9879\u76EE\u7684 <code>devDependencies</code> \u5E76\u5728 <code>vite.config.js</code> \u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 <code>plugins</code> \u6570\u7EC4\u4E2D\u5F15\u5165\u5B83\u3002\u4F8B\u5982\uFF0C\u8981\u60F3\u4E3A\u4F20\u7EDF\u6D4F\u89C8\u5668\u63D0\u4F9B\u652F\u6301\uFF0C\u53EF\u4EE5\u6309\u4E0B\u9762\u8FD9\u6837\u4F7F\u7528\u5B98\u65B9\u63D2\u4EF6 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer">@vitejs/plugin-legacy</a>\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm add -D @vitejs/plugin-legacy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// vite.config.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> legacy </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vitejs/plugin-legacy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">legacy</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">targets</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">defaults</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">not IE 11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p><code>plugins</code> \u4E5F\u53EF\u4EE5\u63A5\u53D7\u5305\u542B\u591A\u4E2A\u63D2\u4EF6\u4F5C\u4E3A\u5355\u4E2A\u5143\u7D20\u7684\u9884\u8BBE\u3002\u8FD9\u5BF9\u4E8E\u4F7F\u7528\u591A\u4E2A\u63D2\u4EF6\u5B9E\u73B0\u7684\u590D\u6742\u7279\u6027\uFF08\u5982\u6846\u67B6\u96C6\u6210\uFF09\u5F88\u6709\u7528\u3002\u8BE5\u6570\u7EC4\u5C06\u5728\u5185\u90E8\u88AB\u6241\u5E73\u5316\u3002</p><p>Falsy \u865A\u503C\u7684\u63D2\u4EF6\u5C06\u88AB\u5FFD\u7565\uFF0C\u53EF\u4EE5\u7528\u6765\u8F7B\u677E\u5730\u542F\u7528\u6216\u505C\u7528\u63D2\u4EF6\u3002</p><h2 id="finding-plugins" tabindex="-1">\u67E5\u627E\u63D2\u4EF6 <a class="header-anchor" href="#finding-plugins">\xB6</a></h2><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>Vite \u65E8\u5728\u4E3A\u5E38\u89C1\u7684 Web \u5F00\u53D1\u8303\u5F0F\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u652F\u6301\u3002\u5728\u5BFB\u627E\u4E00\u4E2A Vite \u6216\u517C\u5BB9\u7684 Rollup \u63D2\u4EF6\u4E4B\u524D\uFF0C\u8BF7\u5148\u67E5\u770B <a href="./../guide/features.html">\u529F\u80FD\u6307\u5F15</a>\u3002\u5927\u91CF\u5728 Rollup \u9879\u76EE\u4E2D\u9700\u8981\u4F7F\u7528\u63D2\u4EF6\u7684\u7528\u4F8B\u5728 Vite \u4E2D\u5DF2\u7ECF\u8986\u76D6\u5230\u4E86\u3002</p></div><p>\u67E5\u770B <a href="./../plugins/">Plugins \u7AE0\u8282</a> \u83B7\u53D6\u5B98\u65B9\u63D2\u4EF6\u4FE1\u606F\u3002\u793E\u533A\u63D2\u4EF6\u5217\u8868\u8BF7\u53C2\u89C1 <a href="https://github.com/vitejs/awesome-vite#plugins" target="_blank" rel="noopener noreferrer">awesome-vite</a>\u3002\u800C\u5BF9\u4E8E\u517C\u5BB9\u7684 Rollup \u63D2\u4EF6\uFF0C\u8BF7\u67E5\u770B <a href="https://vite-rollup-plugins.patak.dev" target="_blank" rel="noopener noreferrer">Vite Rollup \u63D2\u4EF6</a> \u83B7\u53D6\u4E00\u4E2A\u5E26\u4F7F\u7528\u8BF4\u660E\u7684\u517C\u5BB9 Rollup \u5B98\u65B9\u63D2\u4EF6\u5217\u8868\uFF0C\u82E5\u5217\u8868\u4E2D\u6CA1\u6709\u627E\u5230\uFF0C\u5219\u8BF7\u53C2\u9605 <a href="./../guide/api-plugin.html#rollup-plugin-compatibility">Rollup \u63D2\u4EF6\u517C\u5BB9\u6027\u7AE0\u8282</a>\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6B64 <a href="https://www.npmjs.com/search?q=vite-plugin&amp;ranking=popularity" target="_blank" rel="noopener noreferrer">npm Vite \u63D2\u4EF6\u641C\u7D22\u94FE\u63A5</a> \u6765\u627E\u5230\u4E00\u4E9B\u9075\u5FAA\u4E86 <a href="./api-plugin.html#conventions">\u63A8\u8350\u7EA6\u5B9A</a> \u7684 Vite \u63D2\u4EF6\uFF0C\u6216\u8005\u901A\u8FC7 <a href="https://www.npmjs.com/search?q=rollup-plugin&amp;ranking=popularity" target="_blank" rel="noopener noreferrer">npm Rollup \u63D2\u4EF6\u641C\u7D22\u94FE\u63A5</a> \u83B7\u53D6 Rollup \u63D2\u4EF6\u3002</p><h2 id="enforcing-plugin-ordering" tabindex="-1">\u5F3A\u5236\u63D2\u4EF6\u6392\u5E8F <a class="header-anchor" href="#enforcing-plugin-ordering">\xB6</a></h2><p>\u4E3A\u4E86\u4E0E\u67D0\u4E9B Rollup \u63D2\u4EF6\u517C\u5BB9\uFF0C\u53EF\u80FD\u9700\u8981\u5F3A\u5236\u4FEE\u6539\u63D2\u4EF6\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u6216\u8005\u53EA\u5728\u6784\u5EFA\u65F6\u4F7F\u7528\u3002\u8FD9\u5E94\u8BE5\u662F Vite \u63D2\u4EF6\u7684\u5B9E\u73B0\u7EC6\u8282\u3002\u53EF\u4EE5\u4F7F\u7528 <code>enforce</code> \u4FEE\u9970\u7B26\u6765\u5F3A\u5236\u63D2\u4EF6\u7684\u4F4D\u7F6E:</p><ul><li><code>pre</code>\uFF1A\u5728 Vite \u6838\u5FC3\u63D2\u4EF6\u4E4B\u524D\u8C03\u7528\u8BE5\u63D2\u4EF6</li><li>\u9ED8\u8BA4\uFF1A\u5728 Vite \u6838\u5FC3\u63D2\u4EF6\u4E4B\u540E\u8C03\u7528\u8BE5\u63D2\u4EF6</li><li><code>post</code>\uFF1A\u5728 Vite \u6784\u5EFA\u63D2\u4EF6\u4E4B\u540E\u8C03\u7528\u8BE5\u63D2\u4EF6</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// vite.config.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> image </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rollup/plugin-image</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">...</span><span style="color:#82AAFF;">image</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">enforce</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pre</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B <a href="./api-plugin.html#plugin-ordering">Plugins API Guide</a> \u83B7\u53D6\u7EC6\u8282\u4FE1\u606F\uFF0C\u5E76\u5728 <a href="https://vite-rollup-plugins.patak.dev" target="_blank" rel="noopener noreferrer">Vite Rollup \u63D2\u4EF6</a> \u517C\u5BB9\u6027\u5217\u8868\u4E2D\u6CE8\u610F <code>enforce</code> \u6807\u7B7E\u548C\u6D41\u884C\u63D2\u4EF6\u7684\u4F7F\u7528\u8BF4\u660E\u3002</p><h2 id="conditional-application" tabindex="-1">\u6309\u9700\u5E94\u7528 <a class="header-anchor" href="#conditional-application">\xB6</a></h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u63D2\u4EF6\u5728\u5F00\u53D1 (serve) \u548C\u751F\u4EA7 (build) \u6A21\u5F0F\u4E2D\u90FD\u4F1A\u8C03\u7528\u3002\u5982\u679C\u63D2\u4EF6\u5728\u670D\u52A1\u6216\u6784\u5EFA\u671F\u95F4\u6309\u9700\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528 <code>apply</code> \u5C5E\u6027\u6307\u660E\u5B83\u4EEC\u4EC5\u5728 <code>&#39;build&#39;</code> \u6216 <code>&#39;serve&#39;</code> \u6A21\u5F0F\u65F6\u8C03\u7528\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// vite.config.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> typescript2 </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rollup-plugin-typescript2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">...</span><span style="color:#82AAFF;">typescript2</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">apply</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="building-plugins" tabindex="-1">\u521B\u5EFA\u63D2\u4EF6 <a class="header-anchor" href="#building-plugins">\xB6</a></h2><p>\u9605\u8BFB <a href="./api-plugin.html">\u63D2\u4EF6 API \u6307\u5F15</a> \u6587\u6863\u4E86\u89E3\u5982\u4F55\u521B\u5EFA\u63D2\u4EF6\u3002</p>`,22),e=[o];function t(c,r,i,D,y,F){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{A as __pageData,d as default};
