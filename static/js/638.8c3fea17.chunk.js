"use strict";(self.webpackChunkcredit_world=self.webpackChunkcredit_world||[]).push([[638],{6647:function(e,n,i){var a=i(2791);n.Z=function(e){var n="undefined"!==typeof document,i=a.useRef(n?document.title:null);a.useEffect((function(){if(n)return document.title!==e&&(document.title=e),function(){document.title=i.current}}),[])}},9638:function(e,n,i){i.r(n),i.d(n,{default:function(){return m}});i(2791);var a=i(1933),l=i(7689),d=i(59),t=i(5914),r=i(6647),s=i(184),c=function(e){var n,i=e.bankDetails;return i?(0,s.jsx)("div",{className:"container mt-5",children:(0,s.jsxs)("div",{className:"card mb-3 text-center border-0",children:[(0,s.jsx)("img",{className:"card-img-top center",src:null===i||void 0===i?void 0:i.img,alt:"Card image",style:{width:"100%",margin:"auto"}}),(0,s.jsxs)("div",{className:"card-body p-4",children:[(0,s.jsx)("h5",{className:"card-title",children:null===i||void 0===i||null===(n=i.name)||void 0===n?void 0:n.toUpperCase()}),(0,s.jsx)("p",{className:"card-text text-justify",style:{color:"#000"},children:null===i||void 0===i?void 0:i.content})]})]})}):(0,s.jsx)("div",{className:"container mt-5",children:"Can't find bank details"})},o=i(1087),u=function(e){var n=e.rewards;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h5",{children:"Rewards"}),(0,s.jsx)("ul",{className:"cards-list pl-3",children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,s.jsxs)("li",{children:[" ",e]},n)}))})]})},v=function(e){var n,i=e.bankId,l=(0,a.useQuery)(["card",i],(function(){return(0,d.Un)(i)}),{enabled:!!i,staleTime:18e5}),t=l.isLoading,r=l.data;if(t)return(0,s.jsx)("div",{children:"Cards Loading..."});var c=null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.cards;return null!==c&&void 0!==c&&c.length?(console.log({cardDetails:c}),(0,s.jsx)("section",{children:(0,s.jsx)("div",{className:"container all-cards mb-70",children:null===c||void 0===c?void 0:c.map((function(e,n){return(0,s.jsxs)("div",{className:"card  single-card",children:[(0,s.jsx)("div",{className:"card-header border-0 col-lg-3",children:(0,s.jsx)("img",{className:"text-center",src:null===e||void 0===e?void 0:e.img,alt:null===r||void 0===r?void 0:r.name,title:null===r||void 0===r?void 0:r.name})}),(0,s.jsxs)("div",{className:"card-block p-4 col-lg-9",children:[(0,s.jsx)("h4",{className:"card-title",children:null===e||void 0===e?void 0:e.name}),(0,s.jsxs)("div",{className:"card-text p-4 text-justify w-100",children:[(0,s.jsx)("p",{children:null===e||void 0===e?void 0:e.content}),(null===e||void 0===e?void 0:e.rewards)&&(0,s.jsx)(u,{rewards:null===e||void 0===e?void 0:e.rewards})]}),(0,s.jsx)("button",{type:"button",className:"btn btn-primary mr-2",children:(0,s.jsxs)(o.rU,{to:"/apply",style:{color:"#fff",fontWeight:500},state:e,children:[(0,s.jsx)("i",{className:"fas fa-phone-alt pr-2"}),"Apply"]})})]})]},n)}))})})):(0,s.jsx)("div",{className:"container ",style:{textAlign:"center"},children:(0,s.jsx)("h6",{children:"Can't find cards"})})},m=function(){var e,n,i=(0,l.UO)().bankname;(0,r.Z)("".concat(null===i||void 0===i?void 0:i.toUpperCase()," | ").concat(t.j));var o=(0,a.useQuery)(["bankData",i],(function(){return(0,d.nf)(i)}),{staleTime:18e5}),u=o.isLoading,m=o.data;if(u)return(0,s.jsx)("div",{children:"Loading..."});var x=null===m||void 0===m||null===(e=m.data)||void 0===e||null===(n=e.banks)||void 0===n?void 0:n[0];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{bankDetails:x}),(0,s.jsx)(v,{bankId:null===x||void 0===x?void 0:x.id})]})}}}]);
//# sourceMappingURL=638.8c3fea17.chunk.js.map