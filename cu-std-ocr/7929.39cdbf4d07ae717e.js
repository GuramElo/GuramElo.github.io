(self.webpackChunkcu_std_ocr=self.webpackChunkcu_std_ocr||[]).push([[7929,310],{8203:(se,R,C)=>{C.d(R,{dS:()=>N,jI:()=>g});var T=C(3083),L=C(9853);const o=new T.InjectionToken("cdk-dir-doc",{providedIn:"root",factory:function A(){return(0,T.inject)(L.DOCUMENT)}}),b=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let N=(()=>{class w{constructor(v){this.value="ltr",this.change=new T.EventEmitter,v&&(this.value=function S(w){const z=w?.toLowerCase()||"";return"auto"===z&&typeof navigator<"u"&&navigator?.language?b.test(navigator.language)?"rtl":"ltr":"rtl"===z?"rtl":"ltr"}((v.body?v.body.dir:null)||(v.documentElement?v.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}static#e=this.\u0275fac=function(y){return new(y||w)(T.\u0275\u0275inject(o,8))};static#t=this.\u0275prov=T.\u0275\u0275defineInjectable({token:w,factory:w.\u0275fac,providedIn:"root"})}return w})(),g=(()=>{class w{static#e=this.\u0275fac=function(y){return new(y||w)};static#t=this.\u0275mod=T.\u0275\u0275defineNgModule({type:w});static#n=this.\u0275inj=T.\u0275\u0275defineInjector({})}return w})()},4085:(se,R,C)=>{C.d(R,{FG:()=>b,a1:()=>S,he:()=>L,i8:()=>N,o1:()=>A});var T=C(3083);function L(g){return null!=g&&"false"!=`${g}`}function A(g){return!isNaN(parseFloat(g))&&!isNaN(Number(g))}function b(g){return Array.isArray(g)?g:[g]}function S(g){return null==g?"":"string"==typeof g?g:`${g}px`}function N(g){return g instanceof T.ElementRef?g.nativeElement:g}},7336:(se,R,C)=>{C.d(R,{A:()=>u,A$:()=>W,FX:()=>S,Fm:()=>b,Ge:()=>be,Kp:()=>Z,LE:()=>te,UQ:()=>$,W3:()=>N,Z:()=>ie,_f:()=>z,bn:()=>oe,dB:()=>O,eg:()=>Ie,f2:()=>B,i7:()=>Q,n6:()=>ne,rp:()=>Ae,w_:()=>y,wn:()=>o,yZ:()=>J});const o=9,b=13,S=16,N=17,W=18,z=27,y=33,O=34,Z=35,J=36,$=37,Q=38,te=39,ne=40,B=48,oe=57,u=65,ie=90,be=91,Ie=224;function Ae(ae,...ot){return ot.length?ot.some(gt=>ae[gt]):ae.altKey||ae.shiftKey||ae.ctrlKey||ae.metaKey}},6860:(se,R,C)=>{C.d(R,{BQ:()=>z,CZ:()=>Z,Fb:()=>U,KT:()=>te,OD:()=>A,v8:()=>q});var T=C(3083),L=C(9853);let o;try{o=typeof Intl<"u"&&Intl.v8BreakIterator}catch{o=!1}let g,O,$,A=(()=>{class p{constructor(B){this._platformId=B,this.isBrowser=this._platformId?(0,L.isPlatformBrowser)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!o)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static#e=this.\u0275fac=function(K){return new(K||p)(T.\u0275\u0275inject(T.PLATFORM_ID))};static#t=this.\u0275prov=T.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();function z(p){return function w(){if(null==g&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>g=!0}))}finally{g=g||!1}return g}()?p:!!p.capture}function Z(){if(null==O){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return O=!1,O;if("scrollBehavior"in document.documentElement.style)O=!0;else{const p=Element.prototype.scrollTo;O=!!p&&!/\{\s*\[native code\]\s*\}/.test(p.toString())}}return O}function te(p){if(function Q(){if(null==$){const p=typeof document<"u"?document.head:null;$=!(!p||!p.createShadowRoot&&!p.attachShadow)}return $}()){const F=p.getRootNode?p.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&F instanceof ShadowRoot)return F}return null}function U(p){return p.composedPath?p.composedPath()[0]:p.target}function q(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}},7929:(se,R,C)=>{C.r(R),C.d(R,{NzAutosizeDirective:()=>tt,NzInputDirective:()=>le,NzInputGroupComponent:()=>Ce,NzInputGroupSlotComponent:()=>ue,NzInputGroupWhitSuffixOrPrefixDirective:()=>et,NzInputModule:()=>it,NzTextareaCountComponent:()=>nt});var T=C(1635),L=C(9853),o=C(3083),A=C(4866),b=C(2778),S=C(9626),N=C(5178),W=C(8712),g=C(4694),w=C(343),z=C(8203),v=C(6860),y=C(7336),O=C(4085);const Y=new o.InjectionToken("cdk-input-modality-detector-options"),Ee={ignoreKeys:[y.A$,y.W3,y.eg,y.Ge,y.FX]},ee=(0,v.BQ)({passive:!0,capture:!0});let Te=(()=>{class n{get mostRecentModality(){return this._modality.value}constructor(e,t,i,d){this._platform=e,this._mostRecentTarget=null,this._modality=new A.BehaviorSubject(null),this._lastTouchMs=0,this._onKeydown=f=>{this._options?.ignoreKeys?.some(E=>E===f.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=(0,v.Fb)(f))},this._onMousedown=f=>{Date.now()-this._lastTouchMs<650||(this._modality.next(function H(n){return 0===n.buttons||0===n.detail}(f)?"keyboard":"mouse"),this._mostRecentTarget=(0,v.Fb)(f))},this._onTouchstart=f=>{!function V(n){const s=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!(!s||-1!==s.identifier||null!=s.radiusX&&1!==s.radiusX||null!=s.radiusY&&1!==s.radiusY)}(f)?(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,v.Fb)(f)):this._modality.next("keyboard")},this._options={...Ee,...d},this.modalityDetected=this._modality.pipe((0,b.skip)(1)),this.modalityChanged=this.modalityDetected.pipe((0,b.distinctUntilChanged)()),e.isBrowser&&t.runOutsideAngular(()=>{i.addEventListener("keydown",this._onKeydown,ee),i.addEventListener("mousedown",this._onMousedown,ee),i.addEventListener("touchstart",this._onTouchstart,ee)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,ee),document.removeEventListener("mousedown",this._onMousedown,ee),document.removeEventListener("touchstart",this._onTouchstart,ee))}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(v.OD),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(L.DOCUMENT),o.\u0275\u0275inject(Y,8))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ie=function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n}(ie||{});const be=new o.InjectionToken("cdk-focus-monitor-default-options"),re=(0,v.BQ)({passive:!0,capture:!0});let we=(()=>{class n{constructor(e,t,i,d,f){this._ngZone=e,this._platform=t,this._inputModalityDetector=i,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new A.Subject,this._rootNodeFocusAndBlurListener=E=>{for(let X=(0,v.Fb)(E);X;X=X.parentElement)"focus"===E.type?this._onFocus(E,X):this._onBlur(E,X)},this._document=d,this._detectionMode=f?.detectionMode||ie.IMMEDIATE}monitor(e,t=!1){const i=(0,O.i8)(e);if(!this._platform.isBrowser||1!==i.nodeType)return(0,A.of)();const d=(0,v.KT)(i)||this._getDocument(),f=this._elementInfo.get(i);if(f)return t&&(f.checkChildren=!0),f.subject;const E={checkChildren:t,subject:new A.Subject,rootNode:d};return this._elementInfo.set(i,E),this._registerGlobalListeners(E),E.subject}stopMonitoring(e){const t=(0,O.i8)(e),i=this._elementInfo.get(t);i&&(i.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(i))}focusVia(e,t,i){const d=(0,O.i8)(e);d===this._getDocument().activeElement?this._getClosestElementsInfo(d).forEach(([E,P])=>this._originChanged(E,t,P)):(this._setOrigin(t),"function"==typeof d.focus&&d.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ie.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused","touch"===t),e.classList.toggle("cdk-keyboard-focused","keyboard"===t),e.classList.toggle("cdk-mouse-focused","mouse"===t),e.classList.toggle("cdk-program-focused","program"===t)}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&t,this._detectionMode===ie.IMMEDIATE&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,t){const i=this._elementInfo.get(t),d=(0,v.Fb)(e);!i||!i.checkChildren&&t!==d||this._originChanged(t,this._getFocusOrigin(d),i)}_onBlur(e,t){const i=this._elementInfo.get(t);!i||i.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(i,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const t=e.rootNode,i=this._rootNodeFocusListenerCount.get(t)||0;i||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,re),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,re)}),this._rootNodeFocusListenerCount.set(t,i+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,b.takeUntil)(this._stopInputModalityDetector)).subscribe(d=>{this._setOrigin(d,!0)}))}_removeGlobalListeners(e){const t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){const i=this._rootNodeFocusListenerCount.get(t);i>1?this._rootNodeFocusListenerCount.set(t,i-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,re),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,re),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,i){this._setClasses(e,t),this._emitOrigin(i,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){const t=[];return this._elementInfo.forEach((i,d)=>{(d===e||i.checkChildren&&d.contains(e))&&t.push([d,i])}),t}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:t,mostRecentModality:i}=this._inputModalityDetector;if("mouse"!==i||!t||t===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const d=e.labels;if(d)for(let f=0;f<d.length;f++)if(d[f].contains(t))return!0;return!1}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(v.OD),o.\u0275\u0275inject(Te),o.\u0275\u0275inject(L.DOCUMENT,8),o.\u0275\u0275inject(be,8))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Me=C(2498);const De=["nz-input-group-slot",""],ve=["*"];function Fe(n,s){if(1&n&&o.\u0275\u0275element(0,"span",0),2&n){const e=o.\u0275\u0275nextContext();o.\u0275\u0275property("nzType",e.icon)}}function Ne(n,s){if(1&n&&(o.\u0275\u0275elementContainerStart(0),o.\u0275\u0275text(1),o.\u0275\u0275elementContainerEnd()),2&n){const e=o.\u0275\u0275nextContext();o.\u0275\u0275advance(),o.\u0275\u0275textInterpolate(e.template)}}function xe(n,s){if(1&n&&o.\u0275\u0275element(0,"span",3),2&n){const e=o.\u0275\u0275nextContext(2);o.\u0275\u0275property("icon",e.nzAddOnBeforeIcon)("template",e.nzAddOnBefore)}}function ze(n,s){}function ke(n,s){if(1&n&&(o.\u0275\u0275elementStart(0,"span",5),o.\u0275\u0275template(1,ze,0,0,"ng-template",6),o.\u0275\u0275elementEnd()),2&n){const e=o.\u0275\u0275nextContext(2),t=o.\u0275\u0275reference(3);o.\u0275\u0275classProp("ant-input-affix-wrapper-disabled",e.disabled)("ant-input-affix-wrapper-sm",e.isSmall)("ant-input-affix-wrapper-lg",e.isLarge)("ant-input-affix-wrapper-focused",e.focused),o.\u0275\u0275property("ngClass",e.affixInGroupStatusCls),o.\u0275\u0275advance(),o.\u0275\u0275property("ngTemplateOutlet",t)}}function Le(n,s){}function Re(n,s){if(1&n&&o.\u0275\u0275template(0,Le,0,0,"ng-template",6),2&n){o.\u0275\u0275nextContext(2);const e=o.\u0275\u0275reference(5);o.\u0275\u0275property("ngTemplateOutlet",e)}}function je(n,s){if(1&n&&o.\u0275\u0275element(0,"span",3),2&n){const e=o.\u0275\u0275nextContext(2);o.\u0275\u0275property("icon",e.nzAddOnAfterIcon)("template",e.nzAddOnAfter)}}function Pe(n,s){if(1&n&&(o.\u0275\u0275elementStart(0,"span",2),o.\u0275\u0275template(1,xe,1,2,"span",3)(2,ke,2,10,"span",4)(3,Re,1,1)(4,je,1,2,"span",3),o.\u0275\u0275elementEnd()),2&n){const e=o.\u0275\u0275nextContext();o.\u0275\u0275advance(),o.\u0275\u0275conditional(1,e.nzAddOnBefore||e.nzAddOnBeforeIcon?1:-1),o.\u0275\u0275advance(),o.\u0275\u0275conditional(2,e.isAffix||e.hasFeedback?2:3),o.\u0275\u0275advance(2),o.\u0275\u0275conditional(4,e.nzAddOnAfter||e.nzAddOnAfterIcon?4:-1)}}function Be(n,s){}function He(n,s){if(1&n&&o.\u0275\u0275template(0,Be,0,0,"ng-template",6),2&n){o.\u0275\u0275nextContext(2);const e=o.\u0275\u0275reference(3);o.\u0275\u0275property("ngTemplateOutlet",e)}}function Ue(n,s){}function Ke(n,s){if(1&n&&o.\u0275\u0275template(0,Ue,0,0,"ng-template",6),2&n){o.\u0275\u0275nextContext(2);const e=o.\u0275\u0275reference(5);o.\u0275\u0275property("ngTemplateOutlet",e)}}function Ge(n,s){if(1&n&&o.\u0275\u0275template(0,He,1,1,null,6)(1,Ke,1,1),2&n){const e=o.\u0275\u0275nextContext();o.\u0275\u0275conditional(0,e.isAffix?0:1)}}function Ve(n,s){if(1&n&&o.\u0275\u0275element(0,"span",7),2&n){const e=o.\u0275\u0275nextContext(2);o.\u0275\u0275property("icon",e.nzPrefixIcon)("template",e.nzPrefix)}}function $e(n,s){}function We(n,s){if(1&n&&o.\u0275\u0275element(0,"nz-form-item-feedback-icon",9),2&n){const e=o.\u0275\u0275nextContext(3);o.\u0275\u0275property("status",e.status)}}function Ze(n,s){if(1&n&&(o.\u0275\u0275elementStart(0,"span",8),o.\u0275\u0275template(1,We,1,1,"nz-form-item-feedback-icon",9),o.\u0275\u0275elementEnd()),2&n){const e=o.\u0275\u0275nextContext(2);o.\u0275\u0275property("icon",e.nzSuffixIcon)("template",e.nzSuffix),o.\u0275\u0275advance(),o.\u0275\u0275conditional(1,e.isFeedback?1:-1)}}function Qe(n,s){if(1&n&&o.\u0275\u0275template(0,Ve,1,2,"span",7)(1,$e,0,0,"ng-template",6)(2,Ze,2,3,"span",8),2&n){const e=o.\u0275\u0275nextContext(),t=o.\u0275\u0275reference(5);o.\u0275\u0275conditional(0,e.nzPrefix||e.nzPrefixIcon?0:-1),o.\u0275\u0275advance(),o.\u0275\u0275property("ngTemplateOutlet",t),o.\u0275\u0275advance(),o.\u0275\u0275conditional(2,e.nzSuffix||e.nzSuffixIcon||e.isFeedback?2:-1)}}function Ye(n,s){if(1&n&&(o.\u0275\u0275elementStart(0,"span",10),o.\u0275\u0275element(1,"nz-form-item-feedback-icon",9),o.\u0275\u0275elementEnd()),2&n){const e=o.\u0275\u0275nextContext(2);o.\u0275\u0275advance(),o.\u0275\u0275property("status",e.status)}}function Xe(n,s){if(1&n&&(o.\u0275\u0275projection(0),o.\u0275\u0275template(1,Ye,2,1,"span",10)),2&n){const e=o.\u0275\u0275nextContext();o.\u0275\u0275advance(),o.\u0275\u0275conditional(1,e.isAddOn||e.isAffix||!e.isFeedback?-1:1)}}const Je=[[["textarea","nz-input",""]]],qe=["textarea[nz-input]"];let ue=(()=>{class n{constructor(){this.icon=null,this.type=null,this.template=null}static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275cmp=o.\u0275\u0275defineComponent({type:n,selectors:[["","nz-input-group-slot",""]],hostVars:6,hostBindings:function(t,i){2&t&&o.\u0275\u0275classProp("ant-input-group-addon","addon"===i.type)("ant-input-prefix","prefix"===i.type)("ant-input-suffix","suffix"===i.type)},inputs:{icon:"icon",type:"type",template:"template"},standalone:!0,features:[o.\u0275\u0275StandaloneFeature],attrs:De,ngContentSelectors:ve,decls:3,vars:2,consts:[["nz-icon","",3,"nzType"],[4,"nzStringTemplateOutlet"]],template:function(t,i){1&t&&(o.\u0275\u0275projectionDef(),o.\u0275\u0275template(0,Fe,1,1,"span",0)(1,Ne,2,1,"ng-container",1),o.\u0275\u0275projection(2)),2&t&&(o.\u0275\u0275conditional(0,i.icon?0:-1),o.\u0275\u0275advance(),o.\u0275\u0275property("nzStringTemplateOutlet",i.template))},dependencies:[g.NzIconModule,g.NzIconDirective,W.NzOutletModule,W.NzStringTemplateOutletDirective],encapsulation:2,changeDetection:0})}return n})(),le=(()=>{class n{get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=null!=e&&"false"!=`${e}`}constructor(e,t,i,d,f,E,P){this.ngControl=e,this.renderer=t,this.elementRef=i,this.hostView=d,this.directionality=f,this.nzFormStatusService=E,this.nzFormNoStatusService=P,this.nzBorderless=!1,this.nzSize="default",this.nzStepperless=!0,this.nzStatus="",this._disabled=!1,this.disabled$=new A.Subject,this.dir="ltr",this.prefixCls="ant-input",this.status="",this.statusCls={},this.hasFeedback=!1,this.feedbackRef=null,this.components=[],this.destroy$=new A.Subject}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,b.distinctUntilChanged)((e,t)=>e.status===t.status&&e.hasFeedback===t.hasFeedback),(0,b.takeUntil)(this.destroy$)).subscribe(({status:e,hasFeedback:t})=>{this.setStatusStyles(e,t)}),this.ngControl&&this.ngControl.statusChanges?.pipe((0,b.filter)(()=>null!==this.ngControl.disabled),(0,b.takeUntil)(this.destroy$)).subscribe(()=>{this.disabled$.next(this.ngControl.disabled)}),this.dir=this.directionality.value,this.directionality.change?.pipe((0,b.takeUntil)(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnChanges(e){const{disabled:t,nzStatus:i}=e;t&&this.disabled$.next(this.disabled),i&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setStatusStyles(e,t){this.status=e,this.hasFeedback=t,this.renderFeedbackIcon(),this.statusCls=(0,N.getStatusClassNames)(this.prefixCls,e,t),Object.keys(this.statusCls).forEach(i=>{this.statusCls[i]?this.renderer.addClass(this.elementRef.nativeElement,i):this.renderer.removeClass(this.elementRef.nativeElement,i)})}renderFeedbackIcon(){if(!this.status||!this.hasFeedback||this.nzFormNoStatusService)return this.hostView.clear(),void(this.feedbackRef=null);this.feedbackRef=this.feedbackRef||this.hostView.createComponent(S.NzFormItemFeedbackIconComponent),this.feedbackRef.location.nativeElement.classList.add("ant-input-suffix"),this.feedbackRef.instance.status=this.status,this.feedbackRef.instance.updateIcon()}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275directiveInject(w.NgControl,10),o.\u0275\u0275directiveInject(o.Renderer2),o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(o.ViewContainerRef),o.\u0275\u0275directiveInject(z.dS,8),o.\u0275\u0275directiveInject(S.NzFormStatusService,8),o.\u0275\u0275directiveInject(S.NzFormNoStatusService,8))};static#t=this.\u0275dir=o.\u0275\u0275defineDirective({type:n,selectors:[["input","nz-input",""],["textarea","nz-input",""]],hostAttrs:[1,"ant-input"],hostVars:13,hostBindings:function(t,i){2&t&&(o.\u0275\u0275attribute("disabled",i.disabled||null),o.\u0275\u0275classProp("ant-input-disabled",i.disabled)("ant-input-borderless",i.nzBorderless)("ant-input-lg","large"===i.nzSize)("ant-input-sm","small"===i.nzSize)("ant-input-rtl","rtl"===i.dir)("ant-input-stepperless",i.nzStepperless))},inputs:{nzBorderless:"nzBorderless",nzSize:"nzSize",nzStepperless:"nzStepperless",nzStatus:"nzStatus",disabled:"disabled"},exportAs:["nzInput"],standalone:!0,features:[o.\u0275\u0275NgOnChangesFeature]})}return(0,T.Cg)([(0,N.InputBoolean)()],n.prototype,"nzBorderless",void 0),(0,T.Cg)([(0,N.InputBoolean)()],n.prototype,"nzStepperless",void 0),n})(),et=(()=>{class n{constructor(e){this.elementRef=e}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275directiveInject(o.ElementRef))};static#t=this.\u0275dir=o.\u0275\u0275defineDirective({type:n,selectors:[["nz-input-group","nzSuffix",""],["nz-input-group","nzPrefix",""]],standalone:!0})}return n})(),Ce=(()=>{class n{constructor(e,t,i,d,f,E,P){this.focusMonitor=e,this.elementRef=t,this.renderer=i,this.cdr=d,this.directionality=f,this.nzFormStatusService=E,this.nzFormNoStatusService=P,this.nzAddOnBeforeIcon=null,this.nzAddOnAfterIcon=null,this.nzPrefixIcon=null,this.nzSuffixIcon=null,this.nzStatus="",this.nzSize="default",this.nzSearch=!1,this.nzCompact=!1,this.isLarge=!1,this.isSmall=!1,this.isAffix=!1,this.isAddOn=!1,this.isFeedback=!1,this.focused=!1,this.disabled=!1,this.dir="ltr",this.prefixCls="ant-input",this.affixStatusCls={},this.groupStatusCls={},this.affixInGroupStatusCls={},this.status="",this.hasFeedback=!1,this.destroy$=new A.Subject}updateChildrenInputSize(){this.listOfNzInputDirective&&this.listOfNzInputDirective.forEach(e=>e.nzSize=this.nzSize)}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,b.distinctUntilChanged)((e,t)=>e.status===t.status&&e.hasFeedback===t.hasFeedback),(0,b.takeUntil)(this.destroy$)).subscribe(({status:e,hasFeedback:t})=>{this.setStatusStyles(e,t)}),this.focusMonitor.monitor(this.elementRef,!0).pipe((0,b.takeUntil)(this.destroy$)).subscribe(e=>{this.focused=!!e,this.cdr.markForCheck()}),this.dir=this.directionality.value,this.directionality.change?.pipe((0,b.takeUntil)(this.destroy$)).subscribe(e=>{this.dir=e})}ngAfterContentInit(){this.updateChildrenInputSize();const e=this.listOfNzInputDirective.changes.pipe((0,b.startWith)(this.listOfNzInputDirective));e.pipe((0,b.switchMap)(t=>(0,A.merge)(e,...t.map(i=>i.disabled$))),(0,b.mergeMap)(()=>e),(0,b.map)(t=>t.some(i=>i.disabled)),(0,b.takeUntil)(this.destroy$)).subscribe(t=>{this.disabled=t,this.cdr.markForCheck()})}ngOnChanges(e){const{nzSize:t,nzSuffix:i,nzPrefix:d,nzPrefixIcon:f,nzSuffixIcon:E,nzAddOnAfter:P,nzAddOnBefore:X,nzAddOnAfterIcon:st,nzAddOnBeforeIcon:Ie,nzStatus:Ae}=e;t&&(this.updateChildrenInputSize(),this.isLarge="large"===this.nzSize,this.isSmall="small"===this.nzSize),(i||d||f||E)&&(this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)),(P||X||st||Ie)&&(this.isAddOn=!!(this.nzAddOnAfter||this.nzAddOnBefore||this.nzAddOnAfterIcon||this.nzAddOnBeforeIcon),this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn)),Ae&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}setStatusStyles(e,t){this.status=e,this.hasFeedback=t,this.isFeedback=!!e&&t,this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)||!this.isAddOn&&t,this.affixInGroupStatusCls=this.isAffix||this.isFeedback?this.affixStatusCls=(0,N.getStatusClassNames)(`${this.prefixCls}-affix-wrapper`,e,t):{},this.cdr.markForCheck(),this.affixStatusCls=(0,N.getStatusClassNames)(`${this.prefixCls}-affix-wrapper`,this.isAddOn?"":e,!this.isAddOn&&t),this.groupStatusCls=(0,N.getStatusClassNames)(`${this.prefixCls}-group-wrapper`,this.isAddOn?e:"",!!this.isAddOn&&t);const d={...this.affixStatusCls,...this.groupStatusCls};Object.keys(d).forEach(f=>{d[f]?this.renderer.addClass(this.elementRef.nativeElement,f):this.renderer.removeClass(this.elementRef.nativeElement,f)})}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275directiveInject(we),o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(o.Renderer2),o.\u0275\u0275directiveInject(o.ChangeDetectorRef),o.\u0275\u0275directiveInject(z.dS,8),o.\u0275\u0275directiveInject(S.NzFormStatusService,8),o.\u0275\u0275directiveInject(S.NzFormNoStatusService,8))};static#t=this.\u0275cmp=o.\u0275\u0275defineComponent({type:n,selectors:[["nz-input-group"]],contentQueries:function(t,i,d){if(1&t&&o.\u0275\u0275contentQuery(d,le,4),2&t){let f;o.\u0275\u0275queryRefresh(f=o.\u0275\u0275loadQuery())&&(i.listOfNzInputDirective=f)}},hostVars:40,hostBindings:function(t,i){2&t&&o.\u0275\u0275classProp("ant-input-group-compact",i.nzCompact)("ant-input-search-enter-button",i.nzSearch)("ant-input-search",i.nzSearch)("ant-input-search-rtl","rtl"===i.dir)("ant-input-search-sm",i.nzSearch&&i.isSmall)("ant-input-search-large",i.nzSearch&&i.isLarge)("ant-input-group-wrapper",i.isAddOn)("ant-input-group-wrapper-rtl","rtl"===i.dir)("ant-input-group-wrapper-lg",i.isAddOn&&i.isLarge)("ant-input-group-wrapper-sm",i.isAddOn&&i.isSmall)("ant-input-affix-wrapper",i.isAffix&&!i.isAddOn)("ant-input-affix-wrapper-rtl","rtl"===i.dir)("ant-input-affix-wrapper-focused",i.isAffix&&i.focused)("ant-input-affix-wrapper-disabled",i.isAffix&&i.disabled)("ant-input-affix-wrapper-lg",i.isAffix&&!i.isAddOn&&i.isLarge)("ant-input-affix-wrapper-sm",i.isAffix&&!i.isAddOn&&i.isSmall)("ant-input-group",!i.isAffix&&!i.isAddOn)("ant-input-group-rtl","rtl"===i.dir)("ant-input-group-lg",!i.isAffix&&!i.isAddOn&&i.isLarge)("ant-input-group-sm",!i.isAffix&&!i.isAddOn&&i.isSmall)},inputs:{nzAddOnBeforeIcon:"nzAddOnBeforeIcon",nzAddOnAfterIcon:"nzAddOnAfterIcon",nzPrefixIcon:"nzPrefixIcon",nzSuffixIcon:"nzSuffixIcon",nzAddOnBefore:"nzAddOnBefore",nzAddOnAfter:"nzAddOnAfter",nzPrefix:"nzPrefix",nzStatus:"nzStatus",nzSuffix:"nzSuffix",nzSize:"nzSize",nzSearch:"nzSearch",nzCompact:"nzCompact"},exportAs:["nzInputGroup"],standalone:!0,features:[o.\u0275\u0275ProvidersFeature([S.NzFormNoStatusService]),o.\u0275\u0275NgOnChangesFeature,o.\u0275\u0275StandaloneFeature],ngContentSelectors:ve,decls:6,vars:1,consts:[["affixTemplate",""],["contentTemplate",""],[1,"ant-input-wrapper","ant-input-group"],["nz-input-group-slot","","type","addon",3,"icon","template"],[1,"ant-input-affix-wrapper",3,"ant-input-affix-wrapper-disabled","ant-input-affix-wrapper-sm","ant-input-affix-wrapper-lg","ant-input-affix-wrapper-focused","ngClass"],[1,"ant-input-affix-wrapper",3,"ngClass"],[3,"ngTemplateOutlet"],["nz-input-group-slot","","type","prefix",3,"icon","template"],["nz-input-group-slot","","type","suffix",3,"icon","template"],[3,"status"],["nz-input-group-slot","","type","suffix"]],template:function(t,i){1&t&&(o.\u0275\u0275projectionDef(),o.\u0275\u0275template(0,Pe,5,3,"span",2)(1,Ge,2,1)(2,Qe,3,3,"ng-template",null,0,o.\u0275\u0275templateRefExtractor)(4,Xe,2,1,"ng-template",null,1,o.\u0275\u0275templateRefExtractor)),2&t&&o.\u0275\u0275conditional(0,i.isAddOn?0:1)},dependencies:[ue,L.NgClass,L.NgTemplateOutlet,S.NzFormPatchModule,S.NzFormItemFeedbackIconComponent],encapsulation:2,changeDetection:0})}return(0,T.Cg)([(0,N.InputBoolean)()],n.prototype,"nzSearch",void 0),(0,T.Cg)([(0,N.InputBoolean)()],n.prototype,"nzCompact",void 0),n})(),tt=(()=>{class n{set nzAutosize(e){var i;"string"==typeof e||!0===e?this.autosize=!0:"string"!=typeof(i=e)&&"boolean"!=typeof i&&(i.maxRows||i.minRows)&&(this.autosize=!0,this.minRows=e.minRows,this.maxRows=e.maxRows,this.maxHeight=this.setMaxHeight(),this.minHeight=this.setMinHeight())}resizeToFitContent(e=!1){if(this.cacheTextareaLineHeight(),!this.cachedLineHeight)return;const t=this.el,i=t.value;if(!e&&this.minRows===this.previousMinRows&&i===this.previousValue)return;const d=t.placeholder;t.classList.add("nz-textarea-autosize-measuring"),t.placeholder="";let f=Math.round((t.scrollHeight-this.inputGap)/this.cachedLineHeight)*this.cachedLineHeight+this.inputGap;null!==this.maxHeight&&f>this.maxHeight&&(f=this.maxHeight),null!==this.minHeight&&f<this.minHeight&&(f=this.minHeight),t.style.height=`${f}px`,t.classList.remove("nz-textarea-autosize-measuring"),t.placeholder=d,typeof requestAnimationFrame<"u"&&this.ngZone.runOutsideAngular(()=>requestAnimationFrame(()=>{const{selectionStart:E,selectionEnd:P}=t;!this.destroy$.isStopped&&document.activeElement===t&&t.setSelectionRange(E,P)})),this.previousValue=i,this.previousMinRows=this.minRows}cacheTextareaLineHeight(){if(this.cachedLineHeight>=0||!this.el.parentNode)return;const e=this.el.cloneNode(!1);e.rows=1,e.style.position="absolute",e.style.visibility="hidden",e.style.border="none",e.style.padding="0",e.style.height="",e.style.minHeight="",e.style.maxHeight="",e.style.overflow="hidden",this.el.parentNode.appendChild(e),this.cachedLineHeight=e.clientHeight-this.inputGap,this.el.parentNode.removeChild(e),this.maxHeight=this.setMaxHeight(),this.minHeight=this.setMinHeight()}setMinHeight(){const e=this.minRows&&this.cachedLineHeight?this.minRows*this.cachedLineHeight+this.inputGap:null;return null!==e&&(this.el.style.minHeight=`${e}px`),e}setMaxHeight(){const e=this.maxRows&&this.cachedLineHeight?this.maxRows*this.cachedLineHeight+this.inputGap:null;return null!==e&&(this.el.style.maxHeight=`${e}px`),e}noopInputHandler(){}constructor(e,t,i,d){this.elementRef=e,this.ngZone=t,this.platform=i,this.resizeService=d,this.autosize=!1,this.el=this.elementRef.nativeElement,this.maxHeight=null,this.minHeight=null,this.destroy$=new A.Subject,this.inputGap=10}ngAfterViewInit(){this.autosize&&this.platform.isBrowser&&(this.resizeToFitContent(),this.resizeService.subscribe().pipe((0,b.takeUntil)(this.destroy$)).subscribe(()=>this.resizeToFitContent(!0)))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}ngDoCheck(){this.autosize&&this.platform.isBrowser&&this.resizeToFitContent()}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(o.NgZone),o.\u0275\u0275directiveInject(v.OD),o.\u0275\u0275directiveInject(Me.NzResizeService))};static#t=this.\u0275dir=o.\u0275\u0275defineDirective({type:n,selectors:[["textarea","nzAutosize",""]],hostAttrs:["rows","1"],hostBindings:function(t,i){1&t&&o.\u0275\u0275listener("input",function(){return i.noopInputHandler()})},inputs:{nzAutosize:"nzAutosize"},exportAs:["nzAutosize"],standalone:!0})}return n})(),nt=(()=>{class n{constructor(e,t){this.renderer=e,this.elementRef=t,this.nzMaxCharacterCount=0,this.nzComputeCharacterCount=i=>i.length,this.nzFormatter=(i,d)=>`${i}${d>0?`/${d}`:""}`,this.configChange$=new A.Subject,this.destroy$=new A.Subject}ngAfterContentInit(){if(!this.nzInputDirective&&(0,o.isDevMode)())throw new Error("[nz-textarea-count]: Could not find matching textarea[nz-input] child.");this.nzInputDirective.ngControl&&(0,A.merge)(this.nzInputDirective.ngControl.valueChanges||A.EMPTY,this.configChange$).pipe((0,b.takeUntil)(this.destroy$),(0,b.map)(()=>this.nzInputDirective.ngControl.value),(0,b.startWith)(this.nzInputDirective.ngControl.value)).subscribe(t=>{this.setDataCount(t)})}setDataCount(e){const t=(0,N.isNotNil)(e)?String(e):"",i=this.nzComputeCharacterCount(t),d=this.nzFormatter(i,this.nzMaxCharacterCount);this.renderer.setAttribute(this.elementRef.nativeElement,"data-count",d)}ngOnDestroy(){this.configChange$.complete(),this.destroy$.next(!0),this.destroy$.complete()}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275directiveInject(o.Renderer2),o.\u0275\u0275directiveInject(o.ElementRef))};static#t=this.\u0275cmp=o.\u0275\u0275defineComponent({type:n,selectors:[["nz-textarea-count"]],contentQueries:function(t,i,d){if(1&t&&o.\u0275\u0275contentQuery(d,le,7),2&t){let f;o.\u0275\u0275queryRefresh(f=o.\u0275\u0275loadQuery())&&(i.nzInputDirective=f.first)}},hostAttrs:[1,"ant-input-textarea-show-count"],inputs:{nzMaxCharacterCount:"nzMaxCharacterCount",nzComputeCharacterCount:"nzComputeCharacterCount",nzFormatter:"nzFormatter"},standalone:!0,features:[o.\u0275\u0275StandaloneFeature],ngContentSelectors:qe,decls:1,vars:0,template:function(t,i){1&t&&(o.\u0275\u0275projectionDef(Je),o.\u0275\u0275projection(0))},encapsulation:2,changeDetection:0})}return n})(),it=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275mod=o.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=o.\u0275\u0275defineInjector({imports:[Ce,ue]})}return n})()},1635:(se,R,C)=>{function b(r,a,c,u){var _,h=arguments.length,l=h<3?a:null===u?u=Object.getOwnPropertyDescriptor(a,c):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(r,a,c,u);else for(var I=r.length-1;I>=0;I--)(_=r[I])&&(l=(h<3?_(l):h>3?_(a,c,l):_(a,c))||l);return h>3&&l&&Object.defineProperty(a,c,l),l}function z(r,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(r,a)}function v(r,a,c,u){return new(c||(c=Promise))(function(l,_){function I(M){try{m(u.next(M))}catch(x){_(x)}}function k(M){try{m(u.throw(M))}catch(x){_(x)}}function m(M){M.done?l(M.value):function h(l){return l instanceof c?l:new c(function(_){_(l)})}(M.value).then(I,k)}m((u=u.apply(r,a||[])).next())})}function U(r){return this instanceof U?(this.v=r,this):new U(r)}function q(r,a,c){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var h,u=c.apply(r,a||[]),l=[];return h={},_("next"),_("throw"),_("return"),h[Symbol.asyncIterator]=function(){return this},h;function _(D){u[D]&&(h[D]=function(j){return new Promise(function(G,H){l.push([D,j,G,H])>1||I(D,j)})})}function I(D,j){try{!function k(D){D.value instanceof U?Promise.resolve(D.value.v).then(m,M):x(l[0][2],D)}(u[D](j))}catch(G){x(l[0][3],G)}}function m(D){I("next",D)}function M(D){I("throw",D)}function x(D,j){D(j),l.shift(),l.length&&I(l[0][0],l[0][1])}}function F(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var c,a=r[Symbol.asyncIterator];return a?a.call(r):(r=function J(r){var a="function"==typeof Symbol&&Symbol.iterator,c=a&&r[a],u=0;if(c)return c.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&u>=r.length&&(r=void 0),{value:r&&r[u++],done:!r}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")}(r),c={},u("next"),u("throw"),u("return"),c[Symbol.asyncIterator]=function(){return this},c);function u(l){c[l]=r[l]&&function(_){return new Promise(function(I,k){!function h(l,_,I,k){Promise.resolve(k).then(function(m){l({value:m,done:I})},_)}(I,k,(_=r[l](_)).done,_.value)})}}}C.d(R,{AQ:()=>q,Cg:()=>b,N3:()=>U,Sn:()=>z,sH:()=>v,xN:()=>F}),"function"==typeof SuppressedError&&SuppressedError}}]);