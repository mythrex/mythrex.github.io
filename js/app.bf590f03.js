(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-4d9d5e00":"eb53cb4c"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,a[1](c)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("5f5b"),r=a("b1e0"),o=(a("f9e3"),a("2dd8"),a("fb98"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)}),s=[],l=a("2877"),c={},u=Object(l["a"])(c,o,s,!1,null,null,null),d=u.exports,m=(a("d3b7"),a("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("Navbar"),a("HomeSection"),a("AboutSection"),a("WorkSection"),a("SkillsSection"),a("ProjectsSection")],1)},h=[],b=a("9d8d"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("b-container",{attrs:{fluid:""}},[a("b-row",{attrs:{id:"row-title"}},[a("b-col",{attrs:{md:"7",id:"title"}},[a("div",{staticClass:"title-container"},[a("p",{staticClass:"sub-heading"},[t._v("Hi, I am")]),a("p",{staticClass:"heading"},[t._v(t._s(t.details.name))]),a("p",{staticClass:"sub-heading",staticStyle:{"text-transform":"uppercase"}},[t._v(" Data Scientist 2 "),a("a",{attrs:{href:"https://1mg.com/",target:"_vblank"}},[t._v("@Tata 1mg.com")])]),a("a",{staticClass:"btn btn-primary",attrs:{href:"https://drive.google.com/file/d/1xKqSNMLHBviXKUi8r1lsWKynIOL0Zwcf/view?usp=sharing",target:"_vblank"}},[t._v(" Download Resume "),a("span",{staticClass:"fa fa-download"})]),a("div",{staticClass:"container-fluid",attrs:{id:"link-container"}},[a("a",{staticClass:"fab fa-github",attrs:{href:t.details.githubLink,target:"_vblank"}}),a("a",{staticClass:"fab fa-linkedin",attrs:{href:t.details.linkedinLink,target:"_vblank"}})])])]),a("b-col",{staticClass:"d-none d-md-block",attrs:{md:"5",id:"side-shape"}})],1)],1)],1)},g=[],v={name:"Shivam Kaushik",email:"shivam.kaushik73@gmail.com",githubLink:"https://github.com/mythrex",linkedinLink:"https://www.linkedin.com/in/shivamkaushik73/",twitterLink:"https://twitter.com/shivamkaushik73"},k={data:function(){return{details:v}}},_=k,w=Object(l["a"])(_,f,g,!1,null,null,null),y=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"work"}},[a("b-container",[a("b-row",{attrs:{align:"center"}},[a("h1",[t._v("What I do?")])]),a("b-row",{attrs:{id:"work-container"}},t._l(t.items,(function(t){return a("b-col",{key:t.text,attrs:{sm:"12",md:"4"}},[a("Card",{attrs:{title:t.title,text:t.text,icon:t.icon}})],1)})),1)],1)],1)},S=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"work-card"},[a("b-card",{attrs:{title:t.title}},[a("span",{class:t.getClass(t.icon)}),a("b-card-text",[t._v(" "+t._s(t.text)+" ")])],1)],1)},j=[],C={props:{text:String,title:String,icon:String},methods:{getClass:function(t){return"card-icon ".concat(t)}}},I=C,O=Object(l["a"])(I,L,j,!1,null,null,null),T=O.exports,$={components:{Card:T},data:function(){return{items:[{title:"Deep Learning",icon:"fas fa-robot",text:"I love deep learning and math behind it.             I love making projects with deeplearning. I have done many projects involving deeplearning.             One of which I am very proud of is, for automatic model generation using DARTS."},{title:"Deployment",icon:"fab fa-docker",text:"I am capable to carry a work from start to deployment.             If you have an exciting idea I can help."},{title:"Visualization",icon:"fas fa-chart-pie",text:"I can make visualizations for explaining intuition behind the concepts.             I love explaining hard things in simplest manner possible."},{title:"Javascript",icon:"fab fa-js-square",text:"I have been working with JS for quite a while. I use JS to showcase the research I do."}]}}},D=$,P=Object(l["a"])(D,x,S,!1,null,null,null),E=P.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"about"}},[a("b-container",[a("b-row",{attrs:{align:"center"}},[a("h1",[t._v("About Me")])]),a("b-row",{attrs:{id:"about-container"}},[a("div",[a("b-card",[a("b-row",[a("b-col",{attrs:{sm:"12",md:"4"}},[a("b-img",{attrs:{src:"/profile_pic.png",alt:"Responsive image",rounded:"circle"}})],1),a("b-col",{attrs:{sm:"12",md:"8"}},[a("p",[t._v(" I am Shivam Kaushik, currently a Data Scientist @Tata 1mg. Currently working in recommendations and user profiling projects. I can help you from research to deployment. Having worked with a range of modalities of data, I have a good knowledge of how model works. To quench my thirst for machine learning, I constantly participate in Kaggle competions. If you want to make a team in upcoming kaggle competition you may drop me an email at "),a("a",{attrs:{href:"mailto:shivam.kaushik73@gmail.com"}},[t._v("shivam.kaushik73@gmail.com")]),t._v("."),a("br")])])],1)],1)],1)])],1)],1)},M=[],A={},H=Object(l["a"])(A,B,M,!1,null,null,null),R=H.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"skills"}},[a("b-container",[a("b-row",[a("h1",[t._v("Skills")])]),a("b-row",[a("div",{attrs:{id:"skills-container"}},[a("img",{attrs:{src:"/pytorch.png",alt:"Pytorch"}}),a("img",{attrs:{src:"/tf.png",alt:"tf"}}),a("img",{attrs:{src:"/node.png",alt:"node"}}),a("img",{attrs:{src:"/vue.png",alt:"vue"}}),a("img",{attrs:{src:"/numpy.png",alt:"numpy"}}),a("img",{attrs:{src:"/matplotlib.svg",alt:"matplotlib"}}),a("img",{attrs:{src:"/fast_api.png",alt:"fast_api"}})])])],1)],1)},q=[],V={},J=Object(l["a"])(V,K,q,!1,null,null,null),W=J.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"projects"}},[a("b-container",[a("b-row",[a("h1",[t._v("Projects")])]),a("b-row",[a("div",{attrs:{id:"projects-container"}},t._l(t.projects,(function(t){return a("ProjectCard",{key:t.text,attrs:{title:t.title,text:t.text,githubLink:t.githubLink,colabLink:t.colabLink,demoLink:t.demoLink,mediaType:t.mediaType,mediaLink:t.mediaLink}})})),1)])],1)],1)},N=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project-card card col col-sm-12"},[a("b-row",[a("b-col",{attrs:{sm:"12",md:"8"}},[a("div",{staticClass:"body"},[a("h3",[t._v(t._s(t.title))]),a("p",[t._v(t._s(t.text))]),a("div",{staticClass:"links"},[t.demoLink?a("a",{staticClass:"btn btn-demo",attrs:{target:"_vblank",href:t.demoLink}},[t._v("Demo")]):t._e(),t.colabLink?a("a",{staticClass:"btn btn-colab",attrs:{target:"_vblank",href:t.colabLink}},[a("span",{staticClass:"fab fa-python"}),t._v(" Colab notebook ")]):t._e(),t.githubLink?a("a",{staticClass:"btn btn-github",attrs:{target:"_vblank",href:t.githubLink}},[a("span",{staticClass:"fab fa-github"}),t._v(" Github ")]):t._e()])])]),a("b-col",{attrs:{sm:"12",md:"4"}},["image"===t.mediaType.toLowerCase()?a("b-img",{staticClass:"card-media",attrs:{src:t.mediaLink,alt:"img"}}):t._e(),"video"===t.mediaType.toLowerCase()?a("div",{staticClass:"card-media",domProps:{innerHTML:t._s(t.mediaLink)}}):t._e()],1)],1)],1)},U=[],X={props:{text:String,title:String,githubLink:String,colabLink:String,demoLink:String,mediaType:String,mediaLink:String}},G=X,Z=Object(l["a"])(G,z,U,!1,null,null,null),Q=Z.exports,Y=[{title:"Intuitive explaination of Differentiable Neural Architechture Search",text:"This blog work explains how DARTS work.       I have tried to explain the math behind this paper, which I stuggled for months to understand.",demoLink:"https://medium.com/p/intuitive-explanation-of-differentiable-architecture-search-darts-692bdadcc69c?source=email-396d46fdd644--writer.postDistributed&sk=1fa1479fd856aa45de27be35abcb017c",mediaType:"image",mediaLink:"https://www.angioi.com/assets/images/dnas.png"},{title:"Dreaming over text!",text:"Extending the idea of Deep Dream to textual data! We took inspiration from deep dream, where input image is optimized to increase a hidden layer's activation.",githubLink:"https://github.com/mythrex/deep_dream_textual_data",colabLink:"https://colab.research.google.com/github/mythrex/deep_dream_textual_data/blob/master/demo.ipynb#scrollTo=DiFimXLc-FK_",mediaType:"image",mediaLink:"/positive.png"},{title:"Jacobians Explained",text:"Explaining how jacobians work. How jacobian looks like in 3d.",colabLink:"https://colab.research.google.com/github/mythrex/deep_dream_textual_data/blob/master/demo.ipynb#scrollTo=DiFimXLc-FK_",mediaType:"image",mediaLink:"/jacobians.png"},{title:"OMR Scanner",text:"Developed OMR Scanner using open-cv. Can detect correct answers bubbled. This is a project that will be using some image processing techniques to evaluate the OMR Sheet.",githubLink:"https://github.com/mythrex/OMR-Scanner",mediaType:"image",mediaLink:"https://raw.githubusercontent.com/mythrex/OMR-Scanner/master/tut_images/1542534429457_o.jpg"}],tt={components:{ProjectCard:Q},data:function(){return{projects:Y}}},et=tt,at=Object(l["a"])(et,F,N,!1,null,null,null),nt=at.exports,it={components:{Navbar:b["a"],HomeSection:y,AboutSection:R,WorkSection:E,SkillsSection:W,ProjectsSection:nt},mounted:function(){this.$store.state.isBlog=!1}},rt=it,ot=Object(l["a"])(rt,p,h,!1,null,null,null),st=ot.exports;n["default"].use(m["a"]);var lt=[{path:"/",name:"Home",component:st},{path:"/blog",name:"Blog",component:function(){return a.e("chunk-4d9d5e00").then(a.bind(null,"fd3f"))}},{path:"/:pathMatch(.*)*",component:st}],ct=new m["a"]({mode:"history",base:"/",routes:lt}),ut=ct,dt=a("2f62");n["default"].use(dt["a"]);var mt=new dt["a"].Store({state:{isBlog:!1},mutations:{},actions:{},modules:{}});n["default"].config.productionTip=!1,n["default"].use(i["a"]),n["default"].use(r["a"]),new n["default"]({router:ut,store:mt,render:function(t){return t(d)}}).$mount("#app")},"9d8d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[a("b-navbar-brand",{attrs:{href:"/"},on:{click:t.notBlog}},[t._v("Home")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[this.$store.state.isBlog?t._e():a("b-nav-item",{attrs:{href:"#work"},on:{click:t.scrollIntoView}},[t._v("Work")]),this.$store.state.isBlog?t._e():a("b-nav-item",{attrs:{href:"#about"},on:{click:t.scrollIntoView}},[t._v("About")]),this.$store.state.isBlog?t._e():a("b-nav-item",{attrs:{href:"#skills"},on:{click:t.scrollIntoView}},[t._v("Skills")]),this.$store.state.isBlog?t._e():a("b-nav-item",{attrs:{href:"#projects"},on:{click:t.scrollIntoView}},[t._v("Projects")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:"/blog"},nativeOn:{click:function(e){return t.removeUnnecessaryLinks(e)}}},[t._v("Blog")])],1)])],1)],1)},i=[],r={methods:{scrollIntoView:function(t){t.preventDefault();var e=t.target.getAttribute("href"),a=e?document.querySelector(e):null;a&&a.scrollIntoView(a.offsetTop)},removeUnnecessaryLinks:function(){this.$store.state.isBlog=!0},notBlog:function(){this.$store.state.isBlog=!1}},mounted:function(){},data:function(){return{}}},o=r,s=a("2877"),l=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=l.exports},fb98:function(t,e,a){}});
//# sourceMappingURL=app.bf590f03.js.map