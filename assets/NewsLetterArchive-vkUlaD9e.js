import{d as e,r as t,b as s,c as a,a as l,u as r,F as i,l as n,o,f as c,t as x}from"./index-D6YgcfyT.js";const g={class:"bg-white py-24 font-Poppins sm:py-32"},m={class:"mx-auto max-w-7xl px-6 lg:px-8"},d={class:"flex w-full flex-row flex-wrap items-center justify-center gap-10 align-middle"},h=l("div",{class:"mx-auto max-w-2xl lg:mx-0"},[l("h2",{class:"rgc-h1 sm: pb-2 text-5xl font-bold leading-tight text-gray-900 sm:text-6xl xl:text-8xl"}," The Insight Archive "),l("p",{class:"mt-2 text-lg leading-8 text-gray-600"}," Checkout the previous issues of the Insight. ")],-1),p=["src"],w={class:"mx-auto grid max-w-2xl grid-cols-1 items-center justify-center justify-items-center gap-x-8 gap-y-16 pt-24 sm:mt-5 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"},f={class:"group relative transition-transform hover:scale-110"},u=["src"],v={class:"flex flex-row items-center justify-center gap-3 pt-5 align-middle"},y={class:"group-hover:rgc-h1 text-xl font-bold leading-6 text-gray-900"},b=["href"],j=l("span",{class:"absolute inset-0 text-xl"},null,-1),k={class:"rgc-green-1 badge whitespace-nowrap rounded-lg text-white"},A=e({__name:"NewsLetterArchive",setup(e){const A=t([]);return s((async()=>{try{const e=await fetch("data/newsletterarchive.json");if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();A.value=t.newsletter.slice().reverse(),await Promise.all([A.value])}catch(e){console.error("Error fetching members:",e)}})),(e,t)=>(o(),a("div",g,[l("div",m,[l("div",d,[h,l("img",{src:r("/assets/NewsLetterArchive-BLCGEKG1.svg"),alt:"news letter illustration",class:"h-32 sm:h-52 xl:-mt-16 xl:h-64"},null,8,p)]),l("div",w,[(o(!0),a(i,null,n(A.value,(e=>(o(),a("article",{key:e.id,class:"flex max-w-xl flex-col items-start justify-between"},[l("div",f,[l("img",{class:"relative left-0 top-0 w-60 rounded-lg bg-transparent shadow-md shadow-black ring-1 ring-white/10",src:e.image},null,8,u),l("div",v,[l("h3",y,[l("a",{href:e.href,target:"_blank",class:"font-bold"},[j,c(" "+x(e.title),1)],8,b)]),l("p",k,x(e.description),1)])])])))),128))])])]))}});export{A as default};
