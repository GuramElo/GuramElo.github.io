(self.webpackChunkcu_std_forms=self.webpackChunkcu_std_forms||[]).push([[146,765],{5146:(S,a,s)=>{s.r(a),s.d(a,{AuthInterceptor:()=>f,AuthService:()=>p,BASE_FORMS_ERROR_MESSAGE_DICTIONARY:()=>u,ENV_TOKEN_SHARED:()=>i,EnvironmentService:()=>l,confirmPasswordValidator:()=>h});var o=s(3083);const i=new o.InjectionToken("ENV_TOKEN_SHARED");let l=(()=>{class t{constructor(){this.config=(0,o.inject)(i)}static#t=this.\u0275fac=function(e){return new(e||t)};static#e=this.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const u={required:"\u10d5\u10d4\u10da\u10d8\u10e1 \u10e8\u10d4\u10d5\u10e1\u10d4\u10d1\u10d0 \u10e1\u10d0\u10d5\u10d0\u10da\u10d3\u10d4\u10d1\u10e3\u10da\u10dd\u10d0",maxlength:"\u10d5\u10d4\u10da\u10d8\u10e1 \u10db\u10dc\u10d8\u10e8\u10d5\u10dc\u10d4\u10da\u10dd\u10d1\u10d0 \u10d6\u10d4\u10d3\u10db\u10d4\u10e2\u10d0\u10d3 \u10d2\u10e0\u10eb\u10d4\u10da\u10d8\u10d0",minlength:"\u10d5\u10d4\u10da\u10d8\u10e1 \u10db\u10dc\u10d8\u10e8\u10d5\u10dc\u10d4\u10da\u10dd\u10d1\u10d0 \u10d6\u10d4\u10d3\u10db\u10d4\u10e2\u10d0\u10d3 \u10db\u10dd\u10d9\u10da\u10d4\u10d0",wrong:"\u10d5\u10d4\u10da\u10d8\u10e1 \u10db\u10dc\u10d8\u10e8\u10d5\u10dc\u10d4\u10da\u10dd\u10d1\u10d0 \u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8\u10d0",invalid:"\u10d5\u10d4\u10da\u10d8\u10e1 \u10db\u10dc\u10d8\u10e8\u10d5\u10dc\u10d4\u10da\u10dd\u10d1\u10d0 \u10d0\u10e0\u10d0\u10d5\u10d0\u10da\u10d8\u10d3\u10e3\u10e0\u10d8\u10d0",passwordMismatch:"\u10de\u10d0\u10e0\u10dd\u10da\u10d4\u10d1\u10d8 \u10d4\u10e0\u10d7\u10db\u10d0\u10dc\u10d4\u10d7\u10e1 \u10e3\u10dc\u10d3\u10d0 \u10d4\u10db\u10d7\u10ee\u10d5\u10d4\u10dd\u10d3\u10dc\u10d4\u10dc"};function h(t,m){return n=>{const e=n.get(t),r=n.get(m);return e?.value!==r?.value?(r?.setErrors({passwordMismatch:!0}),{passwordMismatch:!0}):(r?.setErrors(null),null)}}var d=s(2779);let f=(()=>{class t{intercept(n,e){const r=localStorage.getItem("access_token"),c=r?n.clone({headers:n.headers.set("Authorization",`Bearer ${r}`)}):n;return e.handle(c)}static#t=this.\u0275fac=function(e){return new(e||t)};static#e=this.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac})}return t})(),p=(()=>{class t{constructor(n,e){this.http=n,this.environmentService=e,this.apiUrl=this.environmentService.config.mainRestApiUrl}signIn(n,e){return this.http.post(`${this.apiUrl}/auth/sign-in`,{username:n,password:e})}checkCurrentAuthStatus(){const n=localStorage.getItem("access_token");if(n){const e=this.decodeToken(n);if(!e)return!1;const r=Math.floor((new Date).getTime()/1e3);return e.exp>r}return!1}decodeToken(n){try{const r=n.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),c=decodeURIComponent(atob(r).split("").map(function(E){return"%"+("00"+E.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(c)}catch(e){return console.error("Error decoding token:",e),null}}static#t=this.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(d.HttpClient),o.\u0275\u0275inject(l))};static#e=this.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()}}]);