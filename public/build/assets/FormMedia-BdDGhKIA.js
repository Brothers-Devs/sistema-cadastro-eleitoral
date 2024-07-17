import{r as f,R as pr,j as A}from"./app-CtuG7Gio.js";import{P as p}from"./index-Bxc7BsK1.js";import{b as dr}from"./index-SzE9uqyb.js";import"./iconBase-CPhTjXq0.js";function T(e,r,t,n){function i(o){return o instanceof t?o:new t(function(c){c(o)})}return new(t||(t=Promise))(function(o,c){function s(g){try{l(n.next(g))}catch(b){c(b)}}function m(g){try{l(n.throw(g))}catch(b){c(b)}}function l(g){g.done?o(g.value):i(g.value).then(s,m)}l((n=n.apply(e,r||[])).next())})}function I(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,c;return c={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function s(l){return function(g){return m([l,g])}}function m(l){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,l[0]&&(t=0)),t;)try{if(n=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=r.call(e,t)}catch(g){l=[6,g],i=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Me(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),i,o=[],c;try{for(;(r===void 0||r-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(s){c={error:s}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(c)throw c.error}}return o}function Le(e,r,t){if(t||arguments.length===2)for(var n=0,i=r.length,o;n<i;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}var mr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function H(e,r){var t=gr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function gr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),i=mr.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var vr=[".DS_Store","Thumbs.db"];function yr(e){return T(this,void 0,void 0,function(){return I(this,function(r){return Q(e)&&br(e.dataTransfer)?[2,xr(e.dataTransfer,e.type)]:hr(e)?[2,Dr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,wr(e)]:[2,[]]})})}function br(e){return Q(e)}function hr(e){return Q(e)&&Q(e.target)}function Q(e){return typeof e=="object"&&e!==null}function Dr(e){return ge(e.target.files).map(function(r){return H(r)})}function wr(e){return T(this,void 0,void 0,function(){var r;return I(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return H(n)})]}})})}function xr(e,r){return T(this,void 0,void 0,function(){var t,n;return I(this,function(i){switch(i.label){case 0:return e.items?(t=ge(e.items).filter(function(o){return o.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Ar))]):[3,2];case 1:return n=i.sent(),[2,$e(Je(n))];case 2:return[2,$e(ge(e.files).map(function(o){return H(o)}))]}})})}function $e(e){return e.filter(function(r){return vr.indexOf(r.name)===-1})}function ge(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Ar(e){if(typeof e.webkitGetAsEntry!="function")return Ke(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Ve(r):Ke(e)}function Je(e){return e.reduce(function(r,t){return Le(Le([],Me(r),!1),Me(Array.isArray(t)?Je(t):[t]),!1)},[])}function Ke(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=H(r);return Promise.resolve(t)}function Er(e){return T(this,void 0,void 0,function(){return I(this,function(r){return[2,e.isDirectory?Ve(e):Or(e)]})})}function Ve(e){var r=e.createReader();return new Promise(function(t,n){var i=[];function o(){var c=this;r.readEntries(function(s){return T(c,void 0,void 0,function(){var m,l,g;return I(this,function(b){switch(b.label){case 0:if(s.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return m=b.sent(),t(m),[3,4];case 3:return l=b.sent(),n(l),[3,4];case 4:return[3,6];case 5:g=Promise.all(s.map(Er)),i.push(g),o(),b.label=6;case 6:return[2]}})})},function(s){n(s)})}o()})}function Or(e){return T(this,void 0,void 0,function(){return I(this,function(r){return[2,new Promise(function(t,n){e.file(function(i){var o=H(i,e.fullPath);t(o)},function(i){n(i)})})]})})}var Fr=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return t.some(function(c){var s=c.trim().toLowerCase();return s.charAt(0)==="."?n.toLowerCase().endsWith(s):s.endsWith("/*")?o===s.replace(/\/.*$/,""):i===s})}return!0};function Ne(e){return Cr(e)||_r(e)||Xe(e)||jr()}function jr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _r(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cr(e){if(Array.isArray(e))return ve(e)}function He(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function We(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?He(Object(t),!0).forEach(function(n){Qe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):He(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Qe(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function N(e,r){return Tr(e)||Sr(e,r)||Xe(e,r)||Pr()}function Pr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xe(e,r){if(e){if(typeof e=="string")return ve(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ve(e,r)}}function ve(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Sr(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,o=!1,c,s;try{for(t=t.call(e);!(i=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));i=!0);}catch(m){o=!0,s=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw s}}return n}}function Tr(e){if(Array.isArray(e))return e}var Ir="file-invalid-type",kr="file-too-large",Rr="file-too-small",zr="too-many-files",Mr=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Ir,message:"File type must be ".concat(t)}},Be=function(r){return{code:kr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Ue=function(r){return{code:Rr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Lr={code:zr,message:"Too many files"};function Ze(e,r){var t=e.type==="application/x-moz-file"||Fr(e,r);return[t,t?null:Mr(r)]}function er(e,r,t){if(j(e.size))if(j(r)&&j(t)){if(e.size>t)return[!1,Be(t)];if(e.size<r)return[!1,Ue(r)]}else{if(j(r)&&e.size<r)return[!1,Ue(r)];if(j(t)&&e.size>t)return[!1,Be(t)]}return[!0,null]}function j(e){return e!=null}function $r(e){var r=e.files,t=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,c=e.maxFiles,s=e.validator;return!o&&r.length>1||o&&c>=1&&r.length>c?!1:r.every(function(m){var l=Ze(m,t),g=N(l,1),b=g[0],k=er(m,n,i),R=N(k,1),z=R[0],M=s?s(m):null;return b&&z&&!M})}function X(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function V(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Ge(e){e.preventDefault()}function Kr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Nr(e){return e.indexOf("Edge/")!==-1}function Hr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Kr(e)||Nr(e)}function E(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var i=arguments.length,o=new Array(i>1?i-1:0),c=1;c<i;c++)o[c-1]=arguments[c];return r.some(function(s){return!X(n)&&s&&s.apply(void 0,[n].concat(o)),X(n)})}}function Wr(){return"showOpenFilePicker"in window}function Br(e){if(j(e)){var r=Object.entries(e).filter(function(t){var n=N(t,2),i=n[0],o=n[1],c=!0;return rr(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(o)||!o.every(tr))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(t,n){var i=N(n,2),o=i[0],c=i[1];return We(We({},t),{},Qe({},o,c))},{});return[{description:"Files",accept:r}]}return e}function Ur(e){if(j(e))return Object.entries(e).reduce(function(r,t){var n=N(t,2),i=n[0],o=n[1];return[].concat(Ne(r),[i],Ne(o))},[]).filter(function(r){return rr(r)||tr(r)}).join(",")}function Gr(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Yr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function rr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function tr(e){return/^.*\.[\w]+$/.test(e)}var qr=["children"],Jr=["open"],Vr=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Qr=["refKey","onChange","onClick"];function Xr(e){return rt(e)||et(e)||nr(e)||Zr()}function Zr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function et(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rt(e){if(Array.isArray(e))return ye(e)}function me(e,r){return ot(e)||nt(e,r)||nr(e,r)||tt()}function tt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nr(e,r){if(e){if(typeof e=="string")return ye(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ye(e,r)}}function ye(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function nt(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,o=!1,c,s;try{for(t=t.call(e);!(i=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));i=!0);}catch(m){o=!0,s=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw s}}return n}}function ot(e){if(Array.isArray(e))return e}function Ye(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ye(Object(t),!0).forEach(function(n){be(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ye(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function be(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Z(e,r){if(e==null)return{};var t=it(e,r),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function it(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var De=f.forwardRef(function(e,r){var t=e.children,n=Z(e,qr),i=ir(n),o=i.open,c=Z(i,Jr);return f.useImperativeHandle(r,function(){return{open:o}},[o]),pr.createElement(f.Fragment,null,t(d(d({},c),{},{open:o})))});De.displayName="Dropzone";var or={disabled:!1,getFilesFromEvent:yr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};De.defaultProps=or;De.propTypes={children:p.func,accept:p.objectOf(p.arrayOf(p.string)),multiple:p.bool,preventDropOnDocument:p.bool,noClick:p.bool,noKeyboard:p.bool,noDrag:p.bool,noDragEventsBubbling:p.bool,minSize:p.number,maxSize:p.number,maxFiles:p.number,disabled:p.bool,getFilesFromEvent:p.func,onFileDialogCancel:p.func,onFileDialogOpen:p.func,useFsAccessApi:p.bool,autoFocus:p.bool,onDragEnter:p.func,onDragLeave:p.func,onDragOver:p.func,onDrop:p.func,onDropAccepted:p.func,onDropRejected:p.func,onError:p.func,validator:p.func};var he={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function ir(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=d(d({},or),e),t=r.accept,n=r.disabled,i=r.getFilesFromEvent,o=r.maxSize,c=r.minSize,s=r.multiple,m=r.maxFiles,l=r.onDragEnter,g=r.onDragLeave,b=r.onDragOver,k=r.onDrop,R=r.onDropAccepted,z=r.onDropRejected,M=r.onFileDialogCancel,ee=r.onFileDialogOpen,we=r.useFsAccessApi,xe=r.autoFocus,re=r.preventDropOnDocument,Ae=r.noClick,te=r.noKeyboard,Ee=r.noDrag,O=r.noDragEventsBubbling,ne=r.onError,L=r.validator,$=f.useMemo(function(){return Ur(t)},[t]),Oe=f.useMemo(function(){return Br(t)},[t]),oe=f.useMemo(function(){return typeof ee=="function"?ee:qe},[ee]),W=f.useMemo(function(){return typeof M=="function"?M:qe},[M]),h=f.useRef(null),x=f.useRef(null),ar=f.useReducer(at,he),Fe=me(ar,2),ie=Fe[0],D=Fe[1],ur=ie.isFocused,je=ie.isFileDialogActive,B=f.useRef(typeof window<"u"&&window.isSecureContext&&we&&Wr()),_e=function(){!B.current&&je&&setTimeout(function(){if(x.current){var u=x.current.files;u.length||(D({type:"closeDialog"}),W())}},300)};f.useEffect(function(){return window.addEventListener("focus",_e,!1),function(){window.removeEventListener("focus",_e,!1)}},[x,je,W,B]);var _=f.useRef([]),Ce=function(u){h.current&&h.current.contains(u.target)||(u.preventDefault(),_.current=[])};f.useEffect(function(){return re&&(document.addEventListener("dragover",Ge,!1),document.addEventListener("drop",Ce,!1)),function(){re&&(document.removeEventListener("dragover",Ge),document.removeEventListener("drop",Ce))}},[h,re]),f.useEffect(function(){return!n&&xe&&h.current&&h.current.focus(),function(){}},[h,xe,n]);var F=f.useCallback(function(a){ne?ne(a):console.error(a)},[ne]),Pe=f.useCallback(function(a){a.preventDefault(),a.persist(),q(a),_.current=[].concat(Xr(_.current),[a.target]),V(a)&&Promise.resolve(i(a)).then(function(u){if(!(X(a)&&!O)){var v=u.length,y=v>0&&$r({files:u,accept:$,minSize:c,maxSize:o,multiple:s,maxFiles:m,validator:L}),w=v>0&&!y;D({isDragAccept:y,isDragReject:w,isDragActive:!0,type:"setDraggedFiles"}),l&&l(a)}}).catch(function(u){return F(u)})},[i,l,F,O,$,c,o,s,m,L]),Se=f.useCallback(function(a){a.preventDefault(),a.persist(),q(a);var u=V(a);if(u&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return u&&b&&b(a),!1},[b,O]),Te=f.useCallback(function(a){a.preventDefault(),a.persist(),q(a);var u=_.current.filter(function(y){return h.current&&h.current.contains(y)}),v=u.indexOf(a.target);v!==-1&&u.splice(v,1),_.current=u,!(u.length>0)&&(D({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),V(a)&&g&&g(a))},[h,g,O]),U=f.useCallback(function(a,u){var v=[],y=[];a.forEach(function(w){var K=Ze(w,$),S=me(K,2),ue=S[0],ce=S[1],le=er(w,c,o),J=me(le,2),se=J[0],fe=J[1],pe=L?L(w):null;if(ue&&se&&!pe)v.push(w);else{var de=[ce,fe];pe&&(de=de.concat(pe)),y.push({file:w,errors:de.filter(function(fr){return fr})})}}),(!s&&v.length>1||s&&m>=1&&v.length>m)&&(v.forEach(function(w){y.push({file:w,errors:[Lr]})}),v.splice(0)),D({acceptedFiles:v,fileRejections:y,type:"setFiles"}),k&&k(v,y,u),y.length>0&&z&&z(y,u),v.length>0&&R&&R(v,u)},[D,s,$,c,o,m,k,R,z,L]),G=f.useCallback(function(a){a.preventDefault(),a.persist(),q(a),_.current=[],V(a)&&Promise.resolve(i(a)).then(function(u){X(a)&&!O||U(u,a)}).catch(function(u){return F(u)}),D({type:"reset"})},[i,U,F,O]),C=f.useCallback(function(){if(B.current){D({type:"openDialog"}),oe();var a={multiple:s,types:Oe};window.showOpenFilePicker(a).then(function(u){return i(u)}).then(function(u){U(u,null),D({type:"closeDialog"})}).catch(function(u){Gr(u)?(W(u),D({type:"closeDialog"})):Yr(u)?(B.current=!1,x.current?(x.current.value=null,x.current.click()):F(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):F(u)});return}x.current&&(D({type:"openDialog"}),oe(),x.current.value=null,x.current.click())},[D,oe,W,we,U,F,Oe,s]),Ie=f.useCallback(function(a){!h.current||!h.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),C())},[h,C]),ke=f.useCallback(function(){D({type:"focus"})},[]),Re=f.useCallback(function(){D({type:"blur"})},[]),ze=f.useCallback(function(){Ae||(Hr()?setTimeout(C,0):C())},[Ae,C]),P=function(u){return n?null:u},ae=function(u){return te?null:P(u)},Y=function(u){return Ee?null:P(u)},q=function(u){O&&u.stopPropagation()},cr=f.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=a.refKey,v=u===void 0?"ref":u,y=a.role,w=a.onKeyDown,K=a.onFocus,S=a.onBlur,ue=a.onClick,ce=a.onDragEnter,le=a.onDragOver,J=a.onDragLeave,se=a.onDrop,fe=Z(a,Vr);return d(d(be({onKeyDown:ae(E(w,Ie)),onFocus:ae(E(K,ke)),onBlur:ae(E(S,Re)),onClick:P(E(ue,ze)),onDragEnter:Y(E(ce,Pe)),onDragOver:Y(E(le,Se)),onDragLeave:Y(E(J,Te)),onDrop:Y(E(se,G)),role:typeof y=="string"&&y!==""?y:"presentation"},v,h),!n&&!te?{tabIndex:0}:{}),fe)}},[h,Ie,ke,Re,ze,Pe,Se,Te,G,te,Ee,n]),lr=f.useCallback(function(a){a.stopPropagation()},[]),sr=f.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=a.refKey,v=u===void 0?"ref":u,y=a.onChange,w=a.onClick,K=Z(a,Qr),S=be({accept:$,multiple:s,type:"file",style:{display:"none"},onChange:P(E(y,G)),onClick:P(E(w,lr)),tabIndex:-1},v,x);return d(d({},S),K)}},[x,t,s,G,n]);return d(d({},ie),{},{isFocused:ur&&!n,getRootProps:cr,getInputProps:sr,rootRef:h,inputRef:x,open:P(C)})}function at(e,r){switch(r.type){case"focus":return d(d({},e),{},{isFocused:!0});case"blur":return d(d({},e),{},{isFocused:!1});case"openDialog":return d(d({},he),{},{isFileDialogActive:!0});case"closeDialog":return d(d({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return d(d({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return d(d({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return d({},he);default:return e}}function qe(){}const ft=({setFile:e})=>{const r=f.useCallback(n=>{e(n[0])},[]),t=ir({onDrop:r,accept:{"image/*":[".png",".jpeg",".jpg"],"video/*":[".mp4"]}});return A.jsxs("div",{...t.getRootProps(),className:`w-full h-45 bg-slate-300 rounded-lg border-dashed border-2 hover:border-slate-700 ${t.isDragActive?"border-blue-500":"border-slate-400"}`,children:[A.jsx("label",{htmlFor:"dropzone-file",className:"cursor-pointer w-full h-full",children:A.jsxs("div",{className:"flex flex-col items-center justify-center pt-5 pb-6 w-full h-full",children:[A.jsx(dr,{className:`w-10 h-10 mb-3 ${t.isDragActive?"text-blue-500":"text-slate-400"}`}),t.isDragActive?A.jsx("p",{className:"font-bold text-blue-400",children:"Soltar para adicionar"}):A.jsxs(A.Fragment,{children:[A.jsxs("p",{className:"mb-2 text-lg text-slate-500",children:[A.jsx("span",{className:"font-bold",children:"Clique para enviar"})," ou arraste até aqui."]}),A.jsxs("p",{className:"text-slate-500 text-sm",children:["Mídia |"," ",A.jsx("span",{className:"font-bold text-red-800",children:"imagem ou vídeo "})," "]})]})]})}),A.jsx("input",{...t.getInputProps(),className:"hidden"})]})};export{ft as FormMedia};
