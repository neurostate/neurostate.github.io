"use strict";(self["webpackChunkneurostate_cabinet"]=self["webpackChunkneurostate_cabinet"]||[]).push([[549],{1362:function(t,e,s){s.r(e),s.d(e,{default:function(){return $}});s(7658);var o=s(3396),r=s(7139);const i={class:"restore-password"},a={class:"container"},n={class:"form"},u={class:"form__header"};function l(t,e,s,l,d,c){const m=(0,o.up)("CustomInput");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",a,[(0,o._)("form",n,[(0,o._)("button",{type:"button",class:"close-btn",onClick:e[0]||(e[0]=e=>t.$router.push("/login"))}),(0,o._)("div",u,(0,r.zw)(t.$localizeFilter("password_restore")),1),(0,o.Wm)(m,{modelValue:t.email,errors:t.v$.email.$errors,title:t.$localizeFilter("restore_password_enter_email"),"onUpdate:modelValue":e[1]||(e[1]=e=>{t.email=e,t.v$.email.$touch()})},null,8,["modelValue","errors","title"]),(0,o._)("button",{type:"button",id:"submitButton",class:"button",onClick:e[2]||(e[2]=(...e)=>t.submitHandler&&t.submitHandler(...e))},(0,r.zw)(t.$localizeFilter("restore_password_button")),1)])])])}var d=s(3053),c=s(9117),m=s(7389),_=s(9849),b=s(2848),h=(0,m.aZ)({components:{CustomInput:b.Z},setup(){return{v$:(0,d.ZP)()}},data(){return{email:""}},validations(){return{email:{required:c.BM.withMessage((0,_.Z)("field_must_not_be_empty"),c.C1),email:c.BM.withMessage((0,_.Z)("field_must_be_valid_email_address"),c.Do)}}},methods:{async submitHandler(){if(this.v$.$touch(),this.v$.$error)return void setTimeout((()=>{this.buttonKey+=1}),1e3);const t=document.getElementById("submitButton");t.classList.add("button--loading");try{await this.$store.dispatch("requestRestorePassword",{email:this.email}),setTimeout((()=>{t.classList.remove("button--loading"),this.$router.push("/restorePasswordLinkSent")}),1e3)}catch(e){setTimeout((()=>{this.$error(e),t.classList.remove("button--loading"),this.buttonKey+=1}),1e3)}}},computed:{}}),p=s(89);const v=(0,p.Z)(h,[["render",l],["__scopeId","data-v-5b40e713"]]);var $=v}}]);