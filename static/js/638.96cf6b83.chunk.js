"use strict";(self.webpackChunkcredit_world=self.webpackChunkcredit_world||[]).push([[638],{6647:function(e,n,i){var l=i(2791);n.Z=function(e){var n="undefined"!==typeof document,i=l.useRef(n?document.title:null);l.useEffect((function(){if(n)return document.title!==e&&(document.title=e),function(){document.title=i.current}}),[])}},9638:function(e,n,i){i.r(n),i.d(n,{default:function(){return m}});i(2791);var l=i(1933),a=i(7689),s=i(59),r=i(5914),t=i(6647),d=i(184),c=function(e){var n,i=e.bankDetails;return(0,d.jsx)("div",{className:"container mt-5",children:(0,d.jsxs)("div",{className:"card mb-3 text-center border-0",children:[(0,d.jsx)("img",{className:"card-img-top center",src:null===i||void 0===i?void 0:i.img,alt:"Card image",style:{width:"100%",margin:"auto"}}),(0,d.jsxs)("div",{className:"card-body p-4",children:[(0,d.jsx)("h5",{className:"card-title",children:null===i||void 0===i||null===(n=i.name)||void 0===n?void 0:n.toUpperCase()}),(0,d.jsx)("p",{className:"card-text text-justify",style:{color:"#000"},children:null===i||void 0===i?void 0:i.content})]})]})})},o=i(1087),u=function(e){var n=e.rewards;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h5",{children:"Rewards"}),(0,d.jsx)("ul",{className:"cards-list pl-3",children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,d.jsxs)("li",{children:[" ",e]},n)}))})]})},v=function(e){var n,i=e.bankId,a=(0,l.useQuery)(["card",i],(function(){return(0,s.Un)(i)}),{enabled:!!i,staleTime:18e5}),r=a.isLoading,t=a.data;if(r)return(0,d.jsx)("div",{className:"container py-5 my-5 d-flex justify-content-center align-items-center",children:(0,d.jsxs)("h4",{children:[(0,d.jsx)("div",{className:"spinner-border text-primary mx-2",role:"status",children:(0,d.jsx)("span",{className:"sr-only",children:"Loading..."})}),"Loading Cards..."]})});var c=null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.cards;return null!==c&&void 0!==c&&c.length?(console.log({cardDetails:c}),(0,d.jsx)("section",{children:(0,d.jsx)("div",{className:"container all-cards mb-70",children:null===c||void 0===c?void 0:c.map((function(e,n){return(0,d.jsxs)("div",{className:"card  single-card",children:[(0,d.jsx)("div",{className:"card-header border-0 col-lg-3",children:(0,d.jsx)("img",{style:{margin:"auto",display:"block"},className:"text-center",src:null===e||void 0===e?void 0:e.img,alt:null===t||void 0===t?void 0:t.name,title:null===t||void 0===t?void 0:t.name})}),(0,d.jsxs)("div",{className:"card-block p-4 col-lg-9",children:[(0,d.jsx)("h4",{className:"card-title",children:null===e||void 0===e?void 0:e.name}),(0,d.jsxs)("div",{className:"card-text p-4 text-justify w-100",children:[(0,d.jsx)("p",{children:null===e||void 0===e?void 0:e.content}),(null===e||void 0===e?void 0:e.rewards)&&(0,d.jsx)(u,{rewards:null===e||void 0===e?void 0:e.rewards})]}),(0,d.jsx)("button",{type:"button",className:"btn btn-primary mr-2",children:(0,d.jsxs)(o.rU,{to:"/apply",style:{color:"#fff",fontWeight:500},state:e,children:[(0,d.jsx)("i",{className:"fas fa-phone-alt pr-2"}),"Apply"]})})]})]},n)}))})})):(0,d.jsx)("div",{className:"container ",style:{textAlign:"center"},children:(0,d.jsx)("h6",{children:"No Cards Found"})})},m=function(){var e,n,i=(0,a.UO)().bankname;(0,t.Z)("".concat(null===i||void 0===i?void 0:i.toUpperCase()," | ").concat(r.j));var o=(0,l.useQuery)(["bankData",i],(function(){return(0,s.nf)(i)}),{staleTime:18e5}),u=o.isLoading,m=o.data;if(u)return(0,d.jsx)("div",{className:"container py-5 my-5 d-flex justify-content-center align-items-center",children:(0,d.jsxs)("h4",{children:[(0,d.jsx)("div",{className:"spinner-border text-primary mx-2",role:"status",children:(0,d.jsx)("span",{className:"sr-only",children:"Loading..."})}),null===i||void 0===i?void 0:i.toUpperCase()," Loading..."]})});var x=null===m||void 0===m||null===(e=m.data)||void 0===e||null===(n=e.banks)||void 0===n?void 0:n[0];return x?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{bankDetails:x}),(0,d.jsx)(v,{bankId:null===x||void 0===x?void 0:x.id})]}):(0,d.jsx)("div",{className:"container py-5 my-5",style:{textAlign:"center"},children:(0,d.jsxs)("h4",{children:[null===i||void 0===i?void 0:i.toUpperCase()," Data not found"]})})}}}]);
//# sourceMappingURL=638.96cf6b83.chunk.js.map