import{q as v,w as f,h as c,e as m,s as l,j as d,a as g,u as y}from"./query.df1aa2ff.js";import{bk as h,aL as _,G as w,bQ as C,k as b,N,bl as P,u as $,bu as x,R as p,bZ as E}from"./entry.43339234.js";import{u as T}from"./preview.39fa015f.js";const j="$s";function R(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=j+n,r=w(),s=h(r.payload.state,a);if(s.value===void 0&&o){const i=o();if(_(i))return r.payload.state[a]=i,i;s.value=i}return s}const S=async t=>{const{content:e}=C().public;typeof(t==null?void 0:t.params)!="function"&&(t=v(t));const n=t.params(),o=e.experimental.stripQueryParameters?f(`/navigation/${`${c(n)}.${e.integrity}`}/${m(n)}.json`):f(`/navigation/${c(n)}.${e.integrity}.json`);if(l())return(await b(()=>import("./client-db.c73a2bc3.js"),["./client-db.c73a2bc3.js","./entry.43339234.js","./entry.36f4731a.css","./query.df1aa2ff.js","./preview.39fa015f.js","./index.b0fe9fac.js"],import.meta.url).then(s=>s.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:d(n),previewToken:T().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},k=N({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=P(t),n=$(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&R("dd-navigation").value){const{navigation:a}=g();return{navigation:a}}const{data:o}=await y(`content-navigation-${c(n.value)}`,()=>S(n.value));return{navigation:o}},render(t){const e=x(),{navigation:n}=t,o=s=>p(E,{to:s._path},()=>s.title),a=(s,i)=>p("ul",i?{"data-level":i}:null,s.map(u=>u.children?p("li",null,[o(u),a(u.children,i+1)]):p("li",null,o(u)))),r=s=>a(s,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),A=k;export{A as default};