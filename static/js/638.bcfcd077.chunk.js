"use strict";(self.webpackChunkcredit_world=self.webpackChunkcredit_world||[]).push([[638],{6647:function(e,n,a){var s=a(2791);n.Z=function(e){var n="undefined"!==typeof document,a=s.useRef(n?document.title:null);s.useEffect((function(){if(n)return document.title!==e&&(document.title=e),function(){document.title=a.current}}),[])}},9638:function(e,n,a){a.r(n),a.d(n,{default:function(){return x}});a(2791);var s=a(1933),i=a(7689),l=a(59),t=a(1235),r=a(6196),d=a(6647),c=a(184),o=function(e){var n,a=e.bankDetails;return(0,c.jsx)("div",{className:"container mt-5",children:(0,c.jsxs)("div",{className:"card mb-3 text-center border-0",children:[(0,c.jsx)("img",{className:"card-img-top center",src:null===a||void 0===a?void 0:a.img,alt:"Card image",style:{width:"100%",margin:"auto"}}),(0,c.jsxs)("div",{className:"card-body p-4",children:[(0,c.jsx)("h5",{className:"card-title",children:null===a||void 0===a||null===(n=a.name)||void 0===n?void 0:n.toUpperCase()}),(0,c.jsx)("p",{className:"card-text text-justify",style:{color:"#000"},children:null===a||void 0===a?void 0:a.content})]})]})})},u=a(1087),m=function(e){var n=e.rewards;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h5",{children:"Rewards"}),(0,c.jsx)("ul",{className:"cards-list pl-3",children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,c.jsxs)("li",{children:[" ",e]},n)}))})]})},v=function(e){var n,a=e.bankId,i=(0,s.useQuery)(["card",a],(function(){return(0,l.Un)(a)}),{enabled:!!a,staleTime:18e5}),t=i.isLoading,r=i.data;if(t)return(0,c.jsx)("div",{className:"container py-5 my-5 d-flex justify-content-center align-items-center",children:(0,c.jsxs)("h4",{children:[(0,c.jsx)("div",{className:"spinner-border text-primary mx-2",role:"status",children:(0,c.jsx)("span",{className:"sr-only",children:"Loading..."})}),"Loading Cards..."]})});var d=null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.cards;return null!==d&&void 0!==d&&d.length?(console.log({cardDetails:d}),(0,c.jsx)("section",{children:(0,c.jsx)("div",{className:"container all-cards mb-70",children:null===d||void 0===d?void 0:d.map((function(e,n){return(0,c.jsxs)("div",{className:"card  single-card",children:[(0,c.jsx)("div",{className:"card-header border-0 col-lg-3",children:(0,c.jsx)("img",{style:{margin:"auto",display:"block"},className:"text-center",src:null===e||void 0===e?void 0:e.img,alt:null===r||void 0===r?void 0:r.name,title:null===r||void 0===r?void 0:r.name})}),(0,c.jsxs)("div",{className:"card-block p-4 col-lg-9",children:[(0,c.jsx)("h4",{className:"m-0",children:null===e||void 0===e?void 0:e.name}),(0,c.jsxs)("div",{className:"card-text p-4 text-justify w-100",children:[(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:e.content}}),(null===e||void 0===e?void 0:e.rewards)&&(0,c.jsx)(m,{rewards:null===e||void 0===e?void 0:e.rewards})]}),(0,c.jsx)("button",{type:"button",className:"btn btn-primary mr-2",children:(0,c.jsxs)(u.rU,{to:"/apply",style:{color:"#fff",fontWeight:500},state:e,children:[(0,c.jsx)("i",{className:"fas fa-phone-alt pr-2",style:{transform:"rotateY(180deg) translateX(10px)"}}),"Apply Now"]})})]})]},n)}))})})):(0,c.jsx)("div",{className:"container ",style:{textAlign:"center"},children:(0,c.jsx)("h6",{children:"No Cards Found"})})},x=function(){var e,n,a=(0,i.UO)().bankname;(0,d.Z)("".concat(null===a||void 0===a?void 0:a.toUpperCase()," | ").concat(t.j));var u=(0,s.useQuery)(["bankData",a],(function(){return(0,l.nf)(a)}),{staleTime:18e5}),m=u.isLoading,x=u.data;if(m)return(0,c.jsx)("div",{className:"container py-5 my-5 d-flex justify-content-center align-items-center",children:(0,c.jsxs)("h4",{children:[(0,c.jsx)("div",{className:"spinner-border text-primary mx-2",role:"status",children:(0,c.jsx)("span",{className:"sr-only",children:"Loading..."})}),null===a||void 0===a?void 0:a.toUpperCase()," Loading..."]})});var h=null===x||void 0===x||null===(e=x.data)||void 0===e||null===(n=e.banks)||void 0===n?void 0:n[0];return h?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{bankDetails:h}),(0,c.jsx)(v,{bankId:null===h||void 0===h?void 0:h.id}),(0,c.jsx)(r.Z,{})]}):(0,c.jsx)("div",{className:"container py-5 my-5",style:{textAlign:"center"},children:(0,c.jsxs)("h4",{children:[null===a||void 0===a?void 0:a.toUpperCase()," Data not found"]})})}}}]);
//# sourceMappingURL=638.bcfcd077.chunk.js.map