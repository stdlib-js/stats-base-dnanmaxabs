// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},_=r()?l:c,p=function(e){return e!=e},d=function(e){return Math.abs(e)};function b(e,r,t){var n,o,a,i;if(e<=0)return NaN;if(1===e||0===t)return d(r[0]);for(o=t<0?(1-e)*t:0,i=0;i<e&&(a=r[o])!=a;i++)o+=t;if(i===e)return NaN;for(n=d(a),i+=1;i<e;i++)a=d(r[o+=t]),p(a)||a>n&&(n=a);return n}return _(b,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n){var o,a,i,u;if(e<=0)return NaN;if(1===e||0===t)return d(r[n]);for(a=n,u=0;u<e&&(i=r[a])!=i;u++)a+=t;if(u===e)return NaN;for(o=d(i),u+=1;u<e;u++)i=d(r[a+=t]),p(i)||i>o&&(o=i);return o}}),b},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dnanmaxabs=r();
//# sourceMappingURL=browser.js.map
