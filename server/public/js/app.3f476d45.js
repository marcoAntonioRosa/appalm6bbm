(function(e){function a(a){for(var s,r,n=a[0],l=a[1],c=a[2],p=0,d=[];p<n.length;p++)r=n[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(a);while(d.length)d.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,a=0;a<i.length;a++){for(var t=i[a],s=!0,r=1;r<t.length;r++){var n=t[r];0!==o[n]&&(s=!1)}s&&(i.splice(a--,1),e=l(l.s=t[0]))}return e}var s={},r={app:0},o={app:0},i=[];function n(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-051cbc8c":"157b063d","chunk-08f1f16a":"e9c9bac4","chunk-06a569c3":"785d1ffa","chunk-6728c530":"f07a9a33","chunk-69a096bd":"494edf24","chunk-7cc8240d":"f1a4e31b","chunk-84bcf12e":"b93bc021","chunk-0d4f7ba2":"9df1aae3","chunk-193def59":"28e35afc","chunk-2b4c879c":"c691631f","chunk-45cfdab9":"64633073","chunk-562a53c7":"daf76084","chunk-66277367":"91382237","chunk-9ff6bce2":"72654480","chunk-ad8a11a0":"669a8c2f","chunk-d6bee376":"34ddc6d9","chunk-c32819f0":"f87a88cc"}[e]+".js"}function l(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var a=[],t={"chunk-051cbc8c":1,"chunk-08f1f16a":1,"chunk-06a569c3":1,"chunk-6728c530":1,"chunk-69a096bd":1,"chunk-7cc8240d":1,"chunk-84bcf12e":1,"chunk-0d4f7ba2":1,"chunk-193def59":1,"chunk-2b4c879c":1,"chunk-45cfdab9":1,"chunk-562a53c7":1,"chunk-66277367":1,"chunk-9ff6bce2":1,"chunk-ad8a11a0":1,"chunk-d6bee376":1,"chunk-c32819f0":1};r[e]?a.push(r[e]):0!==r[e]&&t[e]&&a.push(r[e]=new Promise((function(a,t){for(var s="css/"+({}[e]||e)+"."+{"chunk-051cbc8c":"8f4d8793","chunk-08f1f16a":"da897dbd","chunk-06a569c3":"97be5420","chunk-6728c530":"ce9e4fb0","chunk-69a096bd":"4c590514","chunk-7cc8240d":"5bd385cf","chunk-84bcf12e":"ba0b0dc0","chunk-0d4f7ba2":"9e7b86da","chunk-193def59":"b88d1869","chunk-2b4c879c":"9e7b86da","chunk-45cfdab9":"9e7b86da","chunk-562a53c7":"9e7b86da","chunk-66277367":"b88d1869","chunk-9ff6bce2":"e4d4a6ac","chunk-ad8a11a0":"9e7b86da","chunk-d6bee376":"9e7b86da","chunk-c32819f0":"39d2869c"}[e]+".css",o=l.p+s,i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var c=i[n],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===s||p===o))return a()}var d=document.getElementsByTagName("style");for(n=0;n<d.length;n++){c=d[n],p=c.getAttribute("data-href");if(p===s||p===o)return a()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=a,u.onerror=function(a){var s=a&&a.target&&a.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete r[e],u.parentNode.removeChild(u),t(i)},u.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(u)})).then((function(){r[e]=0})));var s=o[e];if(0!==s)if(s)a.push(s[2]);else{var i=new Promise((function(a,t){s=o[e]=[a,t]}));a.push(s[2]=i);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,l.nc&&p.setAttribute("nonce",l.nc),p.src=n(e);var d=new Error;c=function(a){p.onerror=p.onload=null,clearTimeout(u);var t=o[e];if(0!==t){if(t){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",d.name="ChunkLoadError",d.type=s,d.request=r,t[1](d)}o[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:p})}),12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(a)},l.m=e,l.c=s,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)l.d(t,s,function(a){return e[a]}.bind(null,s));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var u=p;i.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},1196:function(e,a,t){"use strict";var s=t("6b06"),r=t.n(s);r.a},1782:function(e,a,t){},"1a5d":function(e,a,t){var s={"./BaixaPatrimonio.vue":["7384","chunk-7cc8240d","chunk-66277367"],"./Cadastros.vue":["701f","chunk-08f1f16a","chunk-06a569c3"],"./Dashboard.vue":["7277","chunk-7cc8240d","chunk-08f1f16a","chunk-84bcf12e"],"./GrupoPatrimonio.vue":["8062","chunk-7cc8240d","chunk-ad8a11a0"],"./Hierarquia.vue":["1239","chunk-7cc8240d","chunk-562a53c7"],"./Login.vue":["a55b","chunk-c32819f0"],"./MovimentacoesPatrimonio.vue":["945b","chunk-7cc8240d","chunk-193def59"],"./Obms.vue":["5b65","chunk-7cc8240d","chunk-2b4c879c"],"./Patrimonio.vue":["b87f","chunk-7cc8240d","chunk-9ff6bce2"],"./Pessoas.vue":["a40e","chunk-7cc8240d","chunk-d6bee376"],"./Setores.vue":["e468","chunk-7cc8240d","chunk-45cfdab9"],"./SituacaoPatrimonio.vue":["062c","chunk-7cc8240d","chunk-0d4f7ba2"]};function r(e){if(!t.o(s,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=s[e],r=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(s)},r.id="1a5d",e.exports=r},2609:function(e,a,t){"use strict";t.r(a),a["default"]={drawer:null,color:"success",image:""}},"2a74":function(e,a,t){"use strict";t.r(a);const s=t("c653"),r={};s.keys().forEach(e=>{if("./index.js"===e)return;const a=e.replace(/(\.\/|\.js)/g,""),[t,o]=a.split("/");r[t]||(r[t]={namespaced:!0}),r[t][o]=s(e).default}),a["default"]=r},"4d79":function(e,a,t){"use strict";var s=t("8860"),r=t.n(s);r.a},"56d7":function(e,a,t){"use strict";t.r(a);var s=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",["Login"!=this.$route.name?t("core-app-bar"):e._e(),"Login"!=this.$route.name?t("core-drawer"):e._e(),t("core-view")],1)},o=[],i={components:{CoreDrawer:()=>t.e("chunk-051cbc8c").then(t.bind(null,"41c0")),CoreAppBar:()=>t.e("chunk-69a096bd").then(t.bind(null,"dc21")),CoreView:()=>t.e("chunk-6728c530").then(t.bind(null,"9306"))}},n=i,l=t("2877"),c=t("6544"),p=t.n(c),d=t("7496"),u=Object(l["a"])(n,r,o,!1,null,null,null),m=u.exports;p()(u,{VApp:d["a"]});var h=t("8c4f"),v=t("58ca"),f=t("bc3a"),g=t.n(f),b=[{path:"",name:"dashboard",view:"Dashboard"},{path:"/grupoPatrimonio",name:"Grupos Patrimônio",view:"GrupoPatrimonio"},{path:"/hierarquia",name:"Hierarquias",view:"Hierarquia"},{path:"/obms",name:"OBM",view:"Obms"},{path:"/pessoas",name:"Pessoas",view:"Pessoas"},{path:"/setores",name:"Setores",view:"Setores"},{path:"/situacaoPatrimonio",name:"Situações Patrimônio",view:"SituacaoPatrimonio"},{path:"/patrimonio",name:"Patrimônio",view:"Patrimonio"},{path:"/patrimonioMovimentacoes",name:"Movimentação Patrimônio",view:"MovimentacoesPatrimonio"},{path:"/patrimonioBaixas",name:"Baixa Patrimônio",view:"BaixaPatrimonio"},{path:"/login",name:"Login",view:"Login",meta:{requiresAuth:!0}}];function x(e,a,s){return{name:s||a,path:e,component:e=>t("1a5d")(`./${a}.vue`).then(e)}}s["a"].use(h["a"]);const k=new h["a"]({mode:"history",routes:b.map(e=>x(e.path,e.view,e.name,e.meta)).concat([{path:"*",redirect:"/"}]),scrollBehavior(e,a,t){return t||(e.hash?{selector:e.hash}:{x:0,y:0})}});async function y(){if(null===localStorage.getItem("tokenlogin"))return!0;{var e={token:localStorage.getItem("tokenlogin")};let a=await g.a.post("http://localhost:3000/api/login/validToken",e);return a}}k.beforeEach((e,a,t)=>{y().then(a=>{var s=a.data;if("/login"!=e.path){if(!s)return localStorage.getItem("tokenlogin")&&localStorage.removeItem("tokenlogin"),t({path:"/login"});if(s&&"/"==e.path&&localStorage.getItem("route")){var r=localStorage.getItem("route");return localStorage.removeItem("route"),t({path:r})}}if(s&&"/login"==e.path)return t({path:"/"});localStorage.setItem("route",e.path),t()})}),s["a"].use(v["a"]);var w=k,C=t("2f62"),_={},S={},$=t("2a74"),O={},P={};s["a"].use(C["a"]);const E=new C["a"].Store({actions:_,getters:S,modules:$["default"],mutations:O,state:P});var A=E;s["a"].prototype.$http=g.a;t("4633");s["a"].use(t("84b5"));var V=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"v-offset",class:e.classes,style:e.styles},[e._t("default")],2)},M=[],N={name:"HelperOffset",props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes(){return{"v-offset--full-width":this.fullWidth}},styles(){return{top:`-${this.offset}px`,marginBottom:`-${this.offset}px`}}}},B=N,D=(t("1196"),Object(l["a"])(B,V,M,!1,null,null,null)),I=D.exports,j=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-card",e._g(e._b({style:e.styles},"v-card",e.$attrs,!1),e.$listeners),[e.hasOffset?t("helper-offset",{attrs:{inline:e.inline,"full-width":e.fullWidth,offset:e.offset}},[e.$slots.offset?e._t("offset"):t("v-card",{staticClass:"v-card--material__header d-flex align-center",attrs:{color:e.color,elevation:e.elevation,dark:"","min-height":"80"}},[e.title||e.text?t("div",{staticClass:"px-3"},[t("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:e._s(e.title)}}),t("p",{staticClass:"category font-weight-thin mb-0",domProps:{textContent:e._s(e.text)}})]):e._t("header")],2)],2):e._e(),t("v-card-text",[e._t("default")],2),e.$slots.actions?t("v-divider",{staticClass:"mx-3"}):e._e(),e.$slots.actions?t("v-card-actions",[e._t("actions")],2):e._e()],1)},q=[],T={name:"MaterialCard",inheritAttrs:!1,props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0}},computed:{hasOffset(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles(){return this.hasOffset?{marginBottom:`${this.offset}px`,marginTop:`${2*this.offset}px`}:null}}},z=T,H=t("b0af"),L=t("99d9"),F=t("ce7e"),R=Object(l["a"])(z,j,q,!1,null,null,null),U=R.exports;p()(R,{VCard:H["a"],VCardActions:L["a"],VCardText:L["b"],VDivider:F["a"]});var G=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("material-card",e._g(e._b({staticClass:"v-card--material-chart",scopedSlots:e._u([{key:"header",fn:function(){return[t("chartist",{staticStyle:{"max-height":"150px"},attrs:{data:e.data,"event-handlers":e.eventHandlers,options:e.options,ratio:e.ratio,"responsive-options":e.responsiveOptions,type:e.type}})]},proxy:!0}])},"material-card",e.$attrs,!1),e.$listeners),[e._t("default"),e._t("actions",null,{slot:"actions"})],2)},W=[],J={name:"MaterialChartCard",inheritAttrs:!1,props:{data:{type:Object,default:()=>({})},eventHandlers:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:()=>[]},type:{type:String,required:!0,validator:e=>["Bar","Line","Pie"].includes(e)}}},K=J,Q=(t("e536"),Object(l["a"])(K,G,W,!1,null,null,null)),X=Q.exports,Y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-alert",e._g(e._b({attrs:{elevation:e.elevation,value:e.value,dark:e.dark}},"v-alert",e.$attrs,!1),e.$listeners),[e._t("default")],2)},Z=[],ee={name:"MaterialNotification",inheritAttrs:!1,props:{dark:{type:Boolean,default:!0},elevation:{type:[Number,String],default:6},value:{type:Boolean,default:!0}}},ae=ee,te=t("0798"),se=Object(l["a"])(ae,Y,Z,!1,null,null,null),re=se.exports;p()(se,{VAlert:te["a"]});var oe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("material-card",e._g(e._b({staticClass:"v-card--material-stats"},"material-card",e.$attrs,!1),e.$listeners),[t("v-card",{staticClass:"pa-4",class:"elevation-"+e.elevation,attrs:{slot:"offset",color:e.color,dark:""},slot:"offset"},[t("v-icon",{attrs:{size:"40"}},[e._v("\n      "+e._s(e.icon)+"\n    ")])],1),t("div",{staticClass:"text-right"},[t("p",{staticClass:"body-2 grey--text font-weight-light mb-0",domProps:{textContent:e._s(e.title)}}),t("h3",{staticClass:"headline font-weight-light text--primary"},[e._v("\n      "+e._s(e.value)+" "),t("small",[e._v(e._s(e.smallValue))])])]),t("v-divider"),t("template",{slot:"actions"},[t("v-icon",{staticClass:"mx-2",attrs:{color:e.subIconColor,size:"20"}},[e._v("\n      "+e._s(e.subIcon)+"\n    ")]),t("span",{staticClass:"caption font-weight-light",class:e.subTextColor,domProps:{textContent:e._s(e.subText)}})],1)],2)},ie=[],ne={name:"MaterialStatsCard",inheritAttrs:!1,props:{...U.props,icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}}},le=ne,ce=(t("4d79"),t("132d")),pe=Object(l["a"])(le,oe,ie,!1,null,null,null),de=pe.exports;p()(pe,{VCard:H["a"],VDivider:F["a"],VIcon:ce["a"]});var ue=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-snackbar",{staticClass:"snackbar",attrs:{bottom:"bottom"===e.y,color:e.color,left:"left"===e.x,"multi-line":"multi-line"===e.mode,right:"right"===e.x,timeout:e.timeout,top:"top"===e.y,vertical:"vertical"===e.mode},model:{value:e.snackbar,callback:function(a){e.snackbar=a},expression:"snackbar"}},[e._v("\n        "+e._s(e.textoSnackbar)+"\n        "),t("v-btn",{attrs:{dark:"",text:"",icon:""},on:{click:function(a){e.snackbar=!1}}},[t("v-icon",{staticClass:"mr-2",on:{click:function(a){return e.$emit("closeSnackbar")}}},[e._v("mdi-close")])],1)],1)},me=[],he={props:["textoSnackbar","color","snackbar"],data:()=>({mode:"",timeout:6e3,x:null,y:"top"}),watch:{snackbar(e){}}},ve=he,fe=t("8336"),ge=t("2db4"),be=Object(l["a"])(ve,ue,me,!1,null,null,null),xe=be.exports;p()(be,{VBtn:fe["a"],VIcon:ce["a"],VSnackbar:ge["a"]});var ke=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-dialog",{attrs:{"max-width":"1000px"},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"headline"},[e._v("Nova Pessoa")])]),t("v-card-text",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[t("v-text-field",{attrs:{rules:[function(e){return!!e||"Obrigatório prencher o nome!"}],label:"Nome",outlined:""},model:{value:e.pessoa.nome,callback:function(a){e.$set(e.pessoa,"nome",a)},expression:"pessoa.nome"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[t("v-text-field",{attrs:{rules:[function(e){return!!e||"Obrigatório prencher o email!"}],label:"E-mail",outlined:""},model:{value:e.pessoa.email,callback:function(a){e.$set(e.pessoa,"email",a)},expression:"pessoa.email"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:["######-#","######-#-##"],expression:"['######-#', '######-#-##']"}],attrs:{rules:[function(e){return!!e||"Obrigatório prencher o matrícula!"}],label:"Matrícula",outlined:""},model:{value:e.pessoa.matricula,callback:function(a){e.$set(e.pessoa,"matricula",a)},expression:"pessoa.matricula"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:["##/##/####"],expression:"['##/##/####']"}],attrs:{rules:[function(e){return!!e||"Obrigatório prencher a data nascimento!"}],label:"Data Nascimento",outlined:""},model:{value:e.pessoa.dataNascimento,callback:function(a){e.$set(e.pessoa,"dataNascimento",a)},expression:"pessoa.dataNascimento"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-select",{attrs:{items:e.sexos,rules:[function(e){return!!e||"Obrigatório prencher o sexo!"}],label:"Sexo",outlined:""},model:{value:e.pessoa.sexo,callback:function(a){e.$set(e.pessoa,"sexo",a)},expression:"pessoa.sexo"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-select",{attrs:{items:e.hierarquias,"item-text":"hierarquia","item-value":"id",rules:[function(e){return!!e||"Obrigatório informar Posto/Graduação!"}],label:"Hierarquia",outlined:""},model:{value:e.pessoa.idHierarquia,callback:function(a){e.$set(e.pessoa,"idHierarquia",a)},expression:"pessoa.idHierarquia"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-select",{attrs:{items:e.obms,"item-text":"abreviacao","item-value":"id",rules:[function(e){return!!e||"Obrigatório prencher a OBM!"}],label:"OBM",outlined:""},model:{value:e.pessoa.idBatalhao,callback:function(a){e.$set(e.pessoa,"idBatalhao",a)},expression:"pessoa.idBatalhao"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-select",{attrs:{items:e.setores,"item-text":"setor","item-value":"id",rules:[function(e){return!!e||"Obrigatório prencher o setor!"}],label:"Setor",outlined:""},model:{value:e.pessoa.idSetor,callback:function(a){e.$set(e.pessoa,"idSetor",a)},expression:"pessoa.idSetor"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-select",{attrs:{items:e.tipoPessoas,"item-text":"tipo","item-value":"value",rules:[function(e){return!!e||"Obrigatório prencher o tipo do cadastro!"}],label:"Tipo usuário",outlined:""},model:{value:e.pessoa.tipoPessoa,callback:function(a){e.$set(e.pessoa,"tipoPessoa",a)},expression:"pessoa.tipoPessoa"}})],1)],1)],1)],1),t("v-card-actions",[t("div",{staticClass:"flex-grow-1"}),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Salvar")])],1)],1)],1)},ye=[],we={data:()=>({pessoa:{nome:"",email:"",matricula:"",dataNascimento:"",dataIngresso:"",sexo:"",idHierarquia:0,idBatalhao:0,idSetor:0,tipoPessoa:!1},tipoPessoas:[{tipo:"Administrador",value:"true"},{tipo:"Normal",value:"false"}],sexos:["FEMININO","MASCULINO"]}),computed:{dialog:{get(){return this.dialogNovo},set(){this.$emit("close",!1)}}},props:{dialogNovo:{type:Boolean},hierarquias:{type:Array},obms:{type:Array},setores:{type:Array}},methods:{close(){this.$emit("close",!0)},isValidEmail(){var e=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;return e.test(this.pessoa.email)},isValidDate(e){var a=[];return""!=e&&(a=e.split("/"),parseInt(a[0])>0&&parseInt(a[0])<31&&parseInt(a[1])>0&&parseInt(a[1])<12&&parseInt(a[2])>1900&&parseInt(a[2])<3e3)},save(){this.validaCampos()&&this.axios.post("http://localhost:3000/api/pessoa",this.pessoa).then(e=>{e.data.id&&this.close(),e.data.id||this.close()}),this.validaCampos()||this.close()},validaCampos(){return""!=this.pessoa.nome&&this.isValidEmail()&&""!=this.pessoa.matricula&&""!=this.pessoa.sexo&&""!=this.pessoa.tipoSanguineo&&null!=this.pessoa.idHierarquia&&null!=this.pessoa.idBatalhao&&null!=this.pessoa.idSetor}}},Ce=we,_e=t("62ad"),Se=t("a523"),$e=t("169a"),Oe=t("0fd9"),Pe=t("b974"),Ee=t("8654"),Ae=Object(l["a"])(Ce,ke,ye,!1,null,null,null),Ve=Ae.exports;p()(Ae,{VBtn:fe["a"],VCard:H["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VCol:_e["a"],VContainer:Se["a"],VDialog:$e["a"],VRow:Oe["a"],VSelect:Pe["a"],VTextField:Ee["a"]});var Me=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-dialog",{attrs:{"max-width":"1000px"},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"headline"},[e._v("Editar Pessoa")])]),t("v-card-text",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[t("v-text-field",{attrs:{rules:[function(e){return!!e||"Obrigatório prencher o nome!"}],label:"Nome",outlined:""},model:{value:e.pessoa.nome,callback:function(a){e.$set(e.pessoa,"nome",a)},expression:"pessoa.nome"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[t("v-text-field",{attrs:{rules:[function(e){return!!e||"Obrigatório prencher o email!"}],label:"E-mail",outlined:""},model:{value:e.pessoa.email,callback:function(a){e.$set(e.pessoa,"email",a)},expression:"pessoa.email"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:["######-#","######-#-##"],expression:"['######-#', '######-#-##']"}],attrs:{rules:[function(e){return!!e||"Obrigatório prencher o matrícula!"}],label:"Matrícula",outlined:""},model:{value:e.pessoa.matricula,callback:function(a){e.$set(e.pessoa,"matricula",a)},expression:"pessoa.matricula"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:["##/##/####"],expression:"['##/##/####']"}],attrs:{rules:[function(e){return!!e||"Obrigatório prencher a data nascimento!"}],label:"Data Nascimento",outlined:""},model:{value:e.pessoa.dataNascimento,callback:function(a){e.$set(e.pessoa,"dataNascimento",a)},expression:"pessoa.dataNascimento"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-select",{attrs:{items:e.sexos,rules:[function(e){return!!e||"Obrigatório prencher o sexo!"}],label:"Sexo",outlined:""},model:{value:e.pessoa.sexo,callback:function(a){e.$set(e.pessoa,"sexo",a)},expression:"pessoa.sexo"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-select",{attrs:{items:e.hierarquias,"item-text":"hierarquia","item-value":"id",rules:[function(e){return!!e||"Obrigatório informar Posto/Graduação!"}],label:"Hierarquia",outlined:""},model:{value:e.pessoa.idHierarquia,callback:function(a){e.$set(e.pessoa,"idHierarquia",a)},expression:"pessoa.idHierarquia"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-select",{attrs:{items:e.obms,"item-text":"abreviacao","item-value":"id",rules:[function(e){return!!e||"Obrigatório prencher a OBM!"}],label:"OBM",outlined:""},model:{value:e.pessoa.idBatalhao,callback:function(a){e.$set(e.pessoa,"idBatalhao",a)},expression:"pessoa.idBatalhao"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-select",{attrs:{items:e.setores,"item-text":"setor","item-value":"id",rules:[function(e){return!!e||"Obrigatório prencher o setor!"}],label:"Setor",outlined:""},model:{value:e.pessoa.idSetor,callback:function(a){e.$set(e.pessoa,"idSetor",a)},expression:"pessoa.idSetor"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[t("v-select",{attrs:{items:e.tipoPessoas,"item-text":"tipo","item-value":"value",rules:[function(e){return!!e||"Obrigatório prencher o tipo do cadastro!"}],label:"Tipo usuário",outlined:""},model:{value:e.pessoa.tipoPessoa,callback:function(a){e.$set(e.pessoa,"tipoPessoa",a)},expression:"pessoa.tipoPessoa"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[t("permissoes-pessoa",{attrs:{idResponsavel:e.pessoa.id}})],1)],1)],1)],1),t("v-card-actions",[t("div",{staticClass:"flex-grow-1"}),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Salvar")])],1)],1)],1)},Ne=[],Be={data:()=>({tipoPessoas:[{tipo:"Administrador",value:!0},{tipo:"Normal",value:!1}],sexos:["FEMININO","MASCULINO"],snackbar:{color:"",text:"",state:!1},idPessoa:null}),computed:{dialog:{get(){return this.dialogEditar},set(){this.$emit("close",!1)}}},props:{dialogEditar:Boolean,pessoa:Object,hierarquias:Array,obms:Array,setores:Array,escalas:Array},watch:{pessoa(e){this.idPessoa=e.id}},methods:{close(){this.$emit("close","teste")},isValidEmail(){var e=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;return e.test(this.pessoa.email)},isValidDate(e){var a=[];return""!=e&&(a=e.split("/"),parseInt(a[0])>0&&parseInt(a[0])<=31&&parseInt(a[1])>0&&parseInt(a[1])<=12&&parseInt(a[2])>1900&&parseInt(a[2])<3e3)},save(){this.validaCampos()&&this.axios.put("http://localhost:3000/api/pessoa",this.pessoa).then(e=>{e.data&&(this.snackbar.color="success",this.snackbar.text="Registro atualizado com sucesso!",this.snackbar.state=!0,this.close()),e.data||(this.snackbar.color="error",this.snackbar.text="Ocorreu um erro ao atualizar!",this.snackbar.state=!0,this.close())})},validaCampos(){return""!=this.pessoa.nome&&this.isValidEmail()&&""!=this.pessoa.matricula&&""!=this.pessoa.sexo&&null!=this.pessoa.idHierarquia&&null!=this.pessoa.idBatalhao&&null!=this.pessoa.idSetor}}},De=Be,Ie=Object(l["a"])(De,Me,Ne,!1,null,null,null),je=Ie.exports;p()(Ie,{VBtn:fe["a"],VCard:H["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VCol:_e["a"],VContainer:Se["a"],VDialog:$e["a"],VRow:Oe["a"],VSelect:Pe["a"],VTextField:Ee["a"]});var qe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("Permissão")])])]),t("tbody",[t("tr",{style:{padding:"0px",margin:"0px",height:"30px"}},[t("td",[t("v-switch",{style:{height:"20px",padding:"0px",margin:"0px"},attrs:{color:"red darken-4",label:"Cadastro Cadastrar"},model:{value:e.permissoes.cadastrosCadastrar,callback:function(a){e.$set(e.permissoes,"cadastrosCadastrar",a)},expression:"permissoes.cadastrosCadastrar"}})],1)]),t("tr",{style:{padding:"0px",margin:"0px",height:"30px"}},[t("td",[t("v-switch",{style:{height:"20px",padding:"0px",margin:"0px"},attrs:{color:"red darken-4",label:"Cadastro Editar"},model:{value:e.permissoes.cadastrosEditar,callback:function(a){e.$set(e.permissoes,"cadastrosEditar",a)},expression:"permissoes.cadastrosEditar"}})],1)]),t("tr",{style:{padding:"0px",margin:"0px",height:"30px"}},[t("td",[t("v-switch",{style:{height:"20px",padding:"0px",margin:"0px"},attrs:{color:"red darken-4",label:"Cadastro Apagar"},model:{value:e.permissoes.cadastrosApagar,callback:function(a){e.$set(e.permissoes,"cadastrosApagar",a)},expression:"permissoes.cadastrosApagar"}})],1)]),t("tr",{style:{padding:"0px",margin:"0px",height:"30px"}},[t("td",[t("v-switch",{style:{height:"20px",padding:"0px",margin:"0px"},attrs:{color:"red darken-4",label:"Patrimônio Cadastrar"},model:{value:e.permissoes.patrimonioCadastrar,callback:function(a){e.$set(e.permissoes,"patrimonioCadastrar",a)},expression:"permissoes.patrimonioCadastrar"}})],1)]),t("tr",{style:{padding:"0px",margin:"0px",height:"30px"}},[t("td",[t("v-switch",{style:{height:"20px",padding:"0px",margin:"0px"},attrs:{color:"red darken-4",label:"Patrimônio  Editar"},model:{value:e.permissoes.patrimonioEditar,callback:function(a){e.$set(e.permissoes,"patrimonioEditar",a)},expression:"permissoes.patrimonioEditar"}})],1)]),t("tr",{style:{padding:"0px",margin:"0px",height:"30px"}},[t("td",[t("v-switch",{style:{height:"20px",padding:"0px",margin:"0px"},attrs:{color:"red darken-4",label:"Patrimônio Apagar"},model:{value:e.permissoes.patrimonioApagar,callback:function(a){e.$set(e.permissoes,"patrimonioApagar",a)},expression:"permissoes.patrimonioApagar"}})],1)]),t("tr",{style:{padding:"0px",margin:"0px",height:"30px"}},[t("td",[t("v-switch",{style:{height:"20px",padding:"0px",margin:"0px"},attrs:{color:"red darken-4",label:"Patrimônio Movimentar"},model:{value:e.permissoes.patrimonioMovimentar,callback:function(a){e.$set(e.permissoes,"patrimonioMovimentar",a)},expression:"permissoes.patrimonioMovimentar"}})],1)]),t("tr",{style:{padding:"0px",margin:"0px",height:"30px"}},[t("td",[t("v-switch",{style:{height:"20px",padding:"0px",margin:"0px"},attrs:{color:"red darken-4",label:"Patrimônio Movimentar Editar"},model:{value:e.permissoes.patrimonioMovimentarEditar,callback:function(a){e.$set(e.permissoes,"patrimonioMovimentarEditar",a)},expression:"permissoes.patrimonioMovimentarEditar"}})],1)]),t("tr",{style:{padding:"0px",margin:"0px",height:"30px"}},[t("td",[t("v-switch",{style:{height:"20px",padding:"0px",margin:"0px"},attrs:{color:"red darken-4",label:"Patrimônio Movimentar Apagar"},model:{value:e.permissoes.patrimonioMovimentarApagar,callback:function(a){e.$set(e.permissoes,"patrimonioMovimentarApagar",a)},expression:"permissoes.patrimonioMovimentarApagar"}})],1)]),t("tr",{style:{padding:"0px",margin:"0px",height:"30px"}},[t("td",[t("v-switch",{style:{height:"20px",padding:"0px",margin:"0px"},attrs:{color:"red darken-4",label:"Patrimônio Descarregar"},model:{value:e.permissoes.patrimonioDescarregar,callback:function(a){e.$set(e.permissoes,"patrimonioDescarregar",a)},expression:"permissoes.patrimonioDescarregar"}})],1)]),t("tr",{style:{padding:"0px",margin:"0px",height:"30px"}},[t("td",[t("v-switch",{style:{height:"20px",padding:"0px",margin:"0px"},attrs:{color:"red darken-4",label:"Patrimônio Descarregar Editar"},model:{value:e.permissoes.patrimonioDescarregarEditar,callback:function(a){e.$set(e.permissoes,"patrimonioDescarregarEditar",a)},expression:"permissoes.patrimonioDescarregarEditar"}})],1)]),t("tr",{style:{padding:"0px",margin:"0px",height:"30px"}},[t("td",[t("v-switch",{style:{height:"20px",padding:"0px",margin:"0px"},attrs:{color:"red darken-4",label:"Patrimônio Descarregar Apagar"},model:{value:e.permissoes.patrimonioDescarregarApagar,callback:function(a){e.$set(e.permissoes,"patrimonioDescarregarApagar",a)},expression:"permissoes.patrimonioDescarregarApagar"}})],1)])])]},proxy:!0}])})},Te=[],ze={data:()=>({permissoes:{id:null,idResponsavel:null,cadastrosCadastrar:null,cadastrosEditar:null,cadastrosApagar:null,patrimonioCadastrar:null,patrimonioEditar:null,patrimonioApagar:null,patrimonioMovimentar:null,patrimonioMovimentarEditar:null,patrimonioMovimentarApagar:null,patrimonioDescarregar:null,patrimonioDescarregarEditar:null,patrimonioDescarregarApagar:null}}),props:{idResponsavel:{type:Number}},created(){this.initialize()},watch:{"permissoes.cadastrosCadastrar"(){this.save()},"permissoes.cadastrosEditar"(){this.save()},"permissoes.cadastrosApagar"(){this.save()},"permissoes.patrimonioCadastrar"(){this.save()},"permissoes.patrimonioEditar"(){this.save()},"permissoes.patrimonioApagar"(){this.save()},"permissoes.patrimonioMovimentar"(){this.save()},"permissoes.patrimonioMovimentarEditar"(){this.save()},"permissoes.patrimonioMovimentarApagar"(){this.save()},"permissoes.patrimonioDescarregar"(){this.save()},"permissoes.patrimonioDescarregarEditar"(){this.save()},"permissoes.patrimonioDescarregarApagar"(){this.save()},idResponsavel(){this.initialize()}},methods:{initialize(){this.axios.get("http://localhost:3000/api/permissao/getById/"+this.idResponsavel).then(e=>{e.data&&(this.permissoes=e.data)})},save(){null!=this.permissoes.id&&this.axios.put("http://localhost:3000/api/permissao/",this.permissoes).then(e=>{e.data&&(this.permissoes=e.data)})}}},He=ze,Le=t("1f4f"),Fe=t("b73d"),Re=Object(l["a"])(He,qe,Te,!1,null,null,null),Ue=Re.exports;p()(Re,{VSimpleTable:Le["a"],VSwitch:Fe["a"]}),s["a"].component("snackbar",xe),s["a"].component("permissoes-pessoa",Ue),s["a"].component("nova-pessoa",Ve),s["a"].component("editar-pessoa",je),s["a"].component(I.name,I),s["a"].component(U.name,U),s["a"].component(X.name,X),s["a"].component(re.name,re),s["a"].component(de.name,de);var Ge=t("f309");s["a"].use(Ge["a"]);var We=new Ge["a"]({theme:{themes:{light:{primary:"#1867c0",secondary:"#4caf50",tertiary:"#495057",accent:"#82B1FF",error:"#f55a4e",info:"#00d3ee",success:"#5cb860",warning:"#ffa21a"}}},icons:{iconfont:"mdi"}}),Je=t("31bd"),Ke=t("a7fe"),Qe=t.n(Ke),Xe=t("3a60"),Ye=t.n(Xe);s["a"].use(Ye.a),s["a"].use(Qe.a,g.a),Object(Je["sync"])(A,w),s["a"].config.productionTip=!1,new s["a"]({router:w,store:A,vuetify:We,render:e=>e(m)}).$mount("#app")},6096:function(e,a,t){"use strict";t.r(a);const s=e=>(a,t)=>a[e]=t,r=e=>a=>a[e]=!a[e];a["default"]={setDrawer:s("drawer"),setImage:s("image"),setColor:s("color"),toggleDrawer:r("drawer")}},"6b06":function(e,a,t){},8860:function(e,a,t){},c653:function(e,a,t){var s={"./app/mutations.js":"6096","./app/state.js":"2609","./index.js":"2a74"};function r(e){var a=o(e);return t(a)}function o(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="c653"},e536:function(e,a,t){"use strict";var s=t("1782"),r=t.n(s);r.a}});
//# sourceMappingURL=app.3f476d45.js.map