"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[757],{293:function(n,e,t){t.d(e,{Bt:function(){return m},Fn:function(){return l},Y5:function(){return f},_k:function(){return s},y:function(){return v}});var r=t(861),c=t(687),u=t.n(c),a="https://api.themoviedb.org/",o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTljOWIxN2VjNGRjMTE5NGZhM2ZhMzE5NjZmZjQ1MCIsInN1YiI6IjY0NmNkZDJjNzA2YjlmMDBmZTU0MmYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._EPljdPLGA2vemLx2WJWdxYEBVsaBhAo9KW81IlKbcM"}};function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(a,"3/trending/movie/day?language=en-US"),o);case 3:return e=n.sent,n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function l(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(a,"3/search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1"),o);case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(a,"3/movie/").concat(e,"?language=en-US"),o);case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function v(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(a,"3/movie/").concat(e,"/credits?language=en-US"),o);case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(a,"3/movie/").concat(e,"/reviews?language=en-US&page=1"),o);case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}},757:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,c,u,a=t(861),o=t(439),s=t(687),i=t.n(s),l=t(791),p=t(87),f=t(766),h=t(706),v=h.Z.form(r||(r=(0,f.Z)(["\n  padding: 20px;\n"]))),d=h.Z.input(c||(c=(0,f.Z)(["\n  width: 250px;\n  height: 20px;\n  border-radius: 4px;\n  border-color: blue;\n \n"]))),m=h.Z.button(u||(u=(0,f.Z)(["\n  width: 100px;\n  height: 25px;\n  font-size: 14px;\n\n  &:hover {\n    color: blue;\n    border-color: blue;\n    border-radius: 4px;\n  }\n"]))),x=t(184),g=function(n){var e,t=n.onSubmit,r=(0,p.lr)(),c=(0,o.Z)(r,2),u=c[0],a=c[1],s=null!==(e=u.get("query"))&&void 0!==e?e:"";return(0,x.jsxs)(v,{onSubmit:function(n){n.preventDefault(),""!==s.trim()?t(s):window.alert("Fill the search form!")},children:[(0,x.jsx)(d,{type:"text",value:s,onChange:function(n){if(""===n.target.value)return a({});a({query:n.target.value})}}),(0,x.jsx)(m,{typeof:"submit",children:"Search"})]})},b=t(293),j=t(689),y=function(n){var e=n.list,t=(0,j.TH)();return console.log(e),(0,x.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(n){return(0,x.jsx)(p.rU,{to:"".concat(n.id),state:{from:t},children:(0,x.jsx)("li",{children:n.title})},n.id)}))})},Z=function(){var n=(0,l.useState)(""),e=(0,o.Z)(n,2),t=e[0],r=e[1],c=(0,l.useState)([]),u=(0,o.Z)(c,2),s=u[0],p=u[1];(0,l.useEffect)((function(){function n(){return(n=(0,a.Z)(i().mark((function n(){var e,r,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,""!==t){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,(0,b.Fn)(t);case 5:e=n.sent,r=e.results,c=r.map((function(n){return{title:n.title,id:n.id}})),p(c),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{onSubmit:function(n){r(n)}}),(0,x.jsx)(y,{list:s})]})}},861:function(n,e,t){function r(n,e,t,r,c,u,a){try{var o=n[u](a),s=o.value}catch(i){return void t(i)}o.done?e(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,u){var a=n.apply(e,t);function o(n){r(a,c,u,o,s,"next",n)}function s(n){r(a,c,u,o,s,"throw",n)}o(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=757.ed4c8418.chunk.js.map