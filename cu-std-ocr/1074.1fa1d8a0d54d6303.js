(self.webpackChunkcu_std_ocr=self.webpackChunkcu_std_ocr||[]).push([[1074],{837:a=>{a.exports=function g(){return!!(typeof window<"u"&&"object"==typeof window.process&&"renderer"===window.process.type||typeof process<"u"&&"object"==typeof process.versions&&process.versions.electron||"object"==typeof navigator&&"string"==typeof navigator.userAgent&&navigator.userAgent.indexOf("Electron")>=0)}},8646:a=>{var g=function(n){"use strict";var i,u=Object.prototype,h=u.hasOwnProperty,d=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},l=o.iterator||"@@iterator",f=o.asyncIterator||"@@asyncIterator",v=o.toStringTag||"@@toStringTag";function m(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{m({},"")}catch{m=function(e,r,c){return e[r]=c}}function P(t,e,r,c){var w=Object.create((e&&e.prototype instanceof K?e:K).prototype),A=new H(c||[]);return d(w,"_invoke",{value:J(t,r,A)}),w}function $(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(c){return{type:"throw",arg:c}}}n.wrap=P;var _="suspendedStart",z="suspendedYield",W="executing",G="completed",b={};function K(){}function E(){}function L(){}var C={};m(C,l,function(){return this});var B=Object.getPrototypeOf,O=B&&B(B(Q([])));O&&O!==u&&h.call(O,l)&&(C=O);var M=L.prototype=K.prototype=Object.create(C);function x(t){["next","throw","return"].forEach(function(e){m(t,e,function(r){return this._invoke(e,r)})})}function j(t,e){function r(w,A,R,I){var k=$(t[w],t,A);if("throw"!==k.type){var X=k.arg,F=X.value;return F&&"object"==typeof F&&h.call(F,"__await")?e.resolve(F.__await).then(function(D){r("next",D,R,I)},function(D){r("throw",D,R,I)}):e.resolve(F).then(function(D){X.value=D,R(X)},function(D){return r("throw",D,R,I)})}I(k.arg)}var c;d(this,"_invoke",{value:function s(w,A){function R(){return new e(function(I,k){r(w,A,I,k)})}return c=c?c.then(R,R):R()}})}function J(t,e,r){var c=_;return function(w,A){if(c===W)throw new Error("Generator is already running");if(c===G){if("throw"===w)throw A;return q()}for(r.method=w,r.arg=A;;){var R=r.delegate;if(R){var I=V(R,r);if(I){if(I===b)continue;return I}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(c===_)throw c=G,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);c=W;var k=$(t,e,r);if("normal"===k.type){if(c=r.done?G:z,k.arg===b)continue;return{value:k.arg,done:r.done}}"throw"===k.type&&(c=G,r.method="throw",r.arg=k.arg)}}}function V(t,e){var r=e.method,c=t.iterator[r];if(c===i)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=i,V(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var s=$(c,t.iterator,e.arg);if("throw"===s.type)return e.method="throw",e.arg=s.arg,e.delegate=null,b;var w=s.arg;return w?w.done?(e[t.resultName]=w.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,b):w:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Y(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function H(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function Q(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,c=function s(){for(;++r<t.length;)if(h.call(t,r))return s.value=t[r],s.done=!1,s;return s.value=i,s.done=!0,s};return c.next=c}}return{next:q}}function q(){return{value:i,done:!0}}return E.prototype=L,d(M,"constructor",{value:L,configurable:!0}),d(L,"constructor",{value:E,configurable:!0}),E.displayName=m(L,v,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,m(t,v,"GeneratorFunction")),t.prototype=Object.create(M),t},n.awrap=function(t){return{__await:t}},x(j.prototype),m(j.prototype,f,function(){return this}),n.AsyncIterator=j,n.async=function(t,e,r,c,s){void 0===s&&(s=Promise);var w=new j(P(t,e,r,c),s);return n.isGeneratorFunction(e)?w:w.next().then(function(A){return A.done?A.value:w.next()})},x(M),m(M,v,"Generator"),m(M,l,function(){return this}),m(M,"toString",function(){return"[object Generator]"}),n.keys=function(t){var e=Object(t),r=[];for(var c in e)r.push(c);return r.reverse(),function s(){for(;r.length;){var w=r.pop();if(w in e)return s.value=w,s.done=!1,s}return s.done=!0,s}},n.values=Q,H.prototype={constructor:H,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(Y),!t)for(var e in this)"t"===e.charAt(0)&&h.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(I,k){return w.type="throw",w.arg=t,e.next=I,k&&(e.method="next",e.arg=i),!!k}for(var c=this.tryEntries.length-1;c>=0;--c){var s=this.tryEntries[c],w=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var A=h.call(s,"catchLoc"),R=h.call(s,"finallyLoc");if(A&&R){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(A){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!R)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r];if(c.tryLoc<=this.prev&&h.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var s=c;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var w=s?s.completion:{};return w.type=t,w.arg=e,s?(this.method="next",this.next=s.finallyLoc,b):this.complete(w)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Y(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var c=r.completion;if("throw"===c.type){var s=c.arg;Y(r)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Q(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=i),b}},n}(a.exports);try{regeneratorRuntime=g}catch{"object"==typeof globalThis?globalThis.regeneratorRuntime=g:Function("r","regeneratorRuntime = r")(g)}},5444:(a,g,n)=>{var u=n(9293).default;const h=n(8738);a.exports={recognize:function(){var o=u(function*(l,f,v){const m=yield h(f,1,v);return m.recognize(l).finally(u(function*(){yield m.terminate()}))});return function(f,v,m){return o.apply(this,arguments)}}(),detect:function(){var o=u(function*(l,f){const v=yield h("osd",0,f);return v.detect(l).finally(u(function*(){yield v.terminate()}))});return function(f,v){return o.apply(this,arguments)}}()}},8103:a=>{a.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}},8204:a=>{a.exports={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}},9499:a=>{a.exports={workerBlobURL:!0,logger:()=>{}}},3427:a=>{a.exports={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}},9413:(a,g,n)=>{const u=n(8777);let h=0;a.exports=({id:d,action:i,payload:o={}})=>{let l=d;return typeof l>"u"&&(l=u("Job",h),h+=1),{id:l,action:i,payload:o}}},575:function(a,g,n){var u=n(9293).default,h=this;const d=n(9413),{log:i}=n(1862),o=n(8777);let l=0;a.exports=()=>{const f=o("Scheduler",l),v={},m={};let P=[];l+=1;const _=()=>Object.keys(v).length,z=()=>{if(0!==P.length){const E=Object.keys(v);for(let L=0;L<E.length;L+=1)if(typeof m[E[L]]>"u"){P[0](v[E[L]]);break}}},W=(E,L)=>new Promise((C,B)=>{const O=d({action:E,payload:L});P.push(function(){var M=u(function*(x){P.shift(),m[x.id]=O;try{C(yield x[E].apply(h,[...L,O.id]))}catch(j){B(j)}finally{delete m[x.id],z()}});return function(x){return M.apply(this,arguments)}}()),i(`[${f}]: Add ${O.id} to JobQueue`),i(`[${f}]: JobQueue length=${P.length}`),z()});return{addWorker:E=>(v[E.id]=E,i(`[${f}]: Add ${E.id}`),i(`[${f}]: Number of workers=${_()}`),z(),E.id),addJob:function(){var E=u(function*(L,...C){if(0===_())throw Error(`[${f}]: You need to have at least one worker before adding jobs`);return W(L,C)});return function(C){return E.apply(this,arguments)}}(),terminate:function(){var E=u(function*(){Object.keys(v).forEach(function(){var L=u(function*(C){yield v[C].terminate()});return function(C){return L.apply(this,arguments)}}()),P=[]});return function(){return E.apply(this,arguments)}}(),getQueueLen:()=>P.length,getNumWorkers:_}}},8738:(a,g,n)=>{var u=n(9293).default;const h=n(4434),d=n(3377),i=n(9413),{log:o}=n(1862),l=n(8777),f=n(8103),{defaultOptions:v,spawnWorker:m,terminateWorker:P,onMessage:$,loadImage:_,send:z}=n(7234);let W=0;a.exports=u(function*(G="eng",b=f.LSTM_ONLY,K={},E={}){const L=l("Worker",W),{logger:C,errorHandler:B,...O}=h({...v,...K}),M={},x={},j="string"==typeof G?G.split("+"):G;let J=b,V=E;const Z=[f.DEFAULT,f.LSTM_ONLY].includes(b)&&!O.legacyCore;let Y,H;const Q=new Promise((p,y)=>{H=p,Y=y});let t=m(O);t.onerror=p=>{Y(p.message)},W+=1;const e=(p,y)=>{M[p]=y},r=(p,y)=>{x[p]=y},c=({id:p,action:y,payload:S})=>new Promise((N,T)=>{o(`[${L}]: Start ${p}, action=${y}`);const U=`${y}-${p}`;e(U,N),r(U,T),z(t,{workerId:L,jobId:p,action:y,payload:S})}),F=(p,y)=>c(i({id:y,action:"loadLanguage",payload:{langs:p,options:{langPath:O.langPath,dataPath:O.dataPath,cachePath:O.cachePath,cacheMethod:O.cacheMethod,gzip:O.gzip,lstmOnly:[f.LSTM_ONLY,f.TESSERACT_LSTM_COMBINED].includes(J)&&!O.legacyLang}}})),te=(p,y,S,N)=>c(i({id:N,action:"initialize",payload:{langs:p,oem:y,config:S}})),ie=function(){var p=u(function*(y,S={},N={blocks:!0,text:!0,hocr:!0,tsv:!0},T){return c(i({id:T,action:"recognize",payload:{image:yield _(y),options:S,output:N}}))});return function(S){return p.apply(this,arguments)}}(),ae=function(){var p=u(function*(y,S){if(Z)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return c(i({id:S,action:"detect",payload:{image:yield _(y)}}))});return function(S,N){return p.apply(this,arguments)}}(),ce=function(){var p=u(function*(){return null!==t&&(P(t),t=null),Promise.resolve()});return function(){return p.apply(this,arguments)}}();$(t,({workerId:p,jobId:y,status:S,action:N,data:T})=>{const U=`${N}-${y}`;if("resolve"===S){o(`[${p}]: Complete ${y}`);let ee=T;"recognize"===N?ee=d(T):"getPDF"===N&&(ee=Array.from({...T,length:Object.keys(T).length})),M[U]({jobId:y,data:ee})}else if("reject"===S){if(x[U](T),"load"===N&&Y(T),!B)throw Error(T);B(T)}else"progress"===S&&C({...T,userJobId:y})});const ue={id:L,worker:t,setResolve:e,setReject:r,load:()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),writeText:(p,y,S)=>c(i({id:S,action:"FS",payload:{method:"writeFile",args:[p,y]}})),readText:(p,y)=>c(i({id:y,action:"FS",payload:{method:"readFile",args:[p,{encoding:"utf8"}]}})),removeFile:(p,y)=>c(i({id:y,action:"FS",payload:{method:"unlink",args:[p]}})),FS:(p,y,S)=>c(i({id:S,action:"FS",payload:{method:p,args:y}})),loadLanguage:()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),initialize:()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),reinitialize:(p="eng",y,S,N)=>{if(Z&&[f.TESSERACT_ONLY,f.TESSERACT_LSTM_COMBINED].includes(y))throw Error("Legacy model requested but code missing.");const T=y||J;J=T;const U=S||V;V=U;const re=("string"==typeof p?p.split("+"):p).filter(le=>!j.includes(le));return j.push(...re),re.length>0?F(re,N).then(()=>te(p,T,U,N)):te(p,T,U,N)},setParameters:(p={},y)=>c(i({id:y,action:"setParameters",payload:{params:p}})),recognize:ie,getPDF:(p="Tesseract OCR Result",y=!1,S)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),c(i({id:S,action:"getPDF",payload:{title:p,textonly:y}}))),detect:ae,terminate:ce};return c(i({id:undefined,action:"load",payload:{options:{lstmOnly:Z,corePath:O.corePath,logging:O.logging}}})).then(()=>F(G)).then(()=>te(G,b,E)).then(()=>H(ue)).catch(()=>{}),Q})},1074:(a,g,n)=>{n(8646);const u=n(575),h=n(8738),d=n(5444),i=n(3427),o=n(8103),l=n(8204),{setLogging:f}=n(1862);a.exports={languages:i,OEM:o,PSM:l,createScheduler:u,createWorker:h,setLogging:f,...d}},3377:a=>{a.exports=g=>{const n=[],u=[],h=[],d=[],i=[];return g.blocks&&g.blocks.forEach(o=>{o.paragraphs.forEach(l=>{l.lines.forEach(f=>{f.words.forEach(v=>{v.symbols.forEach(m=>{i.push({...m,page:g,block:o,paragraph:l,line:f,word:v})}),d.push({...v,page:g,block:o,paragraph:l,line:f})}),h.push({...f,page:g,block:o,paragraph:l})}),u.push({...l,page:g,block:o})}),n.push({...o,page:g})}),{...g,blocks:n,paragraphs:u,lines:h,words:d,symbols:i}}},2603:(a,g,n)=>{const u=n(837);a.exports=h=>{const d={};return typeof WorkerGlobalScope<"u"?d.type="webworker":u()?d.type="electron":"object"==typeof document?d.type="browser":"object"==typeof process&&(d.type="node"),typeof h>"u"?d:d[h]}},8777:a=>{a.exports=(g,n)=>`${g}-${n}-${Math.random().toString(16).slice(3,8)}`},1862:function(a,g){let n=!1;g.logging=n,g.setLogging=u=>{n=u},g.log=(...u)=>n?console.log.apply(this,u):null},4434:(a,g,n)=>{const h="browser"===n(2603)("type")?d=>new URL(d,window.location.href).href:d=>d;a.exports=d=>{const i={...d};return["corePath","workerPath","langPath"].forEach(o=>{d[o]&&(i[o]=h(i[o]))}),i}},9453:(a,g,n)=>{const u=n(6125).rE,h=n(9499);a.exports={...h,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${u}/dist/worker.min.js`}},7234:(a,g,n)=>{const u=n(9453),h=n(3895),d=n(3495),i=n(3478),o=n(6030),l=n(7759);a.exports={defaultOptions:u,spawnWorker:h,terminateWorker:d,onMessage:i,send:o,loadImage:l}},7759:(a,g,n)=>{var u=n(9293).default;const h=i=>new Promise((o,l)=>{const f=new FileReader;f.onload=()=>{o(f.result)},f.onerror=({target:{error:{code:v}}})=>{l(Error(`File could not be read! Code=${v}`))},f.readAsArrayBuffer(i)}),d=function(){var i=u(function*(o){let l=o;if(typeof o>"u")return"undefined";if("string"==typeof o)l=/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(o)?atob(o.split(",")[1]).split("").map(f=>f.charCodeAt(0)):yield(yield fetch(o)).arrayBuffer();else if(typeof HTMLElement<"u"&&o instanceof HTMLElement)"IMG"===o.tagName&&(l=yield d(o.src)),"VIDEO"===o.tagName&&(l=yield d(o.poster)),"CANVAS"===o.tagName&&(yield new Promise(f=>{o.toBlob(function(){var v=u(function*(m){l=yield h(m),f()});return function(m){return v.apply(this,arguments)}}())}));else if(typeof OffscreenCanvas<"u"&&o instanceof OffscreenCanvas){const f=yield o.convertToBlob();l=yield h(f)}else(o instanceof File||o instanceof Blob)&&(l=yield h(o));return new Uint8Array(l)});return function(l){return i.apply(this,arguments)}}();a.exports=d},3478:a=>{a.exports=(g,n)=>{g.onmessage=({data:u})=>{n(u)}}},6030:(a,g,n)=>{var u=n(9293).default;a.exports=function(){var h=u(function*(d,i){d.postMessage(i)});return function(d,i){return h.apply(this,arguments)}}()},3895:a=>{a.exports=({workerPath:g,workerBlobURL:n})=>{let u;if(Blob&&URL&&n){const h=new Blob([`importScripts("${g}");`],{type:"application/javascript"});u=new Worker(URL.createObjectURL(h))}else u=new Worker(g);return u}},3495:a=>{a.exports=g=>{g.terminate()}},9293:a=>{function g(u,h,d,i,o,l,f){try{var v=u[l](f),m=v.value}catch(P){return void d(P)}v.done?h(m):Promise.resolve(m).then(i,o)}a.exports=function n(u){return function(){var h=this,d=arguments;return new Promise(function(i,o){var l=u.apply(h,d);function f(m){g(l,i,o,f,v,"next",m)}function v(m){g(l,i,o,f,v,"throw",m)}f(void 0)})}},a.exports.__esModule=!0,a.exports.default=a.exports},6125:a=>{a.exports={rE:"5.1.0"}}}]);