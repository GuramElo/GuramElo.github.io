(self.webpackChunkcu_std_ocr=self.webpackChunkcu_std_ocr||[]).push([[317],{4085:(pe,b,f)=>{f.d(b,{FG:()=>D,a1:()=>H,he:()=>w,i8:()=>R,o1:()=>y});var v=f(3083);function w(s){return null!=s&&"false"!=`${s}`}function y(s){return!isNaN(parseFloat(s))&&!isNaN(Number(s))}function D(s){return Array.isArray(s)?s:[s]}function H(s){return null==s?"":"string"==typeof s?s:`${s}px`}function R(s){return s instanceof v.ElementRef?s.nativeElement:s}},317:(pe,b,f)=>{f.r(b),f.d(b,{InputBoolean:()=>ge,InputCssPixel:()=>ye,InputNumber:()=>me,arraysEqual:()=>R,canUseDom:()=>ue,createDebugEle:()=>se,ensureInBounds:()=>je,ensureNumberInRange:()=>_e,getCaretCoordinates:()=>$e,getElementOffset:()=>we,getEventPosition:()=>Ee,getMentions:()=>Ne,getPercent:()=>xe,getPrecision:()=>Te,getRegExp:()=>ne,getRepeatedElement:()=>z,getStatusClassNames:()=>Ye,getStyleAsText:()=>De,inNextTick:()=>Ve,injectCSS:()=>K,isNil:()=>E,isNonEmptyString:()=>B,isNotNil:()=>s,isNumberFinite:()=>Pe,isPromise:()=>re,isStyleSupport:()=>ve,isTemplateRef:()=>L,isTouchEvent:()=>te,measure:()=>We,measureScrollbar:()=>ze,padEnd:()=>Se,padStart:()=>be,properties:()=>oe,pxToNumber:()=>T,removeCSS:()=>Fe,scrollIntoView:()=>Ae,shallowCopyArray:()=>Q,shallowEqual:()=>S,silentEvent:()=>Ce,sum:()=>Ie,toArray:()=>H,toBoolean:()=>N,toCssPixel:()=>ee,toDecimal:()=>Oe,toNumber:()=>Z,updateCSS:()=>Ke,valueFunctionProp:()=>he,wrapIntoObservable:()=>ke});var v=f(3083),w=f(4085),J=f(5918),y=f(4866),D=f(2778);function H(e){let t;return t=null==e?[]:Array.isArray(e)?e:[e],t}function R(e,t){if(!e||!t||e.length!==t.length)return!1;const n=e.length;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Q(e){return e.slice()}function s(e){return typeof e<"u"&&null!==e}function E(e){return typeof e>"u"||null===e}function S(e,t){if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;const o=Object.prototype.hasOwnProperty.bind(t);for(let c=0;c<n.length;c++){const u=n[c];if(!o(u)||e[u]!==t[u])return!1}return!0}function B(e){return"string"==typeof e&&""!==e}function L(e){return e instanceof v.TemplateRef}function N(e){return(0,w.he)(e)}function Z(e,t=0){return(0,w.o1)(e)?Number(e):t}function ee(e){return(0,w.a1)(e)}function he(e,...t){return"function"==typeof e?e(...t):e}function W(e,t){return function n(r,o,c){const u=`$$__zorroPropDecorator__${o}`;return Object.prototype.hasOwnProperty.call(r,u)&&(0,J.warn)(`The prop "${u}" is already exist, it will be overrided by ${e} decorator.`),Object.defineProperty(r,u,{configurable:!0,writable:!0}),{get(){return c&&c.get?c.get.bind(this)():this[u]},set(d){c&&c.set&&c.set.bind(this)(t(d)),this[u]=t(d)}}}}function ge(){return W("InputBoolean",N)}function ye(){return W("InputCssPixel",ee)}function me(e){return W("InputNumber",t=>Z(t,e))}function Ce(e){e.stopPropagation(),e.preventDefault()}function we(e){if(!e.getClientRects().length)return{top:0,left:0};const t=e.getBoundingClientRect(),n=e.ownerDocument.defaultView;return{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}}function te(e){return e.type.startsWith("touch")}function Ee(e){return te(e)?e.touches[0]||e.changedTouches[0]:e}function ne(e){const t=Array.isArray(e)?e:[e];let n=t.join("").replace(/(\$|\^)/g,"\\$1");return t.length>1&&(n=`[${n}]`),new RegExp(`(\\s|^)(${n})[^\\s]*`,"g")}function Ne(e,t="@"){if("string"!=typeof e)return[];const n=ne(t),r=e.match(n);return null!==r?r.map(o=>o.trim()):[]}function be(e,t,n){if(e.length>t)return e;const r=`${z(t,n)}${e}`;return r.slice(r.length-t,r.length)}function Se(e,t,n){return`${e}${z(t,n)}`.slice(0,t)}function z(e,t){return Array(e).fill(t).join("")}function re(e){return!!e&&"function"==typeof e.then&&"function"==typeof e.catch}function xe(e,t,n){return(n-e)/(t-e)*100}function Te(e){const t=e.toString(),n=t.indexOf(".");return n>=0?t.length-n-1:0}function _e(e,t,n){return isNaN(e)||e<t?t:e>n?n:e}function Pe(e){return"number"==typeof e&&isFinite(e)}function Oe(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}function Ie(e,t=0){return e.reduce((n,r)=>n+r,t)}function Ae(e){e.scrollIntoViewIfNeeded?e.scrollIntoViewIfNeeded(!1):e.scrollIntoView&&e.scrollIntoView(!1)}const oe=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],ie=typeof window<"u",Me=ie&&null!=window.mozInnerScreenX,x=e=>parseInt(e,10);function $e(e,t,n){if(!ie)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");const r=n&&n.debug||!1;if(r){const p=document.querySelector("#input-textarea-caret-position-mirror-div");p&&p.parentNode.removeChild(p)}const o=document.createElement("div");o.id="input-textarea-caret-position-mirror-div",document.body.appendChild(o);const c=o.style,u=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,d="INPUT"===e.nodeName;c.whiteSpace="pre-wrap",d||(c.wordWrap="break-word"),c.position="absolute",r||(c.visibility="hidden"),oe.forEach(p=>{d&&"lineHeight"===p?c.lineHeight=u.height:c[p]=u[p]}),Me?e.scrollHeight>x(u.height)&&(c.overflowY="scroll"):c.overflow="hidden",o.textContent=e.value.substring(0,t),d&&(o.textContent=o.textContent.replace(/\s/g,"\xa0"));const m=document.createElement("span");m.textContent=e.value.substring(t)||".",o.appendChild(m);const _={top:m.offsetTop+x(u.borderTopWidth),left:m.offsetLeft+x(u.borderLeftWidth),height:x(u.lineHeight)};return r?(m.style.backgroundColor="#eee",se(e,_)):document.body.removeChild(o),_}function se(e,t){const n=getComputedStyle(e).getPropertyValue("font-size"),r=document.querySelector("#DEBUG")||document.createElement("div");document.body.appendChild(r),r.id="DEBUG",r.style.position="absolute",r.style.backgroundColor="red",r.style.height=n,r.style.width="1px",r.style.top=`${e.getBoundingClientRect().top-e.scrollTop+window.pageYOffset+t.top}px`,r.style.left=`${e.getBoundingClientRect().left-e.scrollLeft+window.pageXOffset+t.left}px`}function ve(e){if(typeof window<"u"&&window.document&&window.document.documentElement){const t=Array.isArray(e)?e:[e],{documentElement:n}=window.document;return t.some(r=>r in n.style)}return!1}function De(e){return e?Object.keys(e).map(t=>{const n=e[t];return`${t}:${"string"==typeof n?n:`${n}px`}`}).join(";"):""}const He=1,j=3,Re=8;let i;const V={padding:"0",margin:"0",display:"inline",lineHeight:"inherit"};function T(e){if(!e)return 0;const t=e.match(/^\d*(\.\d*)?/);return t?Number(t[0]):0}function We(e,t,n,r,o,c=""){i||(i=document.createElement("div"),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));const u=window.getComputedStyle(e),d=function Be(e){return Array.prototype.slice.apply(e).map(n=>`${n}: ${e.getPropertyValue(n)};`).join("")}(u),m=T(u.lineHeight),_=Math.round(m*(t+1)+T(u.paddingTop)+T(u.paddingBottom));i.setAttribute("style",d),i.style.position="fixed",i.style.left="0",i.style.height="auto",i.style.minHeight="auto",i.style.maxHeight="auto",i.style.top="-999999px",i.style.zIndex="-1000",i.style.textOverflow="clip",i.style.whiteSpace="normal",i.style.webkitLineClamp="none";const p=function Le(e){const t=[];return e.forEach(n=>{const r=t[t.length-1];r&&n.nodeType===j&&r.nodeType===j?r.data+=n.data:t.push(n)}),t}(n),C=document.createElement("div"),P=document.createElement("span"),Xe=document.createTextNode(c),X=document.createElement("span");function O(){return i.offsetHeight<_}if(Object.assign(C.style,V),Object.assign(P.style,V),Object.assign(X.style,V),p.forEach(l=>{P.appendChild(l)}),P.appendChild(Xe),r.forEach(l=>{X.appendChild(l.cloneNode(!0))}),C.appendChild(P),C.appendChild(X),i.appendChild(C),O()){const l=i.innerHTML;return i.removeChild(C),{contentNodes:n,text:l,ellipsis:!1}}const Ge=Array.prototype.slice.apply(i.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(({nodeType:l})=>l!==Re),qe=Array.prototype.slice.apply(i.childNodes[0].childNodes[1].cloneNode(!0).childNodes);i.removeChild(C),i.innerHTML="";const I=document.createElement("span");i.appendChild(I);const ae=document.createTextNode(o+c);function G(l,a,g=0,h=a.length,A=0){const M=Math.floor((g+h)/2);if(l.textContent=a.slice(0,M),g>=h-1)for(let $=h;$>=g;$-=1){const q=a.slice(0,$);if(l.textContent=q,O()||!q)return $===a.length?{finished:!1,node:document.createTextNode(a)}:{finished:!0,node:document.createTextNode(q)}}return O()?G(l,a,M,h,M):G(l,a,g,M,A)}function Qe(l,a){const g=l.nodeType;if(g===He)return O()?{finished:!1,node:p[a]}:(I.removeChild(l),{finished:!0,node:null});if(g===j){const h=l.textContent||"",A=document.createTextNode(h);return function Je(l){I.insertBefore(l,ae)}(A),G(A,h)}return{finished:!1,node:null}}I.appendChild(ae),qe.forEach(l=>{i.appendChild(l)});const fe=[];Ge.some((l,a)=>{const{finished:g,node:h}=Qe(l,a);return h&&fe.push(h),g});const Ze={contentNodes:fe,text:i.innerHTML,ellipsis:!0};for(;i.firstChild;)i.removeChild(i.firstChild);return Ze}let k,U;const ce={position:"absolute",top:"-9999px",width:"50px",height:"50px"};function ze(e="vertical",t="ant"){if(typeof document>"u"||typeof window>"u")return 0;const n="vertical"===e;if(n&&k)return k;if(!n&&U)return U;const r=document.createElement("div");Object.keys(ce).forEach(c=>{r.style[c]=ce[c]}),r.className=`${t}-hide-scrollbar scroll-div-append-to-body`,n?r.style.overflowY="scroll":r.style.overflowX="scroll",document.body.appendChild(r);let o=0;return n?(o=r.offsetWidth-r.clientWidth,k=o):(o=r.offsetHeight-r.clientHeight,U=o),document.body.removeChild(r),o}function je(e,t){return e&&e<t?e:t}function Ve(){const e=new y.Subject;return Promise.resolve().then(()=>e.next()),e.pipe((0,D.take)(1))}function ke(e){return(0,y.isObservable)(e)?e:re(e)?(0,y.from)(Promise.resolve(e)):(0,y.of)(e)}function ue(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}const Ue="rc-util-key";function le({mark:e}={}){return e?e.startsWith("data-")?e:`data-${e}`:Ue}function F(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function K(e,t={}){if(!ue())return null;const n=document.createElement("style");t.cspNonce&&(n.nonce=t.cspNonce),n.innerHTML=e;const r=F(t),{firstChild:o}=r;return t.prepend&&r.prepend?r.prepend(n):t.prepend&&o?r.insertBefore(n,o):r.appendChild(n),n}const Y=new Map;function de(e,t={}){const n=F(t);return Array.from(Y.get(n)?.children||[]).find(r=>"STYLE"===r.tagName&&r.getAttribute(le(t))===e)}function Fe(e,t={}){const n=de(e,t);n?.parentNode?.removeChild(n)}function Ke(e,t,n={}){const r=F(n);if(!Y.has(r)){const u=K("",n),{parentNode:d}=u;Y.set(r,d),d.removeChild(u)}const o=de(t,n);if(o)return n.cspNonce&&o.nonce!==n.cspNonce&&(o.nonce=n.cspNonce),o.innerHTML!==e&&(o.innerHTML=e),o;const c=K(e,n);return c?.setAttribute(le(n),t),c}function Ye(e,t,n){return{[`${e}-status-success`]:"success"===t,[`${e}-status-warning`]:"warning"===t,[`${e}-status-error`]:"error"===t,[`${e}-status-validating`]:"validating"===t,[`${e}-has-feedback`]:n}}}}]);