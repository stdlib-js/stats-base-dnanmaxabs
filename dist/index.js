"use strict";var f=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var b=f(function(B,m){
var d=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-abs/dist');function k(a,i,u){var t,n,e,r;if(a<=0)return NaN;if(a===1||u===0)return s(i[0]);for(u<0?n=(1-a)*u:n=0,r=0;r<a&&(e=i[n],e!==e);r++)n+=u;if(r===a)return NaN;for(t=s(e),r+=1,r;r<a;r++)n+=u,e=s(i[n]),!d(e)&&e>t&&(t=e);return t}m.exports=k
});var x=f(function(C,c){
var R=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-abs/dist');function _(a,i,u,t){var n,e,r,v;if(a<=0)return NaN;if(a===1||u===0)return o(i[t]);for(e=t,v=0;v<a&&(r=i[e],r!==r);v++)e+=u;if(v===a)return NaN;for(n=o(r),v+=1,v;v<a;v++)e+=u,r=o(i[e]),!R(r)&&r>n&&(n=r);return n}c.exports=_
});var j=f(function(D,y){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=b(),O=x();E(p,"ndarray",O);y.exports=p
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=j(),q,l=h(g(__dirname,"./native.js"));w(l)?q=z:q=l;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
