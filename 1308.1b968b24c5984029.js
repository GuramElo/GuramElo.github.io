(self.webpackChunkcu_std_plat=self.webpackChunkcu_std_plat||[]).push([[1308,8927],{8203:(tt,A,u)=>{u.d(A,{dS:()=>x,jI:()=>S});var r=u(3083),N=u(9853);const O=new r.InjectionToken("cdk-dir-doc",{providedIn:"root",factory:function b(){return(0,r.inject)(N.DOCUMENT)}}),v=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let x=(()=>{class f{constructor(h){this.value="ltr",this.change=new r.EventEmitter,h&&(this.value=function d(f){const w=f?.toLowerCase()||"";return"auto"===w&&typeof navigator<"u"&&navigator?.language?v.test(navigator.language)?"rtl":"ltr":"rtl"===w?"rtl":"ltr"}((h.body?h.body.dir:null)||(h.documentElement?h.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}static#t=this.\u0275fac=function(_){return new(_||f)(r.\u0275\u0275inject(O,8))};static#e=this.\u0275prov=r.\u0275\u0275defineInjectable({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})(),S=(()=>{class f{static#t=this.\u0275fac=function(_){return new(_||f)};static#e=this.\u0275mod=r.\u0275\u0275defineNgModule({type:f});static#n=this.\u0275inj=r.\u0275\u0275defineInjector({})}return f})()},8927:(tt,A,u)=>{u.r(A),u.d(A,{DefaultTooltipIcon:()=>M,NzFormControlComponent:()=>$,NzFormDirective:()=>j,NzFormItemComponent:()=>U,NzFormLabelComponent:()=>K,NzFormModule:()=>et,NzFormSplitComponent:()=>J,NzFormTextComponent:()=>q});var r=u(3083),N=u(4266),O=u(9853),b=u(343),v=u(4866),d=u(2778),x=u(7260),W=u(9626),S=u(8712),f=u(5178),w=u(4734),h=u(1635),_=u(8570),C=u(8203),R=u(4694),P=u(794);const T=["*"],H=t=>[t],G=t=>({$implicit:t});function Q(t,o){if(1&t&&(r.\u0275\u0275elementContainerStart(0),r.\u0275\u0275text(1),r.\u0275\u0275elementContainerEnd()),2&t){const e=r.\u0275\u0275nextContext(2);r.\u0275\u0275advance(),r.\u0275\u0275textInterpolate(e.innerTip)}}function D(t,o){if(1&t&&(r.\u0275\u0275elementStart(0,"div",2)(1,"div",4),r.\u0275\u0275template(2,Q,2,1,"ng-container",5),r.\u0275\u0275elementEnd()()),2&t){const e=r.\u0275\u0275nextContext();r.\u0275\u0275property("@helpMotion",void 0),r.\u0275\u0275advance(),r.\u0275\u0275property("ngClass",r.\u0275\u0275pureFunction1(4,H,"ant-form-item-explain-"+e.status)),r.\u0275\u0275advance(),r.\u0275\u0275property("nzStringTemplateOutlet",e.innerTip)("nzStringTemplateOutletContext",r.\u0275\u0275pureFunction1(6,G,e.validateControl))}}function B(t,o){if(1&t&&(r.\u0275\u0275elementContainerStart(0),r.\u0275\u0275text(1),r.\u0275\u0275elementContainerEnd()),2&t){const e=r.\u0275\u0275nextContext(2);r.\u0275\u0275advance(),r.\u0275\u0275textInterpolate(e.nzExtra)}}function Y(t,o){if(1&t&&(r.\u0275\u0275elementStart(0,"div",3),r.\u0275\u0275template(1,B,2,1,"ng-container",6),r.\u0275\u0275elementEnd()),2&t){const e=r.\u0275\u0275nextContext();r.\u0275\u0275advance(),r.\u0275\u0275property("nzStringTemplateOutlet",e.nzExtra)}}function k(t,o){if(1&t&&(r.\u0275\u0275elementContainerStart(0),r.\u0275\u0275element(1,"span",2),r.\u0275\u0275elementContainerEnd()),2&t){const e=o.$implicit,n=r.\u0275\u0275nextContext(2);r.\u0275\u0275advance(),r.\u0275\u0275property("nzType",e)("nzTheme",n.tooltipIcon.theme)}}function X(t,o){if(1&t&&(r.\u0275\u0275elementStart(0,"span",0),r.\u0275\u0275template(1,k,2,2,"ng-container",1),r.\u0275\u0275elementEnd()),2&t){const e=r.\u0275\u0275nextContext();r.\u0275\u0275property("nzTooltipTitle",e.nzTooltipTitle),r.\u0275\u0275advance(),r.\u0275\u0275property("nzStringTemplateOutlet",e.tooltipIcon.type)}}let U=(()=>{class t{setWithHelpViaTips(e){this.withHelpClass=e,this.cdr.markForCheck()}setStatus(e){this.status=e,this.cdr.markForCheck()}setHasFeedback(e){this.hasFeedback=e,this.cdr.markForCheck()}constructor(e){this.cdr=e,this.status="",this.hasFeedback=!1,this.withHelpClass=!1,this.destroy$=new v.Subject}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static#t=this.\u0275fac=function(n){return new(n||t)(r.\u0275\u0275directiveInject(r.ChangeDetectorRef))};static#e=this.\u0275cmp=r.\u0275\u0275defineComponent({type:t,selectors:[["nz-form-item"]],hostAttrs:[1,"ant-form-item"],hostVars:12,hostBindings:function(n,i){2&n&&r.\u0275\u0275classProp("ant-form-item-has-success","success"===i.status)("ant-form-item-has-warning","warning"===i.status)("ant-form-item-has-error","error"===i.status)("ant-form-item-is-validating","validating"===i.status)("ant-form-item-has-feedback",i.hasFeedback&&i.status)("ant-form-item-with-help",i.withHelpClass)},exportAs:["nzFormItem"],standalone:!0,features:[r.\u0275\u0275StandaloneFeature],ngContentSelectors:T,decls:1,vars:0,template:function(n,i){1&n&&(r.\u0275\u0275projectionDef(),r.\u0275\u0275projection(0))},encapsulation:2,changeDetection:0})}return t})();const M={type:"question-circle",theme:"outline"};let j=(()=>{class t{getInputObservable(e){return this.inputChanges$.pipe((0,d.filter)(n=>e in n),(0,d.map)(n=>n[e]))}constructor(e,n){this.nzConfigService=e,this.directionality=n,this._nzModuleName="form",this.nzLayout="horizontal",this.nzNoColon=!1,this.nzAutoTips={},this.nzDisableAutoTips=!1,this.nzTooltipIcon=M,this.nzLabelAlign="right",this.nzLabelWrap=!1,this.dir="ltr",this.destroy$=new v.Subject,this.inputChanges$=new v.Subject,this.dir=this.directionality.value,this.directionality.change?.pipe((0,d.takeUntil)(this.destroy$)).subscribe(i=>{this.dir=i})}ngOnChanges(e){this.inputChanges$.next(e)}ngOnDestroy(){this.inputChanges$.complete(),this.destroy$.next(!0),this.destroy$.complete()}static#t=this.\u0275fac=function(n){return new(n||t)(r.\u0275\u0275directiveInject(_.NzConfigService),r.\u0275\u0275directiveInject(C.dS,8))};static#e=this.\u0275dir=r.\u0275\u0275defineDirective({type:t,selectors:[["","nz-form",""]],hostAttrs:[1,"ant-form"],hostVars:8,hostBindings:function(n,i){2&n&&r.\u0275\u0275classProp("ant-form-horizontal","horizontal"===i.nzLayout)("ant-form-vertical","vertical"===i.nzLayout)("ant-form-inline","inline"===i.nzLayout)("ant-form-rtl","rtl"===i.dir)},inputs:{nzLayout:"nzLayout",nzNoColon:"nzNoColon",nzAutoTips:"nzAutoTips",nzDisableAutoTips:"nzDisableAutoTips",nzTooltipIcon:"nzTooltipIcon",nzLabelAlign:"nzLabelAlign",nzLabelWrap:"nzLabelWrap"},exportAs:["nzForm"],standalone:!0,features:[r.\u0275\u0275NgOnChangesFeature]})}return(0,h.Cg)([(0,_.WithConfig)(),(0,f.InputBoolean)()],t.prototype,"nzNoColon",void 0),(0,h.Cg)([(0,_.WithConfig)()],t.prototype,"nzAutoTips",void 0),(0,h.Cg)([(0,f.InputBoolean)()],t.prototype,"nzDisableAutoTips",void 0),(0,h.Cg)([(0,_.WithConfig)()],t.prototype,"nzTooltipIcon",void 0),(0,h.Cg)([(0,_.WithConfig)(),(0,f.InputBoolean)()],t.prototype,"nzLabelWrap",void 0),t})(),$=(()=>{class t{get disableAutoTips(){return"default"!==this.nzDisableAutoTips?(0,f.toBoolean)(this.nzDisableAutoTips):this.nzFormDirective?.nzDisableAutoTips}set nzHasFeedback(e){this._hasFeedback=(0,f.toBoolean)(e),this.nzFormStatusService.formStatusChanges.next({status:this.status,hasFeedback:this._hasFeedback}),this.nzFormItemComponent&&this.nzFormItemComponent.setHasFeedback(this._hasFeedback)}get nzHasFeedback(){return this._hasFeedback}set nzValidateStatus(e){e instanceof b.AbstractControl||e instanceof b.NgModel?(this.validateControl=e,this.validateString=null,this.watchControl()):e instanceof b.FormControlName?(this.validateControl=e.control,this.validateString=null,this.watchControl()):(this.validateString=e,this.validateControl=null,this.setStatus())}watchControl(){this.validateChanges.unsubscribe(),this.validateControl&&this.validateControl.statusChanges&&(this.validateChanges=this.validateControl.statusChanges.pipe((0,d.startWith)(null),(0,d.takeUntil)(this.destroyed$)).subscribe(()=>{this.disableAutoTips||this.updateAutoErrorTip(),this.setStatus(),this.cdr.markForCheck()}))}setStatus(){this.status=this.getControlStatus(this.validateString),this.innerTip=this.getInnerTip(this.status),this.nzFormStatusService.formStatusChanges.next({status:this.status,hasFeedback:this.nzHasFeedback}),this.nzFormItemComponent&&(this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip),this.nzFormItemComponent.setStatus(this.status))}getControlStatus(e){let n;return n="warning"===e||this.validateControlStatus("INVALID","warning")?"warning":"error"===e||this.validateControlStatus("INVALID")?"error":"validating"===e||"pending"===e||this.validateControlStatus("PENDING")?"validating":"success"===e||this.validateControlStatus("VALID")?"success":"",n}validateControlStatus(e,n){if(this.validateControl){const{dirty:i,touched:a,status:s}=this.validateControl;return(!!i||!!a)&&(n?this.validateControl.hasError(n):s===e)}return!1}getInnerTip(e){switch(e){case"error":return!this.disableAutoTips&&this.autoErrorTip||this.nzErrorTip||null;case"validating":return this.nzValidatingTip||null;case"success":return this.nzSuccessTip||null;case"warning":return this.nzWarningTip||null;default:return null}}updateAutoErrorTip(){if(this.validateControl){const e=this.validateControl.errors||{};let n="";for(const i in e)if(e.hasOwnProperty(i)&&(n=e[i]?.[this.localeId]??this.nzAutoTips?.[this.localeId]?.[i]??this.nzAutoTips.default?.[i]??this.nzFormDirective?.nzAutoTips?.[this.localeId]?.[i]??this.nzFormDirective?.nzAutoTips.default?.[i]),n)break;this.autoErrorTip=n}}subscribeAutoTips(e){e?.pipe((0,d.takeUntil)(this.destroyed$)).subscribe(()=>{this.disableAutoTips||(this.updateAutoErrorTip(),this.setStatus(),this.cdr.markForCheck())})}constructor(e,n,i,a,s){this.nzFormItemComponent=e,this.cdr=n,this.nzFormDirective=a,this.nzFormStatusService=s,this._hasFeedback=!1,this.validateChanges=v.Subscription.EMPTY,this.validateString=null,this.destroyed$=new v.Subject,this.status="",this.validateControl=null,this.innerTip=null,this.nzAutoTips={},this.nzDisableAutoTips="default",this.subscribeAutoTips(i.localeChange.pipe((0,d.tap)(c=>this.localeId=c.locale))),this.subscribeAutoTips(this.nzFormDirective?.getInputObservable("nzAutoTips")),this.subscribeAutoTips(this.nzFormDirective?.getInputObservable("nzDisableAutoTips").pipe((0,d.filter)(()=>"default"===this.nzDisableAutoTips)))}ngOnChanges(e){const{nzDisableAutoTips:n,nzAutoTips:i,nzSuccessTip:a,nzWarningTip:s,nzErrorTip:c,nzValidatingTip:y}=e;n||i?(this.updateAutoErrorTip(),this.setStatus()):(a||s||c||y)&&this.setStatus()}ngOnInit(){this.setStatus()}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}ngAfterContentInit(){!this.validateControl&&!this.validateString&&(this.nzValidateStatus=this.defaultValidateControl instanceof b.FormControlDirective?this.defaultValidateControl.control:this.defaultValidateControl)}static#t=this.\u0275fac=function(n){return new(n||t)(r.\u0275\u0275directiveInject(U,9),r.\u0275\u0275directiveInject(r.ChangeDetectorRef),r.\u0275\u0275directiveInject(w.NzI18nService),r.\u0275\u0275directiveInject(j,8),r.\u0275\u0275directiveInject(W.NzFormStatusService))};static#e=this.\u0275cmp=r.\u0275\u0275defineComponent({type:t,selectors:[["nz-form-control"]],contentQueries:function(n,i,a){if(1&n&&r.\u0275\u0275contentQuery(a,b.NgControl,5),2&n){let s;r.\u0275\u0275queryRefresh(s=r.\u0275\u0275loadQuery())&&(i.defaultValidateControl=s.first)}},hostAttrs:[1,"ant-form-item-control"],inputs:{nzSuccessTip:"nzSuccessTip",nzWarningTip:"nzWarningTip",nzErrorTip:"nzErrorTip",nzValidatingTip:"nzValidatingTip",nzExtra:"nzExtra",nzAutoTips:"nzAutoTips",nzDisableAutoTips:"nzDisableAutoTips",nzHasFeedback:"nzHasFeedback",nzValidateStatus:"nzValidateStatus"},exportAs:["nzFormControl"],standalone:!0,features:[r.\u0275\u0275ProvidersFeature([W.NzFormStatusService]),r.\u0275\u0275NgOnChangesFeature,r.\u0275\u0275StandaloneFeature],ngContentSelectors:T,decls:5,vars:2,consts:[[1,"ant-form-item-control-input"],[1,"ant-form-item-control-input-content"],[1,"ant-form-item-explain","ant-form-item-explain-connected"],[1,"ant-form-item-extra"],["role","alert",3,"ngClass"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],[4,"nzStringTemplateOutlet"]],template:function(n,i){1&n&&(r.\u0275\u0275projectionDef(),r.\u0275\u0275elementStart(0,"div",0)(1,"div",1),r.\u0275\u0275projection(2),r.\u0275\u0275elementEnd()(),r.\u0275\u0275template(3,D,3,8,"div",2)(4,Y,2,1,"div",3)),2&n&&(r.\u0275\u0275advance(3),r.\u0275\u0275conditional(3,i.innerTip?3:-1),r.\u0275\u0275advance(),r.\u0275\u0275conditional(4,i.nzExtra?4:-1))},dependencies:[O.NgClass,S.NzOutletModule,S.NzStringTemplateOutletDirective],encapsulation:2,data:{animation:[x.helpMotion]},changeDetection:0})}return t})();function V(t){return{...M,..."string"==typeof t?{type:t}:t}}let K=(()=>{class t{set nzNoColon(e){this.noColon=(0,f.toBoolean)(e)}get nzNoColon(){return"default"!==this.noColon?this.noColon:this.nzFormDirective?.nzNoColon}set nzTooltipIcon(e){this._tooltipIcon=V(e)}get tooltipIcon(){return"default"!==this._tooltipIcon?this._tooltipIcon:V(this.nzFormDirective?.nzTooltipIcon||M)}set nzLabelAlign(e){this.labelAlign=e}get nzLabelAlign(){return"default"!==this.labelAlign?this.labelAlign:this.nzFormDirective?.nzLabelAlign||"right"}set nzLabelWrap(e){this.labelWrap=(0,f.toBoolean)(e)}get nzLabelWrap(){return"default"!==this.labelWrap?this.labelWrap:this.nzFormDirective?.nzLabelWrap}constructor(e,n){this.cdr=e,this.nzFormDirective=n,this.nzRequired=!1,this.noColon="default",this._tooltipIcon="default",this.labelAlign="default",this.labelWrap="default",this.destroy$=new v.Subject,this.nzFormDirective&&(this.nzFormDirective.getInputObservable("nzNoColon").pipe((0,d.filter)(()=>"default"===this.noColon),(0,d.takeUntil)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.nzFormDirective.getInputObservable("nzTooltipIcon").pipe((0,d.filter)(()=>"default"===this._tooltipIcon),(0,d.takeUntil)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.nzFormDirective.getInputObservable("nzLabelAlign").pipe((0,d.filter)(()=>"default"===this.labelAlign),(0,d.takeUntil)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.nzFormDirective.getInputObservable("nzLabelWrap").pipe((0,d.filter)(()=>"default"===this.labelWrap),(0,d.takeUntil)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static#t=this.\u0275fac=function(n){return new(n||t)(r.\u0275\u0275directiveInject(r.ChangeDetectorRef),r.\u0275\u0275directiveInject(j,12))};static#e=this.\u0275cmp=r.\u0275\u0275defineComponent({type:t,selectors:[["nz-form-label"]],hostAttrs:[1,"ant-form-item-label"],hostVars:4,hostBindings:function(n,i){2&n&&r.\u0275\u0275classProp("ant-form-item-label-left","left"===i.nzLabelAlign)("ant-form-item-label-wrap",i.nzLabelWrap)},inputs:{nzFor:"nzFor",nzRequired:"nzRequired",nzNoColon:"nzNoColon",nzTooltipTitle:"nzTooltipTitle",nzTooltipIcon:"nzTooltipIcon",nzLabelAlign:"nzLabelAlign",nzLabelWrap:"nzLabelWrap"},exportAs:["nzFormLabel"],standalone:!0,features:[r.\u0275\u0275StandaloneFeature],ngContentSelectors:T,decls:3,vars:6,consts:[["nz-tooltip","",1,"ant-form-item-tooltip",3,"nzTooltipTitle"],[4,"nzStringTemplateOutlet"],["nz-icon","",3,"nzType","nzTheme"]],template:function(n,i){1&n&&(r.\u0275\u0275projectionDef(),r.\u0275\u0275elementStart(0,"label"),r.\u0275\u0275projection(1),r.\u0275\u0275template(2,X,2,2,"span",0),r.\u0275\u0275elementEnd()),2&n&&(r.\u0275\u0275classProp("ant-form-item-no-colon",i.nzNoColon)("ant-form-item-required",i.nzRequired),r.\u0275\u0275attribute("for",i.nzFor),r.\u0275\u0275advance(2),r.\u0275\u0275conditional(2,i.nzTooltipTitle?2:-1))},dependencies:[S.NzOutletModule,S.NzStringTemplateOutletDirective,P.NzTooltipDirective,R.NzIconModule,R.NzIconDirective],encapsulation:2,changeDetection:0})}return(0,h.Cg)([(0,f.InputBoolean)()],t.prototype,"nzRequired",void 0),t})(),J=(()=>{class t{static#t=this.\u0275fac=function(n){return new(n||t)};static#e=this.\u0275cmp=r.\u0275\u0275defineComponent({type:t,selectors:[["nz-form-split"]],hostAttrs:[1,"ant-form-split"],exportAs:["nzFormSplit"],standalone:!0,features:[r.\u0275\u0275StandaloneFeature],ngContentSelectors:T,decls:1,vars:0,template:function(n,i){1&n&&(r.\u0275\u0275projectionDef(),r.\u0275\u0275projection(0))},encapsulation:2,changeDetection:0})}return t})(),q=(()=>{class t{static#t=this.\u0275fac=function(n){return new(n||t)};static#e=this.\u0275cmp=r.\u0275\u0275defineComponent({type:t,selectors:[["nz-form-text"]],hostAttrs:[1,"ant-form-text"],exportAs:["nzFormText"],standalone:!0,features:[r.\u0275\u0275StandaloneFeature],ngContentSelectors:T,decls:1,vars:0,template:function(n,i){1&n&&(r.\u0275\u0275projectionDef(),r.\u0275\u0275projection(0))},encapsulation:2,changeDetection:0})}return t})(),et=(()=>{class t{static#t=this.\u0275fac=function(n){return new(n||t)};static#e=this.\u0275mod=r.\u0275\u0275defineNgModule({type:t});static#n=this.\u0275inj=r.\u0275\u0275defineInjector({imports:[K,$,N.NzGridModule]})}return t})()},1635:(tt,A,u)=>{function v(t,o,e,n){var s,i=arguments.length,a=i<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,o,e,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(i<3?s(a):i>3?s(o,e,a):s(o,e))||a);return i>3&&a&&Object.defineProperty(o,e,a),a}function h(t,o,e,n){return new(e||(e=Promise))(function(a,s){function c(p){try{l(n.next(p))}catch(g){s(g)}}function y(p){try{l(n.throw(p))}catch(g){s(g)}}function l(p){p.done?a(p.value):function i(a){return a instanceof e?a:new e(function(s){s(a)})}(p.value).then(c,y)}l((n=n.apply(t,o||[])).next())})}function D(t){return this instanceof D?(this.v=t,this):new D(t)}function B(t,o,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,n=e.apply(t,o||[]),a=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(m){n[m]&&(i[m]=function(z){return new Promise(function(E,F){a.push([m,z,E,F])>1||c(m,z)})})}function c(m,z){try{!function y(m){m.value instanceof D?Promise.resolve(m.value.v).then(l,p):g(a[0][2],m)}(n[m](z))}catch(E){g(a[0][3],E)}}function l(m){c("next",m)}function p(m){c("throw",m)}function g(m,z){m(z),a.shift(),a.length&&c(a[0][0],a[0][1])}}function k(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=t[Symbol.asyncIterator];return o?o.call(t):(t=function P(t){var o="function"==typeof Symbol&&Symbol.iterator,e=o&&t[o],n=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")}(t),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(a){e[a]=t[a]&&function(s){return new Promise(function(c,y){!function i(a,s,c,y){Promise.resolve(y).then(function(l){a({value:l,done:c})},s)}(c,y,(s=t[a](s)).done,s.value)})}}}u.d(A,{AQ:()=>B,Cg:()=>v,N3:()=>D,sH:()=>h,xN:()=>k}),"function"==typeof SuppressedError&&SuppressedError}}]);