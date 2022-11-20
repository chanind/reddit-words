(this["webpackJsonpreddit-words"]=this["webpackJsonpreddit-words"]||[]).push([[0],{65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},74:function(e,t,s){},94:function(e,t,s){},98:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),r=s(28),a=s.n(r),i=(s(65),s(66),s(16)),o=s(9),l=(s(67),s(1)),d=function(){return Object(l.jsx)("a",{href:"https://github.com/chanind/reddit-words",className:"OctocatCorner","aria-label":"View source on GitHub",children:Object(l.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#fff",color:"#282c34",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true",children:[Object(l.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(l.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"OctocatCorner-arm"}),Object(l.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"OctocatCorner-body"})]})})},h=s(11),j=function(e){var t=e.split("|"),s=Object(h.a)(t,2),n=s[0],c=s[1];return{word:n.replace(/_/gi," ").replace("&amp;","&").replace("&amp;","&").replace("&amp","&"),pos:c}},b=function(e){var t=e.leftSense,s=e.rightSense,n="/diff?left=".concat(t,"&right=").concat(s),c=j(t),r=j(s);return Object(l.jsxs)(i.b,{to:n,className:"flex p-3 rounded border border-blue-100 bg-opacity-5 bg-gray-400 hover:bg-opacity-10",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"inline-block pr-1",children:c.word}),Object(l.jsx)("span",{className:"text-gray-400 text-xs",children:c.pos})]}),Object(l.jsx)("div",{className:"px-2",children:" \u2212 "}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"inline-block pr-1",children:r.word}),Object(l.jsx)("span",{className:"text-gray-400 text-xs",children:r.pos})]})]})},x=function(e){var t=e.title,s=e.children;return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"text-xl mb-2",children:t}),Object(l.jsx)("p",{className:"text-sm text-gray-400",children:s})]})},m=function(){return Object(l.jsxs)("div",{className:"text-left",children:[Object(l.jsx)("div",{className:"my-10",children:Object(l.jsxs)(x,{title:"How does this work?",children:['This works by subtracting 2 word vectors to determine a concept which represents the difference between those 2 words, and then finds the 100 words in the dataset which have the maximum and minimum scores when projected along that concept dimension. For example, we can get at the concept of "happiness" by subtracting the word vector for "happy" and the word vector for "unhappy". Then, we can find the most and least "happy" words in the dataset by projecting the remaining word vectors along that "happiness" direction.',Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),'This can be give insight in two ways. For words where the difference between the words is a clear concept, ex "happiness" = "happy" - "unhappy", the words listed are what Reddit has taught the sense vectors about the concept of "happiness". For words whose difference has a less obvious meaning, ex "Obama" - "Trump" = ?, looking at the listed words can give an idea of what the sense vectors trained on Reddit think the difference is between these 2 words.']})}),Object(l.jsx)("div",{className:"my-10",children:Object(l.jsxs)(x,{title:"Where does this data come from?",children:["The dataset used is"," ",Object(l.jsx)("a",{className:"underline",href:"https://github.com/explosion/sense2vec#pretrained-vectors",children:"Spacy's official pretrained sense2vec sense vectors"})," ","trained on a dump of Reddit from 2019."," ",Object(l.jsx)("a",{className:"underline",href:"https://spacy.io/",children:"Spacy"})," ","is one of the most popular NLP frameworks for Python."]})}),Object(l.jsx)("div",{className:"my-10",children:Object(l.jsxs)(x,{title:"What are sense vectors, and what are they used for?",children:["Sense vectors, or"," ",Object(l.jsx)("a",{className:"underline",href:"https://en.wikipedia.org/wiki/Word_embedding",target:"_blank",rel:"noreferrer",children:"word vectors"}),", are a technique used to create numerical vectors from words. Sense vectors are just word vectors that also take into account part of speech of the word as well. These vectors capture features of words mathematically, so it's possible to use these pre-trained word vectors as an input to other AI models and have those models gain the insight that these vectors have already learned. However, these word vectors also learn the inherit biases and idiosyncracies of the data they were trained on, so it's important to be careful when using word vectors that you're not accidentally importing a lot of biases into your model. If you're using word vectors trained on Reddit data, for example, your model is going to have learned some pretty strange stuff!"]})}),Object(l.jsx)("div",{className:"my-10",children:Object(l.jsxs)(x,{title:"I have an idea to improve this project!",children:["Contributions are always welcome! You can check out the code in the"," ",Object(l.jsx)("a",{className:"underline",href:"https://github.com/chanind/reddit-words",children:"reddit-words github repo"})," ","and open pull requests and issues there."]})}),Object(l.jsx)("div",{className:"my-10",children:Object(l.jsxs)(x,{title:"Work with me!",children:["I'm interested in doing a PhD in NLP in 2022, and would love to work with researchers doing NLP work in the meantime. Please reach out at"," ",Object(l.jsx)("a",{className:"underline",href:"mailto:chanindav@gmail.com",children:"chanindav@gmail.com"})," ","if you have a project I can be a part of."]})})]})},p=(s(74),s(37)),u=s.n(p),O=function(e){var t=e.isOpen,s=e.onClose,n=e.children,c=e.title;return Object(l.jsx)(u.a,{isOpen:t,onRequestClose:s,style:{overlay:{background:"rgba(0, 0, 0, 0.5)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",overflow:"visible",padding:0,border:"none"}},children:Object(l.jsxs)("div",{className:"bg-gray-800 p-3 rounded border border-gray-500 max-w-full md:max-w-4xl",children:[Object(l.jsx)("button",{onClick:s,className:"absolute top-0 right-0 text-gray-500 hover:text-gray-100 text-xl px-4 py-2",children:"\xd7"}),Object(l.jsx)("h2",{className:"text-2xl mb-5 text-gray-100",children:c}),n]})})},f=s(34),v=s(101),g=s(5),w=s(48),N=s(58),y="https://reddit-words-wjr62wruta-lz.a.run.app",C=function(e){return Object(l.jsx)(g.l.DropdownIndicator,Object(f.a)(Object(f.a)({},e),{},{children:Object(l.jsx)(N.a,{className:"h-5 w-5"})}))},S=function(e){var t=e.onChange,s=Object(n.useState)(""),c=Object(h.a)(s,2),r=c[0],a=c[1],i=Object(n.useState)(null),o=Object(h.a)(i,2),d=o[0],j=o[1],b=Object(n.useState)(null),x=Object(h.a)(b,2),m=x[0],p=x[1],u=Object(n.useState)(null),O=Object(h.a)(u,2),g=O[0],N=O[1],S=Object(v.a)("autocomplete-".concat(r),(function(){return fetch("".concat(y,"/autocomplete?query=").concat(encodeURIComponent(r))).then((function(e){return e.json()}))})),k=S.isLoading,P=S.error,L=S.data,E=function(e){p(e.senses[0].pos),j(e.term),N(e.senses.map((function(e){return e.pos})));var s=e.term+"|"+e.senses[0].pos;t(s)},R=g?g.map((function(e){return{label:e,value:e}})):null;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("div",{style:{minWidth:"200px"},children:Object(l.jsx)(w.a,{options:null===L||void 0===L?void 0:L.map((function(e){var t=e.term;return{label:t,value:t}})),isLoading:k,placeholder:"Search...",components:{DropdownIndicator:C},onChange:function(e){var t;if(a(null!==(t=null===e||void 0===e?void 0:e.value)&&void 0!==t?t:""),e&&L){var s=L.find((function(t){return t.term===e.value}));s&&E(s)}},onInputChange:function(e){""!==e?a(e):d&&a(d)},styles:{menu:function(e){return Object(f.a)(Object(f.a)({},e),{},{display:""===r?"none":"block"})}}})}),Object(l.jsx)("div",{style:{minWidth:"130px"},className:"pl-2",children:R&&Object(l.jsx)(w.a,{options:R,value:R.find((function(e){return e.value===m})),onChange:function(e){return p(e?e.value:null)}})})]}),P&&Object(l.jsxs)("span",{className:"text-red",children:["Error: ",P]})]})},k=function(e){return encodeURIComponent(e.replace(/\s+/gi,"_"))},P=function(e){var t=e.isOpen,s=e.onClose,c=Object(n.useState)(null),r=Object(h.a)(c,2),a=r[0],o=r[1],d=Object(n.useState)(null),j=Object(h.a)(d,2),b=j[0],x=j[1];Object(n.useEffect)((function(){t||(o(null),x(null))}),[t]);var m=a&&b?"/diff?left=".concat(k(a),"&right=").concat(k(b)):"";return Object(l.jsxs)(O,{title:"Create your Own Dimension",isOpen:t,onClose:s,children:[Object(l.jsxs)("p",{className:"text-gray-400",children:["Choose 2 words to subtract to create an analysis dimension."," ",Object(l.jsx)("span",{className:"hidden md:inline",children:"The results will be other words whose difference is like the difference between the words you select here."})]}),Object(l.jsxs)("div",{className:"flex flex-wrap md:flex-nowrap mt-6 justify-between items-center",children:[Object(l.jsxs)("div",{className:"m-3",children:[Object(l.jsx)("div",{className:"text-xs mb-1 text-gray-100",children:"Left word"}),Object(l.jsx)(S,{onChange:o})]}),Object(l.jsxs)("div",{className:"m-3",children:[Object(l.jsx)("div",{className:"text-xs mb-1 text-gray-100",children:"Right word"}),Object(l.jsx)(S,{onChange:x})]})]}),Object(l.jsx)("hr",{className:"my-5 border-1 border-gray-500"}),Object(l.jsx)("div",{className:"flex",children:a&&b?Object(l.jsx)(i.b,{to:m,className:"block p-3 px-10 rounded border border-blue-300 bg-gray-400 bg-opacity-5 hover:bg-opacity-10 text-blue-300",children:"Explore Dimension"}):Object(l.jsx)("span",{className:"block p-3 px-10 rounded border border-gray-500 text-gray-500 select-none",children:"Explore Dimension"})})]})},L=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),s=t[0],c=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"p-2",children:[Object(l.jsx)("h1",{className:"text-6xl p-10",children:"Reddit Words"}),Object(l.jsxs)("p",{children:["What did"," ",Object(l.jsx)("a",{href:"https://github.com/explosion/sense2vec",className:"underline",children:"Spacy's offical sense2vec"})," ","word vectors learn about the world from Reddit in 2019? Click on a dimension below to find out!"]}),Object(l.jsxs)("div",{className:"flex flex-wrap justify-center pt-10 max-w-screen-lg mx-auto ",children:[Object(l.jsx)("div",{className:"p-2",children:Object(l.jsx)(b,{leftSense:"Communism|NOUN",rightSense:"Capitalism|NOUN"})}),Object(l.jsx)("div",{className:"p-2",children:Object(l.jsx)(b,{leftSense:"east|NOUN",rightSense:"west|NOUN"})}),Object(l.jsx)("div",{className:"p-2",children:Object(l.jsx)(b,{leftSense:"north|NOUN",rightSense:"south|NOUN"})}),Object(l.jsx)("div",{className:"p-2",children:Object(l.jsx)(b,{leftSense:"USA|GPE",rightSense:"France|GPE"})}),Object(l.jsx)("div",{className:"p-2",children:Object(l.jsx)(b,{leftSense:"USA|GPE",rightSense:"China|GPE"})}),Object(l.jsx)("div",{className:"p-2",children:Object(l.jsx)(b,{leftSense:"smart|ADJ",rightSense:"stupid|ADJ"})}),Object(l.jsx)("div",{className:"p-2",children:Object(l.jsx)(b,{leftSense:"Tokyo|GPE",rightSense:"New_York|GPE"})}),Object(l.jsx)("div",{className:"p-2",children:Object(l.jsx)(b,{leftSense:"happy|ADJ",rightSense:"unhappy|ADJ"})}),Object(l.jsx)("div",{className:"p-2",children:Object(l.jsx)(b,{leftSense:"Trump|PERSON",rightSense:"Obama|PERSON"})}),Object(l.jsx)("div",{className:"p-2",children:Object(l.jsx)(b,{leftSense:"North_Korea|GPE",rightSense:"South_Korea|GPE"})})]}),Object(l.jsx)("div",{className:"my-10 mx-auto IntroPage-textDivider",children:Object(l.jsx)("span",{className:"bg-gray-800 px-2",children:"or"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){return c(!0)},className:"p-3 px-10 rounded border border-blue-300 bg-opacity-5 bg-gray-400 hover:bg-opacity-10 text-blue-300",children:"Create your Own Dimension"})}),Object(l.jsx)("div",{className:"pt-10 max-w-screen-lg mx-auto ",children:Object(l.jsx)(m,{})})]}),Object(l.jsx)(P,{isOpen:s,onClose:function(){return c(!1)}})]})},E=function(){return new URLSearchParams(Object(o.f)().search)},R=(s(94),s(56)),D=function(){var e=E(),t=e.get("left"),s=e.get("right"),n=Object(v.a)("".concat(t,"-").concat(s),(function(){return fetch("".concat(y,"/bias-rank?leftSense=").concat(t,"&rightSense=").concat(s)).then((function(e){return e.json()}))})),c=n.isLoading,r=n.error,a=n.data;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"my-5 mx-3 md:mx-10 md:mb-10 relative",children:[Object(l.jsxs)(i.b,{to:"/",className:"DiffPage-backLink left-0 absolute top-0",children:[Object(l.jsx)("span",{className:"DiffPage-backLinkArrow",children:"\u2190"})," back"]}),Object(l.jsx)(i.b,{to:"/",className:"text-2xl",children:"Reddit Words"})]}),t&&s?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"text-4xl flex justify-center gap-1",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"pr-2",children:j(t).word}),Object(l.jsx)("span",{className:"text-gray-400 text-xl hidden md:inline",children:j(t).pos})]}),Object(l.jsx)("div",{className:"px-2",children:"\u2212"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"pr-2",children:j(s).word}),Object(l.jsx)("span",{className:"text-gray-400 text-xl hidden md:inline",children:j(s).pos})]})]}),r&&Object(l.jsxs)("div",{className:"my-7 p-3 rounded border border-red-500 text-red-400 inline-block",children:["\u26a0 ",r.message]}),c&&Object(l.jsx)("div",{className:"flex justify-center mt-10",children:Object(l.jsx)(R.ClapSpinner,{frontColor:"#3B82F6"})}),a&&Object(l.jsxs)("div",{className:"grid grid-cols-2 max-w-screen-lg mx-auto",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{className:"py-5 text-xl",children:["\u2190 ",Object(l.jsx)("span",{className:"hidden md:inline",children:"towards"})," ",Object(l.jsx)("b",{children:j(t).word})]}),Object(l.jsx)("div",{children:a.topLeftSenses.map((function(e){var t=Object(h.a)(e,1)[0];return Object(l.jsxs)("div",{className:"text-gray-300 pb-1",children:[j(t).word,Object(l.jsx)("span",{className:"text-gray-400 pl-1 text-sm hidden md:inline",children:j(t).pos})]})}))})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{className:"py-5 text-xl",children:[Object(l.jsx)("span",{className:"hidden md:inline",children:"towards"})," ",Object(l.jsx)("b",{children:j(s).word})," \u2192"]}),Object(l.jsx)("div",{children:a.topRightSenses.map((function(e){var t=Object(h.a)(e,1)[0];return Object(l.jsxs)("div",{className:"text-gray-300 pb-1",children:[j(t).word,Object(l.jsx)("span",{className:"text-gray-400 pl-1 text-sm hidden md:inline",children:j(t).pos})]})}))})]})]})]}):Object(l.jsx)("div",{className:"text-4xl",children:"Oh no! Page not found :'("})]})},I=s(100),F=s(55),T=new I.a;var U=function(){return Object(l.jsx)(F.a,{client:T,children:Object(l.jsxs)("div",{className:"App text-blue-50",children:[Object(l.jsx)(d,{}),Object(l.jsx)(i.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(L,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/diff",children:Object(l.jsx)(D,{})})]})})]})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,102)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(U,{})}),document.getElementById("root")),u.a.setAppElement("#root"),fetch(y),A()}},[[98,1,2]]]);
//# sourceMappingURL=main.c25271b4.chunk.js.map