import{r as n,j as e,a as l,Y as g}from"./app-BWCG_Cv1.js";import{A as p}from"./ApplicationLogo-fr1_-Pi2.js";import{q as f}from"./transition-BK4Mj1TL.js";import j from"./DeleteUserForm-ByVKJWzS.js";import b from"./UpdatePasswordForm-CiBjsir8.js";import v from"./UpdateProfileInformationForm-D0oIA9gu.js";import"./TextInput-DOcV-r0e.js";import"./InputLabel-Bnia5ZCR.js";import"./SecondaryButton-B0dkBtLY.js";import"./PrimaryButton-CF7Qnmlv.js";const h=n.createContext(),d=({children:s})=>{const[t,r]=n.useState(!1),i=()=>{r(o=>!o)};return e.jsx(h.Provider,{value:{open:t,setOpen:r,toggleOpen:i},children:e.jsx("div",{className:"relative",children:s})})},y=({children:s})=>{const{open:t,setOpen:r,toggleOpen:i}=n.useContext(h);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:i,children:s}),t&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},N=({align:s="right",width:t="48",contentClasses:r="py-1 bg-white",children:i})=>{const{open:o,setOpen:c}=n.useContext(h);let x="origin-top";s==="left"?x="ltr:origin-top-left rtl:origin-top-right start-0":s==="right"&&(x="ltr:origin-top-right rtl:origin-top-left end-0");let u="";return t==="48"&&(u="w-48"),e.jsx(e.Fragment,{children:e.jsx(f,{as:n.Fragment,show:o,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${x} ${u}`,onClick:()=>c(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:i})})})})},w=({className:s="",children:t,...r})=>e.jsx(l,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+s,children:t});d.Trigger=y;d.Content=N;d.Link=w;const a=d;function k({active:s=!1,className:t="",children:r,...i}){return e.jsx(l,{...i,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(s?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+t,children:r})}function m({active:s=!1,className:t="",children:r,...i}){return e.jsx(l,{...i,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${s?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:r})}function C({user:s,header:t,children:r}){const[i,o]=n.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(l,{href:"/",children:e.jsx(p,{className:"block h-9 w-auto fill-current text-gray-800"})})}),e.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:e.jsx(k,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})})]}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"ms-3 relative",children:e.jsxs(a,{children:[e.jsx(a.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[s.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(a.Content,{children:[e.jsx(a.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(a.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>o(c=>!c),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(i?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(m,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800",children:s.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:s.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(m,{href:route("profile.edit"),children:"Profile"}),e.jsx(m,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&e.jsx("header",{className:"bg-white shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),e.jsx("main",{children:r})]})}function A({auth:s,mustVerifyEmail:t,status:r}){return e.jsxs(C,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:[e.jsx(g,{title:"Profile"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[e.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsx(v,{mustVerifyEmail:t,status:r,className:"max-w-xl"})}),e.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsx(b,{className:"max-w-xl"})}),e.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsx(j,{className:"max-w-xl"})})]})})]})}export{A as default};
