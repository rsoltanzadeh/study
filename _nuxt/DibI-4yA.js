import{l as C,am as k,an as g,d as T,b8 as B,b9 as D,ba as H,bb as V,ap as A,aq as y,D as v,ae as $,af as L,ag as s,b as h,ai as b,w as n,g as p,ak as d,e as f,n as r,f as j,aj as F}from"./DFIC4vQZ.js";const O={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},P=k(g.ui.strategy,g.ui.modal,O),R=T({components:{HDialog:B,HDialogPanel:D,TransitionRoot:H,TransitionChild:V},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:a}){const{ui:l,attrs:c}=A("modal",y(e,"ui"),P,y(e,"class")),i=v({get(){return e.modelValue},set(t){a("update:modelValue",t)}}),m=v(()=>e.transition?{...l.value.transition}:{});function o(t){if(e.preventClose){a("close-prevented");return}i.value=t,a("close")}const u=()=>{a("after-leave")};return $(()=>L("$LHXzXGt1Xf")),{ui:l,attrs:c,isOpen:i,transitionClass:m,onAfterLeave:u,close:o}}});function z(e,a,l,c,i,m){const o=s("TransitionChild"),u=s("HDialogPanel"),t=s("HDialog"),w=s("TransitionRoot");return h(),b(w,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:n(()=>[p(t,d({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:n(()=>[e.overlay?(h(),b(o,d({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:n(()=>[f("div",{class:r([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):j("",!0),f("div",{class:r(e.ui.inner)},[f("div",{class:r([e.ui.container,!e.fullscreen&&e.ui.padding])},[p(o,d({as:"template",appear:e.appear},e.transitionClass),{default:n(()=>[p(u,{class:r([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:n(()=>[F(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const S=C(R,[["render",z]]);export{S as _};