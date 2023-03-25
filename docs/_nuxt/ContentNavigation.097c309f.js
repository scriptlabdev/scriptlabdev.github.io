import{i as b,D as r,l as m,q as d,k as j,K as N,G as c,L as $,M as y,N as k,d as B,O as C,s as v,h as S,P as x,Q as L,f as A,e as T,R as w,S as o,E as M,U as z,m as H,_ as F}from"./entry.a4bbb83b.js";import{q,h as g,e as U,j as Q,u as G}from"./ContentQuery.3b8cc080.js";import{w as O,s as K,u as W,a as Y}from"./utils.1a4cba68.js";import"./index.242c7ac9.js";import"./layout.09a19292.js";import"./index.4c0c74d3.js";import"./matter.da218263.js";import{u as J}from"./ContentDoc.227ac478.js";import"./ContentList.715f06db.js";import"./ContentRenderer.84af8a94.js";import"./ContentRendererMarkdown.d19ba5d8.js";import"./ContentSlot.3c18f454.js";import"./DocumentDrivenEmpty.7683fadc.js";import"./DocumentDrivenNotFound.3c023cd5.js";import"./Markdown.e93ddb5b.js";import"./ProseCode.a7d79a26.js";import"./index.84164765.js";import"./Bookapp.96409075.js";import"./Calculator.3c4bb1aa.js";import"./info.5bab90c3.js";import"./info.75d63909.js";import"./three.module.71e54c61.js";import"./Pass.76f5b677.js";import"./info.377866b0.js";import"./info.55c89003.js";import"./index.d9eb55dc.js";import"./index.022fa1e4.js";import"./alert.ef826f05.js";import"./index.4c5ed706.js";import"./index.1c76fc3d.js";import"./index.68c44503.js";const X=async t=>{const{content:e}=b().public;typeof(t==null?void 0:t.params)!="function"&&(t=q(t));const i=t.params(),u=e.experimental.stripQueryParameters?O(`/navigation/${`${g(i)}.${e.integrity}`}/${U(i)}.json`):O(`/navigation/${g(i)}.${e.integrity}.json`);if(K())return(await r(()=>import("./client-db.a43733b0.js"),["./client-db.a43733b0.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./utils.1a4cba68.js","./ContentQuery.3b8cc080.js","./index.68c44503.js"],import.meta.url).then(l=>l.generateNavigation))(i);const a=await $fetch(u,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:Q(i),previewToken:W("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const I={site:()=>r(()=>import("./site.e61e8a06.js"),["./site.e61e8a06.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t)},Z=m({props:{name:String},async setup(t,e){const i=await I[t.name]().then(u=>u.default||u);return()=>d(i,{},e.slots)}}),tt=m({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const i=k("_route"),u=i===j()?N():i,a=c(()=>{var n,l;return(l=(n=B(t.name))!=null?n:u.meta.layout)!=null?l:"default"});return()=>{var p;const n=a.value&&a.value in I,l=(p=u.meta.layoutTransition)!=null?p:$;return y(C,n&&l,{default:()=>y(Z,n&&{key:a.value,name:a.value,hasTransition:void 0},e.slots).default()}).default()}}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),rt=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:i}){const u=v(null),a=S();return x(n=>{if(!a.isHydrating)return i("error",n),u.value=n,!1}),()=>{var n,l;return u.value?(n=e.error)==null?void 0:n.call(e,{error:u}):(l=e.default)==null?void 0:l.call(e)}}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"})),it=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:i}){const u=v(!1);return L(()=>{u.value=!0}),a=>{var _;if(u.value)return(_=e.default)==null?void 0:_.call(e);const n=e.fallback||e.placeholder;if(n)return n();const l=a.fallback||a.placeholder||"",p=a.fallbackTag||a.placeholderTag||"span";return A(p,i,l)}}}),E=new WeakMap;function nt(t){if(E.has(t))return E.get(t);const e={...t};return e.render?e.render=(i,...u)=>{var a;if(i.mounted$){const n=t.render(i,...u);return n.children===null||typeof n.children=="string"?T(n.type,n.props,n.children,n.patchFlag,n.dynamicProps,n.shapeFlag):d(n)}else return d("div",(a=i.$attrs)!=null?a:i._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(i,u)=>{var n;const a=v(!1);return L(()=>{a.value=!0}),Promise.resolve(((n=t.setup)==null?void 0:n.call(t,i,u))||{}).then(l=>typeof l!="function"?{...l,mounted$:a}:(...p)=>{if(a.value){const _=l(...p);return _.children===null||typeof _.children=="string"?T(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):d(_)}else return d("div",u.attrs)})},E.set(t,e),e}const at=Object.freeze(Object.defineProperty({__proto__:null,default:it,createClientOnly:nt},Symbol.toStringTag,{value:"Module"})),ut=m({name:"DevOnly",setup(t,e){return()=>null}}),lt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"})),_t=m({name:"ServerPlaceholder",render(){return A("div")}}),mt=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"})),pt=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const i=dt({duration:t.duration,throttle:t.throttle}),u=S();return u.hook("page:start",i.start),u.hook("page:finish",i.finish),w(()=>i.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${i.progress.value}%`,height:`${t.height}px`,opacity:i.isLoading.value?1:0,background:t.color,backgroundSize:`${100/i.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function dt(t){const e=v(0),i=v(!1),u=c(()=>1e4/t.duration);let a=null,n=null;function l(){_(),e.value=0,i.value=!0,t.throttle?n=setTimeout(P,t.throttle):P()}function p(){e.value=100,R()}function _(){clearInterval(a),clearTimeout(n),a=null,n=null}function D(V){e.value=Math.min(100,e.value+V)}function R(){_(),setTimeout(()=>{i.value=!1,setTimeout(()=>{e.value=0},400)},500)}function P(){a=setInterval(()=>{D(u.value)},100)}return{progress:e,isLoading:i,start:l,finish:p,clear:_}}const st=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"})),ft=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(i,u)=>(J(()=>t({...ft(i),...u.attrs},u)),()=>{var a,n;return e?(n=(a=u.slots).default)==null?void 0:n.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ht=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const i={...t},u=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return u&&(i.children=u),{noscript:[i]}})}),vt=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),Et=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),gt=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var u,a,n;return{title:((n=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:n.children)||null}})}),ct=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),Pt=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,n,l;const i={...t},u=(l=(n=(a=e.default)==null?void 0:a.call(e))==null?void 0:n[0])==null?void 0:l.children;return u&&(i.children=u),{style:[i]}})}),yt=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var i,u;return(u=(i=e.slots).default)==null?void 0:u.call(i)}}),Tt=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),Ot=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,NoScript:ht,Link:vt,Base:Et,Title:gt,Meta:ct,Style:Pt,Head:yt,Html:Tt,Body:Ot},Symbol.toStringTag,{value:"Module"}));o(()=>r(()=>import("./alert.ef826f05.js"),["./alert.ef826f05.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./calendar.bb8b1633.js"),["./calendar.bb8b1633.js","./index.242c7ac9.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.09a19292.js").then(t=>t.c),["./layout.09a19292.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.242c7ac9.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./dd.a9da5ce7.js"),["./dd.a9da5ce7.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./draggable.e1d4979c.js"),["./draggable.e1d4979c.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.09a19292.js").then(t=>t.i),["./layout.09a19292.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.242c7ac9.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.09a19292.js").then(t=>t.K),["./layout.09a19292.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.242c7ac9.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.09a19292.js").then(t=>t.j),["./layout.09a19292.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.242c7ac9.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.09a19292.js").then(t=>t.m),["./layout.09a19292.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.242c7ac9.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.09a19292.js").then(t=>t.A),["./layout.09a19292.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.242c7ac9.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.09a19292.js").then(t=>t.u),["./layout.09a19292.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.242c7ac9.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.09a19292.js").then(t=>t.v),["./layout.09a19292.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.242c7ac9.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./marker.6e349c70.js"),["./marker.6e349c70.js","./layout.09a19292.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.242c7ac9.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.09a19292.js").then(t=>t.w),["./layout.09a19292.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.242c7ac9.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./index.4c0c74d3.js").then(t=>t.c),["./index.4c0c74d3.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.86acb3d5.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.09a19292.js").then(t=>t.F),["./layout.09a19292.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.242c7ac9.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./layout.09a19292.js").then(t=>t.G),["./layout.09a19292.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.242c7ac9.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentDoc.227ac478.js").then(t=>t.C),["./ContentDoc.227ac478.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./ContentRenderer.84af8a94.js","./ContentRendererMarkdown.d19ba5d8.js","./index.68c44503.js","./ContentQuery.3b8cc080.js","./utils.1a4cba68.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentList.715f06db.js"),["./ContentList.715f06db.js","./ContentQuery.3b8cc080.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./utils.1a4cba68.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>Lt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentQuery.3b8cc080.js").then(t=>t.C),["./ContentQuery.3b8cc080.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./utils.1a4cba68.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentRenderer.84af8a94.js"),["./ContentRenderer.84af8a94.js","./ContentRendererMarkdown.d19ba5d8.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.68c44503.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentRendererMarkdown.d19ba5d8.js"),["./ContentRendererMarkdown.d19ba5d8.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./index.68c44503.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentSlot.3c18f454.js"),["./ContentSlot.3c18f454.js","./utils.1a4cba68.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./DocumentDrivenEmpty.7683fadc.js"),["./DocumentDrivenEmpty.7683fadc.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./DocumentDrivenNotFound.3c023cd5.js"),["./DocumentDrivenNotFound.3c023cd5.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./Markdown.e93ddb5b.js"),["./Markdown.e93ddb5b.js","./ContentSlot.3c18f454.js","./utils.1a4cba68.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseA.32b1889c.js"),["./ProseA.32b1889c.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseBlockquote.b73f7765.js"),["./ProseBlockquote.b73f7765.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseCode.a7d79a26.js"),["./ProseCode.a7d79a26.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseCodeInline.2fd055fd.js"),["./ProseCodeInline.2fd055fd.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseEm.e09be531.js"),["./ProseEm.e09be531.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH1.538615f0.js"),["./ProseH1.538615f0.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH2.da18b1be.js"),["./ProseH2.da18b1be.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH3.7dfd9819.js"),["./ProseH3.7dfd9819.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH4.c74454db.js"),["./ProseH4.c74454db.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH5.1cf221dc.js"),["./ProseH5.1cf221dc.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH6.ee1a992d.js"),["./ProseH6.ee1a992d.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseHr.8c539423.js"),["./ProseHr.8c539423.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseImg.a8c61b06.js"),["./ProseImg.a8c61b06.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseLi.73c40d21.js"),["./ProseLi.73c40d21.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseOl.954f5dc1.js"),["./ProseOl.954f5dc1.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseP.245e9e47.js"),["./ProseP.245e9e47.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseStrong.4e6a1695.js"),["./ProseStrong.4e6a1695.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTable.3e3a7568.js"),["./ProseTable.3e3a7568.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTbody.9e379574.js"),["./ProseTbody.9e379574.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTd.361edd75.js"),["./ProseTd.361edd75.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTh.95780808.js"),["./ProseTh.95780808.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseThead.f5dbd9cb.js"),["./ProseThead.f5dbd9cb.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTr.d12f2c86.js"),["./ProseTr.d12f2c86.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseUl.55e88a69.js"),["./ProseUl.55e88a69.js","./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./welcome.fe701890.js"),["./welcome.fe701890.js","./ContentDoc.227ac478.js","./entry.a4bbb83b.js","./entry.873adaa1.css","./ContentRenderer.84af8a94.js","./ContentRendererMarkdown.d19ba5d8.js","./index.68c44503.js","./ContentQuery.3b8cc080.js","./utils.1a4cba68.js","./index.242c7ac9.js","./layout.09a19292.js","./index.84164765.js","./Bookapp.96409075.js","./Calculator.3c4bb1aa.js","./index.4c0c74d3.js","./index.86acb3d5.css","./info.5bab90c3.js","./info.75d63909.js","./three.module.71e54c61.js","./matter.da218263.js","./Pass.76f5b677.js","./info.377866b0.js","./info.55c89003.js","./index.d9eb55dc.js","./index.022fa1e4.js","./alert.ef826f05.js","./index.4c5ed706.js","./index.1c76fc3d.js","./layout.9ae061b9.css","./ContentList.715f06db.js","./ContentSlot.3c18f454.js","./DocumentDrivenEmpty.7683fadc.js","./DocumentDrivenNotFound.3c023cd5.js","./Markdown.e93ddb5b.js","./ProseCode.a7d79a26.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>lt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>mt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./entry.a4bbb83b.js").then(t=>t.ac),["./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>st),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./entry.a4bbb83b.js").then(t=>t.ad),["./entry.a4bbb83b.js","./entry.873adaa1.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));o(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const St=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=M(t),i=c(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!i.value&&z("dd-navigation").value){const{navigation:a}=Y();return{navigation:a}}const{data:u}=await G(`content-navigation-${g(i.value)}`,()=>X(i.value));return{navigation:u}},render(t){const e=H(),{navigation:i}=t,u=l=>d(F,{to:l._path},()=>l.title),a=(l,p)=>d("ul",p?{"data-level":p}:null,l.map(_=>_.children?d("li",null,[u(_),a(_.children,p+1)]):d("li",null,u(_)))),n=l=>a(l,0);return e!=null&&e.default?e.default({navigation:i,...this.$attrs}):n(i)}}),Lt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"}));export{St as default};