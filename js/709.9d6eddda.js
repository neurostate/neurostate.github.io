"use strict";(self["webpackChunkneurostate_cabinet"]=self["webpackChunkneurostate_cabinet"]||[]).push([[709],{6407:function(e,o,s){s.r(o),s.d(o,{default:function(){return F}});s(7658);var t=s(3396),r=s(7139),l=s.p+"img/google.b2539a72.svg",a=s.p+"img/facebook.5defcc00.svg";const i=e=>((0,t.dD)("data-v-150a2798"),e=e(),(0,t.Cn)(),e),n={class:"register"},u={action:"",class:"form"},m={class:"register-title"},c={class:"sponsor-email"},d={class:"register-from-socail-networks"},p={class:"register-from-socail-networks__buttons"},g=i((()=>(0,t._)("img",{src:l,alt:"google"},null,-1))),h=[g],_=i((()=>(0,t._)("button",{class:"register-from-socail-networks__button"},[(0,t._)("img",{src:a,alt:"facebook"})],-1))),$={class:"have-account"};function w(e,o,s,l,a,i){const g=(0,t.up)("CustomInput");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("form",u,[(0,t._)("h2",m,(0,r.zw)(e.$localizeFilter("register")),1),(0,t.Wm)(g,{modelValue:e.fullName,errors:e.v$.fullName.$errors,title:"*"+e.$localizeFilter("full_name")+":","onUpdate:modelValue":o[0]||(o[0]=o=>{e.fullName=o,e.v$.fullName.$touch()})},null,8,["modelValue","errors","title"]),(0,t.Wm)(g,{modelValue:e.email,errors:e.v$.email.$errors,title:"*"+e.$localizeFilter("your_email"),"onUpdate:modelValue":o[1]||(o[1]=o=>{e.email=o,e.v$.email.$touch()})},null,8,["modelValue","errors","title"]),(0,t.Wm)(g,{modelValue:e.messengerLink,errors:e.v$.messengerLink.$errors,title:e.$localizeFilter("link_to_social_networks")+":","onUpdate:modelValue":o[2]||(o[2]=o=>{e.messengerLink=o,e.v$.messengerLink.$touch()})},null,8,["modelValue","errors","title"]),(0,t.Wm)(g,{modelValue:e.phoneNumber,errors:e.v$.phoneNumber.$errors,isPhone:!0,title:e.$localizeFilter("phone_number")+":","onUpdate:modelValue":o[3]||(o[3]=o=>{e.phoneNumber=o,e.v$.phoneNumber.$touch()})},null,8,["modelValue","errors","title"]),(0,t.Wm)(g,{modelValue:e.password,errors:e.v$.password.$errors,isPassword:!0,title:"*"+e.$localizeFilter("your_password"),"onUpdate:modelValue":o[4]||(o[4]=o=>{e.password=o,e.v$.password.$touch()})},null,8,["modelValue","errors","title"]),(0,t.Wm)(g,{modelValue:e.passwordAgain,errors:e.v$.passwordAgain.$errors,isPassword:!0,title:"*"+e.$localizeFilter("your_password_again")+":","onUpdate:modelValue":o[5]||(o[5]=o=>{e.passwordAgain=o,e.v$.passwordAgain.$touch()})},null,8,["modelValue","errors","title"]),(0,t._)("div",c,(0,r.zw)(e.$localizeFilter("sponsor_email",[e.sponsorEmail])),1),(0,t._)("div",d,[(0,t._)("p",null,(0,r.zw)(e.$localizeFilter("register_from_socail_networks")),1),(0,t._)("div",p,[(0,t._)("button",{class:"register-from-socail-networks__button",onClick:o[6]||(o[6]=(...o)=>e.googleAuth&&e.googleAuth(...o))},h),_])]),(0,t._)("button",{class:"button register-button",id:"submitButton",type:"button",onClick:o[7]||(o[7]=(...o)=>e.submitHandler&&e.submitHandler(...o))},(0,r.zw)(e.$localizeFilter("register_2")),1),(0,t._)("p",$,(0,r.zw)(e.$localizeFilter("have_account")),1),(0,t._)("button",{class:"login",type:"button",onClick:o[8]||(o[8]=o=>e.$router.push("/login"))},(0,r.zw)(e.$localizeFilter("login")),1)])])}var f=s(3053),b=s(9117),v=s(7389),k=s(9849),z=s(2848),V=(s(6070),(0,v.aZ)({components:{CustomInput:z.Z},data(){return{fullName:"",email:"",messengerLink:"",phoneNumber:"",password:"",passwordAgain:"",sponsorEmail:"official@neuro-state.com"}},setup(){return{v$:(0,f.ZP)()}},validations(){return{email:{required:b.BM.withMessage((0,k.Z)("field_must_not_be_empty"),b.C1),email:b.BM.withMessage((0,k.Z)("field_must_be_valid_email_address"),b.Do)},password:{required:b.BM.withMessage((0,k.Z)("field_must_not_be_empty"),b.C1)},fullName:{required:b.BM.withMessage((0,k.Z)("field_must_not_be_empty"),b.C1)},messengerLink:{},phoneNumber:{},passwordAgain:{required:b.BM.withMessage((0,k.Z)("error_password_again"),(0,b.sH)(this.password))}}},methods:{googleAuth(){location.href=location.origin+"/auth/google?sponsorEmail="+this.sponsorEmail},async submitHandler(){if(this.v$.$touch(),this.v$.$error)return;const e=document.getElementById("submitButton");e.classList.add("button--loading");const o={fullName:this.fullName,email:this.email,password:this.password,phoneNumber:this.phoneNumber,sponsorEmail:this.sponsorEmail,messengerLink:this.messengerLink};try{await this.$store.dispatch("register",o),await this.$store.dispatch("login",o);const{scope:s,email:t}=await this.$store.dispatch("getProfile");setTimeout((()=>{e.classList.remove("button--loading"),"not_activated_client"==s?this.$router.push("/confirmEmail?email="+t):this.$router.push("/cabinet")}),1e3)}catch(s){setTimeout((()=>{this.$error(s),e.classList.remove("button--loading"),this.buttonKey+=1}),1e3)}}},async mounted(){if(localStorage.getItem("sponsorReferralToken"))try{let{email:e}=await this.$store.dispatch("getEmailByReferralToken",localStorage.getItem("sponsorReferralToken"));this.sponsorEmail=e||"official@neuro-state.com"}catch(e){this.$error(e),this.sponsorEmail="official@neuro-state.com"}}})),N=s(89);const y=(0,N.Z)(V,[["render",w],["__scopeId","data-v-150a2798"]]);var F=y}}]);