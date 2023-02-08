import{i as b,D as r,l as m,q as s,k as j,K as N,G as c,L as $,M as y,N as k,d as B,O as C,s as v,h as S,P as x,Q as L,f as A,e as T,R as M,S as o,E as w,U as z,m as H,_ as q}from"./entry.6377e1f1.js";import{q as F,h as E,e as U,j as Q,u as G}from"./ContentQuery.77b3b2ad.js";import{w as O,s as W,u as K,a as Y}from"./utils.e7d998e0.js";import"./lodash.162a1f15.js";/* empty css                                               */import"./leaflet-src.b239ec24.js";import"./matter.1b35dd77.js";import{u as J}from"./ContentDoc.da0793ec.js";import"./ContentList.9fbef9d8.js";import"./ContentRenderer.3341cff7.js";import"./ContentRendererMarkdown.3bf9ad97.js";import"./ContentSlot.e360683c.js";import"./DocumentDrivenEmpty.078af420.js";import"./DocumentDrivenNotFound.c3537aa5.js";import"./Markdown.bd392b71.js";import"./ProseCode.dd7b769c.js";import"./three.module.5769ac46.js";import"./index.68c44503.js";const X=async t=>{const{content:e}=b().public;typeof(t==null?void 0:t.params)!="function"&&(t=F(t));const i=t.params(),u=e.experimental.stripQueryParameters?O(`/navigation/${`${E(i)}.${e.integrity}`}/${U(i)}.json`):O(`/navigation/${E(i)}.${e.integrity}.json`);if(W())return(await r(()=>import("./client-db.e56291f0.js"),["./client-db.e56291f0.js","./entry.6377e1f1.js","./entry.b6f0b5be.css","./utils.e7d998e0.js","./ContentQuery.77b3b2ad.js","./index.68c44503.js"],import.meta.url).then(l=>l.generateNavigation))(i);const a=await $fetch(u,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:Q(i),previewToken:K("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const I={site:()=>r(()=>import("./site.b0a85994.js"),["./site.b0a85994.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t)},Z=m({props:{name:String},async setup(t,e){const i=await I[t.name]().then(u=>u.default||u);return()=>s(i,{},e.slots)}}),tt=m({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const i=k("_route"),u=i===j()?N():i,a=c(()=>{var n,l;return(l=(n=B(t.name))!=null?n:u.meta.layout)!=null?l:"default"});return()=>{var d;const n=a.value&&a.value in I,l=(d=u.meta.layoutTransition)!=null?d:$;return y(C,n&&l,{default:()=>y(Z,n&&{key:a.value,name:a.value,hasTransition:void 0},e.slots).default()}).default()}}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),rt=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:i}){const u=v(null),a=S();return x(n=>{if(!a.isHydrating)return i("error",n),u.value=n,!1}),()=>{var n,l;return u.value?(n=e.error)==null?void 0:n.call(e,{error:u}):(l=e.default)==null?void 0:l.call(e)}}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"})),it=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:i}){const u=v(!1);return L(()=>{u.value=!0}),a=>{var _;if(u.value)return(_=e.default)==null?void 0:_.call(e);const n=e.fallback||e.placeholder;if(n)return n();const l=a.fallback||a.placeholder||"",d=a.fallbackTag||a.placeholderTag||"span";return A(d,i,l)}}}),g=new WeakMap;function nt(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(i,...u)=>{var a;if(i.mounted$){const n=t.render(i,...u);return n.children===null||typeof n.children=="string"?T(n.type,n.props,n.children,n.patchFlag,n.dynamicProps,n.shapeFlag):s(n)}else return s("div",(a=i.$attrs)!=null?a:i._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(i,u)=>{var n;const a=v(!1);return L(()=>{a.value=!0}),Promise.resolve(((n=t.setup)==null?void 0:n.call(t,i,u))||{}).then(l=>typeof l!="function"?{...l,mounted$:a}:(...d)=>{if(a.value){const _=l(...d);return _.children===null||typeof _.children=="string"?T(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):s(_)}else return s("div",u.attrs)})},g.set(t,e),e}const at=Object.freeze(Object.defineProperty({__proto__:null,default:it,createClientOnly:nt},Symbol.toStringTag,{value:"Module"})),ut=m({name:"DevOnly",setup(t,e){return()=>null}}),lt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"})),_t=m({name:"ServerPlaceholder",render(){return A("div")}}),mt=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"})),dt=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const i=st({duration:t.duration,throttle:t.throttle}),u=S();return u.hook("page:start",i.start),u.hook("page:finish",i.finish),M(()=>i.clear),()=>s("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${i.progress.value}%`,height:`${t.height}px`,opacity:i.isLoading.value?1:0,background:t.color,backgroundSize:`${100/i.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function st(t){const e=v(0),i=v(!1),u=c(()=>1e4/t.duration);let a=null,n=null;function l(){_(),e.value=0,i.value=!0,t.throttle?n=setTimeout(P,t.throttle):P()}function d(){e.value=100,R()}function _(){clearInterval(a),clearTimeout(n),a=null,n=null}function D(V){e.value=Math.min(100,e.value+V)}function R(){_(),setTimeout(()=>{i.value=!1,setTimeout(()=>{e.value=0},400)},500)}function P(){a=setInterval(()=>{D(u.value)},100)}return{progress:e,isLoading:i,start:l,finish:d,clear:_}}const pt=Object.freeze(Object.defineProperty({__proto__:null,default:dt},Symbol.toStringTag,{value:"Module"})),ft=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(i,u)=>(J(()=>t({...ft(i),...u.attrs},u)),()=>{var a,n;return e?(n=(a=u.slots).default)==null?void 0:n.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ht=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const i={...t},u=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return u&&(i.children=u),{noscript:[i]}})}),vt=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),gt=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),Et=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var u,a,n;return{title:((n=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:n.children)||null}})}),ct=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),Pt=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,n,l;const i={...t},u=(l=(n=(a=e.default)==null?void 0:a.call(e))==null?void 0:n[0])==null?void 0:l.children;return u&&(i.children=u),{style:[i]}})}),yt=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var i,u;return(u=(i=e.slots).default)==null?void 0:u.call(i)}}),Tt=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),Ot=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,NoScript:ht,Link:vt,Base:gt,Title:Et,Meta:ct,Style:Pt,Head:yt,Html:Tt,Body:Ot},Symbol.toStringTag,{value:"Module"}));o(()=>r(()=>import("./alert.f8b9ccb2.js"),["./alert.f8b9ccb2.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./calendar.4fe91f16.js"),["./calendar.4fe91f16.js","./lodash.162a1f15.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./dd.4c6053cc.js"),["./dd.4c6053cc.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./draggable.3083467f.js"),["./draggable.3083467f.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.e3f9d3b1.js"),["./layout.e3f9d3b1.js","./entry.6377e1f1.js","./entry.b6f0b5be.css","./layout.e428cb53.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./monaco-diff.2614bf3a.js"),["./monaco-diff.2614bf3a.js","./entry.6377e1f1.js","./entry.b6f0b5be.css","./monaco.ac3ec4f0.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./monaco.ac3ec4f0.js").then(t=>t.m),["./monaco.ac3ec4f0.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./qrcode.e160258e.js"),["./qrcode.e160258e.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./base.3e4441c7.js"),[],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./map.9c30d2a8.js"),["./map.9c30d2a8.js","./base.3e4441c7.js","./leaflet-src.b239ec24.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./marker.ec15168b.js"),["./marker.ec15168b.js","./base.3e4441c7.js","./leaflet-src.b239ec24.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./scene.3dd4046f.js"),["./scene.3dd4046f.js","./three.module.5769ac46.js","./matter.1b35dd77.js","./entry.6377e1f1.js","./entry.b6f0b5be.css","./Pass.d57df072.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./content.0b4701cd.js"),["./content.0b4701cd.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentDoc.da0793ec.js").then(t=>t.C),["./ContentDoc.da0793ec.js","./entry.6377e1f1.js","./entry.b6f0b5be.css","./ContentRenderer.3341cff7.js","./ContentRendererMarkdown.3bf9ad97.js","./index.68c44503.js","./ContentQuery.77b3b2ad.js","./utils.e7d998e0.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentList.9fbef9d8.js"),["./ContentList.9fbef9d8.js","./ContentQuery.77b3b2ad.js","./entry.6377e1f1.js","./entry.b6f0b5be.css","./utils.e7d998e0.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>Lt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentQuery.77b3b2ad.js").then(t=>t.C),["./ContentQuery.77b3b2ad.js","./entry.6377e1f1.js","./entry.b6f0b5be.css","./utils.e7d998e0.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentRenderer.3341cff7.js"),["./ContentRenderer.3341cff7.js","./ContentRendererMarkdown.3bf9ad97.js","./entry.6377e1f1.js","./entry.b6f0b5be.css","./index.68c44503.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentRendererMarkdown.3bf9ad97.js"),["./ContentRendererMarkdown.3bf9ad97.js","./entry.6377e1f1.js","./entry.b6f0b5be.css","./index.68c44503.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentSlot.e360683c.js"),["./ContentSlot.e360683c.js","./utils.e7d998e0.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./DocumentDrivenEmpty.078af420.js"),["./DocumentDrivenEmpty.078af420.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./DocumentDrivenNotFound.c3537aa5.js"),["./DocumentDrivenNotFound.c3537aa5.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./Markdown.bd392b71.js"),["./Markdown.bd392b71.js","./ContentSlot.e360683c.js","./utils.e7d998e0.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseA.982e54a2.js"),["./ProseA.982e54a2.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseBlockquote.229fb5a1.js"),["./ProseBlockquote.229fb5a1.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseCode.dd7b769c.js"),["./ProseCode.dd7b769c.js","./entry.6377e1f1.js","./entry.b6f0b5be.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseCodeInline.fa4e487c.js"),["./ProseCodeInline.fa4e487c.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseEm.d3a151db.js"),["./ProseEm.d3a151db.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH1.5e0138bb.js"),["./ProseH1.5e0138bb.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH2.b52b8312.js"),["./ProseH2.b52b8312.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH3.24f1a145.js"),["./ProseH3.24f1a145.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH4.cdf75e1e.js"),["./ProseH4.cdf75e1e.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH5.c1d50054.js"),["./ProseH5.c1d50054.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH6.9655dd83.js"),["./ProseH6.9655dd83.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseHr.fe7a676c.js"),["./ProseHr.fe7a676c.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseImg.4aaf62d2.js"),["./ProseImg.4aaf62d2.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseLi.0e398ba5.js"),["./ProseLi.0e398ba5.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseOl.3c1ae47d.js"),["./ProseOl.3c1ae47d.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseP.3cc35a30.js"),["./ProseP.3cc35a30.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseStrong.d4553962.js"),["./ProseStrong.d4553962.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTable.65cefaa6.js"),["./ProseTable.65cefaa6.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTbody.2e25153b.js"),["./ProseTbody.2e25153b.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTd.26f05b93.js"),["./ProseTd.26f05b93.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTh.8201a6b7.js"),["./ProseTh.8201a6b7.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseThead.0d91c6b1.js"),["./ProseThead.0d91c6b1.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTr.6316c260.js"),["./ProseTr.6316c260.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseUl.9acf0f18.js"),["./ProseUl.9acf0f18.js","./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./welcome.1ea4fb09.js"),["./welcome.1ea4fb09.js","./ContentDoc.da0793ec.js","./entry.6377e1f1.js","./entry.b6f0b5be.css","./ContentRenderer.3341cff7.js","./ContentRendererMarkdown.3bf9ad97.js","./index.68c44503.js","./ContentQuery.77b3b2ad.js","./utils.e7d998e0.js","./lodash.162a1f15.js","./leaflet-src.b239ec24.js","./matter.1b35dd77.js","./three.module.5769ac46.js","./ContentList.9fbef9d8.js","./ContentSlot.e360683c.js","./DocumentDrivenEmpty.078af420.js","./DocumentDrivenNotFound.c3537aa5.js","./Markdown.bd392b71.js","./ProseCode.dd7b769c.js","./ProseCode.e63e49c6.css","./layout.e428cb53.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>lt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>mt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./entry.6377e1f1.js").then(t=>t.ab),["./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>pt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./entry.6377e1f1.js").then(t=>t.ac),["./entry.6377e1f1.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const St=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=w(t),i=c(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!i.value&&z("dd-navigation").value){const{navigation:a}=Y();return{navigation:a}}const{data:u}=await G(`content-navigation-${E(i.value)}`,()=>X(i.value));return{navigation:u}},render(t){const e=H(),{navigation:i}=t,u=l=>s(q,{to:l._path},()=>l.title),a=(l,d)=>s("ul",d?{"data-level":d}:null,l.map(_=>_.children?s("li",null,[u(_),a(_.children,d+1)]):s("li",null,u(_)))),n=l=>a(l,0);return e!=null&&e.default?e.default({navigation:i,...this.$attrs}):n(i)}}),Lt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"}));export{St as default};