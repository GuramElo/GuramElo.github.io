(self.webpackChunkcu_std_plat=self.webpackChunkcu_std_plat||[]).push([[2227],{4608:(Ae,R,c)=>{c.r(R),c.d(R,{CandyDate:()=>l,cloneDate:()=>ve,normalizeRangeValue:()=>ge,timeUnits:()=>De,wrongSortOrder:()=>me,\u0275NgTimeParser:()=>Me});var E=c(6190),o=c(628),i=c(738),D=c(179);function H(r,e){(0,i.A)(2,arguments);var t=(0,o.A)(r),a=(0,D.A)(e);if(isNaN(a))return new Date(NaN);if(!a)return t;var n=t.getDate(),s=new Date(t.getTime());return s.setMonth(t.getMonth()+a+1,0),n>=s.getDate()?s:(t.setFullYear(s.getFullYear(),s.getMonth(),n),t)}var K=c(4319);function X(r,e){(0,i.A)(2,arguments);var t=(0,o.A)(r),a=(0,o.A)(e);return t.getFullYear()===a.getFullYear()}function Z(r,e){(0,i.A)(2,arguments);var t=(0,o.A)(r),a=(0,o.A)(e);return t.getFullYear()===a.getFullYear()&&t.getMonth()===a.getMonth()}function O(r){(0,i.A)(1,arguments);var e=(0,o.A)(r);return e.setHours(0,0,0,0),e}function b(r,e){(0,i.A)(2,arguments);var t=O(r),a=O(e);return t.getTime()===a.getTime()}function k(r){(0,i.A)(1,arguments);var e=(0,o.A)(r);return e.setMinutes(0,0,0),e}function C(r,e){(0,i.A)(2,arguments);var t=k(r),a=k(e);return t.getTime()===a.getTime()}function L(r){(0,i.A)(1,arguments);var e=(0,o.A)(r);return e.setSeconds(0,0),e}function q(r,e){(0,i.A)(2,arguments);var t=L(r),a=L(e);return t.getTime()===a.getTime()}function x(r){(0,i.A)(1,arguments);var e=(0,o.A)(r);return e.setMilliseconds(0),e}function _(r,e){(0,i.A)(2,arguments);var t=x(r),a=x(e);return t.getTime()===a.getTime()}function ee(r,e){(0,i.A)(2,arguments);var t=(0,o.A)(r),a=(0,o.A)(e);return t.getFullYear()-a.getFullYear()}function te(r,e){(0,i.A)(2,arguments);var t=(0,o.A)(r),a=(0,o.A)(e);return 12*(t.getFullYear()-a.getFullYear())+(t.getMonth()-a.getMonth())}var W=c(3511);function $(r,e){(0,i.A)(2,arguments);var t=O(r),a=O(e),n=t.getTime()-(0,W.A)(t),s=a.getTime()-(0,W.A)(a);return Math.round((n-s)/864e5)}var B=c(6746);function F(r,e){return(0,i.A)(2,arguments),(0,o.A)(r).getTime()-(0,o.A)(e).getTime()}var j={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},re="trunc";function Y(r){return r?j[r]:j[re]}function ne(r,e,t){(0,i.A)(2,arguments);var a=F(r,e)/B.s0;return Y(t?.roundingMethod)(a)}function ie(r,e,t){(0,i.A)(2,arguments);var a=F(r,e)/B.Cg;return Y(t?.roundingMethod)(a)}function se(r,e,t){(0,i.A)(2,arguments);var a=F(r,e)/1e3;return Y(t?.roundingMethod)(a)}var ue=c(2764);var fe=c(5918),d=c(9853),m=c(5178);function me(r){const[e,t]=r;return!!e&&!!t&&t.isBeforeDay(e)}function ge(r,e,t="month",a="left"){const[n,s]=r;let u=n||new l,h=s||(e?u:u.add(1,t));return n&&!s?(u=n,h=e?n:n.add(1,t)):!n&&s?(u=e?s:s.add(-1,t),h=s):n&&s&&!e&&(n.isSame(s,t)||"left"===a?h=u.add(1,t):u=h.add(-1,t)),[u,h]}function ve(r){return Array.isArray(r)?r.map(e=>e instanceof l?e.clone():null):r instanceof l?r.clone():null}class l{constructor(e){if(e)if(e instanceof Date)this.nativeDate=e;else{if("string"!=typeof e&&"number"!=typeof e)throw new Error('The input date type is not supported ("Date" is now recommended)');(0,fe.warn)('The string type is not recommended for date-picker, use "Date" type'),this.nativeDate=new Date(e)}else this.nativeDate=new Date}calendarStart(e){return new l((0,E.A)(function z(r){(0,i.A)(1,arguments);var e=(0,o.A)(r);return e.setDate(1),e.setHours(0,0,0,0),e}(this.nativeDate),e))}getYear(){return this.nativeDate.getFullYear()}getMonth(){return this.nativeDate.getMonth()}getDay(){return this.nativeDate.getDay()}getTime(){return this.nativeDate.getTime()}getDate(){return this.nativeDate.getDate()}getHours(){return this.nativeDate.getHours()}getMinutes(){return this.nativeDate.getMinutes()}getSeconds(){return this.nativeDate.getSeconds()}getMilliseconds(){return this.nativeDate.getMilliseconds()}clone(){return new l(new Date(this.nativeDate))}setHms(e,t,a){const n=new Date(this.nativeDate.setHours(e,t,a));return new l(n)}setYear(e){return new l(function P(r,e){(0,i.A)(2,arguments);var t=(0,o.A)(r),a=(0,D.A)(e);return isNaN(t.getTime())?new Date(NaN):(t.setFullYear(a),t)}(this.nativeDate,e))}addYears(e){return new l(function V(r,e){return(0,i.A)(2,arguments),H(r,12*(0,D.A)(e))}(this.nativeDate,e))}setMonth(e){return new l(function G(r,e){(0,i.A)(2,arguments);var t=(0,o.A)(r),a=(0,D.A)(e),n=t.getFullYear(),s=t.getDate(),u=new Date(0);u.setFullYear(n,a,15),u.setHours(0,0,0,0);var h=function U(r){(0,i.A)(1,arguments);var e=(0,o.A)(r),t=e.getFullYear(),a=e.getMonth(),n=new Date(0);return n.setFullYear(t,a+1,0),n.setHours(0,0,0,0),n.getDate()}(u);return t.setMonth(a,Math.min(s,h)),t}(this.nativeDate,e))}addMonths(e){return new l(H(this.nativeDate,e))}setDay(e,t){return new l(function Q(r,e,t){var a,n,s,u,h,A,S,p;(0,i.A)(2,arguments);var M=(0,K.q)(),g=(0,D.A)(null!==(a=null!==(n=null!==(s=null!==(u=t?.weekStartsOn)&&void 0!==u?u:null==t||null===(h=t.locale)||void 0===h||null===(A=h.options)||void 0===A?void 0:A.weekStartsOn)&&void 0!==s?s:M.weekStartsOn)&&void 0!==n?n:null===(S=M.locale)||void 0===S||null===(p=S.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==a?a:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var y=(0,o.A)(r),N=(0,D.A)(e),v=y.getDay(),w=7-g;return function J(r,e){(0,i.A)(2,arguments);var t=(0,o.A)(r),a=(0,D.A)(e);return isNaN(a)?new Date(NaN):(a&&t.setDate(t.getDate()+a),t)}(y,N<0||N>6?N-(v+w)%7:((N%7+7)%7+w)%7-(v+w)%7)}(this.nativeDate,e,t))}setDate(e){const t=new Date(this.nativeDate);return t.setDate(e),new l(t)}addDays(e){return this.setDate(this.getDate()+e)}add(e,t){switch(t){case"decade":return this.addYears(10*e);case"year":return this.addYears(e);default:return this.addMonths(e)}}isSame(e,t="day"){let a;switch(t){case"decade":a=(n,s)=>Math.abs(n.getFullYear()-s.getFullYear())<11;break;case"year":a=X;break;case"month":a=Z;break;case"day":default:a=b;break;case"hour":a=C;break;case"minute":a=q;break;case"second":a=_}return a(this.nativeDate,this.toNativeDate(e))}isSameYear(e){return this.isSame(e,"year")}isSameMonth(e){return this.isSame(e,"month")}isSameDay(e){return this.isSame(e,"day")}isSameHour(e){return this.isSame(e,"hour")}isSameMinute(e){return this.isSame(e,"minute")}isSameSecond(e){return this.isSame(e,"second")}isBefore(e,t="day"){if(null===e)return!1;let a;switch(t){case"year":a=ee;break;case"month":a=te;break;case"day":default:a=$;break;case"hour":a=ne;break;case"minute":a=ie;break;case"second":a=se}return a(this.nativeDate,this.toNativeDate(e))<0}isBeforeYear(e){return this.isBefore(e,"year")}isBeforeMonth(e){return this.isBefore(e,"month")}isBeforeDay(e){return this.isBefore(e,"day")}isToday(){return function oe(r){return(0,i.A)(1,arguments),b(r,Date.now())}(this.nativeDate)}isValid(){return(0,ue.A)(this.nativeDate)}isFirstDayOfMonth(){return function de(r){return(0,i.A)(1,arguments),1===(0,o.A)(r).getDate()}(this.nativeDate)}isLastDayOfMonth(){return function ce(r){(0,i.A)(1,arguments);var e=(0,o.A)(r);return function le(r){(0,i.A)(1,arguments);var e=(0,o.A)(r);return e.setHours(23,59,59,999),e}(e).getTime()===function he(r){(0,i.A)(1,arguments);var e=(0,o.A)(r),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}(e).getTime()}(this.nativeDate)}toNativeDate(e){return e instanceof l?e.nativeDate:e}}const De=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];class Me{constructor(e,t){this.format=e,this.localeId=t,this.regex=null,this.matchMap={hour:null,minute:null,second:null,periodNarrow:null,periodWide:null,periodAbbreviated:null},this.genRegexp()}toDate(e){const t=this.getTimeResult(e),a=new Date;return(0,m.isNotNil)(t?.hour)&&a.setHours(t.hour),(0,m.isNotNil)(t?.minute)&&a.setMinutes(t.minute),(0,m.isNotNil)(t?.second)&&a.setSeconds(t.second),1===t?.period&&a.getHours()<12&&a.setHours(a.getHours()+12),a}getTimeResult(e){const t=this.regex.exec(e);let a=null;return t?((0,m.isNotNil)(this.matchMap.periodNarrow)&&(a=(0,d.getLocaleDayPeriods)(this.localeId,d.FormStyle.Format,d.TranslationWidth.Narrow).indexOf(t[this.matchMap.periodNarrow+1])),(0,m.isNotNil)(this.matchMap.periodWide)&&(a=(0,d.getLocaleDayPeriods)(this.localeId,d.FormStyle.Format,d.TranslationWidth.Wide).indexOf(t[this.matchMap.periodWide+1])),(0,m.isNotNil)(this.matchMap.periodAbbreviated)&&(a=(0,d.getLocaleDayPeriods)(this.localeId,d.FormStyle.Format,d.TranslationWidth.Abbreviated).indexOf(t[this.matchMap.periodAbbreviated+1])),{hour:(0,m.isNotNil)(this.matchMap.hour)?Number.parseInt(t[this.matchMap.hour+1],10):null,minute:(0,m.isNotNil)(this.matchMap.minute)?Number.parseInt(t[this.matchMap.minute+1],10):null,second:(0,m.isNotNil)(this.matchMap.second)?Number.parseInt(t[this.matchMap.second+1],10):null,period:a}):null}genRegexp(){let e=this.format.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$&");const t=/h{1,2}/i,a=/m{1,2}/,n=/s{1,2}/,s=/aaaaa/,u=/aaaa/,h=/a{1,3}/,A=t.exec(this.format),S=a.exec(this.format),p=n.exec(this.format),M=s.exec(this.format);let g=null,y=null;M||(g=u.exec(this.format)),!g&&!M&&(y=h.exec(this.format)),[A,S,p,M,g,y].filter(v=>!!v).sort((v,f)=>v.index-f.index).forEach((v,f)=>{switch(v){case A:this.matchMap.hour=f,e=e.replace(t,"(\\d{1,2})");break;case S:this.matchMap.minute=f,e=e.replace(a,"(\\d{1,2})");break;case p:this.matchMap.second=f,e=e.replace(n,"(\\d{1,2})");break;case M:this.matchMap.periodNarrow=f;const T=(0,d.getLocaleDayPeriods)(this.localeId,d.FormStyle.Format,d.TranslationWidth.Narrow).join("|");e=e.replace(s,`(${T})`);break;case g:this.matchMap.periodWide=f;const w=(0,d.getLocaleDayPeriods)(this.localeId,d.FormStyle.Format,d.TranslationWidth.Wide).join("|");e=e.replace(u,`(${w})`);break;case y:this.matchMap.periodAbbreviated=f;const I=(0,d.getLocaleDayPeriods)(this.localeId,d.FormStyle.Format,d.TranslationWidth.Abbreviated).join("|");e=e.replace(h,`(${I})`)}}),this.regex=new RegExp(e)}}}}]);