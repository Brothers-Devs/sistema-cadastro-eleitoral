import{r,d as c,j as t}from"./app-6NcjMSJ_.js";import{B as u}from"./Breadcrumb-CcOKFWP8.js";import{P as h}from"./PrimaryButton-C1qsqx9S.js";import{D as f}from"./DefaultLayout-DAEoGoZn.js";import{D as C}from"./DataGridUtils-BizUABA4.js";import x from"./ButtonActions-CoAeKfuD.js";import{m as g}from"./notiflix-aio-3.2.7.min-C2RshY7S.js";import N from"./ModalCreateLeader-DHz4N3vK.js";import{T as v}from"./Tooltip-Dw2IdYc8.js";import"./index-Aw78Cup7.js";import"./iconBase-UgCOcwYb.js";import"./logo-candidato-SK3Uj6G_.js";import"./Popper-_fb6CVe8.js";import"./generateUtilityClasses-B7pFC9SQ.js";import"./index-Gy4ldShE.js";import"./Autocomplete-B61tPLXo.js";import"./createSvgIcon-Ch_xO3JG.js";import"./Modal-C0FNJLzI.js";import"./Divider-DVkDCTRS.js";import"./index-P7yXyrMF.js";import"./createSvgIcon-BCaAOVx5.js";import"./Typography-5vhVhMOX.js";import"./CircularProgress-CB5dADyQ.js";import"./Box-Bv-FZ1Qi.js";import"./InputLabel-3KNnx9UP.js";import"./TextInput-SyWnqwLU.js";import"./SecondaryButton-BY62zMN1.js";const k=["999.999.999-99"];function V({items:o}){const[i,l]=r.useState(!1),[s,d]=r.useState(!1),[m,n]=r.useState(!1),b=()=>{d(!1)},p=r.useMemo(()=>[{field:"id",headerName:"ID",width:80,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white"},{field:"name",headerName:"Nome da Liderança",width:270,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white"},{field:"cpf",headerName:"CPF",width:150,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${g(e==null?void 0:e.cpf,k)}`},{field:"voters",headerName:"Total de Eleitores",width:150,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${e==null?void 0:e.voters.length}`,align:"center"},{field:"created_at",headerName:"Data de Cadastro",width:180,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${c(e==null?void 0:e.created_at).format("DD/MM/YYYY HH:mm")}`},{headerName:"Ações",width:319,headerClassName:"bg-bodydark2 text-white",renderCell:({row:a})=>t.jsx(x,{rowSelected:a,modification:i,setModification:l}),sortable:!1,filterable:!1,disableClickEventBubbling:!0}],[m,i]);return t.jsxs(f,{children:[t.jsx(u,{pageName:"Lideranças"}),t.jsxs("div",{className:"flex justify-between",children:[t.jsx("div",{}),t.jsx(h,{className:"bg-green-600 text-slate-50 hover:bg-green-500 mb-10 h-11",onClick:()=>d(!s),children:t.jsx(v,{title:"Cadastrar Liderança",children:"Cadastrar"})})]}),t.jsx(C,{dataContent:o,columns:p,setRowSelected:n}),t.jsx(N,{showModal:s,handleClose:b,title:"Cadastrar Liderança",typeButton:"Salvar"})]})}export{V as default};
