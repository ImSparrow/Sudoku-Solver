(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(t,e,r){},function(t,e,r){},function(t,e,r){},,function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(4),c=r.n(a),i=(r(9),r(10),r(2)),u=(r(11),r(0));var f=function(t){var e=Object(n.useState)(t.number),r=Object(i.a)(e,2),o=r[0],a=r[1];return Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("textarea",{id:t.id,type:"number",rows:"1",cols:"1",maxlength:"1",value:o,onChange:function(e){a(e.target.value),t.onNewBoard(e.target.value,t.id)}})})};r(13);var s=function(t){function e(t){for(var e=0;e<t.length;e++)for(var r=new Array(10),n=new Array(10),o=0;o<t[e].length;o++){if(r.includes(t[e][o]))return!1;if(r[t[e][o]]=t[e][o],n.includes(t[o][e]))return!1;n[t[o][e]]=t[o][e]}for(var a=0;a<9;a++){var c=new Array(10);for(e=3*Math.floor(a/3);e<3*Math.floor(a/3)+3;e++)for(o=a%3*3;o<a%3*3+3;o++){if(c.includes(t[e][o]))return!1;c[t[e][o]]=t[e][o]}}for(e=0;e<t.length;e++)if(t[e].includes(0))return!1;return!0}function r(t){for(var a=0;a<81;a++){var c=Math.floor(a/9),i=a%9;if(0==t[c][i]){for(var u=1;u<10;u++)if(!t[c].includes(u)&&!n(t,i,u)){var f=o(t,3*Math.floor(c/3)+Math.floor(i/3));if(!f[0].includes(u)&&!f[1].includes(u)&&!f[2].includes(u)){if(t[c][i]=u,e(t))return!0;if(r(t))return!0}}return t[c][i]=0,!1}}}function n(t,e,r){for(var n=0;n<9;n++)if(t[n][e]==r)return!0;return!1}function o(t,e){for(var r=[[],[],[]],n=3*Math.floor(e/3);n<3*Math.floor(e/3)+3;n++)for(var o=e%3*3;o<e%3*3+3;o++)n<3?o<3?r[n][o]=t[n][o]:o<6?r[n][o-3]=t[n][o]:r[n][o-6]=t[n][o]:n<6?o<3?r[n-3][o]=t[n][o]:o<6?r[n-3][o-3]=t[n][o]:r[n-3][o-6]=t[n][o]:o<3?r[n-6][o]=t[n][o]:o<6?r[n-6][o-3]=t[n][o]:r[n-6][o-6]=t[n][o];return r}var a=t.boardState;return Object(u.jsx)("div",{children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r(a)&&t.onSolve(a)},children:Object(u.jsx)("button",{type:"submit",children:"Solve"})})})};var l=function(t){var e=-1,r=Object(n.useState)(t.boardState),o=Object(i.a)(r,2),a=o[0],c=o[1],l=Object(n.useState)(!1),d=Object(i.a)(l,2),b=d[0],j=d[1];function v(t,e){var r=a,n=e%9;r[Math.floor(e/9)][n]=parseInt(t),c(r),j(!1)}return Object(u.jsxs)("div",{className:"outer-grid",children:[Object(u.jsxs)("div",{className:"grid",children:[!b&&a.map((function(t){return t.map((function(t){return e++,Object(u.jsx)(f,{id:e.toString(),number:t,onNewBoard:v})}))})),b&&a.map((function(t){return t.map((function(t){return e++,Object(u.jsx)(f,{id:e.toString(),number:t,onNewBoard:v})}))}))]}),Object(u.jsx)(s,{boardState:a,onSolve:function(t){c(t),j(!0)}})]})};var d=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(l,{boardState:[[0,0,8,4,0,3,5,0,6],[0,0,3,1,0,2,0,0,4],[0,4,5,7,0,0,0,9,0],[6,9,0,0,0,5,0,0,7],[0,8,0,0,0,0,0,5,0],[4,0,0,3,0,0,0,1,8],[0,7,0,0,0,6,2,4,0],[1,0,0,5,0,7,8,0,0],[8,0,6,9,0,1,3,0,0]]})})},b=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,15)).then((function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;r(t),n(t),o(t),a(t),c(t)}))};c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),b()}],[[14,1,2]]]);
//# sourceMappingURL=main.882dd839.chunk.js.map