"use strict";(self["webpackChunkneurostate_cabinet"]=self["webpackChunkneurostate_cabinet"]||[]).push([[590],{3214:function(e,t,a){a.r(t),a.d(t,{default:function(){return zt}});var l=a(3396),s=a(7139),i=a(9242),o=a(82),r=a(4451),n=a.p+"img/share-img.c1d001b0.svg";const d=e=>((0,l.dD)("data-v-2e98ebcc"),e=e(),(0,l.Cn)(),e),c={class:"cabinet"},u={class:"header"},w={class:"header-left"},h={class:"title"},m={class:"id-wrap"},p={class:"id-title"},_={class:"id-data"},v={class:"header-right"},f={class:"go-to-ref withdraw",style:{"text-decoration":"none"}},g={class:"go-to-ref withdraw",style:{"text-decoration":"none"}},b={class:"sub-title"},$={class:"wallet-wrap",id:"wallet"},z={class:"wallet"},y={class:"wallet__title"},k={class:"wallet-adress-wrap"},M={class:"wallet-adress"},F={class:"copy-button"},C={class:"wrap"},S={class:"left-wrap"},D={class:"wrap-title"},W={class:"neurostate-balance wrap-content"},P={class:"balance-title wrap-subtitle"},B={class:"balance-amount wrap-amount"},A=d((()=>(0,l._)("img",{class:"info-img",src:r,alt:""},null,-1))),E=[A],U={class:"your-share wrap-content"},Z={class:"share-title wrap-subtitle"},q={class:"share-amount wrap-amount"},L={class:"left-wrap-container"},N=d((()=>(0,l._)("img",{src:n,alt:"",class:"image"},null,-1))),x={class:"right-wrap"},T={class:"wrap-title"},I={class:"referrals-content"},V={class:"invited wrap-content"},R={class:"invited-title wrap-subtitle"},j={class:"invited-amount wrap-amount"},H={class:"percent-income wrap-content"},Y={class:"income-title wrap-subtitle"},G=d((()=>(0,l._)("p",{class:"income-amount wrap-amount"},"1 %",-1))),O={class:"available-to-withdraw wrap-content"},J={class:"available-title wrap-subtitle"},K={class:"available-amount wrap-amount"},Q={class:"btns-wrap"},X={class:"go-to-ref"},ee={class:"wallet-wrap ref-link"},te={class:"wallet"},ae={class:"wallet__title"},le={class:"wallet-adress-wrap"},se={class:"wallet-adress"},ie={class:"copy-button"},oe={class:"personal-info-wrapper"},re={class:"title"},ne={class:"content"},de={class:"personal-info-wrapper",id:"edit"},ce={class:"title"},ue={key:0,class:"content"},we={class:"personal-info-wrapper"},he={class:"title"},me={key:0,class:"content"},pe={class:"personal-info-wrapper"},_e={class:"title"},ve={key:0,class:"content"},fe={class:"personal-info-wrapper"},ge={class:"title"},be={key:0,class:"content"},$e={class:"buttons-wrap"};function ze(e,t,a,r,n,d){const A=(0,l.up)("router-link"),ze=(0,l.up)("MyDividends"),ye=(0,l.up)("WithdrawFundsModal"),ke=(0,l.up)("WithdrawFundsModalSucces"),Me=(0,l.up)("SmartContractModal"),Fe=(0,l.up)("FirstPaymentDividendModal");return(0,l.wg)(),(0,l.iD)("div",c,[(0,l._)("div",u,[(0,l._)("div",w,[(0,l._)("div",h,(0,s.zw)(e.$localizeFilter("cabinet")),1),(0,l._)("div",m,[(0,l._)("span",p,(0,s.zw)(e.$localizeFilter("your_id")),1),(0,l._)("span",_,(0,s.zw)(" "+e.profile?.id||0),1)])]),(0,l._)("div",v,[(0,l._)("button",f,[(0,l.Wm)(A,{to:"/NFTBonuses",class:"go-to-ref-link"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.$localizeFilter("nft_bonus_btn")),1)])),_:1})]),(0,l._)("button",g,[(0,l.Wm)(A,{to:"/referralProgram",class:"go-to-ref-link"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.$localizeFilter("referral_program")),1)])),_:1})])])]),(0,l.Wm)(ze,{dividendsBalance:e.dividendsBalance,onShowWithdrawFundsModal:t[0]||(t[0]=t=>e.showWithdrawModal("USDT","dividends")),class:"my-dividends"},null,8,["dividendsBalance"]),(0,l._)("div",b,(0,s.zw)(e.$localizeFilter("cabinet_sub_title")),1),(0,l._)("div",$,[(0,l._)("div",z,[(0,l._)("div",y,(0,s.zw)(e.$localizeFilter("wallet_title")),1),(0,l._)("div",k,[(0,l._)("span",M,(0,s.zw)(e.fillWalletAddress),1),(0,l._)("button",F,[(0,l._)("img",{src:o,alt:"",onClick:t[1]||(t[1]=t=>e.$utils.copy(e.fillWalletAddress))})])])])]),(0,l._)("div",C,[(0,l._)("div",S,[(0,l._)("h2",D,(0,s.zw)(e.$localizeFilter("investments")),1),(0,l._)("div",W,[(0,l._)("p",P,(0,s.zw)(e.$localizeFilter("neurostate_balance")),1),(0,l._)("p",B,(0,s.zw)(e.$utils.formatNumber((e.balance?.balance||0)/1e6,"en-US",0,6)+" NSC"),1),(0,l._)("button",{onClick:t[2]||(t[2]=t=>e.showSmartContractModal=!0)},E)]),(0,l._)("div",U,[(0,l._)("p",Z,(0,s.zw)(e.$localizeFilter("your_share")),1),(0,l._)("p",q,(0,s.zw)(e.$utils.formatNumber(e.calcYourShare()||0,"en-US",0,8)+" %"),1)]),(0,l._)("div",L,[N,(0,l._)("button",{class:"withdraw",onClick:t[3]||(t[3]=t=>e.showWithdrawModal("NSC"))},(0,s.zw)(e.$localizeFilter("withdraw_funds")),1)])]),(0,l._)("div",x,[(0,l._)("h2",T,(0,s.zw)(e.$localizeFilter("referral_balance")),1),(0,l._)("div",I,[(0,l._)("div",V,[(0,l._)("p",R,(0,s.zw)(e.$localizeFilter("invited")),1),(0,l._)("p",j,(0,s.zw)((e.referralProgramData?.invitedCount||0)+" "+e.$localizeFilter("participants")),1)]),(0,l._)("div",H,[(0,l._)("p",Y,(0,s.zw)(e.$localizeFilter("percent_income")),1),G]),(0,l._)("div",O,[(0,l._)("p",J,(0,s.zw)(e.$localizeFilter("available_to_withdraw")),1),(0,l._)("p",K,(0,s.zw)(e.$utils.formatNumber((e.referralProgramData?.availableBalance||0)/1e6,"en-US",0,6)+" USDT"),1)])]),(0,l._)("div",Q,[(0,l._)("button",X,[(0,l.Wm)(A,{to:"/referralProgram",class:"go-to-ref-link"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.$localizeFilter("referral_program")),1)])),_:1})]),(0,l._)("button",{class:"withdraw",onClick:t[4]||(t[4]=t=>e.showWithdrawModal("USDT"))},(0,s.zw)(e.$localizeFilter("withdraw_funds")),1)])])]),(0,l._)("div",ee,[(0,l._)("div",te,[(0,l._)("div",ae,(0,s.zw)(e.$localizeFilter("your_referral_link_title")),1),(0,l._)("div",le,[(0,l._)("span",se,(0,s.zw)(e.getReferralLink()),1),(0,l._)("button",ie,[(0,l._)("img",{src:o,alt:"",onClick:t[5]||(t[5]=t=>e.$utils.copy(e.getReferralLink()))})])])])]),(0,l._)("div",oe,[(0,l._)("h2",re,(0,s.zw)(e.$localizeFilter("your_sponsor_email")),1),(0,l._)("span",ne,(0,s.zw)(e.profile?.sponsorEmail),1),(0,l._)("button",{class:"copy-btn",onClick:t[6]||(t[6]=t=>e.$utils.copy(e.profile?.sponsorEmail))},(0,s.zw)(e.$localizeFilter("copy")),1)]),(0,l._)("div",de,[(0,l._)("h2",ce,(0,s.zw)(e.$localizeFilter("full_name")),1),0==e.isEditing?((0,l.wg)(),(0,l.iD)("span",ue,(0,s.zw)(e.profile?.fullName),1)):(0,l.kq)("",!0),1==e.isEditing?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:1,type:"text",class:"input edit","onUpdate:modelValue":t[7]||(t[7]=t=>e.editedProfile.fullName=t)},null,512)),[[i.nr,e.editedProfile.fullName]]):(0,l.kq)("",!0)]),(0,l._)("div",we,[(0,l._)("h2",he,(0,s.zw)(e.$localizeFilter("your_email_personal")),1),0==e.isEditing?((0,l.wg)(),(0,l.iD)("span",me,(0,s.zw)(e.profile?.email),1)):(0,l.kq)("",!0),1==e.isEditing?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:1,type:"text",class:"input edit","onUpdate:modelValue":t[8]||(t[8]=t=>e.editedProfile.email=t)},null,512)),[[i.nr,e.editedProfile.email]]):(0,l.kq)("",!0)]),(0,l._)("div",pe,[(0,l._)("h2",_e,(0,s.zw)(e.$localizeFilter("telegram_whatsup_link")),1),0==e.isEditing?((0,l.wg)(),(0,l.iD)("span",ve,(0,s.zw)(e.profile?.messengerLink),1)):(0,l.kq)("",!0),1==e.isEditing?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:1,type:"text",class:"input edit","onUpdate:modelValue":t[9]||(t[9]=t=>e.editedProfile.messengerLink=t)},null,512)),[[i.nr,e.editedProfile.messengerLink]]):(0,l.kq)("",!0)]),(0,l._)("div",fe,[(0,l._)("h2",ge,(0,s.zw)(e.$localizeFilter("telephone_number_personal")),1),0==e.isEditing?((0,l.wg)(),(0,l.iD)("span",be,(0,s.zw)(e.profile?.phoneNumber),1)):(0,l.kq)("",!0),1==e.isEditing?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:1,type:"text",class:"input edit","onUpdate:modelValue":t[10]||(t[10]=t=>e.editedProfile.phoneNumber=t)},null,512)),[[i.nr,e.editedProfile.phoneNumber]]):(0,l.kq)("",!0)]),(0,l._)("div",$e,[0==e.isEditing?((0,l.wg)(),(0,l.iD)("button",{key:0,class:"button edit-btn",onClick:t[11]||(t[11]=t=>e.isEditing=!0)},(0,s.zw)(e.$localizeFilter("change")),1)):(0,l.kq)("",!0),1==e.isEditing?((0,l.wg)(),(0,l.iD)("button",{key:1,class:"button edit-btn",onClick:t[12]||(t[12]=t=>e.saveProfile())},(0,s.zw)(e.$localizeFilter("save")),1)):(0,l.kq)("",!0),(0,l._)("button",{class:"button shareholder",onClick:t[13]||(t[13]=t=>e.scrollUpside())},(0,s.zw)(e.$localizeFilter("become_shareholder")),1),(0,l._)("button",{class:"logout-button",onClick:t[14]||(t[14]=t=>e.logout())},(0,s.zw)(e.$localizeFilter("logout_from_account")),1)]),e.showWithdrawFundsModal?((0,l.wg)(),(0,l.j4)(ye,{key:0,currency:e.withdrawCurrency,from:e.withdrawFrom,onWithdrawSuccess:e.withdrawSuccess,onCloseModal:e.closeModals},null,8,["currency","from","onWithdrawSuccess","onCloseModal"])):(0,l.kq)("",!0),e.showWithdrawFundsModalSuccess?((0,l.wg)(),(0,l.j4)(ke,{key:1,withdrawSuccessWalletAddress:e.withdrawSuccessWalletAddress,onCloseModal:e.closeModals},null,8,["withdrawSuccessWalletAddress","onCloseModal"])):(0,l.kq)("",!0),e.showSmartContractModal?((0,l.wg)(),(0,l.j4)(Me,{key:2,onCloseModal:e.closeModals},null,8,["onCloseModal"])):(0,l.kq)("",!0),e.showFirstPaymentDividendModal?((0,l.wg)(),(0,l.j4)(Fe,{key:3,onCloseModal:e.closeModals},null,8,["onCloseModal"])):(0,l.kq)("",!0)])}a(7658);var ye=a(3356);const ke=e=>((0,l.dD)("data-v-0fa55e1c"),e=e(),(0,l.Cn)(),e),Me={class:"wrapper"},Fe={class:"modal-content"},Ce=ke((()=>(0,l._)("img",{src:ye,alt:""},null,-1))),Se=[Ce],De={class:"modal-title"},We={class:"comission"};function Pe(e,t,a,i,o,r){const n=(0,l.up)("CustomInput");return(0,l.wg)(),(0,l.iD)("div",Me,[(0,l._)("div",{class:"blur",onClick:t[0]||(t[0]=t=>e.$emit("closeModal"))}),(0,l._)("div",Fe,[(0,l._)("button",{class:"close-button",onClick:t[1]||(t[1]=t=>e.$emit("closeModal"))},Se),(0,l._)("h2",De,(0,s.zw)(e.$localizeFilter("withdraw_funds")),1),(0,l.Wm)(n,{modelValue:e.walletAddress,errors:e.v$.walletAddress.$errors,title:e.$localizeFilter("withdrawal_wallet_input"),"onUpdate:modelValue":t[2]||(t[2]=t=>{e.walletAddress=t,e.v$.walletAddress.$touch()})},null,8,["modelValue","errors","title"]),(0,l.Wm)(n,{modelValue:e.amount,errors:e.v$.amount.$errors,title:e.$localizeFilter("withdrawal_amount"),"onUpdate:modelValue":t[3]||(t[3]=t=>{e.amount=t,e.v$.amount.$touch()})},null,8,["modelValue","errors","title"]),(0,l._)("span",We,(0,s.zw)(e.$localizeFilter("comission")+e.currency),1),(0,l._)("button",{class:"button button-withdraw",id:"submitButton",onClick:t[4]||(t[4]=t=>e.submitHandler())},(0,s.zw)(e.$localizeFilter("confirm_withdrawal")),1)])])}var Be=a(3053),Ae=a(9117),Ee=a(7389),Ue=a(9849),Ze=a(2848),qe=(0,Ee.aZ)({props:{currency:{type:String,default:""},from:{type:String,default:""}},components:{CustomInput:Ze.Z},data(){return{walletAddress:"",amount:""}},setup(){return{v$:(0,Be.ZP)()}},validations(){return{walletAddress:{required:Ae.BM.withMessage((0,Ue.Z)("field_must_not_be_empty"),Ae.C1),minLength:Ae.BM.withMessage((0,Ue.Z)("min_length",[34]),(0,Ae.Ei)(34)),maxLength:Ae.BM.withMessage((0,Ue.Z)("max_length",[34]),(0,Ae.BS)(34))},amount:{required:Ae.BM.withMessage((0,Ue.Z)("field_must_not_be_empty"),Ae.C1),numeric:Ae.BM.withMessage((0,Ue.Z)("field_must_be_numeric"),Ae.uR)}}},methods:{async submitHandler(){if(this.v$.$touch(),this.v$.$error)return;const e=document.getElementById("submitButton");e.classList.add("button--loading");const t={walletAddress:this.walletAddress,amount:this.amount,currencyCode:this.currency,fromDividends:"dividends"===this.from};try{await this.$store.dispatch("createWithdrawBalanceRequest",t),setTimeout((()=>{e.classList.remove("button--loading"),this.$emit("withdrawSuccess",this.walletAddress)}),1e3)}catch(a){setTimeout((()=>{this.$error(a),e.classList.remove("button--loading")}),1e3)}},closeModal(){this.$emit("closeModal")}}}),Le=a(89);const Ne=(0,Le.Z)(qe,[["render",Pe],["__scopeId","data-v-0fa55e1c"]]);var xe=Ne;const Te=e=>((0,l.dD)("data-v-0f1130ca"),e=e(),(0,l.Cn)(),e),Ie={class:"wrapper"},Ve={class:"modal-content"},Re=Te((()=>(0,l._)("img",{src:ye,alt:""},null,-1))),je=[Re],He={class:"modal-title"},Ye={class:"wallet"};function Ge(e,t,a,i,o,r){return(0,l.wg)(),(0,l.iD)("div",Ie,[(0,l._)("div",{class:"blur",onClick:t[0]||(t[0]=t=>e.$emit("closeModal"))}),(0,l._)("div",Ve,[(0,l._)("button",{class:"close-button",onClick:t[1]||(t[1]=t=>e.$emit("closeModal"))},je),(0,l._)("h3",He,(0,s.zw)(e.$localizeFilter("withdrawal_wallet_succes_title")),1),(0,l._)("div",Ye,(0,s.zw)(e.withdrawSuccessWalletAddress),1),(0,l._)("button",{class:"button back-button",onClick:t[2]||(t[2]=t=>e.$emit("closeModal"))},(0,s.zw)(e.$localizeFilter("back_to_cabinet")),1)])])}var Oe=(0,Ee.aZ)({props:{withdrawSuccessWalletAddress:{type:String,default:""}},computed:{},methods:{},async mounted(){}});const Je=(0,Le.Z)(Oe,[["render",Ge],["__scopeId","data-v-0f1130ca"]]);var Ke=Je,Qe=a(6751);const Xe={class:"my-dividends"},et={class:"data-wrap"},tt={class:"title"},at={class:"amount"};function lt(e,t,a,i,o,r){return(0,l.wg)(),(0,l.iD)("div",Xe,[(0,l._)("div",et,[(0,l._)("p",tt,(0,s.zw)(e.$localizeFilter("my_dividends_title")),1),(0,l._)("span",at,(0,s.zw)(e.$utils.formatNumber((e.dividendsBalance.balance||0)/1e6,"en-US",0,6)+" USDT"),1)]),(0,l._)("button",{class:"btn",onClick:t[0]||(t[0]=t=>e.$emit("showWithdrawFundsModal"))},(0,s.zw)(e.$localizeFilter("withdraw_funds")),1)])}var st=(0,l.aZ)({name:"MyDividends",props:{dividendsBalance:{type:Object}}});const it=(0,Le.Z)(st,[["render",lt],["__scopeId","data-v-fcefb90a"]]);var ot=it;const rt=e=>((0,l.dD)("data-v-c701e2a4"),e=e(),(0,l.Cn)(),e),nt={class:"wrapper"},dt={class:"modal-container"},ct={class:"modal-content"},ut=rt((()=>(0,l._)("img",{src:ye,alt:""},null,-1))),wt=[ut],ht={class:"content-wrap"},mt={class:"modal-text"};function pt(e,t,a,i,o,r){return(0,l.wg)(),(0,l.iD)("div",nt,[(0,l._)("div",{class:"blur",onClick:t[0]||(t[0]=t=>e.$emit("closeModal"))}),(0,l._)("div",dt,[(0,l._)("div",ct,[(0,l._)("button",{class:"close-button",onClick:t[1]||(t[1]=t=>e.$emit("closeModal"))},wt),(0,l._)("div",ht,[(0,l._)("p",mt,(0,s.zw)(e.$localizeFilter("first_payment_divident_text")),1)])])])])}var _t=(0,Ee.aZ)({});const vt=(0,Le.Z)(_t,[["render",pt],["__scopeId","data-v-c701e2a4"]]);var ft=vt;async function gt(e=0){return new Promise(((t,a)=>{setTimeout((()=>{t(null)}),e)}))}var bt=(0,Ee.aZ)({components:{WithdrawFundsModal:xe,WithdrawFundsModalSucces:Ke,SmartContractModal:Qe.Z,MyDividends:ot,FirstPaymentDividendModal:ft},setup(){},data(){return{isEditing:!1,editedProfile:{},showWithdrawFundsModal:!1,showWithdrawFundsModalSuccess:!1,withdrawSuccessWalletAddress:"",withdrawCurrency:null,showSmartContractModal:!1,showFirstPaymentDividendModal:!1}},methods:{async scrollUpside(){window.scrollTo(0,200);const e=document.getElementById("wallet");for(let t=0;t<5;t++)e.classList.add("active"),await gt(500),e.classList.remove("active"),await gt(500)},showWithdrawModal(e,t){this.showWithdrawFundsModal=!0,this.withdrawCurrency=e,this.withdrawFrom=t},closeModals(){this.showSmartContractModal=!1,this.showWithdrawFundsModal=!1,this.showWithdrawFundsModalSuccess=!1,this.withdrawCurrency=null,this.showFirstPaymentDividendModal=!1},withdrawSuccess(e){this.withdrawSuccessWalletAddress=e,this.showWithdrawFundsModal=!1,this.showWithdrawFundsModalSuccess=!0},getReferralLink(){return location.origin+`?referralToken=${this.profile?.referralToken}`},calcYourShare(){return this.balance.balance/1e6/2e6*100},async saveProfile(){try{await this.$store.dispatch("editProfile",this.editedProfile),this.isEditing=!1,this.$message((0,Ue.Z)("profile_saved"))}catch(e){this.$error(e)}},async logout(){try{await this.$store.dispatch("logout")}catch(e){console.log(e)}finally{location.href=`${location.origin}/`}}},computed:{profile(){return this.$store.getters.profile},fillWalletAddress(){return this.$store.getters.fillWalletAddress||""},referralProgramData(){return this.$store.getters.referralProgramData},balance(){return this.$store.getters.balance||{}},dividendsBalance(){return this.$store.getters.dividendsBalance||{}}},async mounted(){this.$gtag.event("cabinetLoaded",{method:"Google"});try{await this.$store.dispatch("getDividendsBalance"),0!==this.dividendsBalance.balance&&(null===localStorage.getItem("firstDividendPayment")?this.$nextTick((()=>{localStorage.setItem("firstDividendPayment",!0),this.showFirstPaymentDividendModal=!0})):this.showFirstPaymentDividendModal=!1);const e=await this.$store.dispatch("getProfile");"not_activated_client"==e.scope&&this.$router.push("/cabinet/confirmEmail"),this.editedProfile={...e},await this.$store.dispatch("getFillWalletAddress"),await this.$store.dispatch("getReferralData"),await this.$store.dispatch("getBalance")}catch(e){console.log(e)}}});const $t=(0,Le.Z)(bt,[["render",ze],["__scopeId","data-v-2e98ebcc"]]);var zt=$t},4451:function(e,t,a){e.exports=a.p+"img/info_btn.bb460817.svg"}}]);