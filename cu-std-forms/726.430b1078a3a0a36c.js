(self.webpackChunkcu_std_forms=self.webpackChunkcu_std_forms||[]).push([[726,345],{345:(Ue,I,m)=>{m.r(I),m.d(I,{BrowserModule:()=>ve,By:()=>Re,DomSanitizer:()=>X,EVENT_MANAGER_PLUGINS:()=>y,EventManager:()=>S,EventManagerPlugin:()=>v,HAMMER_GESTURE_CONFIG:()=>T,HAMMER_LOADER:()=>b,HammerGestureConfig:()=>Y,HammerModule:()=>be,HydrationFeatureKind:()=>p,Meta:()=>Te,REMOVE_STYLES_ON_COMPONENT_DESTROY:()=>H,Title:()=>Me,TransferState:()=>ke,VERSION:()=>Le,bootstrapApplication:()=>fe,createApplication:()=>he,disableDebugTools:()=>Ce,enableDebugTools:()=>_e,makeStateKey:()=>He,platformBrowser:()=>ye,provideClientHydration:()=>Pe,provideProtractorTestingSupport:()=>pe,withHttpTransferCacheOptions:()=>Ne,withNoHttpTransferCache:()=>Ie,\u0275BrowserDomAdapter:()=>E,\u0275BrowserGetTestability:()=>P,\u0275DomEventsPlugin:()=>B,\u0275DomRendererFactory2:()=>C,\u0275DomSanitizerImpl:()=>J,\u0275HammerGesturesPlugin:()=>W,\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS:()=>A,\u0275KeyEventsPlugin:()=>F,\u0275SharedStylesHost:()=>w,\u0275getDOM:()=>l.\u0275getDOM,\u0275initDomAdapter:()=>G});var o=m(3083),l=m(9853),N=m(2779);class Q extends l.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class E extends Q{static makeCurrent(){(0,l.\u0275setRootDomAdapter)(new E)}onAndCancel(r,e,t){return r.addEventListener(e,t),()=>{r.removeEventListener(e,t)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.parentNode&&r.parentNode.removeChild(r)}createElement(r,e){return(e=e||this.getDefaultDocument()).createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return"window"===e?window:"document"===e?r:"body"===e?r.body:null}getBaseHref(r){const e=function ee(){return g=g||document.querySelector("base"),g?g.getAttribute("href"):null}();return null==e?null:function te(n){return new URL(n,document.baseURI).pathname}(e)}resetBaseElement(){g=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return(0,l.\u0275parseCookieValue)(document.cookie,r)}}let g=null;class P{addToWindow(r){o.\u0275global.getAngularTestability=(t,s=!0)=>{const i=r.findTestabilityInTree(t,s);if(null==i)throw new o.\u0275RuntimeError(5103,!1);return i},o.\u0275global.getAllAngularTestabilities=()=>r.getAllTestabilities(),o.\u0275global.getAllAngularRootElements=()=>r.getAllRootElements(),o.\u0275global.frameworkStabilizers||(o.\u0275global.frameworkStabilizers=[]),o.\u0275global.frameworkStabilizers.push(t=>{const s=o.\u0275global.getAllAngularTestabilities();let i=s.length;const a=function(){i--,0==i&&t()};s.forEach(c=>{c.whenStable(a)})})}findTestabilityInTree(r,e,t){return null==e?null:r.getTestability(e)??(t?(0,l.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(r,e.host,!0):this.findTestabilityInTree(r,e.parentElement,!0):null)}}let ne=(()=>{class n{build(){return new XMLHttpRequest}static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const y=new o.InjectionToken("");let S=(()=>{class n{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(s=>{s.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,s){return this._findPluginFor(t).addEventListener(e,t,s)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(i=>i.supports(e)),!t)throw new o.\u0275RuntimeError(5101,!1);return this._eventNameToPlugin.set(e,t),t}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(y),o.\u0275\u0275inject(o.NgZone))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();class v{constructor(r){this._doc=r}}const M="ng-app-id";let w=(()=>{class n{constructor(e,t,s,i={}){this.doc=e,this.appId=t,this.nonce=s,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=(0,l.isPlatformServer)(i),this.resetHostNodes()}addStyles(e){for(const t of e)1===this.changeUsageCount(t,1)&&this.onStyleAdded(t)}removeStyles(e){for(const t of e)this.changeUsageCount(t,-1)<=0&&this.onStyleRemoved(t)}ngOnDestroy(){const e=this.styleNodesInDOM;e&&(e.forEach(t=>t.remove()),e.clear());for(const t of this.getAllStyles())this.onStyleRemoved(t);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(const t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(const t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){const t=this.styleRef;t.get(e)?.elements?.forEach(s=>s.remove()),t.delete(e)}collectServerRenderedStyles(){const e=this.doc.head?.querySelectorAll(`style[${M}="${this.appId}"]`);if(e?.length){const t=new Map;return e.forEach(s=>{null!=s.textContent&&t.set(s.textContent,s)}),t}return null}changeUsageCount(e,t){const s=this.styleRef;if(s.has(e)){const i=s.get(e);return i.usage+=t,i.usage}return s.set(e,{usage:t,elements:[]}),t}getStyleElement(e,t){const s=this.styleNodesInDOM,i=s?.get(t);if(i?.parentNode===e)return s.delete(t),i.removeAttribute(M),i;{const a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=t,this.platformIsServer&&a.setAttribute(M,this.appId),e.appendChild(a),a}}addStyleToHost(e,t){const s=this.getStyleElement(e,t),i=this.styleRef,a=i.get(t)?.elements;a?a.push(s):i.set(t,{elements:[s],usage:1})}resetHostNodes(){const e=this.hostNodes;e.clear(),e.add(this.doc.head)}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(o.APP_ID),o.\u0275\u0275inject(o.CSP_NONCE,8),o.\u0275\u0275inject(o.PLATFORM_ID))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const D={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},_=/%COMP%/g,L="%COMP%",re=`_nghost-${L}`,oe=`_ngcontent-${L}`,H=new o.InjectionToken("",{providedIn:"root",factory:()=>!0});function k(n,r){return r.map(e=>e.replace(_,n))}let C=(()=>{class n{constructor(e,t,s,i,a,c,u,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=s,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=c,this.ngZone=u,this.nonce=d,this.rendererByCompId=new Map,this.platformIsServer=(0,l.isPlatformServer)(c),this.defaultRenderer=new R(e,a,u,this.platformIsServer)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===o.ViewEncapsulation.ShadowDom&&(t={...t,encapsulation:o.ViewEncapsulation.Emulated});const s=this.getOrCreateRenderer(e,t);return s instanceof j?s.applyToHost(e):s instanceof O&&s.applyStyles(),s}getOrCreateRenderer(e,t){const s=this.rendererByCompId;let i=s.get(t.id);if(!i){const a=this.doc,c=this.ngZone,u=this.eventManager,d=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(t.encapsulation){case o.ViewEncapsulation.Emulated:i=new j(u,d,t,this.appId,f,a,c,h);break;case o.ViewEncapsulation.ShadowDom:return new le(u,d,e,t,a,c,this.nonce,h);default:i=new O(u,d,t,f,a,c,h)}s.set(t.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(S),o.\u0275\u0275inject(w),o.\u0275\u0275inject(o.APP_ID),o.\u0275\u0275inject(H),o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(o.PLATFORM_ID),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(o.CSP_NONCE))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();class R{constructor(r,e,t,s){this.eventManager=r,this.doc=e,this.ngZone=t,this.platformIsServer=s,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(r,e){return e?this.doc.createElementNS(D[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(U(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){r&&(U(r)?r.content:r).insertBefore(e,t)}removeChild(r,e){r&&r.removeChild(e)}selectRootElement(r,e){let t="string"==typeof r?this.doc.querySelector(r):r;if(!t)throw new o.\u0275RuntimeError(-5104,!1);return e||(t.textContent=""),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,s){if(s){e=s+":"+e;const i=D[s];i?r.setAttributeNS(i,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){const s=D[t];s?r.removeAttributeNS(s,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,s){s&(o.RendererStyleFlags2.DashCase|o.RendererStyleFlags2.Important)?r.style.setProperty(e,t,s&o.RendererStyleFlags2.Important?"important":""):r.style[e]=t}removeStyle(r,e,t){t&o.RendererStyleFlags2.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,t){null!=r&&(r[e]=t)}setValue(r,e){r.nodeValue=e}listen(r,e,t){if("string"==typeof r&&!(r=(0,l.\u0275getDOM)().getGlobalEventTarget(this.doc,r)))throw new Error(`Unsupported event target ${r} for event ${e}`);return this.eventManager.addEventListener(r,e,this.decoratePreventDefault(t))}decoratePreventDefault(r){return e=>{if("__ngUnwrap__"===e)return r;!1===(this.platformIsServer?this.ngZone.runGuarded(()=>r(e)):r(e))&&e.preventDefault()}}}function U(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class le extends R{constructor(r,e,t,s,i,a,c,u){super(r,i,a,u),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const d=k(s.id,s.styles);for(const f of d){const h=document.createElement("style");c&&h.setAttribute("nonce",c),h.textContent=f,this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(this.nodeOrShadowRoot(r),e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class O extends R{constructor(r,e,t,s,i,a,c,u){super(r,i,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=s,this.styles=u?k(u,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}}class j extends O{constructor(r,e,t,s,i,a,c,u){const d=s+"-"+t.id;super(r,e,t,i,a,c,u,d),this.contentAttr=function ie(n){return oe.replace(_,n)}(d),this.hostAttr=function ae(n){return re.replace(_,n)}(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){const t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,""),t}}let B=(()=>{class n extends v{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,s){return e.addEventListener(t,s,!1),()=>this.removeEventListener(e,t,s)}removeEventListener(e,t,s){return e.removeEventListener(t,s)}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const x=["alt","control","meta","shift"],ue={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},de={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let F=(()=>{class n extends v{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,t,s){const i=n.parseEventName(t),a=n.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,l.\u0275getDOM)().onAndCancel(e,i.domEventName,a))}static parseEventName(e){const t=e.toLowerCase().split("."),s=t.shift();if(0===t.length||"keydown"!==s&&"keyup"!==s)return null;const i=n._normalizeKey(t.pop());let a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),x.forEach(d=>{const f=t.indexOf(d);f>-1&&(t.splice(f,1),a+=d+".")}),a+=i,0!=t.length||0===i.length)return null;const u={};return u.domEventName=s,u.fullKey=a,u}static matchEventFullKeyCode(e,t){let s=ue[e.key]||e.key,i="";return t.indexOf("code.")>-1&&(s=e.code,i="code."),!(null==s||!s)&&(s=s.toLowerCase()," "===s?s="space":"."===s&&(s="dot"),x.forEach(a=>{a!==s&&(0,de[a])(e)&&(i+=a+".")}),i+=s,i===t)}static eventCallback(e,t,s){return i=>{n.matchEventFullKeyCode(i,e)&&s.runGuarded(()=>t(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();function fe(n,r){return(0,o.\u0275internalCreateApplication)({rootComponent:n,...V(r)})}function he(n){return(0,o.\u0275internalCreateApplication)(V(n))}function V(n){return{appProviders:[...K,...n?.providers??[]],platformProviders:A}}function pe(){return[...z]}function G(){E.makeCurrent()}const A=[{provide:o.PLATFORM_ID,useValue:l.\u0275PLATFORM_BROWSER_ID},{provide:o.PLATFORM_INITIALIZER,useValue:G,multi:!0},{provide:l.DOCUMENT,useFactory:function ge(){return(0,o.\u0275setDocument)(document),document},deps:[]}],ye=(0,o.createPlatformFactory)(o.platformCore,"browser",A),Ee=new o.InjectionToken(""),z=[{provide:o.\u0275TESTABILITY_GETTER,useClass:P,deps:[]},{provide:o.\u0275TESTABILITY,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]}],K=[{provide:o.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:o.ErrorHandler,useFactory:function me(){return new o.ErrorHandler},deps:[]},{provide:y,useClass:B,multi:!0,deps:[l.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:y,useClass:F,multi:!0,deps:[l.DOCUMENT]},C,w,S,{provide:o.RendererFactory2,useExisting:C},{provide:l.XhrFactory,useClass:ne,deps:[]},[]];let ve=(()=>{class n{constructor(e){}static withServerTransition(e){return{ngModule:n,providers:[{provide:o.APP_ID,useValue:e.appId}]}}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(Ee,12))};static#t=this.\u0275mod=o.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=o.\u0275\u0275defineInjector({providers:[...K,...z],imports:[l.CommonModule,o.ApplicationModule]})}return n})(),Te=(()=>{class n{constructor(e){this._doc=e,this._dom=(0,l.\u0275getDOM)()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((s,i)=>(i&&s.push(this._getOrCreateElement(i,t)),s),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);const s=this.getTag(t);return s?this._setMetaElementAttributes(e,s):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){const a=this._parseSelector(e),c=this.getTags(a).filter(u=>this._containsAttributes(e,u))[0];if(void 0!==c)return c}const s=this._dom.createElement("meta");return this._setMetaElementAttributes(e,s),this._doc.getElementsByTagName("head")[0].appendChild(s),s}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(s=>t.setAttribute(this._getMetaKeyMap(s),e[s])),t}_parseSelector(e){const t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(s=>t.getAttribute(this._getMetaKeyMap(s))===e[s])}_getMetaKeyMap(e){return Se[e]||e}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const Se={httpEquiv:"http-equiv"};let Me=(()=>{class n{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $(n,r){(typeof COMPILED>"u"||!COMPILED)&&((o.\u0275global.ng=o.\u0275global.ng||{})[n]=r)}class we{constructor(r,e){this.msPerTick=r,this.numTicks=e}}class De{constructor(r){this.appRef=r.injector.get(o.ApplicationRef)}timeChangeDetection(r){const e=r&&r.record,t="Change Detection";e&&"profile"in console&&"function"==typeof console.profile&&console.profile(t);const s=performance.now();let i=0;for(;i<5||performance.now()-s<500;)this.appRef.tick(),i++;const a=performance.now();e&&"profileEnd"in console&&"function"==typeof console.profileEnd&&console.profileEnd(t);const c=(a-s)/i;return console.log(`ran ${i} change detection cycles`),console.log(`${c.toFixed(2)} ms per check`),new we(c,i)}}const Z="profiler";function _e(n){return $(Z,new De(n)),n}function Ce(){$(Z,null)}class Re{static all(){return()=>!0}static css(r){return e=>null!=e.nativeElement&&function Oe(n,r){return!!(0,l.\u0275getDOM)().isElementNode(n)&&(n.matches&&n.matches(r)||n.msMatchesSelector&&n.msMatchesSelector(r)||n.webkitMatchesSelector&&n.webkitMatchesSelector(r))}(e.nativeElement,r)}static directive(r){return e=>-1!==e.providerTokens.indexOf(r)}}const Ae={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},T=new o.InjectionToken("HammerGestureConfig"),b=new o.InjectionToken("HammerLoader");let Y=(()=>{class n{constructor(){this.events=[],this.overrides={}}buildHammer(e){const t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(const s in this.overrides)t.get(s).set(this.overrides[s]);return t}static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})(),W=(()=>{class n extends v{constructor(e,t,s,i){super(e),this._config=t,this.console=s,this.loader=i,this._loaderPromise=null}supports(e){return!(!Ae.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,t,s){const i=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||i.runOutsideAngular(()=>this.loader());let a=!1,c=()=>{a=!0};return i.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?a||(c=this.addEventListener(e,t,s)):c=()=>{}}).catch(()=>{c=()=>{}})),()=>{c()}}return i.runOutsideAngular(()=>{const a=this._config.buildHammer(e),c=function(u){i.runGuarded(function(){s(u)})};return a.on(t,c),()=>{a.off(t,c),"function"==typeof a.destroy&&a.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(T),o.\u0275\u0275inject(o.\u0275Console),o.\u0275\u0275inject(b,8))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})(),be=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275mod=o.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=o.\u0275\u0275defineInjector({providers:[{provide:y,useClass:W,multi:!0,deps:[l.DOCUMENT,T,o.\u0275Console,[new o.Optional,b]]},{provide:T,useClass:Y,deps:[]}]})}return n})(),X=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:function(t){let s=null;return s=t?new(t||n):o.\u0275\u0275inject(J),s},providedIn:"root"})}return n})(),J=(()=>{class n extends X{constructor(e){super(),this._doc=e}sanitize(e,t){if(null==t)return null;switch(e){case o.SecurityContext.NONE:return t;case o.SecurityContext.HTML:return(0,o.\u0275allowSanitizationBypassAndThrow)(t,"HTML")?(0,o.\u0275unwrapSafeValue)(t):(0,o.\u0275_sanitizeHtml)(this._doc,String(t)).toString();case o.SecurityContext.STYLE:return(0,o.\u0275allowSanitizationBypassAndThrow)(t,"Style")?(0,o.\u0275unwrapSafeValue)(t):t;case o.SecurityContext.SCRIPT:if((0,o.\u0275allowSanitizationBypassAndThrow)(t,"Script"))return(0,o.\u0275unwrapSafeValue)(t);throw new o.\u0275RuntimeError(5200,!1);case o.SecurityContext.URL:return(0,o.\u0275allowSanitizationBypassAndThrow)(t,"URL")?(0,o.\u0275unwrapSafeValue)(t):(0,o.\u0275_sanitizeUrl)(String(t));case o.SecurityContext.RESOURCE_URL:if((0,o.\u0275allowSanitizationBypassAndThrow)(t,"ResourceURL"))return(0,o.\u0275unwrapSafeValue)(t);throw new o.\u0275RuntimeError(5201,!1);default:throw new o.\u0275RuntimeError(5202,!1)}}bypassSecurityTrustHtml(e){return(0,o.\u0275bypassSanitizationTrustHtml)(e)}bypassSecurityTrustStyle(e){return(0,o.\u0275bypassSanitizationTrustStyle)(e)}bypassSecurityTrustScript(e){return(0,o.\u0275bypassSanitizationTrustScript)(e)}bypassSecurityTrustUrl(e){return(0,o.\u0275bypassSanitizationTrustUrl)(e)}bypassSecurityTrustResourceUrl(e){return(0,o.\u0275bypassSanitizationTrustResourceUrl)(e)}static#e=this.\u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var p=function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n}(p||{});function q(n,r=[],e={}){return{\u0275kind:n,\u0275providers:r}}function Ie(){return q(p.NoHttpTransferCache)}function Ne(n){return q(p.HttpTransferCacheOptions,(0,N.\u0275withHttpTransferCache)(n))}function Pe(...n){const r=[],e=new Set,t=e.has(p.HttpTransferCacheOptions);for(const{\u0275providers:s,\u0275kind:i}of n)e.add(i),s.length&&r.push(s);return(0,o.makeEnvironmentProviders)([[],(0,o.\u0275withDomHydration)(),e.has(p.NoHttpTransferCache)||t?[]:(0,N.\u0275withHttpTransferCache)({}),r])}const Le=new o.Version("17.3.9"),He=o.makeStateKey,ke=o.TransferState}}]);