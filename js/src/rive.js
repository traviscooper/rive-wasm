/*
 * Rive Wasm JS bridging code
 */

var Rive=function(){var e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return"undefined"!=typeof __filename&&(e=e||__filename),function(t){var r,n,o=void 0!==(t=t||{})?t:{};o.ready=new Promise((function(e,t){r=e,n=t}));var i,a={};for(i in o)o.hasOwnProperty(i)&&(a[i]=o[i]);var s=[],u=!1,c=!1,f=!1,l=!1;u="object"==typeof window,c="function"==typeof importScripts,f="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,l=!u&&!f&&!c;var p,d,h,v,y="";function m(e){return o.locateFile?o.locateFile(e,y):y+e}f?(y=c?require("path").dirname(y)+"/":__dirname+"/",p=function(e,t){return h||(h=require("fs")),v||(v=require("path")),e=v.normalize(e),h.readFileSync(e,t?null:"utf8")},d=function(e){var t=p(e,!0);return t.buffer||(t=new Uint8Array(t)),$(t.buffer),t},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),s=process.argv.slice(2),process.on("uncaughtException",(function(e){if(!(e instanceof sn))throw e})),process.on("unhandledRejection",ve),function(e){process.exit(e)},o.inspect=function(){return"[Emscripten Module object]"}):l?("undefined"!=typeof read&&(p=function(e){return read(e)}),d=function(e){var t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):($("object"==typeof(t=read(e,"binary"))),t)},"undefined"!=typeof scriptArgs?s=scriptArgs:void 0!==arguments&&(s=arguments),"function"==typeof quit&&function(e){quit(e)},"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(u||c)&&(c?y=self.location.href:document.currentScript&&(y=document.currentScript.src),e&&(y=e),y=0!==y.indexOf("blob:")?y.substr(0,y.lastIndexOf("/")+1):"",p=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},c&&(d=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),function(e,t,r){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=function(){200==n.status||0==n.status&&n.response?t(n.response):r()},n.onerror=r,n.send(null)});var g=o.print||console.log.bind(console),b=o.printErr||console.warn.bind(console);for(i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);a=null,o.arguments&&(s=o.arguments),o.thisProgram&&o.thisProgram,o.quit&&o.quit;var w,T,C=function(e){e};o.wasmBinary&&(w=o.wasmBinary),o.noExitRuntime&&o.noExitRuntime,"object"!=typeof WebAssembly&&ve("no native wasm support detected");var _=new WebAssembly.Table({initial:773,maximum:773,element:"anyfunc"}),P=!1;function $(e,t){e||ve("Assertion failed: "+t)}var A="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function k(e,t,r){for(var n=t+r,o=t;e[o]&&!(o>=n);)++o;if(o-t>16&&e.subarray&&A)return A.decode(e.subarray(t,o));for(var i="";t<o;){var a=e[t++];if(128&a){var s=63&e[t++];if(192!=(224&a)){var u=63&e[t++];if((a=224==(240&a)?(15&a)<<12|s<<6|u:(7&a)<<18|s<<12|u<<6|63&e[t++])<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|s)}else i+=String.fromCharCode(a)}return i}function x(e,t){return e?k(q,e,t):""}function W(e,t,r,n){if(!(n>0))return 0;for(var o=r,i=r+n-1,a=0;a<e.length;++a){var s=e.charCodeAt(a);if(s>=55296&&s<=57343)s=65536+((1023&s)<<10)|1023&e.charCodeAt(++a);if(s<=127){if(r>=i)break;t[r++]=s}else if(s<=2047){if(r+1>=i)break;t[r++]=192|s>>6,t[r++]=128|63&s}else if(s<=65535){if(r+2>=i)break;t[r++]=224|s>>12,t[r++]=128|s>>6&63,t[r++]=128|63&s}else{if(r+3>=i)break;t[r++]=240|s>>18,t[r++]=128|s>>12&63,t[r++]=128|s>>6&63,t[r++]=128|63&s}}return t[r]=0,r-o}function O(e,t,r){return W(e,q,t,r)}function R(e){for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&e.charCodeAt(++r)),n<=127?++t:t+=n<=2047?2:n<=65535?3:4}return t}var E="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function S(e,t){for(var r=e,n=r>>1,o=n+t/2;!(n>=o)&&G[n];)++n;if((r=n<<1)-e>32&&E)return E.decode(q.subarray(e,r));for(var i=0,a="";;){var s=B[e+2*i>>1];if(0==s||i==t/2)return a;++i,a+=String.fromCharCode(s)}}function j(e,t,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var n=t,o=(r-=2)<2*e.length?r/2:e.length,i=0;i<o;++i){var a=e.charCodeAt(i);B[t>>1]=a,t+=2}return B[t>>1]=0,t-n}function D(e){return 2*e.length}function F(e,t){for(var r=0,n="";!(r>=t/4);){var o=z[e+4*r>>2];if(0==o)break;if(++r,o>=65536){var i=o-65536;n+=String.fromCharCode(55296|i>>10,56320|1023&i)}else n+=String.fromCharCode(o)}return n}function I(e,t,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var n=t,o=n+r-4,i=0;i<e.length;++i){var a=e.charCodeAt(i);if(a>=55296&&a<=57343)a=65536+((1023&a)<<10)|1023&e.charCodeAt(++i);if(z[t>>2]=a,(t+=4)+4>o)break}return z[t>>2]=0,t-n}function U(e){for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);n>=55296&&n<=57343&&++r,t+=4}return t}var M,V,q,B,G,z,H,L,N,J=65536;function X(e,t){return e%t>0&&(e+=t-e%t),e}function Z(e){M=e,o.HEAP8=V=new Int8Array(e),o.HEAP16=B=new Int16Array(e),o.HEAP32=z=new Int32Array(e),o.HEAPU8=q=new Uint8Array(e),o.HEAPU16=G=new Uint16Array(e),o.HEAPU32=H=new Uint32Array(e),o.HEAPF32=L=new Float32Array(e),o.HEAPF64=N=new Float64Array(e)}var K=5263088,Q=20192,Y=o.INITIAL_MEMORY||16777216;(T=o.wasmMemory?o.wasmMemory:new WebAssembly.Memory({initial:Y/J,maximum:2147483648/J}))&&(M=T.buffer),Y=M.byteLength,Z(M),z[Q>>2]=K;var ee=[],te=[],re=[],ne=[];function oe(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)ue(o.preRun.shift());$e(ee)}function ie(){!0,$e(te)}function ae(){$e(re)}function se(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)ce(o.postRun.shift());$e(ne)}function ue(e){ee.unshift(e)}function ce(e){ne.unshift(e)}var fe=0,le=null,pe=null;function de(e){fe++,o.monitorRunDependencies&&o.monitorRunDependencies(fe)}function he(e){if(fe--,o.monitorRunDependencies&&o.monitorRunDependencies(fe),0==fe&&(null!==le&&(clearInterval(le),le=null),pe)){var t=pe;pe=null,t()}}function ve(e){o.onAbort&&o.onAbort(e),b(e+=""),P=!0,1,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.";var t=new WebAssembly.RuntimeError(e);throw n(t),t}function ye(e,t){return String.prototype.startsWith?e.startsWith(t):0===e.indexOf(t)}o.preloadedImages={},o.preloadedAudios={};var me="data:application/octet-stream;base64,";function ge(e){return ye(e,me)}var be="file://";function we(e){return ye(e,be)}var Te="rive.wasm";function Ce(){try{if(w)return new Uint8Array(w);if(d)return d(Te);throw"both async and sync fetching of the wasm failed"}catch(e){ve(e)}}function _e(){return w||!u&&!c||"function"!=typeof fetch||we(Te)?Promise.resolve().then(Ce):fetch(Te,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+Te+"'";return e.arrayBuffer()})).catch((function(){return Ce()}))}function Pe(){var e={a:tn};function t(e,t){var r=e.exports;o.asm=r,he()}function r(e){t(e.instance)}function n(t){return _e().then((function(t){return WebAssembly.instantiate(t,e)})).then(t,(function(e){b("failed to asynchronously prepare wasm: "+e),ve(e)}))}if(de(),o.instantiateWasm)try{return o.instantiateWasm(e,t)}catch(e){return b("Module.instantiateWasm callback failed with error: "+e),!1}return function(){if(w||"function"!=typeof WebAssembly.instantiateStreaming||ge(Te)||we(Te)||"function"!=typeof fetch)return n(r);fetch(Te,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,e).then(r,(function(e){return b("wasm streaming compile failed: "+e),b("falling back to ArrayBuffer instantiation"),n(r)}))}))}(),{}}function $e(e){for(;e.length>0;){var t=e.shift();if("function"!=typeof t){var r=t.func;"number"==typeof r?void 0===t.arg?_.get(r)():_.get(r)(t.arg):r(void 0===t.arg?null:t.arg)}else t(o)}}function Ae(e,t,r){return r&&r.length?o["dynCall_"+e].apply(null,[t].concat(r)):o["dynCall_"+e].call(null,t)}function ke(e,t,r){return-1!=e.indexOf("j")?Ae(e,t,r):_.get(t).apply(null,r)}ge(Te)||(Te=m(Te)),te.push({func:function(){rn()}});var xe=48,We=57;function Oe(e){if(void 0===e)return"_unknown";var t=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=xe&&t<=We?"_"+e:e}function Re(e,t){return e=Oe(e),new Function("body","return function "+e+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t)}var Ee=[],Se=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function je(){for(var e=0,t=5;t<Se.length;++t)void 0!==Se[t]&&++e;return e}function De(){for(var e=5;e<Se.length;++e)if(void 0!==Se[e])return Se[e];return null}function Fe(){o.count_emval_handles=je,o.get_first_emval=De}function Ie(e){switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=Ee.length?Ee.pop():Se.length;return Se[t]={refcount:1,value:e},t}}function Ue(e,t){var r=Re(t,(function(e){this.name=t,this.message=e;var r=new Error(e).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var Me=void 0;function Ve(){for(var e=new Array(256),t=0;t<256;++t)e[t]=String.fromCharCode(t);qe=e}var qe=void 0;function Be(e){for(var t="",r=e;q[r];)t+=qe[q[r++]];return t}function Ge(){return Object.keys(Ze).length}function ze(){var e=[];for(var t in Ze)Ze.hasOwnProperty(t)&&e.push(Ze[t]);return e}var He=[];function Le(){for(;He.length;){var e=He.pop();e.$$.deleteScheduled=!1,e.delete()}}var Ne=void 0;function Je(e){Ne=e,He.length&&Ne&&Ne(Le)}function Xe(){o.getInheritedInstanceCount=Ge,o.getLiveInheritedInstances=ze,o.flushPendingDeletes=Le,o.setDelayFunction=Je}var Ze={},Ke=void 0;function Qe(e){throw new Ke(e)}function Ye(e,t){for(void 0===t&&Qe("ptr should not be undefined");e.baseClass;)t=e.upcast(t),e=e.baseClass;return t}function et(e,t,r){t=Ye(e,t),Ze.hasOwnProperty(t)?Qe("Tried to register registered instance: "+t):Ze[t]=r}function tt(e){return e||Qe("Cannot use deleted val. handle = "+e),Se[e].value}var rt={};function nt(e){var t=on(e),r=Be(t);return an(t),r}function ot(e,t){var r=rt[e];return void 0===r&&Qe(t+" has unknown type "+nt(e)),r}function it(e,t){t=Ye(e,t),Ze.hasOwnProperty(t)?delete Ze[t]:Qe("Tried to unregister unregistered instance: "+t)}function at(e){}var st=!1;function ut(e){e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)}function ct(e){e.count.value-=1,0===e.count.value&&ut(e)}function ft(e){return"undefined"==typeof FinalizationGroup?(ft=function(e){return e},e):(st=new FinalizationGroup((function(e){for(var t=e.next();!t.done;t=e.next()){var r=t.value;r.ptr?ct(r):console.warn("object already deleted: "+r.ptr)}})),at=function(e){st.unregister(e.$$)},(ft=function(e){return st.register(e,e.$$,e.$$),e})(e))}function lt(e,t,r){e=Be(e),t=ot(t,"wrapper"),r=tt(r);var n=[].slice,o=t.registeredClass,i=o.instancePrototype,a=o.baseClass.instancePrototype,s=o.baseClass.constructor,u=Re(e,(function(){o.baseClass.pureVirtualFunctions.forEach(function(e){if(this[e]===a[e])throw new Me("Pure virtual function "+e+" must be implemented in JavaScript")}.bind(this)),Object.defineProperty(this,"__parent",{value:i}),this.__construct.apply(this,n.call(arguments))}));for(var c in i.__construct=function(){this===i&&Qe("Pass correct 'this' to __construct");var e=s.implement.apply(void 0,[this].concat(n.call(arguments)));at(e);var t=e.$$;e.notifyOnDestruction(),t.preservePointerOnDelete=!0,Object.defineProperties(this,{$$:{value:t}}),ft(this),et(o,t.ptr,this)},i.__destruct=function(){this===i&&Qe("Pass correct 'this' to __destruct"),at(this),it(o,this.$$.ptr)},u.prototype=Object.create(i),r)u.prototype[c]=r[c];return Ie(u)}var pt={};function dt(e){for(;e.length;){var t=e.pop();e.pop()(t)}}function ht(e){return this.fromWireType(H[e>>2])}var vt={},yt={},mt=void 0;function gt(e){throw new mt(e)}function bt(e,t,r){function n(t){var n=r(t);n.length!==e.length&&gt("Mismatched type converter count");for(var o=0;o<e.length;++o)Ct(e[o],n[o])}e.forEach((function(e){yt[e]=t}));var o=new Array(t.length),i=[],a=0;t.forEach((function(e,t){rt.hasOwnProperty(e)?o[t]=rt[e]:(i.push(e),vt.hasOwnProperty(e)||(vt[e]=[]),vt[e].push((function(){o[t]=rt[e],++a===i.length&&n(o)})))})),0===i.length&&n(o)}function wt(e){var t=pt[e];delete pt[e];var r=t.rawConstructor,n=t.rawDestructor,o=t.fields;bt([e],o.map((function(e){return e.getterReturnType})).concat(o.map((function(e){return e.setterArgumentType}))),(function(e){var i={};return o.forEach((function(t,r){var n=t.fieldName,a=e[r],s=t.getter,u=t.getterContext,c=e[r+o.length],f=t.setter,l=t.setterContext;i[n]={read:function(e){return a.fromWireType(s(u,e))},write:function(e,t){var r=[];f(l,e,c.toWireType(r,t)),dt(r)}}})),[{name:t.name,fromWireType:function(e){var t={};for(var r in i)t[r]=i[r].read(e);return n(e),t},toWireType:function(e,t){for(var o in i)if(!(o in t))throw new TypeError('Missing field:  "'+o+'"');var a=r();for(o in i)i[o].write(a,t[o]);return null!==e&&e.push(n,a),a},argPackAdvance:8,readValueFromPointer:ht,destructorFunction:n}]}))}function Tt(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}function Ct(e,t,r){if(r=r||{},!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=t.name;if(e||Qe('type "'+n+'" must have a positive integer typeid pointer'),rt.hasOwnProperty(e)){if(r.ignoreDuplicateRegistrations)return;Qe("Cannot register type '"+n+"' twice")}if(rt[e]=t,delete yt[e],vt.hasOwnProperty(e)){var o=vt[e];delete vt[e],o.forEach((function(e){e()}))}}function _t(e,t,r,n,o){var i=Tt(r);Ct(e,{name:t=Be(t),fromWireType:function(e){return!!e},toWireType:function(e,t){return t?n:o},argPackAdvance:8,readValueFromPointer:function(e){var n;if(1===r)n=V;else if(2===r)n=B;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+t);n=z}return this.fromWireType(n[e>>i])},destructorFunction:null})}function Pt(e){if(!(this instanceof Et))return!1;if(!(e instanceof Et))return!1;for(var t=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=e.$$.ptrType.registeredClass,o=e.$$.ptr;t.baseClass;)r=t.upcast(r),t=t.baseClass;for(;n.baseClass;)o=n.upcast(o),n=n.baseClass;return t===n&&r===o}function $t(e){return{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}}function At(e){Qe(e.$$.ptrType.registeredClass.name+" instance already deleted")}function kt(){if(this.$$.ptr||At(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=ft(Object.create(Object.getPrototypeOf(this),{$$:{value:$t(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function xt(){this.$$.ptr||At(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Qe("Object already scheduled for deletion"),at(this),ct(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Wt(){return!this.$$.ptr}function Ot(){return this.$$.ptr||At(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Qe("Object already scheduled for deletion"),He.push(this),1===He.length&&Ne&&Ne(Le),this.$$.deleteScheduled=!0,this}function Rt(){Et.prototype.isAliasOf=Pt,Et.prototype.clone=kt,Et.prototype.delete=xt,Et.prototype.isDeleted=Wt,Et.prototype.deleteLater=Ot}function Et(){}var St={};function jt(e,t,r){if(void 0===e[t].overloadTable){var n=e[t];e[t]=function(){return e[t].overloadTable.hasOwnProperty(arguments.length)||Qe("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[t].overloadTable+")!"),e[t].overloadTable[arguments.length].apply(this,arguments)},e[t].overloadTable=[],e[t].overloadTable[n.argCount]=n}}function Dt(e,t,r){o.hasOwnProperty(e)?((void 0===r||void 0!==o[e].overloadTable&&void 0!==o[e].overloadTable[r])&&Qe("Cannot register public name '"+e+"' twice"),jt(o,e,e),o.hasOwnProperty(r)&&Qe("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),o[e].overloadTable[r]=t):(o[e]=t,void 0!==r&&(o[e].numArguments=r))}function Ft(e,t,r,n,o,i,a,s){this.name=e,this.constructor=t,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=o,this.getActualType=i,this.upcast=a,this.downcast=s,this.pureVirtualFunctions=[]}function It(e,t,r){for(;t!==r;)t.upcast||Qe("Expected null or instance of "+r.name+", got an instance of "+t.name),e=t.upcast(e),t=t.baseClass;return e}function Ut(e,t){if(null===t)return this.isReference&&Qe("null is not a valid "+this.name),0;t.$$||Qe('Cannot pass "'+yr(t)+'" as a '+this.name),t.$$.ptr||Qe("Cannot pass deleted object as a pointer of type "+this.name);var r=t.$$.ptrType.registeredClass;return It(t.$$.ptr,r,this.registeredClass)}function Mt(e,t){var r;if(null===t)return this.isReference&&Qe("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==e&&e.push(this.rawDestructor,r),r):0;t.$$||Qe('Cannot pass "'+yr(t)+'" as a '+this.name),t.$$.ptr||Qe("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&t.$$.ptrType.isConst&&Qe("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);var n=t.$$.ptrType.registeredClass;if(r=It(t.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===t.$$.smartPtr&&Qe("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:t.$$.smartPtrType===this?r=t.$$.smartPtr:Qe("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)r=t.$$.smartPtr;else{var o=t.clone();r=this.rawShare(r,Ie((function(){o.delete()}))),null!==e&&e.push(this.rawDestructor,r)}break;default:Qe("Unsupporting sharing policy")}return r}function Vt(e,t){if(null===t)return this.isReference&&Qe("null is not a valid "+this.name),0;t.$$||Qe('Cannot pass "'+yr(t)+'" as a '+this.name),t.$$.ptr||Qe("Cannot pass deleted object as a pointer of type "+this.name),t.$$.ptrType.isConst&&Qe("Cannot convert argument of type "+t.$$.ptrType.name+" to parameter type "+this.name);var r=t.$$.ptrType.registeredClass;return It(t.$$.ptr,r,this.registeredClass)}function qt(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function Bt(e){this.rawDestructor&&this.rawDestructor(e)}function Gt(e){null!==e&&e.delete()}function zt(e,t,r){if(t===r)return e;if(void 0===r.baseClass)return null;var n=zt(e,t,r.baseClass);return null===n?null:r.downcast(n)}function Ht(e,t){return t=Ye(e,t),Ze[t]}function Lt(e,t){return t.ptrType&&t.ptr||gt("makeClassHandle requires ptr and ptrType"),!!t.smartPtrType!==!!t.smartPtr&&gt("Both smartPtrType and smartPtr must be specified"),t.count={value:1},ft(Object.create(e,{$$:{value:t}}))}function Nt(e){var t=this.getPointee(e);if(!t)return this.destructor(e),null;var r=Ht(this.registeredClass,t);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=t,r.$$.smartPtr=e,r.clone();var n=r.clone();return this.destructor(e),n}function o(){return this.isSmartPointer?Lt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:e}):Lt(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var i,a=this.registeredClass.getActualType(t),s=St[a];if(!s)return o.call(this);i=this.isConst?s.constPointerType:s.pointerType;var u=zt(t,this.registeredClass,i.registeredClass);return null===u?o.call(this):this.isSmartPointer?Lt(i.registeredClass.instancePrototype,{ptrType:i,ptr:u,smartPtrType:this,smartPtr:e}):Lt(i.registeredClass.instancePrototype,{ptrType:i,ptr:u})}function Jt(){Xt.prototype.getPointee=qt,Xt.prototype.destructor=Bt,Xt.prototype.argPackAdvance=8,Xt.prototype.readValueFromPointer=ht,Xt.prototype.deleteObject=Gt,Xt.prototype.fromWireType=Nt}function Xt(e,t,r,n,o,i,a,s,u,c,f){this.name=e,this.registeredClass=t,this.isReference=r,this.isConst=n,this.isSmartPointer=o,this.pointeeType=i,this.sharingPolicy=a,this.rawGetPointee=s,this.rawConstructor=u,this.rawShare=c,this.rawDestructor=f,o||void 0!==t.baseClass?this.toWireType=Mt:n?(this.toWireType=Ut,this.destructorFunction=null):(this.toWireType=Vt,this.destructorFunction=null)}function Zt(e,t,r){o.hasOwnProperty(e)||gt("Replacing nonexistant public symbol"),void 0!==o[e].overloadTable&&void 0!==r?o[e].overloadTable[r]=t:(o[e]=t,o[e].argCount=r)}function Kt(e,t){$(e.indexOf("j")>=0,"getDynCaller should only be called with i64 sigs");var r=[];return function(){r.length=arguments.length;for(var n=0;n<arguments.length;n++)r[n]=arguments[n];return ke(e,t,r)}}function Qt(e,t){var r=-1==(e=Be(e)).indexOf("j")?_.get(t):Kt(e,t);return"function"!=typeof r&&Qe("unknown function pointer with signature "+e+": "+t),r}var Yt=void 0;function er(e,t){var r=[],n={};throw t.forEach((function e(t){n[t]||rt[t]||(yt[t]?yt[t].forEach(e):(r.push(t),n[t]=!0))})),new Yt(e+": "+r.map(nt).join([", "]))}function tr(e,t,r,n,o,i,a,s,u,c,f,l,p){f=Be(f),i=Qt(o,i),s&&(s=Qt(a,s)),c&&(c=Qt(u,c)),p=Qt(l,p);var d=Oe(f);Dt(d,(function(){er("Cannot construct "+f+" due to unbound types",[n])})),bt([e,t,r],n?[n]:[],(function(t){var r,o;t=t[0],o=n?(r=t.registeredClass).instancePrototype:Et.prototype;var a=Re(d,(function(){if(Object.getPrototypeOf(this)!==u)throw new Ke("Use 'new' to construct "+f);if(void 0===l.constructor_body)throw new Ke(f+" has no accessible constructor");var e=l.constructor_body[arguments.length];if(void 0===e)throw new Ke("Tried to invoke ctor of "+f+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(l.constructor_body).toString()+") parameters instead!");return e.apply(this,arguments)})),u=Object.create(o,{constructor:{value:a}});a.prototype=u;var l=new Ft(f,a,u,p,r,i,s,c),h=new Xt(f,l,!0,!1,!1),v=new Xt(f+"*",l,!1,!1,!1),y=new Xt(f+" const*",l,!1,!0,!1);return St[e]={pointerType:v,constPointerType:y},Zt(d,a),[h,v,y]}))}function rr(e,t){if(!(e instanceof Function))throw new TypeError("new_ called with constructor type "+typeof e+" which is not a function");var r=Re(e.name||"unknownFunctionName",(function(){}));r.prototype=e.prototype;var n=new r,o=e.apply(n,t);return o instanceof Object?o:n}function nr(e,t,r,n,o){var i=t.length;i<2&&Qe("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==t[1]&&null!==r,s=!1,u=1;u<t.length;++u)if(null!==t[u]&&void 0===t[u].destructorFunction){s=!0;break}var c="void"!==t[0].name,f="",l="";for(u=0;u<i-2;++u)f+=(0!==u?", ":"")+"arg"+u,l+=(0!==u?", ":"")+"arg"+u+"Wired";var p="return function "+Oe(e)+"("+f+") {\nif (arguments.length !== "+(i-2)+") {\nthrowBindingError('function "+e+" called with ' + arguments.length + ' arguments, expected "+(i-2)+" args!');\n}\n";s&&(p+="var destructors = [];\n");var d=s?"destructors":"null",h=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],v=[Qe,n,o,dt,t[0],t[1]];a&&(p+="var thisWired = classParam.toWireType("+d+", this);\n");for(u=0;u<i-2;++u)p+="var arg"+u+"Wired = argType"+u+".toWireType("+d+", arg"+u+"); // "+t[u+2].name+"\n",h.push("argType"+u),v.push(t[u+2]);if(a&&(l="thisWired"+(l.length>0?", ":"")+l),p+=(c?"var rv = ":"")+"invoker(fn"+(l.length>0?", ":"")+l+");\n",s)p+="runDestructors(destructors);\n";else for(u=a?1:2;u<t.length;++u){var y=1===u?"thisWired":"arg"+(u-2)+"Wired";null!==t[u].destructorFunction&&(p+=y+"_dtor("+y+"); // "+t[u].name+"\n",h.push(y+"_dtor"),v.push(t[u].destructorFunction))}return c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",h.push(p),rr(Function,h).apply(null,v)}function or(e,t){for(var r=[],n=0;n<e;n++)r.push(z[(t>>2)+n]);return r}function ir(e,t,r,n,o,i,a){var s=or(r,n);t=Be(t),i=Qt(o,i),bt([],[e],(function(e){var n=(e=e[0]).name+"."+t;function o(){er("Cannot call "+n+" due to unbound types",s)}var u=e.registeredClass.constructor;return void 0===u[t]?(o.argCount=r-1,u[t]=o):(jt(u,t,n),u[t].overloadTable[r-1]=o),bt([],s,(function(e){var o=[e[0],null].concat(e.slice(1)),s=nr(n,o,null,i,a);return void 0===u[t].overloadTable?(s.argCount=r-1,u[t]=s):u[t].overloadTable[r-1]=s,[]})),[]}))}function ar(e,t,r){return e instanceof Object||Qe(r+' with invalid "this": '+e),e instanceof t.registeredClass.constructor||Qe(r+' incompatible with "this" of type '+e.constructor.name),e.$$.ptr||Qe("cannot call emscripten binding method "+r+" on deleted object"),It(e.$$.ptr,e.$$.ptrType.registeredClass,t.registeredClass)}function sr(e,t,r,n,o,i,a,s){t=Be(t),i=Qt(o,i),bt([],[e],(function(e){var o=(e=e[0]).name+"."+t,u={get:function(){er("Cannot access "+o+" due to unbound types",[r])},enumerable:!0,configurable:!0};return u.set=s?function(){er("Cannot access "+o+" due to unbound types",[r])}:function(e){Qe(o+" is a read-only property")},Object.defineProperty(e.registeredClass.constructor,t,u),bt([],[r],(function(r){r=r[0];var o={get:function(){return r.fromWireType(i(n))},enumerable:!0};return s&&(s=Qt(a,s),o.set=function(e){var t=[];s(n,r.toWireType(t,e)),dt(t)}),Object.defineProperty(e.registeredClass.constructor,t,o),[]})),[]}))}function ur(e,t,r,n,o,i){$(t>0);var a=or(t,r);o=Qt(n,o);var s=[i],u=[];bt([],[e],(function(e){var r="constructor "+(e=e[0]).name;if(void 0===e.registeredClass.constructor_body&&(e.registeredClass.constructor_body=[]),void 0!==e.registeredClass.constructor_body[t-1])throw new Ke("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+e.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return e.registeredClass.constructor_body[t-1]=function(){er("Cannot construct "+e.name+" due to unbound types",a)},bt([],a,(function(n){return e.registeredClass.constructor_body[t-1]=function(){arguments.length!==t-1&&Qe(r+" called with "+arguments.length+" arguments, expected "+(t-1)),u.length=0,s.length=t;for(var e=1;e<t;++e)s[e]=n[e].toWireType(u,arguments[e-1]);var i=o.apply(null,s);return dt(u),n[0].fromWireType(i)},[]})),[]}))}function cr(e,t,r,n,o,i,a,s){var u=or(r,n);t=Be(t),i=Qt(o,i),bt([],[e],(function(e){var n=(e=e[0]).name+"."+t;function o(){er("Cannot call "+n+" due to unbound types",u)}s&&e.registeredClass.pureVirtualFunctions.push(t);var c=e.registeredClass.instancePrototype,f=c[t];return void 0===f||void 0===f.overloadTable&&f.className!==e.name&&f.argCount===r-2?(o.argCount=r-2,o.className=e.name,c[t]=o):(jt(c,t,n),c[t].overloadTable[r-2]=o),bt([],u,(function(o){var s=nr(n,o,e,i,a);return void 0===c[t].overloadTable?(s.argCount=r-2,c[t]=s):c[t].overloadTable[r-2]=s,[]})),[]}))}function fr(e,t,r,n,o,i,a,s,u,c){t=Be(t),o=Qt(n,o),bt([],[e],(function(e){var n=(e=e[0]).name+"."+t,f={get:function(){er("Cannot access "+n+" due to unbound types",[r,a])},enumerable:!0,configurable:!0};return f.set=u?function(){er("Cannot access "+n+" due to unbound types",[r,a])}:function(e){Qe(n+" is a read-only property")},Object.defineProperty(e.registeredClass.instancePrototype,t,f),bt([],u?[r,a]:[r],(function(r){var a=r[0],f={get:function(){var t=ar(this,e,n+" getter");return a.fromWireType(o(i,t))},enumerable:!0};if(u){u=Qt(s,u);var l=r[1];f.set=function(t){var r=ar(this,e,n+" setter"),o=[];u(c,r,l.toWireType(o,t)),dt(o)}}return Object.defineProperty(e.registeredClass.instancePrototype,t,f),[]})),[]}))}function lr(e){e>4&&0==--Se[e].refcount&&(Se[e]=void 0,Ee.push(e))}function pr(e,t){Ct(e,{name:t=Be(t),fromWireType:function(e){var t=Se[e].value;return lr(e),t},toWireType:function(e,t){return Ie(t)},argPackAdvance:8,readValueFromPointer:ht,destructorFunction:null})}function dr(e,t,r){switch(t){case 0:return function(e){var t=r?V:q;return this.fromWireType(t[e])};case 1:return function(e){var t=r?B:G;return this.fromWireType(t[e>>1])};case 2:return function(e){var t=r?z:H;return this.fromWireType(t[e>>2])};default:throw new TypeError("Unknown integer type: "+e)}}function hr(e,t,r,n){var o=Tt(r);function i(){}t=Be(t),i.values={},Ct(e,{name:t,constructor:i,fromWireType:function(e){return this.constructor.values[e]},toWireType:function(e,t){return t.value},argPackAdvance:8,readValueFromPointer:dr(t,o,n),destructorFunction:null}),Dt(t,i)}function vr(e,t,r){var n=ot(e,"enum");t=Be(t);var o=n.constructor,i=Object.create(n.constructor.prototype,{value:{value:r},constructor:{value:Re(n.name+"_"+t,(function(){}))}});o.values[r]=i,o[t]=i}function yr(e){if(null===e)return"null";var t=typeof e;return"object"===t||"array"===t||"function"===t?e.toString():""+e}function mr(e,t){switch(t){case 2:return function(e){return this.fromWireType(L[e>>2])};case 3:return function(e){return this.fromWireType(N[e>>3])};default:throw new TypeError("Unknown float type: "+e)}}function gr(e,t,r){var n=Tt(r);Ct(e,{name:t=Be(t),fromWireType:function(e){return e},toWireType:function(e,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+yr(t)+'" to '+this.name);return t},argPackAdvance:8,readValueFromPointer:mr(t,n),destructorFunction:null})}function br(e,t,r,n,o,i){var a=or(t,r);e=Be(e),o=Qt(n,o),Dt(e,(function(){er("Cannot call "+e+" due to unbound types",a)}),t-1),bt([],a,(function(r){var n=[r[0],null].concat(r.slice(1));return Zt(e,nr(e,n,null,o,i),t-1),[]}))}function wr(e,t,r){switch(t){case 0:return r?function(e){return V[e]}:function(e){return q[e]};case 1:return r?function(e){return B[e>>1]}:function(e){return G[e>>1]};case 2:return r?function(e){return z[e>>2]}:function(e){return H[e>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function Tr(e,t,r,n,o){t=Be(t),-1===o&&(o=4294967295);var i=Tt(r),a=function(e){return e};if(0===n){var s=32-8*r;a=function(e){return e<<s>>>s}}var u=-1!=t.indexOf("unsigned");Ct(e,{name:t,fromWireType:a,toWireType:function(e,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+yr(r)+'" to '+this.name);if(r<n||r>o)throw new TypeError('Passing a number "'+yr(r)+'" from JS side to C/C++ side to an argument of type "'+t+'", which is outside the valid range ['+n+", "+o+"]!");return u?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:wr(t,i,0!==n),destructorFunction:null})}function Cr(e,t,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function o(e){var t=H,r=t[e>>=2],o=t[e+1];return new n(M,o,r)}Ct(e,{name:r=Be(r),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function _r(e,t){var r="std::string"===(t=Be(t));Ct(e,{name:t,fromWireType:function(e){var t,n=H[e>>2];if(r)for(var o=e+4,i=0;i<=n;++i){var a=e+4+i;if(i==n||0==q[a]){var s=x(o,a-o);void 0===t?t=s:(t+=String.fromCharCode(0),t+=s),o=a+1}}else{var u=new Array(n);for(i=0;i<n;++i)u[i]=String.fromCharCode(q[e+4+i]);t=u.join("")}return an(e),t},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n="string"==typeof t;n||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||Qe("Cannot pass non-string to std::string");var o=(r&&n?function(){return R(t)}:function(){return t.length})(),i=nn(4+o+1);if(H[i>>2]=o,r&&n)O(t,i+4,o+1);else if(n)for(var a=0;a<o;++a){var s=t.charCodeAt(a);s>255&&(an(i),Qe("String has UTF-16 code units that do not fit in 8 bits")),q[i+4+a]=s}else for(a=0;a<o;++a)q[i+4+a]=t[a];return null!==e&&e.push(an,i),i},argPackAdvance:8,readValueFromPointer:ht,destructorFunction:function(e){an(e)}})}function Pr(e,t,r){var n,o,i,a,s;r=Be(r),2===t?(n=S,o=j,a=D,i=function(){return G},s=1):4===t&&(n=F,o=I,a=U,i=function(){return H},s=2),Ct(e,{name:r,fromWireType:function(e){for(var r,o=H[e>>2],a=i(),u=e+4,c=0;c<=o;++c){var f=e+4+c*t;if(c==o||0==a[f>>s]){var l=n(u,f-u);void 0===r?r=l:(r+=String.fromCharCode(0),r+=l),u=f+t}}return an(e),r},toWireType:function(e,n){"string"!=typeof n&&Qe("Cannot pass non-string to C++ string type "+r);var i=a(n),u=nn(4+i+t);return H[u>>2]=i>>s,o(n,u+4,i+t),null!==e&&e.push(an,u),u},argPackAdvance:8,readValueFromPointer:ht,destructorFunction:function(e){an(e)}})}function $r(e,t,r,n,o,i){pt[e]={name:Be(t),rawConstructor:Qt(r,n),rawDestructor:Qt(o,i),fields:[]}}function Ar(e,t,r,n,o,i,a,s,u,c){pt[e].fields.push({fieldName:Be(t),getterReturnType:r,getter:Qt(n,o),getterContext:i,setterArgumentType:a,setter:Qt(s,u),setterContext:c})}function kr(e,t){Ct(e,{isVoid:!0,name:t=Be(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,t){}})}function xr(e,t,r){e=tt(e),t=ot(t,"emval::as");var n=[],o=Ie(n);return z[r>>2]=o,t.toWireType(n,e)}function Wr(e){var t=[];return z[e>>2]=Ie(t),t}var Or={};function Rr(e){var t=Or[e];return void 0===t?Be(e):t}var Er=[];function Sr(e,t,r,n,o){return(e=Er[e])(t=tt(t),r=Rr(r),Wr(n),o)}function jr(e,t,r,n){(e=Er[e])(t=tt(t),r=Rr(r),null,n)}function Dr(e){var t=Er.length;return Er.push(e),t}function Fr(e,t){for(var r=new Array(e),n=0;n<e;++n)r[n]=ot(z[(t>>2)+n],"parameter "+n);return r}function Ir(e,t){for(var r=Fr(e,t),n=r[0],o=n.name+"_$"+r.slice(1).map((function(e){return e.name})).join("_")+"$",i=["retType"],a=[n],s="",u=0;u<e-1;++u)s+=(0!==u?", ":"")+"arg"+u,i.push("argType"+u),a.push(r[1+u]);var c="return function "+Oe("methodCaller_"+o)+"(handle, name, destructors, args) {\n",f=0;for(u=0;u<e-1;++u)c+="    var arg"+u+" = argType"+u+".readValueFromPointer(args"+(f?"+"+f:"")+");\n",f+=r[u+1].argPackAdvance;c+="    var rv = handle[name]("+s+");\n";for(u=0;u<e-1;++u)r[u+1].deleteObject&&(c+="    argType"+u+".deleteObject(arg"+u+");\n");return n.isVoid||(c+="    return retType.toWireType(destructors, rv);\n"),c+="};\n",i.push(c),Dr(rr(Function,i).apply(null,a))}function Ur(e){return e=Rr(e),Ie(o[e])}function Mr(e,t){return Ie((e=tt(e))[t=tt(t)])}function Vr(e){e>4&&(Se[e].refcount+=1)}function qr(e){return Ie(Rr(e))}function Br(e){dt(Se[e].value),lr(e)}function Gr(e,t){return Ie((e=ot(e,"_emval_take_value")).readValueFromPointer(t))}function zr(){ve()}function Hr(e,t,r){q.copyWithin(e,t,t+r)}function Lr(){return q.length}function Nr(e){try{return T.grow(e-M.byteLength+65535>>>16),Z(T.buffer),1}catch(e){}}function Jr(e){e>>>=0;var t=Lr();if(e>2147483648)return!1;for(var r=1;r<=4;r*=2){var n=t*(1+.2/r);if(n=Math.min(n,e+100663296),Nr(Math.min(2147483648,X(Math.max(16777216,e,n),65536))))return!0}return!1}var Xr={mappings:{},buffers:[null,[],[]],printChar:function(e,t){var r=Xr.buffers[e];0===t||10===t?((1===e?g:b)(k(r,0)),r.length=0):r.push(t)},varargs:void 0,get:function(){return Xr.varargs+=4,z[Xr.varargs-4>>2]},getStr:function(e){return x(e)},get64:function(e,t){return e}};function Zr(e){return 0}function Kr(e,t,r,n,o){}function Qr(e,t,r,n){for(var o=0,i=0;i<r;i++){for(var a=z[t+8*i>>2],s=z[t+(8*i+4)>>2],u=0;u<s;u++)Xr.printChar(e,q[a+u]);o+=s}return z[n>>2]=o,0}function Yr(e){C(0|e)}Fe(),Me=o.PureVirtualError=Ue(Error,"PureVirtualError"),Ve(),Xe(),Ke=o.BindingError=Ue(Error,"BindingError"),mt=o.InternalError=Ue(Error,"InternalError"),Rt(),Jt(),Yt=o.UnboundTypeError=Ue(Error,"UnboundTypeError");var en,tn={n:lt,I:wt,A:_t,e:tr,i:ir,g:sr,C:ur,a:cr,b:fr,z:pr,k:hr,j:vr,p:gr,L:br,h:Tr,f:Cr,q:_r,m:Pr,K:$r,J:Ar,B:kr,l:xr,H:Sr,d:jr,E:lr,c:Ir,M:Ur,t:Mr,D:Vr,F:qr,G:Br,s:Gr,r:zr,w:Hr,x:Jr,y:Zr,u:Kr,o:Qr,memory:T,v:Yr,table:_},rn=(Pe(),o.___wasm_call_ctors=function(){return(rn=o.___wasm_call_ctors=o.asm.N).apply(null,arguments)}),nn=o._malloc=function(){return(nn=o._malloc=o.asm.O).apply(null,arguments)},on=o.___getTypeName=function(){return(on=o.___getTypeName=o.asm.P).apply(null,arguments)},an=(o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.Q).apply(null,arguments)},o._free=function(){return(an=o._free=o.asm.R).apply(null,arguments)});o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.S).apply(null,arguments)};function sn(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function un(e){function t(){en||(en=!0,o.calledRun=!0,P||(ie(),ae(),r(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),se()))}e=e||s,fe>0||(oe(),fe>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),t()}),1)):t()))}if(pe=function e(){en||un(),en||(pe=e)},o.run=un,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();function cn(e){const t=new DOMMatrix;return t.a=e.xx,t.b=e.xy,t.c=e.yx,t.d=e.yy,t.e=e.tx,t.f=e.ty,t}return!0,un(),o.onRuntimeInitialized=function(){const{RenderPaintStyle:e,FillRule:t,RenderPath:r,RenderPaint:n,Renderer:i,StrokeCap:a,StrokeJoin:s,BlendMode:u}=o,{fill:c,stroke:f}=e,{evenOdd:l,nonZero:p}=t;var d=r.extend("CanvasRenderPath",{__construct:function(){this.__parent.__construct.call(this),this._path2D=new Path2D},reset:function(){this._path2D=new Path2D},addPath:function(e,t){this._path2D.addPath(e._path2D,cn(t))},fillRule:function(e){this._fillRule=e},moveTo:function(e,t){this._path2D.moveTo(e,t)},lineTo:function(e,t){this._path2D.lineTo(e,t)},cubicTo:function(e,t,r,n,o,i){this._path2D.bezierCurveTo(e,t,r,n,o,i)},close:function(){this._path2D.closePath()}});function h(e){return"rgba("+((16711680&e)>>>16)+","+((65280&e)>>>8)+","+((255&e)>>>0)+","+((4278190080&e)>>>24)/255+")"}var v=n.extend("CanvasRenderPaint",{color:function(e){this._value=h(e)},thickness:function(e){this._thickness=e},join:function(e){switch(e){case s.miter:this._join="miter";break;case s.round:this._join="round";break;case s.bevel:this._join="bevel"}},cap:function(e){switch(e){case a.butt:this._cap="butt";break;case a.round:this._cap="round";break;case a.square:this._cap="square"}},style:function(e){this._style=e},blendMode:function(e){switch(e){case u.srcOver:this._blend="source-over";break;case u.screen:this._blend="screen";break;case u.overlay:this._blend="overlay";break;case u.darken:this._blend="darken";break;case u.lighten:this._blend="lighten";break;case u.colorDodge:this._blend="color-dodge";break;case u.colorBurn:this._blend="color-burn";break;case u.hardLight:this._blend="hard-light";break;case u.softLight:this._blend="soft-light";break;case u.difference:this._blend="difference";break;case u.exclusion:this._blend="exclusion";break;case u.multiply:this._blend="multiply";break;case u.hue:this._blend="hue";break;case u.saturation:this._blend="saturation";break;case u.color:this._blend="color";break;case u.luminosity:this._blend="luminosity"}},linearGradient:function(e,t,r,n){this._gradient={sx:e,sy:t,ex:r,ey:n,stops:[]}},radialGradient:function(e,t,r,n){this._gradient={sx:e,sy:t,ex:r,ey:n,stops:[],isRadial:!0}},addStop:function(e,t){this._gradient.stops.push({color:e,stop:t})},completeGradient:function(){},draw:function(e,t){let{_style:r,_value:n,_gradient:o,_blend:i}=this;if(e.globalCompositeOperation=i,null!=o){const{sx:t,sy:r,ex:i,ey:c,stops:f,isRadial:l}=o;if(l){var a=i-t,s=c-r,u=Math.sqrt(a*a+s*s);n=e.createRadialGradient(t,r,0,t,r,u)}else n=e.createLinearGradient(t,r,i,c);for({stop:stop,color:color}of f)n.addColorStop(stop,h(color));this._value=n,this._gradient=null}switch(r){case f:e.strokeStyle=n,e.lineWidth=this._thickness,e.lineCap=this._cap,e.lineJoin=this._join,e.stroke(t._path2D);break;case c:e.fillStyle=n,e.fill(t._path2D)}}});o.CanvasRenderer=i.extend("Renderer",{__construct:function(e){this.__parent.__construct.call(this),this._ctx=e},save:function(){this._ctx.save()},restore:function(){this._ctx.restore()},transform:function(e){this._ctx.transform(e.xx,e.xy,e.yx,e.yy,e.tx,e.ty)},drawPath:function(e,t){t.draw(this._ctx,e)},clipPath:function(e){this._ctx.clip(e._path2D,e._fillRule===l?"evenodd":"nonzero")}}),o.renderFactory={makeRenderPaint:function(){return new v},makeRenderPath:function(){return new d}}},t.ready}}();"object"==typeof exports&&"object"==typeof module?module.exports=Rive:"function"==typeof define&&define.amd?define([],(function(){return Rive})):"object"==typeof exports&&(exports.Rive=Rive);

/*
* High level API for playing Rive animationa
*/

(function() {

    'use strict';

    // Rive Wasm bundle
    var _rive;
    // Tracks whether Wasm has started loading
    var _wasmLoading = false;
    // Queued callbacks waiting for Wasm load to complete
    var _wasmLoadQueue = [];

    // Loads the Wasm bundle
    var _loadWasm = function () {
        Rive({
            // Loads Wasm bundle
            locateFile: (file) => 'https://unpkg.com/rive-canvas@0.6.10/' + file
        }).then((rive) => {
            // Wasm successfully loaded
            _rive = rive;
            // Fire all the callbacks
            while (_wasmLoadQueue.length > 0) {
                _wasmLoadQueue.shift()(_rive);
            }
        }).catch((e) => {
            console.error('Unable to load Wasm module');
            throw e;
        });
    };

    // Adds a listener for Wasm load
    var _onWasmLoaded = function(cb) {
        if (!_wasmLoading) {
            // Start loading Wasm
            _wasmLoading = true;
            _loadWasm();
        }
        if (_rive !== undefined) {
            // Wasm already loaded, fire immediately
            // console.log('Wasm loaded, fire immediately');
            cb(_rive);
        } else {
            // console.log('Waiting for Wasm to load');
            // Add to the load queue
            _wasmLoadQueue.push(cb);
        }
    }

    // Loop types. The index of the type is the value that comes from Wasm
    const loopTypes = ['oneShot', 'loop', 'pingPong'];

    // Playback states
    const playbackStates = {'play': 0, 'pause': 1, 'stop': 2};

    /*
    * Loop event constructor
    */
    var LoopEvent = function ({animationName, loopValue}) {
        if (loopValue < 0 || loopValue >= loopTypes.length) {
            console.error('Invalid loop value');
            return;
        }
        this.animationName = animationName;
        this.loopType = loopValue;
        this.loopName = loopTypes[loopValue];
    };

    // Canvas fit values
    const canvasFitValues = ['cover', 'contain', 'fill', 'fitWidth', 'fitHeight', 'none', 'scaleDown'];

    // Canvas alignment values
    const canvasAlignmentValues = ['center', 'topLeft', 'topCenter', 'topRight', 'centerLeft', 'centerRight', 'bottomLeft', 'bottomCenter', 'bottomRight'];

    // Canvas alignment object; lets you specify what alignment your animation will have in its canvas
    function CanvasAlignment({fit, alignment, minX, minY, maxX, maxY}) {
        this.fit = fit ? fit : canvasFitValues[0];
        this.alignment = alignment ? alignment : canvasAlignmentValues[0];
        this.minX = minX ? minX : 0;
        this.minY = minY ? minY : 0;
        this.maxX = maxX; // If this is undefined, then the runtime will use the canvas width
        this.maxY = maxY; // If this is undefined, then the runtime will use the canvas height
    };

    // CanvasAlignment api; FOR INTERNAL USE ONLY
    CanvasAlignment.prototype = {

        /*
        * Gets the Wasm Fit type from the user-defined type; we do this because the
        * Wasm types are only available after the Wasm bundle loads
        */
        _riveFit: function(rive) {
            switch(this.fit) {
                case 'cover':
                    return rive.Fit.cover;
                case 'contain':
                    return rive.Fit.contain;
                case 'fill':
                    return rive.Fit.fill;
                case 'fitWidth':
                    return rive.Fit.fitWidth;
                case 'fitHeight':
                    return rive.Fit.fitHeight;
                case 'scaleDown':
                    return rive.Fit.scaleDown;
                case 'none':
                default:
                    return rive.Fit.none;
            }
        },

        /*
        * Gets the Wasm alignment type from the user-defined type; we do this because the
        * Wasm types are only available after the Wasm bundle loads
        */
        _riveAlignment: function(rive) {
            switch (this.alignment) {
                case 'topLeft':
                    return rive.Alignment.topLeft;
                case 'topCenter':
                    return rive.Alignment.topCenter;
                case 'topRight':
                    return rive.Alignment.topRight;
                case 'centerLeft':
                    return rive.Alignment.centerLeft;
                case 'centerRight':
                    return rive.Alignment.centerRight;
                case 'bottomLeft':
                    return rive.Alignment.bottomLeft;
                case 'bottomCenter':
                    return rive.Alignment.bottomCenter;
                case 'bottomRight':
                    return rive.Alignment.bottomRight;
                case 'center':
                default:
                    return rive.Alignment.center;
            }
        }
    };


    /*
     * Animation object; holds both an animation and its instance; FOR INTERNAL USE ONLY
     */
    function _Animation({animation, instance}) {
        if (!animation || !instance) {
            console.error('_Animation requires both an animation and instance');
        }
        this.animation = animation;
        this.instance = instance;
        // Tracks whether the instance has looped
        this.loopCount = 0; 
    };

    // _Animation api; FOR INTERNAL USE ONLY
    _Animation.prototype = {

        /*
         * Name of the animation
         */
        name: function () {
            const self = this;
            return self.animation.name;
        },

        /*
         * Loop type of the animation
         */
        loopValue: function () {
            const self = this;
            return self.animation.loopValue;
        },
    };

    /*
    * RiveAnimation constructor
    */    
    var RiveAnimation = function({
        src, // uri for a Rive file (.riv)
        buffer, // ArrayBuffer containing Rive data
        artboard,
        animations,
        canvas,
        alignment,
        autoplay,
        onload,
        onloaderror,
        onplay,
        onpause,
        onstop,
        onplayerror,
        onloop
    }) {
        const self = this;

        // If no source file url specified, it's a bust
        if (!src && !buffer) {
            console.error('Either a Rive source file or a data buffer is required.');
            return;
        }
        self._src = src;
        self._buffer = buffer;

        // Name of the artboard. RiveAnimation operates on only one artboard. If
        // you want to have multiple artboards, use multiple RiveAnimations.
        self._artboardName = artboard;

        // List of animations that should be played.
        self._startingAnimationNames = ensureArray(animations);
        
        self._canvas = canvas;
        self._alignment = alignment;
        self._autoplay = autoplay;

        // The Rive Wasm runtime
        self._rive = null;
        // The instantiated artboard
        self._artboard = null;
        // The canvas context
        self._ctx = null;
        // Rive renderer
        self._renderer
        // List of animation instances that will be played
        self._animations = [];

        // Tracks when the Rive file is successfully loaded and the Wasm
        // runtime is initialized.
        self._loaded = false;

        // Tracks the playback state
        self._playback = playbackStates.stop;

        // Queue of actions to take. Actions are queued if they're called before
        // RiveAnimation is initialized.
        self._queue = [];

        // Set up the event listeners
        self._onload = typeof onload === 'function' ? [{ fn: onload }] : [];
        self._onloaderror = typeof onloaderror === 'function' ? [{ fn: onloaderror }] : [];
        self._onplay = typeof onplay === 'function' ? [{ fn: onplay }] : [];
        // self._onplayerror = typeof onplayerror === 'function' ? [{ fn: onplayerror }] : [];
        self._onpause = typeof onpause === 'function' ? [{ fn: onpause }] : [];
        self._onstop = typeof onstop === 'function' ? [{ fn: onstop }] : [];
        self._onloop = typeof onloop === 'function' ? [{ fn: onloop }] : [];

        // Add 'load' task so the queue can be processed correctly on
        // successful load
        self._queue.push({
            event: 'load',
        });

        // Queue up play if necessary
        if (self._autoplay) {
            self._queue.push({
                event: 'play',
                action: () => {
                    self.play();
                }
            });
        }

        // Wait for Wasm to load
        _onWasmLoaded(self._wasmLoadEvent.bind(self));
    };

    /*
    * RiveAnimation api
    */

    RiveAnimation.prototype = {

        /* 
        * Callback when Wasm bundle is loaded
        */
        _wasmLoadEvent: function (rive) {
            const self = this;

            self._rive = rive;
            if (self._src) {
                self._loadRiveFile();
            } else if (self._buffer) {
                self._loadRiveData(self._buffer);
            }
        },

        /*
         * Loads a Rive file
         */
        _loadRiveFile: function () {
            const self = this;

            const req = new Request(self._src);
            return fetch(req).then((res) => {
                return res.arrayBuffer();
            }).then((buffer) => {
                self._loadRiveData(buffer);
            }).catch((e) => {
                self._emit('loaderror', 'Unable to load file ' + self._src);
                console.error('Unable to load Rive file: ' + self._src);
                throw e;
            });
        },

        /*
         * Loads and initializes Rive data from an ArrayBuffer
         */
        _loadRiveData: function(buffer) {
            const self = this;

            // The raw bytes of the animation are in the buffer, load them into a
            // Rive file
            self._file = self._rive.load(new Uint8Array(buffer));
            // Fire the 'load' event and trigger the task queue
            if (self._file) {
                self._loaded = true;

                // Initialize playback and paint first frame; do this here
                // so that if play() has already beren called, things are
                // initialized before we start firing loaded events
                self._initializePlayback();

                // Paint the first frame
                self._paintFrame();

                // Emit the load event, which will also kick off processing
                // the load queue
                self._emit('load', 'File ' + self._src + ' loaded');
            } else {
                self._emit('loaderror', 'Unable to load buffer');
                console.error('Unable to load buffer');
            }
        },

        /*
         * Emits events of specified type
         */
        _emit: function (event, msg) {
            const self = this;
            const events = self['_on' + event];

            // Loop through event store and fire all functions.
            for (var i = events.length - 1; i >= 0; i--) {
                setTimeout(function (fn) {
                    fn.call(this, msg);
                }.bind(self, events[i].fn), 0);
            }

            // Step through any tasks in the queue
            self._loadQueue(event);

            return self;
        },

        /*
            * Actions queued up before the animation was initialized.
            * Takes an optional event parameter; if the event matches the next
            * task in the queue, that task is skipped as it's already occurred.
            */
        _loadQueue: function (event) {
            const self = this;

            if (self._queue.length > 0) {
                var task = self._queue[0];
                // Remove the task  if its event has occurred and trigger the
                // next task. 
                if (task.event === event) {
                    self._queue.shift();
                    self._loadQueue();
                }

                if (!event) {
                    task.action();
                }
            }

            return self;
        },

        /*
        * Initializes artboard, animations, etc. prior to playback
        */
        _initializePlayback: function () {
            const self = this;

            // Get the artboard that contains the animations you want to play.
            // You animate the artboard, using animations it contains.
            self._artboard = self._artboardName ?
                self._file.artboard(self._artboardName) :
                self._file.defaultArtboard();

            // Check that the artboard has at least 1 animation
            if (self._artboard.animationCount() < 1) {
                self._emit('loaderror', 'Artboard has no animations');
                throw 'Artboard has no animations';
            }

            // Get the canvas where you want to render the animation and create a renderer
            self._ctx = self._canvas.getContext('2d');
            self._renderer = new self._rive.CanvasRenderer(self._ctx);

            // Initialize the animations
            self._addAnimations(self._startingAnimationNames);
        },

        /*
         * Updates which animations will play back This will remove any existing
         * animations, and add the named animations. If any animation is not
         * found, then the function returns false; true otherwise. If
         * animationNames is not passed, then the default animation will be
         * added.
         */
        _addAnimations: function (animationNames) {
            const self = this;

            var result = true;
            const animationList = [];
            
            // List of instanced animations
            const instancedAnimationNames = self._animations.map(a => a.name());

            // Get the animation and instance them
            for (const i in animationNames) {
                // Ignore animations already in the list
                if(instancedAnimationNames.indexOf(animationNames[i]) >= 0) {
                    result = false;
                    continue;
                }
                const a = self._artboard.animation(animationNames[i]);
                if (!a) {
                    result = false;
                } else {
                    animationList.push(a);
                }
            }

            // Instantiate the animations
            for (const i in animationList) {
                const animation = animationList[i];
                self._animations.push(new _Animation({
                    animation: animation,
                    instance: new self._rive.LinearAnimationInstance(animation)
                }));
            }

            return result;
        },

        /*
         * Removes animations from playback. Returns true if all the listed
         * animations are removed, false if any of the animation names don't
         * exist or aren't in the playback list.
         */
        _removeAnimations: function(animationNames) {
            const self = this;
            var result = true;

            // Get the animations to remove from the list
            const animationsToRemove = self._animations.filter(
                animation => animationNames.indexOf(animation.name()) >= 0
            );
            
            // See if all the names are gonig to be removed
            if (animationNames.length !== animationsToRemove.length) {
                result = false;
            }

            // Remove the animations
            for(const i in animationsToRemove) {
                const index = self._animations.indexOf(animationsToRemove[i]);
                if (index > -1) {
                    self._animations.splice(index, 1);
                }
            }

            return result;
        },

        /*
         * Returns true if there are animations for playback, false if there are
         * none
         */
        _hasActiveAnimations: function() {
            const self = this;
            return self._animations.length !== 0;
        },

        /*
         * Ensure that there's at least one animation for playback
         */
        _validateAnimations: function() {
            const self = this;

            if (self._animations.length === 0 && self._artboard.animationCount() > 0) {
                // Add the default animation
                const animation = self._artboard.animationAt(0);
                const instance = new self._rive.LinearAnimationInstance(animation);
                self._animations.push(new _Animation({animation: animation, instance: instance}));
            }
        },

        /*
        * Paints the first frame on the animation
        */
        _paintFrame: function () {    
            const self = this;

            // Choose how you want the animation to align in the canvas
            self._ctx.save();
            self._renderer.align(
                self._alignment ? self._alignment._riveFit(self._rive) : self._rive.Fit.contain,
                self._alignment ? self._alignment._riveAlignment(self._rive) : self._rive.Alignment.center,
                {
                    minX: self._alignment ? self._alignment.minX : 0,
                    minY: self._alignment ? self._alignment.minY : 0,
                    maxX: (self._alignment && self._alignment.maxX) ? self._alignment.maxX : self._canvas.width,
                    maxY: (self._alignment && self._alignment.maxY) ? self._alignment.maxY :self._canvas.height
                },
                self._artboard.bounds
            );

            // Advance to the first frame and draw the artboard
            self._artboard.advance(0);
            self._artboard.draw(self._renderer);
            self._ctx.restore();
        },

        /*
        * The draw rendering loop
        */
        _draw: function(time) {
            const self = this;

            // This is the looping function where the animation frames will be
            // rendered at the correct time interval

            // On the first pass, make sure lastTime has a valid value
            if (!self._lastTime) {
                self._lastTime = time;
            }
            // Calculate the elapsed time between frames in seconds
            const elapsedTime = (time - self._lastTime) / 1000;
            self._lastTime = time;

            // Advance the animation by the elapsed number of seconds
            for (const i in self._animations) {
                self._animations[i].instance.advance(elapsedTime);
                if (self._animations[i].instance.didLoop) {
                    self._animations[i].loopCount += 1;
                }
                // Apply the animation to the artboard. The reason of this is that
                // multiple animations may be applied to an artboard, which will
                // then mix those animations together.
                self._animations[i].instance.apply(self._artboard, 1.0);
            }

            // Once the animations have been applied to the artboard, advance it
            // by the elapsed time.
            self._artboard.advance(elapsedTime);

            // Clear the current frame of the canvas
            self._ctx.clearRect(0, 0, self._canvas.width, self._canvas.height);
            // Render the frame in the canvas
            self._ctx.save();
            self._renderer.align(
                self._alignment ? self._alignment._riveFit(self._rive) : self._rive.Fit.contain,
                self._alignment ? self._alignment._riveAlignment(self._rive) : self._rive.Alignment.center,
                {
                    minX: self._alignment ? self._alignment.minX : 0,
                    minY: self._alignment ? self._alignment.minY : 0,
                    maxX: (self._alignment && self._alignment.maxX)  ? self._alignment.maxX : self._canvas.width,
                    maxY: (self._alignment && self._alignment.maxY) ? self._alignment.maxY :self._canvas.height
                },
                self._artboard.bounds
            );
            self._artboard.draw(self._renderer);
            self._ctx.restore();

            for (var i in self._animations) {
                // Emit if the animation looped
                switch (self._animations[i].loopValue()) {
                    case 0:
                        if (self._animations[i].loopCount) {
                            self._animations[i].loopCount = 0;
                            // This is a one-shot; if it has ended, delete the instance
                            self.stop([self._animations[i].name()]);
                        }
                        break;
                    case 1:
                        if (self._animations[i].loopCount) {
                            self._emit('loop', new LoopEvent({
                                animationName: self._animations[i].name,
                                loopValue: self._animations[i].loopValue
                            }));
                            self._animations[i].loopCount = 0;
                        }
                        break;
                    case 2:
                        // Wasm indicates a loop at each time the animation
                        // changes direction, so a full loop/lap occurs every
                        // two didLoops
                        if (self._animations[i].loopCount > 1) {
                            self._emit('loop', new LoopEvent({
                                animationName: self._animations[i].name,
                                loopValue: self._animations[i].loopValue
                            }));
                            self._animations[i].loopCount = 0;
                        }
                        break;
                }
            }

            // Calling requestAnimationFrame will call the draw function again
            // at the correct refresh rate. See
            // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
            // for more details.
            // TODO: move handling state change to event listeners?
            if (self._playback === playbackStates.play) {
                requestAnimationFrame(self._draw.bind(self));
            } else if (self._playback === playbackStates.pause) {
                // Reset the end time so on playback it starts at the correct frame
                self._lastTime = 0;
            } else if (self._playback === playbackStates.stop) {
                // Reset animation instances, artboard and time
                // TODO: implement this properly when we have instancing
                self._initializePlayback();
                self._paintFrame();
                self._lastTime = 0;
            }
        },

        /*
        * Registers a callback for a named event
        */
        on: function (event, fn) {
            var self = this;
            var events = self['_on' + event];

            if (typeof fn === 'function') {
                events.push({ fn: fn });
            }

            return self;
        },

        /*
        * Starts/continues playback
        */
        play: function (animationNames) {
            const self = this;
            animationNames = ensureArray(animationNames);

            if (!self._loaded) {
                self._queue.push({
                    event: 'play',
                    action: () => {
                        self._addAnimations(animationNames);
                        self.play();
                    }
                });
                return;
            }

            // Add any new animations to the list
            self._addAnimations(animationNames);
        

            // Ensure there's at least one animation flagged for playback
            self._validateAnimations();

            self._playback = playbackStates.play;

            // Starts animating by calling draw on the next refresh cycle.
            requestAnimationFrame(self._draw.bind(self));

            // Emits a play event, returning an array of animation names being
            // played
            self._emit('play', self._animations.map(animation => animation.name()));
        },

        /*
        * Pauses playback
        */
        pause: function(animationNames) {
            const self = this;
            animationNames = ensureArray(animationNames);

            self._removeAnimations(animationNames);

            if (!self._hasActiveAnimations() || animationNames.length === 0) {
                self._playback = playbackStates.pause;
            }
            
            // Emits a pause event
            self._emit('pause', animationNames);
        },

        /*
        * Stops playback;
        */
        stop: function(animationNames) {
            const self = this;
            animationNames = ensureArray(animationNames);

            self._removeAnimations(animationNames);

            if (!self._hasActiveAnimations() || animationNames.length === 0) {
                self._playback = playbackStates.stop;
            }

            // Emits a stop event
            self._emit('stop', animationNames);
        },

        /*
         * Updates the fit and alignment of the animation in the canvas
         */
        setAlignment: function (alignment) {
            const self = this;

            if (!alignment.constructor === CanvasAlignment) {
                return;
            }
            self._alignment = alignment;
        },

        /*
         * Returns the animation source/name
         */
        source: function() {
            const self = this;
            return self._src;
        },

        /*
         * Returns a list of the names of animations on the chosen artboard
         */
        animationNames: function() {
            const self = this;
            if (!self._loaded) {
                return [];
            }
            
            var animationNames = [];
            for (var i=0; i < self._artboard.animationCount(); i++) {
                animationNames.push(self._artboard.animationAt(i).name);
            }
            return animationNames;
        },

        /*
        * Returns true if playback is playing
        */
        isPlaying: function() {
            const self = this;
            return self._playback === playbackStates.play;
        },

        /*
        * Returns true if playback is paused
        */
        isPaused: function() {
            const self= this;
            return self._playback === playbackStates.pause;
        },

        /*
        * Returns true if playback state is stopped
        */
        isStopped: function() {
            const self = this;
            return self._playback === playbackStates.stop;
        },
    };

    /*
     * Exposes RiveAnimation and CanvasAlignment
     */
    if (typeof define === 'function' && define.amd) {
        define([], function() {
          return {
            RiveAnimation: RiveAnimation,
            CanvasAlignment: CanvasAlignment
          };
        });
      }
    if (typeof exports !== 'undefined') {
        exports.RiveAnimation = RiveAnimation;
        exports.CanvasAlignment = CanvasAlignment;
    }
    if (typeof global !== 'undefined') {
        global.RiveAnimation = RiveAnimation;
        global.CanvasAlignment = CanvasAlignment;
    } else if (typeof window !== 'undefined') {  // Define globally in case AMD is not available or unused.
        window.RiveAnimation = RiveAnimation;
        window.CanvasAlignment = CanvasAlignment;
    }

    /*
     * Utility function to ensure a parameter is an array
     */
    function ensureArray(param) {
        if (!param) {
            return [];
        } else if (typeof param === 'string') {
            return [param];
        } else if (param.constructor === Array) {
            return param;
        }
        return [];
    }

})();
