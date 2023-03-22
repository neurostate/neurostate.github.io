"use strict";(self["webpackChunkneurostate_cabinet"]=self["webpackChunkneurostate_cabinet"]||[]).push([[226],{9915:function(t,e,l){l.r(e),l.d(e,{default:function(){return te}});var a=l(3396),s=l(7139),i=l(9242),r=l(82),o=l.p+"img/info_btn.bb460817.svg",n=l.p+"img/share-img.c1d001b0.svg";const c=t=>((0,a.dD)("data-v-964695ca"),t=t(),(0,a.Cn)(),t),d={class:"cabinet"},u={class:"header"},w={class:"header-left"},h={class:"title"},p={class:"id-wrap"},_={class:"id-title"},m={class:"id-data"},g={class:"header-right"},f={class:"go-to-ref withdraw",style:{"text-decoration":"none"}},b={class:"sub-title"},v={class:"wallet-wrap",id:"wallet"},$={class:"wallet"},z={class:"wallet__title"},k={class:"wallet-adress-wrap"},y={class:"wallet-adress"},M={class:"copy-button"},F={class:"wrap"},C={class:"left-wrap"},S={class:"wrap-title"},W={class:"neurostate-balance wrap-content"},D={class:"balance-title wrap-subtitle"},P={class:"balance-amount wrap-amount"},A=c((()=>(0,a._)("img",{class:"info-img",src:o,alt:""},null,-1))),E=[A],q={class:"your-share wrap-content"},U={class:"share-title wrap-subtitle"},Z={class:"share-amount wrap-amount"},L={class:"left-wrap-container"},B=c((()=>(0,a._)("img",{src:n,alt:"",class:"image"},null,-1))),N={class:"right-wrap"},V={class:"wrap-title"},T={class:"referrals-content"},x={class:"invited wrap-content"},I={class:"invited-title wrap-subtitle"},R={class:"invited-amount wrap-amount"},j={class:"percent-income wrap-content"},H={class:"income-title wrap-subtitle"},Y=c((()=>(0,a._)("p",{class:"income-amount wrap-amount"},"1 %",-1))),G={class:"available-to-withdraw wrap-content"},J={class:"available-title wrap-subtitle"},K={class:"available-amount wrap-amount"},O={class:"btns-wrap"},Q={class:"go-to-ref"},X={class:"wallet-wrap ref-link"},tt={class:"wallet"},et={class:"wallet__title"},lt={class:"wallet-adress-wrap"},at={class:"wallet-adress"},st={class:"copy-button"},it={class:"personal-info-wrapper"},rt={class:"title"},ot={class:"content"},nt={class:"personal-info-wrapper",id:"edit"},ct={class:"title"},dt={key:0,class:"content"},ut={class:"personal-info-wrapper"},wt={class:"title"},ht={key:0,class:"content"},pt={class:"personal-info-wrapper"},_t={class:"title"},mt={key:0,class:"content"},gt={class:"personal-info-wrapper"},ft={class:"title"},bt={key:0,class:"content"},vt={class:"buttons-wrap"};function $t(t,e,l,o,n,c){const A=(0,a.up)("router-link"),$t=(0,a.up)("WithdrawFundsModal"),zt=(0,a.up)("WithdrawFundsModalSucces"),kt=(0,a.up)("SmartContractModal");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",u,[(0,a._)("div",w,[(0,a._)("div",h,(0,s.zw)(t.$localizeFilter("cabinet")),1),(0,a._)("div",p,[(0,a._)("span",_,(0,s.zw)(t.$localizeFilter("your_id")),1),(0,a._)("span",m,(0,s.zw)(" "+t.profile?.id||0),1)])]),(0,a._)("div",g,[(0,a._)("button",f,[(0,a.Wm)(A,{to:"/referralProgram",class:"go-to-ref-link"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.$localizeFilter("referral_program")),1)])),_:1})])])]),(0,a._)("div",b,(0,s.zw)(t.$localizeFilter("cabinet_sub_title")),1),(0,a._)("div",v,[(0,a._)("div",$,[(0,a._)("div",z,(0,s.zw)(t.$localizeFilter("wallet_title")),1),(0,a._)("div",k,[(0,a._)("span",y,(0,s.zw)(t.fillWalletAddress),1),(0,a._)("button",M,[(0,a._)("img",{src:r,alt:"",onClick:e[0]||(e[0]=e=>t.$utils.copy(t.fillWalletAddress))})])])])]),(0,a._)("div",F,[(0,a._)("div",C,[(0,a._)("h2",S,(0,s.zw)(t.$localizeFilter("investments")),1),(0,a._)("div",W,[(0,a._)("p",D,(0,s.zw)(t.$localizeFilter("neurostate_balance")),1),(0,a._)("p",P,(0,s.zw)(t.$utils.formatNumber((t.balance?.balance||0)/1e6,"en-US",0,6)+" NSC"),1),(0,a._)("button",{onClick:e[1]||(e[1]=e=>t.showSmartContractModal=!0)},E)]),(0,a._)("div",q,[(0,a._)("p",U,(0,s.zw)(t.$localizeFilter("your_share")),1),(0,a._)("p",Z,(0,s.zw)(t.$utils.formatNumber(t.calcYourShare()||0,"en-US",0,8)+" %"),1)]),(0,a._)("div",L,[B,(0,a._)("button",{class:"withdraw",onClick:e[2]||(e[2]=e=>t.showWithdrawModal("NSC"))},(0,s.zw)(t.$localizeFilter("withdraw_funds")),1)])]),(0,a._)("div",N,[(0,a._)("h2",V,(0,s.zw)(t.$localizeFilter("referral_balance")),1),(0,a._)("div",T,[(0,a._)("div",x,[(0,a._)("p",I,(0,s.zw)(t.$localizeFilter("invited")),1),(0,a._)("p",R,(0,s.zw)((t.referralProgramData?.invitedCount||0)+" "+t.$localizeFilter("participants")),1)]),(0,a._)("div",j,[(0,a._)("p",H,(0,s.zw)(t.$localizeFilter("percent_income")),1),Y]),(0,a._)("div",G,[(0,a._)("p",J,(0,s.zw)(t.$localizeFilter("available_to_withdraw")),1),(0,a._)("p",K,(0,s.zw)(t.$utils.formatNumber((t.referralProgramData?.availableBalance||0)/1e6,"en-US",0,6)+" USDT"),1)])]),(0,a._)("div",O,[(0,a._)("button",Q,[(0,a.Wm)(A,{to:"/referralProgram",class:"go-to-ref-link"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.$localizeFilter("referral_program")),1)])),_:1})]),(0,a._)("button",{class:"withdraw",onClick:e[3]||(e[3]=e=>t.showWithdrawModal("USDT"))},(0,s.zw)(t.$localizeFilter("withdraw_funds")),1)])])]),(0,a._)("div",X,[(0,a._)("div",tt,[(0,a._)("div",et,(0,s.zw)(t.$localizeFilter("your_referral_link_title")),1),(0,a._)("div",lt,[(0,a._)("span",at,(0,s.zw)(t.getReferralLink()),1),(0,a._)("button",st,[(0,a._)("img",{src:r,alt:"",onClick:e[4]||(e[4]=e=>t.$utils.copy(t.getReferralLink()))})])])])]),(0,a._)("div",it,[(0,a._)("h2",rt,(0,s.zw)(t.$localizeFilter("your_sponsor_email")),1),(0,a._)("span",ot,(0,s.zw)(t.profile?.sponsorEmail),1),(0,a._)("button",{class:"copy-btn",onClick:e[5]||(e[5]=e=>t.$utils.copy(t.profile?.sponsorEmail))},(0,s.zw)(t.$localizeFilter("copy")),1)]),(0,a._)("div",nt,[(0,a._)("h2",ct,(0,s.zw)(t.$localizeFilter("full_name")),1),0==t.isEditing?((0,a.wg)(),(0,a.iD)("span",dt,(0,s.zw)(t.profile?.fullName),1)):(0,a.kq)("",!0),1==t.isEditing?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:1,type:"text",class:"input edit","onUpdate:modelValue":e[6]||(e[6]=e=>t.editedProfile.fullName=e)},null,512)),[[i.nr,t.editedProfile.fullName]]):(0,a.kq)("",!0)]),(0,a._)("div",ut,[(0,a._)("h2",wt,(0,s.zw)(t.$localizeFilter("your_email_personal")),1),0==t.isEditing?((0,a.wg)(),(0,a.iD)("span",ht,(0,s.zw)(t.profile?.email),1)):(0,a.kq)("",!0),1==t.isEditing?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:1,type:"text",class:"input edit","onUpdate:modelValue":e[7]||(e[7]=e=>t.editedProfile.email=e)},null,512)),[[i.nr,t.editedProfile.email]]):(0,a.kq)("",!0)]),(0,a._)("div",pt,[(0,a._)("h2",_t,(0,s.zw)(t.$localizeFilter("telegram_whatsup_link")),1),0==t.isEditing?((0,a.wg)(),(0,a.iD)("span",mt,(0,s.zw)(t.profile?.messengerLink),1)):(0,a.kq)("",!0),1==t.isEditing?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:1,type:"text",class:"input edit","onUpdate:modelValue":e[8]||(e[8]=e=>t.editedProfile.messengerLink=e)},null,512)),[[i.nr,t.editedProfile.messengerLink]]):(0,a.kq)("",!0)]),(0,a._)("div",gt,[(0,a._)("h2",ft,(0,s.zw)(t.$localizeFilter("telephone_number_personal")),1),0==t.isEditing?((0,a.wg)(),(0,a.iD)("span",bt,(0,s.zw)(t.profile?.phoneNumber),1)):(0,a.kq)("",!0),1==t.isEditing?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:1,type:"text",class:"input edit","onUpdate:modelValue":e[9]||(e[9]=e=>t.editedProfile.phoneNumber=e)},null,512)),[[i.nr,t.editedProfile.phoneNumber]]):(0,a.kq)("",!0)]),(0,a._)("div",vt,[0==t.isEditing?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"button edit-btn",onClick:e[10]||(e[10]=e=>t.isEditing=!0)},(0,s.zw)(t.$localizeFilter("change")),1)):(0,a.kq)("",!0),1==t.isEditing?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"button edit-btn",onClick:e[11]||(e[11]=e=>t.saveProfile())},(0,s.zw)(t.$localizeFilter("save")),1)):(0,a.kq)("",!0),(0,a._)("button",{class:"button shareholder",onClick:e[12]||(e[12]=e=>t.scrollUpside())},(0,s.zw)(t.$localizeFilter("become_shareholder")),1),(0,a._)("button",{class:"logout-button",onClick:e[13]||(e[13]=e=>t.logout())},(0,s.zw)(t.$localizeFilter("logout_from_account")),1)]),t.showWithdrawFundsModal?((0,a.wg)(),(0,a.j4)($t,{key:0,currency:t.withdrawCurrency,onWithdrawSuccess:t.withdrawSuccess,onCloseModal:t.closeModals},null,8,["currency","onWithdrawSuccess","onCloseModal"])):(0,a.kq)("",!0),t.showWithdrawFundsModalSuccess?((0,a.wg)(),(0,a.j4)(zt,{key:1,withdrawSuccessWalletAddress:t.withdrawSuccessWalletAddress,onCloseModal:t.closeModals},null,8,["withdrawSuccessWalletAddress","onCloseModal"])):(0,a.kq)("",!0),t.showSmartContractModal?((0,a.wg)(),(0,a.j4)(kt,{key:2,onCloseModal:t.closeModals},null,8,["onCloseModal"])):(0,a.kq)("",!0)])}l(7658);var zt=l(3356);const kt=t=>((0,a.dD)("data-v-4ce611f5"),t=t(),(0,a.Cn)(),t),yt={class:"wrapper"},Mt={class:"modal-content"},Ft=kt((()=>(0,a._)("img",{src:zt,alt:""},null,-1))),Ct=[Ft],St={class:"modal-title"};function Wt(t,e,l,i,r,o){const n=(0,a.up)("CustomInput");return(0,a.wg)(),(0,a.iD)("div",yt,[(0,a._)("div",{class:"blur",onClick:e[0]||(e[0]=e=>t.$emit("closeModal"))}),(0,a._)("div",Mt,[(0,a._)("button",{class:"close-button",onClick:e[1]||(e[1]=e=>t.$emit("closeModal"))},Ct),(0,a._)("h2",St,(0,s.zw)(t.$localizeFilter("withdraw_funds")),1),(0,a.Wm)(n,{modelValue:t.walletAddress,errors:t.v$.walletAddress.$errors,title:t.$localizeFilter("withdrawal_wallet_input"),"onUpdate:modelValue":e[2]||(e[2]=e=>{t.walletAddress=e,t.v$.walletAddress.$touch()})},null,8,["modelValue","errors","title"]),(0,a.Wm)(n,{modelValue:t.amount,errors:t.v$.amount.$errors,title:t.$localizeFilter("withdrawal_amount"),"onUpdate:modelValue":e[3]||(e[3]=e=>{t.amount=e,t.v$.amount.$touch()})},null,8,["modelValue","errors","title"]),(0,a._)("button",{class:"button button-withdraw",id:"submitButton",onClick:e[4]||(e[4]=e=>t.submitHandler())},(0,s.zw)(t.$localizeFilter("confirm_withdrawal")),1)])])}var Dt=l(3053),Pt=l(9117),At=l(7389),Et=l(9849),qt=l(2848),Ut=(0,At.aZ)({props:{currency:{type:String,default:""}},components:{CustomInput:qt.Z},data(){return{walletAddress:"",amount:""}},setup(){return{v$:(0,Dt.ZP)()}},validations(){return{walletAddress:{required:Pt.BM.withMessage((0,Et.Z)("field_must_not_be_empty"),Pt.C1),minLength:Pt.BM.withMessage((0,Et.Z)("min_length",[34]),(0,Pt.Ei)(34)),maxLength:Pt.BM.withMessage((0,Et.Z)("max_length",[34]),(0,Pt.BS)(34))},amount:{required:Pt.BM.withMessage((0,Et.Z)("field_must_not_be_empty"),Pt.C1),numeric:Pt.BM.withMessage((0,Et.Z)("field_must_be_numeric"),Pt.uR)}}},methods:{async submitHandler(){if(this.v$.$touch(),this.v$.$error)return;const t=document.getElementById("submitButton");t.classList.add("button--loading");const e={walletAddress:this.walletAddress,amount:this.amount,currencyCode:this.currency};try{await this.$store.dispatch("createWithdrawBalanceRequest",e),setTimeout((()=>{t.classList.remove("button--loading"),this.$emit("withdrawSuccess",this.walletAddress)}),1e3)}catch(l){setTimeout((()=>{this.$error(l),t.classList.remove("button--loading")}),1e3)}},closeModal(){this.$emit("closeModal")}}}),Zt=l(89);const Lt=(0,Zt.Z)(Ut,[["render",Wt],["__scopeId","data-v-4ce611f5"]]);var Bt=Lt;const Nt=t=>((0,a.dD)("data-v-0f1130ca"),t=t(),(0,a.Cn)(),t),Vt={class:"wrapper"},Tt={class:"modal-content"},xt=Nt((()=>(0,a._)("img",{src:zt,alt:""},null,-1))),It=[xt],Rt={class:"modal-title"},jt={class:"wallet"};function Ht(t,e,l,i,r,o){return(0,a.wg)(),(0,a.iD)("div",Vt,[(0,a._)("div",{class:"blur",onClick:e[0]||(e[0]=e=>t.$emit("closeModal"))}),(0,a._)("div",Tt,[(0,a._)("button",{class:"close-button",onClick:e[1]||(e[1]=e=>t.$emit("closeModal"))},It),(0,a._)("h3",Rt,(0,s.zw)(t.$localizeFilter("withdrawal_wallet_succes_title")),1),(0,a._)("div",jt,(0,s.zw)(t.withdrawSuccessWalletAddress),1),(0,a._)("button",{class:"button back-button",onClick:e[2]||(e[2]=e=>t.$emit("closeModal"))},(0,s.zw)(t.$localizeFilter("back_to_cabinet")),1)])])}var Yt=(0,At.aZ)({props:{withdrawSuccessWalletAddress:{type:String,default:""}},computed:{},methods:{},async mounted(){}});const Gt=(0,Zt.Z)(Yt,[["render",Ht],["__scopeId","data-v-0f1130ca"]]);var Jt=Gt,Kt=l(2263);l(1120);async function Ot(t=0){return new Promise(((e,l)=>{setTimeout((()=>{e(null)}),t)}))}var Qt=(0,At.aZ)({components:{WithdrawFundsModal:Bt,WithdrawFundsModalSucces:Jt,SmartContractModal:Kt.Z},setup(){},data(){return{isEditing:!1,editedProfile:{},showWithdrawFundsModal:!1,showWithdrawFundsModalSuccess:!1,withdrawSuccessWalletAddress:"",withdrawCurrency:null,showSmartContractModal:!1}},methods:{async scrollUpside(){window.scrollTo(0,200);const t=document.getElementById("wallet");for(let e=0;e<5;e++)t.classList.add("active"),await Ot(500),t.classList.remove("active"),await Ot(500)},showWithdrawModal(t){this.showWithdrawFundsModal=!0,this.withdrawCurrency=t},closeModals(){this.showSmartContractModal=!1,this.showWithdrawFundsModal=!1,this.showWithdrawFundsModalSuccess=!1,this.withdrawCurrency=null},withdrawSuccess(t){this.withdrawSuccessWalletAddress=t,this.showWithdrawFundsModal=!1,this.showWithdrawFundsModalSuccess=!0},getReferralLink(){return location.origin+`?referralToken=${this.profile?.referralToken}`},calcYourShare(){return this.balance.balance/1e6/2e6*100},async saveProfile(){try{await this.$store.dispatch("editProfile",this.editedProfile),this.isEditing=!1,this.$message((0,Et.Z)("profile_saved"))}catch(t){this.$error(t)}},async logout(){try{await this.$store.dispatch("logout")}catch(t){console.log(t)}finally{location.href=`${location.origin}/`}}},computed:{profile(){return this.$store.getters.profile},fillWalletAddress(){return this.$store.getters.fillWalletAddress||""},referralProgramData(){return this.$store.getters.referralProgramData},balance(){return this.$store.getters.balance||{}}},async mounted(){this.$gtag.event("cabinetLoaded",{method:"Google"});try{const t=await this.$store.dispatch("getProfile");"not_activated_client"==t.scope&&this.$router.push("/cabinet/confirmEmail"),this.editedProfile={...t},await this.$store.dispatch("getFillWalletAddress"),await this.$store.dispatch("getReferralData"),await this.$store.dispatch("getBalance")}catch(t){console.log(t)}}});const Xt=(0,Zt.Z)(Qt,[["render",$t],["__scopeId","data-v-964695ca"]]);var te=Xt}}]);