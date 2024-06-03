import{r as S,_ as v,k as O,h as K,j as e,C as j,B as $,W as q}from"./app-ADJZr-AT.js";import{P as Z}from"./PrimaryButton-CjJaJcRW.js";import{I as p}from"./InputLabel-Bj-2Xame.js";import{T as b}from"./TextInput-DlqFgwHf.js";import{I as x}from"./InputError-DYAjLIKo.js";import{m as k,n as P}from"./notiflix-aio-3.2.7.min-CYoT5kiX.js";import{S as U}from"./SecondaryButton-7Mz2mJ6M.js";import{m as H,M as X,B as J,F as Q,T as Y}from"./Tooltip-Fqj0sX8l.js";import{a as ee,g as re,e as ae,c as te,B as se}from"./Box-CYhAZ-9A.js";import{s as oe,c as ie,T as ne}from"./Typography-B-Uq9g5Z.js";import{D as le}from"./Divider-zgAqc4BD.js";const W=S.createContext();function de(r){return ee("MuiGrid",r)}const ce=[0,1,2,3,4,5,6,7,8,9,10],me=["column-reverse","column","row-reverse","row"],ue=["nowrap","wrap-reverse","wrap"],w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],y=re("MuiGrid",["root","container","item","zeroMinWidth",...ce.map(r=>`spacing-xs-${r}`),...me.map(r=>`direction-xs-${r}`),...ue.map(r=>`wrap-xs-${r}`),...w.map(r=>`grid-xs-${r}`),...w.map(r=>`grid-sm-${r}`),...w.map(r=>`grid-md-${r}`),...w.map(r=>`grid-lg-${r}`),...w.map(r=>`grid-xl-${r}`)]),pe=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function g(r){const s=parseFloat(r);return`${s}${String(r).replace(String(s),"")||"px"}`}function be({theme:r,ownerState:s}){let n;return r.breakpoints.keys.reduce((i,a)=>{let t={};if(s[a]&&(n=s[a]),!n)return i;if(n===!0)t={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")t={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=j({values:s.columns,breakpoints:r.breakpoints.values}),l=typeof c=="object"?c[a]:c;if(l==null)return i;const u=`${Math.round(n/l*1e8)/1e6}%`;let m={};if(s.container&&s.item&&s.columnSpacing!==0){const d=r.spacing(s.columnSpacing);if(d!=="0px"){const o=`calc(${u} + ${g(d)})`;m={flexBasis:o,maxWidth:o}}}t=v({flexBasis:u,flexGrow:0,maxWidth:u},m)}return r.breakpoints.values[a]===0?Object.assign(i,t):i[r.breakpoints.up(a)]=t,i},{})}function xe({theme:r,ownerState:s}){const n=j({values:s.direction,breakpoints:r.breakpoints.values});return $({theme:r},n,i=>{const a={flexDirection:i};return i.indexOf("column")===0&&(a[`& > .${y.item}`]={maxWidth:"none"}),a})}function M({breakpoints:r,values:s}){let n="";Object.keys(s).forEach(a=>{n===""&&s[a]!==0&&(n=a)});const i=Object.keys(r).sort((a,t)=>r[a]-r[t]);return i.slice(0,i.indexOf(n))}function fe({theme:r,ownerState:s}){const{container:n,rowSpacing:i}=s;let a={};if(n&&i!==0){const t=j({values:i,breakpoints:r.breakpoints.values});let c;typeof t=="object"&&(c=M({breakpoints:r.breakpoints.values,values:t})),a=$({theme:r},t,(l,u)=>{var m;const d=r.spacing(l);return d!=="0px"?{marginTop:`-${g(d)}`,[`& > .${y.item}`]:{paddingTop:g(d)}}:(m=c)!=null&&m.includes(u)?{}:{marginTop:0,[`& > .${y.item}`]:{paddingTop:0}}})}return a}function he({theme:r,ownerState:s}){const{container:n,columnSpacing:i}=s;let a={};if(n&&i!==0){const t=j({values:i,breakpoints:r.breakpoints.values});let c;typeof t=="object"&&(c=M({breakpoints:r.breakpoints.values,values:t})),a=$({theme:r},t,(l,u)=>{var m;const d=r.spacing(l);return d!=="0px"?{width:`calc(100% + ${g(d)})`,marginLeft:`-${g(d)}`,[`& > .${y.item}`]:{paddingLeft:g(d)}}:(m=c)!=null&&m.includes(u)?{}:{width:"100%",marginLeft:0,[`& > .${y.item}`]:{paddingLeft:0}}})}return a}function ge(r,s,n={}){if(!r||r<=0)return[];if(typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number")return[n[`spacing-xs-${String(r)}`]];const i=[];return s.forEach(a=>{const t=r[a];Number(t)>0&&i.push(n[`spacing-${a}-${String(t)}`])}),i}const ke=oe("div",{name:"MuiGrid",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:n}=r,{container:i,direction:a,item:t,spacing:c,wrap:l,zeroMinWidth:u,breakpoints:m}=n;let d=[];i&&(d=ge(c,m,s));const o=[];return m.forEach(f=>{const h=n[f];h&&o.push(s[`grid-${f}-${String(h)}`])}),[s.root,i&&s.container,t&&s.item,u&&s.zeroMinWidth,...d,a!=="row"&&s[`direction-xs-${String(a)}`],l!=="wrap"&&s[`wrap-xs-${String(l)}`],...o]}})(({ownerState:r})=>v({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},r.wrap!=="wrap"&&{flexWrap:r.wrap}),xe,fe,he,be);function we(r,s){if(!r||r<=0)return[];if(typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number")return[`spacing-xs-${String(r)}`];const n=[];return s.forEach(i=>{const a=r[i];if(Number(a)>0){const t=`spacing-${i}-${String(a)}`;n.push(t)}}),n}const ve=r=>{const{classes:s,container:n,direction:i,item:a,spacing:t,wrap:c,zeroMinWidth:l,breakpoints:u}=r;let m=[];n&&(m=we(t,u));const d=[];u.forEach(f=>{const h=r[f];h&&d.push(`grid-${f}-${String(h)}`)});const o={root:["root",n&&"container",a&&"item",l&&"zeroMinWidth",...m,i!=="row"&&`direction-xs-${String(i)}`,c!=="wrap"&&`wrap-xs-${String(c)}`,...d]};return ie(o,de,s)},F=S.forwardRef(function(s,n){const i=O({props:s,name:"MuiGrid"}),{breakpoints:a}=H(),t=ae(i),{className:c,columns:l,columnSpacing:u,component:m="div",container:d=!1,direction:o="row",item:f=!1,rowSpacing:h,spacing:_=0,wrap:R="wrap",zeroMinWidth:V=!1}=t,C=K(t,pe),I=h||_,A=u||_,D=S.useContext(W),T=d?l||12:D,z={},E=v({},C);a.keys.forEach(N=>{C[N]!=null&&(z[N]=C[N],delete E[N])});const B=v({},t,{columns:T,container:d,direction:o,item:f,rowSpacing:I,columnSpacing:A,wrap:R,zeroMinWidth:V,spacing:_},z,{breakpoints:a.keys}),L=ve(B);return e.jsx(W.Provider,{value:T,children:e.jsx(ke,v({ownerState:B,className:te(L.root,c),as:m,ref:n},E))})}),ye={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:600,width:"100%",maxWidth:350,bgcolor:"background.paper",border:"1px solid",boxShadow:24,p:2,overflow:"auto"},G=["999.999.999-99"],Ne=["(99) 9 9999-9999"],je=["99/99/9999"],_e=["99999-999"];function Me({showModal:r,handleClose:s,title:n,typeButton:i}){const{data:a,setData:t,post:c,errors:l,processing:u,reset:m}=q({name:"",cpf:"",phone:"",date_of_birth:"",rg:"",title_number:"",zone:"",session:"",address:"",zip_code:"",neighborhood:"",city:"",leader_name:"",leader_cpf:""}),d=o=>{o.preventDefault(),c(route("voters.create"),{onSuccess:()=>{P.Notify.success("Eleitor cadastro com sucesso!"),m(),s()},onError:f=>{P.Notify.failure("Algo deu errado, tente novamente")}})};return e.jsx(X,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:r,onClose:s,closeAfterTransition:!0,slots:{backdrop:J},slotProps:{backdrop:{timeout:500}},children:e.jsx(Q,{in:r,children:e.jsx(F,{container:!0,children:e.jsxs(F,{item:!0,xs:10,sm:8,md:6,sx:ye,children:[e.jsxs(se,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:"15px"},children:[e.jsx(ne,{variant:"h5",sx:{fontWeight:"bold"},children:n}),e.jsx(U,{onClick:s,className:"h-8",children:e.jsx(Y,{title:"Fechar",children:"X"})})]}),e.jsx(le,{variant:"fullWidth"}),e.jsx("form",{onSubmit:d,children:e.jsxs("div",{className:"w-full p-6.5",children:[e.jsxs("div",{className:"w-full flex flex-col gap-6 xl:flex-row mb-5",children:[e.jsxs("div",{className:"w-full xl:w-2/3",children:[e.jsx(p,{htmlFor:"name",value:"Nome*",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"name",name:"name",value:a.name,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Nome Completo",required:!0,autoComplete:"name",onChange:o=>t("name",o.target.value)}),e.jsx(x,{message:l.name,className:"mt-2"})]}),e.jsxs("div",{className:"w-full xl:w-1/3",children:[e.jsx(p,{htmlFor:"date_of_birth",value:"Data de Nascimento",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"date_of_birth",name:"date_of_birth",value:a.date_of_birth,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"__/__/____",required:!0,autoComplete:"date",onChange:o=>t("date_of_birth",k(o.target.value,je))}),e.jsx(x,{message:l.date_of_birth,className:"mt-2"})]})]}),e.jsxs("div",{className:"w-full flex flex-col gap-6 xl:flex-row mb-5",children:[e.jsxs("div",{className:"w-full xl:w-1/3",children:[e.jsx(p,{htmlFor:"rg",value:"RG",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"rg",name:"rg",value:a.rg,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"RG",onChange:o=>t("rg",o.target.value)}),e.jsx(x,{message:l.rg,className:"mt-2"})]}),e.jsxs("div",{className:"w-full xl:w-1/3",children:[e.jsx(p,{htmlFor:"cpf",value:"CPF*",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"cpf",name:"cpf",value:a.cpf,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"000.000.000-00",required:!0,onChange:o=>t("cpf",k(o.target.value,G))}),e.jsx(x,{message:l.cpf,className:"mt-2"})]}),e.jsxs("div",{className:"w-full xl:w-1/3",children:[e.jsx(p,{htmlFor:"phone",value:"Telefone*",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"phone",name:"phone",value:a.phone,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"(91) 9 0000-0000",required:!0,onChange:o=>t("phone",k(o.target.value,Ne))}),e.jsx(x,{message:l.phone,className:"mt-2"})]})]}),e.jsxs("div",{className:"w-full flex flex-col gap-6 xl:flex-row mb-5",children:[e.jsxs("div",{className:"w-full xl:w-1/3",children:[e.jsx(p,{htmlFor:"title_number",value:"Nº Título",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"title_number",name:"title_number",value:a.title_number,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Nº Título",onChange:o=>t("title_number",o.target.value)}),e.jsx(x,{message:l.title_number,className:"mt-2"})]}),e.jsxs("div",{className:"w-full xl:w-1/3",children:[e.jsx(p,{htmlFor:"zone",value:"Zona",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"zone",name:"zone",value:a.zone,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Nº Zona",onChange:o=>t("zone",o.target.value)}),e.jsx(x,{message:l.zone,className:"mt-2"})]}),e.jsxs("div",{className:"w-full xl:w-1/3",children:[e.jsx(p,{htmlFor:"session",value:"Seção",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"session",name:"session",value:a.session,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Seção",onChange:o=>t("session",o.target.value)}),e.jsx(x,{message:l.session,className:"mt-2"})]})]}),e.jsxs("div",{className:"w-full flex flex-col gap-6 xl:flex-row mb-5",children:[e.jsxs("div",{className:"w-full  xl:w-1/2",children:[e.jsx(p,{htmlFor:"address",value:"Endereço",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"address",name:"address",value:a.address,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Endereço",onChange:o=>t("address",o.target.value)}),e.jsx(x,{message:l.address,className:"mt-2"})]}),e.jsxs("div",{className:"w-full  xl:w-1/2",children:[e.jsx(p,{htmlFor:"cep",value:"CEP",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"cep",name:"cep",value:a.zip_code,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"00000-000",onChange:o=>t("zip_code",k(o.target.value,_e))}),e.jsx(x,{message:l.zip_code,className:"mt-2"})]})]}),e.jsxs("div",{className:"w-full flex flex-col gap-6 xl:flex-row mb-5",children:[e.jsxs("div",{className:"w-full xl:w-1/2",children:[e.jsx(p,{htmlFor:"neighborhood",value:"Bairro",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"neighborhood",name:"neighborhood",value:a.neighborhood,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Bairro",onChange:o=>t("neighborhood",o.target.value)}),e.jsx(x,{message:l.neighborhood,className:"mt-2"})]}),e.jsxs("div",{className:"w-full xl:w-1/2",children:[e.jsx(p,{htmlFor:"city",value:"Cidade",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"city",name:"city",value:a.city,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Cidade",onChange:o=>t("city",o.target.value)}),e.jsx(x,{message:l.city,className:"mt-2"})]})]}),e.jsxs("div",{className:"w-full flex flex-col gap-6 xl:flex-row mb-5",children:[e.jsxs("div",{className:"w-full  xl:w-1/2",children:[e.jsx(p,{htmlFor:"leader",value:"Nome da Liderança*",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"leader",name:"leader",value:a.leader_name,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Nome da Liderança",required:!0,onChange:o=>t("leader_name",o.target.value)}),e.jsx(x,{message:l.leader_name,className:"mt-2"})]}),e.jsxs("div",{className:"w-full  xl:w-1/2",children:[e.jsx(p,{htmlFor:"leader_cpf",value:"CPF da Liderança*",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(b,{id:"leader_cpf",name:"leader_cpf",value:a.leader_cpf,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"000.000.000-00",required:!0,onChange:o=>t("leader_cpf",k(o.target.value,G))}),e.jsx(x,{message:l.leader_cpf,className:"mt-2"})]})]}),e.jsx(Z,{type:"submit",disabled:u,onClick:d,className:"flex w-full mt-3 h-12 justify-center rounded bg-green-600 p-3 font-medium text-gray hover:bg-opacity-90",children:i})]})})]})})})})}export{Me as default};