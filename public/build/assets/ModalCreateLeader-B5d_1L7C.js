import{W as k,j as e}from"./app-D4aCIDpl.js";import{P as g}from"./PrimaryButton-DivMmSaY.js";import{I as n}from"./InputLabel-Bzgbq2gB.js";import{T as d}from"./TextInput-BdmRATbT.js";import{I as m}from"./InputError-tNjF7Z0V.js";import{m as j,n as c}from"./notiflix-aio-3.2.7.min-CFWMpfGM.js";import{S as y}from"./SecondaryButton-DmdbyXWG.js";import{M as v,B as w,F as N}from"./Popper-DQw_Ul0b.js";import{B as p}from"./Box-CS2s35aH.js";import{T}from"./Typography-CIyZIWHg.js";import{T as C}from"./Tooltip-B3rXntZZ.js";import{D as F}from"./Divider-BSfhR0Hk.js";import"./styled-CvfIzulS.js";const I={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:850,minWidth:{xs:"95%",sm:"70%",md:"50%",lg:"40%"},maxWidth:"90%",bgcolor:"background.paper",boxShadow:24,p:2,overflow:"auto"},B=["999.999.999-99"];function H({showModal:t,handleClose:a,title:u,typeButton:f}){const{data:o,setData:s,post:x,errors:i,processing:b,reset:h}=k({name:"",cpf:""}),l=r=>{r.preventDefault(),x(route("leaders.create"),{onSuccess:()=>{c.Notify.success("Liderança cadastra com sucesso!"),h(),a()},onError:L=>{c.Notify.failure("Algo deu errado, tente novamente")}})};return e.jsx(v,{style:{zIndex:999},"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,onClose:a,closeAfterTransition:!0,slots:{backdrop:w},slotProps:{backdrop:{timeout:500}},children:e.jsx(N,{in:t,children:e.jsxs(p,{sx:I,children:[e.jsxs(p,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:"15px"},children:[e.jsx(T,{variant:"h5",sx:{fontWeight:"bold"},children:u}),e.jsx(y,{onClick:a,className:"h-8",children:e.jsx(C,{title:"Fechar",children:"X"})})]}),e.jsx(F,{variant:"fullWidth"}),e.jsx("form",{onSubmit:l,children:e.jsxs("div",{className:"w-full p-6.5",children:[e.jsxs("div",{className:"w-full flex flex-col gap-6 xl:flex-row max-xl:left-1 mb-5",children:[e.jsxs("div",{className:"w-full  xl:w-1/2",children:[e.jsx(n,{htmlFor:"name",value:"Nome da Liderança*",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(d,{id:"name",name:"name",value:o.name,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Nome da Liderança",required:!0,onChange:r=>s("name",r.target.value)}),e.jsx(m,{message:i.name,className:"mt-2"})]}),e.jsxs("div",{className:"w-full  xl:w-1/2",children:[e.jsx(n,{htmlFor:"cpf",value:"CPF da Liderança*",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(d,{id:"cpf",name:"cpf",value:o.cpf,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"000.000.000-00",required:!0,onChange:r=>s("cpf",j(r.target.value,B))}),e.jsx(m,{message:i.cpf,className:"mt-2"})]})]}),e.jsx(g,{type:"submit",disabled:b,onClick:l,className:"flex w-full mt-3 h-12 justify-center rounded bg-green-600 p-3 font-medium text-gray hover:bg-opacity-90",children:f})]})})]})})})}export{H as default};
