(self.webpackChunkcu_std_ocr=self.webpackChunkcu_std_ocr||[]).push([[7844],{5463:(C,v,a)=>{a.r(v),a.d(v,{DATE_PICKER_POSITION_MAP:()=>s,DEFAULT_CASCADER_POSITIONS:()=>P,DEFAULT_DATE_PICKER_POSITIONS:()=>p,DEFAULT_MENTION_BOTTOM_POSITIONS:()=>T,DEFAULT_MENTION_TOP_POSITIONS:()=>m,DEFAULT_TOOLTIP_POSITIONS:()=>h,NzConnectedOverlayDirective:()=>I,NzOverlayModule:()=>X,POSITION_MAP:()=>e,getPlacementName:()=>O,overlayZIndexSetter:()=>Y});var f=a(1635),t=a(9628),c=a(3083),_=a(2778),y=a(2498),u=a(5178);const e={top:new t.uH({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"}),topCenter:new t.uH({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"}),topLeft:new t.uH({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),topRight:new t.uH({originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"}),right:new t.uH({originX:"end",originY:"center"},{overlayX:"start",overlayY:"center"}),rightTop:new t.uH({originX:"end",originY:"top"},{overlayX:"start",overlayY:"top"}),rightBottom:new t.uH({originX:"end",originY:"bottom"},{overlayX:"start",overlayY:"bottom"}),bottom:new t.uH({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"}),bottomCenter:new t.uH({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"}),bottomLeft:new t.uH({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),bottomRight:new t.uH({originX:"end",originY:"bottom"},{overlayX:"end",overlayY:"top"}),left:new t.uH({originX:"start",originY:"center"},{overlayX:"end",overlayY:"center"}),leftTop:new t.uH({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"}),leftBottom:new t.uH({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"bottom"})},h=[e.top,e.right,e.bottom,e.left],P=[e.bottomLeft,e.bottomRight,e.topLeft,e.topRight,e.topCenter,e.bottomCenter],m=[new t.uH({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"bottom"}),new t.uH({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"bottom"})],T=[e.bottomLeft,new t.uH({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"top"})];function O(o){for(const l in e)if(o.connectionPair.originX===e[l].originX&&o.connectionPair.originY===e[l].originY&&o.connectionPair.overlayX===e[l].overlayX&&o.connectionPair.overlayY===e[l].overlayY)return l}const s={bottomLeft:new t.uH({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"},void 0,2),topLeft:new t.uH({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"},void 0,-2),bottomRight:new t.uH({originX:"end",originY:"bottom"},{overlayX:"end",overlayY:"top"},void 0,2),topRight:new t.uH({originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"},void 0,-2)},p=[s.bottomLeft,s.topLeft,s.bottomRight,s.topRight];let I=(()=>{class o{constructor(n,r){this.cdkConnectedOverlay=n,this.nzDestroyService=r,this.nzArrowPointAtCenter=!1,this.cdkConnectedOverlay.backdropClass="nz-overlay-transparent-backdrop",this.cdkConnectedOverlay.positionChange.pipe((0,_.takeUntil)(this.nzDestroyService)).subscribe(i=>{this.nzArrowPointAtCenter&&this.updateArrowPosition(i)})}updateArrowPosition(n){const r=this.getOriginRect(),i=O(n);let d=0,g=0;"topLeft"===i||"bottomLeft"===i?d=r.width/2-14:"topRight"===i||"bottomRight"===i?d=-(r.width/2-14):"leftTop"===i||"rightTop"===i?g=r.height/2-10:("leftBottom"===i||"rightBottom"===i)&&(g=-(r.height/2-10)),(this.cdkConnectedOverlay.offsetX!==d||this.cdkConnectedOverlay.offsetY!==g)&&(this.cdkConnectedOverlay.offsetY=g,this.cdkConnectedOverlay.offsetX=d,this.cdkConnectedOverlay.overlayRef.updatePosition())}getFlexibleConnectedPositionStrategyOrigin(){return this.cdkConnectedOverlay.origin instanceof t.$Q?this.cdkConnectedOverlay.origin.elementRef:this.cdkConnectedOverlay.origin}getOriginRect(){const n=this.getFlexibleConnectedPositionStrategyOrigin();if(n instanceof c.ElementRef)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();const r=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+r,height:i,width:r}}static#t=this.\u0275fac=function(r){return new(r||o)(c.\u0275\u0275directiveInject(t.WB),c.\u0275\u0275directiveInject(y.NzDestroyService))};static#e=this.\u0275dir=c.\u0275\u0275defineDirective({type:o,selectors:[["","cdkConnectedOverlay","","nzConnectedOverlay",""]],inputs:{nzArrowPointAtCenter:"nzArrowPointAtCenter"},exportAs:["nzConnectedOverlay"],features:[c.\u0275\u0275ProvidersFeature([y.NzDestroyService])]})}return(0,f.Cg)([(0,u.InputBoolean)()],o.prototype,"nzArrowPointAtCenter",void 0),o})(),X=(()=>{class o{static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275mod=c.\u0275\u0275defineNgModule({type:o});static#o=this.\u0275inj=c.\u0275\u0275defineInjector({})}return o})();function Y(o,l){l&&(o._host.style.zIndex=`${l}`)}}}]);