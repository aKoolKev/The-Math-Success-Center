var bn=Array.isArray,qn=Array.from,Pn=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,Mn=Array.prototype,Wt=Object.getPrototypeOf;function Ln(t){return typeof t=="function"}const Hn=()=>{};function Yn(t){return t()}function ht(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,dt=4,Y=8,et=16,w=32,z=64,S=128,V=256,p=512,x=1024,b=2048,C=4096,j=8192,Xt=16384,Et=32768,jn=65536,tn=1<<18,yt=1<<19,_t=Symbol("$state"),Bn=Symbol("");function wt(t){return t===this.v}function nn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!nn(t,this.v)}function rn(t){throw new Error("effect_in_teardown")}function en(){throw new Error("effect_in_unowned_derived")}function sn(t){throw new Error("effect_orphan")}function an(){throw new Error("effect_update_depth_exceeded")}function Un(){throw new Error("hydration_failed")}function Vn(t){throw new Error("props_invalid_value")}function Gn(){throw new Error("state_descriptors_fixed")}function Kn(){throw new Error("state_prototype_fixed")}function ln(){throw new Error("state_unsafe_local_read")}function un(){throw new Error("state_unsafe_mutation")}let J=!1;function $n(){J=!0}function st(t){return{f:0,v:t,reactions:null,equals:wt,version:0}}function Zn(t){return Tt(st(t))}function on(t,n=!1){var e;const r=st(t);return n||(r.equals=mt),J&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function zn(t,n=!1){return Tt(on(t,n))}function Tt(t){return i!==null&&i.f&T&&(y===null?xn([t]):y.push(t)),t}function At(t,n){return i!==null&&ot()&&i.f&(T|et)&&(y===null||!y.includes(t))&&un(),fn(t,n)}function fn(t,n){return t.equals(n)||(t.v=n,t.version=Ut(),gt(t,x),ot()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(E(u,x),Q(u)):g===null?kn([t]):g.push(t))),n}function gt(t,n){var r=t.reactions;if(r!==null)for(var e=ot(),s=r.length,a=0;a<s;a++){var l=r[a],f=l.f;f&x||!e&&l===u||(E(l,n),f&(p|S)&&(f&T?gt(l,b):Q(l)))}}const Jn=1,Qn=2,Wn=16,Xn=1,tr=2,nr=4,rr=8,er=16,sr=4,ar=1,lr=2,_n="[",cn="[!",vn="]",xt={},ur=Symbol(),or="http://www.w3.org/2000/svg";function kt(t){console.warn("hydration_mismatch")}let I=!1;function ir(t){I=t}let d;function M(t){if(t===null)throw kt(),xt;return d=t}function fr(){return M(R(d))}function _r(t){if(I){if(R(d)!==null)throw kt(),xt;d=t}}function cr(t=1){if(I){for(var n=t,r=d;n--;)r=R(r);d=r}}function vr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=R(n);n.remove(),n=e}}var ct,pn,It,St;function pr(){if(ct===void 0){ct=window,pn=document;var t=Element.prototype,n=Node.prototype;It=ft(n,"firstChild").get,St=ft(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function W(t=""){return document.createTextNode(t)}function X(t){return It.call(t)}function R(t){return St.call(t)}function hr(t,n){if(!I)return X(t);var r=X(d);if(r===null)r=d.appendChild(W());else if(n&&r.nodeType!==3){var e=W();return r==null||r.before(e),M(e),e}return M(r),r}function dr(t,n){if(!I){var r=X(t);return r instanceof Comment&&r.data===""?R(r):r}return d}function Er(t,n=1,r=!1){let e=I?d:t;for(;n--;)e=R(e);if(!I)return e;var s=e.nodeType;if(r&&s!==3){var a=W();return e==null||e.before(a),M(a),a}return M(e),e}function yr(t){t.textContent=""}function hn(t){var n=T|x;u===null?n|=S:u.f|=yt;const r={children:null,ctx:o,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(i!==null&&i.f&T){var e=i;(e.children??(e.children=[])).push(r)}return r}function wr(t){const n=hn(t);return n.equals=mt,n}function Rt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?at(e):P(e)}}}function Ot(t){var n,r=u;Z(t.parent);try{Rt(t),n=Vt(t)}finally{Z(r)}return n}function Dt(t){var n=Ot(t),r=(O||t.f&S)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=Ut())}function at(t){Rt(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){u===null&&i===null&&sn(),i!==null&&i.f&S&&en(),ut&&rn()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&z)!==0,a=u,l={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=D;try{vt(!0),B(l),l.f|=Xt}catch(c){throw P(l),c}finally{vt(f)}}else n!==null&&Q(l);var m=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&yt)===0;if(!m&&!s&&e&&(a!==null&&dn(l,a),i!==null&&i.f&T)){var A=i;(A.children??(A.children=[])).push(l)}return l}function mr(t){const n=q(Y,null,!1);return E(n,p),n.teardown=t,n}function Tr(t){Nt();var n=u!==null&&(u.f&w)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=Ct(t);return e}}function Ar(t){return Nt(),lt(t)}function gr(t){const n=q(z,t,!0);return()=>{P(n)}}function Ct(t){return q(dt,t,!1)}function xr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=lt(()=>{t(),!e.ran&&(e.ran=!0,At(r.l.r2,!0),Dn(n))})}function kr(){var t=o;lt(()=>{if(zt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),F(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function lt(t){return q(Y,t,!0)}function Ir(t){return En(t)}function En(t,n=0){return q(Y|et|n,t,!0)}function Sr(t,n=!0){return q(Y|w,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=ut,e=i;pt(!0),$(null);try{n.call(null)}finally{pt(r),$(e)}}}function qt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)at(n[r])}}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&tn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:R(e);e.remove(),e=a}r=!0}Pt(t,n&&!r),qt(t),H(t,0),E(t,j);var l=t.transitions;if(l!==null)for(const m of l)m.stop();bt(t);var f=t.parent;f!==null&&f.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Rr(t,n){var r=[];Mt(t,r,!0),wn(r,()=>{P(t),n&&n()})}function wn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Mt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&Et)!==0||(e.f&w)!==0;Mt(e,n,a?r:!1),e=s}}}function Or(t){Lt(t,!0)}function Lt(t,n){if(t.f&C){F(t)&&B(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Et)!==0||(r.f&w)!==0;Lt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const mn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,tt=[],nt=[];function Ht(){G=!1;const t=tt.slice();tt=[],ht(t)}function Yt(){K=!1;const t=nt.slice();nt=[],ht(t)}function Dr(t){G||(G=!0,queueMicrotask(Ht)),tt.push(t)}function Nr(t){K||(K=!0,mn(Yt)),nt.push(t)}function Tn(){G&&Ht(),K&&Yt()}function Cr(){throw new Error("invalid_default_snippet")}function An(t){throw new Error("lifecycle_outside_component")}const jt=0,gn=1;let U=jt,L=!1,D=!1,ut=!1;function vt(t){D=t}function pt(t){ut=t}let k=[],N=0;let i=null;function $(t){i=t}let u=null;function Z(t){u=t}let y=null;function xn(t){y=t}let _=null,h=0,g=null;function kn(t){g=t}let Bt=0,O=!1,o=null;function Ut(){return++Bt}function ot(){return!J||o!==null&&o.l===null}function F(t){var l,f;var n=t.f;if(n&x)return!0;if(n&b){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(F(a)&&Dt(a),e&&u!==null&&!O&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function In(t,n,r){throw t}function Vt(t){var it;var n=_,r=h,e=g,s=i,a=O,l=y,f=o,m=t.f;_=null,h=0,g=null,i=m&(w|z)?null:t,O=!D&&(m&S)!==0,y=null,o=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!O)for(v=h;v<c.length;v++)((it=c[v]).reactions??(it.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,g=e,i=s,O=a,y=l,o=f}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(E(n,b),n.f&(S|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=u;u=t;try{n&et?yn(t):Pt(t),qt(t),bt(t);var e=Vt(t);t.teardown=typeof e=="function"?e:null,t.version=Bt}catch(s){In(s)}finally{u=r}}}function Gt(){N>1e3&&(N=0,an()),N++}function Kt(t){var n=t.length;if(n!==0){Gt();var r=D;D=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];$t(s,a),Rn(a)}}finally{D=r}}}function Rn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|C))&&F(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}}function On(){if(L=!1,N>1001)return;const t=k;k=[],Kt(t),L||(N=0)}function Q(t){U===jt&&(L||(L=!0,queueMicrotask(On)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|w)){if(!(r&p))return;n.f^=p}}k.push(n)}function $t(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&Y){a?r.f^=p:F(r)&&B(r);var f=r.first;if(f!==null){r=f;continue}}else s&dt&&e.push(r);var m=r.next;if(m===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=m}for(var c=0;c<e.length;c++)f=e[c],n.push(f),$t(f,n)}function Zt(t){var n=U,r=k;try{Gt();const s=[];U=gn,k=s,L=!1,Kt(r);var e=t==null?void 0:t();return Tn(),(k.length>0||s.length>0)&&Zt(),N=0,e}finally{U=n,k=r}}async function br(){await Promise.resolve(),Zt()}function zt(t){var f;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=Ot(t);return at(t),e}if(i!==null){y!==null&&y.includes(t)&&ln();var s=i.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&u!==null&&u.f&p&&!(u.f&w)&&g.includes(t)&&(E(u,x),Q(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((f=l.deriveds)!=null&&f.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,F(a)&&Dt(a)),t.v}function Dn(t){const n=i;try{return i=null,t()}finally{i=n}}const Nn=~(x|b|p);function E(t,n){t.f=t.f&Nn|n}function qr(t){return Jt().get(t)}function Pr(t,n){return Jt().set(t,n),n}function Jt(t){return o===null&&An(),o.c??(o.c=new Map(Cn(o)||void 0))}function Cn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Fr(t,n=1){var r=+zt(t);return At(t,r+n),r}function Mr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(o.l={s:null,u:null,r1:[],r2:st(!1)})}function Lr(t){const n=o;if(n!==null){const l=n.e;if(l!==null){var r=u,e=i;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];Z(a.effect),$(a.reaction),Ct(a.fn)}}finally{Z(r),$(e)}}o=n.p,n.m=!0}return{}}function Hr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(_t in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&_t in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Qt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{pn as $,fr as A,d as B,En as C,Sr as D,Et as E,X as F,W as G,ir as H,M as I,u as J,Rr as K,Or as L,P as M,or as N,Ar as O,Yn as P,ht as Q,hn as R,_t as S,$n as T,Fn as U,Mn as V,st as W,Gn as X,ur as Y,ft as Z,Kn as _,Lr as a,Wt as a0,cn as a1,vr as a2,Vn as a3,jn as a4,nr as a5,mt as a6,Fr as a7,Ln as a8,w as a9,vn as aA,kt as aB,Un as aC,yr as aD,qn as aE,gr as aF,C as aG,fn as aH,Mt as aI,wn as aJ,Qn as aK,Jn as aL,Wn as aM,ot as aN,Cr as aO,nn as aP,et as aQ,Xt as aR,sr as aS,z as aa,Z as ab,Xn as ac,tr as ad,rr as ae,er as af,on as ag,Nr as ah,Bn as ai,Qt as aj,Pr as ak,Zt as al,Pn as am,br as an,Zn as ao,Hn as ap,$ as aq,i as ar,mr as as,tn as at,_n as au,R as av,ar as aw,lr as ax,pr as ay,xt as az,kr as b,hr as c,At as d,Hr as e,dr as f,zt as g,wr as h,qr as i,Ct as j,lt as k,xr as l,zn as m,cr as n,An as o,Mr as p,Dr as q,_r as r,Er as s,Ir as t,Dn as u,bn as v,o as w,J as x,Tr as y,I as z};