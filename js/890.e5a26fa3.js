"use strict";(self["webpackChunkneurostate_cabinet"]=self["webpackChunkneurostate_cabinet"]||[]).push([[890],{1200:function(e,t,s){s.r(t),s.d(t,{default:function(){return z}});s(7658);var o=s(3396),r=s(7139),a=s.p+"img/google.b2539a72.svg",l=s.p+"img/facebook.5defcc00.svg";const i={class:"register"},n={action:"",class:"form"},u={class:"register-title"},m={class:"sponsor-email"},c={class:"register-from-socail-networks"},d=(0,o.uE)('<div class="register-from-socail-networks__buttons" data-v-b156cab4><button class="register-from-socail-networks__button" data-v-b156cab4><img src="'+a+'" alt="google" data-v-b156cab4></button><button class="register-from-socail-networks__button" data-v-b156cab4><img src="'+l+'" alt="facebook" data-v-b156cab4></button></div>',1),p={class:"have-account"};function _(e,t,s,a,l,_){const h=(0,o.up)("CustomInput");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("form",n,[(0,o._)("h2",u,(0,r.zw)(e.$localizeFilter("register")),1),(0,o.Wm)(h,{modelValue:e.fullName,errors:e.v$.fullName.$errors,title:e.$localizeFilter("full_name")+":","onUpdate:modelValue":t[0]||(t[0]=t=>{e.fullName=t,e.v$.fullName.$touch()})},null,8,["modelValue","errors","title"]),(0,o.Wm)(h,{modelValue:e.email,errors:e.v$.email.$errors,title:e.$localizeFilter("your_email"),"onUpdate:modelValue":t[1]||(t[1]=t=>{e.email=t,e.v$.email.$touch()})},null,8,["modelValue","errors","title"]),(0,o.Wm)(h,{modelValue:e.messengerLink,errors:e.v$.messengerLink.$errors,title:e.$localizeFilter("link_to_social_networks")+":","onUpdate:modelValue":t[2]||(t[2]=t=>{e.messengerLink=t,e.v$.messengerLink.$touch()})},null,8,["modelValue","errors","title"]),(0,o.Wm)(h,{modelValue:e.phoneNumber,errors:e.v$.phoneNumber.$errors,isPhone:!0,title:e.$localizeFilter("phone_number")+":","onUpdate:modelValue":t[3]||(t[3]=t=>{e.phoneNumber=t,e.v$.phoneNumber.$touch()})},null,8,["modelValue","errors","title"]),(0,o.Wm)(h,{modelValue:e.password,errors:e.v$.password.$errors,isPassword:!0,title:e.$localizeFilter("your_password"),"onUpdate:modelValue":t[4]||(t[4]=t=>{e.password=t,e.v$.password.$touch()})},null,8,["modelValue","errors","title"]),(0,o.Wm)(h,{modelValue:e.passwordAgain,errors:e.v$.passwordAgain.$errors,isPassword:!0,title:e.$localizeFilter("your_password_again")+":","onUpdate:modelValue":t[5]||(t[5]=t=>{e.passwordAgain=t,e.v$.passwordAgain.$touch()})},null,8,["modelValue","errors","title"]),(0,o._)("div",m,(0,r.zw)(e.$localizeFilter("sponsor_email",[e.sponsorEmail])),1),(0,o._)("div",c,[(0,o._)("p",null,(0,r.zw)(e.$localizeFilter("register_from_socail_networks")),1),d]),(0,o._)("button",{class:"button register-button",id:"submitButton",type:"button",onClick:t[6]||(t[6]=(...t)=>e.submitHandler&&e.submitHandler(...t))},(0,r.zw)(e.$localizeFilter("register_2")),1),(0,o._)("p",p,(0,r.zw)(e.$localizeFilter("have_account")),1),(0,o._)("button",{class:"login",type:"button",onClick:t[7]||(t[7]=t=>e.$router.push("/login"))},(0,r.zw)(e.$localizeFilter("login")),1)])])}var h=s(3053),g=s(9117),b=s(7389),$=s(9849),w=s(2848),f=(0,b.aZ)({components:{CustomInput:w.Z},data(){return{fullName:"",email:"",messengerLink:"",phoneNumber:"",password:"",passwordAgain:"",sponsorEmail:"official@neuro-state.com"}},setup(){return{v$:(0,h.ZP)()}},validations(){return{email:{required:g.BM.withMessage((0,$.Z)("field_must_not_be_empty"),g.C1),email:g.BM.withMessage((0,$.Z)("field_must_be_valid_email_address"),g.Do)},password:{required:g.BM.withMessage((0,$.Z)("field_must_not_be_empty"),g.C1)},fullName:{required:g.BM.withMessage((0,$.Z)("field_must_not_be_empty"),g.C1)},messengerLink:{required:g.BM.withMessage((0,$.Z)("field_must_not_be_empty"),g.C1)},phoneNumber:{required:g.BM.withMessage((0,$.Z)("field_must_not_be_empty"),g.C1)},passwordAgain:{required:g.BM.withMessage((0,$.Z)("error_password_again"),(0,g.sH)(this.password))}}},methods:{async submitHandler(){if(this.v$.$touch(),this.v$.$error)return;const e=document.getElementById("submitButton");e.classList.add("button--loading");const t={fullName:this.fullName,email:this.email,password:this.password,phoneNumber:this.phoneNumber,sponsorEmail:this.sponsorEmail,messengerLink:this.messengerLink};try{await this.$store.dispatch("register",t),await this.$store.dispatch("login",t);const{scope:s,email:o}=await this.$store.dispatch("getProfile");setTimeout((()=>{e.classList.remove("button--loading"),"not_activated_client"==s?this.$router.push("/confirmEmail?email="+o):this.$router.push("/cabinet")}),1e3)}catch(s){setTimeout((()=>{this.$error(s),e.classList.remove("button--loading"),this.buttonKey+=1}),1e3)}}},async mounted(){if(localStorage.getItem("sponsorReferralToken"))try{let{email:e}=await this.$store.dispatch("getEmailByReferralToken",localStorage.getItem("sponsorReferralToken"));this.sponsorEmail=e||"official@neuro-state.com"}catch(e){this.$error(e),this.sponsorEmail="official@neuro-state.com"}}}),v=s(89);const k=(0,v.Z)(f,[["render",_],["__scopeId","data-v-b156cab4"]]);var z=k}}]);