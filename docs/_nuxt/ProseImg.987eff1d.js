import{l as i,s as a,k as n,o as c,f as o,d as h}from"./entry.317c5f87.js";import{c as u}from"./index.17a7ea7e.js";const d=["src","alt","width","height"],g=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,s=a(()=>{var r;return(r=e.src)!=null&&r.startsWith("/")&&!e.src.startsWith("//")?u(e.src,n().app.baseURL):e.src});return(r,l)=>(c(),o("img",{src:h(s),alt:t.alt,width:t.width,height:t.height},null,8,d))}});export{g as default};