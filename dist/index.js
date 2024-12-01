"use strict";var q=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var l=q(function(F,p){
var R=require('@stdlib/math-base-assert-is-nanf/dist'),Z=require('@stdlib/math-base-assert-is-negative-zerof/dist');function _(e,a,o,m,s){var v,f,n,r,i;if(e<=0)return NaN;for(o<0?f=(1-e)*o:f=0,s<0?n=(1-e)*s:n=0,i=0;i<e&&(r=a[f],!(r===r&&m[n]===0));i++)f+=o,n+=s;if(i===e)return NaN;for(v=r,i+=1,i;i<e;i++)f+=o,n+=s,!m[n]&&(r=a[f],!R(r)&&(r<v||r===v&&Z(r))&&(v=r));return v}p.exports=_
});var y=q(function(G,x){
var E=require('@stdlib/math-base-assert-is-nanf/dist'),O=require('@stdlib/math-base-assert-is-negative-zerof/dist');function h(e,a,o,m,s,v,f){var n,r,i,u,t;if(e<=0)return NaN;for(r=m,i=f,t=0;t<e&&(u=a[r],!(u===u&&s[i]===0));t++)r+=o,i+=v;if(t===e)return NaN;for(n=u,t+=1,t;t<e;t++)r+=o,i+=v,!s[i]&&(u=a[r],!E(u)&&(u<n||u===n&&O(u))&&(n=u));return n}x.exports=h
});var g=q(function(H,b){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=l(),w=y();k(j,"ndarray",w);b.exports=j
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=g(),c,N=A(z(__dirname,"./native.js"));B(N)?c=C:c=N;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
