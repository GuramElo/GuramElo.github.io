(self.webpackChunkcu_std_ocr=self.webpackChunkcu_std_ocr||[]).push([[6006],{4709:(O,M,b)=>{b.d(M,{H:()=>g,K6:()=>_,Me:()=>h,Ob:()=>n,YL:()=>S,_:()=>y,g8:()=>r,n6:()=>k,oS:()=>p,wE:()=>A});var i=b(9785);function y(e,t,a){return{r:255*(0,i.Cg)(e,255),g:255*(0,i.Cg)(t,255),b:255*(0,i.Cg)(a,255)}}function _(e,t,a){e=(0,i.Cg)(e,255),t=(0,i.Cg)(t,255),a=(0,i.Cg)(a,255);var c=Math.max(e,t,a),u=Math.min(e,t,a),s=0,v=0,f=(c+u)/2;if(c===u)v=0,s=0;else{var d=c-u;switch(v=f>.5?d/(2-c-u):d/(c+u),c){case e:s=(t-a)/d+(t<a?6:0);break;case t:s=(a-e)/d+2;break;case a:s=(e-t)/d+4}s/=6}return{h:s,s:v,l:f}}function C(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*a*(t-e):a<.5?t:a<2/3?e+(t-e)*(2/3-a)*6:e}function S(e,t,a){var c,u,s;if(e=(0,i.Cg)(e,360),t=(0,i.Cg)(t,100),a=(0,i.Cg)(a,100),0===t)u=a,s=a,c=a;else{var v=a<.5?a*(1+t):a+t-a*t,f=2*a-v;c=C(f,v,e+1/3),u=C(f,v,e),s=C(f,v,e-1/3)}return{r:255*c,g:255*u,b:255*s}}function A(e,t,a){e=(0,i.Cg)(e,255),t=(0,i.Cg)(t,255),a=(0,i.Cg)(a,255);var c=Math.max(e,t,a),u=Math.min(e,t,a),s=0,v=c,f=c-u,d=0===c?0:f/c;if(c===u)s=0;else{switch(c){case e:s=(t-a)/f+(t<a?6:0);break;case t:s=(a-e)/f+2;break;case a:s=(e-t)/f+4}s/=6}return{h:s,s:d,v}}function h(e,t,a){e=6*(0,i.Cg)(e,360),t=(0,i.Cg)(t,100),a=(0,i.Cg)(a,100);var c=Math.floor(e),u=e-c,s=a*(1-t),v=a*(1-u*t),f=a*(1-(1-u)*t),d=c%6;return{r:255*[a,v,s,s,f,a][d],g:255*[f,a,a,v,s,s][d],b:255*[s,s,f,a,a,v][d]}}function n(e,t,a,c){var u=[(0,i.wl)(Math.round(e).toString(16)),(0,i.wl)(Math.round(t).toString(16)),(0,i.wl)(Math.round(a).toString(16))];return c&&u[0].startsWith(u[0].charAt(1))&&u[1].startsWith(u[1].charAt(1))&&u[2].startsWith(u[2].charAt(1))?u[0].charAt(0)+u[1].charAt(0)+u[2].charAt(0):u.join("")}function g(e,t,a,c,u){var s=[(0,i.wl)(Math.round(e).toString(16)),(0,i.wl)(Math.round(t).toString(16)),(0,i.wl)(Math.round(a).toString(16)),(0,i.wl)(E(c))];return u&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function E(e){return Math.round(255*parseFloat(e)).toString(16)}function k(e){return r(e)/255}function r(e){return parseInt(e,16)}function p(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}},6681:(O,M,b)=>{b.d(M,{D:()=>i});var i={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},4215:(O,M,b)=>{b.d(M,{RO:()=>C});var i=b(4709),y=b(6681),_=b(9785);function C(r){var p={r:0,g:0,b:0},e=1,t=null,a=null,c=null,u=!1,s=!1;return"string"==typeof r&&(r=function E(r){if(0===(r=r.trim().toLowerCase()).length)return!1;var p=!1;if(y.D[r])r=y.D[r],p=!0;else if("transparent"===r)return{r:0,g:0,b:0,a:0,format:"name"};var e=m.rgb.exec(r);return e?{r:e[1],g:e[2],b:e[3]}:(e=m.rgba.exec(r))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=m.hsl.exec(r))?{h:e[1],s:e[2],l:e[3]}:(e=m.hsla.exec(r))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=m.hsv.exec(r))?{h:e[1],s:e[2],v:e[3]}:(e=m.hsva.exec(r))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=m.hex8.exec(r))?{r:(0,i.g8)(e[1]),g:(0,i.g8)(e[2]),b:(0,i.g8)(e[3]),a:(0,i.n6)(e[4]),format:p?"name":"hex8"}:(e=m.hex6.exec(r))?{r:(0,i.g8)(e[1]),g:(0,i.g8)(e[2]),b:(0,i.g8)(e[3]),format:p?"name":"hex"}:(e=m.hex4.exec(r))?{r:(0,i.g8)(e[1]+e[1]),g:(0,i.g8)(e[2]+e[2]),b:(0,i.g8)(e[3]+e[3]),a:(0,i.n6)(e[4]+e[4]),format:p?"name":"hex8"}:!!(e=m.hex3.exec(r))&&{r:(0,i.g8)(e[1]+e[1]),g:(0,i.g8)(e[2]+e[2]),b:(0,i.g8)(e[3]+e[3]),format:p?"name":"hex"}}(r)),"object"==typeof r&&(k(r.r)&&k(r.g)&&k(r.b)?(p=(0,i._)(r.r,r.g,r.b),u=!0,s="%"===String(r.r).substr(-1)?"prgb":"rgb"):k(r.h)&&k(r.s)&&k(r.v)?(t=(0,_.Px)(r.s),a=(0,_.Px)(r.v),p=(0,i.Me)(r.h,t,a),u=!0,s="hsv"):k(r.h)&&k(r.s)&&k(r.l)&&(t=(0,_.Px)(r.s),c=(0,_.Px)(r.l),p=(0,i.YL)(r.h,t,c),u=!0,s="hsl"),Object.prototype.hasOwnProperty.call(r,"a")&&(e=r.a)),e=(0,_.TV)(e),{ok:u,format:r.format||s,r:Math.min(255,Math.max(p.r,0)),g:Math.min(255,Math.max(p.g,0)),b:Math.min(255,Math.max(p.b,0)),a:e}}var h="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),n="[\\s|\\(]+(".concat(h,")[,|\\s]+(").concat(h,")[,|\\s]+(").concat(h,")\\s*\\)?"),g="[\\s|\\(]+(".concat(h,")[,|\\s]+(").concat(h,")[,|\\s]+(").concat(h,")[,|\\s]+(").concat(h,")\\s*\\)?"),m={CSS_UNIT:new RegExp(h),rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+g),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+g),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+g),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function k(r){return!!m.CSS_UNIT.exec(String(r))}},9785:(O,M,b)=>{function i(n,g){(function _(n){return"string"==typeof n&&-1!==n.indexOf(".")&&1===parseFloat(n)})(n)&&(n="100%");var m=function C(n){return"string"==typeof n&&-1!==n.indexOf("%")}(n);return n=360===g?n:Math.min(g,Math.max(0,parseFloat(n))),m&&(n=parseInt(String(n*g),10)/100),Math.abs(n-g)<1e-6?1:n=360===g?(n<0?n%g+g:n%g)/parseFloat(String(g)):n%g/parseFloat(String(g))}function y(n){return Math.min(1,Math.max(0,n))}function S(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function A(n){return n<=1?"".concat(100*Number(n),"%"):n}function h(n){return 1===n.length?"0"+n:String(n)}b.d(M,{Cg:()=>i,J$:()=>y,Px:()=>A,TV:()=>S,wl:()=>h})},6006:(O,M,b)=>{b.r(M),b.d(M,{generate:()=>v,isPresetColor:()=>S,isStatusColor:()=>A,presetColors:()=>C,statusColors:()=>_});var i=b(4709),y=b(4215);const _=["success","processing","error","default","warning"],C=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];function S(f){return-1!==C.indexOf(f)}function A(f){return-1!==_.indexOf(f)}const h=2,n=.16,g=.05,m=.05,E=.15,k=5,r=4,p=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function e({r:f,g:d,b:l}){const o=(0,i.wE)(f,d,l);return{h:360*o.h,s:o.s,v:o.v}}function t({r:f,g:d,b:l}){return`#${(0,i.Ob)(f,d,l,!1)}`}function c(f,d,l){let o;return o=Math.round(f.h)>=60&&Math.round(f.h)<=240?l?Math.round(f.h)-h*d:Math.round(f.h)+h*d:l?Math.round(f.h)+h*d:Math.round(f.h)-h*d,o<0?o+=360:o>=360&&(o-=360),o}function u(f,d,l){if(0===f.h&&0===f.s)return f.s;let o;return o=l?f.s-n*d:d===r?f.s+n:f.s+g*d,o>1&&(o=1),l&&d===k&&o>.1&&(o=.1),o<.06&&(o=.06),Number(o.toFixed(2))}function s(f,d,l){let o;return o=l?f.v+m*d:f.v-E*d,o>1&&(o=1),Number(o.toFixed(2))}function v(f,d={}){const l=[],o=(0,y.RO)(f);for(let x=k;x>0;x-=1){const w=e(o),T=t((0,y.RO)({h:c(w,x,!0),s:u(w,x,!0),v:s(w,x,!0)}));l.push(T)}l.push(t(o));for(let x=1;x<=r;x+=1){const w=e(o),T=t((0,y.RO)({h:c(w,x),s:u(w,x),v:s(w,x)}));l.push(T)}return"dark"===d.theme?p.map(({index:x,opacity:w})=>t(function a(f,d,l){const o=l/100;return{r:(d.r-f.r)*o+f.r,g:(d.g-f.g)*o+f.g,b:(d.b-f.b)*o+f.b}}((0,y.RO)(d.backgroundColor||"#141414"),(0,y.RO)(l[x]),100*w))):l}}}]);