(this["webpackJsonpreddit-words"]=this["webpackJsonpreddit-words"]||[]).push([[0],{31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),r=s(23),i=s.n(r),a=(s(31),s(32),s(12)),l=s(5),d=(s(33),s(0)),j=function(){return Object(d.jsx)("a",{href:"https://github.com/chanind/reddit-words",className:"OctocatCorner","aria-label":"View source on GitHub",children:Object(d.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#fff",color:"#282c34",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true",children:[Object(d.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(d.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"OctocatCorner-arm"}),Object(d.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"OctocatCorner-body"})]})})},o=s(17),x=function(e){var t=e.split("|"),s=Object(o.a)(t,2),c=s[0],n=s[1];return{word:c.replace(/_/gi," ").replace("&amp;","&"),pos:n}},h=function(e){var t=e.leftSense,s=e.rightSense,c="/diff?left=".concat(t,"&right=").concat(s),n=x(t),r=x(s);return Object(d.jsxs)(a.b,{to:c,className:"flex p-3 rounded border border-blue-100 bg-opacity-5 bg-gray-400 hover:bg-opacity-10",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"inline-block pr-1",children:n.word}),Object(d.jsx)("span",{className:"text-gray-500 text-xs",children:n.pos})]}),Object(d.jsx)("div",{className:"px-2",children:" \u2212 "}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"inline-block pr-1",children:r.word}),Object(d.jsx)("span",{className:"text-gray-500 text-xs",children:r.pos})]})]})},b=function(){return Object(d.jsxs)("div",{className:"p-2",children:[Object(d.jsx)("h1",{className:"text-6xl p-10",children:"Reddit Words"}),Object(d.jsxs)("p",{children:["What did"," ",Object(d.jsx)("a",{href:"https://github.com/explosion/sense2vec",className:"underline",children:"Spacy's offical sense2vec"})," ","word vectors learn about the world from Reddit in 2019? Click on a dimension below to find out!"]}),Object(d.jsxs)("div",{className:"flex flex-wrap justify-center pt-10",children:[Object(d.jsx)("div",{className:"p-3",children:Object(d.jsx)(h,{leftSense:"Communism|NOUN",rightSense:"Capitalism|NOUN"})}),Object(d.jsx)("div",{className:"p-3",children:Object(d.jsx)(h,{leftSense:"east|NOUN",rightSense:"west|NOUN"})}),Object(d.jsx)("div",{className:"p-3",children:Object(d.jsx)(h,{leftSense:"north|NOUN",rightSense:"south|NOUN"})}),Object(d.jsx)("div",{className:"p-3",children:Object(d.jsx)(h,{leftSense:"USA|GPE",rightSense:"France|GPE"})}),Object(d.jsx)("div",{className:"p-3",children:Object(d.jsx)(h,{leftSense:"USA|GPE",rightSense:"China|GPE"})}),Object(d.jsx)("div",{className:"p-3",children:Object(d.jsx)(h,{leftSense:"smart|ADJ",rightSense:"stupid|ADJ"})}),Object(d.jsx)("div",{className:"p-3",children:Object(d.jsx)(h,{leftSense:"Tokyo|GPE",rightSense:"New_York|GPE"})}),Object(d.jsx)("div",{className:"p-3",children:Object(d.jsx)(h,{leftSense:"happy|ADJ",rightSense:"unhappy|ADJ"})}),Object(d.jsx)("div",{className:"p-3",children:Object(d.jsx)(h,{leftSense:"homosexual|ADJ",rightSense:"heterosexual|ADJ"})})]})]})},O=function(){return new URLSearchParams(Object(l.f)().search)},p=s(43),m=function(){var e=O(),t=e.get("left"),s=e.get("right"),c=Object(p.a)("".concat(t,"-").concat(s),(function(){return fetch("".concat("https://reddit-words-api.chanind.com","/bias-rank?leftSense=").concat(t,"&rightSense=").concat(s)).then((function(e){return e.json()}))})),n=c.isLoading,r=c.error,i=c.data;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(a.b,{to:"/",className:"float-left",children:"\u2190 back"}),Object(d.jsx)(a.b,{to:"/",className:"text-2xl",children:"Reddit Words"})]}),t&&s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"text-4xl flex justify-center gap-1",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"pr-2",children:x(t).word}),Object(d.jsx)("span",{className:"text-gray-500 text-xl hidden md:inline",children:x(t).pos})]}),Object(d.jsx)("div",{className:"px-2",children:"\u2212"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"pr-2",children:x(s).word}),Object(d.jsx)("span",{className:"text-gray-500 text-xl hidden md:inline",children:x(s).pos})]})]}),r&&Object(d.jsxs)("div",{className:"my-7 p-3 rounded border border-red-500 text-red-400 inline-block",children:["\u26a0 ",r.message]}),n&&Object(d.jsx)("div",{className:"animate-spin text-4xl",children:"\u25d1"}),i&&Object(d.jsxs)("div",{className:"grid grid-cols-2 max-w-screen-lg mx-auto",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"py-5 text-xl",children:["Most ",Object(d.jsx)("b",{children:x(t).word})," words"]}),Object(d.jsx)("div",{children:i.topLeftSenses.map((function(e){var t=Object(o.a)(e,1)[0];return Object(d.jsxs)("div",{className:"text-gray-300 pb-1",children:[x(t).word,Object(d.jsx)("span",{className:"text-gray-400 pl-1 text-sm hidden md:inline",children:x(t).pos})]})}))})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"py-5 text-xl",children:["Most ",Object(d.jsx)("b",{children:x(s).word})," words"]}),Object(d.jsx)("div",{children:i.topRightSenses.map((function(e){var t=Object(o.a)(e,1)[0];return Object(d.jsxs)("div",{className:"text-gray-300 pb-1",children:[x(t).word,Object(d.jsx)("span",{className:"text-gray-400 pl-1 text-sm hidden md:inline",children:x(t).pos})]})}))})]})]})]}):Object(d.jsx)("div",{className:"text-4xl",children:"Oh no! Page not found :'("})]})},f=s(42),u=s(25),N=new f.a;var g=function(){return Object(d.jsx)(u.a,{client:N,children:Object(d.jsxs)("div",{className:"App text-blue-50",children:[Object(d.jsx)(j,{}),Object(d.jsx)(a.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(b,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/diff",children:Object(d.jsx)(m,{})})]})})]})})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),v()}},[[40,1,2]]]);
//# sourceMappingURL=main.5f3ffb64.chunk.js.map