import{W as v,j as e,r as y}from"./app-CypXh5JM.js";import{P as C}from"./PrimaryButton-CyuJ0MTS.js";import{I as o}from"./InputLabel-BZKWI0Cb.js";import{I as l,T as i}from"./TextInput-BA2bijzK.js";import{m as n}from"./index.esm-CxNWdyHN.js";import{S as T}from"./SecondaryButton-Czq5fz5u.js";import{n as p}from"./notiflix-aio-3.2.7.min-R37nWhFs.js";import{M as F,B as _,F as E}from"./Modal-CFopQyeW.js";import{G as x}from"./Grid-DY9fzT0b.js";import{B as I}from"./Box-DsIIlmk_.js";import{T as P}from"./Typography-CUJlPNH8.js";import{T as z}from"./Tooltip-Bb17mPFC.js";import{D as S}from"./Divider-BvXE55bN.js";import{F as W,A,T as B}from"./Autocomplete-DAtuj_yF.js";import"./generateUtilityClasses-B1DpmFzl.js";import"./Popper-BZOJaGbd.js";import"./createSvgIcon-5t9yY9aP.js";const q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:600,width:"100%",maxWidth:350,bgcolor:"background.paper",border:"1px solid",boxShadow:24,p:2,overflow:"auto"},b=["999.999.999-99"],D=["(99) 9 9999-9999"];function ae({showModal:m,handleClose:d,title:f,typeButton:h,leaders:k}){const{data:a,setData:t,post:w,errors:s,processing:g,reset:j}=v({name:"",cpf:"",phone:"",title_number:"",zone:"",session:"",leader:{id:"",name:"",cpf:"",created_at:"",updated_at:"",nameWithCpf:""}}),N=k.map(r=>({...r,nameWithCpf:`${r.name} (${n(r.cpf,b)})`})),c=r=>{r.preventDefault(),w(route("voters.create"),{onSuccess:()=>{p.Notify.success("Eleitor cadastro com sucesso!"),j(),d()},onError:u=>{p.Notify.failure("Algo deu errado, tente novamente")}})};return e.jsx(F,{style:{zIndex:999},"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:m,onClose:d,closeAfterTransition:!0,slots:{backdrop:_},slotProps:{backdrop:{timeout:500}},children:e.jsx(E,{in:m,children:e.jsx(x,{container:!0,children:e.jsxs(x,{item:!0,xs:10,sm:8,md:6,sx:q,children:[e.jsxs(I,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:"15px"},children:[e.jsx(P,{variant:"h5",sx:{fontWeight:"bold"},children:f}),e.jsx(T,{onClick:d,className:"h-8",children:e.jsx(z,{title:"Fechar",children:"X"})})]}),e.jsx(S,{variant:"fullWidth"}),e.jsx("form",{onSubmit:c,children:e.jsxs("div",{className:"w-full p-6.5",children:[e.jsxs("div",{className:"w-full flex flex-colxl:flex-row mb-5",children:[e.jsxs("div",{className:"w-full xl:w-2/3",children:[e.jsxs(W,{required:!0,sx:{width:400},children:[e.jsx(o,{id:"leader",className:"mb-2",children:"Selecione a Liderança*"}),e.jsx(A,{className:"max-sm:w-67",value:a==null?void 0:a.leader,onChange:(r,u)=>{t("leader",u)},id:"leader",options:N,renderInput:r=>y.createElement(B,{...r,key:r.id}),getOptionLabel:r=>r?r.nameWithCpf:""})]}),e.jsx(l,{message:s["leader.id"],className:"mt-2"})]}),e.jsx("div",{className:"w-full xl:w-1/3"})]}),e.jsx("div",{className:"w-full flex flex-col gap-6 xl:flex-row mb-5",children:e.jsxs("div",{className:"w-full xl:w-2/3",children:[e.jsx(o,{htmlFor:"name",value:"Nome*",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(i,{id:"name",name:"name",value:a.name,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Nome Completo",required:!0,autoComplete:"name",onChange:r=>t("name",r.target.value)}),e.jsx(l,{message:s.name,className:"mt-2"})]})}),e.jsxs("div",{className:"w-full flex flex-col gap-6 xl:flex-row mb-5",children:[e.jsxs("div",{className:"w-full xl:w-1/3",children:[e.jsx(o,{htmlFor:"cpf",value:"CPF*",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(i,{id:"cpf",name:"cpf",value:a.cpf,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"000.000.000-00",required:!0,onChange:r=>t("cpf",n(r.target.value,b))}),e.jsx(l,{message:s.cpf,className:"mt-2"})]}),e.jsxs("div",{className:"w-full xl:w-1/3",children:[e.jsx(o,{htmlFor:"phone",value:"Telefone*",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(i,{id:"phone",name:"phone",value:a.phone,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"(91) 9 0000-0000",required:!0,onChange:r=>t("phone",n(r.target.value,D))}),e.jsx(l,{message:s.phone,className:"mt-2"})]})]}),e.jsxs("div",{className:"w-full flex flex-col gap-6 xl:flex-row mb-5",children:[e.jsxs("div",{className:"w-full xl:w-1/3",children:[e.jsx(o,{htmlFor:"title_number",value:"Nº Título",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(i,{id:"title_number",name:"title_number",value:a.title_number,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Nº Título",onChange:r=>t("title_number",r.target.value)}),e.jsx(l,{message:s.title_number,className:"mt-2"})]}),e.jsxs("div",{className:"w-full xl:w-1/3",children:[e.jsx(o,{htmlFor:"zone",value:"Zona",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(i,{id:"zone",name:"zone",value:a.zone,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Nº Zona",onChange:r=>t("zone",r.target.value)}),e.jsx(l,{message:s.zone,className:"mt-2"})]}),e.jsxs("div",{className:"w-full xl:w-1/3",children:[e.jsx(o,{htmlFor:"session",value:"Seção",className:"mb-2.5 block text-black dark:text-white"}),e.jsx(i,{id:"session",name:"session",value:a.session,className:"w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",placeholder:"Seção",onChange:r=>t("session",r.target.value)}),e.jsx(l,{message:s.session,className:"mt-2"})]})]}),e.jsx(C,{disabled:g,onClick:c,className:"flex w-full mt-3 h-12 justify-center rounded bg-green-600 p-3 font-medium text-gray hover:bg-opacity-90",children:h})]})})]})})})})}export{ae as default};