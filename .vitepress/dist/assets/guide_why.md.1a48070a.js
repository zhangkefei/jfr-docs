import{_ as e,c as a,o as t,a as r}from"./app.a4a9e2d3.js";const g=JSON.parse('{"title":"\u4E3A\u4EC0\u4E48\u9009 JFR","description":"","frontmatter":{"title":"\u4E3A\u4EC0\u4E48\u9009 JFR"},"headers":[{"level":2,"title":"\u73B0\u5B9E\u95EE\u9898","slug":"the-problems"},{"level":2,"title":"\u4E3A\u4EC0\u4E48","slug":"why"},{"level":2,"title":"\u6211\u4EEC\u8BD5\u56FE\u6539\u53D8","slug":"try-change"}],"relativePath":"guide/why.md"}'),h={name:"guide/why.md"},s=r('<h1 id="why-jfr" tabindex="-1">\u4E3A\u4EC0\u4E48\u9009 JFR <a class="header-anchor" href="#why-jfr">\xB6</a></h1><h2 id="the-problems" tabindex="-1">\u73B0\u5B9E\u95EE\u9898 <a class="header-anchor" href="#the-problems">\xB6</a></h2><p>\u5F00\u6E90\u4E16\u754C\u6709\u5F88\u591A\u597D\u7684\u8F6F\u4EF6\u548C\u5E93\uFF08\u4EE5\u4E0B\u7EDF\u79F0\u8F6F\u4EF6\uFF09\uFF0C\u6709\u7684\u5728\u4E16\u754C\u8F6F\u4EF6\u53F2\u4E0A\u4EA7\u751F\u4E86\u5E7F\u6CDB\u7684\u5F71\u54CD\u3002\u6709\u4E9B\u5F00\u6E90\u8F6F\u4EF6\u4F5C\u8005\u56E0\u6B64\u83B7\u5F97\u4E86\u5F88\u597D\u7684\u58F0\u8A89\u3001\u5DE5\u4F5C\u3002\u4F46\u66F4\u591A\u7684\u5F00\u6E90\u8F6F\u4EF6\u4F5C\u8005\u5728\u5229\u7528\u81EA\u5DF1\u7684\u4E1A\u4F59\u65F6\u95F4\u82E6\u82E6\u652F\u6491\uFF0C\u6CA1\u6709\u4EFB\u4F55\u6536\u76CA\u3002</p><p>\u867D\u7136\u53EF\u4EE5\u5728\u4F17\u7B79\u7F51\u7AD9\u53D1\u5E03\u4FE1\u606F\u4E3A\u81EA\u5DF1\u7684\u9879\u76EE\u7B79\u96C6\u8D44\u91D1\uFF0C\u6216\u5229\u7528\u7F51\u7AD9\u4E5E\u6C42\u7528\u6237\u201C\u6253\u8D4F\u201D\uFF0C\u4F46\u771F\u6B63\u6253\u8D4F\u7684\u4E2A\u4EBA\u548C\u516C\u53F8\u5BE5\u5BE5\u65E0\u51E0\u3002\u4E2A\u4EBA\u65E0\u529B\u6253\u8D4F\u5C1A\u53EF\u7406\u89E3\uFF0C\u4F46\u662F\u67D0\u4E9B\u5728\u5F00\u6E90\u8F6F\u4EF6\u4E0A\u53D7\u76CA\u7684\u5546\u4E1A\u516C\u53F8\u4E5F\u6CA1\u6709\u610F\u8BC6\u5230\u81EA\u5DF1\u5E94\u8BE5\u8D44\u52A9\u4E00\u4E0B\u82E6\u82E6\u6323\u624E\u7684\u5F00\u6E90\u8F6F\u4EF6\u4F5C\u8005\uFF0C\u8FD9\u5F88\u4EE4\u4EBA\u75DB\u5FC3\u3002</p><h2 id="why" tabindex="-1">\u4E3A\u4EC0\u4E48 <a class="header-anchor" href="#why">\xB6</a></h2><p>\u8FD9\u79CD\u60C5\u51B5\u5728\u5F00\u6E90\u4E16\u754C\u666E\u904D\u5B58\u5728\uFF0C\u6709\u65F6\u4F1A\u6709\u4E00\u4E9B\u6FC0\u70C8\u884C\u4E3A\u51FA\u73B0\u3002log4j\u6F0F\u6D1E\u4E8B\u4EF6\u3001faker.js\u4F5C\u8005\u5220\u5E93\u4E8B\u4EF6\u3001gulp.js\u4F5C\u8005\u5410\u69FD\u4E8B\u4EF6\uFF0C\u8BF4\u660E\u5F00\u6E90\u8F6F\u4EF6\u4F5C\u8005\u9700\u8981\u7684\u4E0D\u4EC5\u4EC5\u662F\u4E00\u53E5\u611F\u8C22\uFF0C\u800C\u662F\u9700\u8981\u5927\u5BB6\u91CF\u529B\u7684\u652F\u6301\u3002</p><p>\u4ED6\u4EEC\u4E3A\u5F00\u6E90\u4E16\u754C\u4F5C\u51FA\u4E86\u8D21\u732E\uFF0C\u514D\u8D39\u63D0\u4F9B\u8F6F\u4EF6\u4F9B\u5927\u5BB6\u4F7F\u7528\uFF0C\u6700\u540E\u5927\u5BB6\u4E60\u4EE5\u4E3A\u5E38\uFF0C\u8F6F\u4EF6\u51FA\u95EE\u9898\u65F6\u7406\u76F4\u6C14\u58EE\u50AC\u4FC3\u4F5C\u8005\u6293\u7D27\u65F6\u95F4\u4FEE\u6539\u95EE\u9898\uFF0C\u5374\u5FD8\u8BB0\u4E86\u81EA\u5DF1\u4ECE\u6765\u90FD\u662F\u514D\u8D39\u4F7F\u7528\u800C\u4E14\u6CA1\u6709\u652F\u6301\u8FC7\u8FD9\u4E2A\u9879\u76EE\u3002</p><p>\u76EE\u524D\u8D44\u52A9\u5F00\u6E90\u8F6F\u4EF6\u7684\u666E\u904D\u505A\u6CD5\u662F\u6350\u6B3E\u6216\u6253\u8D4F\u3002\u4F46\uFF0C\u5373\u4F7F\u662F\u6709\u8DB3\u591F\u7684\u7ECF\u6D4E\u80FD\u529B\u6253\u8D4F\u4E00\u4E0B(\u54EA\u6015\u6253\u8D4F\u4E00\u5206\u94B1)\u7684\u7FA4\u4F53\uFF0C\u4E5F\u666E\u904D\u4E0D\u4F1A\u53BB\u5B9E\u65BD\u6253\u8D4F\u884C\u4E3A\u3002\u8FD9\u4E5F\u8BB8\u662F\u56E0\u4E3A\u62B1\u6709\u201C\u6253\u5DE5\u201D\u5FC3\u6001\uFF0C\u8BA4\u4E3A\u201C\u5DE5\u4F5C\u662F\u7ED9\u8001\u677F\u3001\u7ED9\u516C\u53F8\u505A\u7684\uFF0C\u4E0D\u662F\u7ED9\u81EA\u5DF1\u505A\u7684\u201C\uFF0C\u56E0\u6B64\u4E00\u5206\u94B1\u4E5F\u4E0D\u6253\u7B97\u4ECE\u81EA\u5DF1\u7684\u8170\u5305\u91CC\u638F\u3002\u53E6\u5916\uFF0C\u4E5F\u6709\u201C\u5F3A\u76D7\u903B\u8F91\u201D\u548C\u201C\u8D44\u672C\u8FFD\u6C42\u6700\u5927\u5316\u5229\u76CA\u201D\u7684\u56E0\u7D20\u4F5C\u795F\uFF0C\u5373\u201C\u53EA\u8981\u5B58\u5728\u80FD\u4EE5\u6700\u4F4E\u7ECF\u6D4E\u6210\u672C\u83B7\u5229\u7684\u9014\u5F84\uFF0C\u7EDD\u4E0D\u82B1\u8D39\u66F4\u591A\u7684\u6210\u672C\u53BB\u505A\u201D\uFF0C\u201C\u81EA\u5DF1\u7814\u53D1\u4E0D\u5982\u4E70\uFF0C\u81EA\u5DF1\u4E70\u4E0D\u5982\u6284\uFF0C\u81EA\u5DF1\u6284\u4E0D\u5982\u767D\u5AD6\u201D\u3002\u8FD9\u65E2\u662F\u4EBA\u6027\u7684\u6076\uFF0C\u4E5F\u662F\u8D44\u672C\u9010\u5229\u7684\u6076\u3002</p><h2 id="try-change" tabindex="-1">\u6211\u4EEC\u8BD5\u56FE\u6539\u53D8 <a class="header-anchor" href="#try-change">\xB6</a></h2>',9),l=[s];function c(o,n,_,d,i,p){return t(),a("div",null,l)}var m=e(h,[["render",c]]);export{g as __pageData,m as default};
