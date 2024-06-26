import{_ as r,l as C,r as A,k as w,h as D,j as v}from"./app-D4aCIDpl.js";import{a as R,g as L,c as W}from"./Box-CS2s35aH.js";import{s as f,c as I}from"./styled-CvfIzulS.js";function $(i){return R("MuiDivider",i)}const U=L("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),V=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],j=i=>{const{absolute:t,children:e,classes:o,flexItem:s,light:n,orientation:a,textAlign:l,variant:c}=i;return I({root:["root",t&&"absolute",c,n&&"light",a==="vertical"&&"vertical",s&&"flexItem",e&&"withChildren",e&&a==="vertical"&&"withChildrenVertical",l==="right"&&a!=="vertical"&&"textAlignRight",l==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},$,o)},M=f("div",{name:"MuiDivider",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,e.absolute&&t.absolute,t[e.variant],e.light&&t.light,e.orientation==="vertical"&&t.vertical,e.flexItem&&t.flexItem,e.children&&t.withChildren,e.children&&e.orientation==="vertical"&&t.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&t.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:i,ownerState:t})=>r({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:C(i.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:i})=>r({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:i,ownerState:t})=>r({},t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(i.vars||i).palette.divider}`}}),({theme:i,ownerState:t})=>r({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(i.vars||i).palette.divider}`}}),({ownerState:i})=>r({},i.textAlign==="right"&&i.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},i.textAlign==="left"&&i.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),_=f("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.wrapper,e.orientation==="vertical"&&t.wrapperVertical]}})(({theme:i,ownerState:t})=>r({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`})),k=A.forwardRef(function(t,e){const o=w({props:t,name:"MuiDivider"}),{absolute:s=!1,children:n,className:a,component:l=n?"div":"hr",flexItem:c=!1,light:p=!1,orientation:x="horizontal",role:h=l!=="hr"?"separator":void 0,textAlign:u="center",variant:m="fullWidth"}=o,b=D(o,V),d=r({},o,{absolute:s,component:l,flexItem:c,light:p,orientation:x,role:h,textAlign:u,variant:m}),g=j(d);return v.jsx(M,r({as:l,className:W(g.root,a),role:h,ref:e,ownerState:d},b,{children:n?v.jsx(_,{className:g.wrapper,ownerState:d,children:n}):null}))});k.muiSkipListHighlight=!0;export{k as D,U as d};
