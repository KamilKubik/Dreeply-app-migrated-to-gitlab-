_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{"54nZ":function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),a=n("eLM2"),o=n("q1tI"),r=n("vJKn"),i=n.n(r),s=n("rg98"),l=(n("YFqc"),n("U6Mw")),u=n("cqNN"),d=n("xLud"),p=n("20a2"),b=n("z/o8"),j=n("pc+1"),h=(n("xBw7"),n("x6nH")),m=n("daTK"),x=n("p46w"),f=n.n(x),g=n("b753"),y=function(){var e=Object(o.useState)(),t=e[0],n=e[1],a=Object(o.useState)(""),r=a[0],x=a[1],y=Object(o.useState)(""),O=y[0],v=y[1],w=Object(o.useState)(""),k=w[0],N=w[1],S=Object(o.useState)(!0),T=S[0],I=S[1],C=(Object(u.b)().currentUser,Object(p.useRouter)()),q=Object(o.useRef)(),z=Object(o.useState)(!1),A=z[0],D=z[1],F=Object(o.useState)(null),L=F[0],_=F[1],E=function(){var e=Object(s.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r&&O&&k&&"blank"!=r&&"blank"!=O&&"blank"!=k){e.next=9;break}if(!L){e.next=7;break}return setTimeout((function(){!A&&D(!0)}),1e3),e.abrupt("return");case 7:return!A&&D(!0),e.abrupt("return");case 9:return b.a.to(q.current,{autoAlpha:0,duration:1,ease:j.b.easeOut}),setTimeout((function(){C.push("/dashboard/projects/".concat(C.query.project,"/startup-idea/market"))}),1200),e.next=13,l.b.collection("projects").doc(t).collection("startupIdea").doc(C.query.project).collection("inputs").doc(P).set({productOverviewSectionData:J,productPromotionSectionData:B,productBenefitsSectionData:Q,filledSection1:!0},{merge:!0});case 13:return e.abrupt("return");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=Object(o.useState)(!1),M=W[0],K=W[1],R=Object(o.useState)(""),P=R[0],U=R[1];Object(o.useEffect)((function(){var e=f.a.get("uid");(b.a.fromTo(q.current,{autoAlpha:0},{autoAlpha:1,duration:1,ease:j.b.easeIn}),e&&C.query.project)?l.b.collection("projects").where("uid","==",e).where("projectName","==",C.query.project).get().then((function(e){e.forEach(function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(t.data().projectId),l.b.collection("projects").doc(t.data().projectId).collection("startupIdea").doc(C.query.project).collection("inputs").onSnapshot((function(e){e.docs.map((function(e){console.log(e.data());var t=e.data();U(e.id),n(t.projectId),x(t.productOverviewSectionData),v(t.productPromotionSectionData),N(t.productBenefitsSectionData),K(!1)}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})):(console.log("Loading failed"),K(!0));return function(){return I(!1)}}),[M,C.query.project]);var J=r||"blank",B=O||"blank",Q=k||"blank",H=function(){var e=Object(s.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),b.a.to(q.current,{autoAlpha:0,duration:1,ease:j.b.easeOut}),setTimeout((function(){C.push("/dashboard/projects/".concat(C.query.project,"/startup-idea/vision"))}),1200),e.next=5,l.b.collection("projects").doc(t).collection("startupIdea").doc(C.query.project).collection("inputs").doc(P).set({productOverviewSectionData:J,productPromotionSectionData:B,productBenefitsSectionData:Q,filledSection1:!!(r&&"blank"!=r&&O&&"blank"!=O&&k&&"blank"!=k)||(!r||!O||!k||"blank"==r||"blank"==O||"blank"==k)&&!1},{merge:!0});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.a,{}),Object(c.jsx)(h.a,{setCurrentTippy:_,emptyInput:!0,setTippyMonster:D,tippyMonster:A,product:!0,contentClass:"h-36 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center",contentText:'"Great things take time". On the way to the Great Wall of China ',contentText1:" In this section, try to describe the best version of your product, the promotion process and the benefits it will bring to future customers "}),Object(c.jsx)("div",{ref:q,className:"h-full w-full relative flex flex-col items-center justify-center",children:Object(c.jsxs)("div",{className:"w-full max-w-mdStarter lg:max-w-lgContainer 2xl:max-w-xlContainer relative pl-6 pr-6 mt-16 pb-24",children:[Object(c.jsx)("p",{className:"text-primarydark text-2xl normal:text-3xl mt-2 pl-2 dark:text-background text-center",children:"What do the product images look like in your mind?"}),Object(c.jsxs)("p",{className:"text-gray text-base normal:text-lg pl-2 dark:text-background text-center",children:["Startup idea creator will help you create the initial mockup of your future startup",Object(c.jsx)("img",{src:"/gifs/rocket.gif",height:35,width:35,className:"inline-block relative bottom-0.5"})]}),Object(c.jsx)(d.a,{onLoadOpacity1:T}),Object(c.jsx)("div",{children:Object(c.jsx)("h1",{className:"text-primarydark text-lg mt-10 -mb-6 dark:text-background",children:"Product"})}),Object(c.jsxs)("div",{className:"w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background",children:[Object(c.jsxs)("div",{className:"relative flex flex-col h-full w-full flex px-8 pt-8 pb-4",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{className:"block text-sm font-medium flex justify-between items-end",htmlFor:"productOverview",children:["An accurate description of your product vision.",Object(c.jsx)(m.a,{contentClass:"w-80 shadow-lg rounded-2xl bg-primary",contentText:" Questions that can guide you:\n- What resources are you going to use to create your product?\n- How will the production process work?\n- Will your product be available in different versions?\n- What does the perfect version of your product look like?"})]}),Object(c.jsx)("textarea",{autoComplete:"none",id:"productOverview",onChange:function(e){return x(e.target.value)},value:"blank"==r?"":r,className:"pb-24 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2",type:"textarea",placeholder:"\u201cNothing works better than just improving your product.\u201d\n\n~ Joel Spolsky"})]}),Object(c.jsxs)("div",{className:"mt-12",children:[Object(c.jsxs)("label",{className:"block text-sm font-medium flex justify-between items-end",htmlFor:"promotion",children:["The way other people find out about your startup.",Object(c.jsx)(m.a,{contentClass:"w-80 shadow-lg rounded-2xl bg-primary",contentText:" Questions that can guide you:\n- What will the process of promoting your product look like?\n- What marketing activities are you going to undertake?\n- Are you going to cooperate with any external companies?\n- What distribution channels are you planning to use?"})]}),Object(c.jsx)("textarea",{autoComplete:"none",id:"promotion",onChange:function(e){return v(e.target.value)},value:"blank"==O?"":O,className:"pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2",type:"textarea",placeholder:"\u201cBe undeniably good. No marketing effort or social media buzzword can be a substitute for that.\u201d\n\n~ Anthony Volodkin"})]}),Object(c.jsxs)("div",{className:"mt-12 pb-8",children:[Object(c.jsxs)("label",{className:"block text-sm font-medium flex justify-between items-end",htmlFor:"benefits",children:["The benefits that customers will reap by using your product.",Object(c.jsx)(m.a,{contentClass:"w-80 shadow-lg rounded-2xl bg-primary",contentText:" Questions that can guide you:\n- What value will your product provide to your customers?\n- How will you encourage your customers to use your product again?\n- Do your potential customers really need your product?\n- What needs will your customers have when deciding on your product?"})]}),Object(c.jsx)("textarea",{autoComplete:"none",id:"benefits",onChange:function(e){return N(e.target.value)},value:"blank"==k?"":k,className:"pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2",type:"textarea",placeholder:"\u201cWonder what your customer really wants? Ask. Don\u2019t tell.\u201d\n\n~ Lisa Stone"})]})]}),Object(c.jsx)("hr",{style:{width:"90%",color:"#a0aec0"}}),Object(c.jsxs)("div",{className:"w-full grid grid-cols-3fr grid-flow-column px-8 py-4",children:[Object(c.jsx)("div",{className:"flex items-center mt-1 text-primarydark text-sm",children:Object(c.jsx)("button",{onClick:H,children:"Back"})}),Object(c.jsx)("div",{className:"flex items-center mt-1 justify-self-center",children:Object(c.jsx)("p",{className:"text-sm text-gray",children:"Step 2 of 5"})}),Object(c.jsx)("div",{className:"flex justify-end items-center",children:Object(c.jsx)("button",{disabled:A,onClick:E,className:"hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark",children:"Next"})})]})]})]})})]})};t.default=Object(a.withSuperJSONPage)((function(){return Object(c.jsx)(y,{})}))},b753:function(e,t,n){"use strict";var c=n("nKUr"),a=n("q1tI"),o=n("b6Qr"),r=n("z/o8"),i=n("pc+1"),s=n("20a2"),l=n.n(s);t.a=function(){var e=Object(a.useRef)();return Object(a.useEffect)((function(){o.isMobile||(e.current.addEventListener("mouseenter",(function(){r.a.to(e.current,{rotation:"180_cw",duration:.5,ease:i.b.easeIn})})),e.current.addEventListener("mouseleave",(function(){r.a.to(e.current,{rotation:"0_cw",duration:.5,ease:i.b.easeIn})})))}),[]),Object(c.jsx)("img",{ref:e,onClick:function(){return l.a.push("/dashboard/projects/".concat(l.a.query.project))},src:"/business-model/back4.svg",height:28,width:28,className:"fixed left-6 top-3 cursor-pointer z-50"})}},coiS:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/projects/[project]/startup-idea/product",function(){return n("54nZ")}])},daTK:function(e,t,n){"use strict";var c=n("nKUr"),a=n("vJKn"),o=n.n(a),r=n("rg98"),i=n("q1tI"),s=n("z/o8"),l=n("pc+1"),u=n("8QT5");n("Aiso");t.a=function(e){var t=e.contentClass,n=e.contentText,a=(e.market,e.model,e.success,e.tippyMonster),d=(e.setTippyMonster,e.setCurrentTippy,e.emptyInput,e.angry),p=Object(i.useState)(!1),b=p[0],j=p[1],h=(Object(i.useRef)(null),Object(i.useRef)()),m=Object(i.useRef)(),x=Object(i.useRef)(),f=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.to(h.current,{autoAlpha:0,scale:0,duration:1,ease:l.d.easeIn});case 2:j(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){x.current.classList.remove("data-placement")}),[]),console.log("tm - ",a),console.log("visible - ",b),Object(c.jsx)(u.a,{ref:x,sticky:!1,zIndex:20,touch:!0,visible:b,onClickOutside:f,placement:"left-end",interactive:!0,content:Object(c.jsx)("div",{ref:h,className:t,children:Object(c.jsxs)("div",{style:{whiteSpace:"pre-line"},className:"text-primarydark p-4 text-sm text-white",children:[d?Object(c.jsx)("img",{src:"/emojis/angersymbol.svg",height:22,width:22,className:"inline-block relative bottom-0.5"}):Object(c.jsx)("img",{src:"/emojis/test.svg",height:22,width:22,className:"inline-block"}),n]})}),children:Object(c.jsx)("img",{ref:m,id:"suggestionIcon",className:"relative cursor-pointer",src:"/guide/lamp2.svg",height:40,width:40,onClick:function(){b?f():(s.a.fromTo(h.current,{autoAlpha:0,scale:0},{autoAlpha:1,scale:1,duration:1,ease:l.d.easeOut}),j(!0))}})})}},xLud:function(e,t,n){"use strict";var c=n("nKUr"),a=n("vJKn"),o=n.n(a),r=n("rg98"),i=n("jT3O"),s=n("q1tI"),l=n("U6Mw"),u=n("cqNN"),d=n("Aiso"),p=n.n(d),b=n("vOnD"),j=n("z/o8"),h=n("pc+1"),m=n("20a2"),x=n("p46w"),f=n.n(x);function g(){var e=Object(i.a)(["\n  position: relative;\n  z-index: 2;\n  margin-top: 16px;\n  margin-bottom: 16px;\n"]);return g=function(){return e},e}function y(){var e=Object(i.a)(["\n  position: relative;\n  z-index: 2;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  ::after {\n    content: '';\n    background-color: ",";\n    height: 1px;\n    width: 50%;\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n  }\n"]);return y=function(){return e},e}function O(){var e=Object(i.a)(["\n  position: relative;\n  z-index: 2;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  ::after {\n    content: '';\n    background-color: ",";\n    height: 1px;\n    width: 50%;\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n  }\n"]);return O=function(){return e},e}function v(){var e=Object(i.a)(["\n  position: relative;\n  z-index: 2;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  ::after {\n    content: '';\n    background-color: ",";\n    height: 1px;\n    width: 50%;\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n  }\n"]);return v=function(){return e},e}function w(){var e=Object(i.a)(["\n  position: relative;\n  z-index: 2;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  ::after {\n    content: '';\n    background-color: ",";\n    height: 1px;\n    width: 50%;\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n  }\n"]);return w=function(){return e},e}var k=b.a.div(w(),(function(e){return e.filledSection?"#0AFF00":"#fc573b"})),N=b.a.div(v(),(function(e){return e.filledSection1?"#0AFF00":"#fc573b"})),S=b.a.div(O(),(function(e){return e.filledSection2?"#0AFF00":"#fc573b"})),T=b.a.div(y(),(function(e){return e.filledSection3?"#0AFF00":"#fc573b"})),I=b.a.div(g());t.a=function(e){var t=e.onLoadOpacity,n=e.onLoadOpacity1,a=e.onLoadOpacity2,i=e.onLoadOpacity3,d=e.onLoadOpacity4,b=Object(m.useRouter)(),x=Object(s.useState)(!1),g=x[0],y=x[1],O=Object(s.useState)(!1),v=O[0],w=O[1],C=Object(s.useState)(!1),q=C[0],z=C[1],A=Object(s.useState)(!1),D=A[0],F=A[1],L=Object(s.useState)(!1),_=L[0],E=L[1],W=(Object(u.b)().currentUser,Object(s.useRef)());console.log("-",g),console.log("1-",v),console.log("2-",q),console.log("3-",D),console.log("4-",_);var M=Object(s.useState)(!1),K=M[0],R=M[1];return Object(s.useEffect)((function(){j.a.set(W.current,{opacity:0}),j.a.to(W.current,{opacity:1,duration:1,ease:h.d.easeIn});var e=f.a.get("uid");e&&b.query.project&&l.b.collection("projects").where("uid","==",e).where("projectName","==",b.query.project).get().then((function(e){e.forEach(function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.b.collection("projects").doc(t.data().projectId).collection("startupIdea").doc(b.query.project).collection("inputs").onSnapshot((function(e){e.docs.map((function(e){var t=e.data();y(t.filledSection),w(t.filledSection1),z(t.filledSection2),F(t.filledSection3),E(t.filledSection4),R(!0)}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[K,b.query.project]),console.log("opacity - ",t),Object(c.jsx)("div",{ref:W,className:"text-center mt-12 mb-12",children:Object(c.jsxs)("ul",{className:"text-center",children:[Object(c.jsxs)("li",{className:"inline-block w-1/5 relative",children:[Object(c.jsx)(p.a,{src:"/places/desert.svg",height:75,width:75,className:"".concat(t?"opacity-100":"opacity-50")}),Object(c.jsx)("br",{}),Object(c.jsx)(k,{filledSection:g,children:Object(c.jsx)(p.a,{src:"/progress/".concat(g?"check":"remove",".svg"),height:32,width:32,className:"".concat(t?"opacity-100":"opacity-50")})}),Object(c.jsx)("p",{className:"".concat(t?"opacity-100":"opacity-50"," text-primarydark dark:text-background"),children:"Vision"})]}),Object(c.jsxs)("li",{className:"inline-block w-1/5 relative",children:[Object(c.jsx)(p.a,{src:"/places/wall.svg",height:75,width:75,className:"".concat(n?"opacity-100":"opacity-50")}),Object(c.jsx)("br",{}),Object(c.jsx)(N,{filledSection1:v,children:Object(c.jsx)(p.a,{src:"/progress/".concat(v?"check":"remove",".svg"),height:32,width:32,className:"".concat(n?"opacity-100":"opacity-50")})}),Object(c.jsx)("p",{className:"".concat(n?"opacity-100":"opacity-50"," text-primarydark dark:text-background"),children:"Product"})]}),Object(c.jsxs)("li",{className:"inline-block w-1/5 relative",children:[Object(c.jsx)(p.a,{src:"/places/sea.svg",height:75,width:75,className:"".concat(a?"opacity-100":"opacity-50")}),Object(c.jsx)("br",{}),Object(c.jsx)(S,{filledSection2:q,children:Object(c.jsx)(p.a,{src:"/progress/".concat(q?"check":"remove",".svg"),height:32,width:32,className:"".concat(a?"opacity-100":"opacity-50")})}),Object(c.jsx)("p",{className:"".concat(a?"opacity-100":"opacity-50"," text-primarydark dark:text-background"),children:"Market"})]}),Object(c.jsxs)("li",{className:"inline-block w-1/5 relative",children:[Object(c.jsx)(p.a,{src:"/places/amsterdam.svg",height:75,width:75,className:"".concat(i?"opacity-100":"opacity-50")}),Object(c.jsx)("br",{}),Object(c.jsx)(T,{filledSection3:D,children:Object(c.jsx)(p.a,{src:"/progress/".concat(D?"check":"remove",".svg"),height:32,width:32,className:"".concat(i?"opacity-100":"opacity-50")})}),Object(c.jsx)("p",{className:"".concat(i?"opacity-100":"opacity-50"," text-primarydark dark:text-background"),children:"Finances"})]}),Object(c.jsxs)("li",{className:"inline-block w-1/5 relative",children:[Object(c.jsx)(p.a,{src:"/places/pirate.svg",height:75,width:75,className:"".concat(d?"opacity-100":"opacity-50")}),Object(c.jsx)("br",{}),Object(c.jsx)(I,{filledSection4:_,children:Object(c.jsx)(p.a,{src:"/progress/".concat(_?"check":"remove",".svg"),height:32,width:32,className:"".concat(d?"opacity-100":"opacity-50")})}),Object(c.jsx)("p",{className:"".concat(d?"opacity-100":"opacity-50"," text-primarydark dark:text-background"),children:"Model"})]})]})})}}},[["coiS",2,0,3,5,1,4,6,7,8,9,10,11,13]]]);