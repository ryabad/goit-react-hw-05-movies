"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[11],{896:function(e,t,n){n.d(t,{HG:function(){return a},Hg:function(){return c},TP:function(){return o},tx:function(){return l},zv:function(){return s}});var i=n(340),r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzQzZDVmYzIwZjYyMDMyMTA5NmYxYzNiMTI4ZjNkZSIsInN1YiI6IjY1NjlkMjZiYjdkMzUyMDEwYjU0MjVkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kixlzSjShWL6h0MUp1Hlkm4hdcegl7qebxp6vm49PGI"}};function c(e){return(0,i.Z)("https://api.themoviedb.org/3/trending/all/".concat(e,"?language=en-US"),r)}function a(e){var t=new URLSearchParams({query:e});return(0,i.Z)("".concat("https://api.themoviedb.org/3/search/movie","?").concat(t),r)}function o(e){return(0,i.Z)("https://api.themoviedb.org/3/movie/".concat(e),r)}function s(e){return(0,i.Z)("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),r)}function l(e){return(0,i.Z)("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),r)}},11:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(439),r=n(896),c=n(791),a=n(689),o=n(87),s="MoviesDetails_container__rv5K4",l=n(184),u=function(){var e=(0,c.useState)(null),t=(0,i.Z)(e,2),n=t[0],u=t[1],h=(0,a.UO)().moviesId,d=(0,c.useState)(!1),p=(0,i.Z)(d,2),m=p[0],f=p[1],j=(0,a.TH)();return(0,c.useEffect)((function(){if(h){f(!0);(0,r.TP)(h).then((function(e){u(e.data)})).catch((function(e){return console.log("error",e.message)})).finally((function(){return f(!1)}))}}),[h]),(0,l.jsxs)(l.Fragment,{children:[m&&(0,l.jsx)("p",{children:"Loading..."}),n&&(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)(o.rU,{to:j.state,children:"Go back"}),(0,l.jsx)("img",{style:{display:"flex",marginTop:"20px"},src:n.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(n.backdrop_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster",width:250}),(0,l.jsxs)("h2",{children:["Title: ",n.title]}),(0,l.jsxs)("p",{children:["Overview: ",n.overview]}),(0,l.jsxs)("p",{children:["Users rating: ",n.vote_average]}),n.genres&&(0,l.jsx)("ul",{children:n.genres.map((function(e){return(0,l.jsx)("li",{children:e.name},e.id)}))}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"cast",state:j.state,children:"Read about cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"reviews",state:j.state,children:"Reviews"})})]}),(0,l.jsx)(a.j3,{})]})]})}}}]);
//# sourceMappingURL=11.8184ca28.chunk.js.map