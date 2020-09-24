"use strict";var t="header-module_right-col__1Hf6Y",e="menu_button-module_menu-button__1AvEw",s="menu_button-module_menu-line__1JYDR";function i(t){console.warn(t)}void 0===window.trustedTypes&&(window.trustedTypes={createPolicy:(t,e)=>e});const n=window.trustedTypes.createPolicy("edelweiss",{createHTML:t=>t});let o="/public/styles/";function r(t){return null==t}class a{constructor(t,e){this._value=t,this._type=e}static just(t){return new a(t,"Just")}static nothing(){return new a(null,"Nothing")}static maybeOf(t){const e=function(t){return t instanceof a}(t)?t.extract():t;return r(e)?a.nothing():a.just(e)}isJust(){return"Just"===this._type}isNothing(){return"Nothing"===this._type}map(t){return this.isJust()?a.maybeOf(t(this._value)):a.nothing()}apply(t){return t.isNothing()?a.nothing():this.map(t.extract())}chain(t){return this.isJust()?t(this._value):a.nothing()}extract(){return this._value}}const{just:h,nothing:u,maybeOf:c}=a;function l(...t){return Object.freeze(t)}function p(...t){return Object.freeze(t.map(t=>Array.from(t)).reduce((t,e)=>t.concat(e),[]))}function d(t){return t instanceof Error?Promise.reject(t):Promise.resolve(t)}function m(...t){return(...e)=>{let s=u();for(const i of t){if(s.isJust()&&!Object.is(s.extract(),NaN))return s;s=c(i(...e))}return s}}class f{constructor(t){this._value=t}static wrap(t){const e=function(t){return t instanceof f}(t)?t.extract():t;return new f(e)}map(t){return f.wrap(t(this._value))}apply(t){return this.map(t.extract())}chain(t){return t(this._value)}extract(){return this._value}}const{wrap:y}=f;function g(t){c(t).map(t=>t.remove())}function b(t,...e){c(t).map(t=>t.append(...e))}function w(t,...e){c(t).map(t=>t.replaceWith(...e))}function v(t,e,s){c(t).map(t=>t.setAttribute(e,s))}function k(t,e){return c(t).map(t=>t.getAttribute(e))}function _(t,e){return c(t).map(t=>t.hasAttribute(e)).extract()}function E(t,e=document){return c(e).map(e=>e.querySelector(t))}function C(t,e){_(t,e)&&c(t).map(t=>t.removeAttribute(e))}function $(t,e,s,i={}){return c(t).map(t=>(t.addEventListener(e,s,i.add),t)).map(t=>()=>function(t,e,s,i){c(t).map(t=>t.removeEventListener(e,s,i))}(t,e,s,i.remove))}function T(t){return`${class{static get cssRootFolder(){return o}static set cssRootFolder(t){o=t}}.cssRootFolder}${t}${/.+\.css$/.test(t)?"":".css"}`}function P(t){m(()=>E(`link[href="${T(t)}"]`,document.head).extract(),()=>(b(document.head,y(document.createElement("link",void 0)).map(t=>(v(t,"rel","stylesheet"),t)).map(e=>(v(e,"href",T(t)),e)).extract()),null))()}function S(t){E(`link[href="${T(t)}"]`,document.head).map(g)}class x{styles(){return""}beforeBuild(){}template(){return""}afterBuild(){}async _createNodes(){const t=this.styles();t.length>0&&(Array.isArray(t)?t.forEach(P):P(t)),await d(this.beforeBuild());const e=await d(this.template());return await d(this.afterBuild()),e}}function N(){return""+window.crypto.getRandomValues(new Uint32Array(1))[0]}const O=/@([\w-]+)=['"]?$/,A=/^eventId[\d]{1,}$/,B=/<([\w-]+)\s*(:[\w]+)?\s*=$/,L=/\?([\w-]+)=['"]?$/,j=/:(mounted|rendered|updated|removed)=$/,I=new Map;var M;!function(t){t.Mounted="mounted",t.Rendered="rendered",t.Updated="updated",t.Removed="removed"}(M||(M={}));const R=function t(e,s=!1){return s&&Object.getOwnPropertyNames(e).forEach(s=>{const i=e[s];"object"!=typeof i&&"function"!=typeof i||t(i)}),Object.freeze(e)}({[M.Mounted]:new Map,[M.Rendered]:new Map,[M.Updated]:new Map,[M.Removed]:new Map});async function D(t,...e){return t.reduce((t,s,n)=>r(e[n])?t.then(t=>t+s):h(e[n]).map(d).map(t=>t.then(t=>H(t))).map(t=>t.then(t=>Array.isArray(t)?Promise.all(t.map(t=>H(t))).then(t=>t.join("")):t)).map(e=>t.then(t=>function(t,e,s){return t.then(t=>{const n=O.exec(e);if(!r(n))return c(n).map(i=>{if("function"!=typeof t&&!t.handleEvent)throw new Error(`Event listener must be type of "function" or object with\n      "handleEvent" method, but given "${typeof t}".`);const n=N();return I.set(n,{[i[1]]:t}),e.replace(i[0],`data-event-id${s}="${n}"`)}).extract();const o=L.exec(e);if(!r(o))return h(o).map(s=>e.replace(s[0],t?s[1]:"")).extract();const a=j.exec(e);if(!r(a)){const s=N(),i=a[1];return R[i].set(s,t),e.replace(j,`data-${i}-hook-id="${s}"`)}const u=B.exec(e);return r(u)?e+t:h(u).map(s=>Element.isPrototypeOf(t)?(function(t,e){const s=t[1];if(!s||"string"!=typeof s)return i(`tag name for custom element must be provided and be type of "string"!\n    Tag: ${s}\n    Constructor: ${e.toString()}`);const n=r(t[2])?void 0:t[2].slice(1);m(()=>customElements.get(s),()=>customElements.define(s,e,r(n)?void 0:{extends:n}))()}(s,t),e.replace(B,("<"+s[1]).replace(/^<-(.+)-$/,"<$1"))):(i(`You must pass a class constructor to custom element ${s[1]}. But given ->"${t}"`),"")).extract()})}(e,s,n).then(e=>t+e))).extract(),d(""))}function H(t){return t instanceof x?t._createNodes():t}const q=new Set,F=new Set;function Y(t){return t.nodeType===Node.TEXT_NODE}function z(t){V(t,M.Mounted),p(t.childNodes).forEach(z)}function W(t){setTimeout(()=>V(t,M.Rendered),0),p(t.childNodes).forEach(W)}function J(t){V(t,M.Updated)}function U(t){V(t,M.Removed),p(t.childNodes).forEach(U)}function V(t,e){t.nodeType===Node.ELEMENT_NODE&&k(t,`data-${e}-hook-id`).map(t=>l(t,c(R[e].get(t)))).map(([s,i])=>i.map(i=>d(i(t)).then(()=>R[e].delete(s))))}function K(t,e){if(t.nodeType===e.nodeType)if(t.tagName===e.tagName)if(function(t,e){let s=!1;return t.attributes.length!==e.attributes.length&&p(t.attributes).forEach(({name:i})=>{_(e,i)||(C(t,i),s=!0)}),p(e.attributes).forEach(({name:e,value:i})=>{k(t,e).extract()!==i&&(v(t,e,i),s=!0)}),s}(t,e)&&J(t),e.hasChildNodes()){const s=p(t.childNodes),i=p(e.childNodes);for(let e=0;e<Math.max(i.length,s.length);e++){const n=s[e],o=i[e];r(o)?r(n)||(g(n),U(n)):r(n)?(b(t,o),z(o),W(o)):Y(o)&&Y(n)?n.textContent!==o.textContent&&(n.textContent=o.textContent,J(t)):K(n,o)}}else t.hasChildNodes()&&(w(t,e),z(e),W(e),U(t));else w(t,e),z(e),W(e),U(t);else w(t,e),z(e),W(e),U(t)}async function X(t){return Array.isArray(t)?t.reduce((t,e)=>t.then(t=>X(e).then(e=>t+e)),d("")):t instanceof x?t._createNodes():t}const G=[];function Q(t){t instanceof HTMLElement&&(Object.entries(t.dataset).filter(([t,e])=>A.test(t)).map(([e,s])=>(c(s).map(t=>I.get(t)).map(Object.entries).map(([e])=>$(t,e[0],e[1]).map(G.push.bind(G))),e)).map(t=>c(/(\d+)$/.exec(t)).map(t=>t[1])).forEach(e=>e.map(e=>C(t,"data-event-id"+e))),t.childElementCount>0&&p(t.children).forEach(Q))}function Z(t,e){return E(t).map(t=>l(t,function(t,e=!1){return c(t).map(t=>t.cloneNode(e))}(t).extract())).map(([t,s])=>X(e).then(t=>(s.innerHTML=n.createHTML(t),s)).then(t=>(q.forEach(P),F.forEach(S),q.clear(),F.clear(),t)).then(e=>K(t,e)).then(()=>G.forEach(t=>t())).then(()=>G.length=0).then(()=>p(t.children).forEach(Q)).then(()=>I.clear())).extract()}const tt=new Map;let et={path:"",container:"",view:()=>""},st="";class it{static get current(){return et}static get container(){return st}static set container(t){st=t}static add(t){Array.isArray(t)?t.forEach(t=>tt.set(t.path,t)):tt.set(t.path,t)}static to(t,e={}){if(0===tt.size)return i(`You cannot navigate to ${t} because you didn't define any routes!\n      At first call "Router.add(...)".`),d(void 0);let s;return p(tt.entries()).forEach(([i,n])=>{const o="string"==typeof i?new RegExp(function(t){let e=t;return/[^\\]\//g.test(t)&&(e=e.split("/").join("\\/")),e.startsWith("^")||(e="^"+e),e.endsWith("$")||(e+="$"),e}(i)):i;o.test(t)&&(s=c(n.container||st).chain(s=>E(s).map(async()=>{et=Object.assign(Object.assign({},n),{parameters:o.exec(t)}),r(n.before)||await d(n.before()),await Z(s,n.view()),(r(e.willStateChange)||e.willStateChange)&&window.history.pushState({path:t,container:s},"",t),r(n.after)||await d(n.after())})).extract())}),r(s)?(i(`No route is specified for path: ${t}!`),d(void 0)):s}static reload(){const{container:t,view:e,after:s,before:i}=et;return c(t||st).map(async t=>{r(i)||await d(i()),await Z(t,e()),r(s)||await d(s())}).extract()}static back(){window.history.back()}static forward(){window.history.forward()}}$(window,"popstate",t=>{r(t.state)||it.to(t.state.path,{willStateChange:!1})});const nt=function(t){return new Proxy(t,{set(t,e,s,i){const n=Reflect.set(t,e,s,i);return n&&it.reload(),n},deleteProperty(t,e){if(e in t){const s=Reflect.deleteProperty(t,e);return s&&it.reload(),s}return!1}})}({isPortfolioVisible:!1});function ot(){return D`<header>
    ${"/portfolio/about"===it.current.path?D`<button @click=${()=>it.to("/portfolio/")}>Home</button>`:D`<button
    @click=${()=>nt.isPortfolioVisible=!nt.isPortfolioVisible}
    aria-label="menu button"
    class=${e}
  >
    <span class=${s}></span
    ><span class=${s}></span
    ><span class=${s}></span>
  </button>`}
    <div class=${t}>
      <button @click=${()=>it.to("/portfolio/about")}>About</button>
      <a href="https://github.com/YevhenKap">GitHub</a>
    </div>
  </header>`}var rt="footer-module_mail__1-hhI";var at="home-module_home__2mATN",ht="home-module_portrait-block__3HiY5",ut="home-module_portrait__1OdUE",ct="home-module_portrait-hover-block__AXOWh",lt="home-module_typed-block__ikUdX",pt="portfolio_modal-module_portfolio-modal__bVQvd",dt="portfolio_modal-module_background__1d_LE",mt="portfolio_modal-module_visible__k5Oh-",ft="portfolio_modal-module_carousel__YYDqq",yt="portfolio_modal-module_portfolio-item__3fRZz";function gt(){return D`
    <div class=${at}>
      <div class=${ht}>
        <img
          class=${ut}
          src="${"/portfolio/build/images/e796594bde077ae4.png"}"
          alt="Creator picture: Kapelianovych Yevhen"
        />
        <div class=${ct}></div>
      </div>
      <p
        class=${lt}
      >
        <span id="${"short-description"}"></span>
      </p>
      ${D`
    <aside
      class="${nt.isPortfolioVisible?mt:""} ${pt}"
      @transitionend=${t=>{t.target.classList.toggle(dt)}}
    >
      <h2>Portfolio</h2>
      <div class=${ft}>
        <a
          href="https://github.com/YevhenKap/edelweiss"
          class=${yt}
        >
          <img src="${"/portfolio/build/images/d7b93728e3083616.png"}" alt="Edelweiss website" />
          <p>Edelweiss website (WIP)</p>
        </a>
      </div>
    </aside>
  `}
    </div>
  `}var bt="about-module_about-page__1iK9l";function wt(t){return D`
    ${ot()}
    <main>
      ${"home"===t?gt():"about"===t?D`
    <div class=${bt}>
      <p>
        I am a big lover of programming. I have graduated at
        <a href="https://brainacad.zp.ua/">Brain Academy</a> as Certified
        Associate in Frontend in 2018.
      </p>
      <p>
        Now I spend my free time developing my own projects. They are all
        located in my Github account.
      </p>
      <p>
        Feel free to contact me:
        <a href="mailto:kapelianovych.y.v@gmail.com"
          >kapelianovych.y.v@gmail.com</a
        >
      </p>
    </div>
  `:""}
    </main>
    ${D`<footer>
    <span></span>
    <span>Made by Kapelianovych Yevhen</span>
    <a class=${rt} href="mailto:kapelianovych.y.v@gmail.com">Mail me</a>
  </footer>`}
  `}const vt={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:t=>{},onComplete:t=>{},preStringTyped:(t,e)=>{},onStringTyped:(t,e)=>{},onLastStringBackspaced:t=>{},onTypingPaused:(t,e)=>{},onTypingResumed:(t,e)=>{},onReset:t=>{},onStop:(t,e)=>{},onStart:(t,e)=>{},onDestroy:t=>{}};class kt{constructor(t,e){if(this.temporaryPause=!1,this.el="string"==typeof t?document.querySelector(t):t,this.options=Object.assign(Object.assign({},vt),e),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.bindInputFocusEvents=this.options.bindInputFocusEvents,this.showCursor=!this.isInput&&this.options.showCursor,this.cursorChar=this.options.cursorChar,this.cursorBlinking=!0,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.smartBackspace=this.options.smartBackspace,this.backDelay=this.options.backDelay,this.fadeOut=this.options.fadeOut,this.fadeOutClass=this.options.fadeOutClass,this.fadeOutDelay=this.options.fadeOutDelay,this.isPaused=!1,this.strings=this.options.strings.map(t=>t.trim()),"string"==typeof this.options.stringsElement?this.stringsElement=document.querySelector(this.options.stringsElement):this.stringsElement=this.options.stringsElement,this.stringsElement){this.strings=[],this.stringsElement.style.display="none";const t=Array.prototype.slice.apply(this.stringsElement.children),e=t.length;if(e)for(let s=0;s<e;s+=1){const e=t[s];this.strings.push(e.innerHTML.trim())}}this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.shuffle=this.options.shuffle,this.sequence=[],this.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},this.typingComplete=!1;for(let t in this.strings)this.sequence[t]=t;this.currentElContent=function(t){let e="";return e=t.attr?t.el.getAttribute(t.attr)||"":t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent||"",e}(this),this.autoInsertCss=this.options.autoInsertCss,function(t){const e="data-typed-js-css";if(!t.autoInsertCss)return;if(!t.showCursor&&!t.fadeOut)return;if(document.querySelector(`[${e}]`))return;let s=document.createElement("style");s.type="text/css",s.setAttribute(e,"true");let i="";t.showCursor&&(i+="\n      .typed-cursor{\n        opacity: 1;\n      }\n      .typed-cursor.typed-cursor--blink{\n        animation: typedjsBlink 0.7s infinite;\n        -webkit-animation: typedjsBlink 0.7s infinite;\n                animation: typedjsBlink 0.7s infinite;\n      }\n      @keyframes typedjsBlink{\n        50% { opacity: 0.0; }\n      }\n      @-webkit-keyframes typedjsBlink{\n        0% { opacity: 1; }\n        50% { opacity: 0.0; }\n        100% { opacity: 1; }\n      }\n    "),t.fadeOut&&(i+="\n      .typed-fade-out{\n        opacity: 0;\n        transition: opacity .25s;\n      }\n      .typed-cursor.typed-cursor--blink.typed-fade-out{\n        -webkit-animation: 0;\n        animation: 0;\n      }\n    "),0!==s.length&&(s.innerHTML=i,document.body.appendChild(s))}(this),this.begin()}toggle(){this.pause.status?this.start():this.stop()}stop(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}start(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}destroy(){this.reset(!1),this.options.onDestroy(this)}reset(t=!0){clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}begin(){this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=window.setTimeout(()=>{this.currentElContent&&0!==this.currentElContent.length?this.backspace(this.currentElContent,this.currentElContent.length):this.typewrite(this.strings[parseInt(this.sequence[this.arrayPos])],this.strPos)},this.startDelay)}typewrite(t,e){this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));const s=this.humanizer(this.typeSpeed);let i=1;!0!==this.pause.status?this.timeout=window.setTimeout(()=>{e=function(t,e,s){if("html"!==s.contentType)return e;const i=t.substr(e).charAt(0);if("<"===i||"&"===i){let s="";for(s="<"===i?">":";";t.substr(e+1).charAt(0)!==s&&!(1+ ++e>t.length););e++}return e}(t,e,this);let s=0,n=t.substr(e);if("^"===n.charAt(0)&&/^\^\d+/.test(n)){let i=1;n=(/\d+/.exec(n)||[])[0],i+=n.length,s=parseInt(n),this.temporaryPause=!0,this.options.onTypingPaused(this.arrayPos,this),t=t.substring(0,e)+t.substring(e+i),this.toggleBlinking(!0)}if("`"===n.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););const s=t.substring(0,e),n=t.substring(s.length+1,e+i),o=t.substring(e+i+1);t=s+n+o,i--}this.timeout=window.setTimeout(()=>{this.toggleBlinking(!1),e>=t.length?this.doneTyping(t,e):this.keepTyping(t,e,i),this.temporaryPause&&(this.temporaryPause=!1,this.options.onTypingResumed(this.arrayPos,this))},s)},s):this.setPauseStatus(t,e,!0)}keepTyping(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=s;const i=t.substr(0,e);this.replaceText(i),this.typewrite(t,e)}doneTyping(t,e){this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=window.setTimeout(()=>{this.backspace(t,e)},this.backDelay))}backspace(t,e){if(!0===this.pause.status)return void this.setPauseStatus(t,e,!0);if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);const s=this.humanizer(this.backSpeed);this.timeout=window.setTimeout(()=>{e=function(t,e,s){if("html"!==s.contentType)return e;const i=t.substr(e).charAt(0);if(">"===i||";"===i){let s="";for(s=">"===i?"<":"&";t.substr(e-1).charAt(0)!==s&&!(--e<0););e--}return e}(t,e,this);const s=t.substr(0,e);if(this.replaceText(s),this.smartBackspace){let t=this.strings[this.arrayPos+1];t&&s===t.substr(0,e)?this.stopNum=e:this.stopNum=0}e>this.stopNum?(e--,this.backspace(t,e)):e<=this.stopNum&&(this.arrayPos++,this.arrayPos===this.strings.length?(this.arrayPos=0,this.options.onLastStringBackspaced(this),this.shuffleStringsIfNeeded(),this.begin()):this.typewrite(this.strings[parseInt(this.sequence[this.arrayPos])],e))},s)}complete(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}setPauseStatus(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e}toggleBlinking(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}humanizer(t){return Math.round(Math.random()*t/2)+t}shuffleStringsIfNeeded(){this.shuffle&&(this.sequence=this.sequence.sort(()=>Math.random()-.5))}initFadeOut(){return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(()=>{this.arrayPos++,this.replaceText(""),this.strings.length>this.arrayPos?this.typewrite(this.strings[parseInt(this.sequence[this.arrayPos])],0):(this.typewrite(this.strings[0],0),this.arrayPos=0)},this.fadeOutDelay)}replaceText(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}bindFocusEvents(){this.isInput&&(this.el.addEventListener("focus",t=>{this.stop()}),this.el.addEventListener("blur",t=>{this.el.value&&0!==this.el.value.length||this.start()}))}insertCursor(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}it.container="#app",it.add([{path:"/portfolio/",view:()=>wt("home"),after(){new kt("#short-description",{strings:["Boy","Dentist","Web Programmer"],loop:!0,typeSpeed:100,backSpeed:100,smartBackspace:!0}).start()}},{path:"/portfolio/about",view:()=>wt("about")}]),it.to(window.location.pathname),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("service_worker.js").then(t=>console.log("Service worker is registered. Scope is "+t.scope)).catch(t=>console.error("Registration of service worker is failed with "+t))});
