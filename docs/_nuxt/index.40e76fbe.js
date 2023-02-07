import f from"./qrcode.272ce7de.js";import E from"./layout.a593ea99.js";import{W as b,o as s,c as g,w as o,a as l,b as v,t as r,e as m,f as q,g as I,F as R,r as i}from"./entry.240b01a2.js";/* empty css                                               */const D={meta:{active:!0,icon:"mdi-qrcode",name:"QR Code",description:"Gerador dos principais tipos de QRcode"},computed:{type:{get(){let e=this.$route.query.type||"text";return this.types.filter(y=>y.id==e)[0]||!1},set(){}}},methods:{log:console.log},data(){return{qrtext:"",types:[{id:"text",name:"Texto",icon:"mdi-format-color-text",text:"Hello World :)",onChange:e=>{this.qrtext=e.text}},{id:"url",name:"URL",icon:"mdi-link",url:"",onChange:e=>{this.qrtext=e.url}},{id:"wifi",name:"WIFI",icon:"mdi-wifi",ssid:"",type:"WPA",pass:"",onChange:e=>{this.qrtext=`WIFI:S:${e.ssid};T:${e.type};P:${e.pass};;`}},{id:"vcard",name:"Cart\xE3o de contato",icon:"mdi-card-account-details",firstName:"",lastName:"",companyName:"",jobTitle:"",address:"",city:"",state:"",zipcode:"",country:"",phone:"",mobile:"",email:"",website:"",onChange:e=>{this.qrtext=["BEGIN:VCARD","VERSION:3.0",`N:${e.lastName};${e.firstName}`,`FN:${e.firstName} ${e.lastName}`,`ORG:${e.companyName}`,`TITLE:${e.jobTitle}`,`ADR:;;${e.address};${e.city};${e.state};${e.zipcode};${e.country}`,`TEL;WORK;VOICE:${e.phone}`,`TEL;CELL:${e.mobile}`,"TEL;FAX:",`EMAIL;WORK;INTERNET:${e.email}`,`URL:${e.website}`,"END:VCARD"].join(`
`)}},{id:"event",name:"Evento",icon:"mdi-calendar",summary:"",dateStart:"",dateFinal:"",onChange:e=>{this.qrtext=["BEGIN:VEVENT","SUMMARY:Independence Day Parades","DTSTART:20150323T090000","DTEND:20150323T110000","END:VEVENT"].join(`
`)}},{id:"sms",name:"SMS",icon:"mdi-check",mobile:"",message:"",onChange:e=>{this.qrtext=`SMSTO:+${e.mobile.replace(/[^0-9]/g,"")}:${e.message}`}},{id:"phone",name:"Liga\xE7\xE3o",icon:"mdi-message-processing",phone:"",onChange:e=>{this.qrtext=`tel:${e.phone.replace(/[^0-9]/g,"")}`}},{id:"geo",name:"Geo posicionamento",icon:"mdi-map-marker",lat:0,lng:0,onChange:e=>{this.qrtext=`geo:${e.lat},${e.lng}`},getGeolocation:async e=>{navigator.geolocation.getCurrentPosition(t=>{e.lat=t.coords.latitude,e.lng=t.coords.longitude,this.generate()},()=>{},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},onMapMove:(e,t)=>{t.lat=e.latlng.lat,t.lng=e.latlng.lng,this.generate()}},{id:"pix",name:"PIX",icon:"mdi-currency-usd",key:"john@doe.com",city:"Bras\xEDlia",fullName:"John Doe",value:"100.00",message:"Presentinho pra voc\xEA :)",onChange:e=>{this.qrtext=this.pixClass(e)}}]}}},L={class:"ms-3"};function S(e,t,y,U,p,n){const _=i("v-icon"),x=i("v-toolbar-title"),u=i("v-text-field"),d=i("v-window-item"),V=i("v-window"),c=i("v-col"),C=f,N=i("v-row"),T=i("v-list-item"),h=i("v-list"),w=E;return s(),g(w,{"container-card":!1,"container-style":"max-width: 1000px;"},{appbar:o(()=>[l(x,null,{default:o(()=>[l(_,null,{default:o(()=>[v(r(n.type.icon),1)]),_:1}),m("span",L,r(n.type.name),1)]),_:1})]),drawer:o(()=>[l(h,null,{default:o(()=>[(s(!0),q(R,null,I(p.types,a=>(s(),g(T,{key:a.id,to:{...e.$route,query:{type:a.id}},"prepend-icon":a.icon,active:a.id==(e.$route.query.type||"text")},{default:o(()=>[v(r(a.name),1)]),_:2},1032,["to","prepend-icon","active"]))),128))]),_:1})]),default:o(()=>[l(N,{class:"align-center"},{default:o(()=>[l(c,{cols:"12",md:"7"},{default:o(()=>[l(V,{"model-value":e.$route.query.type||"text","onUpdate:modelValue":t[11]||(t[11]=a=>n.type.onChange(n.type)),class:"pt-1"},{default:o(()=>[l(d,{value:"text","onGroup:selected":t[2]||(t[2]=a=>n.type.onChange(n.type))},{default:o(()=>[l(u,{modelValue:n.type.text,"onUpdate:modelValue":t[0]||(t[0]=a=>n.type.text=a),label:"Texto",onInput:t[1]||(t[1]=a=>n.type.onChange(n.type))},null,8,["modelValue"])]),_:1}),l(d,{value:"url"},{default:o(()=>[l(u,{modelValue:n.type.url,"onUpdate:modelValue":t[3]||(t[3]=a=>n.type.url=a),label:"URL",onInput:t[4]||(t[4]=a=>n.type.onChange(n.type))},null,8,["modelValue"])]),_:1}),l(d,{value:"wifi"},{default:o(()=>[l(u,{modelValue:n.type.ssid,"onUpdate:modelValue":t[5]||(t[5]=a=>n.type.ssid=a),label:"SSID",onInput:t[6]||(t[6]=a=>n.type.onChange(n.type))},null,8,["modelValue"]),l(u,{modelValue:n.type.type,"onUpdate:modelValue":t[7]||(t[7]=a=>n.type.type=a),label:"Type",onInput:t[8]||(t[8]=a=>n.type.onChange(n.type))},null,8,["modelValue"]),l(u,{modelValue:n.type.pass,"onUpdate:modelValue":t[9]||(t[9]=a=>n.type.pass=a),label:"Password",type:"password",onInput:t[10]||(t[10]=a=>n.type.onChange(n.type))},null,8,["modelValue"])]),_:1}),l(d,{value:"vcard"},{default:o(()=>[m("pre",null,"vcard: "+r(n.type),1)]),_:1}),l(d,{value:"event"},{default:o(()=>[m("pre",null,"event: "+r(n.type),1)]),_:1}),l(d,{value:"sms"},{default:o(()=>[m("pre",null,"sms: "+r(n.type),1)]),_:1}),l(d,{value:"phone"},{default:o(()=>[m("pre",null,"phone: "+r(n.type),1)]),_:1}),l(d,{value:"geo"},{default:o(()=>[m("pre",null,"geo: "+r(n.type),1)]),_:1}),l(d,{value:"pix"},{default:o(()=>[m("pre",null,"pix: "+r(n.type),1)]),_:1})]),_:1},8,["model-value"])]),_:1}),l(c,{cols:"12",md:"5"},{default:o(()=>[l(C,{modelValue:p.qrtext,"onUpdate:modelValue":t[12]||(t[12]=a=>p.qrtext=a),width:"100%"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}const G=b(D,[["render",S]]);export{G as default};