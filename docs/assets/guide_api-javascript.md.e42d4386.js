import{_ as s,c as n,o as a,a as l}from"./app.a4a9e2d3.js";const A=JSON.parse('{"title":"JavaScript API","description":"","frontmatter":{"title":"JavaScript API"},"headers":[{"level":2,"title":"createServer","slug":"createserver"},{"level":2,"title":"InlineConfig","slug":"inlineconfig"},{"level":2,"title":"ViteDevServer","slug":"vitedevserver"},{"level":2,"title":"build","slug":"build"},{"level":2,"title":"preview","slug":"preview"},{"level":2,"title":"resolveConfig","slug":"resolveconfig"},{"level":2,"title":"transformWithEsbuild","slug":"transformwithesbuild"}],"relativePath":"guide/api-javascript.md"}'),p={name:"guide/api-javascript.md"},o=l(`<h1 id="javascript-api" tabindex="-1">JavaScript API <a class="header-anchor" href="#javascript-api">\xB6</a></h1><p>Vite \u7684 JavaScript API \u662F\u5B8C\u5168\u7C7B\u578B\u5316\u7684\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 TypeScript \u6216\u8005\u5728 VS Code \u4E2D\u542F\u7528 JS \u7C7B\u578B\u68C0\u67E5\u6765\u5229\u7528\u667A\u80FD\u63D0\u793A\u548C\u7C7B\u578B\u6821\u9A8C\u3002</p><h2 id="createserver" tabindex="-1"><code>createServer</code> <a class="header-anchor" href="#createserver">\xB6</a></h2><p><strong>\u7C7B\u578B\u7B7E\u540D\uFF1A</strong></p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createServer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">inlineConfig</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InlineConfig</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ViteDevServer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>\u4F7F\u7528\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> createServer </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">server</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">createServer</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u4EFB\u4F55\u5408\u6CD5\u7684\u7528\u6237\u914D\u7F6E\u9009\u9879\uFF0C\u52A0\u4E0A \`mode\` \u548C \`configFile\`</span></span>
<span class="line"><span style="color:#F07178;">    configFile</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    root</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    server</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      port</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1337</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printUrls</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u5F53\u5728\u540C\u4E00\u4E2A Node.js \u8FDB\u7A0B\u4E2D\u4F7F\u7528 <code>createServer</code> \u548C <code>build</code> \u65F6\uFF0C\u4E24\u4E2A\u51FD\u6570\u90FD\u4F9D\u8D56\u4E8E <code>process.<wbr>env.</code><wbr><code>NODE_ENV</code> \u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u800C\u8FD9\u4E2A\u73AF\u5883\u53D8\u91CF\u53C8\u4F9D\u8D56\u4E8E <code>mode</code> \u914D\u7F6E\u9879\u3002\u4E3A\u4E86\u907F\u514D\u884C\u4E3A\u51B2\u7A81\uFF0C\u8BF7\u5728\u8FD9\u4E24\u4E2A API \u4F20\u5165\u53C2\u6570 <code>development</code> \u5B57\u6BB5\u4E2D\u8BBE\u7F6E <code>process.<wbr>env.</code><wbr><code>NODE_ENV</code> \u6216\u8005 <code>mode</code> \u914D\u7F6E\u9879\uFF0C\u6216\u8005\u4F60\u4E5F\u53EF\u4EE5\u751F\u6210\u53E6\u4E00\u4E2A\u5B50\u8FDB\u7A0B\uFF0C\u5206\u522B\u8FD0\u884C\u8FD9\u4E24\u4E2A API\u3002</p></div><h2 id="inlineconfig" tabindex="-1"><code>InlineConfig</code> <a class="header-anchor" href="#inlineconfig">\xB6</a></h2><p><code>InlineConfig</code> \u63A5\u53E3\u6269\u5C55\u4E86 <code>UserConfig</code> \u5E76\u6DFB\u52A0\u4E86\u4EE5\u4E0B\u5C5E\u6027\uFF1A</p><ul><li><code>configFile</code>\uFF1A\u6307\u660E\u8981\u4F7F\u7528\u7684\u914D\u7F6E\u6587\u4EF6\u3002\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\uFF0CVite \u5C06\u5C1D\u8BD5\u4ECE\u9879\u76EE\u6839\u76EE\u5F55\u81EA\u52A8\u89E3\u6790\u3002\u8BBE\u7F6E\u4E3A <code>false</code> \u53EF\u4EE5\u7981\u7528\u81EA\u52A8\u89E3\u6790\u529F\u80FD\u3002</li><li><code>envFile</code>\uFF1A\u8BBE\u7F6E\u4E3A <code>false</code> \u65F6\uFF0C\u5219\u7981\u7528 <code>.env</code> \u6587\u4EF6\u3002</li></ul><h2 id="vitedevserver" tabindex="-1"><code>ViteDevServer</code> <a class="header-anchor" href="#vitedevserver">\xB6</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ViteDevServer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u88AB\u89E3\u6790\u7684 Vite \u914D\u7F6E\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ResolvedConfig</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u4E00\u4E2A connect \u5E94\u7528\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * - \u53EF\u4EE5\u7528\u4E8E\u5C06\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\u9644\u52A0\u5230\u5F00\u53D1\u670D\u52A1\u5668\u3002</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * - \u8FD8\u53EF\u4EE5\u7528\u4F5C\u81EA\u5B9A\u4E49http\u670D\u52A1\u5668\u7684\u5904\u7406\u51FD\u6570\u3002</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      \u6216\u4F5C\u4E3A\u4E2D\u95F4\u4EF6\u7528\u4E8E\u4EFB\u4F55 connect \u98CE\u683C\u7684 Node.js \u6846\u67B6\u3002</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * https://github.com/senchalabs/connect#use-middleware</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">middlewares</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Connect</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Server</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u672C\u673A node http \u670D\u52A1\u5668\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">httpServer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Server</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * chokidar \u76D1\u542C\u5668\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * https://github.com/paulmillr/chokidar#api</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">watcher</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FSWatcher</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * web socket \u670D\u52A1\u5668\uFF0C\u5E26\u6709 \`send(payload)\` \u65B9\u6CD5\u3002</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ws</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WebSocketServer</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * Rollup \u63D2\u4EF6\u5BB9\u5668\uFF0C\u53EF\u4EE5\u9488\u5BF9\u7ED9\u5B9A\u6587\u4EF6\u8FD0\u884C\u63D2\u4EF6\u94A9\u5B50\u3002</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pluginContainer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PluginContainer</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u8DDF\u8E2A\u5BFC\u5165\u5173\u7CFB\u3001url \u5230\u6587\u4EF6\u6620\u5C04\u548C hmr \u72B6\u6001\u7684\u6A21\u5757\u56FE\u3002</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">moduleGraph</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ModuleGraph</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u4EE5\u4EE3\u7801\u65B9\u5F0F\u89E3\u6790\u3001\u52A0\u8F7D\u548C\u8F6C\u6362 url \u5E76\u83B7\u53D6\u7ED3\u679C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u800C\u4E0D\u9700\u8981\u901A\u8FC7 http \u8BF7\u6C42\u7BA1\u9053\u3002</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">transformRequest</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TransformOptions</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TransformResult</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u5E94\u7528 Vite \u5185\u5EFA HTML \u8F6C\u6362\u548C\u4EFB\u610F\u63D2\u4EF6 HTML \u8F6C\u6362</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">transformIndexHtml</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> html</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u52A0\u8F7D\u4E00\u4E2A\u7ED9\u5B9A\u7684 URL \u4F5C\u4E3A SSR \u7684\u5B9E\u4F8B\u5316\u6A21\u5757</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ssrLoadModule</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">fixStacktrace</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u89E3\u51B3 ssr \u9519\u8BEF\u5806\u6808\u4FE1\u606F</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ssrFixStacktrace</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u542F\u52A8\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">listen</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">port</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> isRestart</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ViteDevServer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u91CD\u542F\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">forceOptimize</span><span style="color:#676E95;font-style:italic;"> - \u5F3A\u5236\u4F18\u5316\u5668\u6253\u5305\uFF0C\u548C\u547D\u4EE4\u884C\u5185\u4F7F\u7528 --force \u4E00\u81F4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">forceOptimize</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \u505C\u6B62\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">close</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="build" tabindex="-1"><code>build</code> <a class="header-anchor" href="#build">\xB6</a></h2><p><strong>\u7C7B\u578B\u6821\u9A8C\uFF1A</strong></p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">build</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  inlineConfig</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InlineConfig</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RollupOutput</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RollupOutput</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>\u4F7F\u7528\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> build </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">build</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    root</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./project</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    base</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/foo/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    build</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      rollupOptions</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span></span>
<span class="line"></span></code></pre></div><h2 id="preview" tabindex="-1"><code>preview</code> <a class="header-anchor" href="#preview">\xB6</a></h2><p><strong>\u7C7B\u578B\u7B7E\u540D\uFF1A</strong></p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">preview</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">inlineConfig</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InlineConfig</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PreviewServer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>\u793A\u4F8B\u7528\u6CD5\uFF1A</strong></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> preview </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">previewServer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">preview</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u4EFB\u4F55\u6709\u6548\u7684\u7528\u6237\u914D\u7F6E\u9879\uFF0C\u5C06\u52A0\u4E0A \`mode\` \u548C \`configFile\`</span></span>
<span class="line"><span style="color:#F07178;">    preview</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      port</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      open</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">previewServer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printUrls</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span></span>
<span class="line"></span></code></pre></div><h2 id="resolveconfig" tabindex="-1"><code>resolveConfig</code> <a class="header-anchor" href="#resolveconfig">\xB6</a></h2><p><strong>\u7C7B\u578B\u6821\u9A8C\uFF1A</strong></p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">resolveConfig</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  inlineConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InlineConfig</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  command</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">serve</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultMode</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ResolvedConfig</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>The <code>command</code> value is <code>serve</code> in dev (in the cli <code>vite</code>, <code>vite dev</code>, and <code>vite serve</code> are aliases).</p><h2 id="transformwithesbuild" tabindex="-1"><code>transformWithEsbuild</code> <a class="header-anchor" href="#transformwithesbuild">\xB6</a></h2><p><strong>\u7C7B\u578B\u7B7E\u540D\uFF1A</strong></p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">transformWithEsbuild</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EsbuildTransformOptions</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  inMap</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ESBuildTransformResult</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,30),e=[o];function t(c,r,y,F,D,i){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{A as __pageData,d as default};
