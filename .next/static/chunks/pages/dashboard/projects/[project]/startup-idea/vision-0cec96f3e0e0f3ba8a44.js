_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[51],{KTft:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/projects/[project]/startup-idea/vision",function(){return n("Oo9U")}])},Oo9U:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),c=n("eLM2"),o=n("q1tI"),r=n("vJKn"),i=n.n(r),s=n("rg98"),l=(n("YFqc"),n("U6Mw")),u=n("cqNN"),d=n("xLud"),p=n("20a2"),b=n("z/o8"),h=n("pc+1"),j=n("x6nH"),m=(n("xBw7"),n("Aiso"),n("daTK")),f=n("p46w"),x=n.n(f),g=n("b753"),y=function(){var e=Object(o.useState)(),t=e[0],n=e[1],c=Object(o.useState)(""),r=c[0],f=c[1],y=Object(o.useState)(""),O=y[0],v=y[1],w=Object(o.useState)(""),k=w[0],N=w[1],S=Object(o.useState)(!0),T=S[0],I=S[1];console.log("market problem - ",r),console.log("market solution - ",O),console.log("founders - ",k);Object(u.b)().currentUser;var C=Object(p.useRouter)(),q=Object(o.useRef)(),z=Object(o.useState)(!1),A=(z[0],z[1],Object(o.useState)(!1)),E=A[0],F=A[1],L=Object(o.useState)(null),_=L[0],D=L[1],K=function(){var e=Object(s.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r&&O&&k&&"blank"!=r&&"blank"!=O&&"blank"!=k){e.next=9;break}if(!_){e.next=7;break}return setTimeout((function(){!E&&F(!0)}),1e3),e.abrupt("return");case 7:return!E&&F(!0),e.abrupt("return");case 9:return b.a.to(q.current,{autoAlpha:0,duration:1,ease:h.b.easeOut}),setTimeout((function(){C.push("/dashboard/projects/".concat(C.query.project,"/startup-idea/product"))}),1200),e.next=13,l.b.collection("projects").doc(t).collection("startupIdea").doc(C.query.project).collection("inputs").doc(H).set({marketProblemSectionData:Q,marketSolutionSectionData:W,foundersSectionData:B,filledSection:!0},{merge:!0});case 13:return e.abrupt("return");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(o.useState)(!1),R=M[0],U=M[1],P=Object(o.useState)(""),H=P[0],J=P[1];Object(o.useEffect)((function(){var e=x.a.get("uid");(b.a.fromTo(q.current,{autoAlpha:0},{autoAlpha:1,duration:2,ease:h.b.easeIn}),e&&C.query.project)?l.b.collection("projects").where("uid","==",e).where("projectName","==",C.query.project).get().then((function(e){e.forEach(function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(t.data().projectId),l.b.collection("projects").doc(t.data().projectId).collection("startupIdea").doc(C.query.project).collection("inputs").onSnapshot((function(e){e.docs.map((function(e){console.log(e.data());var t=e.data();J(e.id),n(t.projectId),f(t.marketProblemSectionData),v(t.marketSolutionSectionData),N(t.foundersSectionData),U(!1)}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})):(console.log("Loading failed"),U(!0));return function(){return I(!1)}}),[R,C.query.project]);var Q=r||"blank",W=O||"blank",B=k||"blank",X=function(){var e=Object(s.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),b.a.to(q.current,{autoAlpha:0,duration:1,ease:h.b.easeOut}),setTimeout((function(){C.push("/dashboard/projects/".concat(C.query.project))}),1200),e.next=5,l.b.collection("projects").doc(t).collection("startupIdea").doc(C.query.project).collection("inputs").doc(H).set({marketProblemSectionData:Q,marketSolutionSectionData:W,foundersSectionData:B,filledSection:!!(r&&"blank"!=r&&O&&"blank"!=O&&k&&"blank"!=k)||(!r||!O||!k||"blank"==r||"blank"==O||"blank"==k)&&!1},{merge:!0});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g.a,{}),Object(a.jsx)(j.a,{setCurrentTippy:D,emptyInput:!0,vision:!0,setTippyMonster:F,tippyMonster:E,contentClass:"h-36 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center",contentText:"Let's begin this journey in the middle of the desert ",contentText1:" In this section, describe the main concepts of your startup creation and tell the world, who stands behind its founding "}),Object(a.jsx)("div",{ref:q,className:"h-full w-full relative flex flex-col items-center justify-center",children:Object(a.jsxs)("div",{className:"w-full max-w-mdStarter lg:max-w-lgContainer 2xl:max-w-xlContainer normal:max-w-xxlContainer relative pl-2 pr-2 mt-16 pb-24",children:[Object(a.jsx)("p",{className:"text-primarydark text-2xl normal:text-3xl mt-2 pl-2 dark:text-background text-center",children:"Briefly describe the main assumptions of your idea"}),Object(a.jsxs)("p",{className:"text-gray text-base normal:text-lg pl-2 dark:text-background text-center",children:["Startup idea creator will help you create the initial mockup of your future startup",Object(a.jsx)("img",{src:"/gifs/rocket.gif",height:35,width:35,className:"inline-block relative bottom-0.5"})]}),Object(a.jsx)(d.a,{onLoadOpacity:T}),Object(a.jsx)("div",{children:Object(a.jsx)("h1",{className:"text-primarydark text-lg mt-10 -mb-6 dark:text-background",children:"Your vision"})}),Object(a.jsxs)("div",{className:"w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background",children:[Object(a.jsxs)("div",{className:"relative flex flex-col h-full w-full flex px-8 pt-8 pb-4",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{className:"block text-sm font-medium flex justify-between items-end",htmlFor:"why",children:["Market problem that needs to be solved.",Object(a.jsx)(m.a,{contentClass:"w-80 shadow-lg rounded-2xl bg-primary",contentText:" Questions that can guide you:\n- What is the market problem that your idea solves?\n- Why do people need a solution to this problem?"})]}),Object(a.jsx)("textarea",{autoComplete:"none",id:"why",onChange:function(e){return f(e.target.value)},value:"blank"==r?"":r,className:"pb-24 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2",type:"textarea",placeholder:"\u201cThe value of an idea lies in the using of it.\u201d\n\n~ Thomas Edison"})]}),Object(a.jsxs)("div",{className:"mt-12",children:[Object(a.jsxs)("label",{className:"block text-sm font-medium flex justify-between items-end",htmlFor:"what",children:["Solution that solves this market problem.",Object(a.jsx)(m.a,{contentClass:"w-80 shadow-lg rounded-2xl bg-primary",contentText:" Questions that can guide you:\n- What is the solution that your idea will bring into the market?\n- How will your startup solve this problem?\n- How will your startup achieve a solution to this problem?"})]}),Object(a.jsx)("textarea",{autoComplete:"none",id:"what",onChange:function(e){return v(e.target.value)},value:"blank"==O?"":O,className:"pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2",type:"textarea",placeholder:"\u201cChase the vision, not the money, the money will end up following you.\u201d\n\n~ Tony Hsieh"})]}),Object(a.jsxs)("div",{className:"mt-12 pb-8",children:[Object(a.jsxs)("label",{className:"block text-sm font-medium flex justify-between items-end",htmlFor:"founders",children:["Introduce the startup's founders to the world.",Object(a.jsx)(m.a,{contentClass:"w-80 shadow-lg rounded-2xl bg-primary",contentText:" Questions that can guide you:\n- Who will be the founders of your future startup?\n- What experience / expertise do the founders have in the relevant industry?\n- How will the experience / expertise of the founders impact the success of the startup?"})]}),Object(a.jsx)("textarea",{autoComplete:"none",id:"founders",onChange:function(e){return N(e.target.value)},value:"blank"==k?"":k,className:"pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2",type:"textarea",placeholder:"\u201cNo matter how brilliant your mind or strategy, if you\u2019re playing a solo game, you\u2019ll always lose out to a team.\u201d\n\n~ Reid Hoffman"})]})]}),Object(a.jsx)("hr",{style:{width:"90%",color:"#a0aec0"}}),Object(a.jsxs)("div",{className:"w-full grid grid-cols-3fr grid-flow-column px-8 py-4",children:[Object(a.jsx)("div",{className:"flex items-center mt-1 text-primarydark text-sm",children:Object(a.jsx)("button",{onClick:X,children:"Back"})}),Object(a.jsx)("div",{className:"flex items-center mt-1 justify-self-center",children:Object(a.jsx)("p",{className:"text-sm text-gray",children:"Step 1 of 5"})}),Object(a.jsx)("div",{className:"flex justify-end items-center",children:Object(a.jsx)("button",{disabled:E,onClick:function(e){return K(e)},className:"z-10 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark",children:"Next"})})]})]})]})})]})};t.default=Object(c.withSuperJSONPage)((function(){return Object(a.jsx)(y,{})}))},b753:function(e,t,n){"use strict";var a=n("nKUr"),c=n("q1tI"),o=n("b6Qr"),r=n("z/o8"),i=n("pc+1"),s=n("20a2"),l=n.n(s);t.a=function(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){o.isMobile||(e.current.addEventListener("mouseenter",(function(){r.a.to(e.current,{rotation:"180_cw",duration:.5,ease:i.b.easeIn})})),e.current.addEventListener("mouseleave",(function(){r.a.to(e.current,{rotation:"0_cw",duration:.5,ease:i.b.easeIn})})))}),[]),Object(a.jsx)("img",{ref:e,onClick:function(){return l.a.push("/dashboard/projects/".concat(l.a.query.project))},src:"/business-model/back4.svg",height:28,width:28,className:"fixed left-6 top-3 cursor-pointer z-50"})}},daTK:function(e,t,n){"use strict";var a=n("nKUr"),c=n("vJKn"),o=n.n(c),r=n("rg98"),i=n("q1tI"),s=n("z/o8"),l=n("pc+1"),u=n("8QT5");n("Aiso");t.a=function(e){var t=e.contentClass,n=e.contentText,c=(e.market,e.model,e.success,e.tippyMonster),d=(e.setTippyMonster,e.setCurrentTippy,e.emptyInput,e.angry),p=Object(i.useState)(!1),b=p[0],h=p[1],j=(Object(i.useRef)(null),Object(i.useRef)()),m=Object(i.useRef)(),f=Object(i.useRef)(),x=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.to(j.current,{autoAlpha:0,scale:0,duration:1,ease:l.d.easeIn});case 2:h(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){f.current.classList.remove("data-placement")}),[]),console.log("tm - ",c),console.log("visible - ",b),Object(a.jsx)(u.a,{ref:f,sticky:!1,zIndex:20,touch:!0,visible:b,onClickOutside:x,placement:"left-end",interactive:!0,content:Object(a.jsx)("div",{ref:j,className:t,children:Object(a.jsxs)("div",{style:{whiteSpace:"pre-line"},className:"text-primarydark p-4 text-sm text-white",children:[d?Object(a.jsx)("img",{src:"/emojis/angersymbol.svg",height:22,width:22,className:"inline-block relative bottom-0.5"}):Object(a.jsx)("img",{src:"/emojis/test.svg",height:22,width:22,className:"inline-block"}),n]})}),children:Object(a.jsx)("img",{ref:m,id:"suggestionIcon",className:"relative cursor-pointer",src:"/guide/lamp2.svg",height:40,width:40,onClick:function(){b?x():(s.a.fromTo(j.current,{autoAlpha:0,scale:0},{autoAlpha:1,scale:1,duration:1,ease:l.d.easeOut}),h(!0))}})})}},xLud:function(e,t,n){"use strict";var a=n("nKUr"),c=n("vJKn"),o=n.n(c),r=n("rg98"),i=n("jT3O"),s=n("q1tI"),l=n("U6Mw"),u=n("cqNN"),d=n("Aiso"),p=n.n(d),b=n("vOnD"),h=n("z/o8"),j=n("pc+1"),m=n("20a2"),f=n("p46w"),x=n.n(f);function g(){var e=Object(i.a)(["\n  position: relative;\n  z-index: 2;\n  margin-top: 16px;\n  margin-bottom: 16px;\n"]);return g=function(){return e},e}function y(){var e=Object(i.a)(["\n  position: relative;\n  z-index: 2;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  ::after {\n    content: '';\n    background-color: ",";\n    height: 1px;\n    width: 50%;\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n  }\n"]);return y=function(){return e},e}function O(){var e=Object(i.a)(["\n  position: relative;\n  z-index: 2;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  ::after {\n    content: '';\n    background-color: ",";\n    height: 1px;\n    width: 50%;\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n  }\n"]);return O=function(){return e},e}function v(){var e=Object(i.a)(["\n  position: relative;\n  z-index: 2;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  ::after {\n    content: '';\n    background-color: ",";\n    height: 1px;\n    width: 50%;\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n  }\n"]);return v=function(){return e},e}function w(){var e=Object(i.a)(["\n  position: relative;\n  z-index: 2;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  ::after {\n    content: '';\n    background-color: ",";\n    height: 1px;\n    width: 50%;\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n  }\n"]);return w=function(){return e},e}var k=b.a.div(w(),(function(e){return e.filledSection?"#0AFF00":"#fc573b"})),N=b.a.div(v(),(function(e){return e.filledSection1?"#0AFF00":"#fc573b"})),S=b.a.div(O(),(function(e){return e.filledSection2?"#0AFF00":"#fc573b"})),T=b.a.div(y(),(function(e){return e.filledSection3?"#0AFF00":"#fc573b"})),I=b.a.div(g());t.a=function(e){var t=e.onLoadOpacity,n=e.onLoadOpacity1,c=e.onLoadOpacity2,i=e.onLoadOpacity3,d=e.onLoadOpacity4,b=Object(m.useRouter)(),f=Object(s.useState)(!1),g=f[0],y=f[1],O=Object(s.useState)(!1),v=O[0],w=O[1],C=Object(s.useState)(!1),q=C[0],z=C[1],A=Object(s.useState)(!1),E=A[0],F=A[1],L=Object(s.useState)(!1),_=L[0],D=L[1],K=(Object(u.b)().currentUser,Object(s.useRef)());console.log("-",g),console.log("1-",v),console.log("2-",q),console.log("3-",E),console.log("4-",_);var M=Object(s.useState)(!1),R=M[0],U=M[1];return Object(s.useEffect)((function(){h.a.set(K.current,{opacity:0}),h.a.to(K.current,{opacity:1,duration:1,ease:j.d.easeIn});var e=x.a.get("uid");e&&b.query.project&&l.b.collection("projects").where("uid","==",e).where("projectName","==",b.query.project).get().then((function(e){e.forEach(function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.b.collection("projects").doc(t.data().projectId).collection("startupIdea").doc(b.query.project).collection("inputs").onSnapshot((function(e){e.docs.map((function(e){var t=e.data();y(t.filledSection),w(t.filledSection1),z(t.filledSection2),F(t.filledSection3),D(t.filledSection4),U(!0)}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[R,b.query.project]),console.log("opacity - ",t),Object(a.jsx)("div",{ref:K,className:"text-center mt-12 mb-12",children:Object(a.jsxs)("ul",{className:"text-center",children:[Object(a.jsxs)("li",{className:"inline-block w-1/5 relative",children:[Object(a.jsx)(p.a,{src:"/places/desert.svg",height:75,width:75,className:"".concat(t?"opacity-100":"opacity-50")}),Object(a.jsx)("br",{}),Object(a.jsx)(k,{filledSection:g,children:Object(a.jsx)(p.a,{src:"/progress/".concat(g?"check":"remove",".svg"),height:32,width:32,className:"".concat(t?"opacity-100":"opacity-50")})}),Object(a.jsx)("p",{className:"".concat(t?"opacity-100":"opacity-50"," text-primarydark dark:text-background"),children:"Vision"})]}),Object(a.jsxs)("li",{className:"inline-block w-1/5 relative",children:[Object(a.jsx)(p.a,{src:"/places/wall.svg",height:75,width:75,className:"".concat(n?"opacity-100":"opacity-50")}),Object(a.jsx)("br",{}),Object(a.jsx)(N,{filledSection1:v,children:Object(a.jsx)(p.a,{src:"/progress/".concat(v?"check":"remove",".svg"),height:32,width:32,className:"".concat(n?"opacity-100":"opacity-50")})}),Object(a.jsx)("p",{className:"".concat(n?"opacity-100":"opacity-50"," text-primarydark dark:text-background"),children:"Product"})]}),Object(a.jsxs)("li",{className:"inline-block w-1/5 relative",children:[Object(a.jsx)(p.a,{src:"/places/sea.svg",height:75,width:75,className:"".concat(c?"opacity-100":"opacity-50")}),Object(a.jsx)("br",{}),Object(a.jsx)(S,{filledSection2:q,children:Object(a.jsx)(p.a,{src:"/progress/".concat(q?"check":"remove",".svg"),height:32,width:32,className:"".concat(c?"opacity-100":"opacity-50")})}),Object(a.jsx)("p",{className:"".concat(c?"opacity-100":"opacity-50"," text-primarydark dark:text-background"),children:"Market"})]}),Object(a.jsxs)("li",{className:"inline-block w-1/5 relative",children:[Object(a.jsx)(p.a,{src:"/places/amsterdam.svg",height:75,width:75,className:"".concat(i?"opacity-100":"opacity-50")}),Object(a.jsx)("br",{}),Object(a.jsx)(T,{filledSection3:E,children:Object(a.jsx)(p.a,{src:"/progress/".concat(E?"check":"remove",".svg"),height:32,width:32,className:"".concat(i?"opacity-100":"opacity-50")})}),Object(a.jsx)("p",{className:"".concat(i?"opacity-100":"opacity-50"," text-primarydark dark:text-background"),children:"Finances"})]}),Object(a.jsxs)("li",{className:"inline-block w-1/5 relative",children:[Object(a.jsx)(p.a,{src:"/places/pirate.svg",height:75,width:75,className:"".concat(d?"opacity-100":"opacity-50")}),Object(a.jsx)("br",{}),Object(a.jsx)(I,{filledSection4:_,children:Object(a.jsx)(p.a,{src:"/progress/".concat(_?"check":"remove",".svg"),height:32,width:32,className:"".concat(d?"opacity-100":"opacity-50")})}),Object(a.jsx)("p",{className:"".concat(d?"opacity-100":"opacity-50"," text-primarydark dark:text-background"),children:"Model"})]})]})})}}},[["KTft",2,0,3,5,1,4,6,7,8,9,10,11,13]]]);