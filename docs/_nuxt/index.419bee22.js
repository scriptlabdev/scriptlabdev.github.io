import{_ as u}from"./monaco.34d3ba00.js";import c from"./monaco-diff.3fc063ac.js";import v from"./layout.a593ea99.js";import{W as g,o as h,c as V,w as n,a1 as w,a as i,e as d,r as m}from"./entry.240b01a2.js";/* empty css                                               */const y={meta:{active:!0,icon:"mdi-set-left",name:"Ferramenta diff",description:"Compara\xE7\xE3o de c\xF3digos, textos e afins"},data:()=>({original:"",modified:""}),methods:{parseDiffGit(e){if(console.clear(),["<<<<<<<","=======",">>>>>>>"].map(o=>e.includes(o)?1:0).join("")==111){let[o,t]=e.split("=======");o=o.split(`
`),o.shift(),this.original=o.join(`
`),t=t.split(`
`),t.pop(),this.modified=t.join(`
`)}}}},D=d("div",null,"Original",-1),$=d("div",null,"Modified",-1),j=d("div",null,"Diff",-1);function B(e,o,t,C,k,r){const s=u,a=m("v-col"),f=c,_=m("v-row"),p=v;return h(),V(p,w({title:"Diff"},{drawerShow:!1,fluid:!1}),{default:n(()=>[i(_,null,{default:n(()=>[i(a,{cols:"12",md:"6"},{default:n(()=>[D,i(s,{style:{height:"40vh"},modelValue:e.original,"onUpdate:modelValue":[o[0]||(o[0]=l=>e.original=l),o[1]||(o[1]=l=>r.parseDiffGit(l))]},null,8,["modelValue"])]),_:1}),i(a,{cols:"12",md:"6"},{default:n(()=>[$,i(s,{style:{height:"40vh"},modelValue:e.modified,"onUpdate:modelValue":o[2]||(o[2]=l=>e.modified=l)},null,8,["modelValue"])]),_:1}),i(a,{cols:"12",md:"12"},{default:n(()=>[j,i(f,{style:{height:"40vh"},"model-value":e.original,modified:e.modified},null,8,["model-value","modified"])]),_:1})]),_:1})]),_:1},16)}const F=g(y,[["render",B]]);export{F as default};