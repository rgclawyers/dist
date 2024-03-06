function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TeamMembers.js","assets/index.js","assets/index.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e,o as a,c as s,d as n,m as r,w as o,f as t,a as l,e as i,u as c,y as m,D as u,E as d}from"./index.js";import{_}from"./BodyTemplate.vue_vue_type_script_setup_true_lang.js";const g={ref:"loadingScreen",class:"loading-animation z-[99]"};const p=e({},[["render",function(e,n){return a(),s("div",g,null,512)}]]),b=l("img",{src:m,alt:"Image",class:"object-center shadow-inner lg:min-h-screen lg:object-cover"},null,-1),f=l("br",null,null,-1),h={id:"bg",class:"bg-white"},v=n({__name:"OurTeamView",setup(e){const s=u({loader:()=>d((()=>import("./TeamMembers.js")),__vite__mapDeps([0,1,2])),loadingComponent:p});return(e,n)=>(a(),r(_,null,{intro:o((()=>[])),image:o((()=>[b])),heading:o((()=>[t(" Meet the "),f,t(" RGC Team ")])),quote:o((()=>[t(' "Our law firm thrives on a shared workload and collaborative spirit." ')])),"scroll-icon":o((()=>[])),content:o((()=>[l("div",h,[i(c(s))])])),_:1}))}});export{v as default};
