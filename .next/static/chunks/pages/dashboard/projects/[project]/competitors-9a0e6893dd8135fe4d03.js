_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{H38B:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),c=r("q1tI"),o=r("z7pX"),i=r("vJKn"),s=r.n(i),a=r("rg98"),l=r("U6Mw"),d=r("xBw7"),p=(r("dDAu"),r("20a2")),u=r.n(p),m=r("IF/j"),j=r("Aiso"),h=r.n(j),x=r("z/o8"),f=r("pc+1"),g=r("b6Qr"),b=function(e){var t=e.data,r=e.projectId,i=e.documentId,d=e.competitors,p=e.index,j=(e.setCompetitors,e.provided,Object(c.useState)("")),b=j[0],y=j[1],O=Object(c.useState)(""),w=O[0],v=O[1],k=Object(c.useState)(""),C=k[0],S=k[1],N=Object(c.useState)(""),V=N[0],I=N[1],T=Object(c.useState)(""),z=T[0],D=T[1],E=Object(c.useState)(""),B=E[0],H=E[1],M=Object(c.useState)(""),A=M[0],W=M[1],P=Object(c.useState)(""),L=P[0],R=P[1],q=Object(c.useState)(""),_=q[0],F=q[1],Z=Object(c.useState)(""),Q=Z[0],U=Z[1],J=Object(c.useState)(""),X=J[0],G=J[1],K=Object(c.useState)(""),Y=K[0],$=K[1],ee=Object(c.useState)(""),te=ee[0],re=ee[1];Object(c.useEffect)((function(){y(t.image),v(t.title),S(t.location),I(t.employees),D(t.revenue),H(t.index),W(t.companyDescription),R(t.businessModel),F(t.productOverview),U(t.promotionStrategy),G(t.companyStrengths),$(t.companyWeaknesses),re(t.opportunities)}),[d]);var ne=function(){var e=Object(a.a)(s.a.mark((function e(t){var n,c,a,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],c=l.d.ref(),a=c.child(n.name),e.next=5,a.put(n);case 5:return e.t0=y,e.next=8,a.getDownloadURL();case 8:return e.t1=e.sent,(0,e.t0)(e.t1),m=Object(o.a)(d),e.next=13,a.getDownloadURL();case 13:return e.t2=e.sent,e.t3=w,e.t4=C,e.t5=V,e.t6=z,e.t7=B,e.t8=A,e.t9=L,e.t10=_,e.t11=Q,e.t12=X,e.t13=Y,e.t14=te,m[p]={image:e.t2,title:e.t3,location:e.t4,employees:e.t5,revenue:e.t6,elementIndex:e.t7,companyDescription:e.t8,businessModel:e.t9,productOverview:e.t10,promotionStrategy:e.t11,companyStrengths:e.t12,companyWeaknesses:e.t13,opportunities:e.t14},e.next=29,l.b.collection("projects").doc(r).collection("competitors").doc(u.a.query.project).collection("inputs").doc(i).update({competitorsArray:m});case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(e,t){console.log(t),"title"===t&&v(e),"location"===t&&S(e),"employees"===t&&I(e),"revenue"===t&&D(e),"companyDescription"===t&&W(e),"businessModel"===t&&R(e),"productOverview"===t&&F(e),"promotionStrategy"===t&&U(e),"companyStrengths"===t&&G(e),"companyWeaknesses"===t&&$(e),"opportunities"===t&&re(e);var r=Object(o.a)(d);r[p]={title:"title"===t?e:w,location:"location"===t?e:C,employees:"employees"===t?e:V,revenue:"revenue"===t?e:z,image:b,index:B,companyDescription:"companyDescription"===t?e:A,businessModel:"businessModel"===t?e:L,productOverview:"productOverview"===t?e:_,promotionStrategy:"promotionStrategy"===t?e:Q,companyStrengths:"companyStrengths"===t?e:X,companyWeaknesses:"companyWeaknesses"===t?e:Y,opportunities:"opportunities"===t?e:te},oe(r)},oe=Object(c.useCallback)(Object(m.a)(function(){var e=Object(a.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.b.collection("projects").doc(r).collection("competitors").doc(u.a.query.project).collection("inputs").doc(i).update({competitorsArray:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),300),[]),ie=function(){var e=Object(a.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.filter((function(e){return t!==e.index})),e.next=3,l.b.collection("projects").doc(r).collection("competitors").doc(u.a.query.project).collection("inputs").doc(i).update({competitorsArray:n});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=Object(c.useState)(!1),ae=se[0],le=se[1],de=document.getElementById("descriptionTitle".concat(p)),pe=document.getElementById("placeholderTitle".concat(p)),ue=document.getElementById("descriptionModel".concat(p)),me=document.getElementById("placeholderModel".concat(p)),je=document.getElementById("descriptionProduct".concat(p)),he=document.getElementById("placeholderProduct".concat(p)),xe=document.getElementById("descriptionPromotion".concat(p)),fe=document.getElementById("placeholderPromotion".concat(p)),ge=document.getElementById("descriptionStrengths".concat(p)),be=document.getElementById("placeholderStrengths".concat(p)),ye=document.getElementById("descriptionWeaknesses".concat(p)),Oe=document.getElementById("placeholderWeaknesses".concat(p)),we=document.getElementById("descriptionOpportunities".concat(p)),ve=document.getElementById("placeholderOpportunities".concat(p)),ke=document.getElementById("dropdown".concat(p)),Ce=document.getElementById("data".concat(p));Object(c.useEffect)((function(){if(!g.isMobile){var e=document.getElementById("container".concat(p)),t=document.getElementById("manager".concat(p));e.addEventListener("mouseenter",(function(){x.a.to(t,{height:40,duration:.5,ease:f.b.easeIn})})),e.addEventListener("mouseleave",(function(){x.a.to(t,{height:0,duration:.5,ease:f.b.easeOut})}))}}),[]);return Object(n.jsxs)("div",{style:{height:"fit-content"},id:"container".concat(p),className:"w-full bg-background rounded-2xl p-4 ssmContainer:p-6 shadow-md overflow-hidden mt-8 smContainer:mt-8",children:[Object(n.jsxs)("div",{style:{height:"".concat(g.isMobile?40:0),top:"".concat(g.isMobile?"-6px":"-12px")},id:"manager".concat(p),className:"flex justify-between relative -top-3",children:[Object(n.jsx)("img",{className:"cursor-pointer",onClick:function(){var e=de.offsetHeight+pe.offsetHeight+ue.offsetHeight+me.offsetHeight+24+je.offsetHeight+he.offsetHeight+24+xe.offsetHeight+fe.offsetHeight+24+ge.offsetHeight+be.offsetHeight+24+ye.offsetHeight+Oe.offsetHeight+24+we.offsetHeight+ve.offsetHeight+24;ae?ae&&(x.a.to(Ce,{height:0,marginTop:0,marginBottom:0,autoAlpha:0,duration:1,ease:f.b}),x.a.to(ke,{rotation:"-90_ccw",duration:1,ease:f.b}),le(!1)):(x.a.to(Ce,{height:e,marginTop:32,marginBottom:112,autoAlpha:1,duration:1,ease:f.b}),x.a.to(ke,{rotation:"0_cw",duration:1,ease:f.b}),le(!0))},id:"dropdown".concat(p),src:"/competitors/dropdown.svg",height:20,width:20}),Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)("img",{className:"cursor-pointer mr-2",src:"/competitors/drag.svg",height:20,width:20}),Object(n.jsx)(h.a,{className:"cursor-pointer",onClick:function(){return ie(t.index)},src:"/competitors/remove.svg",height:20,width:20})]})]}),Object(n.jsxs)("div",{id:p,className:"flex gap-6 flex-col justify-center items-center smContainer:gap-0 smContainer:grid smContainer:grid-cols-12fr",children:[Object(n.jsxs)("div",{className:"smContainer:col-start-1 smContainer:col-end-4 justify-self-center flex justify-start items-center",children:[""!==b?Object(n.jsx)("label",{htmlFor:"upload-image".concat(p),className:"relative w-20 h-20 cursor-pointer rounded-full bg-white flex justify-center items-center",children:Object(n.jsx)("img",{src:b,height:55,width:55})}):Object(n.jsx)("div",{children:Object(n.jsx)("label",{htmlFor:"upload-image".concat(p),className:"w-20 h-20 cursor-pointer rounded-full bg-primary flex justify-center items-center",children:Object(n.jsx)(h.a,{src:"/competitors/empty-image.svg",height:65,width:65})})}),Object(n.jsx)("input",{type:"file",id:"upload-image".concat(p),style:{display:"none",zIndex:10},onChange:ne})]}),Object(n.jsxs)("div",{className:"smContainer:col-start-5 smContainer:col-end-13 grid grid-cols-2fr grid-rows-2fr justify-items-center items-center gap-x-4 ssmContainer:gap-x-8 gap-y-2 ssmContainer:gap-y-4",children:[Object(n.jsx)("div",{children:Object(n.jsx)("input",{onChange:function(e){return ce(e.target.value,"title")},value:w,className:"bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",placeholder:"name"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{onChange:function(e){return ce(e.target.value,"location")},value:C,className:"bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",placeholder:"location"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{onChange:function(e){return ce(e.target.value,"employees")},value:V,className:"bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",placeholder:"employees"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{onChange:function(e){return ce(e.target.value,"revenue")},value:z,className:"bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",placeholder:"revenue"})})]})]}),Object(n.jsxs)("div",{id:"data".concat(p),className:"w-full h-0 invisible",children:[Object(n.jsxs)("div",{id:"descriptionTitle".concat(p),className:"flex justify-start items-center",children:[Object(n.jsx)(h.a,{src:"/competitors/description.svg",height:22,width:22}),Object(n.jsx)("p",{className:"text-primarydark ml-2",children:"Company description"})]}),Object(n.jsx)("textarea",{value:A,onChange:function(e){return ce(e.target.value,"companyDescription")},id:"placeholderTitle".concat(p),className:"w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",placeholder:"Describe the main assumption of analyzed company."}),Object(n.jsxs)("div",{id:"descriptionModel".concat(p),className:"flex justify-start items-center mt-6",children:[Object(n.jsx)(h.a,{src:"/competitors/model.svg",height:22,width:22}),Object(n.jsx)("p",{className:"text-primarydark ml-2",children:"Business model"})]}),Object(n.jsx)("textarea",{value:L,onChange:function(e){return ce(e.target.value,"businessModel")},id:"placeholderModel".concat(p),className:"w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",placeholder:"How does the company business model look like?"}),Object(n.jsxs)("div",{id:"descriptionProduct".concat(p),className:"flex justify-start items-center mt-6",children:[Object(n.jsx)(h.a,{src:"/competitors/product1.svg",height:22,width:22}),Object(n.jsx)("p",{className:"text-primarydark ml-2",children:"Product overview"})]}),Object(n.jsx)("textarea",{value:_,onChange:function(e){return ce(e.target.value,"productOverview")},id:"placeholderProduct".concat(p),className:"w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",placeholder:"What is the full range of products and services the company offers?"}),Object(n.jsxs)("div",{id:"descriptionPromotion".concat(p),className:"flex justify-start items-center mt-6",children:[Object(n.jsx)(h.a,{src:"/competitors/promotion.svg",height:22,width:22}),Object(n.jsx)("p",{className:"text-primarydark ml-2",children:"Promotion strategy"})]}),Object(n.jsx)("textarea",{value:Q,onChange:function(e){return ce(e.target.value,"promotionStrategy")},id:"placeholderPromotion".concat(p),className:"w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",placeholder:"What are the company marketing and promotional strategies?"}),Object(n.jsxs)("div",{id:"descriptionStrengths".concat(p),className:"flex justify-start items-center mt-6",children:[Object(n.jsx)(h.a,{src:"/competitors/strengths.svg",height:22,width:22}),Object(n.jsx)("p",{className:"text-primarydark ml-2",children:"Company strengths"})]}),Object(n.jsx)("textarea",{value:X,onChange:function(e){return ce(e.target.value,"companyStrengths")},id:"placeholderStrengths".concat(p),className:"w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",placeholder:"What do your competitors do really well that differentiates them?"}),Object(n.jsxs)("div",{id:"descriptionWeaknesses".concat(p),className:"flex justify-start items-center mt-6",children:[Object(n.jsx)(h.a,{src:"/competitors/weaknesses.svg",height:22,width:22}),Object(n.jsx)("p",{className:"text-primarydark ml-2",children:"Company Weaknesses"})]}),Object(n.jsx)("textarea",{value:Y,onChange:function(e){return ce(e.target.value,"companyWeaknesses")},id:"placeholderWeaknesses".concat(p),className:"w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",placeholder:"What do the company customers complain about the most, and what products do they lack?"}),Object(n.jsxs)("div",{id:"descriptionOpportunities".concat(p),className:"flex justify-start items-center mt-6",children:[Object(n.jsx)(h.a,{src:"/competitors/opportunities2.svg",height:22,width:22}),Object(n.jsx)("p",{className:"text-primarydark ml-2",children:"Opportunities"})]}),Object(n.jsx)("textarea",{value:te,onChange:function(e){return ce(e.target.value,"opportunities")},id:"placeholderOpportunities".concat(p),className:"w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",placeholder:"What distinguish your startup from this particular competitive company?"})]})]})},y=r("p46w"),O=r.n(y),w=r("7Cbv"),v=r("Iab2"),k=r("QhkM"),C=r("yr6r");C.Font.register({src:"/fonts/comfortaa.ttf",family:"Comfortaa"});var S=C.StyleSheet.create({homePage:{padding:36,fontFamily:"Comfortaa",backgroundColor:"#f8f9fb",color:"#0a1230"},mainTitle:{fontSize:22,color:"#0a1230",textAlign:"center",paddingBottom:42}}),N=function(e){var t=e.competitors;return Object(n.jsx)(C.Document,{scale:96/72,renderMode:"svg",children:t.map((function(e,t){return Object(n.jsxs)(C.Page,{size:"A4",style:S.homePage,children:[0===t&&Object(n.jsx)(C.View,{children:Object(n.jsx)(C.Text,{style:S.mainTitle,children:"Competitors analysis"})}),Object(n.jsxs)(C.View,{style:{display:"flex",flexDirection:"row"},children:[""===e.image?Object(n.jsx)(C.View,{style:{height:72,width:72,backgroundColor:"#6C63FF",borderRadius:9999,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(n.jsx)(C.Image,{src:"/competitors/empty-image-pdf.png",height:64,width:64})}):Object(n.jsx)(C.View,{}),Object(n.jsxs)(C.View,{style:{fontSize:12},children:[Object(n.jsxs)(C.View,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignContent:"space-between",marginLeft:32,width:"100%"},children:[""!==e.title&&Object(n.jsx)(C.View,{style:{backgroundColor:"#fcfefe",borderRadius:16,paddingVertical:8,paddingHorizontal:16},children:Object(n.jsxs)(C.Text,{children:["name / ",e.title]})}),""!==e.location&&Object(n.jsx)(C.View,{style:{backgroundColor:"#fcfefe",borderRadius:16,paddingVertical:8,paddingHorizontal:16},children:Object(n.jsxs)(C.Text,{children:["location / ",e.location]})})]}),Object(n.jsxs)(C.View,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignContent:"space-between",marginLeft:32,marginTop:12,width:"100%"},children:[""!==e.employees&&Object(n.jsx)(C.View,{style:{backgroundColor:"#fcfefe",borderRadius:16,paddingVertical:8,paddingHorizontal:16},children:Object(n.jsxs)(C.Text,{children:["employees / ",e.employees]})}),""!==e.revenue&&Object(n.jsx)(C.View,{style:{backgroundColor:"#fcfefe",borderRadius:16,paddingVertical:8,paddingHorizontal:16},children:Object(n.jsxs)(C.Text,{children:["revenue / ",e.revenue]})})]})]})]}),""!==e.companyDescription&&Object(n.jsxs)(C.View,{wrap:!1,style:{marginTop:32},children:[Object(n.jsxs)(C.View,{style:{display:"flex",flexDirection:"row",alignItems:"flex-end",fontSize:14},children:[Object(n.jsx)(C.Image,{src:"/competitors/pdf/description.png",style:{height:20,width:20}}),Object(n.jsx)(C.Text,{style:{marginLeft:8},children:"Company description"})]}),Object(n.jsx)(C.View,{style:{backgroundColor:"#fcfefe",borderRadius:16,paddingVertical:12,paddingHorizontal:16,marginTop:8,fontSize:10},children:Object(n.jsx)(C.Text,{children:e.companyDescription})})]}),""!==e.businessModel&&Object(n.jsxs)(C.View,{wrap:!1,style:{marginTop:32},children:[Object(n.jsxs)(C.View,{style:{display:"flex",flexDirection:"row",alignItems:"flex-end",fontSize:14},children:[Object(n.jsx)(C.Image,{src:"/competitors/pdf/model.png",style:{height:20,width:20}}),Object(n.jsx)(C.Text,{style:{marginLeft:8},children:"Business model"})]}),Object(n.jsx)(C.View,{style:{backgroundColor:"#fcfefe",borderRadius:16,paddingVertical:12,paddingHorizontal:16,marginTop:8,fontSize:10},children:Object(n.jsx)(C.Text,{children:e.businessModel})})]}),""!==e.productOverview&&Object(n.jsxs)(C.View,{wrap:!1,style:{marginTop:32},children:[Object(n.jsxs)(C.View,{style:{display:"flex",flexDirection:"row",alignItems:"flex-end",fontSize:14},children:[Object(n.jsx)(C.Image,{src:"/competitors/pdf/product.png",style:{height:20,width:20}}),Object(n.jsx)(C.Text,{style:{marginLeft:8},children:"Product overview"})]}),Object(n.jsx)(C.View,{style:{backgroundColor:"#fcfefe",borderRadius:16,paddingVertical:12,paddingHorizontal:16,marginTop:8,fontSize:10},children:Object(n.jsx)(C.Text,{children:e.productOverview})})]}),""!==e.promotionStrategy&&Object(n.jsxs)(C.View,{wrap:!1,style:{marginTop:32},children:[Object(n.jsxs)(C.View,{style:{display:"flex",flexDirection:"row",alignItems:"flex-end",fontSize:14},children:[Object(n.jsx)(C.Image,{src:"/competitors/pdf/promotion.png",style:{height:20,width:20}}),Object(n.jsx)(C.Text,{style:{marginLeft:8},children:"Promotion strategy"})]}),Object(n.jsx)(C.View,{style:{backgroundColor:"#fcfefe",borderRadius:16,paddingVertical:12,paddingHorizontal:16,marginTop:8,fontSize:10},children:Object(n.jsx)(C.Text,{children:e.promotionStrategy})})]}),""!==e.companyStrengths&&Object(n.jsxs)(C.View,{wrap:!1,style:{marginTop:32},children:[Object(n.jsxs)(C.View,{style:{display:"flex",flexDirection:"row",alignItems:"flex-end",fontSize:14},children:[Object(n.jsx)(C.Image,{src:"/competitors/pdf/strengths.png",style:{height:20,width:20}}),Object(n.jsx)(C.Text,{style:{marginLeft:8},children:"Company strengths"})]}),Object(n.jsx)(C.View,{style:{backgroundColor:"#fcfefe",borderRadius:16,paddingVertical:12,paddingHorizontal:16,marginTop:8,fontSize:10},children:Object(n.jsx)(C.Text,{children:e.companyStrengths})})]}),""!==e.companyWeaknesses&&Object(n.jsxs)(C.View,{wrap:!1,style:{marginTop:32},children:[Object(n.jsxs)(C.View,{style:{display:"flex",flexDirection:"row",alignItems:"flex-end",fontSize:14},children:[Object(n.jsx)(C.Image,{src:"/competitors/pdf/weaknesses.png",style:{height:20,width:20}}),Object(n.jsx)(C.Text,{style:{marginLeft:8},children:"Company weaknesses"})]}),Object(n.jsx)(C.View,{style:{backgroundColor:"#fcfefe",borderRadius:16,paddingVertical:12,paddingHorizontal:16,marginTop:8,fontSize:10},children:Object(n.jsx)(C.Text,{children:e.companyWeaknesses})})]}),""!==e.opportunities&&Object(n.jsxs)(C.View,{wrap:!1,style:{marginTop:32},children:[Object(n.jsxs)(C.View,{style:{display:"flex",flexDirection:"row",alignItems:"flex-end",fontSize:14},children:[Object(n.jsx)(C.Image,{src:"/competitors/pdf/opportunities.png",style:{height:20,width:20}}),Object(n.jsx)(C.Text,{style:{marginLeft:8},children:"Company opportunities"})]}),Object(n.jsx)(C.View,{style:{backgroundColor:"#fcfefe",borderRadius:16,paddingVertical:12,paddingHorizontal:16,marginTop:8,fontSize:10},children:Object(n.jsx)(C.Text,{children:e.opportunities})})]})]})}))})},V=function(){var e=Object(c.useState)(),t=e[0],r=e[1],o=Object(k.a)();Object(c.useEffect)(Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("uid");case 2:if(t=e.sent,console.log(t),!t||!u.a.query.project){e.next=9;break}return e.next=7,l.b.collection("projects").where("uid","==",t);case 7:e.sent.where("projectName","==",u.a.query.project).get().then((function(e){e.forEach(function(){var e=Object(a.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.b.collection("projects").doc(t.data().projectId).collection("competitors").doc(u.a.query.project).collection("inputs").onSnapshot((function(e){e.docs.map((function(e){var t=e.data();r(t.competitorsArray)}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}));case 9:case"end":return e.stop()}}),e)}))),[]);var i=Object(c.useRef)(),d=Object(c.useState)(!1),p=(d[0],d[1],Object(c.useRef)()),m=Object(c.useRef)(),j=Object(c.useState)(!1),h=j[0],g=j[1],b=Object(c.useState)(!1),y=b[0],w=b[1];return Object(n.jsx)("div",{ref:i,className:"relative flex justify-start",children:o.width<680?Object(n.jsx)("div",{className:"flex mt-4",children:Object(n.jsx)("img",{onClick:function(){var e=Object(a.a)(s.a.mark((function e(r){var c,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),c=Object(n.jsx)(N,{competitors:t}),(o=Object(C.pdf)([])).updateContainer(c),e.next=6,o.toBlob();case 6:i=e.sent,Object(v.saveAs)(i,"".concat(u.a.query.project,"/competitors-analysis.pdf"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),src:"/mobile-navbar/pdf.svg",height:30,width:30})}):Object(n.jsxs)("div",{className:"relative w-full flex justify-end items-center",children:[Object(n.jsx)("button",{ref:p,onClick:function(){y?y&&(x.a.to(m.current,{autoAlpha:0,duration:1,ease:f.b}),w(!1),g(!1)):(x.a.to(m.current,{autoAlpha:1,duration:1,ease:f.b}),w(!0),g(!0))},className:"hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark ".concat(h?"bg-primary text-background dark:bg-primarydark dark:text-background":""),children:"Save my work"}),Object(n.jsxs)("div",{ref:m,className:"absolute bg-white rounded-2xl shadow-xl p-6 top-14 z-50 invisible opacity-0",children:[Object(n.jsxs)("div",{className:"flex items-center justify-start",children:[Object(n.jsx)("img",{src:"/mobile-navbar/success.svg",height:26,width:26}),Object(n.jsx)("p",{className:"text-lg ml-2",children:"Show the world your work!"})]}),Object(n.jsxs)("div",{className:"px-6 py-4 bg-background rounded-2xl mt-2 pr-6",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"flex",children:"Save as PDF:"}),Object(n.jsx)("img",{onClick:function(){var e=Object(a.a)(s.a.mark((function e(r){var c,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),c=Object(n.jsx)(N,{competitors:t}),(o=Object(C.pdf)([])).updateContainer(c),e.next=6,o.toBlob();case 6:i=e.sent,Object(v.saveAs)(i,"".concat(u.a.query.project,"/competitors-analysis.pdf"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),src:"/mobile-navbar/pdf.svg",height:30,width:30,className:"mt-2 cursor-pointer"})]}),Object(n.jsxs)("div",{className:"w-full justify-start items-center mt-4",children:[Object(n.jsx)("p",{children:"Share your competitors analysis with this public link:"}),Object(n.jsxs)("div",{className:"w-full flex mt-2",children:[Object(n.jsx)("input",{value:"www.project.com",className:"bg-linkBackground text-sm px-2 py-1 dark:text-primarydark"}),Object(n.jsx)("img",{src:"/mobile-navbar/foreign.svg",height:28,width:28})]})]})]})]})]})})},I=function(){var e=Object(c.useState)(""),t=e[0],r=e[1],i=Object(c.useState)(""),p=i[0],m=i[1],j=Object(c.useState)(),x=j[0],f=j[1],g=Object(k.a)(),y=Object(c.useState)(!1),v=y[0],C=y[1];Object(c.useEffect)(Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=O.a.get("uid"),console.log(t&&u.a.query.project),t&&u.a.query.project?l.b.collection("projects").where("uid","==",t).where("projectName","==",u.a.query.project).get().then((function(e){e.forEach(function(){var e=Object(a.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(t.data().projectId),l.b.collection("projects").doc(t.data().projectId).collection("competitors").doc(u.a.query.project).collection("inputs").onSnapshot((function(e){e.docs.map((function(e){console.log(e.data());var t=e.data();m(e.id),f(t.competitorsArray),C(!1)}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})):(console.log("Loading failed"),C(!0));case 3:case"end":return e.stop()}}),e)}))),[v,u.a.query.project]),console.log(x);var S=function(){var e=Object(a.a)(s.a.mark((function e(){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(o.a)(x),n={image:"",title:"",location:"",employees:"",revenue:"",index:Object(w.a)(),companyDescription:"",businessModel:"",productOverview:"",promotionStrategy:"",companyStrengths:"",companyWeaknesses:"",opportunities:""},r.push(n),f(r),e.next=6,l.b.collection("projects").doc(t).collection("competitors").doc(u.a.query.project).collection("inputs").doc(p).update({competitorsArray:r});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)(d.a,{children:Object(n.jsx)("div",{className:"min-h-screen w-full relative flex flex-col items-center text-primarydark",children:Object(n.jsxs)("div",{className:"w-full max-w-full relative mt-8 mdContainer:mt-16 mb-16 px-8 mdContainer:px-16 lgContainer:px-32 bigContainer:px-48 big2Container:px-64 big3Container:px-80 QHD:max-w-QHD",children:[Object(n.jsxs)("div",{className:"relative grid grid-cols-2 grid-rows-1 grid-flow-col",children:[Object(n.jsxs)("div",{className:"flex items-center",children:[Object(n.jsxs)("svg",{height:"30",width:"30",className:"fill-current text-primary dark:text-primarydark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",children:[Object(n.jsx)("title",{children:"Landing Success"}),Object(n.jsx)("g",{id:"Landing_Success","data-name":"Landing Success",children:Object(n.jsx)("path",{className:"cls-1",d:"M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"})})]}),Object(n.jsx)("p",{className:"text-primarydark text-xl ssmContainer:text-2xl mt-2 pl-2 dark:text-background",children:"Competitors analysis"})]}),g.width>680&&Object(n.jsx)(V,{})]}),Object(n.jsx)("div",{children:Object(n.jsx)("h1",{className:"text-secondary text-base ssmContainer:text-md text-gray",children:"Manage your startup competitors"})}),Object(n.jsxs)("div",{className:"w-full bg-white rounded-2xl mt-12 p-8",children:[Object(n.jsxs)("div",{className:"flex justify-between items-center",children:[Object(n.jsx)("p",{className:"text-primarydark text-md ssmContainer:text-lg",children:"Competitors"}),Object(n.jsx)(h.a,{className:"cursor-pointer",onClick:S,src:"/competitors/add1.svg",height:32,width:32})]}),Object(n.jsx)("div",{className:"grid grid-cols-1frr normalContainer:grid-cols-2fr gap-x-12",children:x&&x.map((function(e,r){return Object(n.jsx)(b,{setCompetitors:f,data:e,projectId:t,documentId:p,competitors:x,index:r},r)}))})]})]})})})};t.default=function(){return Object(n.jsx)(I,{})}},p0GD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/projects/[project]/competitors",function(){return r("H38B")}])}},[["p0GD",1,0,3,5,9,10,11,2,4,6,7,8,14,15,12,19]]]);