function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CmsArticles.js","assets/index.js","assets/index.css","assets/image-url.umd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as e,m as s,w as o,o as a,f as l,a as n,e as t,u as r,L as i,D as u,E as c}from"./index.js";import{_ as m}from"./BodyTemplate.vue_vue_type_script_setup_true_lang.js";import{L as g}from"./LoadingAnimation.js";const p=n("img",{src:i,alt:"Image",class:"object-center shadow-inner lg:min-h-screen lg:object-cover"},null,-1),d=n("br",null,null,-1),_={class:"bg-white bg-cover bg-no-repeat"},b=n("div",{class:"mt-20 flex w-full flex-col items-center justify-between gap-y-10 lg:px-52 xl:flex-row"},null,-1),f=e({__name:"PublicationsView",setup(e){const i=u({loader:()=>c((()=>import("./CmsArticles.js")),__vite__mapDeps([0,1,2,3])),loadingComponent:g});return(e,u)=>(a(),s(m,null,{intro:o((()=>[])),image:o((()=>[p])),heading:o((()=>[l(" RGC's "),d,l(" Knowledge Hub ")])),quote:o((()=>[l(' "Explore our Knowledge Hub for expert insights and valuable resources." ')])),downicon:o((()=>[])),content:o((()=>[n("div",_,[b,t(r(i))])])),_:1}))}});export{f as default};
