(self.webpackChunkcu_std_home=self.webpackChunkcu_std_home||[]).push([[5930,3549],{6860:(b,E,l)=>{l.d(E,{BQ:()=>i,Fb:()=>T,KT:()=>I,OD:()=>p});var h=l(3083),n=l(9853);let f;try{f=typeof Intl<"u"&&Intl.v8BreakIterator}catch{f=!1}let u,v,p=(()=>{class e{constructor(c){this._platformId=c,this.isBrowser=this._platformId?(0,n.isPlatformBrowser)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!f)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static#e=this.\u0275fac=function(g){return new(g||e)(h.\u0275\u0275inject(h.PLATFORM_ID))};static#t=this.\u0275prov=h.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function i(e){return function r(){if(null==u&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>u=!0}))}finally{u=u||!1}return u}()?e:!!e.capture}function I(e){if(function D(){if(null==v){const e=typeof document<"u"?document.head:null;v=!(!e||!e.createShadowRoot&&!e.attachShadow)}return v}()){const o=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function T(e){return e.composedPath?e.composedPath()[0]:e.target}},5930:(b,E,l)=>{l.r(E),l.d(E,{NZ_WAVE_GLOBAL_CONFIG:()=>d,NZ_WAVE_GLOBAL_DEFAULT_CONFIG:()=>w,NzWaveDirective:()=>y,NzWaveModule:()=>u,NzWaveRenderer:()=>p,provideNzWave:()=>m});var h=l(6860),n=l(3083),f=l(5877);class p{get waveAttributeName(){return this.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}constructor(i,t,s,a,N){this.triggerElement=i,this.ngZone=t,this.insertExtraNode=s,this.platformId=a,this.cspNonce=N,this.waveTransitionDuration=400,this.styleForPseudo=null,this.extraNode=null,this.lastTime=0,this.onClick=_=>{!this.triggerElement||!this.triggerElement.getAttribute||this.triggerElement.getAttribute("disabled")||"INPUT"===_.target.tagName||this.triggerElement.className.indexOf("disabled")>=0||this.fadeOutWave()},this.platform=new h.OD(this.platformId),this.clickHandler=this.onClick.bind(this),this.bindTriggerEvent()}bindTriggerEvent(){this.platform.isBrowser&&this.ngZone.runOutsideAngular(()=>{this.removeTriggerEvent(),this.triggerElement&&this.triggerElement.addEventListener("click",this.clickHandler,!0)})}removeTriggerEvent(){this.triggerElement&&this.triggerElement.removeEventListener("click",this.clickHandler,!0)}removeStyleAndExtraNode(){this.styleForPseudo&&document.body.contains(this.styleForPseudo)&&(document.body.removeChild(this.styleForPseudo),this.styleForPseudo=null),this.insertExtraNode&&this.triggerElement.contains(this.extraNode)&&this.triggerElement.removeChild(this.extraNode)}destroy(){this.removeTriggerEvent(),this.removeStyleAndExtraNode()}fadeOutWave(){const i=this.triggerElement,t=this.getWaveColor(i);i.setAttribute(this.waveAttributeName,"true"),!(Date.now()<this.lastTime+this.waveTransitionDuration)&&(this.isValidColor(t)&&(this.styleForPseudo||(this.styleForPseudo=document.createElement("style"),this.cspNonce&&(this.styleForPseudo.nonce=this.cspNonce)),this.styleForPseudo.innerHTML=`\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ${t};\n      }`,document.body.appendChild(this.styleForPseudo)),this.insertExtraNode&&(this.extraNode||(this.extraNode=document.createElement("div")),this.extraNode.className="ant-click-animating-node",i.appendChild(this.extraNode)),this.lastTime=Date.now(),this.runTimeoutOutsideZone(()=>{i.removeAttribute(this.waveAttributeName),this.removeStyleAndExtraNode()},this.waveTransitionDuration))}isValidColor(i){return!!i&&"#ffffff"!==i&&"rgb(255, 255, 255)"!==i&&this.isNotGrey(i)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(i)&&"transparent"!==i}isNotGrey(i){const t=i.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(t&&t[1]&&t[2]&&t[3]&&t[1]===t[2]&&t[2]===t[3])}getWaveColor(i){const t=getComputedStyle(i);return t.getPropertyValue("border-top-color")||t.getPropertyValue("border-color")||t.getPropertyValue("background-color")}runTimeoutOutsideZone(i,t){this.ngZone.runOutsideAngular(()=>setTimeout(i,t))}}const w={disabled:!1},d=new n.InjectionToken("nz-wave-global-options");function m(r){return(0,n.makeEnvironmentProviders)([{provide:d,useValue:r}])}let y=(()=>{class r{get disabled(){return this.waveDisabled}get rendererRef(){return this.waveRenderer}constructor(t,s,a,N,_,v){this.ngZone=t,this.elementRef=s,this.config=a,this.animationType=N,this.platformId=_,this.cspNonce=v,this.nzWaveExtraNode=!1,this.waveDisabled=!1,this.waveDisabled=this.isConfigDisabled()}isConfigDisabled(){let t=!1;return this.config&&"boolean"==typeof this.config.disabled&&(t=this.config.disabled),"NoopAnimations"===this.animationType&&(t=!0),t}ngOnDestroy(){this.waveRenderer&&this.waveRenderer.destroy()}ngOnInit(){this.renderWaveIfEnabled()}renderWaveIfEnabled(){!this.waveDisabled&&this.elementRef.nativeElement&&(this.waveRenderer=new p(this.elementRef.nativeElement,this.ngZone,this.nzWaveExtraNode,this.platformId,this.cspNonce))}disable(){this.waveDisabled=!0,this.waveRenderer&&(this.waveRenderer.removeTriggerEvent(),this.waveRenderer.removeStyleAndExtraNode())}enable(){this.waveDisabled=this.isConfigDisabled()||!1,this.waveRenderer&&this.waveRenderer.bindTriggerEvent()}static#e=this.\u0275fac=function(s){return new(s||r)(n.\u0275\u0275directiveInject(n.NgZone),n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(d,8),n.\u0275\u0275directiveInject(f.ANIMATION_MODULE_TYPE,8),n.\u0275\u0275directiveInject(n.PLATFORM_ID),n.\u0275\u0275directiveInject(n.CSP_NONCE,8))};static#t=this.\u0275dir=n.\u0275\u0275defineDirective({type:r,selectors:[["","nz-wave",""],["button","nz-button","",3,"nzType","link",3,"nzType","text"]],inputs:{nzWaveExtraNode:"nzWaveExtraNode"},exportAs:["nzWave"],standalone:!0})}return r})(),u=(()=>{class r{static#e=this.\u0275fac=function(s){return new(s||r)};static#t=this.\u0275mod=n.\u0275\u0275defineNgModule({type:r});static#i=this.\u0275inj=n.\u0275\u0275defineInjector({providers:[m(w)]})}return r})()}}]);