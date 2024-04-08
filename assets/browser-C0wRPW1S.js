import{J as e,I as t}from"./index-DFTYHSfo.js";function n(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,o,i={exports:{}};
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */r=i,o=i.exports,function(e){var t=e.setTimeout,n=e.clearTimeout,i=e.XMLHttpRequest,a=e.XDomainRequest,s=e.ActiveXObject,c=e.EventSource,l=e.document,u=e.Promise,d=e.fetch,h=e.Response,p=e.TextDecoder,f=e.TextEncoder,y=e.AbortController;if("undefined"==typeof window||void 0===l||"readyState"in l||null!=l.body||(l.readyState="loading",window.addEventListener("load",(function(e){l.readyState="complete"}),!1)),null==i&&null!=s&&(i=function(){return new s("Microsoft.XMLHTTP")}),null==Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),Date.now||(Date.now=function(){return(new Date).getTime()}),null==y){var v=d;d=function(e,t){var n=t.signal;return v(e,{headers:t.headers,credentials:t.credentials,cache:t.cache}).then((function(e){var t=e.body.getReader();return n._reader=t,n._aborted&&n._reader.cancel(),{status:e.status,statusText:e.statusText,headers:e.headers,body:{getReader:function(){return t}}}}))},y=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){null!=this.signal._reader&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function g(){this.bitsNeeded=0,this.codePoint=0}g.prototype.decode=function(e){function t(e,t,n){if(1===n)return e>=128>>t&&e<<t<=2047;if(2===n)return e>=2048>>t&&e<<t<=55295||e>=57344>>t&&e<<t<=65535;if(3===n)return e>=65536>>t&&e<<t<=1114111;throw new Error}function n(e,t){if(6===e)return t>>6>15?3:t>31?2:1;if(12===e)return t>15?3:2;if(18===e)return 3;throw new Error}for(var r=65533,o="",i=this.bitsNeeded,a=this.codePoint,s=0;s<e.length;s+=1){var c=e[s];0!==i&&(c<128||c>191||!t(a<<6|63&c,i-6,n(i,a)))&&(i=0,a=r,o+=String.fromCharCode(a)),0===i?(c>=0&&c<=127?(i=0,a=c):c>=192&&c<=223?(i=6,a=31&c):c>=224&&c<=239?(i=12,a=15&c):c>=240&&c<=247?(i=18,a=7&c):(i=0,a=r),0===i||t(a,i,n(i,a))||(i=0,a=r)):(i-=6,a=a<<6|63&c),0===i&&(a<=65535?o+=String.fromCharCode(a):(o+=String.fromCharCode(55296+(a-65535-1>>10)),o+=String.fromCharCode(56320+(a-65535-1&1023))))}return this.bitsNeeded=i,this.codePoint=a,o},null!=p&&null!=f&&function(){try{return"test"===(new p).decode((new f).encode("test"),{stream:!0})}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1}()||(p=g);var w=function(){};function b(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=w,this.onload=w,this.onerror=w,this.onreadystatechange=w,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=w}function E(e){return e.replace(/[A-Z]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+32)}))}function m(e){for(var t=Object.create(null),n=e.split("\r\n"),r=0;r<n.length;r+=1){var o=n[r].split(": "),i=o.shift(),a=o.join(": ");t[E(i)]=a}this._map=t}function T(){}function C(e){this._headers=e}function _(){}function S(){this._listeners=Object.create(null)}function x(e){t((function(){throw e}),0)}function A(e){this.type=e,this.target=void 0}function O(e,t){A.call(this,e),this.data=t.data,this.lastEventId=t.lastEventId}function R(e,t){A.call(this,e),this.status=t.status,this.statusText=t.statusText,this.headers=t.headers}function D(e,t){A.call(this,e),this.error=t.error}b.prototype.open=function(e,r){this._abort(!0);var o=this,a=this._xhr,s=1,c=0;this._abort=function(e){0!==o._sendTimeout&&(n(o._sendTimeout),o._sendTimeout=0),1!==s&&2!==s&&3!==s||(s=4,a.onload=w,a.onerror=w,a.onabort=w,a.onprogress=w,a.onreadystatechange=w,a.abort(),0!==c&&(n(c),c=0),e||(o.readyState=4,o.onabort(null),o.onreadystatechange())),s=0};var l=function(){if(1===s){var e=0,t="",n=void 0;if("contentType"in a)e=200,t="OK",n=a.contentType;else try{e=a.status,t=a.statusText,n=a.getResponseHeader("Content-Type")}catch(r){e=0,t="",n=void 0}0!==e&&(s=2,o.readyState=2,o.status=e,o.statusText=t,o._contentType=n,o.onreadystatechange())}},u=function(){if(l(),2===s||3===s){s=3;var e="";try{e=a.responseText}catch(t){}o.readyState=3,o.responseText=e,o.onprogress()}},d=function(e,t){if(null!=t&&null!=t.preventDefault||(t={preventDefault:w}),u(),1===s||2===s||3===s){if(s=4,0!==c&&(n(c),c=0),o.readyState=4,"load"===e)o.onload(t);else if("error"===e)o.onerror(t);else{if("abort"!==e)throw new TypeError;o.onabort(t)}o.onreadystatechange()}},h=function(){c=t((function(){h()}),500),3===a.readyState&&u()};"onload"in a&&(a.onload=function(e){d("load",e)}),"onerror"in a&&(a.onerror=function(e){d("error",e)}),"onabort"in a&&(a.onabort=function(e){d("abort",e)}),"onprogress"in a&&(a.onprogress=u),"onreadystatechange"in a&&(a.onreadystatechange=function(e){!function(e){null!=a&&(4===a.readyState?"onload"in a&&"onerror"in a&&"onabort"in a||d(""===a.responseText?"error":"load",e):3===a.readyState?"onprogress"in a||u():2===a.readyState&&l())}(e)}),!("contentType"in a)&&"ontimeout"in i.prototype||(r+=(-1===r.indexOf("?")?"?":"&")+"padding=true"),a.open(e,r,!0),"readyState"in a&&(c=t((function(){h()}),0))},b.prototype.abort=function(){this._abort(!1)},b.prototype.getResponseHeader=function(e){return this._contentType},b.prototype.setRequestHeader=function(e,t){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,t)},b.prototype.getAllResponseHeaders=function(){return null!=this._xhr.getAllResponseHeaders&&this._xhr.getAllResponseHeaders()||""},b.prototype.send=function(){if("ontimeout"in i.prototype&&("sendAsBinary"in i.prototype||"mozAnon"in i.prototype)||null==l||null==l.readyState||"complete"===l.readyState){var e=this._xhr;"withCredentials"in e&&(e.withCredentials=this.withCredentials);try{e.send(void 0)}catch(r){throw r}}else{var n=this;n._sendTimeout=t((function(){n._sendTimeout=0,n.send()}),4)}},m.prototype.get=function(e){return this._map[E(e)]},null!=i&&null==i.HEADERS_RECEIVED&&(i.HEADERS_RECEIVED=2),T.prototype.open=function(e,t,n,r,o,a,s){e.open("GET",o);var c=0;for(var l in e.onprogress=function(){var t=e.responseText.slice(c);c+=t.length,n(t)},e.onerror=function(e){e.preventDefault(),r(new Error("NetworkError"))},e.onload=function(){r(null)},e.onabort=function(){r(null)},e.onreadystatechange=function(){if(e.readyState===i.HEADERS_RECEIVED){var n=e.status,r=e.statusText,o=e.getResponseHeader("Content-Type"),a=e.getAllResponseHeaders();t(n,r,o,new m(a))}},e.withCredentials=a,s)Object.prototype.hasOwnProperty.call(s,l)&&e.setRequestHeader(l,s[l]);return e.send(),e},C.prototype.get=function(e){return this._headers.get(e)},_.prototype.open=function(e,t,n,r,o,i,a){var s=null,c=new y,l=c.signal,h=new p;return d(o,{headers:a,credentials:i?"include":"same-origin",signal:l,cache:"no-store"}).then((function(e){return s=e.body.getReader(),t(e.status,e.statusText,e.headers.get("Content-Type"),new C(e.headers)),new u((function(e,t){var r=function(){s.read().then((function(t){if(t.done)e(void 0);else{var o=h.decode(t.value,{stream:!0});n(o),r()}})).catch((function(e){t(e)}))};r()}))})).catch((function(e){return"AbortError"===e.name?void 0:e})).then((function(e){r(e)})),{abort:function(){null!=s&&s.cancel(),c.abort()}}},S.prototype.dispatchEvent=function(e){e.target=this;var t=this._listeners[e.type];if(null!=t)for(var n=t.length,r=0;r<n;r+=1){var o=t[r];try{"function"==typeof o.handleEvent?o.handleEvent(e):o.call(this,e)}catch(i){x(i)}}},S.prototype.addEventListener=function(e,t){e=String(e);var n=this._listeners,r=n[e];null==r&&(r=[],n[e]=r);for(var o=!1,i=0;i<r.length;i+=1)r[i]===t&&(o=!0);o||r.push(t)},S.prototype.removeEventListener=function(e,t){e=String(e);var n=this._listeners,r=n[e];if(null!=r){for(var o=[],i=0;i<r.length;i+=1)r[i]!==t&&o.push(r[i]);0===o.length?delete n[e]:n[e]=o}},O.prototype=Object.create(A.prototype),R.prototype=Object.create(A.prototype),D.prototype=Object.create(A.prototype);var j=-1,H=0,N=1,P=2,I=-1,M=0,L=1,q=2,X=3,G=/^text\/event\-stream(;.*)?$/i,V=function(e,t){var n=null==e?t:parseInt(e,10);return n!=n&&(n=t),z(n)},z=function(e){return Math.min(Math.max(e,1e3),18e6)},B=function(e,t,n){try{"function"==typeof t&&t.call(e,n)}catch(r){x(r)}};function U(e,r){S.call(this),r=r||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,function(e,r,o){r=String(r);var s=Boolean(o.withCredentials),c=o.lastEventIdQueryParameterName||"lastEventId",l=z(1e3),u=V(o.heartbeatTimeout,45e3),d="",h=l,p=!1,f=0,y=o.headers||{},v=o.Transport,g=k&&null==v?void 0:new b(null!=v?new v:null!=i&&"withCredentials"in i.prototype||null==a?new i:new a),w=null!=v&&"string"!=typeof v?new v:null==g?new _:new T,E=void 0,m=0,C=j,S="",x="",A="",U="",J=M,K=0,Q=0,Z=function(t,n,r,o){if(C===H)if(200===t&&null!=r&&G.test(r)){C=N,p=Date.now(),h=l,e.readyState=N;var i=new R("open",{status:t,statusText:n,headers:o});e.dispatchEvent(i),B(e,e.onopen,i)}else{var a="";200!==t?(n&&(n=n.replace(/\s+/g," ")),a="EventSource's response has a status "+t+" "+n+" that is not 200. Aborting the connection."):a="EventSource's response has a Content-Type specifying an unsupported type: "+(null==r?"-":r.replace(/\s+/g," "))+". Aborting the connection.",W(),i=new R("error",{status:t,statusText:n,headers:o}),e.dispatchEvent(i),B(e,e.onerror,i),console.error(a)}},$=function(r){if(C===N){for(var o=-1,i=0;i<r.length;i+=1)(c=r.charCodeAt(i))!=="\n".charCodeAt(0)&&c!=="\r".charCodeAt(0)||(o=i);var a=(-1!==o?U:"")+r.slice(0,o+1);U=(-1===o?U:"")+r.slice(o+1),""!==r&&(p=Date.now(),f+=r.length);for(var s=0;s<a.length;s+=1){var c=a.charCodeAt(s);if(J===I&&c==="\n".charCodeAt(0))J=M;else if(J===I&&(J=M),c==="\r".charCodeAt(0)||c==="\n".charCodeAt(0)){if(J!==M){J===L&&(Q=s+1);var y=a.slice(K,Q-1),v=a.slice(Q+(Q<s&&a.charCodeAt(Q)===" ".charCodeAt(0)?1:0),s);"data"===y?(S+="\n",S+=v):"id"===y?x=v:"event"===y?A=v:"retry"===y?(l=V(v,l),h=l):"heartbeatTimeout"===y&&(u=V(v,u),0!==m&&(n(m),m=t((function(){Y()}),u)))}if(J===M){if(""!==S){d=x,""===A&&(A="message");var g=new O(A,{data:S.slice(1),lastEventId:x});if(e.dispatchEvent(g),"open"===A?B(e,e.onopen,g):"message"===A?B(e,e.onmessage,g):"error"===A&&B(e,e.onerror,g),C===P)return}S="",A=""}J=c==="\r".charCodeAt(0)?I:M}else J===M&&(K=s,J=L),J===L?c===":".charCodeAt(0)&&(Q=s+1,J=q):J===q&&(J=X)}}},F=function(r){if(C===N||C===H){C=j,0!==m&&(n(m),m=0),m=t((function(){Y()}),h),h=z(Math.min(16*l,2*h)),e.readyState=H;var o=new D("error",{error:r});e.dispatchEvent(o),B(e,e.onerror,o),null!=r&&console.error(r)}},W=function(){C=P,null!=E&&(E.abort(),E=void 0),0!==m&&(n(m),m=0),e.readyState=P},Y=function(){if(m=0,C===j){p=!1,f=0,m=t((function(){Y()}),u),C=H,S="",A="",x=d,U="",K=0,Q=0,J=M;var n=r;if("data:"!==r.slice(0,5)&&"blob:"!==r.slice(0,5)&&""!==d){var o=r.indexOf("?");n=-1===o?r:r.slice(0,o+1)+r.slice(o+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,(function(e,t){return t===c?"":e})),n+=(-1===r.indexOf("?")?"?":"&")+c+"="+encodeURIComponent(d)}var i=e.withCredentials,a={Accept:"text/event-stream"},s=e.headers;if(null!=s)for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(a[l]=s[l]);try{E=w.open(g,Z,$,F,n,i,a)}catch(y){throw W(),y}}else if(p||null==E){var h=Math.max((p||Date.now())+u-Date.now(),1);p=!1,m=t((function(){Y()}),h)}else F(new Error("No activity within "+u+" milliseconds. "+(C===H?"No response received.":f+" chars received.")+" Reconnecting.")),null!=E&&(E.abort(),E=void 0)};e.url=r,e.readyState=H,e.withCredentials=s,e.headers=y,e._close=W,Y()}(this,e,r)}var k=null!=d&&null!=h&&"body"in h.prototype;U.prototype=Object.create(S.prototype),U.prototype.CONNECTING=H,U.prototype.OPEN=N,U.prototype.CLOSED=P,U.prototype.close=function(){this._close()},U.CONNECTING=H,U.OPEN=N,U.CLOSED=P,U.prototype.withCredentials=void 0;var J,K=c;null==i||null!=c&&"withCredentials"in c.prototype||(K=U),J=function(e){e.EventSourcePolyfill=U,e.NativeEventSource=c,e.EventSource=K}(o),void 0!==J&&(r.exports=J)}("undefined"==typeof globalThis?"undefined"!=typeof window?window:"undefined"!=typeof self?self:e:globalThis);var a=i.exports.EventSourcePolyfill;const s=n({__proto__:null,default:t(a)},[a]);export{s as b};