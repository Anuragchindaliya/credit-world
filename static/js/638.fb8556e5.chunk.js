"use strict";(self.webpackChunkcredit_world=self.webpackChunkcredit_world||[]).push([[638],{6647:function(e,n,s){var l=s(2791);n.Z=function(e){var n="undefined"!==typeof document,s=l.useRef(n?document.title:null);l.useEffect((function(){if(n)return document.title!==e&&(document.title=e),function(){document.title=s.current}}),[])}},9638:function(e,n,s){s.r(n),s.d(n,{default:function(){return j}});s(2791);var l=s(1933),a=s(7689),i=s(1087),t=s(7419),r=s(9627),d=s(9151),c=s(4310),o=s(6196),u=s(6647),m=s(184),x=function(e){var n,s=e.bankDetails;return(0,m.jsx)("div",{className:"container mt-5",children:(0,m.jsxs)("div",{className:"card mb-3 text-center border-0",children:[(0,m.jsx)("img",{className:"card-img-top center",src:null===s||void 0===s?void 0:s.img,alt:"Card image",style:{width:"100%",margin:"auto"}}),(0,m.jsxs)("div",{className:"card-body p-4",children:[(0,m.jsx)("h5",{className:"card-title",children:null===s||void 0===s||null===(n=s.name)||void 0===n?void 0:n.toUpperCase()}),(0,m.jsx)("p",{className:"card-text text-justify",style:{color:"#000"},children:null===s||void 0===s?void 0:s.content})]})]})})},v=function(e){var n=e.rewards;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h5",{children:"Rewards"}),(0,m.jsx)("ul",{className:"cards-list pl-3",children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,m.jsxs)("li",{children:[" ",e]},n)}))})]})},h=function(e){var n,s=e.bankId,a=(0,l.useQuery)(["card",s],(function(){return(0,t.Un)(s)}),{enabled:!!s,staleTime:18e5}),r=a.isLoading,d=a.data;if(r)return(0,m.jsx)("div",{className:"container py-5 my-5 d-flex justify-content-center align-items-center",children:(0,m.jsxs)("h4",{children:[(0,m.jsx)("div",{className:"spinner-border text-primary mx-2",role:"status",children:(0,m.jsx)("span",{className:"sr-only",children:"Loading..."})}),"Loading Cards..."]})});var c=null===d||void 0===d||null===(n=d.data)||void 0===n?void 0:n.cards;return null!==c&&void 0!==c&&c.length?(0,m.jsx)("section",{children:(0,m.jsx)("div",{className:"container all-cards mb-70",children:null===c||void 0===c?void 0:c.map((function(e,n){return(0,m.jsxs)("div",{className:"card  single-card",children:[(0,m.jsx)("div",{className:"card-header border-0 col-lg-3",children:(0,m.jsx)("img",{style:{margin:"auto",display:"block"},className:"text-center",src:null===e||void 0===e?void 0:e.img,alt:null===d||void 0===d?void 0:d.name,title:null===d||void 0===d?void 0:d.name})}),(0,m.jsxs)("div",{className:"card-block p-4 col-lg-9",children:[(0,m.jsx)("h4",{className:"m-0 text-xl font-semibold",children:null===e||void 0===e?void 0:e.name}),(0,m.jsxs)("div",{className:"card-text pt-2 pb-4 text-justify w-100",children:[(0,m.jsx)("div",{dangerouslySetInnerHTML:{__html:e.content}}),(null===e||void 0===e?void 0:e.rewards)&&(0,m.jsx)(v,{rewards:null===e||void 0===e?void 0:e.rewards})]}),(0,m.jsx)("button",{type:"button",className:"btn btn-danger bg-red-700 mr-2",children:(0,m.jsxs)(i.rU,{to:"/apply",style:{color:"#fff",fontWeight:500},state:e,children:[(0,m.jsx)("i",{className:"fas fa-phone-alt pr-2",style:{transform:"rotateY(180deg) translateX(10px)"}}),"Apply Now"]})})]})]},n)}))})}):(0,m.jsx)("div",{className:"container ",style:{textAlign:"center"},children:(0,m.jsx)("h6",{children:"No Cards Found"})})},j=function(){var e,n,s,v=(0,a.UO)().bankname;(0,u.Z)("".concat(null===v||void 0===v?void 0:v.toUpperCase()," | ").concat(r.j));var j=(0,l.useQuery)(["bankData",v],(function(){return(0,t.nf)(v)}),{staleTime:18e5}),f=j.isLoading,p=j.data;if(f)return(0,m.jsx)("div",{className:"container py-5 my-5 d-flex justify-content-center align-items-center",children:(0,m.jsxs)("h4",{className:"text-xl flex font-semibold",children:[(0,m.jsx)("div",{className:"spinner-border text-primary mx-2",role:"status",children:(0,m.jsx)("span",{className:"sr-only",children:"Loading..."})}),null===v||void 0===v?void 0:v.toUpperCase()," Loading..."]})});var N=null===p||void 0===p||null===(e=p.data)||void 0===e||null===(n=e.banks)||void 0===n?void 0:n[0];if(!N)return(0,m.jsx)("div",{className:"container py-5 my-5",style:{textAlign:"center"},children:(0,m.jsxs)("h4",{children:[null===v||void 0===v?void 0:v.toUpperCase()," Data not found"]})});var b=null===N||void 0===N?void 0:N.id;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"bg-gray ",children:(0,m.jsxs)("div",{className:"container py-1",children:[(0,m.jsxs)("div",{className:"my-2",children:[(0,m.jsx)(i.rU,{to:"/",children:(0,m.jsx)("i",{className:"fa fa-home text-blue-900"})}),(0,m.jsx)("i",{className:"fa fa-chevron-right px-1"}),(0,m.jsxs)("span",{children:[null===N||void 0===N?void 0:N.name," Credit Card"]})]}),(0,m.jsxs)("div",{className:"row flex-col-reverse sm:flex-row ",children:[(0,m.jsxs)("div",{className:"col-lg-7",children:[(0,m.jsxs)("h1",{className:"text-2xl md:text-3xl font-bold text-blue-900 mb-2",children:[null===N||void 0===N||null===(s=N.name)||void 0===s?void 0:s.toUpperCase()," Credit Card"]}),(0,m.jsx)("p",{className:"text-xs text-blue-900",children:null===N||void 0===N?void 0:N.content}),(0,m.jsx)(c.Z,{bankId:b})]}),(0,m.jsx)("div",{className:"col-lg-5 mb-5 ",children:(0,m.jsx)(d.Z,{bankId:b,apiService:t.B8})})]})]})}),(0,m.jsx)(x,{bankDetails:N}),(0,m.jsx)(h,{bankId:b}),(0,m.jsx)(o.Z,{})]})}}}]);
//# sourceMappingURL=638.fb8556e5.chunk.js.map