(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function o(t){return s.p+"js/"+({blog:"blog"}[t]||t)+"."+{blog:"9d5b5a43"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,n[1](c)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("5f5b"),r=n("b1e0"),o=(n("f9e3"),n("2dd8"),n("fb98"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),s=[],l=n("2877"),c={},u=Object(l["a"])(c,o,s,!1,null,null,null),d=u.exports,p=(n("d3b7"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Navbar"),n("HomeSection"),n("WorkSection"),n("AboutSection"),n("SkillsSection"),n("ProjectsSection")],1)},f=[],b=n("9d8d"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("b-container",{attrs:{fluid:""}},[n("b-row",{attrs:{id:"row-title"}},[n("b-col",{attrs:{md:"7",id:"title"}},[n("div",{staticClass:"title-container"},[n("p",{staticClass:"sub-heading"},[t._v("Hi, I am")]),n("p",{staticClass:"heading"},[t._v(t._s(t.details.name))]),n("p",{staticClass:"sub-heading",staticStyle:{"text-transform":"uppercase"}},[t._v("Data Scientist & Web Developer")]),n("a",{staticClass:"btn btn-primary",attrs:{href:"/resume.pdf",target:"_vblank"}},[t._v(" Download Resume "),n("span",{staticClass:"fa fa-download"})]),n("div",{staticClass:"container-fluid",attrs:{id:"link-container"}},[n("a",{staticClass:"fab fa-github",attrs:{href:t.details.githubLink,target:"_vblank"}}),n("a",{staticClass:"fab fa-linkedin",attrs:{href:t.details.linkedinLink,target:"_vblank"}})])])]),n("b-col",{staticClass:"d-none d-md-block",attrs:{md:"5",id:"side-shape"}})],1)],1)],1)},v=[],g={name:"Shivam Kaushik",email:"shivam.kaushik73@gmail.com",githubLink:"https://github.com/mythrex",linkedinLink:"https://www.linkedin.com/in/shivamkaushik73/",twitterLink:"https://twitter.com/shivamkaushik73"},k={data:function(){return{details:g}}},_=k,w=Object(l["a"])(_,h,v,!1,null,null,null),y=w.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"work"}},[n("b-container",[n("b-row",{attrs:{align:"center"}},[n("h1",[t._v("What I do?")])]),n("b-row",{attrs:{id:"work-container"}},t._l(t.items,(function(t){return n("b-col",{key:t.text,attrs:{sm:"12",md:"4"}},[n("Card",{attrs:{title:t.title,text:t.text,icon:t.icon}})],1)})),1)],1)],1)},j=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"work-card"},[n("b-card",{attrs:{title:t.title}},[n("span",{class:t.getClass(t.icon)}),n("b-card-text",[t._v(" "+t._s(t.text)+" ")])],1)],1)},C=[],L={props:{text:String,title:String,icon:String},methods:{getClass:function(t){return"card-icon ".concat(t)}}},I=L,O=Object(l["a"])(I,x,C,!1,null,null,null),P=O.exports,T={components:{Card:P},data:function(){return{items:[{title:"Deep Learning",icon:"fas fa-robot",text:"I love deep learning and math behind it. I love making projects with deeplearning. I have done many projects involving deeplearning. One of which was at ISRO for automatic model generation using DARTS."},{title:"Visualization",icon:"fas fa-chart-pie",text:"I can make visualizations for explaining intuition behind the concepts. I love explaining hard things in simplest manner possible."},{title:"Javascript",icon:"fab fa-js-square",text:"I have been working with JS for quite a while. I use JS to showcase the research I do."}]}}},E=T,$=Object(l["a"])(E,S,j,!1,null,null,null),D=$.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"about"}},[n("b-container",[n("b-row",{attrs:{align:"center"}},[n("h1",[t._v("About Me")])]),n("b-row",{attrs:{id:"about-container"}},[n("div",[n("b-card",[n("b-row",[n("b-col",{attrs:{sm:"12",md:"4"}},[n("b-img",{attrs:{src:"/profile_pic.jpg",alt:"Responsive image",rounded:"circle"}})],1),n("b-col",{attrs:{sm:"12",md:"8"}},[n("p",[t._v(" I am a B.Tech. Graduate from Delhi, India. I love teaching physics and maths. After my graduation, I taught physics to underprivileged students. I am a great beleiver of the quote \"If you can't explain it simply, you don't understand it well enough.\". That is what I have done during my very short teaching career. Apart from that I love coding and by fate I landed an Internship at Indian Space Research Organisation where I was introduced to Data Science. Rest is history, now I taught my self Data Science and Math behind it. Now I am switching to data science as a full time job. My goal is to work on exciting projects and cutting edge Research. ")])])],1)],1)],1)])],1)],1)},M=[],R={},V=Object(l["a"])(R,A,M,!1,null,null,null),q=V.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"skills"}},[n("b-container",[n("b-row",[n("h1",[t._v("Skills")])]),n("b-row",[n("div",{attrs:{id:"skills-container"}},[n("img",{attrs:{src:"/pytorch.png",alt:"Pytorch"}}),n("img",{attrs:{src:"/tf.png",alt:"tf"}}),n("img",{attrs:{src:"/node.png",alt:"node"}}),n("img",{attrs:{src:"/vue.png",alt:"vue"}}),n("img",{attrs:{src:"/numpy.png",alt:"numpy"}}),n("img",{attrs:{src:"/matplotlib.svg",alt:"matplotlib"}}),n("img",{attrs:{src:"/fast_api.png",alt:"fast_api"}})])])],1)],1)},J=[],W={},B=Object(l["a"])(W,H,J,!1,null,null,null),N=B.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"projects"}},[n("b-container",[n("b-row",[n("h1",[t._v("Projects")])]),n("b-row",[n("div",{attrs:{id:"projects-container"}},t._l(t.projects,(function(t){return n("ProjectCard",{key:t.text,attrs:{title:t.title,text:t.text,githubLink:t.githubLink,colabLink:t.colabLink,demoLink:t.demoLink,mediaType:t.mediaType,mediaLink:t.mediaLink}})})),1)])],1)],1)},G=[],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-card card col col-sm-12"},[n("b-row",[n("b-col",{attrs:{sm:"12",md:"8"}},[n("div",{staticClass:"body"},[n("h3",[t._v(t._s(t.title))]),n("p",[t._v(" "+t._s(t.text)+" ")]),n("div",{staticClass:"links"},[t.demoLink?n("a",{staticClass:"btn btn-demo",attrs:{href:t.demoLink}},[t._v("Demo ")]):t._e(),t.colabLink?n("a",{staticClass:"btn btn-colab",attrs:{href:t.colabLink}},[n("span",{staticClass:"fab fa-python"}),t._v(" Colab notebook")]):t._e(),t.githubLink?n("a",{staticClass:"btn btn-github",attrs:{href:t.githubLink}},[n("span",{staticClass:"fab fa-github"}),t._v(" Github")]):t._e()])])]),n("b-col",{attrs:{sm:"12",md:"4"}},["image"===t.mediaType.toLowerCase()?n("b-img",{staticClass:"card-media",attrs:{src:t.mediaLink,alt:"img"}}):t._e(),"video"===t.mediaType.toLowerCase()?n("video",{staticClass:"card-media",attrs:{controls:""}},[n("source",{attrs:{src:t.mediaLink,type:"video/mp4"}}),t._v(" Your browser does not support the video tag. ")]):t._e()],1)],1)],1)},Y=[],F={props:{text:String,title:String,githubLink:String,colabLink:String,demoLink:String,mediaType:String,mediaLink:String}},Q=F,U=Object(l["a"])(Q,K,Y,!1,null,null,null),X=U.exports,Z=[{title:"Title",text:"lorem ipsum dolor idor",githubLink:"#",colabLink:"#",demoLink:"#",mediaType:"image",mediaLink:"https://picsum.photos/125/125/?image=58"}],tt={components:{ProjectCard:X},data:function(){return{projects:Z}}},et=tt,nt=Object(l["a"])(et,z,G,!1,null,null,null),at=nt.exports,it={components:{Navbar:b["a"],HomeSection:y,WorkSection:D,AboutSection:q,SkillsSection:N,ProjectsSection:at}},rt=it,ot=Object(l["a"])(rt,m,f,!1,null,null,null),st=ot.exports;a["default"].use(p["a"]);var lt=[{path:"/",name:"Home",component:st},{path:"/blog",name:"Blog",component:function(){return n.e("blog").then(n.bind(null,"fd3f"))}}],ct=new p["a"]({mode:"history",base:"/",routes:lt}),ut=ct,dt=n("2f62");a["default"].use(dt["a"]);var pt=new dt["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["default"].config.productionTip=!1,a["default"].use(i["a"]),a["default"].use(r["a"]),new a["default"]({router:ut,store:pt,render:function(t){return t(d)}}).$mount("#app")},"9d8d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{type:"dark",variant:"dark",fixed:"top"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"/"}},[t._v("Home")]),n("b-nav-item",{attrs:{href:"#work"},on:{click:t.scrollIntoView}},[t._v("Work")]),n("b-nav-item",{attrs:{href:"#about"},on:{click:t.scrollIntoView}},[t._v("About")]),n("b-nav-item",{attrs:{href:"#skills"},on:{click:t.scrollIntoView}},[t._v("Skills")]),n("b-nav-item",{attrs:{href:"#projects"},on:{click:t.scrollIntoView}},[t._v("Projects")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:"/blog"}},[t._v("Blog")])],1)])],1)],1)},i=[],r={methods:{scrollIntoView:function(t){t.preventDefault();var e=t.target.getAttribute("href"),n=e?document.querySelector(e):null;n&&n.scrollIntoView(n.offsetTop)}},mounted:function(){},data:function(){return{}}},o=r,s=n("2877"),l=Object(s["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports},fb98:function(t,e,n){}});
//# sourceMappingURL=app.2c022be6.js.map