_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[43],{CWuM:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("vJKn"),c=n.n(a),s=n("rg98"),i=n("20a2"),o=n("q1tI"),u=n("fwV1"),l=n("U6Mw"),d=n("cqNN");t.default=function(){var e=Object(o.useState)(""),t=e[0],n=e[1],a=Object(o.useState)(""),p=a[0],f=a[1],m=Object(i.useRouter)(),b=Object(d.b)().currentUser;console.log(b);var x=function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!p){e.next=8;break}return e.next=4,l.b.collection("users").doc(b.uid).set({name:t},{merge:!0});case 4:return m.push("/dashboard/welcome"),e.abrupt("return");case 8:alert(":(((");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("ul",{className:"circles",children:[Object(r.jsx)("li",{}),Object(r.jsx)("li",{}),Object(r.jsx)("li",{}),Object(r.jsx)("li",{}),Object(r.jsx)("li",{}),Object(r.jsx)("li",{}),Object(r.jsx)("li",{}),Object(r.jsx)("li",{}),Object(r.jsx)("li",{}),Object(r.jsx)("li",{})]}),Object(r.jsxs)("div",{className:"h-screen w-full flex justify-center items-center bg-background flex-col",children:[Object(r.jsxs)("div",{className:"z-50 p-10 h-auto grid grid-cols-1 grid-rows-3 w-auto max-w-nameContainer w-full bg-white rounded-3xl",children:[Object(r.jsxs)("div",{className:"row-span-1 text-center",children:[Object(r.jsxs)("div",{className:"text-2xl font-medium",children:[Object(r.jsx)("img",{src:"/gifs/sparkles.gif",height:50,width:50,className:"inline-block relative bottom-2"})," ","What is your name?"]}),Object(r.jsx)("div",{className:"text-base text-gray px-4",children:"Oops, one more tiny step and we will get down to business."})]}),Object(r.jsx)("div",{className:"row-span-2",children:Object(r.jsxs)("form",{onSubmit:x,className:"z-50 px-4 pt-2 rounded-2xl mt-4",children:[Object(r.jsxs)("div",{className:"mb-8",children:[Object(r.jsx)("label",{className:"block text-sm font-medium mb-2",htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{className:"text-primarydark w-full z-50 shadow appearance-none rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline",value:t,onChange:function(e){return n(e.target.value)},type:"name",placeholder:"name"})]}),Object(r.jsxs)("div",{className:"mb-8",children:[Object(r.jsx)("label",{className:"block text-sm font-medium mb-2",htmlFor:"userCountry",children:"Country"}),Object(r.jsx)(u.a,{id:"country",defaultOptionLabel:"country",className:"".concat(p?"text-primarydark":"text-placeholder"," w-full z-50 shadow appearance-none rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"),value:p,onChange:function(e){return f(e)}})]}),Object(r.jsx)("hr",{style:{width:"100%",color:"#6C63FF"}}),Object(r.jsxs)("div",{className:"flex items-center justify-between mt-8",children:[Object(r.jsx)("p",{className:"text-primarydark",children:"Back"}),Object(r.jsx)("button",{type:"submit",className:"z-50 border-2 border-primary hover:bg-primary hover:text-white text-primary font-medium py-1.5 px-6 rounded-2xl focus:outline-none",children:"Let's start"})]})]})})]}),Object(r.jsx)("div",{className:"text-center mt-4 text-sm text-gray-400 text-primarydark max-w-nameContainer px-4",children:"\u201cAlways think outside the box and embrace opportunities that appear, wherever they might be.\u201d"})]})]})}},LzPb:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/name",function(){return n("CWuM")}])},cqNN:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f}));var r=n("nKUr"),a=n("vJKn"),c=n.n(a),s=n("rg98"),i=n("U6Mw"),o=n("q1tI"),u=n("p46w"),l=n.n(u),d=(n("20a2"),Object(o.createContext)()),p=function(){return Object(o.useContext)(d)},f=function(e){var t=e.children,n=Object(o.useState)(),a=n[0],u=n[1],p=Object(o.useState)(!0),f=p[0],m=p[1],b=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return e.next=3,w(t);case 3:return n=e.sent,i.b.collection("users").doc(t.uid).set({formatedUser:n},{merge:!0}),u(n),l.a.set("uid",t.uid),m(!1),e.abrupt("return",n);case 11:return u(!1),l.a.remove("uid"),m(!1),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.createUserWithEmailAndPassword(t,n).then((function(e){return b(e.user)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){var e=i.a.onIdTokenChanged(b);return function(){return e()}}),[]);var j={currentUser:a,signUp:x,logIn:function(e,t){return i.a.signInWithEmailAndPassword(e,t)},logOut:function(){return i.a.signOut()}},h=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.auth().currentUser.getIdToken(!0);case 2:return e.next=4,i.c.auth().currentUser.getIdTokenResult();case 4:return t=e.sent,e.abrupt("return",t.claims.stripeRole||"free");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("OFF - ",t),e.next=3,t.getIdToken();case 3:return n=e.sent,e.t0=t.uid,e.t1=t.email,e.t2=t.providerData[0].providerId,e.next=9,h();case 9:return e.t3=e.sent,e.t4=n,e.abrupt("return",{uid:e.t0,email:e.t1,provider:e.t2,stripeRole:e.t3,token:e.t4});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(d.Provider,{value:j,children:!f&&t})}},p46w:function(e,t,n){var r,a;!function(c){if(void 0===(a="function"===typeof(r=c)?r.call(t,n,t,e):r)||(e.exports=a),!0,e.exports=c(),!!0){var s=window.Cookies,i=window.Cookies=c();i.noConflict=function(){return window.Cookies=s,i}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function a(){}function c(t,n,c){if("undefined"!==typeof document){"number"===typeof(c=e({path:"/"},a.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var s=JSON.stringify(n);/^[\{\[]/.test(s)&&(n=s)}catch(u){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var o in c)c[o]&&(i+="; "+o,!0!==c[o]&&(i+="="+c[o].split(";")[0]));return document.cookie=t+"="+n+i}}function s(e,n){if("undefined"!==typeof document){for(var a={},c=document.cookie?document.cookie.split("; "):[],s=0;s<c.length;s++){var i=c[s].split("="),o=i.slice(1).join("=");n||'"'!==o.charAt(0)||(o=o.slice(1,-1));try{var u=t(i[0]);if(o=(r.read||r)(o,u)||t(o),n)try{o=JSON.parse(o)}catch(l){}if(a[u]=o,e===u)break}catch(l){}}return e?a[e]:a}}return a.set=c,a.get=function(e){return s(e,!1)},a.getJSON=function(e){return s(e,!0)},a.remove=function(t,n){c(t,"",e(n,{expires:-1}))},a.defaults={},a.withConverter=n,a}((function(){}))}))}},[["LzPb",1,0,3,5,2,4,13]]]);