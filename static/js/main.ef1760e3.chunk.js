(this["webpackJsonpreddit-words"]=this["webpackJsonpreddit-words"]||[]).push([[0],{65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},74:function(e,t,s){},94:function(e,t,s){},98:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),r=s(28),a=s.n(r),i=(s(65),s(66),s(16)),l=s(9),o=(s(67),s(1)),d=function(){return Object(o.jsx)("a",{href:"https://github.com/chanind/reddit-words",className:"OctocatCorner","aria-label":"View source on GitHub",children:Object(o.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#fff",color:"#282c34",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true",children:[Object(o.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(o.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"OctocatCorner-arm"}),Object(o.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"OctocatCorner-body"})]})})},j=s(11),h=function(e){var t=e.split("|"),s=Object(j.a)(t,2),n=s[0],c=s[1];return{word:n.replace(/_/gi," ").replace("&amp;","&").replace("&amp;","&").replace("&amp","&"),pos:c}},b=function(e){var t=e.leftSense,s=e.rightSense,n="/diff?left=".concat(t,"&right=").concat(s),c=h(t),r=h(s);return Object(o.jsxs)(i.b,{to:n,className:"flex p-3 rounded border border-blue-100 bg-opacity-5 bg-gray-400 hover:bg-opacity-10",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"inline-block pr-1",children:c.word}),Object(o.jsx)("span",{className:"text-gray-400 text-xs",children:c.pos})]}),Object(o.jsx)("div",{className:"px-2",children:" \u2212 "}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"inline-block pr-1",children:r.word}),Object(o.jsx)("span",{className:"text-gray-400 text-xs",children:r.pos})]})]})},x=function(e){var t=e.title,s=e.children;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"text-xl mb-2",children:t}),Object(o.jsx)("p",{className:"text-sm text-gray-400",children:s})]})},m=function(){return Object(o.jsxs)("div",{className:"text-left",children:[Object(o.jsx)("div",{className:"my-10",children:Object(o.jsxs)(x,{title:"How does this work?",children:['This works by subtracting 2 word vectors to determine a concept which represents the difference between those 2 words, and then finds the 100 words in the dataset which have the maximum and minimum scores when projected along that concept dimension. For example, we can get at the concept of "happiness" by subtracting the word vector for "happy" and the word vector for "unhappy". Then, we can find the most and least "happy" words in the dataset by projecting the remaining word vectors along that "happiness" direction.',Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),'This can be give insight in two ways. For words where the difference between the words is a clear concept, ex "happiness" = "happy" - "unhappy", the words listed are what Reddit has taught the sense vectors about the concept of "happiness". For words whose difference has a less obvious meaning, ex "Obama" - "Trump" = ?, looking at the listed words can give an idea of what the sense vectors trained on Reddit think the difference is between these 2 words.']})}),Object(o.jsx)("div",{className:"my-10",children:Object(o.jsxs)(x,{title:"Where does this data come from?",children:["The dataset used is"," ",Object(o.jsx)("a",{className:"underline",href:"https://github.com/explosion/sense2vec#pretrained-vectors",children:"Spacy's official pretrained sense2vec sense vectors"})," ","trained on a dump of Reddit from 2019."]})}),Object(o.jsx)("div",{className:"my-10",children:Object(o.jsxs)(x,{title:"I have an idea to improve this project!",children:["Contributions are always welcome! You can check out the code in the"," ",Object(o.jsx)("a",{className:"underline",href:"https://github.com/chanind/reddit-words",children:"reddit-words github repo"})," ","and open pull requests and issues there."]})}),Object(o.jsx)("div",{className:"my-10",children:Object(o.jsxs)(x,{title:"Work with me!",children:["I'm interested in doing a PhD in NLP in 2022, and would love to work with researchers doing NLP work in the meantime. Please reach out at"," ",Object(o.jsx)("a",{className:"underline",href:"mailto:chanindav@gmail.com",children:"chanindav@gmail.com"})," ","if you have a project I can be a part of."]})})]})},p=(s(74),s(37)),u=s.n(p),O=function(e){var t=e.isOpen,s=e.onClose,n=e.children,c=e.title;return Object(o.jsx)(u.a,{isOpen:t,onRequestClose:s,style:{overlay:{background:"rgba(0, 0, 0, 0.5)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",overflow:"visible",padding:0,border:"none"}},children:Object(o.jsxs)("div",{className:"bg-gray-800 p-3 rounded border border-gray-500 max-w-full md:max-w-4xl",children:[Object(o.jsx)("button",{onClick:s,className:"absolute top-0 right-0 text-gray-500 hover:text-gray-100 text-xl px-4 py-2",children:"\xd7"}),Object(o.jsx)("h2",{className:"text-2xl mb-5 text-gray-100",children:c}),n]})})},f=s(34),v=s(101),g=s(5),N=s(48),w=s(58),y="https://reddit-words-api.chanind.com",C=function(e){return Object(o.jsx)(g.l.DropdownIndicator,Object(f.a)(Object(f.a)({},e),{},{children:Object(o.jsx)(w.a,{className:"h-5 w-5"})}))},S=function(e){var t=e.onChange,s=Object(n.useState)(""),c=Object(j.a)(s,2),r=c[0],a=c[1],i=Object(n.useState)(null),l=Object(j.a)(i,2),d=l[0],h=l[1],b=Object(n.useState)(null),x=Object(j.a)(b,2),m=x[0],p=x[1],u=Object(n.useState)(null),O=Object(j.a)(u,2),g=O[0],w=O[1],S=Object(v.a)("autocomplete-".concat(r),(function(){return fetch("".concat(y,"/autocomplete?query=").concat(encodeURIComponent(r))).then((function(e){return e.json()}))})),k=S.isLoading,P=S.error,L=S.data,E=function(e){p(e.senses[0].pos),h(e.term),w(e.senses.map((function(e){return e.pos})));var s=e.term+"|"+e.senses[0].pos;t(s)},D=g?g.map((function(e){return{label:e,value:e}})):null;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"flex",children:[Object(o.jsx)("div",{style:{minWidth:"200px"},children:Object(o.jsx)(N.a,{options:null===L||void 0===L?void 0:L.map((function(e){var t=e.term;return{label:t,value:t}})),isLoading:k,placeholder:"Search...",components:{DropdownIndicator:C},onChange:function(e){var t;if(a(null!==(t=null===e||void 0===e?void 0:e.value)&&void 0!==t?t:""),e&&L){var s=L.find((function(t){return t.term===e.value}));s&&E(s)}},onInputChange:function(e){""!==e?a(e):d&&a(d)},styles:{menu:function(e){return Object(f.a)(Object(f.a)({},e),{},{display:""===r?"none":"block"})}}})}),Object(o.jsx)("div",{style:{minWidth:"130px"},className:"pl-2",children:D&&Object(o.jsx)(N.a,{options:D,value:D.find((function(e){return e.value===m})),onChange:function(e){return p(e?e.value:null)}})})]}),P&&Object(o.jsxs)("span",{className:"text-red",children:["Error: ",P]})]})},k=function(e){var t=e.isOpen,s=e.onClose,c=Object(n.useState)(null),r=Object(j.a)(c,2),a=r[0],l=r[1],d=Object(n.useState)(null),h=Object(j.a)(d,2),b=h[0],x=h[1];Object(n.useEffect)((function(){t||(l(null),x(null))}),[t]);var m="/diff?left=".concat(a,"&right=").concat(b);return Object(o.jsxs)(O,{title:"Create your Own Dimension",isOpen:t,onClose:s,children:[Object(o.jsxs)("p",{className:"text-gray-400",children:["Choose 2 words to subtract to create an analysis dimension."," ",Object(o.jsx)("span",{className:"hidden md:inline",children:"The results will be other words whose difference is like the difference between the words you select here."})]}),Object(o.jsxs)("div",{className:"flex flex-wrap md:flex-nowrap mt-6 justify-between items-center",children:[Object(o.jsxs)("div",{className:"m-3",children:[Object(o.jsx)("div",{className:"text-xs mb-1 text-gray-100",children:"Left word"}),Object(o.jsx)(S,{onChange:l})]}),Object(o.jsxs)("div",{className:"m-3",children:[Object(o.jsx)("div",{className:"text-xs mb-1 text-gray-100",children:"Right word"}),Object(o.jsx)(S,{onChange:x})]})]}),Object(o.jsx)("hr",{className:"my-5 border-1 border-gray-500"}),Object(o.jsx)("div",{className:"flex",children:a&&b?Object(o.jsx)(i.b,{to:m,className:"block p-3 px-10 rounded border border-blue-300 bg-gray-400 bg-opacity-5 hover:bg-opacity-10 text-blue-300",children:"Explore Dimension"}):Object(o.jsx)("span",{className:"block p-3 px-10 rounded border border-gray-500 text-gray-500 select-none",children:"Explore Dimension"})})]})},P=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),s=t[0],c=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"p-2",children:[Object(o.jsx)("h1",{className:"text-6xl p-10",children:"Reddit Words"}),Object(o.jsxs)("p",{children:["What did"," ",Object(o.jsx)("a",{href:"https://github.com/explosion/sense2vec",className:"underline",children:"Spacy's offical sense2vec"})," ","word vectors learn about the world from Reddit in 2019? Click on a dimension below to find out!"]}),Object(o.jsxs)("div",{className:"flex flex-wrap justify-center pt-10 max-w-screen-lg mx-auto ",children:[Object(o.jsx)("div",{className:"p-2",children:Object(o.jsx)(b,{leftSense:"Communism|NOUN",rightSense:"Capitalism|NOUN"})}),Object(o.jsx)("div",{className:"p-2",children:Object(o.jsx)(b,{leftSense:"east|NOUN",rightSense:"west|NOUN"})}),Object(o.jsx)("div",{className:"p-2",children:Object(o.jsx)(b,{leftSense:"north|NOUN",rightSense:"south|NOUN"})}),Object(o.jsx)("div",{className:"p-2",children:Object(o.jsx)(b,{leftSense:"USA|GPE",rightSense:"France|GPE"})}),Object(o.jsx)("div",{className:"p-2",children:Object(o.jsx)(b,{leftSense:"USA|GPE",rightSense:"China|GPE"})}),Object(o.jsx)("div",{className:"p-2",children:Object(o.jsx)(b,{leftSense:"smart|ADJ",rightSense:"stupid|ADJ"})}),Object(o.jsx)("div",{className:"p-2",children:Object(o.jsx)(b,{leftSense:"Tokyo|GPE",rightSense:"New_York|GPE"})}),Object(o.jsx)("div",{className:"p-2",children:Object(o.jsx)(b,{leftSense:"happy|ADJ",rightSense:"unhappy|ADJ"})}),Object(o.jsx)("div",{className:"p-2",children:Object(o.jsx)(b,{leftSense:"Trump|PERSON",rightSense:"Obama|PERSON"})}),Object(o.jsx)("div",{className:"p-2",children:Object(o.jsx)(b,{leftSense:"North_Korea|GPE",rightSense:"South_Korea|GPE"})})]}),Object(o.jsx)("div",{className:"my-10 mx-auto IntroPage-textDivider",children:Object(o.jsx)("span",{className:"bg-gray-800 px-2",children:"or"})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){return c(!0)},className:"p-3 px-10 rounded border border-blue-300 bg-opacity-5 bg-gray-400 hover:bg-opacity-10 text-blue-300",children:"Create your Own Dimension"})}),Object(o.jsx)("div",{className:"pt-10 max-w-screen-lg mx-auto ",children:Object(o.jsx)(m,{})})]}),Object(o.jsx)(k,{isOpen:s,onClose:function(){return c(!1)}})]})},L=function(){return new URLSearchParams(Object(l.f)().search)},E=(s(94),s(56)),D=function(){var e=L(),t=e.get("left"),s=e.get("right"),n=Object(v.a)("".concat(t,"-").concat(s),(function(){return fetch("".concat(y,"/bias-rank?leftSense=").concat(t,"&rightSense=").concat(s)).then((function(e){return e.json()}))})),c=n.isLoading,r=n.error,a=n.data;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"my-5 mx-3 md:mx-10 md:mb-10 relative",children:[Object(o.jsxs)(i.b,{to:"/",className:"DiffPage-backLink left-0 absolute top-0",children:[Object(o.jsx)("span",{className:"DiffPage-backLinkArrow",children:"\u2190"})," back"]}),Object(o.jsx)(i.b,{to:"/",className:"text-2xl",children:"Reddit Words"})]}),t&&s?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"text-4xl flex justify-center gap-1",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"pr-2",children:h(t).word}),Object(o.jsx)("span",{className:"text-gray-400 text-xl hidden md:inline",children:h(t).pos})]}),Object(o.jsx)("div",{className:"px-2",children:"\u2212"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"pr-2",children:h(s).word}),Object(o.jsx)("span",{className:"text-gray-400 text-xl hidden md:inline",children:h(s).pos})]})]}),r&&Object(o.jsxs)("div",{className:"my-7 p-3 rounded border border-red-500 text-red-400 inline-block",children:["\u26a0 ",r.message]}),c&&Object(o.jsx)("div",{className:"flex justify-center mt-10",children:Object(o.jsx)(E.ClapSpinner,{frontColor:"#3B82F6"})}),a&&Object(o.jsxs)("div",{className:"grid grid-cols-2 max-w-screen-lg mx-auto",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{className:"py-5 text-xl",children:["\u2190 ",Object(o.jsx)("span",{className:"hidden md:inline",children:"towards"})," ",Object(o.jsx)("b",{children:h(t).word})]}),Object(o.jsx)("div",{children:a.topLeftSenses.map((function(e){var t=Object(j.a)(e,1)[0];return Object(o.jsxs)("div",{className:"text-gray-300 pb-1",children:[h(t).word,Object(o.jsx)("span",{className:"text-gray-400 pl-1 text-sm hidden md:inline",children:h(t).pos})]})}))})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{className:"py-5 text-xl",children:[Object(o.jsx)("span",{className:"hidden md:inline",children:"towards"})," ",Object(o.jsx)("b",{children:h(s).word})," \u2192"]}),Object(o.jsx)("div",{children:a.topRightSenses.map((function(e){var t=Object(j.a)(e,1)[0];return Object(o.jsxs)("div",{className:"text-gray-300 pb-1",children:[h(t).word,Object(o.jsx)("span",{className:"text-gray-400 pl-1 text-sm hidden md:inline",children:h(t).pos})]})}))})]})]})]}):Object(o.jsx)("div",{className:"text-4xl",children:"Oh no! Page not found :'("})]})},R=s(100),F=s(55),I=new R.a;var T=function(){return Object(o.jsx)(F.a,{client:I,children:Object(o.jsxs)("div",{className:"App text-blue-50",children:[Object(o.jsx)(d,{}),Object(o.jsx)(i.a,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsx)(P,{})}),Object(o.jsx)(l.a,{exact:!0,path:"/diff",children:Object(o.jsx)(D,{})})]})})]})})},U=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,102)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root")),u.a.setAppElement("#root"),fetch(y),U()}},[[98,1,2]]]);
//# sourceMappingURL=main.ef1760e3.chunk.js.map