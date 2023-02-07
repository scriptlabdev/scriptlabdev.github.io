import{W as z,o as d,c,w as t,r as o,a as e,e as _,a1 as $,f as B,g as F,b as p,t as v,F as C,Y as N}from"./entry.240b01a2.js";import j from"./index.4d1994d8.js";import D from"./index.8230a84c.js";import O from"./index.7763a4f3.js";import q from"./index.da914fd2.js";import E from"./index.c6823726.js";import H from"./index.419bee22.js";import L from"./index.9f31dbe6.js";import P from"./index.920c6d11.js";import S from"./index.3cdbeca0.js";import T from"./index.08093ac7.js";import U from"./index.70f51d82.js";import W from"./index.c1f7764e.js";import Y from"./index.00c76ab6.js";import A from"./index.6adb8b7c.js";import G from"./index.b7cbd0b4.js";import I from"./index.8cb3f1e8.js";import J from"./index.4e43c6a5.js";import K from"./index.40e76fbe.js";import M from"./index.148073f2.js";import Q from"./index.43597954.js";import R from"./index.caf3430e.js";import X from"./index.f471f589.js";import"./layout.a593ea99.js";/* empty css                                               */import"./index.d604137d.js";import"./index.39c6c6fd.js";import"./monaco.34d3ba00.js";import"./Bookapp.96409075.js";import"./lodash.703fc263.js";import"./Calculator.3c4bb1aa.js";import"./calendar.fe90889c.js";import"./info.5bab90c3.js";import"./info.75d63909.js";import"./monaco-diff.3fc063ac.js";import"./scene.2ca59ec4.js";import"./three.module.5769ac46.js";import"./matter.05c94999.js";import"./Pass.d57df072.js";import"./Test.e8b0bd2e.js";import"./Car4.5e65c8dd.js";import"./extendedObject3D.5501ae1b.js";import"./map.19243e9f.js";import"./base.3e4441c7.js";import"./leaflet-src.0df1d26c.js";import"./qrcode.272ce7de.js";import"./info.377866b0.js";import"./info.55c89003.js";import"./alert.dbc23a64.js";const Z={data(){return{filter:"",pages:(()=>Object.entries(Object.assign({"./index/base/index.vue":j,"./index/bookapp/index.vue":D,"./index/calcdiv/index.vue":O,"./index/clockify/index.vue":q,"./index/clone/index.vue":E,"./index/diff/index.vue":H,"./index/enable3d/index.vue":L,"./index/filesize-generator/index.vue":P,"./index/laramake/index.vue":S,"./index/lotto/index.vue":T,"./index/map/index.vue":U,"./index/mbti/index.vue":W,"./index/meme/index.vue":Y,"./index/openapi/index.vue":A,"./index/osm/index.vue":G,"./index/paste/index.vue":I,"./index/print3d/index.vue":J,"./index/qrcode/index.vue":K,"./index/search/index.vue":M,"./index/text/index.vue":Q,"./index/vuetify/index.vue":R,"./index/whatsapp/index.vue":X})).filter(([i,r])=>!!r.meta).map(([i,r])=>({slug:i.split("/").at(-2).replace(/^index$/g,""),icon:"mdi-circle",name:"Default",active:!1,order:0,...r.meta||{}})).sort((i,r)=>i.order<r.order?-1:i.order>r.order?1:0))()}}},ee={style:{position:"fixed",bottom:"30px",right:"30px","z-index":"999!important"}},te={class:"mb-4",style:{width:"350px","max-width":"90vh"}},oe={class:"pa-2",style:{"max-height":"calc(70vh - 70px)",overflow:"auto"}},ie={class:"text-center"},_e=_("div",{class:"my-1"},null,-1),re={style:{"font-size":"8px","white-space":"normal"}},ne=_("span",{class:"ms-3"},"Current page source",-1),le=_("span",{class:"ms-3"},"Home",-1);function me(s,i,r,se,l,ae){const u=N,f=o("v-text-field"),x=o("v-divider"),a=o("v-icon"),m=o("v-btn"),g=o("v-col"),b=o("v-row"),h=o("v-card"),y=o("v-img"),k=o("v-avatar"),w=o("v-menu"),V=o("v-layout");return d(),c(V,{class:"bg-grey-lighten-3"},{default:t(()=>[e(u),_("div",ee,[e(w,{"close-on-content-click":!1},{activator:t(({props:n})=>[e(m,$(n,{icon:"",size:"55",flat:""}),{default:t(()=>[e(k,{size:"50"},{default:t(()=>[e(y,{src:"/assets/labscript.dev.png"})]),_:1})]),_:2},1040)]),default:t(()=>[_("div",te,[e(h,null,{default:t(()=>[e(f,{modelValue:l.filter,"onUpdate:modelValue":i[0]||(i[0]=n=>l.filter=n),label:"Filtro","hide-details":!0,class:"ma-2"},null,8,["modelValue"]),e(x),_("div",oe,[e(b,{"no-gutters":""},{default:t(()=>[(d(!0),B(C,null,F(s.$filter.arrayFilter(l.filter,l.pages),n=>(d(),c(g,{cols:"6",md:"4",class:"pa-1"},{default:t(()=>[e(m,{block:"",style:{height:"100px"},to:`/lab/${n.slug}`},{default:t(()=>[_("div",ie,[e(a,null,{default:t(()=>[p(v(n.icon),1)]),_:2},1024),_e,_("small",re,v(n.name),1)])]),_:2},1032,["to"])]),_:2},1024))),256))]),_:1})]),e(m,{block:"",href:`https://github.com/labscriptdev/labscriptdev.github.io/tree/main/pages/demo/index/${s.$route.path.replace("/demo/","")}`,target:"_blank",color:"primary",rounded:"0"},{default:t(()=>[e(a,null,{default:t(()=>[p("mdi-xml")]),_:1}),ne]),_:1},8,["href"]),e(m,{block:"",to:"/",rounded:"0"},{default:t(()=>[e(a,null,{default:t(()=>[p("mdi-home")]),_:1}),le]),_:1})]),_:1})])]),_:1})])]),_:1})}const nt=z(Z,[["render",me]]);export{nt as default};