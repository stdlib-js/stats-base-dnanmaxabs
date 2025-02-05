"use strict";var s=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var o=s(function(B,m){
var j=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-abs/dist');function l(r,a,n,f){var t,u,e,i;if(r<=0)return NaN;if(r===1||n===0)return v(a[f]);for(u=f,i=0;i<r&&(e=a[u],e!==e);i++)u+=n;if(i===r)return NaN;for(t=v(e),i+=1,i;i<r;i++)u+=n,e=v(a[u]),!j(e)&&e>t&&(t=e);return t}m.exports=l
});var c=s(function(C,x){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=o();function k(r,a,n){return _(r,a,n,R(r,n))}x.exports=k
});var p=s(function(D,b){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),O=o();E(d,"ndarray",O);b.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=p(),q,y=h(g(__dirname,"./native.js"));w(y)?q=z:q=y;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
