(this.webpackJsonplearning=this.webpackJsonplearning||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(0),c=n.n(a),s=n(14),i=n.n(s),o=(n(38),n(6)),j=n(49),u=n(51),l=(n(39),n(16)),h=n(15),d=n(50),b=n(48),f=function(e){var t=e.operator,n=e.left,a=e.right,s=e.onAnswer,i=c.a.useState(),o=Object(h.a)(i,2),j=o[0],u=o[1];return Object(r.jsxs)("div",{children:[n," ",t," ",a," =",Object(r.jsx)(d.a.Control,{type:"number",value:j,onChange:function(e){return u(e.target.value)}}),Object(r.jsx)(b.a,{onClick:function(){return s(parseInt(j))},children:"Answer"})]})},O=function(e){var t=e.result,n=e.expected,a=e.onDone;return c.a.useEffect((function(){var e=setTimeout(a,3e3);return function(){return clearTimeout(e)}})),Object(r.jsx)("div",{children:t===n?"RIGHT!!!!":"Wrong :("})};function x(e){return Math.floor(Math.random()*Math.floor(e))}var g=function(){var e=x(12),t=x(12);return{left:e,right:t,operator:"+",result:e+t}},p=function(){var e=c.a.useState(g()),t=Object(h.a)(e,2),n=t[0],a=t[1],s=c.a.useState("question"),i=Object(h.a)(s,2),o=i[0],j=i[1],u=c.a.useState(0),l=Object(h.a)(u,2),d=l[0],b=l[1];switch(o){case"question":return Object(r.jsx)(f,{left:n.left,right:n.right,operator:n.operator,onAnswer:function(e){b(e),j("result")}});case"result":return Object(r.jsx)(O,{result:d,expected:n.result,onDone:function(){a(g()),j("question")}});default:return Object(r.jsx)("div",{children:"You shouldn't see this..."})}},v=function(){return Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{path:"/math/flash/addition",children:Object(r.jsx)(p,{})}),Object(r.jsx)(o.a,{path:"/math",children:Object(r.jsx)(l.b,{to:"/math/flash/addition",children:"Addition flash cards"})})]})};var m=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)(j.a,{bg:"light",expand:"lg",children:[Object(r.jsx)(j.a.Brand,{href:"/",children:"Learning!"}),Object(r.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(r.jsxs)(u.a,{className:"mr-auto",children:[Object(r.jsx)(u.a.Link,{href:"/",children:"Home"}),Object(r.jsx)(u.a.Link,{href:"/math",children:"Math"})]})})]}),Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{path:"/math",children:Object(r.jsx)(v,{})}),Object(r.jsx)(o.a,{path:"/",children:Object(r.jsx)("div",{children:"Choose a subject"})})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(l.a,{basename:"/learning",children:Object(r.jsx)(m,{})})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.f3ab8e40.chunk.js.map