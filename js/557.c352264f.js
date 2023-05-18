"use strict";(self["webpackChunkneurostate_cabinet"]=self["webpackChunkneurostate_cabinet"]||[]).push([[557],{2557:function(e,t,s){s.r(t),s.d(t,{default:function(){return Ee}});var o=s(3396),a=s(7139),n=s(7650);const l=e=>((0,o.dD)("data-v-23acee08"),e=e(),(0,o.Cn)(),e),i={class:"my-nft-bonuses"},r={id:"anchor",class:"header-wrap"},u={class:"header_left"},c={class:"title"},d={class:"id-wrap"},p={class:"id-title"},m={class:"id-data"},g={class:"header_right"},y={class:"btns-wrap"},h={class:"button"},_={class:"buttons-wrap"},b={class:"button button-light"},f=l((()=>(0,o._)("img",{src:n,alt:""},null,-1))),w=[f];function v(e,t,s,n,l,f){const v=(0,o.up)("router-link"),B=(0,o.up)("MyNeuroBonusesList"),$=(0,o.up)("pagination"),M=(0,o.up)("BonusApplyModal"),z=(0,o.up)("MortgageBonusApplyModal");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",r,[(0,o._)("div",u,[(0,o._)("div",c,(0,a.zw)(e.$localizeFilter("my_bonuses")),1),(0,o._)("div",d,[(0,o._)("span",p,(0,a.zw)(e.$localizeFilter("your_id")),1),(0,o._)("span",m,(0,a.zw)(" "+e.profile?.id||0),1)])]),(0,o._)("div",g,[(0,o._)("div",y,[(0,o.Wm)(v,{to:"/cabinet/neuroBonuses"},{default:(0,o.w5)((()=>[(0,o._)("button",h,(0,a.zw)(e.$localizeFilter("all_bonuses")),1)])),_:1})])])]),e.bonuses?((0,o.wg)(),(0,o.j4)(B,{key:0,bonuses:e.bonuses,onShowBonusApplyModal:e.triggerBonusApplyModal},null,8,["bonuses","onShowBonusApplyModal"])):(0,o.kq)("",!0),(0,o._)("div",_,[(0,o.Wm)($,{modelValue:e.page,"onUpdate:modelValue":t[0]||(t[0]=t=>e.page=t),records:e.count,"per-page":e.pageSize},null,8,["modelValue","records","per-page"]),(0,o.Wm)(v,{to:"/cabinet/neuroBonuses"},{default:(0,o.w5)((()=>[(0,o._)("button",b,(0,a.zw)(e.$localizeFilter("go_for_bonuses")),1)])),_:1}),(0,o._)("button",{class:"leave-session",onClick:t[1]||(t[1]=t=>e.logout())},(0,a.zw)(e.$localizeFilter("leave_session")),1)]),(0,o._)("div",{class:"scroll-up-btn",onClick:t[2]||(t[2]=t=>e.scrollUp())},w),e.showBonusApplyModal?((0,o.wg)(),(0,o.j4)(M,{key:1,"selected-bonus":e.selectedBonus,onCloseModal:t[3]||(t[3]=t=>e.showBonusApplyModal=!1),onReloadData:e.loadData},null,8,["selected-bonus","onReloadData"])):(0,o.kq)("",!0),e.showMortgageBonusApplyModal?((0,o.wg)(),(0,o.j4)(z,{key:2,onCloseModal:t[4]||(t[4]=t=>e.showMortgageBonusApplyModal=!1)})):(0,o.kq)("",!0)])}var B=s(7389);const $={class:"overall-wrapper"};function M(e,t,s,a,n,l){const i=(0,o.up)("MyNeuroBonus");return(0,o.wg)(),(0,o.iD)("div",$,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.bonuses,((t,s)=>((0,o.wg)(),(0,o.j4)(i,{key:s,bonus:t,onShowBonusApplyModal:e.showBonusApplyModal},null,8,["bonus","onShowBonusApplyModal"])))),128))])}var z=s(9849);const T={class:"bonus-wrapper"},k={class:"header"},I={class:"header-title"},D={key:0,class:"timer-wrap"},A={class:"timer"},S={id:"ref_bonus_timer",class:"timer timer-data"},F={key:1,class:"header-date"},C={class:"content"},L={class:"content-left"},Z=["src"],x={class:"data"},R={class:"type"},E={class:"type-data"},q={class:"amount"},j={class:"amount-data"},N={class:"content-right"},U={key:0,class:"timer-wrap"},V={class:"timer"},G={class:"timer timer-data"},H={key:1,class:"btn activated"},O={key:2,class:"btn activated",style:{color:"#f17b7b",border:"2px solid #f17b7b"}};function W(e,t,s,n,l,i){return(0,o.wg)(),(0,o.iD)("div",T,[(0,o._)("div",k,[(0,o._)("h3",I,(0,a.zw)(e.$localizeFilter(e.bonus.bonusType)),1),"referrals_pack"===e.bonus.bonusType?((0,o.wg)(),(0,o.iD)("div",D,[(0,o._)("span",A,(0,a.zw)(e.$localizeFilter("left")+" "),1),(0,o._)("span",S,(0,a.zw)(e.timeStringReferral),1)])):((0,o.wg)(),(0,o.iD)("span",F,(0,a.zw)(e.$dateTimeFilter(Number(e.bonus.createdTimestamp),"custom","HH:MM dd.mm.yyyy ")),1))]),(0,o._)("div",C,[(0,o._)("div",L,[(0,o._)("img",{src:e.getImage(e.bonus.bonusType),alt:"",class:"image"},null,8,Z),(0,o._)("div",x,[(0,o._)("span",R,[(0,o.Uk)((0,a.zw)(e.$localizeFilter("bonus_type"))+" ",1),(0,o._)("span",E,(0,a.zw)(e.$localizeFilter(e.bonusType[e.bonus.bonusType],[e.bonus.period/1e3/3600])),1)]),(0,o._)("span",q,[(0,o.Uk)((0,a.zw)(e.$localizeFilter("bonus_amount"))+" ",1),(0,o._)("span",j,(0,a.zw)(e.getAmountString(e.bonus)),1)])])]),(0,o._)("div",N,[e.bonus.endTimestamp-+Date.now()>0?((0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("span",V,(0,a.zw)(e.$localizeFilter("left")+" "),1),(0,o._)("span",G,(0,a.zw)(e.timeString),1)])):e.bonus.activatedTimestamp?((0,o.wg)(),(0,o.iD)("button",H,(0,a.zw)(e.$localizeFilter("applied")),1)):e.bonus.activationExpireTimestamp-+Date.now()<=0&&"referrals_pack"===e.bonus.bonusType?((0,o.wg)(),(0,o.iD)("button",O,(0,a.zw)(e.$localizeFilter("expired")),1)):((0,o.wg)(),(0,o.iD)("button",{key:3,class:"btn",onClick:t[0]||(t[0]=t=>e.showBonusApplyModal(e.bonus))},(0,a.zw)(e.$localizeFilter("apply")),1))])])])}var P=(0,B.aZ)({props:{bonus:{type:Object,default:()=>({})}},data(){return{bonusType:{mortgage_first_payment:"bonus_mortgage_first_payment",referral_accruals:"bonus_referral_accruals",instant_dividends:"bonus_instant_dividends",referrals_pack:"bonus_referrals_pack",money:"bonus_money"},interval:null,intervalReferral:null,applyingTimeLeft:0,applyingTimeLeftReferral:0,timeString:"",timeStringReferral:""}},computed:{},mounted(){this.interval=setInterval((()=>{this.applyingTimeLeft=this.bonus.endTimestamp-Date.now(),this.applyingTimeLeft<=0&&(this.applyingTimeLeft=0),this.timeString=this.getTimeString(this.applyingTimeLeft)}),1e3),this.intervalReferral=setInterval((()=>{this.applyingTimeLeftReferral=this.bonus.activationExpireTimestamp-Date.now(),this.applyingTimeLeftReferral<=0&&(this.applyingTimeLeftReferral=0),this.timeStringReferral=this.getTimeString(this.applyingTimeLeftReferral)}),1e3)},unmounted(){clearInterval(this.interval),clearInterval(this.intervalReferral)},methods:{showBonusApplyModal(e){this.$emit("showBonusApplyModal",e)},getTimeString(e){let t=Math.floor(e/1e3),s=Math.floor(t/3600/24),o=Math.floor(t%86400/3600),a=Math.floor(t%3600/60),n=Math.floor(t%60);if(o<10&&(o="0"+o),a<10&&(a="0"+a),n<10&&(n="0"+n),e<=0){let e=document.getElementById("ref_bonus_timer");return e.style.color="#F17B7B",`${s} ${(0,z.Z)("days")} 00:00:00`}return`${s} ${(0,z.Z)("days")} ${o}:${a}:${n}`},getImage(e){switch(e){case"mortgage_first_payment":return s(5106);case"referral_accruals":return s(9381);case"instant_dividends":return s(921);case"referrals_pack":return s(4066);case"money":return s(1344);default:return""}},getAmountString(e){return e.amount?"referrals_pack"===e.bonusType||"money"===e.bonusType?e.amount:"instant_dividends"===e.bonusType?e.amount/1e6:e.amount+" %":"-"}}}),Y=s(89);const K=(0,Y.Z)(P,[["render",W],["__scopeId","data-v-1239a149"]]);var J=K,Q=(0,B.aZ)({components:{MyNeuroBonus:J},props:{bonuses:{type:Array,default:()=>[]}},computed:{},mounted(){this.interval=setInterval((()=>{this.applyingTimeLeft<=0&&(this.applyingTimeLeft=0),this.timeString=this.getTimeString(this.applyingTimeLeft)}),1e3)},unmounted(){clearInterval(this.interval)},methods:{showBonusApplyModal(e){this.$emit("showBonusApplyModal",e)},getTimeString(e){let t=Math.floor(e/1e3),s=Math.floor(t/3600/24),o=Math.floor(t%86400/3600),a=Math.floor(t%3600/60),n=Math.floor(t%60);return o<10&&(o="0"+o),a<10&&(a="0"+a),n<10&&(n="0"+n),e<=0?`${s} ${(0,z.Z)("days")}`:`${s} ${(0,z.Z)("days")} ${o}:${a}:${n}`}}});const X=(0,Y.Z)(Q,[["render",M],["__scopeId","data-v-7e3eff4e"]]);var ee=X,te=s(4268),se=s(9242),oe=s(3356);const ae=e=>((0,o.dD)("data-v-44de1518"),e=e(),(0,o.Cn)(),e),ne={class:"wrapper"},le={class:"modal-container"},ie={class:"modal-content"},re=ae((()=>(0,o._)("img",{src:oe,alt:""},null,-1))),ue=[re],ce={class:"content-top"},de=["src"],pe={class:"data"},me={class:"type"},ge={class:"amount"},ye={key:0,class:"input-wrap"},he={class:"label"},_e={class:"comission"},be={class:"btnz-wrap"},fe={key:0,class:"default"},we={key:1,class:"button activated"};function ve(e,t,s,n,l,i){return(0,o.wg)(),(0,o.iD)("div",ne,[(0,o._)("div",{class:"blur",onClick:t[0]||(t[0]=t=>e.$emit("closeModal"))}),(0,o._)("div",le,[(0,o._)("div",ie,[(0,o._)("button",{class:"close-button",onClick:t[1]||(t[1]=t=>e.$emit("closeModal"))},ue),(0,o._)("div",ce,[(0,o._)("img",{src:e.getImage(e.selectedBonus.bonusType),alt:"",class:"image"},null,8,de),(0,o._)("div",pe,[(0,o._)("span",me,(0,a.zw)(e.$localizeFilter(e.selectedBonus.bonusType)),1),(0,o._)("span",ge,(0,a.zw)("referrals_pack"===e.selectedBonus.bonusType||"money"===e.selectedBonus.bonusType?e.selectedBonus.amount:e.selectedBonus.amount+" %"),1)])]),e.showGiftBonusInput?((0,o.wg)(),(0,o.iD)("div",ye,[(0,o._)("label",he,(0,a.zw)(e.$localizeFilter("bonus_apply_modal_input")),1),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.userId=t),type:"number",class:"input"},null,512),[[se.nr,e.userId]]),(0,o._)("span",_e,(0,a.zw)(e.$localizeFilter("bonus_apply_modal_commission")),1)])):(0,o.kq)("",!0),(0,o._)("div",be,[!1===e.appliedBonus?((0,o.wg)(),(0,o.iD)("div",fe,[(0,o._)("button",{id:"applyBonusBtn",class:"button",onClick:t[3]||(t[3]=(...t)=>e.activateBonus&&e.activateBonus(...t))},(0,a.zw)(e.$localizeFilter("bonus_apply_modal_btn_apply")),1),(0,o._)("button",{id:"giftBtn",class:"button",onClick:t[4]||(t[4]=(...t)=>e.giftBonus&&e.giftBonus(...t))},(0,a.zw)(e.$localizeFilter("bonus_apply_modal_btn_gift")),1)])):((0,o.wg)(),(0,o.iD)("button",we,(0,a.zw)(e.$localizeFilter("bonus_apply_modal_btn_applied")),1))])])])])}var Be=(0,B.aZ)({props:{selectedBonus:{type:Object,required:!0}},data(){return{appliedBonus:!1,showGiftBonusInput:!1,userId:null}},computed:{},async mounted(){},methods:{getImage(e){switch(e){case"mortgage_first_payment":return s(5106);case"referral_accruals":return s(9381);case"instant_dividends":return s(921);case"referrals_pack":return s(4066);case"money":return s(1344);default:return""}},async activateBonus(){this.appliedBonus=!0;try{await this.$store.dispatch("activateBonus",{bonusId:this.selectedBonus.id}),setTimeout((()=>{this.$emit("reloadData"),this.$emit("closeModal")}),2e3)}catch(e){this.$error(e),console.log(e)}},async giftBonus(){if(!1===this.showGiftBonusInput){let e=document.getElementById("applyBonusBtn");e.style.display="none",this.showGiftBonusInput=!0}else if(!0===this.showGiftBonusInput)try{await this.$store.dispatch("sendBonus",{toClientId:this.userId,bonusId:this.selectedBonus.id});let e=document.getElementById("giftBtn");e.classList.add("activated"),e.innerText=`${(0,z.Z)("bonus_apply_modal_btn_gifted")}`,setTimeout((()=>{this.$emit("reloadData"),this.$emit("closeModal")}),2e3)}catch(e){this.$error(e),console.log(e)}}}});const $e=(0,Y.Z)(Be,[["render",ve],["__scopeId","data-v-44de1518"]]);var Me=$e;const ze=e=>((0,o.dD)("data-v-7f678fac"),e=e(),(0,o.Cn)(),e),Te={class:"wrapper"},ke={class:"modal-container"},Ie={class:"modal-content"},De=ze((()=>(0,o._)("img",{src:oe,alt:""},null,-1))),Ae=[De],Se={class:"text"};function Fe(e,t,s,n,l,i){return(0,o.wg)(),(0,o.iD)("div",Te,[(0,o._)("div",{class:"blur",onClick:t[0]||(t[0]=t=>e.$emit("closeModal"))}),(0,o._)("div",ke,[(0,o._)("div",Ie,[(0,o._)("button",{class:"close-button",onClick:t[1]||(t[1]=t=>e.$emit("closeModal"))},Ae),(0,o._)("p",Se,(0,a.zw)(e.$localizeFilter("mortgage_bonus_modal_text")),1)])])])}var Ce=(0,B.aZ)({props:{},data(){},computed:{},async mounted(){},methods:{}});const Le=(0,Y.Z)(Ce,[["render",Fe],["__scopeId","data-v-7f678fac"]]);var Ze=Le,xe=(0,B.aZ)({name:"MyNeuroBonuses",components:{MyNeuroBonusesList:ee,BonusApplyModal:Me,MortgageBonusApplyModal:Ze},mixins:[te.Z],data(){return{bonuses:[],count:0,showBonusApplyModal:!1,selectedBonus:{},showMortgageBonusApplyModal:!1}},computed:{profile(){return this.$store.getters.profile}},watch:{page(){this.$nextTick((()=>{let e=document.getElementById("anchor");e.scrollIntoView({behavior:"smooth"}),this.loadData()}))}},created(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},async mounted(){try{await this.loadData(),await this.$store.dispatch("getProfile")}catch(e){console.log(e)}},methods:{triggerBonusApplyModal(e){this.selectedBonus=e,"mortgage_first_payment"===e.bonusType?this.showMortgageBonusApplyModal=!0:this.showBonusApplyModal=!0},scrollToTop(){let e=document.getElementById("lotterySpinningId");e.scrollIntoView({behavior:"smooth"})},handleScroll(e){window.pageYOffset>100?document.querySelector(".scroll-up-btn").style.display="block":document.querySelector(".scroll-up-btn").style.display="none"},scrollUp(){window.scrollTo({top:0,behavior:"smooth"})},async logout(){try{await this.$store.dispatch("logout")}catch(e){console.log(e)}finally{location.href=`${location.origin}/`}},async loadData(){try{const e={skip:this.skip,limit:this.limit},t=await this.$store.dispatch("getMyBonuses",e);this.bonuses=t,console.log(this.bonuses);const{count:s}=await this.$store.dispatch("getMyBonusesCount");this.count=s,this.setupPagination(this.bonuses,this.count)}catch(e){this.$error(e)}}}});const Re=(0,Y.Z)(xe,[["render",v],["__scopeId","data-v-23acee08"]]);var Ee=Re},9381:function(e,t,s){e.exports=s.p+"img/bonus-1.a4cb049b.svg"},921:function(e,t,s){e.exports=s.p+"img/bonus-2.17caff6e.svg"},4066:function(e,t,s){e.exports=s.p+"img/bonus-3.13895101.svg"},1344:function(e,t,s){e.exports=s.p+"img/bonus-4.01d05ab7.svg"},5106:function(e,t,s){e.exports=s.p+"img/bonus-5.e4174af2.svg"}}]);