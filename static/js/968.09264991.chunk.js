"use strict";(self.webpackChunkmini_app=self.webpackChunkmini_app||[]).push([[968],{639:function(e,n,i){i.d(n,{k:function(){return l}});var r=i(683);function t(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}i(791);var a="MovieButton_MovieButton__qIABJ",c=i(184),o=["children"],l=function(e){var n=e.children,i=t(e,o);return(0,c.jsx)("button",(0,r.Z)((0,r.Z)({className:a},i),{},{children:n}))}},942:function(e,n,i){i.d(n,{S:function(){return a}});i(791);var r="HeadLine_HeadLine__bpkcT",t=i(184),a=function(e){var n=e.children;return(0,t.jsx)("h1",{className:r,children:n})}},822:function(e,n,i){i.r(n),i.d(n,{default:function(){return M}});var r=i(791),t=i(683),a="MovieCard_MovieCard__1cpcn",c="MovieCard_MovieCardWrapper__etTpM",o="MovieCard_header__8e8qq",l="MovieCard_footer__uK46N",s="MovieCard_InfoWrapper__pLW0k",d=i(639),u="MovieCardHeadLine_MovieCardHeadLine__qTHDm",f=i(184),p=function(e){var n=e.children;return(0,f.jsx)("p",{className:u,children:n})},g="MovieCardInfo_MovieCardInfo__D7oKZ",h=function(e){var n=e.children;return(0,f.jsx)("p",{className:g,children:n})},m=i(439),v={CardImg:"CardImg_CardImg__ok+su",CardVisible:"CardImg_CardVisible__hNW0s",loading:"CardImg_loading__IOWGM"},j=function(e){var n=e.src,i=(0,r.useState)(!0),t=(0,m.Z)(i,2),a=t[0],c=t[1];return(0,f.jsx)("div",{className:[v.CardImg,a?v.loading:v.CardVisible].join(" "),children:(0,f.jsx)("img",{src:n,onLoad:function(){return c(!1)}})})},b="AgeTeg_AgeTeg__pMizx",_=function(e){var n=e.children;return(0,f.jsx)("div",{className:b,children:n})},x=i(561),O=i(234),C=function(e){var n=e.imageLink,i=e.title,r=e.info,u=e.age,g=(0,x.s0)(),m=(0,O.GI)(),v=function e(){m.offEvent("backButtonClicked",e),m.BackButton.hide(),g("/",{})};return(0,f.jsxs)("div",{className:a,children:[(0,f.jsx)(j,{src:n}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("div",{className:o,children:(0,f.jsx)(_,{children:u})}),(0,f.jsxs)("div",{className:l,children:[(0,f.jsxs)("div",{className:s,children:[(0,f.jsx)(p,{children:i}),(0,f.jsx)(h,{children:r})]}),(0,f.jsx)("div",{children:(0,f.jsx)(d.k,{onClick:function(){return n="/MovieShows",i=(0,t.Z)({},e),m.onEvent("backButtonClicked",v),m.BackButton.show(),void g(n,{state:i});var n,i},children:"Buy"})})]})]}),(0,f.jsx)(O.xE,{onClick:v})]})},y=i(942),k=[{title:"Sick",image:i.p+"static/media/sick.b5ccd1aef2f27093c2a3.jpg",info:"Italy \xb7 2020 \xb7 2h 30m",age:"18+"},{title:"Alice, Darling",image:i.p+"static/media/AliceDarlin.fcd72656f9dc98ef04fa.jpg",info:"Italy \xb7 2020 \xb7 2h 30m",age:"12+"},{title:"Creed 3",image:i.p+"static/media/creed3.b868351eb89387431744.jpg",info:"Italy \xb7 2020 \xb7 2h 30m",age:"12+"},{title:"The Magician\u2019s Elephant",image:i.p+"static/media/TheMagickElephant.fc694d8019334e264cb1.jpg",info:"Italy \xb7 2020 \xb7 2h 30m",age:"12+"},{title:"The Green Mile",image:i.p+"static/media/greenMile.4098174b968f13d58089.jpg",info:"Italy \xb7 2020 \xb7 2h 30m",age:"12+"},{title:"1+1",image:i.p+"static/media/onePlusOne.2058d2ae8279b125dbe9.jpg",info:"Italy \xb7 2020 \xb7 2h 30m",age:"12+"}],M=function(){return(0,f.jsxs)("div",{children:[(0,f.jsxs)(y.S,{children:["Now in ",(0,f.jsx)("br",{}),"the cinema"]}),(0,f.jsx)("div",{children:k.map((function(e){return(0,f.jsx)(C,{imageLink:e.image,title:e.title,info:e.info,age:e.age})}))})]})}},683:function(e,n,i){i.d(n,{Z:function(){return a}});var r=i(142);function t(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(n){var t,a,c;t=e,a=n,c=i[n],(a=(0,r.Z)(a))in t?Object.defineProperty(t,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[a]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}}}]);
//# sourceMappingURL=968.09264991.chunk.js.map