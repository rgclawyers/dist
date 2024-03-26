function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TeamMembers.js","assets/index.js","assets/index.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as e,m as a,w as s,o,f as t,a as r,e as n,u as i,y as l,D as m,E as c}from"./index.js";import{_ as u}from"./BodyTemplate.vue_vue_type_script_setup_true_lang.js";import{L as _}from"./LoadingAnimation.js";const d=r("img",{src:l,alt:"Image",class:"object-center shadow-inner lg:min-h-screen lg:object-cover"},null,-1),p=r("br",null,null,-1),g={id:"bg",class:"bg-white"},b=e({__name:"OurTeamView",setup(e){const l=m({loader:()=>c((()=>import("./TeamMembers.js")),__vite__mapDeps([0,1,2])),loadingComponent:_});return(e,m)=>(o(),a(u,null,{intro:s((()=>[])),image:s((()=>[d])),heading:s((()=>[t(" Meet the "),p,t(" RGC Team ")])),quote:s((()=>[t(' "Our law firm thrives on a shared workload and collaborative spirit." ')])),"scroll-icon":s((()=>[])),content:s((()=>[r("div",g,[n(i(l))])])),_:1}))}});export{b as default};
