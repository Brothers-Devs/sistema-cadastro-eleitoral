import{r as i,j as t}from"./app-CKjkM2l_.js";import{B as f}from"./Breadcrumb-2n1XYFiT.js";import{P as C}from"./PrimaryButton-BOQxhO9F.js";import{D as g}from"./DefaultLayout-nRYZoJtw.js";import{D as x}from"./DataGridUtils-DZHMioA4.js";import N from"./ButtonActions-D1Y7k7GH.js";import{m as r}from"./notiflix-aio-3.2.7.min-BM3yCiSP.js";import k from"./ModalCreateVoter-tuFxPFDs.js";import{T as v}from"./Tooltip-Uic4wwMJ.js";import"./iconBase-BNI8s9-C.js";import"./Popper-DyvG4z3M.js";import"./Box-BoT2HTlR.js";import"./styled-DHUZhuo5.js";import"./Autocomplete-DYd4olp9.js";import"./createSvgIcon-DDtoO0q5.js";import"./Divider-BWLJs_OG.js";import"./index-DtoQgKbM.js";import"./Typography-ClU2HzDb.js";import"./InputLabel-jjUj1JYn.js";import"./TextInput-G6fe9FTz.js";import"./InputError-BsdG45OJ.js";import"./SecondaryButton-CljDaPv6.js";const o=["999.999.999-99"],E=["(99) 9 9999-9999"];function J({items:n,leaders:m}){const[l,b]=i.useState(!1),[d,s]=i.useState(!1),[h,u]=i.useState(!1),c=()=>{s(!1)},p=i.useMemo(()=>[{field:"id",headerName:"ID",width:80,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white"},{field:"name",headerName:"Nome",width:250,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white"},{field:"cpf",headerName:"CPF",width:130,headerClassName:"bg-bodydark2 text-white",disableClickEventBubbling:!0,valueGetter:(a,e)=>`${r(e==null?void 0:e.cpf,o)}`},{field:"phone",headerName:"Telefone",width:140,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${r(e==null?void 0:e.phone,E)}`},{field:"city",headerName:"Município",width:120,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${e!=null&&e.city?e.city:"-"}`},{field:"neighborhood",headerName:"Bairro",width:120,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${e!=null&&e.neighborhood?e.neighborhood:"-"}`},{field:"leader",headerName:"Liderança",width:200,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${e==null?void 0:e.leader.name} (${r(e==null?void 0:e.leader.cpf,o)})`},{headerName:"Ações",width:108,headerClassName:"bg-bodydark2 text-white",renderCell:({row:a})=>t.jsx(N,{rowSelected:a,modification:l,setModification:b}),sortable:!1,filterable:!1,disableClickEventBubbling:!0}],[h,l]);return t.jsxs(g,{children:[t.jsx(f,{pageName:"Eleitores"}),t.jsxs("div",{className:"flex justify-between",children:[t.jsx("div",{}),t.jsx(C,{className:"bg-green-600 text-slate-50 hover:bg-green-500 mb-10 h-11",onClick:()=>s(!d),children:t.jsx(v,{title:"Cadastrar Eleitor",children:"Cadastrar"})})]}),t.jsx(x,{dataContent:n,columns:p,setRowSelected:u}),t.jsx(k,{showModal:d,handleClose:c,title:"Cadastrar Eleitor",typeButton:"Salvar",leaders:m})]})}export{J as default};
