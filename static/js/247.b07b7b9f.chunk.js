"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(t,e,r){r.r(e);var n=r(5861),a=r(885),c=r(7757),s=r.n(c),i=r(2791),u=r(6871),o=r(4407),p=r(184);e.default=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],f=(0,u.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.cast(f);case 3:e=t.sent,c(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsx)("ul",{children:r.map((function(t,e){return(0,p.jsxs)("li",{children:[t.profile_path?(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:t.name,width:"200px",height:"300px"}):(0,p.jsx)("img",{src:"https://raw.githubusercontent.com/vadymfrlv/storage/b4e0abb7f45980d92f3ee2da26a5960181a17f8f/filmoteka/posterholder.jpg",alt:"notPhoto",width:"200px",height:"300px"}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Name: "})," ",t.name]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Character: "})," ",t.character]})]})]},t.id+e)}))})}},4407:function(t,e,r){var n=r(5861),a=r(3144),c=r(5671),s=r(6274),i=r(9359),u=r(7757),o=r.n(u),p=r(4569),f=r.n(p),h="65049d708d656b074ab329378f22be6e";f().defaults.baseURL="https://api.themoviedb.org/3/";var d=(0,i.Z)("SEARCH"),l=(0,i.Z)("TRAND"),v=(0,i.Z)("BASE"),b=(0,a.Z)((function t(){var e=this;(0,c.Z)(this,t),Object.defineProperty(this,d,{writable:!0,value:"search/movie"}),Object.defineProperty(this,l,{writable:!0,value:"trending/movie/day"}),Object.defineProperty(this,v,{writable:!0,value:"movie/"}),this.trend=function(){var t=(0,n.Z)(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,l)[l],"?api_key=").concat(h,"&page=").concat(r));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.search=function(){var t=(0,n.Z)(o().mark((function t(r,n){var a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,d)[d],"?api_key=").concat(h,"&query=").concat(r,"&page=").concat(n));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),this.fetchId=function(){var t=(0,n.Z)(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,v)[v],"/").concat(r,"?api_key=").concat(h));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.cast=function(){var t=(0,n.Z)(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,v)[v],"/").concat(r,"/credits?api_key=").concat(h));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.reviews=function(){var t=(0,n.Z)(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,v)[v],"/").concat(r,"/reviews?api_key=").concat(h));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),m=new b;e.Z=m}}]);
//# sourceMappingURL=247.b07b7b9f.chunk.js.map