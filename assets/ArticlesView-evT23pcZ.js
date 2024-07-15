import{d as e,o as t,m as n,N as l,_ as r,c as s,a as i,r as o,b as a,u as c,g as u,O as d,t as f,F as m,l as p,e as y,G as h,v as k,w as g}from"./index-CfVscMQJ.js";import{i as x,c as v,a as b,g as w}from"./image-url.umd-CqXEpHwt.js";import{Q as I}from"./QuoteUp-Cm0r_qMO.js";function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){return"span"===e._type&&"text"in e&&"string"==typeof e.text&&(typeof e.marks>"u"||Array.isArray(e.marks)&&e.marks.every((e=>"string"==typeof e)))}function T(e){return"string"==typeof e._type&&"@"!==e._type[0]&&(!("markDefs"in e)||!e.markDefs||Array.isArray(e.markDefs)&&e.markDefs.every((e=>"string"==typeof e._key)))&&"children"in e&&Array.isArray(e.children)&&e.children.every((e=>"object"==typeof e&&"_type"in e))}function $(e){return T(e)&&"listItem"in e&&"string"==typeof e.listItem&&(typeof e.level>"u"||"number"==typeof e.level)}function A(e){return"@list"===e._type}function P(e){return"@span"===e._type}function S(e){return"@text"===e._type}const D=["strong","em","code","underline","strike-through"];function L(e,t,n){if(!N(e)||!e.marks)return[];if(!e.marks.length)return[];const l=e.marks.slice(),r={};return l.forEach((e=>{r[e]=1;for(let l=t+1;l<n.length;l++){const t=n[l];if(!(t&&N(t)&&Array.isArray(t.marks)&&-1!==t.marks.indexOf(e)))break;r[e]++}})),l.sort(((e,t)=>function(e,t,n){const l=e[t],r=e[n];if(l!==r)return r-l;const s=D.indexOf(t),i=D.indexOf(n);return s!==i?s-i:t.localeCompare(n)}(r,e,t)))}function M(e,t){return(e.level||1)===t.level&&e.listItem===t.listItem}function B(e,t,n){return{_type:"@list",_key:`${e._key||`${t}`}-parent`,mode:n,level:e.level||1,listItem:e.listItem,children:[e]}}function H(e,t){const n=t.level||1,l=t.listItem||"normal",r="string"==typeof t.listItem;if(A(e)&&(e.level||1)===n&&r&&(e.listItem||"normal")===l)return e;if(!("children"in e))return;const s=e.children[e.children.length-1];return s&&!N(s)?H(s,t):void 0}function V(e){let t="";return e.children.forEach((e=>{S(e)?t+=e.text:P(e)&&(t+=V(e))})),t}function q(e,t,n){const l=t[n],r=e[n];return"function"==typeof l||l&&"function"==typeof r?l:l?{...r,...l}:r}const E=e=>(t,{slots:n})=>{var r;return l(e,null==(r=n.default)?void 0:r.call(n))},C={textDecoration:"underline"},K={code:E("code"),em:E("em"),link:({value:e},{slots:t})=>{var n;return l("a",{href:null==e?void 0:e.href},null==(n=t.default)?void 0:n.call(t))},"strike-through":E("del"),strong:E("strong"),underline:(e,{slots:t})=>{var n;return l("span",{style:C},null==(n=t.default)?void 0:n.call(t))}},Z={number:E("ol"),bullet:E("ul")},Q=E("li"),U=(e,t)=>`[@portabletext/vue] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,z=e=>U(`block type "${e}"`,"types");function F(e){console.warn(e)}const R={display:"none"},G=E("p"),W=E("ul"),X=E("li"),J={types:{},block:{normal:E("p"),blockquote:E("blockquote"),h1:E("h1"),h2:E("h2"),h3:E("h3"),h4:E("h4"),h5:E("h5"),h6:E("h6")},marks:K,list:Z,listItem:Q,hardBreak:()=>l("br"),unknownType:({value:e,isInline:t})=>{const n=z(e._type);return l(t?"span":"div",{style:R},n)},unknownMark:({markType:e},{slots:t})=>{var n;return l("span",{class:`unknown__pt__mark__${e}`},null==(n=t.default)?void 0:n.call(t))},unknownList:W,unknownListItem:X,unknownBlockStyle:G},Y=(e,t)=>{function n(r){const{node:s,index:i,isInline:o}=r,a=s._key||`node-${i}`;return A(s)?function(r,s,i){const o=r.children.map(((e,t)=>n({node:e._key?e:{...e,_key:`li-${s}-${t}`},index:t,isInline:!1,renderNode:n}))),a=e.list,c=("function"==typeof a?a:a[r.listItem])||e.unknownList;if(c===e.unknownList){const e=r.listItem||"bullet";t((e=>U(`list style "${e}"`,"list"))(e),{nodeType:"listStyle",type:e})}return l(c,{key:i,value:r,index:s,isInline:!1,renderNode:n},(()=>o))}(s,i,a):$(s)?function(r,s,i){const o=ee({node:r,index:s,isInline:!1,renderNode:n}),a=e.listItem,c=("function"==typeof a?a:a[r.listItem])||e.unknownListItem;if(c===e.unknownListItem){const e=r.listItem||"bullet";t((e=>U(`list item style "${e}"`,"listItem"))(e),{type:e,nodeType:"listItemStyle"})}let u=o.children;if(r.style&&"normal"!==r.style){const{listItem:e,...t}=r;u=n({node:t,index:s,isInline:!1,renderNode:n})}return l(c,{key:i,value:r,index:s,isInline:!1,renderNode:n},(()=>u))}(s,i,a):P(s)?function(r,s,i){const{markDef:o,markType:a,markKey:c}=r,u=e.marks[a]||e.unknownMark,d=r.children.map(((e,t)=>n({node:e,index:t,isInline:!0,renderNode:n})));return u===e.unknownMark&&t((e=>U(`mark type "${e}"`,"marks"))(a),{nodeType:"mark",type:a}),l(u,{key:i,text:V(r),value:o,markType:a,markKey:c,renderNode:n},(()=>d))}(s,0,a):function(t){return t._type in e.types}(s)?function(t,r,s,i){const o={value:t,isInline:i,index:r,renderNode:n},a=e.types[t._type];return a?l(a,{key:s,...o}):void 0}(s,i,a,o):T(s)?function(r,s,i,o){const{_key:a,children:c,...u}=ee({node:r,index:s,isInline:o,renderNode:n}),d=u.node.style||"normal",f=("function"==typeof e.block?e.block:e.block[d])||e.unknownBlockStyle;return f===e.unknownBlockStyle&&t((e=>U(`block style "${e}"`,"block"))(d),{nodeType:"blockStyle",type:d}),l(f,{key:i,...u,value:u.node,renderNode:n},(()=>c))}(s,i,a,o):S(s)?function(t,n){if("\n"===t.text){const t=e.hardBreak;return t?l(t,{key:n}):"\n"}return t.text}(s,a):function(r,s,i,o){const a={value:r,isInline:o,index:s,renderNode:n};t(z(r._type),{nodeType:"block",type:r._type});const c=e.unknownType;return l(c,{key:i,...a})}(s,i,a,o)}return n};function ee(e){const{node:t,index:n,isInline:l,renderNode:r}=e,s=function(e){var t;const{children:n,markDefs:l=[]}=e;if(!n||!n.length)return[];const r=n.map(L),s={_type:"@span",children:[],markType:"<unknown>"};let i=[s];for(let o=0;o<n.length;o++){const e=n[o];if(!e)continue;const s=r[o]||[];let a=1;if(i.length>1)for(;a<i.length;a++){const e=(null==(t=i[a])?void 0:t.markKey)||"",n=s.indexOf(e);if(-1===n)break;s.splice(n,1)}i=i.slice(0,a);let c=i[i.length-1];if(c){for(const t of s){const n=l.find((e=>e._key===t)),r=n?n._type:t,s={_type:"@span",_key:e._key,children:[],markDef:n,markType:r,markKey:t};c.children.push(s),i.push(s),c=s}if(N(e)){const t=e.text.split("\n");for(let e=t.length;e-- >1;)t.splice(e,0,"\n");c.children=c.children.concat(t.map((e=>({_type:"@text",text:e}))))}else c.children=c.children.concat(e)}}return s.children}(t).map(((e,t)=>r({node:e,isInline:!0,index:t,renderNode:r})));return{_key:t._key||`block-${n}`,children:s,index:n,isInline:l,node:t}}const te=e({__name:"vue-portable-text",props:{value:{},components:{},onMissingComponent:{type:[Function,Boolean],default:()=>F},listNestingMode:{}},setup(e){function l(){}const r=e,s=()=>{const e=r.onMissingComponent||l,t=function(e,t){const n=[];let l;for(let r=0;r<e.length;r++){const s=e[r];if(s){if(!$(s)){n.push(s),l=void 0;continue}if(!l){l=B(s,r,t),n.push(l);continue}if(M(s,l)){l.children.push(s);continue}if((s.level||1)>l.level){const e=B(s,r,t);if("html"===t){const t=l.children[l.children.length-1],n=j(j({},t),{},{children:[...t.children,e]});l.children[l.children.length-1]=n}else l.children.push(e);l=e;continue}if((s.level||1)<l.level){const e=n[n.length-1],i=e&&H(e,s);if(i){l=i,l.children.push(s);continue}l=B(s,r,t),n.push(l);continue}if(s.listItem!==l.listItem){const e=n[n.length-1],i=e&&H(e,{level:s.level||1});if(i&&i.listItem===s.listItem){l=i,l.children.push(s);continue}l=B(s,r,t),n.push(l);continue}console.warn("Unknown state encountered for block",s),n.push(s)}}return n}(Array.isArray(r.value)?r.value:[r.value],r.listNestingMode||"html"),n=r.components?function(e,t){const{block:n,list:l,listItem:r,marks:s,types:i,...o}=t;return{...e,block:q(e,t,"block"),list:q(e,t,"list"),listItem:q(e,t,"listItem"),marks:q(e,t,"marks"),types:q(e,t,"types"),...o}}(J,r.components):J,s=Y(n,e);return t.map(((e,t)=>s({node:e,index:t,isInline:!1,renderNode:s})))};return(e,l)=>(t(),n(s))}}),ne={},le={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"h-8 w-8 text-rgc-green-3"},re=[i("path",{d:"M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"},null,-1),i("path",{d:"M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"},null,-1)];const se=r(ne,[["render",function(e,n){return t(),s("svg",le,re)}]]),ie={key:0,class:"loading-animation"},oe=["src"],ae={class:"flex flex-row justify-center"},ce={key:0,class:"bg-cover font-Poppins text-gray-300 sm:p-10 md:py-16"},ue={class:"mx-auto flex max-w-7xl flex-col items-center justify-center overflow-hidden rounded pt-20 md:-mt-8"},de=["src"],fe={class:"-mt-10 w-full space-y-6 rounded-xl bg-black/85 p-6 pb-12 backdrop-blur-3xl backdrop-filter lg:-mt-40 lg:min-w-[800px] lg:rounded-3xl"},me={class:"space-y-2 py-5 md:px-10"},pe={class:"inline-flex w-full flex-row items-center justify-center"},ye={class:"rgc-h3 inline-flex text-balance pb-5 text-center text-3xl font-bold leading-snug md:text-4xl lg:text-6xl lg:leading-snug"},he={class:"inline-flex w-full justify-center gap-x-5"},ke={class:"ml-5 text-right italic text-gray-300"},ge=i("p",{class:"ml-5"},"By:",-1),xe={class:"-mt-20 ml-5 flex w-full flex-row pb-5 lg:gap-x-10"},ve=["src","alt"],be={class:"sm:flex sm:h-full sm:flex-col"},we={class:"text font-medium text-gray-800 dark:text-gray-200"},Ie={class:"mt-1 text-xs text-gray-500"},_e={class:"mt-0 inline-flex w-full shrink-0 flex-row items-start justify-center text-center italic text-gray-400 md:px-10"},je={class:"w-fit self-center py-4"},Oe={id:"text",class:"mt-0 flex flex-col md:text-justify lg:px-10 lg:text-lg"},Ne=e({__name:"ArticlesView",setup(e){const l=h(),r=x(v),_=b(l.params.slug);let j=o([]),O=o(!0),N=o(!1);const T=e=>r.image(e);a((async()=>{await v.fetch(_).then((e=>{Promise.all(e),j.value=e}),(e=>{console.error(e)})).then((()=>{setTimeout((()=>{O.value=!1}),500)}))}));const $={types:{image:({value:e})=>y("img",{src:T(e).ignoreImageParams().width(500).toString(),class:"self-center rounded-lg intro-shadow"}),callToAction:({value:e,isInline:t},{slots:n})=>t?y("a",{href:e.url},e.text):y("div",{class:"callToAction"},e.text)},marks:{link:({value:e},{slots:t})=>{const n=e.href.startsWith("/")?void 0:"noreferrer noopener";return y("a",{href:e.href,rel:n,class:"underline decoration-rgc-green-3 decoration-solid hover:decoration-double",target:"_blank"},t.default?.())}},list:{bullet:(e,{slots:t})=>y("ul",{class:"my-2 list-disc ml-10 space-y-4"},t.default?.()),number:(e,{slots:t})=>y("ol",{class:"my-2 list-decimal ml-10 space-y-4"},t.default?.()),checkmarks:(e,{slots:t})=>y("ol",{class:"m-auto text-lg"},t.default?.())},block:{h1:(e,{slots:t})=>{const n=j.value[0].headings[0].id[0]._key;return y("h1",{class:"text-3xl md:text-5xl font-normal my-5 pt-5 text-left leading-snug",id:`heading-${n}`},t.default?.())},h2:(e,{slots:t})=>{const n=j.value[0].headings[0].id[0]._key;return y("h2",{class:"text-2xl md:text-3xl my-5 font-normal",id:`heading-${n}`},t.default?.())},h3:(e,{slots:t})=>y("h3",{class:"text-xl md:text-2xl font-normal my-4"},t.default?.()),normal:(e,{slots:t})=>y("p",{class:"my-3 text-base md:text-lg"},t.default?.()),blockquote:(e,{slots:t})=>y("blockquote",{class:"italic mx-8 md:mx-16 bg-black/20 rounded-lg px-5 py-2"},t.default?.())}};return(e,l)=>{const r=k("RouterLink");return t(),s(m,null,[c(O)&&!c(N)?(t(),s("div",ie)):u("",!0),i("img",{src:c("/assets/articles_bg-B_NR0dQX.jpg"),class:"fixed -z-50 min-h-screen min-w-full scale-105"},null,8,oe),i("div",ae,[c(j)[0]&&!c(O)?(t(),s("div",ce,[i("div",ue,[i("img",{src:T(c(j)[0].mainImage).ignoreImageParams().width(1e3).toString(),alt:"Album",class:"intro-shadow h-auto rounded-lg lg:max-h-[90vh] lg:max-w-[1500px]",onLoad:l[0]||(l[0]=e=>d(N)?N.value=!0:N=!0)},null,40,de),i("div",fe,[i("div",me,[i("div",pe,[i("h1",ye,f(c(j)[0].title),1)]),i("div",he,[(t(!0),s(m,null,p(c(j)[0].categories,(e=>(t(),s("div",{key:e.title,class:"badge rounded-md py-3 text-gray-300"}," #"+f(e.title),1)))),128))]),i("p",ke,f(c(w)(c(j)[0].publishedAt)),1),ge,i("div",xe,[(t(!0),s(m,null,p(c(j)[0].authors,(e=>(t(),n(r,{to:"/our-team/"+e.slug.current,key:e.name,class:"flex items-center gap-x-5"},{default:g((()=>[e.image?(t(),s("img",{key:0,class:"h-14 w-14 rounded-lg",src:T(e.image).size(100,100).fit("crop").toString(),alt:e.name},null,8,ve)):u("",!0),i("div",be,[i("div",null,[i("h3",we,f(e.name),1),i("p",Ie,f(e.designation),1)])])])),_:2},1032,["to"])))),128))]),i("p",_e,[y(I,{class:"self-start"}),i("span",je,f(c(j)[0].quote),1),y(se,{class:"scale-50 self-end"})])]),i("div",Oe,[y(c(te),{ref:"portableText",value:c(j)[0].body,components:$},null,8,["value"])])])])])):u("",!0)])],64)}}});export{Ne as default};