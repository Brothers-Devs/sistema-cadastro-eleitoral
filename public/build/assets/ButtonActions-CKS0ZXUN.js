import{r as j,j as e,y as u}from"./app-D60QiUUu.js";import{S as f,C as b,d as g,G as y}from"./index-Ad5l5k_e.js";import{m as C,n as a}from"./notiflix-aio-3.2.7.min-8C91F4Zl.js";import{P as c}from"./PrimaryButton-BxZWfr1g.js";import{T as m}from"./Tooltip-BJSgCLB1.js";import{I as d}from"./createSvgIcon-C9ZW0NiI.js";import{M as k}from"./Popper-CN8aOdPx.js";import{B as p}from"./Box-CDNgT4xD.js";import{T as x}from"./Typography-C40SsvxI.js";import"./styled-BKJm69b0.js";import"./iconBase-CPrmH8Dm.js";const E={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",alignItems:"center",flexDirection:"column",width:500,height:280,bgcolor:"background.paper",borderRadius:2,boxShadow:24,p:4},D=["999.999.999-99"];function $({rowSelected:t,modification:s,setModification:r}){const[i,o]=j.useState(!1),n=()=>o(!0),l=()=>o(!1);function h(){u.get(`/voters/${t==null?void 0:t.id}/edit`)}return e.jsxs(f,{direction:"row",alignItems:"center",spacing:0,children:[e.jsx(m,{title:"Editar",children:e.jsx(d,{"aria-label":"edit",size:"medium",color:"primary",onClick:h,children:e.jsx(b,{fontSize:"inherit"})})}),e.jsx(m,{title:"Excluir",children:e.jsx(d,{"aria-label":"delete",size:"medium",color:"error",onClick:n,children:e.jsx(g,{fontSize:"inherit"})})}),i?e.jsx(M,{handleClose:l,open:i,rowId:t==null?void 0:t.id,dataVoter:t,modification:s,setModification:r}):null]})}function M({handleClose:t,open:s,rowId:r,dataVoter:i,modification:o,setModification:n}){function l(){u.delete(`/voters/${r}`,{onSuccess:()=>{n(!o),a.Notify.success("Eleitor excluido com sucesso!")},onError:()=>{a.Notify.failure("Falha ao excluir eleitor!")}})}return e.jsx(k,{open:s,keepMounted:!0,onClose:t,"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:e.jsxs(p,{sx:E,children:[e.jsxs(p,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e.jsx(y,{size:30,className:"mb-2",color:"red"}),e.jsx(x,{id:"keep-mounted-modal-title",variant:"h6",component:"h2",children:"Confirmar Exclusão"})]}),e.jsx(x,{id:"keep-mounted-modal-description",variant:"subtitle1",component:"h2",sx:{mt:2,textAlign:"center"},children:e.jsxs("p",{children:["Tem certeza que deseja excluir o Eleitor",e.jsxs("b",{children:[" ",i.name," "]})," de CPF",e.jsxs("b",{children:[" ",`${C(i.cpf,D)}`," "]}),"?"]})}),e.jsxs(f,{direction:"row",alignItems:"center",spacing:4,sx:{mt:4},children:[e.jsx(c,{className:"bg-slate-200 p-3 font-medium text-slate-700 hover:bg-slate-100 mb-10 h-11",onClick:t,children:"Cancelar"}),e.jsx(c,{className:"bg-red-600 p-3 font-medium text-slate-50 hover:bg-red-400 mb-10 h-11",onClick:l,children:"Excluir"})]})]})})}export{$ as default};
