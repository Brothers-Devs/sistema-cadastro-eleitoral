import{r as d,j as B,_ as v,g as V,k as ce}from"./app-CtuG7Gio.js";import{a as de,g as ue,c as G}from"./generateUtilityClasses-DVu8MOjv.js";import{o as j,a as X,b as oe,v as Ee,l as xe,w as ve,x as ye,y as re,s as J,c as fe,d as se,z as Re}from"./Popper-IAnMooNr.js";function ie(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}function Q(e){return j(e).defaultView||window}function Te(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const ke=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Pe(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ce(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Se(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ce(e))}function we(e){const t=[],o=[];return Array.from(e.querySelectorAll(ke)).forEach((n,s)=>{const r=Pe(n);r===-1||!Se(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function Ie(){return!0}function Ne(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=we,isEnabled:i=Ie,open:l}=e,u=d.useRef(!1),b=d.useRef(null),m=d.useRef(null),g=d.useRef(null),T=d.useRef(null),y=d.useRef(!1),c=d.useRef(null),M=X(t.ref,c),P=d.useRef(null);d.useEffect(()=>{!l||!c.current||(y.current=!o)},[o,l]),d.useEffect(()=>{if(!l||!c.current)return;const a=j(c.current);return c.current.contains(a.activeElement)||(c.current.hasAttribute("tabIndex")||c.current.setAttribute("tabIndex","-1"),y.current&&c.current.focus()),()=>{s||(g.current&&g.current.focus&&(u.current=!0,g.current.focus()),g.current=null)}},[l]),d.useEffect(()=>{if(!l||!c.current)return;const a=j(c.current),E=R=>{P.current=R,!(n||!i()||R.key!=="Tab")&&a.activeElement===c.current&&R.shiftKey&&(u.current=!0,m.current&&m.current.focus())},x=()=>{const R=c.current;if(R===null)return;if(!a.hasFocus()||!i()||u.current){u.current=!1;return}if(R.contains(a.activeElement)||n&&a.activeElement!==b.current&&a.activeElement!==m.current)return;if(a.activeElement!==T.current)T.current=null;else if(T.current!==null)return;if(!y.current)return;let w=[];if((a.activeElement===b.current||a.activeElement===m.current)&&(w=r(c.current)),w.length>0){var O,I;const D=!!((O=P.current)!=null&&O.shiftKey&&((I=P.current)==null?void 0:I.key)==="Tab"),L=w[0],F=w[w.length-1];typeof L!="string"&&typeof F!="string"&&(D?F.focus():L.focus())}else R.focus()};a.addEventListener("focusin",x),a.addEventListener("keydown",E,!0);const k=setInterval(()=>{a.activeElement&&a.activeElement.tagName==="BODY"&&x()},50);return()=>{clearInterval(k),a.removeEventListener("focusin",x),a.removeEventListener("keydown",E,!0)}},[o,n,s,i,l,r]);const C=a=>{g.current===null&&(g.current=a.relatedTarget),y.current=!0,T.current=a.target;const E=t.props.onFocus;E&&E(a)},S=a=>{g.current===null&&(g.current=a.relatedTarget),y.current=!0};return B.jsxs(d.Fragment,{children:[B.jsx("div",{tabIndex:l?0:-1,onFocus:S,ref:b,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:M,onFocus:C}),B.jsx("div",{tabIndex:l?0:-1,onFocus:S,ref:m,"data-testid":"sentinelEnd"})]})}function Me(e){const t=j(e);return t.body===e?Q(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function U(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ae(e){return parseInt(Q(e).getComputedStyle(e).paddingRight,10)||0}function Fe(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function le(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,i=>{const l=r.indexOf(i)===-1,u=!Fe(i);l&&u&&U(i,s)})}function q(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function Ae(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(Me(n)){const i=Te(j(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${ae(n)+i}px`;const l=j(n).querySelectorAll(".mui-fixed");[].forEach.call(l,u=>{o.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${ae(u)+i}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=j(n).body;else{const i=n.parentElement,l=Q(n);r=(i==null?void 0:i.nodeName)==="HTML"&&l.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:l})=>{r?i.style.setProperty(l,r):i.style.removeProperty(l)})}}function Be(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class Oe{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&U(t.modalRef,!1);const s=Be(o);le(o,t.mount,t.modalRef,s,!0);const r=q(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=q(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[n];s.restore||(s.restore=Ae(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=q(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&U(t.modalRef,o),le(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&U(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Le(e){return typeof e=="function"?e():e}function De(e){return e?e.props.hasOwnProperty("in"):!1}const je=new Oe;function He(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:s=je,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:l,children:u,onClose:b,open:m,rootRef:g}=e,T=d.useRef({}),y=d.useRef(null),c=d.useRef(null),M=X(c,g),[P,C]=d.useState(!m),S=De(u);let a=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(a=!1);const E=()=>j(y.current),x=()=>(T.current.modalRef=c.current,T.current.mount=y.current,T.current),k=()=>{s.mount(x(),{disableScrollLock:n}),c.current&&(c.current.scrollTop=0)},R=oe(()=>{const f=Le(t)||E().body;s.add(x(),f),c.current&&k()}),w=d.useCallback(()=>s.isTopModal(x()),[s]),O=oe(f=>{y.current=f,f&&(m&&w()?k():c.current&&U(c.current,a))}),I=d.useCallback(()=>{s.remove(x(),a)},[a,s]);d.useEffect(()=>()=>{I()},[I]),d.useEffect(()=>{m?R():(!S||!r)&&I()},[m,I,S,r,R]);const D=f=>h=>{var A;(A=f.onKeyDown)==null||A.call(f,h),!(h.key!=="Escape"||h.which===229||!w())&&(o||(h.stopPropagation(),b&&b(h,"escapeKeyDown")))},L=f=>h=>{var A;(A=f.onClick)==null||A.call(f,h),h.target===h.currentTarget&&b&&b(h,"backdropClick")};return{getRootProps:(f={})=>{const h=Ee(e);delete h.onTransitionEnter,delete h.onTransitionExited;const A=v({},h,f);return v({role:"presentation"},A,{onKeyDown:D(A),ref:M})},getBackdropProps:(f={})=>{const h=f;return v({"aria-hidden":!0},h,{onClick:L(h),open:m})},getTransitionProps:()=>{const f=()=>{C(!1),i&&i()},h=()=>{C(!0),l&&l(),r&&I()};return{onEnter:ie(f,u==null?void 0:u.props.onEnter),onExited:ie(h,u==null?void 0:u.props.onExited)}},rootRef:M,portalRef:O,isTopModal:w,exited:P,hasTransition:S}}const _e=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],$e={entering:{opacity:1},entered:{opacity:1}},Ue=d.forwardRef(function(t,o){const n=xe(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:l,easing:u,in:b,onEnter:m,onEntered:g,onEntering:T,onExit:y,onExited:c,onExiting:M,style:P,timeout:C=s,TransitionComponent:S=ve}=t,a=V(t,_e),E=d.useRef(null),x=X(E,l.ref,o),k=p=>N=>{if(p){const f=E.current;N===void 0?p(f):p(f,N)}},R=k(T),w=k((p,N)=>{ye(p);const f=re({style:P,timeout:C,easing:u},{mode:"enter"});p.style.webkitTransition=n.transitions.create("opacity",f),p.style.transition=n.transitions.create("opacity",f),m&&m(p,N)}),O=k(g),I=k(M),D=k(p=>{const N=re({style:P,timeout:C,easing:u},{mode:"exit"});p.style.webkitTransition=n.transitions.create("opacity",N),p.style.transition=n.transitions.create("opacity",N),y&&y(p)}),L=k(c),F=p=>{r&&r(E.current,p)};return B.jsx(S,v({appear:i,in:b,nodeRef:E,onEnter:w,onEntered:O,onEntering:R,onExit:D,onExited:L,onExiting:I,addEndListener:F,timeout:C},a,{children:(p,N)=>d.cloneElement(l,v({style:v({opacity:0,visibility:p==="exited"&&!b?"hidden":void 0},$e[p],P,l.props.style),ref:x},N))}))});function Ke(e){return de("MuiBackdrop",e)}ue("MuiBackdrop",["root","invisible"]);const We=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],ze=e=>{const{classes:t,invisible:o}=e;return fe({root:["root",o&&"invisible"]},Ke,t)},Ye=J("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>v({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),qe=d.forwardRef(function(t,o){var n,s,r;const i=ce({props:t,name:"MuiBackdrop"}),{children:l,className:u,component:b="div",components:m={},componentsProps:g={},invisible:T=!1,open:y,slotProps:c={},slots:M={},TransitionComponent:P=Ue,transitionDuration:C}=i,S=V(i,We),a=v({},i,{component:b,invisible:T}),E=ze(a),x=(n=c.root)!=null?n:g.root;return B.jsx(P,v({in:y,timeout:C},S,{children:B.jsx(Ye,v({"aria-hidden":!0},x,{as:(s=(r=M.root)!=null?r:m.Root)!=null?s:b,className:G(E.root,u,x==null?void 0:x.className),ownerState:v({},a,x==null?void 0:x.ownerState),classes:E,ref:o,children:l}))}))});function Ge(e){return de("MuiModal",e)}ue("MuiModal",["root","hidden","backdrop"]);const Ve=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Xe=e=>{const{open:t,exited:o,classes:n}=e;return fe({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Ge,n)},Je=J("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>v({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Qe=J(qe,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),nt=d.forwardRef(function(t,o){var n,s,r,i,l,u;const b=ce({name:"MuiModal",props:t}),{BackdropComponent:m=Qe,BackdropProps:g,className:T,closeAfterTransition:y=!1,children:c,container:M,component:P,components:C={},componentsProps:S={},disableAutoFocus:a=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:x=!1,disablePortal:k=!1,disableRestoreFocus:R=!1,disableScrollLock:w=!1,hideBackdrop:O=!1,keepMounted:I=!1,onBackdropClick:D,open:L,slotProps:F,slots:p}=b,N=V(b,Ve),f=v({},b,{closeAfterTransition:y,disableAutoFocus:a,disableEnforceFocus:E,disableEscapeKeyDown:x,disablePortal:k,disableRestoreFocus:R,disableScrollLock:w,hideBackdrop:O,keepMounted:I}),{getRootProps:h,getBackdropProps:A,getTransitionProps:pe,portalRef:he,isTopModal:me,exited:Z,hasTransition:ee}=He(v({},f,{rootRef:o})),$=v({},f,{exited:Z}),H=Xe($),K={};if(c.props.tabIndex===void 0&&(K.tabIndex="-1"),ee){const{onEnter:_,onExited:W}=pe();K.onEnter=_,K.onExited=W}const te=(n=(s=p==null?void 0:p.root)!=null?s:C.Root)!=null?n:Je,ne=(r=(i=p==null?void 0:p.backdrop)!=null?i:C.Backdrop)!=null?r:m,z=(l=F==null?void 0:F.root)!=null?l:S.root,Y=(u=F==null?void 0:F.backdrop)!=null?u:S.backdrop,be=se({elementType:te,externalSlotProps:z,externalForwardedProps:N,getSlotProps:h,additionalProps:{ref:o,as:P},ownerState:$,className:G(T,z==null?void 0:z.className,H==null?void 0:H.root,!$.open&&$.exited&&(H==null?void 0:H.hidden))}),ge=se({elementType:ne,externalSlotProps:Y,additionalProps:g,getSlotProps:_=>A(v({},_,{onClick:W=>{D&&D(W),_!=null&&_.onClick&&_.onClick(W)}})),className:G(Y==null?void 0:Y.className,g==null?void 0:g.className,H==null?void 0:H.backdrop),ownerState:$});return!I&&!L&&(!ee||Z)?null:B.jsx(Re,{ref:he,container:M,disablePortal:k,children:B.jsxs(te,v({},be,{children:[!O&&m?B.jsx(ne,v({},ge)):null,B.jsx(Ne,{disableEnforceFocus:E,disableAutoFocus:a,disableRestoreFocus:R,isEnabled:me,open:L,children:d.cloneElement(c,K)})]}))})});export{qe as B,Ue as F,nt as M,Ne as a,ie as c,Te as g,Q as o};
