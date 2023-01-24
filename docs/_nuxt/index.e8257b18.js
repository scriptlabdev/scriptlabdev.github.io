import{_ as B}from"./alert.8e15dd61.js";import{_ as T}from"./layout.0997a75b.js";import{a as F,A as N,c as S,w as o,o as d,b as z,l as f,s as A,F as D,e,f as _,t as b,r as t,B as E}from"./entry.65fd9d93.js";const L={methods:{colorClasses(){const c=[],a=["primary","secondary","warning","error","info"],i=[...a,"black","grey","red","pink","purple","deep-purple","indigo","blue","light-blue","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","blue-grey","grey"];for(let l of i){c.push({name:`${l}`,bg:`bg-${l}`,text:`text-${l}`});for(let n of["lighten","darken","accent"])for(let s of[1,2,3,4,5])a.includes(l)&&["lighten","accent"].includes(n)||a.includes(l)&&["darken"].includes(n)&&[2,3,4,5].includes(s)||c.push({name:`${l}-${n}-${s}`,bg:`bg-${l}-${n}-${s}`,text:`text-${l}-${n}-${s}`})}return c}},data(){return{tab:"bg",useClipboard:N()}}},P={class:"d-flex flex-wrap"},U=["onClick"];function j(c,a,i,l,n,s){const v=t("v-toolbar-title"),p=t("v-btn"),x=t("v-toolbar"),u=t("v-text-field"),g=t("v-textarea"),y=t("v-card-text"),C=t("v-divider"),$=t("v-card-actions"),w=t("v-card"),m=t("v-col"),k=t("v-row"),h=B,V=T;return d(),S(V,null,{drawer:o(()=>[z("div",P,[(d(!0),f(D,null,A(s.colorClasses(),r=>(d(),f("div",{class:E([r.bg,"py-1","px-2"]),onClick:q=>n.useClipboard.copy(r.name)},b(r.bg),11,U))),256))])]),default:o(()=>[e(k,{class:"pa-5"},{default:o(()=>[e(m,{cols:"12",md:"3"},{default:o(()=>[e(w,null,{default:o(()=>[e(x,{density:"compact"},{default:o(()=>[e(v,null,{default:o(()=>[_("Form")]),_:1}),e(p,{icon:"mdi-logout"})]),_:1}),e(y,null,{default:o(()=>[e(u,{label:"Text field"}),e(u,{label:"Password",type:"password"}),e(g,{label:"Textarea"})]),_:1}),e(C),e($,null,{default:o(()=>[e(p,{color:"success"},{default:o(()=>[_("Save")]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{cols:"12",md:"9"},{default:o(()=>[_(" -- ")]),_:1})]),_:1}),e(h,{modelValue:n.useClipboard.copied,"onUpdate:modelValue":a[0]||(a[0]=r=>n.useClipboard.copied=r),type:"snackbar",color:"success"},{default:o(()=>[_(" Texto copiado: "+b(n.useClipboard.text),1)]),_:1},8,["modelValue"])]),_:1})}const J=F(L,[["render",j]]);export{J as default};