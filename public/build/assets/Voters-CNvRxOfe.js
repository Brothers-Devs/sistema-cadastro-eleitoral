import{r as i,j as t}from"./app-D4aCIDpl.js";import{B as f}from"./Breadcrumb-Df_OqYSm.js";import{P as C}from"./PrimaryButton-DivMmSaY.js";import{D as N}from"./DefaultLayout-BslAaoxq.js";import{D as x}from"./DataGridUtils-DSEGITJa.js";import g from"./ButtonActions-D6OpfhtD.js";import{m as s}from"./notiflix-aio-3.2.7.min-CFWMpfGM.js";import k from"./ModalCreateVoter-GLlSdSwS.js";import{T as v}from"./Tooltip-B3rXntZZ.js";import"./iconBase-zzUAO1CA.js";import"./logo-candidato-SK3Uj6G_.js";import"./Popper-DQw_Ul0b.js";import"./Box-CS2s35aH.js";import"./styled-CvfIzulS.js";import"./Autocomplete-Bjg3lLRM.js";import"./createSvgIcon-CDyz_2kq.js";import"./Divider-BSfhR0Hk.js";import"./index-DRTTjfW8.js";import"./Typography-CIyZIWHg.js";import"./InputLabel-Bzgbq2gB.js";import"./TextInput-BdmRATbT.js";import"./InputError-tNjF7Z0V.js";import"./SecondaryButton-DmdbyXWG.js";const n=["999.999.999-99"],E=["(99) 9 9999-9999"];function J({items:m,leaders:b}){const[l,o]=i.useState(!1),[d,r]=i.useState(!1),[u,h]=i.useState(!1),p=()=>{r(!1)},c=i.useMemo(()=>[{field:"id",headerName:"ID",width:80,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white"},{field:"name",headerName:"Nome",width:250,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white"},{field:"cpf",headerName:"CPF",width:130,headerClassName:"bg-bodydark2 text-white",disableClickEventBubbling:!0,valueGetter:(a,e)=>`${s(e==null?void 0:e.cpf,n)}`},{field:"phone",headerName:"Telefone",width:140,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${s(e==null?void 0:e.phone,E)}`},{field:"title_number",headerName:"Nº Título",width:120,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${e!=null&&e.title_number?e==null?void 0:e.title_number:"-"}`},{field:"zone",headerName:"Zona / Sessão",width:120,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${e!=null&&e.zone?e==null?void 0:e.zone:"-"} / ${e!=null&&e.session?e==null?void 0:e.session:"-"}`},{field:"leader",headerName:"Liderança",width:200,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white",valueGetter:(a,e)=>`${e==null?void 0:e.leader.name} (${s(e==null?void 0:e.leader.cpf,n)})`},{headerName:"Ações",width:108,headerClassName:"bg-bodydark2 text-white",renderCell:({row:a})=>t.jsx(g,{rowSelected:a,modification:l,setModification:o}),sortable:!1,filterable:!1,disableClickEventBubbling:!0}],[u,l]);return t.jsxs(N,{children:[t.jsx(f,{pageName:"Eleitores"}),t.jsxs("div",{className:"flex justify-between",children:[t.jsx("div",{}),t.jsx(C,{className:"bg-green-600 text-slate-50 hover:bg-green-500 mb-10 h-11",onClick:()=>r(!d),children:t.jsx(v,{title:"Cadastrar Eleitor",children:"Cadastrar"})})]}),t.jsx(x,{dataContent:m,columns:c,setRowSelected:h}),t.jsx(k,{showModal:d,handleClose:p,title:"Cadastrar Eleitor",typeButton:"Salvar",leaders:b})]})}export{J as default};