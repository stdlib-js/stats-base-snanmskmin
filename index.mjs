// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@v0.1.0-esm/index.mjs";function n(r,n,s,a,i){var d,f,o,m,u;if(r<=0)return NaN;for(f=s<0?(1-r)*s:0,o=i<0?(1-r)*i:0,u=0;u<r&&((m=n[f])!=m||0!==a[o]);u++)f+=s,o+=i;if(u===r)return NaN;for(d=m,u+=1;u<r;u++)f+=s,a[o+=i]||(m=n[f],e(m)||(m<d||m===d&&t(m))&&(d=m));return d}function s(r,n,s,a,i,d,f){var o,m,u,l,j;if(r<=0)return NaN;for(m=a,u=f,j=0;j<r&&((l=n[m])!=l||0!==i[u]);j++)m+=s,u+=d;if(j===r)return NaN;for(o=l,j+=1;j<r;j++)m+=s,i[u+=d]||(l=n[m],e(l)||(l<o||l===o&&t(l))&&(o=l));return o}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
