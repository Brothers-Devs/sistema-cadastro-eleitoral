import{i as T,j as e,r,y as C}from"./app-CL987qmN.js";import{B as y}from"./Breadcrumb-DuwhxYvp.js";import{r as _}from"./createSvgIcon-DVuNn9Dw.js";import{D as O}from"./DefaultLayout-DfoIOMHQ.js";import{m as D,n as u}from"./notiflix-aio-3.2.7.min-nRW_lhEj.js";import{HasFile as M}from"./HasFile-CS5sVkHT.js";import{FormMedia as N}from"./FormMedia-DEYRMq3C.js";import{D as I}from"./Divider-D0naBTjD.js";import{B as b}from"./Box-BC_-swm9.js";import{T as R}from"./Typography-CS-4oixB.js";import{F,A as L,T as W}from"./Autocomplete-DpW7c9Y-.js";import{I as B}from"./createSvgIcon-Cr4NebFk.js";import{G as P}from"./Grid-ChJDMGTZ.js";import"./generateUtilityClasses-D-vTQyeB.js";import"./Modal-GjVj8byN.js";import"./Popper-DxCVZcR-.js";import"./index-BxDMVxN5.js";import"./iconBase-BmOmZMvw.js";import"./logo-candidato-SK3Uj6G_.js";import"./InputLabel-CbNicoNl.js";import"./PrimaryButton-C20CcyWw.js";import"./Tooltip-DGQi69LY.js";import"./CircularProgress-BJy7z23L.js";import"./index-CzpH5JVq.js";var p={},w=T;Object.defineProperty(p,"__esModule",{value:!0});var g=p.default=void 0,q=w(_()),k=e;g=p.default=(0,q.default)((0,k.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");const G=["999.999.999-99"];function de({leaders:n}){const[o,c]=r.useState({id:"",name:"",cpf:"",created_at:"",updated_at:"",nameWithCpf:""}),[d,m]=r.useState(""),[s,f]=r.useState(null),[h,i]=r.useState(!1),x=r.useCallback(()=>{f(null),m("")},[s]),S=()=>{c({}),m(""),x()},j=t=>{t.preventDefault(),i(!0);const a=setTimeout(()=>{u.Notify.info("Aguarde um momento, sua mensagem está sendo enviada!")},0),A={leader_id:o==null?void 0:o.id,media_type:s.type.split("/")[0],text_message:d,media:s};C.post("/messages/send-media",A,{onSuccess:l=>{console.log(l),i(!1),clearTimeout(a),u.Notify.success("Mensagem enviada com sucesso!"),console.log("Sucesso!")},onError:l=>{console.log(l),i(!1),clearTimeout(a),u.Notify.failure("Ocorreu um erro ao enviar sua mensagem!"),console.log("Ocorreu um Erro!")},onFinish:()=>{clearTimeout(a),i(!1),console.log("Promisse finalizada!")}})},E=n==null?void 0:n.map(t=>({...t,nameWithCpf:`${t.name} (${D(t.cpf,G)})`}));function v(t){c({...t})}return e.jsxs(O,{children:[e.jsx(y,{pageName:"Enviar Pelo Whatsapp"}),e.jsx(I,{variant:"fullWidth"}),e.jsxs("div",{className:"mt-5 h-full w-full bg-white p-8 shadow-6",children:[e.jsxs(b,{sx:{marginTop:3,width:500,display:"flex",justifyContent:"center",flexDirection:"column"},children:[e.jsx(R,{variant:"subtitle1",sx:{mb:2},children:"Selecione a Liderança*"}),e.jsxs(F,{required:!0,sx:{width:400},children:[e.jsx(L,{clearIcon:e.jsx(B,{onClick:S,children:e.jsx(g,{})}),value:o,onChange:(t,a)=>{v(a)},id:"leader",options:E,renderInput:t=>e.jsx(W,{...t}),getOptionLabel:t=>t.name?t.nameWithCpf:""}),e.jsx("p",{className:"mt-3 text-orange-600 text-xs font-semibold",children:"OBS: SELECIONE UMA LIDERANÇA OU SE DESEJA ENVIAR A MENSAGEM PARA TODOS OS ELEITORES CADASTRADO NO SISTEMA ."})]})]}),o.name?e.jsx(P,{item:!0,xs:10,sm:8,md:6,sx:{marginTop:3,maxWidth:500,p:5,display:"flex",justifyContent:"center",flexDirection:"column",border:"2px solid #7f7f7f"},children:s?e.jsx(M,{file:s,removeFile:x,textMessage:d,setTextMessage:m,handleSubmit:j,leaderSelected:o,sendMessage:h}):e.jsx(N,{setFile:f})}):null]})]})}export{de as default};
