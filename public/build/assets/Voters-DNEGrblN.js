import{r as i,j as t}from"./app-ADJZr-AT.js";import{B as f}from"./Breadcrumb-BEK0iBZL.js";import{P as p}from"./PrimaryButton-CjJaJcRW.js";import{D as C}from"./DefaultLayout-DjeAsvpz.js";import{D as g}from"./DataGridUtils-GUidWx8O.js";import x from"./ButtonActions-DPtiJFBY.js";import{m as r}from"./notiflix-aio-3.2.7.min-CYoT5kiX.js";import N from"./ModalCreateVoter-N7xn4uj-.js";import{T as k}from"./Tooltip-Fqj0sX8l.js";import"./iconBase-CL8J5zGy.js";import"./Box-CYhAZ-9A.js";import"./Typography-B-Uq9g5Z.js";import"./index-CWiaQseY.js";import"./Divider-zgAqc4BD.js";import"./InputLabel-Bj-2Xame.js";import"./TextInput-DlqFgwHf.js";import"./InputError-DYAjLIKo.js";import"./SecondaryButton-7Mz2mJ6M.js";const o=["999.999.999-99"],v=["(99) 9 9999-9999"];function H({items:n}){const[l,m]=i.useState(!1),[d,s]=i.useState(!1),[b,h]=i.useState(!1),u=()=>{s(!1)},c=i.useMemo(()=>[{field:"id",headerName:"ID",width:80,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white"},{field:"name",headerName:"Nome",width:250,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white"},{field:"cpf",headerName:"CPF",width:130,headerClassName:"bg-bodydark2 text-white",disableClickEventBubbling:!0,valueGetter:(a,e)=>`${r(e==null?void 0:e.cpf,o)}`},{field:"phone",headerName:"Telefone",width:140,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${r(e==null?void 0:e.phone,v)}`},{field:"city",headerName:"Município",width:120,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${e!=null&&e.city?e.city:"-"}`},{field:"neighborhood",headerName:"Bairro",width:120,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${e!=null&&e.neighborhood?e.neighborhood:"-"}`},{field:"leader",headerName:"Liderança",width:200,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${e==null?void 0:e.leader.name} (${r(e==null?void 0:e.leader.cpf,o)})`},{headerName:"Ações",width:108,headerClassName:"bg-bodydark2 text-white",renderCell:({row:a})=>t.jsx(x,{rowSelected:a,modification:l,setModification:m}),sortable:!1,filterable:!1,disableClickEventBubbling:!0}],[b,l]);return t.jsxs(C,{children:[t.jsx(f,{pageName:"Eleitores"}),t.jsxs("div",{className:"flex justify-between",children:[t.jsx("div",{}),t.jsx(p,{className:"bg-green-600 text-slate-50 hover:bg-green-500 tex mb-10 h-11",onClick:()=>s(!d),children:t.jsx(k,{title:"Cadastrar Eleitor",children:"Cadastrar"})})]}),t.jsx(g,{dataContent:n,columns:c,setRowSelected:h}),t.jsx(N,{showModal:d,handleClose:u,title:"Cadastrar Eleitor",typeButton:"Salvar"})]})}export{H as default};
