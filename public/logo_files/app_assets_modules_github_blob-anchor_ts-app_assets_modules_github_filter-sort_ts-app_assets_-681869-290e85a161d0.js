"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_filter-sort_ts-app_assets_-681869"],{56334:(e,t,n)=>{function i(e){let t=e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);if(t){if(1===t.length){let e=a(t[0]);if(!e)return;return Object.freeze({start:e,end:e})}if(2!==t.length)return;{let e=a(t[0]),n=a(t[1]);if(!e||!n)return;return d(Object.freeze({start:e,end:n}))}}}function r(e){let{start:t,end:n}=d(e);return null!=t.column&&null!=n.column?`L${t.line}C${t.column}-L${n.line}C${n.column}`:null!=t.column?`L${t.line}C${t.column}-L${n.line}`:null!=n.column?`L${t.line}-L${n.line}C${n.column}`:t.line===n.line?`L${t.line}`:`L${t.line}-L${n.line}`}function s(e){let t=e.length<5e3&&e.match(/(file-.+?-)L\d+?/i);return t?t[1]:""}function l(e){let t=i(e),n=s(e);return{blobRange:t,anchorPrefix:n}}function o({anchorPrefix:e,blobRange:t}){return t?`#${e}${r(t)}`:"#"}function a(e){let t=e.match(/L(\d+)/),n=e.match(/C(\d+)/);return t?Object.freeze({line:parseInt(t[1]),column:n?parseInt(n[1]):null}):null}function c(e,t){let[n,i]=u(e.start,!0,t),[r,s]=u(e.end,!1,t);if(!n||!r)return;let l=i,o=s;if(-1===l&&(l=0),-1===o&&(o=r.childNodes.length),!n.ownerDocument)throw Error("DOMRange needs to be inside document");let a=n.ownerDocument.createRange();return a.setStart(n,l),a.setEnd(r,o),a}function u(e,t,n){let i=[null,0],r=n(e.line);if(!r)return i;if(null==e.column)return[r,-1];let s=e.column-1,l=h(r);for(let e=0;e<l.length;e++){let n=l[e],i=s-(n.textContent||"").length;if(0===i){let i=l[e+1];if(t&&i)return[i,0];return[n,s]}if(i<0)return[n,s];s=i}return i}function h(e){if(e.nodeType===Node.TEXT_NODE)return[e];if(!e.childNodes||!e.childNodes.length)return[];let t=[];for(let n of e.childNodes)t=t.concat(h(n));return t}function d(e){let t=[e.start,e.end];return(t.sort(f),t[0]===e.start&&t[1]===e.end)?e:Object.freeze({start:t[0],end:t[1]})}function f(e,t){return e.line===t.line&&e.column===t.column?0:e.line===t.line&&"number"==typeof e.column&&"number"==typeof t.column?e.column-t.column:e.line-t.line}n.d(t,{Dw:()=>o,G5:()=>i,M9:()=>c,n6:()=>l})},41982:(e,t,n)=>{function*i(e,t){for(let n of e){let e=t(n);null!=e&&(yield e)}}function r(e,t,n){let r=e=>{let n=t(e);return null!=n?[e,n]:null};return[...i(e,r)].sort((e,t)=>n(e[1],t[1])).map(([e])=>e)}n.d(t,{W:()=>r})},87738:(e,t,n)=>{function i(e,t,n=.1){let i=o(e,t,n);if(i&&-1===t.indexOf("/")){let r=e.substring(e.lastIndexOf("/")+1);i+=o(r,t,n)}return i}function r(e){let t=e.toLowerCase().split(""),n="";for(let e=0;e<t.length;e++){let i=t[e],r=i.replace(/[\\^$*+?.()|[\]{}]/g,"\\$&");0===e?n+=`(.*)(${r})`:n+=`([^${r}]*?)(${r})`}return RegExp(`${n}(.*?)$`,"i")}function s(e,t,n){if(t){let i=e.innerHTML.trim().match(n||r(t));if(!i)return;let s=!1,l=[];for(let e=1;e<i.length;++e){let t=i[e];t&&(e%2==0?s||(l.push("<mark>"),s=!0):s&&(l.push("</mark>"),s=!1),l.push(t))}e.innerHTML=l.join("")}else{let t=e.innerHTML.trim(),n=t.replace(/<\/?mark>/g,"");t!==n&&(e.innerHTML=n)}}n.d(t,{EW:()=>i,Qw:()=>s,qu:()=>a});let l=new Set([" ","-","_"]);function o(e,t,n=.1){let i=e;if(i===t)return 1;let r=i.length,s=0,o=0;for(let e=0;e<t.length;e++){let a=t[e],c=i.indexOf(a.toLowerCase()),u=i.indexOf(a.toUpperCase()),h=Math.min(c,u),d=h>-1?h:Math.max(c,u);if(-1===d)return 0;s+=.1,i[d]===a&&(s+=.1),0===d&&(s+=.9-n,0===e&&(o=1)),l.has(i.charAt(d-1))&&(s+=.9-n),i=i.substring(d+1,r)}let a=t.length,c=s/a,u=(c*(a/r)+c)/2;return o&&u+n<1&&(u+=n),u}function a(e,t){return e.score>t.score?-1:e.score<t.score?1:e.text<t.text?-1:e.text>t.text?1:0}},89359:(e,t,n)=>{function i(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function r(){let e=i("meta[name=analytics-location]");return e?e.content:window.location.pathname}function s(){let e=i("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=i("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}function l(){return`${window.location.protocol}//${window.location.host}${r()+s()}`}n.d(t,{S:()=>l})},92059:(e,t,n)=>{n.d(t,{Ny:()=>s.Ny,bm:()=>r.bm,e7:()=>r.e7,oJ:()=>l.oJ,v:()=>r.v});var i=n(51082),r=n(59679),s=n(70049),l=n(17784)},59679:(e,t,n)=>{n.d(t,{bm:()=>CodeNavigationInfo,e7:()=>p,v:()=>f});var i=n(78212),r=n(89445),s=n(51082),l=n(70049),o=n(17784);let CodeNavigationInfo=class CodeNavigationInfo{initCodeSections(){let e=new Map,t=new Map;for(let n=0;n<this.symbols.length;n++)if(this.symbols[n].lineNumber<this.symbols[n].extent.end.line-2){let i={startLine:this.symbols[n].lineNumber,endLine:this.symbols[n].extent.end.line,index:n,collapsed:!1,level:this.symbols[n].depth};if(e.has(i.startLine)){let t=e.get(i.startLine);t.push(i),e.set(i.startLine,t)}else e.set(i.startLine,[i]);if(e.has(i.endLine)){let t=e.get(i.endLine);t.push(i),e.set(i.endLine,t)}else e.set(i.endLine,[i]);for(let e=i.startLine+1;e<i.endLine;e++)if(t.has(e)){let n=t.get(e);n.push(i),t.set(e,n)}else t.set(e,[i])}this.lineToSectionMap=t,this.codeSections=e}initSymbols(e){return e.map(e=>{let t=this.blobLines[e.identUtf16.start.lineNumber]||"",n=(0,o.sm)(e,t,{stylingDirectives:this.stylingDirectives,repo:this.repo,refInfo:this.refInfo,path:this.path});return this.lineIndexedSymbols[n.lineNumber]=n,n})}getBlobLine(e){return this.blobLines[e]||""}getSymbolOnLine(e){return this.lineIndexedSymbols[e]}initSymbolTree(){if(this.symbols){let e=[],t=this.symbols.filter(e=>"field"!==e.kind).map(t=>{let n=0;for(let i=e.length-1;i>=0;i--){let r=e[i];if(c(t,r))e.pop();else{n=e.length;break}}return e.push(t),t.setSymbolDepth(n),{symbol:t,depth:n}});this.symbolTree=[];for(let e=0;e<t.length;e++){let n=t[e];if(e+1<t.length){let i=t[e+1];if(i.depth>n.depth){let i=u(t,e);e+=d(i),this.symbolTree.push({symbol:n.symbol,isParent:!0,children:i});continue}}this.symbolTree.push({symbol:n.symbol,isParent:!1,children:[]})}}}createReferences(e){return e.map(e=>{let t=new s.i6({ident:e,repo:this.repo,refInfo:this.refInfo,path:this.path,isPlain:this.isPlain,source:s.sH.BLOB_CONTENT});return t.setSnippet(void 0,this.stylingDirectives?.[e.start.line],this.blobLines[e.start.line],void 0),t})}getReferencesToSymbol(e){let t=f(this.blobLines,(0,l.tb)(e));return this.createReferences(t)}getReferencesToSearch(e){let t=f(this.blobLines,(0,l.Ny)(e));return this.createReferences(t)}getDefinitionsAndReferences(e,t,n){this.setLoading(!0);let i=this.getAlephDefinitions(e,t,n,this.loggedIn),r=this.getAlephReferences(e,t,n,this.loggedIn),s=(async()=>{let[t,n]=await i;if("search"===n){let i=this.getLocalDefinitions(e);i.length>0&&(t=i);let r=t.find(e=>e.path===this.path&&e.repo===this.repo);r&&(t=[r]),n="search"}else{let n=this.getLocalDefinitions(e,!0);for(let i of t)""===i.kind&&i.name===e&&(i.kind=n[0]?n[0].kind:"")}return{definitions:t,backend:n}})(),l=(async()=>{let{definitions:t}=await s,n=t.map(e=>e.lineNumber),i=this.getReferencesToSymbol(e).filter(e=>!n.includes(e.lineNumber));return{references:i,backend:"search"}})(),o=(async()=>{let[e,t]=await r;return{references:e,backend:t}})();return{definitions:s,localReferences:l,crossReferences:o,setLoading:this.setLoading}}getLocalDefinitions(e,t=!1){let n=9,i=[];for(let r of this.symbols)r.name===e&&(h(r.kind)<n||t)&&(n=h(r.kind),i=[r]);return i}async getAlephDefinitions(e,t,n,s){let l,c,u="search";if(""===e&&-1===t&&-1===n||!s)return[[],u];let h=(0,i.UY)({repo:this.repo,type:"definition",q:e,language:this.language,row:t,column:n,ref:this.refInfo.name,path:this.path,codeNavContext:"BLOB_VIEW"});try{l=await (0,r.v)(h)}catch(e){return[[],u]}if(!l.ok)return[[],u];try{c=await l.json()}catch(e){return[[],u]}u=a(c.backend)??"search";let d=c.payload.flatMap(e=>e).map(t=>(0,o.bo)(t,{stylingDirectives:this.stylingDirectives,repo:this.repo,refInfo:this.refInfo,path:this.path,symbol:e,backend:u}));return[d,u]}async getAlephReferences(e,t,n,s){let l,c="search";if(""===e&&-1===t&&-1===n||!s)return[[],c];let u=(0,i.UY)({repo:this.repo,type:"references",q:e,language:this.language,row:t,column:n,ref:this.refInfo.name,path:this.path,codeNavContext:"BLOB_VIEW"}),h=await (0,r.v)(u);if(!h.ok)return[[],c];try{l=await h.json()}catch(e){return[[],c]}c=a(l.backend)??"search";let d=new Set,f=e=>!!d.has(e)||(d.add(e),!1),p=l.payload.flatMap(e=>e).reduce((e,t)=>{if(t.path===this.path)return e;let n=(0,o.Rc)(t,{stylingDirectives:this.stylingDirectives,repo:this.repo,refInfo:this.refInfo,path:this.path,backend:c});return f(n.lineNumber)||e.push(n),e},[]).sort((e,t)=>e.lineNumber-t.lineNumber);return[p,c]}constructor(e,t,n,i,r,s,l,o,a,c){this.lineIndexedSymbols={},this.setLoading=c,this.setLoading(!0),this.repo=e,this.refInfo=t,this.path=n,this.loggedIn=i,this.language=o,this.blobLines=r,this.stylingDirectives=l,this.isPlain=a,this.symbols=this.initSymbols(s),this.initSymbolTree(),this.initCodeSections(),this.setLoading(!1)}};function a(e){switch(e){case"ALEPH_PRECISE":case"ALEPH_PRECISE_PREVIEW":return"precise";case"BLACKBIRD":return"search";default:return null}}function c(e,t){return e.extent.start.line===t.extent.end.line?e.extent.start.column>t.extent.end.column:e.extent.start.line>t.extent.end.line}function u(e,t){let n=[],i=e[t];for(let r=t+1;r<e.length;r++){let t=e[r];if(t.depth>i.depth){let i=u(e,r);r+=d(i),n.push({symbol:t.symbol,children:i,isParent:i.length>0})}else break}return n}function h(e){return({class:1,type:2,interface:3,module:4,implementation:5,function:6,method:7,call:8,field:9})[e]||9}function d(e){let t=e.length;for(let n=0;n<e.length;n++){let i=e[n];i.isParent&&(t+=d(i.children))}return t}function f(e,t){let n=[],i=(0,l.Pc)(t,e),r=i.next();for(;!r.done&&n.length<200;){let{column:e,columnEnd:t,line:s}=r.value;n.push({start:{line:s,column:e},end:{line:s,column:t}}),r=i.next()}return n}function p(e,t,n){if(0===e.length)return[];let i=e.length>=200,r={},s=e.reduce((e,i)=>{if(r[i.ident.start.line])return e;r[i.ident.start.line]=!0;let s=(0,l.Pc)(n,[t[i.ident.start.line]]),o=s.next();for(;!o.done&&e.length<200;){let{column:t,columnEnd:n}=o.value;e.push({start:{line:i.ident.start.line,column:t},end:{line:i.ident.start.line,column:n}}),o=s.next()}return e},[]);if(s.length<200&&i){let i=e[e.length-1].ident.start.line,r=(0,l.Pc)(n,t,i),o=r.next();for(;!o.done&&s.length<200;){let{line:e,column:t,columnEnd:n}=o.value;s.push({start:{line:e,column:t},end:{line:e,column:n}}),o=r.next()}}return s}},51082:(e,t,n)=>{n.d(t,{i6:()=>CodeReference,lt:()=>CodeSymbol,sH:()=>i});var i,r=n(78212);!function(e){e.BLACKBIRD_SEARCH="blackbird-search",e.BLACKBIRD_ANALYSIS="blackbird-analysis",e.ALEPH_PRECISE="aleph-precise",e.BLOB_CONTENT="blob-content-search"}(i||(i={}));let CodeSymbol=class CodeSymbol{setSymbolDepth(e){this.depth=e}setFileInfo(e,t,n){this.repo=e,this.refInfo=t,this.path=n}get lineNumber(){return this.ident.start.line+1}setSnippet(e,t,n,i){this.highlightedText=e,this.stylingDirectives=t,this.bodyText=n,this.leadingWhitespace=i}href(){if(!this.repo||!this.refInfo||!this.path)return`/${window.location.pathname}#L${this.lineNumber}`;let e=this.source===i.BLACKBIRD_SEARCH?this.repo.defaultBranch:this.refInfo.name||this.refInfo.currentOid;return(0,r.C9)({owner:this.repo.ownerLogin,repo:this.repo.name,commitish:e,filePath:this.path,lineNumber:this.lineNumber})}pathKey(){return`${this.repo.ownerLogin}/${this.repo.name}/${this.refInfo.currentOid}/${this.path}`}constructor({ident:e,extent:t,kind:n,name:i,fullyQualifiedName:r,source:s}){this.ident=e,this.extent=t,this.kind=n,this.name=i,this.fullyQualifiedName=r,this.source=s}};let CodeReference=class CodeReference{get lineNumber(){return this.ident.start.line+1}href(e){if(!this.repo||!this.refInfo||!this.path)return`/${window.location.pathname}#L${this.lineNumber}`;let t=this.source===i.BLACKBIRD_SEARCH?this.repo.defaultBranch:this.refInfo.name||this.refInfo.currentOid,n={owner:this.repo.ownerLogin,repo:this.repo.name,commitish:t,filePath:this.path,lineNumber:this.lineNumber,plain:this.isPlain?1:void 0};return e?(0,r.t4)(n):(0,r.C9)(n)}setSnippet(e,t,n,i){this.highlightedText=e,this.stylingDirectives=t,this.bodyText=n,this.leadingWhitespace=i}pathKey(){return`${this.repo.ownerLogin}/${this.repo.name}/${this.refInfo.currentOid}/${this.path}`}constructor({ident:e,repo:t,refInfo:n,path:i,isPlain:r,source:s}){this.ident=e,this.repo=t,this.refInfo=n,this.path=i,this.isPlain=r??!1,this.source=s}}},70049:(e,t,n)=>{var i;function r(e){let t=`(\\W|^)${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(\\W|$)`;return{kind:i.Symbol,regexp:RegExp(t,"g")}}function s(e){let t=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return{kind:i.Text,regexp:RegExp(t,"gi")}}function*l(e,t,n=0){for(let r=n;r<t.length;r++){let n;let s=t[r];for(;null!==(n=e.regexp.exec(s));){let t=n[0],l=n.index;e.kind===i.Symbol&&(t.length>0&&/\W/.test(t[0])&&(t=t.substring(1),l+=n[0].length-t.length),t.length>0&&/\W/.test(t[t.length-1])&&(t=t.substring(0,t.length-1))),yield{line:r,column:l,columnEnd:l+t.length,text:s}}}}n.d(t,{Ny:()=>s,Pc:()=>l,tb:()=>r}),function(e){e[e.Text=0]="Text",e[e.Symbol=1]="Symbol"}(i||(i={}))},17784:(e,t,n)=>{n.d(t,{Rc:()=>o,bo:()=>l,oJ:()=>s,sm:()=>r});var i=n(51082);function r(e,t,{stylingDirectives:n,repo:r,refInfo:l,path:o}){let{extentUtf16:a,identUtf16:c}=e,u=new i.lt({kind:s(e.kind),fullyQualifiedName:e.fullyQualifiedName,name:e.name,extent:{start:{line:a.start.lineNumber,column:a.start.utf16Col},end:{line:a.end.lineNumber,column:a.end.utf16Col}},ident:{start:{line:c.start.lineNumber,column:c.start.utf16Col},end:{line:c.end.lineNumber,column:c.end.utf16Col}},source:i.sH.BLACKBIRD_ANALYSIS});return u.setSnippet(void 0,n?.[c.start.lineNumber],t,void 0),u.setFileInfo(r,l,o),u}function s(e){return e.toString().replace("SYMBOL_KIND_","").replace(/_(D|R)EF/,"").toLowerCase()}function l(e,{symbol:t,refInfo:n,repo:r,path:s,backend:l}){let o=e.ident?.start?.character,a=e.ident?.end?.character??e.ident?.start?.character,c={start:{line:e.ident.start.line,column:o?o-e.leadingWhitespace:0},end:{line:e.ident?.end?.line??e.ident.start.line,column:a?a-e.leadingWhitespace:0}},u=e.extent?.start?.character,h=e.extent?.end?.character??e.extent?.start?.character,d={start:{line:e.extent.start.line,column:u||0},end:{line:e.extent.end?.line??e.extent.start.line,column:h||0}},f=new i.lt({ident:c,extent:d,kind:e.kind||"",name:t,fullyQualifiedName:t,source:"search"===l?i.sH.BLACKBIRD_SEARCH:i.sH.ALEPH_PRECISE});if(e.local)f.setFileInfo(r,n,s);else if(e.commitOid&&e.path){let t=n;e.commitOid!==n.currentOid&&(t={name:"",listCacheKey:e.commitOid,currentOid:e.commitOid,canEdit:!1}),f.setFileInfo(e.repo??r,t,e.path)}let p=Array(e.leadingWhitespace).fill(" ").join(""),m=p+(e.firstLine||"");return f.setSnippet(e.highlightedText,void 0,m,e.leadingWhitespace),f}function o(e,{refInfo:t,path:n,repo:r,backend:s}){let l=t,o=n;!e.local&&e.commitOid&&e.path&&(l=t,o=e.path,e.commitOid!==t.currentOid&&(l={name:"",listCacheKey:e.commitOid,currentOid:e.commitOid,canEdit:!1}));let a=e.ident.start.character,c=e.ident.end?.character,u=new i.i6({repo:r,refInfo:l,path:o,ident:{start:{line:e.ident.start.line,column:a?a-e.leadingWhitespace:0},end:{line:e.ident.end?.line||e.ident.start.line,column:c?c-e.leadingWhitespace:0}},source:"search"===s?i.sH.BLACKBIRD_SEARCH:i.sH.ALEPH_PRECISE}),h=Array(e.leadingWhitespace).fill(" ").join("")+(e.firstLine||"");return u.setSnippet(e.highlightedText,void 0,h,e.leadingWhitespace),u}},24601:(e,t,n)=>{n.d(t,{aJ:()=>x,cI:()=>E,eK:()=>b});var i=n(82918),r=n(49237),s=n(28382),l=n(89359),o=n(68202),a=n(53729),c=n(86283),u=n(46426);let h=!1,d=0,f=Date.now(),p=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function m(e){return e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message}function g(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}function y(e){return!!("AbortError"===e.name||"TypeError"===e.name&&p.has(e.message)||e.name.startsWith("ApiError")&&p.has(e.message))}function b(e,t={}){if((0,u.c)("FAILBOT_HANDLE_NON_ERRORS")){if(!m(e)){if(v(e))return;let n=Error(),i=g(e),r={type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${i}`,stacktrace:E(n)};L(w(r,t));return}y(e)||L(w(S(e),t))}else y(e)||L(w(S(e),t))}async function L(e){if(!N())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(I(e.error.stacktrace)){h=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function S(e){return{type:e.name,value:e.message,stacktrace:E(e)}}function w(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,l.S)()||window.location.href,readyState:document.readyState,referrer:(0,o.wP)(),timeSinceLoad:Math.round(Date.now()-f),user:x()||void 0,bundler:a.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function E(e){return(0,s.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let T=/(chrome|moz|safari)-extension:\/\//;function I(e){return e.some(e=>T.test(e.filename)||T.test(e.function))}function x(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,i.b)();return`anonymous-${t}`}let C=!1;function N(){return!C&&!h&&d<10&&(0,r.Gb)()}if(c.iG?.addEventListener("pageshow",()=>C=!1),c.iG?.addEventListener("pagehide",()=>C=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{b(e.data.error)})}let R=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"];function v(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(R.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}},7180:(e,t,n)=>{n.d(t,{O:()=>u,d:()=>TrustedTypesPolicyError});var i=n(46426),r=n(71643),s=n(24601),l=n(27856),o=n.n(l),a=n(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function c({policy:e,policyName:t,fallback:n,fallbackOnError:l=!1,sanitize:c,silenceErrorReporting:u=!1}){try{if((0,i.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;(0,r.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let s=e();return c&&new Promise(e=>{let n=window.performance.now(),i=o().sanitize(s,{FORBID_ATTR:[]}),r=window.performance.now();if(s.length!==i.length){let l=Error("Trusted Types policy output sanitized"),o=l.stack?.slice(0,1e3),c=s.slice(0,250);(0,a.q)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:o,outputLength:s.length,sanitizedLength:i.length,executionTime:r-n}),e(s)}}),s}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,s.eK)(e),(0,r.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!l))throw e}return n}let u={apply:c}},22490:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(86283);function r(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let s={createHTML:r("createHTML"),createScript:r("createScript"),createScriptURL:r("createScriptURL")},l={createPolicy:(e,t)=>({name:e,...s,...t})},o=globalThis.trustedTypes??l,a=!1;i.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||a||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),a=!0)})},89445:(e,t,n)=>{function i(e,t={}){if(e.match(/^https?:/))throw Error("Can not make cross-origin requests from verifiedFetch");let n={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:n})}function r(e,t){let n=t?.headers??{},r={...n,Accept:"application/json","Content-Type":"application/json"},s=t?.body?JSON.stringify(t.body):void 0;return i(e,{...t,body:s,headers:r})}n.d(t,{Q:()=>i,v:()=>r})}}]);
//# sourceMappingURL=app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_filter-sort_ts-app_assets_-681869-6142a3e639cb.js.map