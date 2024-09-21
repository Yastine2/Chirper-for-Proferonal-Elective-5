import{o as f,f as g,r as v,s as $,k as C,l as B,h as D,c as E,a as n,w as r,i as p,p as y,b as s,q as w,n as h,g as S,x as V,m as b,T as U,y as T,d as x,u as d,z as A}from"./app-CUDNoaSi.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z,a as M,b as O}from"./TextInput-DNRHRKPZ.js";const P={},W={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"};function F(o,l){return f(),g("button",W,[v(o.$slots,"default")])}const _=N(P,[["render",F]]),I={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},K={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(o,{emit:l}){const a=o,t=l;$(()=>a.show,()=>{a.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const u=()=>{a.closeable&&t("close")},i=m=>{m.key==="Escape"&&a.show&&u()};C(()=>document.addEventListener("keydown",i)),B(()=>{document.removeEventListener("keydown",i),document.body.style.overflow=null});const c=D(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[a.maxWidth]);return(m,e)=>(f(),E(V,{to:"body"},[n(w,{"leave-active-class":"duration-200"},{default:r(()=>[p(s("div",I,[n(w,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:r(()=>[p(s("div",{class:"fixed inset-0 transform transition-all",onClick:u},e[0]||(e[0]=[s("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1)]),512),[[y,o.show]])]),_:1}),n(w,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:r(()=>[p(s("div",{class:h(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",c.value])},[o.show?v(m.$slots,"default",{key:0}):S("",!0)],2),[[y,o.show]])]),_:3})],512),[[y,o.show]])]),_:3})]))}},L=["type"],j={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(o){return(l,a)=>(f(),g("button",{type:o.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},[v(l.$slots,"default")],8,L))}},q={class:"space-y-6"},G={class:"p-6"},H={class:"mt-6"},J={class:"mt-6 flex justify-end"},Y={__name:"DeleteUserForm",setup(o){const l=b(!1),a=b(null),t=U({password:""}),u=()=>{l.value=!0,T(()=>a.value.focus())},i=()=>{t.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>a.value.focus(),onFinish:()=>t.reset()})},c=()=>{l.value=!1,t.clearErrors(),t.reset()};return(m,e)=>(f(),g("section",q,[e[6]||(e[6]=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1)),n(_,{onClick:u},{default:r(()=>e[1]||(e[1]=[x("Delete Account")])),_:1}),n(K,{show:l.value,onClose:c},{default:r(()=>[s("div",G,[e[4]||(e[4]=s("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1)),e[5]||(e[5]=s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1)),s("div",H,[n(z,{for:"password",value:"Password",class:"sr-only"}),n(M,{id:"password",ref_key:"passwordInput",ref:a,modelValue:d(t).password,"onUpdate:modelValue":e[0]||(e[0]=k=>d(t).password=k),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:A(i,["enter"])},null,8,["modelValue"]),n(O,{message:d(t).errors.password,class:"mt-2"},null,8,["message"])]),s("div",J,[n(j,{onClick:c},{default:r(()=>e[2]||(e[2]=[x(" Cancel ")])),_:1}),n(_,{class:h(["ms-3",{"opacity-25":d(t).processing}]),disabled:d(t).processing,onClick:i},{default:r(()=>e[3]||(e[3]=[x(" Delete Account ")])),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{Y as default};
