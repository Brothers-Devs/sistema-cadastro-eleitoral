import{r as j,j as e,y as f}from"./app-_lnmzOKR.js";import{S as h,C as b,d as g,G as y}from"./index-BAHnJAbd.js";import{m as k,n as d}from"./notiflix-aio-3.2.7.min-WgR_9svS.js";import{P as m}from"./PrimaryButton-CYf_ZARB.js";import{T as c}from"./Tooltip-Cl9h7owA.js";import{I as p}from"./createSvgIcon-BB6wH_Qd.js";import{M as C}from"./Popper-0BjgXkmE.js";import{B as x}from"./Box-hmiqs3w1.js";import{T as u}from"./Typography-CqrnpfI9.js";import"./styled-CDFh0EFZ.js";import"./iconBase-DZKOQvdF.js";const E={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",alignItems:"center",flexDirection:"column",width:500,height:280,bgcolor:"background.paper",borderRadius:2,boxShadow:24,p:4},D=["999.999.999-99"];function F({rowSelected:t,modification:o,setModification:n}){const[i,s]=j.useState(!1),r=()=>s(!0),a=()=>s(!1);function l(){f.get(`/leaders/${t==null?void 0:t.id}/edit`)}return e.jsxs(h,{direction:"row",alignItems:"center",spacing:0,children:[e.jsx(c,{title:"Editar",children:e.jsx(p,{"aria-label":"edit",size:"medium",color:"primary",onClick:l,children:e.jsx(b,{fontSize:"inherit"})})}),e.jsx(c,{title:"Excluir",children:e.jsx(p,{"aria-label":"delete",size:"medium",color:"error",onClick:r,children:e.jsx(g,{fontSize:"inherit"})})}),i?e.jsx(M,{handleClose:a,open:i,rowId:t==null?void 0:t.id,dataVoter:t,modification:o,setModification:n}):null]})}function M({handleClose:t,open:o,rowId:n,dataVoter:i,modification:s,setModification:r}){function a(){f.delete(`/leaders/${n}`,{onSuccess:()=>{r(!s),d.Notify.success("Liderança excluída com sucesso!")},onError:l=>{t(),d.Notify.failure(l.message)}})}return e.jsx(C,{open:o,keepMounted:!0,onClose:t,"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:e.jsxs(x,{sx:E,children:[e.jsxs(x,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e.jsx(y,{size:30,className:"mb-2",color:"red"}),e.jsx(u,{id:"keep-mounted-modal-title",variant:"h6",component:"h2",children:"Confirmar Exclusão"})]}),e.jsx(u,{id:"keep-mounted-modal-description",variant:"subtitle1",component:"h2",sx:{mt:2,textAlign:"center"},children:e.jsxs("p",{children:["Tem certeza que deseja excluir a Liderança",e.jsxs("b",{children:[" ",i.name," "]})," de CPF",e.jsxs("b",{children:[" ",`${k(i.cpf,D)}`," "]}),"?"]})}),e.jsxs(h,{direction:"row",alignItems:"center",spacing:4,sx:{mt:4},children:[e.jsx(m,{className:"bg-slate-200 p-3 font-medium text-slate-700 hover:bg-slate-100 mb-10 h-11",onClick:t,children:"Cancelar"}),e.jsx(m,{className:"bg-red-600 p-3 font-medium text-slate-50 hover:bg-red-400 mb-10 h-11",onClick:a,children:"Excluir"})]})]})})}export{F as default};