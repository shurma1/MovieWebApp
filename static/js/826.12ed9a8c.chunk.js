"use strict";(self.webpackChunkmini_app=self.webpackChunkmini_app||[]).push([[826],{639:function(e,r,t){t.d(r,{k:function(){return k}});var a=t(683);function s(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}t(791);var o="MovieButton_MovieButton__qIABJ",w=t(184),n=["children"],k=function(e){var r=e.children,t=s(e,n);return(0,w.jsx)("button",(0,a.Z)((0,a.Z)({className:o},t),{},{children:r}))}},942:function(e,r,t){t.d(r,{S:function(){return o}});t(791);var a="HeadLine_HeadLine__bpkcT",s=t(184),o=function(e){var r=e.children;return(0,s.jsx)("h1",{className:a,children:r})}},826:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var a=t(683),s=t(439),o=t(791),w=t(561),n=t(942),k=t(433),i="SeatSelector_SeatSelector__2AiJ1",f=(t(639),{SeatButton:"SeatButton_SeatButton__FBGkH",busy:"SeatButton_busy__ZWSZq",free:"SeatButton_free__4rjXz",ghost:"SeatButton_ghost__HiFji",active:"SeatButton_active__1tLjH"}),M=t(234),c=t(184),u=function(e){var r=e.seat,t=e.onClick,a=e.activeButtons,o=(e.disabled,7*(r.row-1)+(r.seat-1)),w=a.some((function(e){return e.id===o})),n=w?f.active:"free"===r.state?f.free:"busy"===r.state?f.busy:f.ghost,k=(0,M.OW)(),i=(0,s.Z)(k,1)[0];return(0,c.jsx)("button",{className:[f.SeatButton,n].join(" "),onClick:function(){return"busy"===r.state?i("error"):t(o)},children:w&&(0,c.jsx)("p",{children:"".concat(r.rowMarker).concat(r.seat)})})},d=function(e){var r=e.seats,t=e.activeButtons,s=e.setActiveButtons,o=function(e){var o=t.findIndex((function(r){return r.id===e}));s(-1!==o?function(r){return r.filter((function(r){return r.id!==e}))}:function(t){return[(0,a.Z)({id:e},r[o])].concat((0,k.Z)(t))})};return(0,c.jsx)("div",{className:i,children:r.seats.map((function(e){return(0,c.jsx)(u,{seat:e,onClick:o,activeButtons:t},"".concat(e.row).concat(e.seat))}))})},l=[{time:"12:00",price:1.99,seats:[{row:1,rowMarker:"A",seat:1,state:"free"},{row:1,rowMarker:"A",seat:2,state:"busy"},{row:1,rowMarker:"A",seat:3,state:"free"},{row:1,rowMarker:"A",seat:4,state:"free"},{row:1,rowMarker:"A",seat:5,state:"free"},{row:1,rowMarker:"A",seat:6,state:"free"},{row:1,rowMarker:"A",seat:7,state:"free"},{row:2,rowMarker:"B",seat:1,state:"free"},{row:2,rowMarker:"B",seat:2,state:"free"},{row:2,rowMarker:"B",seat:3,state:"free"},{row:2,rowMarker:"B",seat:4,state:"busy"},{row:2,rowMarker:"B",seat:5,state:"free"},{row:2,rowMarker:"B",seat:6,state:"free"},{row:2,rowMarker:"B",seat:7,state:"free"},{row:3,rowMarker:"C",seat:1,state:"free"},{row:3,rowMarker:"C",seat:2,state:"free"},{row:3,rowMarker:"C",seat:3,state:"free"},{row:3,rowMarker:"C",seat:4,state:"free"},{row:3,rowMarker:"C",seat:5,state:"free"},{row:3,rowMarker:"C",seat:6,state:"free"},{row:3,rowMarker:"C",seat:7,state:"free"},{row:4,rowMarker:"D",seat:1,state:"free"},{row:4,rowMarker:"D",seat:2,state:"free"},{row:4,rowMarker:"D",seat:3,state:"busy"},{row:4,rowMarker:"D",seat:4,state:"free"},{row:4,rowMarker:"D",seat:5,state:"free"},{row:4,rowMarker:"D",seat:6,state:"free"},{row:4,rowMarker:"D",seat:7,state:"free"},{row:5,rowMarker:"E",seat:1,state:"free"},{row:5,rowMarker:"E",seat:2,state:"free"},{row:5,rowMarker:"E",seat:3,state:"ghost"},{row:5,rowMarker:"E",seat:4,state:"ghost"},{row:5,rowMarker:"E",seat:5,state:"ghost"},{row:5,rowMarker:"E",seat:6,state:"busy"},{row:5,rowMarker:"E",seat:7,state:"free"},{row:6,rowMarker:"F",seat:1,state:"free"},{row:6,rowMarker:"F",seat:2,state:"ghost"},{row:6,rowMarker:"F",seat:3,state:"ghost"},{row:6,rowMarker:"F",seat:4,state:"ghost"},{row:6,rowMarker:"F",seat:5,state:"ghost"},{row:6,rowMarker:"F",seat:6,state:"ghost"},{row:6,rowMarker:"F",seat:7,state:"free"}]},{time:"15:00",price:2.49,seats:[{row:1,rowMarker:"A",seat:1,state:"free"},{row:1,rowMarker:"A",seat:2,state:"busy"},{row:1,rowMarker:"A",seat:3,state:"free"},{row:1,rowMarker:"A",seat:4,state:"free"},{row:1,rowMarker:"A",seat:5,state:"free"},{row:1,rowMarker:"A",seat:6,state:"free"},{row:1,rowMarker:"A",seat:7,state:"free"},{row:2,rowMarker:"B",seat:1,state:"busy"},{row:2,rowMarker:"B",seat:2,state:"free"},{row:2,rowMarker:"B",seat:3,state:"free"},{row:2,rowMarker:"B",seat:4,state:"busy"},{row:2,rowMarker:"B",seat:5,state:"free"},{row:2,rowMarker:"B",seat:6,state:"free"},{row:2,rowMarker:"B",seat:7,state:"free"},{row:3,rowMarker:"C",seat:1,state:"free"},{row:3,rowMarker:"C",seat:2,state:"free"},{row:3,rowMarker:"C",seat:3,state:"free"},{row:3,rowMarker:"C",seat:4,state:"free"},{row:3,rowMarker:"C",seat:5,state:"free"},{row:3,rowMarker:"C",seat:6,state:"free"},{row:3,rowMarker:"C",seat:7,state:"free"},{row:4,rowMarker:"D",seat:1,state:"free"},{row:4,rowMarker:"D",seat:2,state:"free"},{row:4,rowMarker:"D",seat:3,state:"busy"},{row:4,rowMarker:"D",seat:4,state:"free"},{row:4,rowMarker:"D",seat:5,state:"free"},{row:4,rowMarker:"D",seat:6,state:"free"},{row:4,rowMarker:"D",seat:7,state:"free"},{row:5,rowMarker:"E",seat:1,state:"busy"},{row:5,rowMarker:"E",seat:2,state:"free"},{row:5,rowMarker:"E",seat:3,state:"ghost"},{row:5,rowMarker:"E",seat:4,state:"ghost"},{row:5,rowMarker:"E",seat:5,state:"ghost"},{row:5,rowMarker:"E",seat:6,state:"free"},{row:5,rowMarker:"E",seat:7,state:"free"},{row:6,rowMarker:"F",seat:1,state:"free"},{row:6,rowMarker:"F",seat:2,state:"ghost"},{row:6,rowMarker:"F",seat:3,state:"ghost"},{row:6,rowMarker:"F",seat:4,state:"ghost"},{row:6,rowMarker:"F",seat:5,state:"ghost"},{row:6,rowMarker:"F",seat:6,state:"ghost"},{row:6,rowMarker:"F",seat:7,state:"free"}]},{time:"17:00",price:5.49,seats:[{row:1,rowMarker:"A",seat:1,state:"free"},{row:1,rowMarker:"A",seat:2,state:"busy"},{row:1,rowMarker:"A",seat:3,state:"free"},{row:1,rowMarker:"A",seat:4,state:"free"},{row:1,rowMarker:"A",seat:5,state:"free"},{row:1,rowMarker:"A",seat:6,state:"free"},{row:1,rowMarker:"A",seat:7,state:"free"},{row:2,rowMarker:"B",seat:1,state:"free"},{row:2,rowMarker:"B",seat:2,state:"free"},{row:2,rowMarker:"B",seat:3,state:"free"},{row:2,rowMarker:"B",seat:4,state:"busy"},{row:2,rowMarker:"B",seat:5,state:"free"},{row:2,rowMarker:"B",seat:6,state:"free"},{row:2,rowMarker:"B",seat:7,state:"free"},{row:3,rowMarker:"C",seat:1,state:"busy"},{row:3,rowMarker:"C",seat:2,state:"free"},{row:3,rowMarker:"C",seat:3,state:"busy"},{row:3,rowMarker:"C",seat:4,state:"free"},{row:3,rowMarker:"C",seat:5,state:"free"},{row:3,rowMarker:"C",seat:6,state:"free"},{row:3,rowMarker:"C",seat:7,state:"free"},{row:4,rowMarker:"D",seat:1,state:"free"},{row:4,rowMarker:"D",seat:2,state:"busy"},{row:4,rowMarker:"D",seat:3,state:"busy"},{row:4,rowMarker:"D",seat:4,state:"free"},{row:4,rowMarker:"D",seat:5,state:"free"},{row:4,rowMarker:"D",seat:6,state:"free"},{row:4,rowMarker:"D",seat:7,state:"busy"},{row:5,rowMarker:"E",seat:1,state:"free"},{row:5,rowMarker:"E",seat:2,state:"free"},{row:5,rowMarker:"E",seat:3,state:"ghost"},{row:5,rowMarker:"E",seat:4,state:"ghost"},{row:5,rowMarker:"E",seat:5,state:"ghost"},{row:5,rowMarker:"E",seat:6,state:"free"},{row:5,rowMarker:"E",seat:7,state:"free"},{row:6,rowMarker:"F",seat:1,state:"free"},{row:6,rowMarker:"F",seat:2,state:"ghost"},{row:6,rowMarker:"F",seat:3,state:"ghost"},{row:6,rowMarker:"F",seat:4,state:"ghost"},{row:6,rowMarker:"F",seat:5,state:"ghost"},{row:6,rowMarker:"F",seat:6,state:"ghost"},{row:6,rowMarker:"F",seat:7,state:"free"}]},{time:"21:30",price:1.99,seats:[{row:1,rowMarker:"A",seat:1,state:"free"},{row:1,rowMarker:"A",seat:2,state:"busy"},{row:1,rowMarker:"A",seat:3,state:"busy"},{row:1,rowMarker:"A",seat:4,state:"busy"},{row:1,rowMarker:"A",seat:5,state:"free"},{row:1,rowMarker:"A",seat:6,state:"busy"},{row:1,rowMarker:"A",seat:7,state:"free"},{row:2,rowMarker:"B",seat:1,state:"free"},{row:2,rowMarker:"B",seat:2,state:"free"},{row:2,rowMarker:"B",seat:3,state:"busy"},{row:2,rowMarker:"B",seat:4,state:"busy"},{row:2,rowMarker:"B",seat:5,state:"busy"},{row:2,rowMarker:"B",seat:6,state:"free"},{row:2,rowMarker:"B",seat:7,state:"free"},{row:3,rowMarker:"C",seat:1,state:"busy"},{row:3,rowMarker:"C",seat:2,state:"busy"},{row:3,rowMarker:"C",seat:3,state:"free"},{row:3,rowMarker:"C",seat:4,state:"busy"},{row:3,rowMarker:"C",seat:5,state:"free"},{row:3,rowMarker:"C",seat:6,state:"free"},{row:3,rowMarker:"C",seat:7,state:"busy"},{row:4,rowMarker:"D",seat:1,state:"busy"},{row:4,rowMarker:"D",seat:2,state:"busy"},{row:4,rowMarker:"D",seat:3,state:"free"},{row:4,rowMarker:"D",seat:4,state:"free"},{row:4,rowMarker:"D",seat:5,state:"free"},{row:4,rowMarker:"D",seat:6,state:"free"},{row:4,rowMarker:"D",seat:7,state:"free"},{row:5,rowMarker:"E",seat:1,state:"free"},{row:5,rowMarker:"E",seat:2,state:"free"},{row:5,rowMarker:"E",seat:3,state:"ghost"},{row:5,rowMarker:"E",seat:4,state:"ghost"},{row:5,rowMarker:"E",seat:5,state:"ghost"},{row:5,rowMarker:"E",seat:6,state:"free"},{row:5,rowMarker:"E",seat:7,state:"free"},{row:6,rowMarker:"F",seat:1,state:"busy"},{row:6,rowMarker:"F",seat:2,state:"ghost"},{row:6,rowMarker:"F",seat:3,state:"ghost"},{row:6,rowMarker:"F",seat:4,state:"ghost"},{row:6,rowMarker:"F",seat:5,state:"ghost"},{row:6,rowMarker:"F",seat:6,state:"ghost"},{row:6,rowMarker:"F",seat:7,state:"free"}]}],h={padding:"MovieShows_padding__V3nxB",timeSelector:"MovieShows_timeSelector__xTGWk"},b="Radio_Container__twnjZ",y=function(e){var r=e.id,t=e.value,a=e.name,s=e.checked,o=e.setTime;return(0,c.jsxs)("div",{className:b,children:[(0,c.jsx)("input",{defaultChecked:s,type:"radio",id:r,value:t,name:a,onInput:function(){return o(r)}}),(0,c.jsx)("label",{htmlFor:r,children:t})]})},g={IndicatorList:"SeatIndicator_IndicatorList__6C2oE",IndicatorWrapper:"SeatIndicator_IndicatorWrapper__6ZPe4",Indicator:"SeatIndicator_Indicator__Jz6Zl",Busy:"SeatIndicator_Busy__HoJLE",Free:"SeatIndicator_Free__ExzTL"},p=function(){return(0,c.jsxs)("div",{className:g.IndicatorList,children:[(0,c.jsxs)("div",{className:g.IndicatorWrapper,children:[(0,c.jsx)("div",{className:[g.Indicator,g.Free].join(" ")}),(0,c.jsx)("p",{children:"Free"})]}),(0,c.jsxs)("div",{className:g.IndicatorWrapper,children:[(0,c.jsx)("div",{className:[g.Indicator,g.Busy].join(" ")}),(0,c.jsx)("p",{children:"Busy"})]})]})},v=function(){var e=(0,w.TH)().state,r=(0,o.useState)(0),t=(0,s.Z)(r,2),k=t[0],i=t[1],f=(0,o.useState)([]),u=(0,s.Z)(f,2),b=u[0],g=u[1],v=(0,M.GI)(),B=(0,o.useCallback)((function(){var r=(0,a.Z)((0,a.Z)({title:e.title},l[k]),{},{seats:b.map((function(e){var r=e.id;return l[k].seats[r]}))});v.sendData(JSON.stringify(r))}),[k,b]);return(0,o.useEffect)((function(){return v.onEvent("mainButtonClicked",B),function(){v.offEvent("mainButtonClicked",B)}}),[B]),(0,o.useEffect)((function(){g([])}),[k]),(0,o.useEffect)((function(){var e=v.MainButton;if(0!==b.length){var r=(b.map((function(e){var r=e.id;return l[k].seats[r]})).length*l[k].price).toFixed(2);return e.text="Pay $".concat(r),void e.show()}e.hide()}),[b]),(0,c.jsxs)("div",{children:[(0,c.jsx)(n.S,{children:e.title}),(0,c.jsx)("div",{className:[h.timeSelector,h.padding].join(" "),children:l.map((function(e,r){var t=e.time;return(0,c.jsx)(y,{setTime:i,checked:0===r&&"checked",id:r,value:t,name:"time"})}))}),(0,c.jsx)("svg",{className:h.padding,width:"100%",viewBox:"0 0 357 43",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M1.5 41.5001C109 -10.5 228.5 -12 355.5 41.5001",stroke:"var(--tg-theme-bg-color)",strokeWidth:"3"})}),(0,c.jsx)(p,{}),(0,c.jsx)(d,{activeButtons:b,setActiveButtons:g,seats:l[k]}),(0,c.jsx)(M.c7,{text:"Main button",onClick:B})]})}},683:function(e,r,t){t.d(r,{Z:function(){return o}});var a=t(142);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){var s,o,w;s=e,o=r,w=t[r],(o=(0,a.Z)(o))in s?Object.defineProperty(s,o,{value:w,enumerable:!0,configurable:!0,writable:!0}):s[o]=w})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}}}]);
//# sourceMappingURL=826.12ed9a8c.chunk.js.map