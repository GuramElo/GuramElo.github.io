(self.webpackChunkcu_std_plat=self.webpackChunkcu_std_plat||[]).push([[3406],{9327:(A,M,a)=>{a.d(M,{DY:()=>E});var s=a(3083),S=(a(4866),a(2778),a(6860));const v=new Set;let u,E=(()=>{class o{constructor(c,h){this._platform=c,this._nonce=h,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):y}matchMedia(c){return(this._platform.WEBKIT||this._platform.BLINK)&&function R(o,l){if(!v.has(o))try{u||(u=document.createElement("style"),l&&u.setAttribute("nonce",l),u.setAttribute("type","text/css"),document.head.appendChild(u)),u.sheet&&(u.sheet.insertRule(`@media ${o} {body{ }}`,0),v.add(o))}catch(c){console.error(c)}}(c,this._nonce),this._matchMedia(c)}static#e=this.\u0275fac=function(h){return new(h||o)(s.\u0275\u0275inject(S.OD),s.\u0275\u0275inject(s.CSP_NONCE,8))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function y(o){return{matches:"all"===o||""===o,media:o,addListener:()=>{},removeListener:()=>{}}}},3406:(A,M,a)=>{a.r(M),a.d(M,{ImagePreloadService:()=>q,NzBreakpointEnum:()=>p,NzBreakpointService:()=>T,NzDestroyService:()=>L,NzDragService:()=>l,NzResizeService:()=>P,NzScrollService:()=>h,NzSingletonService:()=>k,gridResponsiveMap:()=>x,siderResponsiveMap:()=>_});var s=a(3083),f=a(4866),d=a(2778),S=a(3222),O=a(5178),v=a(9853),u=a(1316),E=a(9327),R=a(6860);const y=()=>{};let P=(()=>{class n{constructor(e,t){this.ngZone=e,this.rendererFactory2=t,this.resizeSource$=new f.Subject,this.listeners=0,this.disposeHandle=y,this.handler=()=>{this.ngZone.run(()=>{this.resizeSource$.next()})},this.renderer=this.rendererFactory2.createRenderer(null,null)}ngOnDestroy(){this.handler=y}subscribe(){return this.registerListener(),this.resizeSource$.pipe((0,d.auditTime)(16),(0,d.finalize)(()=>this.unregisterListener()))}unsubscribe(){this.unregisterListener()}registerListener(){0===this.listeners&&this.ngZone.runOutsideAngular(()=>{this.disposeHandle=this.renderer.listen("window","resize",this.handler)}),this.listeners+=1}unregisterListener(){this.listeners-=1,0===this.listeners&&(this.disposeHandle(),this.disposeHandle=y)}static#e=this.\u0275fac=function(t){return new(t||n)(s.\u0275\u0275inject(s.NgZone),s.\u0275\u0275inject(s.RendererFactory2))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const C=new Map;let k=(()=>{class n{constructor(){this._singletonRegistry=new Map}get singletonRegistry(){return S.environment.isTestMode?C:this._singletonRegistry}registerSingletonWithKey(e,t){const r=this.singletonRegistry.has(e),i=r?this.singletonRegistry.get(e):this.withNewTarget(t);r||this.singletonRegistry.set(e,i)}unregisterSingletonWithKey(e){this.singletonRegistry.has(e)&&this.singletonRegistry.delete(e)}getSingletonWithKey(e){return this.singletonRegistry.has(e)?this.singletonRegistry.get(e).target:null}withNewTarget(e){return{target:e}}static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),l=(()=>{class n{constructor(e){this.draggingThreshold=5,this.currentDraggingSequence=null,this.currentStartingPoint=null,this.handleRegistry=new Set,this.renderer=e.createRenderer(null,null)}requestDraggingSequence(e){return this.handleRegistry.size||this.registerDraggingHandler((0,O.isTouchEvent)(e)),this.currentDraggingSequence&&this.currentDraggingSequence.complete(),this.currentStartingPoint=function o(n){const m=(0,O.getEventPosition)(n);return{x:m.pageX,y:m.pageY}}(e),this.currentDraggingSequence=new f.Subject,this.currentDraggingSequence.pipe((0,d.map)(t=>({x:t.pageX-this.currentStartingPoint.x,y:t.pageY-this.currentStartingPoint.y})),(0,d.filter)(t=>Math.abs(t.x)>this.draggingThreshold||Math.abs(t.y)>this.draggingThreshold),(0,d.finalize)(()=>this.teardownDraggingSequence()))}registerDraggingHandler(e){e?(this.handleRegistry.add({teardown:this.renderer.listen("document","touchmove",t=>{this.currentDraggingSequence&&this.currentDraggingSequence.next(t.touches[0]||t.changedTouches[0])})}),this.handleRegistry.add({teardown:this.renderer.listen("document","touchend",()=>{this.currentDraggingSequence&&this.currentDraggingSequence.complete()})})):(this.handleRegistry.add({teardown:this.renderer.listen("document","mousemove",t=>{this.currentDraggingSequence&&this.currentDraggingSequence.next(t)})}),this.handleRegistry.add({teardown:this.renderer.listen("document","mouseup",()=>{this.currentDraggingSequence&&this.currentDraggingSequence.complete()})}))}teardownDraggingSequence(){this.currentDraggingSequence=null}static#e=this.\u0275fac=function(t){return new(t||n)(s.\u0275\u0275inject(s.RendererFactory2))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function c(n,m,e,t){const r=e-m;let i=n/(t/2);return i<1?r/2*i*i*i+m:r/2*((i-=2)*i*i+2)+m}let h=(()=>{class n{constructor(e,t){this.ngZone=e,this.doc=t}setScrollTop(e,t=0){e===window?(this.doc.body.scrollTop=t,this.doc.documentElement.scrollTop=t):e.scrollTop=t}getOffset(e){const t={top:0,left:0};if(!e||!e.getClientRects().length)return t;const r=e.getBoundingClientRect();if(r.width||r.height){const i=e.ownerDocument.documentElement;t.top=r.top-i.clientTop,t.left=r.left-i.clientLeft}else t.top=r.top,t.left=r.left;return t}getScroll(e,t=!0){if(typeof window>"u")return 0;const r=t?"scrollTop":"scrollLeft";let i=0;return this.isWindow(e)?i=e[t?"pageYOffset":"pageXOffset"]:e instanceof Document?i=e.documentElement[r]:e&&(i=e[r]),e&&!this.isWindow(e)&&"number"!=typeof i&&(i=(e.ownerDocument||e).documentElement[r]),i}isWindow(e){return null!=e&&e===e.window}scrollTo(e,t=0,r={}){const i=e||window,g=this.getScroll(i),w=Date.now(),{easing:D,callback:W,duration:b=450}=r,B=()=>{const I=Date.now()-w,j=(D||c)(I>b?b:I,g,t,b);this.isWindow(i)?i.scrollTo(window.pageXOffset,j):i instanceof HTMLDocument||"HTMLDocument"===i.constructor.name?i.documentElement.scrollTop=j:i.scrollTop=j,I<b?(0,u.reqAnimFrame)(B):"function"==typeof W&&this.ngZone.run(W)};this.ngZone.runOutsideAngular(()=>(0,u.reqAnimFrame)(B))}static#e=this.\u0275fac=function(t){return new(t||n)(s.\u0275\u0275inject(s.NgZone),s.\u0275\u0275inject(v.DOCUMENT))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var p=function(n){return n.xxl="xxl",n.xl="xl",n.lg="lg",n.md="md",n.sm="sm",n.xs="xs",n}(p||{});const x={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},_={xs:"(max-width: 479.98px)",sm:"(max-width: 575.98px)",md:"(max-width: 767.98px)",lg:"(max-width: 991.98px)",xl:"(max-width: 1199.98px)",xxl:"(max-width: 1599.98px)"};let T=(()=>{class n{constructor(e,t){this.resizeService=e,this.mediaMatcher=t,this.destroy$=new f.Subject,this.resizeService.subscribe().pipe((0,d.takeUntil)(this.destroy$)).subscribe(()=>{})}ngOnDestroy(){this.destroy$.next()}subscribe(e,t){if(t){const r=()=>this.matchMedia(e,!0);return this.resizeService.subscribe().pipe((0,d.map)(r),(0,d.startWith)(r()),(0,d.distinctUntilChanged)((i,g)=>i[0]===g[0]),(0,d.map)(i=>i[1]))}{const r=()=>this.matchMedia(e);return this.resizeService.subscribe().pipe((0,d.map)(r),(0,d.startWith)(r()),(0,d.distinctUntilChanged)())}}matchMedia(e,t){let r=p.md;const i={};return Object.keys(e).map(g=>{const w=g,D=this.mediaMatcher.matchMedia(x[w]).matches;i[g]=D,D&&(r=w)}),t?[r,i]:r}static#e=this.\u0275fac=function(t){return new(t||n)(s.\u0275\u0275inject(P),s.\u0275\u0275inject(E.DY))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),L=(()=>{class n extends f.Subject{ngOnDestroy(){this.next(),this.complete()}static#e=this.\u0275fac=(()=>{let e;return function(r){return(e||(e=s.\u0275\u0275getInheritedFactory(n)))(r||n)}})();static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})(),q=(()=>{class n{constructor(e,t){this.document=e,this.platform=t,this.counter=new Map,this.linkRefs=new Map}addPreload(e){if(this.platform.isBrowser)return()=>{};const t=`${e.src}${e.srcset}`;let r=this.counter.get(t)||0;if(r++,this.counter.set(t,r),!this.linkRefs.has(t)){const i=this.appendPreloadLink(e);this.linkRefs.set(t,i)}return()=>{if(this.counter.has(t)){let i=this.counter.get(t);if(i--,0===i){const g=this.linkRefs.get(t);this.removePreloadLink(g),this.counter.delete(t),this.linkRefs.delete(t)}else this.counter.set(t,i)}}}appendPreloadLink(e){const t=this.document.createElement("link");return t.setAttribute("rel","preload"),t.setAttribute("as","image"),t.setAttribute("href",e.src),e.srcset&&t.setAttribute("imagesrcset",e.srcset),this.document.head.appendChild(t),t}removePreloadLink(e){this.document.head.contains(e)&&this.document.head.removeChild(e)}static#e=this.\u0275fac=function(t){return new(t||n)(s.\u0275\u0275inject(v.DOCUMENT),s.\u0275\u0275inject(R.OD))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);