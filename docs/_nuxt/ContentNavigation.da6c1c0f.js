import{i as b,D as r,l as m,q as s,k as j,K as N,G as c,L as $,M as y,N as k,d as B,O as C,s as v,h as S,P as x,Q as L,f as A,e as T,R as M,S as o,E as w,U as z,m as H,_ as q}from"./entry.240b01a2.js";import{q as F,h as E,e as U,j as Q,u as G}from"./ContentQuery.4f7e1188.js";import{w as O,s as W,u as K,a as Y}from"./utils.8ae52f9e.js";import"./lodash.703fc263.js";/* empty css                                               */import"./leaflet-src.0df1d26c.js";import"./matter.05c94999.js";import{u as J}from"./ContentDoc.cbe6dcec.js";import"./ContentList.7ed61235.js";import"./ContentRenderer.5a5e8570.js";import"./ContentRendererMarkdown.37236ed0.js";import"./ContentSlot.a475e646.js";import"./DocumentDrivenEmpty.a2d0bd45.js";import"./DocumentDrivenNotFound.8e630b7e.js";import"./Markdown.d7e015d4.js";import"./ProseCode.368ba5b8.js";import"./three.module.5769ac46.js";import"./index.68c44503.js";const X=async t=>{const{content:e}=b().public;typeof(t==null?void 0:t.params)!="function"&&(t=F(t));const i=t.params(),u=e.experimental.stripQueryParameters?O(`/navigation/${`${E(i)}.${e.integrity}`}/${U(i)}.json`):O(`/navigation/${E(i)}.${e.integrity}.json`);if(W())return(await r(()=>import("./client-db.95b660b4.js"),["./client-db.95b660b4.js","./entry.240b01a2.js","./entry.b6f0b5be.css","./utils.8ae52f9e.js","./ContentQuery.4f7e1188.js","./index.68c44503.js"],import.meta.url).then(l=>l.generateNavigation))(i);const a=await $fetch(u,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:Q(i),previewToken:K("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const I={site:()=>r(()=>import("./site.1bd9f042.js"),["./site.1bd9f042.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t)},Z=m({props:{name:String},async setup(t,e){const i=await I[t.name]().then(u=>u.default||u);return()=>s(i,{},e.slots)}}),tt=m({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const i=k("_route"),u=i===j()?N():i,a=c(()=>{var n,l;return(l=(n=B(t.name))!=null?n:u.meta.layout)!=null?l:"default"});return()=>{var d;const n=a.value&&a.value in I,l=(d=u.meta.layoutTransition)!=null?d:$;return y(C,n&&l,{default:()=>y(Z,n&&{key:a.value,name:a.value,hasTransition:void 0},e.slots).default()}).default()}}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),rt=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:i}){const u=v(null),a=S();return x(n=>{if(!a.isHydrating)return i("error",n),u.value=n,!1}),()=>{var n,l;return u.value?(n=e.error)==null?void 0:n.call(e,{error:u}):(l=e.default)==null?void 0:l.call(e)}}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"})),it=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:i}){const u=v(!1);return L(()=>{u.value=!0}),a=>{var _;if(u.value)return(_=e.default)==null?void 0:_.call(e);const n=e.fallback||e.placeholder;if(n)return n();const l=a.fallback||a.placeholder||"",d=a.fallbackTag||a.placeholderTag||"span";return A(d,i,l)}}}),g=new WeakMap;function nt(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(i,...u)=>{var a;if(i.mounted$){const n=t.render(i,...u);return n.children===null||typeof n.children=="string"?T(n.type,n.props,n.children,n.patchFlag,n.dynamicProps,n.shapeFlag):s(n)}else return s("div",(a=i.$attrs)!=null?a:i._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(i,u)=>{var n;const a=v(!1);return L(()=>{a.value=!0}),Promise.resolve(((n=t.setup)==null?void 0:n.call(t,i,u))||{}).then(l=>typeof l!="function"?{...l,mounted$:a}:(...d)=>{if(a.value){const _=l(...d);return _.children===null||typeof _.children=="string"?T(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):s(_)}else return s("div",u.attrs)})},g.set(t,e),e}const at=Object.freeze(Object.defineProperty({__proto__:null,default:it,createClientOnly:nt},Symbol.toStringTag,{value:"Module"})),ut=m({name:"DevOnly",setup(t,e){return()=>null}}),lt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"})),_t=m({name:"ServerPlaceholder",render(){return A("div")}}),mt=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"})),dt=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const i=st({duration:t.duration,throttle:t.throttle}),u=S();return u.hook("page:start",i.start),u.hook("page:finish",i.finish),M(()=>i.clear),()=>s("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${i.progress.value}%`,height:`${t.height}px`,opacity:i.isLoading.value?1:0,background:t.color,backgroundSize:`${100/i.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function st(t){const e=v(0),i=v(!1),u=c(()=>1e4/t.duration);let a=null,n=null;function l(){_(),e.value=0,i.value=!0,t.throttle?n=setTimeout(P,t.throttle):P()}function d(){e.value=100,R()}function _(){clearInterval(a),clearTimeout(n),a=null,n=null}function D(V){e.value=Math.min(100,e.value+V)}function R(){_(),setTimeout(()=>{i.value=!1,setTimeout(()=>{e.value=0},400)},500)}function P(){a=setInterval(()=>{D(u.value)},100)}return{progress:e,isLoading:i,start:l,finish:d,clear:_}}const pt=Object.freeze(Object.defineProperty({__proto__:null,default:dt},Symbol.toStringTag,{value:"Module"})),ft=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(i,u)=>(J(()=>t({...ft(i),...u.attrs},u)),()=>{var a,n;return e?(n=(a=u.slots).default)==null?void 0:n.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ht=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const i={...t},u=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return u&&(i.children=u),{noscript:[i]}})}),vt=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),gt=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),Et=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var u,a,n;return{title:((n=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:n.children)||null}})}),ct=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),Pt=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,n,l;const i={...t},u=(l=(n=(a=e.default)==null?void 0:a.call(e))==null?void 0:n[0])==null?void 0:l.children;return u&&(i.children=u),{style:[i]}})}),yt=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var i,u;return(u=(i=e.slots).default)==null?void 0:u.call(i)}}),Tt=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),Ot=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,NoScript:ht,Link:vt,Base:gt,Title:Et,Meta:ct,Style:Pt,Head:yt,Html:Tt,Body:Ot},Symbol.toStringTag,{value:"Module"}));o(()=>r(()=>import("./alert.dbc23a64.js"),["./alert.dbc23a64.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./calendar.fe90889c.js"),["./calendar.fe90889c.js","./lodash.703fc263.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./dd.3213cacb.js"),["./dd.3213cacb.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./draggable.6c75f807.js"),["./draggable.6c75f807.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.a593ea99.js"),["./layout.a593ea99.js","./entry.240b01a2.js","./entry.b6f0b5be.css","./layout.e428cb53.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./monaco-diff.3fc063ac.js"),["./monaco-diff.3fc063ac.js","./entry.240b01a2.js","./entry.b6f0b5be.css","./monaco.34d3ba00.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./monaco.34d3ba00.js").then(t=>t.m),["./monaco.34d3ba00.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./qrcode.272ce7de.js"),["./qrcode.272ce7de.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./base.3e4441c7.js"),[],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./map.19243e9f.js"),["./map.19243e9f.js","./base.3e4441c7.js","./leaflet-src.0df1d26c.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./marker.d94721b1.js"),["./marker.d94721b1.js","./base.3e4441c7.js","./leaflet-src.0df1d26c.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./scene.2ca59ec4.js"),["./scene.2ca59ec4.js","./three.module.5769ac46.js","./matter.05c94999.js","./entry.240b01a2.js","./entry.b6f0b5be.css","./Pass.d57df072.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./content.e6292fb1.js"),["./content.e6292fb1.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentDoc.cbe6dcec.js").then(t=>t.C),["./ContentDoc.cbe6dcec.js","./entry.240b01a2.js","./entry.b6f0b5be.css","./ContentRenderer.5a5e8570.js","./ContentRendererMarkdown.37236ed0.js","./index.68c44503.js","./ContentQuery.4f7e1188.js","./utils.8ae52f9e.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentList.7ed61235.js"),["./ContentList.7ed61235.js","./ContentQuery.4f7e1188.js","./entry.240b01a2.js","./entry.b6f0b5be.css","./utils.8ae52f9e.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>Lt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentQuery.4f7e1188.js").then(t=>t.C),["./ContentQuery.4f7e1188.js","./entry.240b01a2.js","./entry.b6f0b5be.css","./utils.8ae52f9e.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentRenderer.5a5e8570.js"),["./ContentRenderer.5a5e8570.js","./ContentRendererMarkdown.37236ed0.js","./entry.240b01a2.js","./entry.b6f0b5be.css","./index.68c44503.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentRendererMarkdown.37236ed0.js"),["./ContentRendererMarkdown.37236ed0.js","./entry.240b01a2.js","./entry.b6f0b5be.css","./index.68c44503.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentSlot.a475e646.js"),["./ContentSlot.a475e646.js","./utils.8ae52f9e.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./DocumentDrivenEmpty.a2d0bd45.js"),["./DocumentDrivenEmpty.a2d0bd45.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./DocumentDrivenNotFound.8e630b7e.js"),["./DocumentDrivenNotFound.8e630b7e.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./Markdown.d7e015d4.js"),["./Markdown.d7e015d4.js","./ContentSlot.a475e646.js","./utils.8ae52f9e.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseA.0d2ee4c0.js"),["./ProseA.0d2ee4c0.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseBlockquote.a94be0cc.js"),["./ProseBlockquote.a94be0cc.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseCode.368ba5b8.js"),["./ProseCode.368ba5b8.js","./entry.240b01a2.js","./entry.b6f0b5be.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseCodeInline.d231e02d.js"),["./ProseCodeInline.d231e02d.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseEm.978df8e5.js"),["./ProseEm.978df8e5.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH1.ffe3871e.js"),["./ProseH1.ffe3871e.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH2.03c0abbc.js"),["./ProseH2.03c0abbc.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH3.eb4ac50f.js"),["./ProseH3.eb4ac50f.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH4.f3885d10.js"),["./ProseH4.f3885d10.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH5.8d65b5f0.js"),["./ProseH5.8d65b5f0.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH6.b809c678.js"),["./ProseH6.b809c678.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseHr.b386d926.js"),["./ProseHr.b386d926.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseImg.8c65cc14.js"),["./ProseImg.8c65cc14.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseLi.4d7ab710.js"),["./ProseLi.4d7ab710.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseOl.865c7168.js"),["./ProseOl.865c7168.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseP.e7524b20.js"),["./ProseP.e7524b20.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseStrong.3ae2de12.js"),["./ProseStrong.3ae2de12.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTable.fecf767f.js"),["./ProseTable.fecf767f.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTbody.eda4b999.js"),["./ProseTbody.eda4b999.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTd.1eb1ab32.js"),["./ProseTd.1eb1ab32.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTh.91bbcc7b.js"),["./ProseTh.91bbcc7b.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseThead.295c0f0e.js"),["./ProseThead.295c0f0e.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTr.dded9556.js"),["./ProseTr.dded9556.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseUl.1799bfa2.js"),["./ProseUl.1799bfa2.js","./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./welcome.66fa4388.js"),["./welcome.66fa4388.js","./ContentDoc.cbe6dcec.js","./entry.240b01a2.js","./entry.b6f0b5be.css","./ContentRenderer.5a5e8570.js","./ContentRendererMarkdown.37236ed0.js","./index.68c44503.js","./ContentQuery.4f7e1188.js","./utils.8ae52f9e.js","./lodash.703fc263.js","./leaflet-src.0df1d26c.js","./matter.05c94999.js","./three.module.5769ac46.js","./ContentList.7ed61235.js","./ContentSlot.a475e646.js","./DocumentDrivenEmpty.a2d0bd45.js","./DocumentDrivenNotFound.8e630b7e.js","./Markdown.d7e015d4.js","./ProseCode.368ba5b8.js","./ProseCode.e63e49c6.css","./layout.e428cb53.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>lt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>mt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./entry.240b01a2.js").then(t=>t.ab),["./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>pt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./entry.240b01a2.js").then(t=>t.ac),["./entry.240b01a2.js","./entry.b6f0b5be.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const St=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=w(t),i=c(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!i.value&&z("dd-navigation").value){const{navigation:a}=Y();return{navigation:a}}const{data:u}=await G(`content-navigation-${E(i.value)}`,()=>X(i.value));return{navigation:u}},render(t){const e=H(),{navigation:i}=t,u=l=>s(q,{to:l._path},()=>l.title),a=(l,d)=>s("ul",d?{"data-level":d}:null,l.map(_=>_.children?s("li",null,[u(_),a(_.children,d+1)]):s("li",null,u(_)))),n=l=>a(l,0);return e!=null&&e.default?e.default({navigation:i,...this.$attrs}):n(i)}}),Lt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"}));export{St as default};