"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{896:function(e,n,t){t.d(n,{HG:function(){return c},Hg:function(){return o},TP:function(){return a},tx:function(){return h},zv:function(){return u}});var r=t(340),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzQzZDVmYzIwZjYyMDMyMTA5NmYxYzNiMTI4ZjNkZSIsInN1YiI6IjY1NjlkMjZiYjdkMzUyMDEwYjU0MjVkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kixlzSjShWL6h0MUp1Hlkm4hdcegl7qebxp6vm49PGI"}};function o(e){return(0,r.Z)("https://api.themoviedb.org/3/trending/all/".concat(e,"?language=en-US"),i)}function c(e){var n=new URLSearchParams({query:e});return(0,r.Z)("".concat("https://api.themoviedb.org/3/search/movie","?").concat(n),i)}function a(e){return(0,r.Z)("https://api.themoviedb.org/3/movie/".concat(e),i)}function u(e){return(0,r.Z)("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),i)}function h(e){return(0,r.Z)("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),i)}},186:function(e,n,t){t.r(n),t.d(n,{Reviews:function(){return u}});var r=t(439),i=t(896),o=t(791),c=t(689),a=t(184),u=function(){var e=(0,o.useState)(null),n=(0,r.Z)(e,2),t=n[0],u=n[1],h=(0,o.useState)(!1),s=(0,r.Z)(h,2),l=s[0],d=s[1],f=(0,c.UO)().moviesId;return(0,o.useEffect)((function(){if(f){d(!0);(0,i.tx)(f).then((function(e){u(e.data.results)})).catch((function(e){return console.log("error",e.message)})).finally((function(){return d(!1)}))}}),[f]),(0,a.jsxs)(a.Fragment,{children:[l&&(0,a.jsx)("p",{children:"Loading..."}),t&&(0===t.length?(0,a.jsx)("h2",{children:"We dont have any reviews for this movie."}):(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:t.map((function(e){return(0,a.jsxs)("li",{children:[(0,a.jsxs)("h3",{children:["Author: ",e.author]}),(0,a.jsxs)("p",{children:["Username: ",e.author_details.username]}),(0,a.jsx)("p",{children:e.content})]},e.id)}))})}))]})};n.default=u}}]);
//# sourceMappingURL=186.59d57979.chunk.js.map