"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_soft-nav_navigate_ts"],{4875(a,b,c){c.d(b,{ZP:()=>m,y0:()=>I});var d=c(9302),e=c(53786),f=c(87098),g=c(75662),h=c(34855),i=c(86975);let j,k=null;function l(a,b,c){return a.dispatchEvent(new CustomEvent(b,{bubbles:!0,cancelable:!0,detail:c}))}async function m(a){let b={push:!0,replace:!1,type:"GET",dataType:"html",scrollTo:0,...a};b.requestUrl=b.url;let c=t(b.url),g=c.hash,i=b.container,m=u(i);j||(j={id:r(),url:window.location.href,title:document.title,container:m,fragment:b.fragment},(0,d.lO)(j,j.title,j.url)),k?.abort();let{signal:o}=k=new AbortController;!0===b.push&& !0!==b.replace&&(D(j.id,s(i)),(0,d.qA)(null,"",b.requestUrl)),l(i,"pjax:start",{url:b.url}),l(i,"pjax:send");let p,q=H();try{p=await fetch(b.url,{signal:o,method:b.type,body:b.data,headers:{Accept:"text/html","X-PJAX":"true","X-PJAX-Container":m,"X-Requested-With":"XMLHttpRequest","X-PJAX-VERSION":q.pjax??"","X-PJAX-CSP-VERSION":q.csp??"","X-PJAX-CSS-VERSION":q.css??"","X-PJAX-JS-VERSION":q.js??""}})}catch(v){p=void 0}if(!p||!p.ok){let A=l(i,"pjax:error");if("GET"===b.type&&A){let B=p&&p.headers.get("X-PJAX-URL"),C=B?t(B).href:b.requestUrl;(0,h.b)({pjaxFailureReason:"response_error",requestUrl:b.requestUrl}),n(C)}l(i,"pjax:complete"),l(i,"pjax:end");return}let E=j,G=F(),I=p.headers.get("X-PJAX-Version"),J=await p.text(),K=x(J,p,b),{contents:L}=K,M=t(K.url);if(g&&(M.hash=g,K.url=M.href),G&&I&&G!==I){l(i,"pjax:hardLoad",{reason:"version_mismatch"}),(0,h.b)({pjaxFailureReason:"version_mismatch",requestUrl:b.requestUrl}),n(K.url);return}if(!L){l(i,"pjax:hardLoad",{reason:"missing_response_body"}),(0,h.b)({pjaxFailureReason:"missing_response_body",requestUrl:b.requestUrl}),n(K.url);return}j={id:null!=b.id?b.id:r(),url:K.url,title:K.title,container:m,fragment:b.fragment},(!0===b.push|| !0===b.replace)&&(0,d.lO)(j,K.title,K.url);let N=document.activeElement,O=null!=b.container&&b.container.contains(N);if(N instanceof HTMLElement&&O)try{N.blur()}catch(P){}K.title&&(document.title=K.title),l(i,"pjax:beforeReplace",{contents:L,state:j,previousState:E}),w(i,L),(0,e.b)(),(0,e.o)();let Q=i.querySelector("input[autofocus], textarea[autofocus]");Q&&document.activeElement!==Q&&Q.focus(),K.scripts&&y(K.scripts),K.stylesheets&&z(K.stylesheets);let R=b.scrollTo;if(g){let S=(0,f.Kt)(document,g);if(S){let T=S.getBoundingClientRect();R=T.top+window.pageYOffset}}"number"==typeof R&&window.scrollTo(window.pageXOffset,R),l(i,"pjax:success"),l(i,"pjax:complete"),l(i,"pjax:end")}function n(a){j&&(0,d.lO)(null,"",j.url),window.location.replace(a)}let o=!0,p=window.location.href,q=window.history.state;function r(){return new Date().getTime()}function s(a){let b=a.cloneNode(!0),c=u(a);return[c,Array.from(b.childNodes),Date.now()]}function t(a){let b=document.createElement("a");return b.href=a,b}function u(a){if(a.id)return`#${a.id}`;throw Error("pjax container has no id")}function v(a,b,c){let d=[];for(let e of a)e instanceof Element&&(e instanceof c&&e.matches(b)&&d.push(e),d=d.concat(Array.from(e.querySelectorAll(b))));return d}function w(a,b){for(let c of(a.innerHTML="",b))null!=c&&a.appendChild(c)}function x(a,b,c){let d={url:function(a,b){let c=a.headers.get("X-PJAX-URL");return c?t(c).href:b}(b,c.requestUrl),title:""},e=/<html/i.test(a),f=(b.headers.get("Content-Type")||"").split(";",1)[0].trim();if("text/html"!==f)return d;let h,i;if(e){let j=a.match(/<head[^>]*>([\s\S.]*)<\/head>/i),k=a.match(/<body[^>]*>([\s\S.]*)<\/body>/i);h=j?Array.from((0,g.r)(document,j[0]).childNodes):[],i=k?Array.from((0,g.r)(document,k[0]).childNodes):[]}else h=i=Array.from((0,g.r)(document,a).childNodes);if(0===i.length)return d;let l=v(h,"title",HTMLTitleElement);d.title=l.length>0&&l[l.length-1].textContent||"";let m;if(c.fragment){if("body"===c.fragment)m=i;else{let n=v(i,c.fragment,Element);m=n.length>0?[n[0]]:[]}if(m.length&&("body"===c.fragment?d.contents=m:d.contents=m.flatMap(a=>Array.from(a.childNodes)),!d.title)){let o=m[0];o instanceof Element&&(d.title=o.getAttribute("title")||o.getAttribute("data-title")||"")}}else e||(d.contents=i);if(d.contents){for(let p of(d.contents=d.contents.filter(function(a){return!(a instanceof Element)||!a.matches("title")}),d.contents))if(p instanceof Element)for(let q of p.querySelectorAll("title"))q.remove();let r=v(d.contents,"script[src]",HTMLScriptElement);for(let s of r)s.remove();d.scripts=r,d.contents=d.contents.filter(a=>-1===r.indexOf(a));let u=v(d.contents,"link[rel=stylesheet]",HTMLLinkElement);for(let w of u)w.remove();d.stylesheets=u,d.contents=d.contents.filter(a=>!u.includes(a))}return d.title&&(d.title=d.title.trim()),d}function y(a){let b=document.querySelectorAll("script[src]");for(let c of a){let{src:d}=c;if(Array.from(b).some(a=>a.src===d))continue;let e=document.createElement("script"),f=c.getAttribute("type");f&&(e.type=f),e.src=d,document.head&&document.head.appendChild(e)}}function z(a){let b=document.querySelectorAll("link[rel=stylesheet]");for(let c of a)!Array.from(b).some(a=>a.href===c.href)&&document.head&&document.head.appendChild(c)}q&&q.container&&(j=q),"state"in window.history&&(o=!1);let A={},B=[],C=[];function D(a,b){A[a]=b,C.push(a),E(B,0),E(C,20)}function E(a,b){for(;a.length>b;){let c=a.shift();if(null==c)return;delete A[c]}}function F(){for(let a of document.getElementsByTagName("meta")){let b=a.getAttribute("http-equiv");if(b&&"X-PJAX-VERSION"===b.toUpperCase())return a.content}return null}function G(a){let b=document.querySelector(`meta[http-equiv="${a}"]`);return b?.content??null}function H(){return{pjax:G("X-PJAX-VERSION"),csp:G("X-PJAX-CSP-VERSION"),css:G("X-PJAX-CSS-VERSION"),js:G("X-PJAX-JS-VERSION")}}function I(){return j}window.addEventListener("popstate",function(a){if((0,i.xc)())return;o||k?.abort();let b=j,c=a.state,d=null;if(c&&c.container){if(o&&p===c.url)return;if(b){if(b.id===c.id)return;d=b.id<c.id?"forward":"back"}let[f,g,q]=A[c.id]||[],r=document.querySelector(f||c.container);if(r instanceof HTMLElement){b&&function a(b,c,d){let e,f;A[c]=d,"forward"===b?(e=C,f=B):(e=B,f=C),e.push(c);let g=f.pop();g&&delete A[g],E(e,20)}(d,b.id,s(r)),l(r,"pjax:popstate",{state:c,direction:d,cachedAt:q});let t={id:c.id,url:c.url,container:r,push:!1,fragment:c.fragment||"",scrollTo:!1};g?(l(r,"pjax:start"),j=c,c.title&&(document.title=c.title),l(r,"pjax:beforeReplace",{contents:g,state:c,previousState:b}),w(r,g),(0,e.b)(),(0,e.o)(),l(r,"pjax:end")):m(t),r.offsetHeight}else(0,h.b)({pjaxFailureReason:"no_container",requestUrl:b?.url}),n(location.href)}o=!1})},53786(a,b,c){c.d(b,{b:()=>g,o:()=>h});var d=c(80721);let e={},f={};function g(){let a=f[document.location.pathname];if(a)for(let b of a){let c=document.querySelector(`#${b.id}`);c&&c.replaceWith(b)}}function h(){let a=e[document.location.pathname];if(!a)return;let b=document.head;for(let c of document.querySelectorAll("head [data-pjax-transient]"))c.remove();for(let d of a)d.matches("title, script, link[rel=stylesheet]")?d.matches("link[rel=stylesheet]")&&b.append(d):(d.setAttribute("data-pjax-transient",""),b.append(d))}(async()=>{await d.x,e[document.location.pathname]=Array.from(document.querySelectorAll("head [data-pjax-transient]")),f[document.location.pathname]=Array.from(document.querySelectorAll("[data-pjax-replace]"))})(),document.addEventListener("pjax:beforeReplace",function(a){let b=a.detail.contents||[],c=a.target;for(let d=0;d<b.length;d++){let g=b[d];g instanceof Element&&("pjax-head"===g.id?(e[document.location.pathname]=Array.from(g.children),b[d]=null):g.hasAttribute("data-pjax-replace")&&(f[document.location.pathname]||(f[document.location.pathname]=[]),f[document.location.pathname].push(g),c.querySelector(`#${g.id}`)||(b[d]=null)))}})},86975(a,b,c){c.d(b,{AU:()=>o,DT:()=>s,F2:()=>m,HN:()=>k,Lq:()=>i,Si:()=>n,T2:()=>y,Yg:()=>x,aN:()=>l,ag:()=>w,po:()=>v,q3:()=>p,uL:()=>z,wz:()=>r,xc:()=>j,xk:()=>t,zH:()=>h});var d=c(74395),e=c(64707);let f=d.session.adapter,g="data-turbo-loaded";function h(){document.documentElement.setAttribute(g,"")}function i(){return document.documentElement.hasAttribute(g)}let j=()=>!(0,e.c)("PJAX_ENABLED"),k=a=>a?.tagName==="TURBO-FRAME",l=()=>{f.progressBar.setValue(0),f.progressBar.show()},m=()=>{f.progressBar.setValue(1),f.progressBar.hide()},n=(a,b)=>{let c=new URL(a,window.location.origin),d=new URL(b,window.location.origin);return Boolean(d.hash)&&c.hash!==d.hash&&c.host===d.host&&c.pathname===d.pathname&&c.search===d.search};function o(a,b){let c=a.split("/",3).join("/"),d=b.split("/",3).join("/");return c===d}async function p(){let a=document.head.querySelectorAll("link[rel=stylesheet]"),b=new Set([...document.styleSheets].map(a=>a.href)),c=[];for(let d of a)""===d.href||b.has(d.href)||c.push(q(d));await Promise.all(c)}let q=(a,b=2e3)=>new Promise(c=>{let d=()=>{a.removeEventListener("error",d),a.removeEventListener("load",d),c()};a.addEventListener("load",d,{once:!0}),a.addEventListener("error",d,{once:!0}),setTimeout(d,b)}),r=a=>{let b=a.querySelectorAll("[data-turbo-replace]"),c=[...document.querySelectorAll("[data-turbo-replace]")];for(let d of b){let e=c.find(a=>a.id===d.id);e&&e.replaceWith(d)}},s=a=>{for(let b of a.querySelectorAll("link[rel=stylesheet]"))document.head.querySelector(`link[href="${b.getAttribute("href")}"],
           link[data-href="${b.getAttribute("data-href")}"]`)||document.head.append(b)},t=a=>{for(let b of a.querySelectorAll("script"))document.head.querySelector(`script[src="${b.getAttribute("src")}"]`)||u(b)},u=a=>{let{src:b}=a,c=document.createElement("script"),d=a.getAttribute("type");d&&(c.type=d),c.src=b,document.head&&document.head.appendChild(c)},v=a=>{let b=[];for(let c of a.querySelectorAll('meta[data-turbo-track="reload"]'))document.querySelector(`meta[http-equiv="${c.getAttribute("http-equiv")}"]`)?.content!==c.content&&b.push(y(c.getAttribute("http-equiv")));return b},w=a=>{let b=a.querySelector("[data-turbo-head]")||a.head;return{title:b.querySelector("title")?.textContent,transients:[...b.querySelectorAll("[data-pjax-transient]")],bodyClasses:a.querySelector("meta[name=turbo-body-classes]")?.content}},x=()=>[...document.documentElement.attributes],y=a=>a.replace(/^x-/,"").replaceAll("-","_"),z=a=>document.dispatchEvent(new CustomEvent("turbo:reload",{detail:{reason:a}}))},80721(a,b,c){c.d(b,{C:()=>e,x:()=>d});let d="interactive"===document.readyState||"complete"===document.readyState?Promise.resolve():new Promise(a=>{document.addEventListener("DOMContentLoaded",()=>{a()})}),e="complete"===document.readyState?Promise.resolve():new Promise(a=>{window.addEventListener("load",a)})},64707(a,b,c){c.d(b,{"$":()=>g,c:()=>f});var d=c(15205);let e=(0,d.Z)(function(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}),f=(0,d.Z)(function(a){return -1!==e().indexOf(a)}),g={isFeatureEnabled:f}},87098(a,b,c){function d(a,b=location.hash){return e(a,f(b))}function e(a,b){return""===b?null:a.getElementById(b)||a.getElementsByName(b)[0]}function f(a){try{return decodeURIComponent(a.slice(1))}catch{return""}}c.d(b,{"$z":()=>f,Kt:()=>d,Q:()=>e})},9302(a,b,c){c.d(b,{Mw:()=>o,"_C":()=>n,lO:()=>m,qA:()=>l,y0:()=>g});let d=[],e=0,f;function g(){return f}function h(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch(a){return 0}}function i(){return h()-1+e}function j(a){f=a;let b=location.href;d[i()]={url:b,state:f},d.length=h(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function k(){return new Date().getTime()}function l(a,b,c){e=0;let d={_id:k(),...a};history.pushState(d,b,c),j(d)}function m(a,b,c){let d={...f,...a};history.replaceState(d,b,c),j(d)}function n(){let a=d[i()-1];if(a)return a.url}function o(){let a=d[i()+1];if(a)return a.url}f=function(){let a={_id:new Date().getTime(),...history.state};return j(a),a}(),window.addEventListener("popstate",function(a){let b=a.state;if(b&&(b._id||b.turbo?.restorationIdentifier)){if(b.turbo?.restorationIdentifier){let c=b.turbo.restorationIdentifier,g=d[i()-1]?.state?.turbo?.restorationIdentifier;g===c?e--:e++}else b._id<(f._id||NaN)?e--:e++;j(b)}},!0);let p;window.addEventListener("turbo:visit",a=>{a instanceof CustomEvent&&(p=a.detail.action)}),window.addEventListener("turbo:load",()=>{"restore"!==p&&(e=0,m(history.state,"",""))}),window.addEventListener("hashchange",function(){if(h()>d.length){let a={_id:k()};history.replaceState(a,"",location.href),j(a)}},!0),window.addEventListener("pageshow",()=>{d=[],e=0})},75662(a,b,c){c.d(b,{r:()=>d});function d(a,b){let c=a.createElement("template");return c.innerHTML=b,a.importNode(c.content,!0)}},86824(a,b,c){c.d(b,{T:()=>g});var d=c(74395),e=c(86975),f=c(4875);function g(a,b,c){(0,e.xc)()?(0,d.visit)(a,{...c}):(0,f.ZP)({...b,url:a})}},34855(a,b,c){c.d(b,{b:()=>f});var d=c(80721);let e=[];function f(a,b=!1){void 0===a.timestamp&&(a.timestamp=new Date().getTime()),a.loggedIn=j(),a.staff=k(),e.push(a),b?i():h()}let g=null;async function h(){await d.C,null==g&&(g=window.requestIdleCallback(i))}function i(){if(g=null,!e.length)return;let a=document.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!a)return;let b=JSON.stringify({stats:e});try{navigator.sendBeacon&&navigator.sendBeacon(a,b)}catch{}e=[]}function j(){return!!document.head?.querySelector('meta[name="user-login"]')?.content}function k(){return!!document.head?.querySelector('meta[name="user-staff"]')?.content}document.addEventListener("pagehide",i),document.addEventListener("visibilitychange",i)}}])
//# sourceMappingURL=app_assets_modules_github_soft-nav_navigate_ts-ad4da92159ec.js.map