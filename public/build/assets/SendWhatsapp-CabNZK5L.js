import{r as n,j as e}from"./app-D60QiUUu.js";import{B as c}from"./Breadcrumb-B1Gtaad-.js";import{T as h}from"./TextInput-DsaPuNlw.js";import{D as u}from"./DefaultLayout-DdCne5iX.js";import{D as p}from"./Divider-Q23QxYN1.js";import{B as f}from"./Box-CDNgT4xD.js";import{T as g}from"./Typography-C40SsvxI.js";import"./iconBase-CPrmH8Dm.js";import"./styled-BKJm69b0.js";function B(){const[t,l]=n.useState({name:"",cpf:""}),[i,s]=n.useState(null),o=a=>{console.log(a.target.files),s(a.target.files[0])},d=a=>{a.preventDefault(),console.log(i)},r=[{name:"Lucas",cpf:"04356036204"},{name:"Gabriel",cpf:"12345678901"}];useMemo(()=>[{field:"name",headerName:"Nome da Liderança",width:100,align:"center",headerAlign:"center",sortable:!1,disableClickEventBubbling:!0,headerClassName:"bg-bodydark2 text-white"},{field:"name",headerName:"Equipe",align:"center",width:200,headerAlign:"center",sortable:!1,headerClassName:"bg-bodydark2 text-white",disableClickEventBubbling:!0},{field:"fishermen",headerName:"Pescadores",width:400,align:"center",disableClickEventBubbling:!0,headerClassName:"super-app-theme--header",headerAlign:"center",sortable:!1,renderCell:a=>e.jsx(CellNames,{params:a})},{field:"total_points",headerName:"Pontuação",flex:1,headerAlign:"center",align:"center",headerClassName:"super-app-theme--header",disableClickEventBubbling:!0,sortable:!1}],[]),r.filter(a=>a.cpf===t.cpf);function m(a){l({...t,...a})}return e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsx(c,{pageName:"Enviar Pelo Whatsapp"}),e.jsx(p,{variant:"fullWidth"}),e.jsxs(f,{sx:{marginTop:3,paddingLeft:6,width:500,display:"flex",justifyContent:"center",flexDirection:"column"},children:[e.jsx(g,{variant:"subtitle1",sx:{mb:2},children:"Selecione a Liderança"}),e.jsxs(FormControl,{required:!0,sx:{width:400},children:[e.jsx(InputLabel,{id:"category",children:"Liderança"}),e.jsx(Select,{labelId:"category",id:"select-category",label:"Categoria",value:(t==null?void 0:t.name)!==""?t.name:"",onChange:a=>m(a.target.value),children:r.map(a=>e.jsx(MenuItem,{value:a.name,children:a.name},a.name))})]})]}),t.name!==""?e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:d,children:[e.jsx(h,{type:"file",onChange:o,accept:"image/*"}),e.jsx("input",{type:"submit",value:"Enviar"})]})}):null]})})}export{B as default};
