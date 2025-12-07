const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:d,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,m=globalThis,u=m.trustedTypes,f=u?u.emptyScript:"",g=m.reactiveElementPolyfillSupport,_=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!a(t,e),$={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...c(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??b)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[_("elementProperties")]=new Map,w[_("finalized")]=new Map,g?.({ReactiveElement:w}),(m.reactiveElementVersions??=[]).push("2.1.1");const v=globalThis,A=v.trustedTypes,x=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+S,T=`<${E}>`,O=document,P=()=>O.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,k="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,H=/>/g,j=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,L=/"/g,J=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),W=new WeakMap,B=O.createTreeWalker(O,129);function F(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const V=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let a,d,l=-1,c=0;for(;c<i.length&&(r.lastIndex=c,d=r.exec(i),null!==d);)c=r.lastIndex,r===N?"!--"===d[1]?r=D:void 0!==d[1]?r=H:void 0!==d[2]?(J.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=j):void 0!==d[3]&&(r=j):r===j?">"===d[0]?(r=o??N,l=-1):void 0===d[1]?l=-2:(l=r.lastIndex-d[2].length,a=d[1],r=void 0===d[3]?j:'"'===d[3]?L:R):r===L||r===R?r=j:r===D||r===H?r=N:(r=j,o=void 0);const h=r===j&&t[e+1].startsWith("/>")?" ":"";n+=r===N?i+T:l>=0?(s.push(a),i.slice(0,l)+C+i.slice(l)+S+h):i+S+(-2===l?e:h)}return[F(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[d,l]=V(t,e);if(this.el=Z.createElement(d,i),B.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=B.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=l[n++],i=s.getAttribute(t).split(S),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?Y:"?"===r[1]?tt:"@"===r[1]?et:X}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(J.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),B.nextNode(),a.push({type:2,index:++o});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===E)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){if(e===z)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=M(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=G(t,o._$AS(t,e.values),o,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);B.currentNode=s;let o=B.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new it(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=B.nextNode(),n++)}return B.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),M(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(F(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new K(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Z(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=G(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=G(this,s[i+r],e,r),a===z&&(a=this._$AH[r]),n||=!M(a)||a!==this._$AH[r],a===q?t=q:t!==q&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class et extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??q)===z)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const st=v.litHtmlPolyfillSupport;st?.(Z,Q),(v.litHtmlVersions??=[]).push("3.3.1");const ot=globalThis;class nt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(P(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const rt=ot.litElementPolyfillSupport;rt?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.1"),console.info("%c POWERTODOIST-CARD %c Loading bundled version...","color: white; background: orchid; font-weight: 700","color: orchid");const at={berry_red:"rgb(184, 37, 111)",red:"rgb(219, 64, 53)",orange:"rgb(255, 153, 51)",yellow:"rgb(250, 208, 0)",olive_green:"rgb(175, 184, 59)",lime_green:"rgb(126, 204, 73)",green:"rgb(41, 148, 56)",mint_green:"rgb(106, 204, 188)",teal:"rgb(21, 143, 173)",sky_blue:"rgb(20, 170, 245)",light_blue:"rgb(150, 195, 235)",blue:"rgb(64, 115, 255)",grape:"rgb(136, 77, 255)",violet:"rgb(175, 56, 235)",lavender:"rgb(235, 150, 235)",magenta:" rgb(224, 81, 148)",salmon:"rgb(255, 141, 133)",charcoal:"rgb(128, 128, 128)",grey:"rgb(184, 184, 184)",taupe:"rgb(204, 172, 147)"};function dt(t,e,i,s){e["%was%"]=i,e["%input%"]=s,e["%line%"]="\n";var o=new RegExp(Object.keys(e).join("|"),"gi");return"string"!=typeof t?t:t.replace(o,function(t){return e[t.toLowerCase()]})}const lt=[{name:"entity",required:!0,selector:{entity:{domain:"sensor"}}},{name:"show_completed",selector:{number:{min:0,max:15,mode:"box"}}},{name:"show_header",selector:{boolean:{}}},{name:"show_item_add",selector:{boolean:{}}},{name:"use_quick_add",selector:{boolean:{}}},{name:"show_item_close",selector:{boolean:{}}},{name:"show_item_delete",selector:{boolean:{}}},{name:"filter_today_overdue",selector:{boolean:{}}}];customElements.define("powertodoist-card-editor",class extends nt{static get properties(){return{hass:Object,config:Object}}setConfig(t){this.config=t}_valueChanged(t){const e=t.detail.value;this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}}))}_computeLabel(t){return{entity:"Entity (required)",show_completed:"Completed tasks shown (0 to disable)",show_header:"Show header",show_item_add:"Show add item input",use_quick_add:"Use Quick Add",show_item_close:"Show close/complete buttons",show_item_delete:"Show delete buttons",filter_today_overdue:"Only show today or overdue"}[t.name]||t.name}render(){return this.hass&&this.config?I`
            <ha-form
                .hass=${this.hass}
                .data=${this.config}
                .schema=${lt}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `:I``}}),customElements.define("powertodoist-card",class extends nt{constructor(){super(),this.itemsJustCompleted=[],this.itemsEmphasized=[],this.toastText="",this.myConfig={}}static get properties(){return{hass:Object,config:Object}}static getConfigElement(){return document.createElement("powertodoist-card-editor")}setConfig(t){if(!t.entity)throw new Error("Entity is not set!");this.config=t,this.myConfig=this.parseConfig(t)}getCardSize(){return this.hass&&this.hass.states[this.config.entity].attributes.items.length||1}random(t,e){return Math.floor(Math.random()*(e-t)+t)}getUUID(){let t=new Date;return this.random(1,100)+"-"+ +t+"-"+t.getMilliseconds()}itemAdd(t){if(13===t.which){let t=this.shadowRoot.getElementById("powertodoist-card-item-add"),i=t.value;if(i&&i.length>1){let s=this.hass.states[this.config.entity].state||void 0;if(s){let o=this.getUUID();if(this.config.use_quick_add){let s=this.hass.states[this.config.entity]||void 0;if(!s)return;var e=i;try{this.myConfig.filter_section&&!e.includes("/")&&(e=e+" /"+this.myConfig.filter_section)}catch(t){}try{s.attributes.project.name&&!e.includes("#")&&(e=e+" #"+s.attributes.project.name)}catch(t){}this.hass.callService("rest_command","todoist",{url:"quick/add",payload:"text="+e}).then(e=>{t.value="",this.hass.callService("homeassistant","update_entity",{entity_id:this.config.entity})})}else{let e=[{type:"item_add",temp_id:o,uuid:o,args:{project_id:s,content:i}}];this.hass.callService("rest_command","todoist",{url:"sync",payload:"commands="+JSON.stringify(e)}).then(e=>{t.value="",this.hass.callService("homeassistant","update_entity",{entity_id:this.config.entity})})}}}}}parseConfig(t){var e,i=[];let s=JSON.stringify(t),o=(new Date).format(this.myConfig.date_format||"mmm dd H:mm");try{i=this.hass.states[this.config.entity].attributes.project_notes}catch(t){}const n="undefined"!=typeof item&&item.labels?JSON.stringify(item.labels):"";var r={"%user%":this.hass?this.hass.user.name:"","%date%":`${o}`,"%str_labels%":n};i.forEach(function(t,e){r["%project_notes_"+e-1+"%"]=t.content,0==e&&(r["%project_notes%"]=t.content)}),s=dt(s,r);try{e=JSON.parse(s)}catch(i){var a="";e=JSON.parse(JSON.stringify(t));try{const t=40,e=i.message.match(/[-+]?[0-9]*\.?[0-9]+/g)[1]-t/2;a="(near --\x3e "+s.substring(e,e+t)+" <---)"}catch(t){}e.error=i.name+": "+i.message+a}return e}buildCommands(t,e="actions_close"){let i=this.hass.states[this.config.entity].attributes,s=void 0!==this.config[e]?this.parseConfig(this.config[e]):[],o="",n="",r="",a="",d=[],l=[],c=[],h=[],p=[],m=[],u=[];try{o=s.find(t=>"object"==typeof t&&t.hasOwnProperty("service")).service||""}catch(t){}try{n=s.find(t=>"object"==typeof t&&t.hasOwnProperty("confirm")).confirm||""}catch(t){}try{r=s.find(t=>"object"==typeof t&&t.hasOwnProperty("prompt_texts")).prompt_texts||""}catch(t){}try{l=s.find(t=>"object"==typeof t&&t.hasOwnProperty("update")).update||[]}catch(t){}try{c=s.find(t=>"object"==typeof t&&t.hasOwnProperty("label")).label||[]}catch(t){}try{a=s.find(t=>"object"==typeof t&&t.hasOwnProperty("toast")).toast||""}catch(t){}try{h=s.find(t=>"object"==typeof t&&t.hasOwnProperty("add")).add||[]}catch(t){}try{p=s.find(t=>"object"==typeof t&&t.hasOwnProperty("allow")).allow||[]}catch(t){}try{m=s.find(t=>"object"==typeof t&&t.hasOwnProperty("match")).match||[]}catch(t){}try{u=s.find(t=>"object"==typeof t&&t.hasOwnProperty("emphasis")).emphasis||[]}catch(t){}const f=JSON.stringify(t.labels);let g=t.labels;c.includes("!*")&&(g=[]),c.includes("!_")&&(g=g.filter(function(t){return"_"!==t[0]})),c.includes("!!")&&(g=g.filter(function(t){return"_"===t[0]})),c.map(t=>{if(t.startsWith("!"))g.includes(t.slice(1))&&(g=g.filter(e=>e!==t.slice(1)));else{let e=dt(t,{"%user%":this.hass.user.name});g.includes(e)||g.push(e)}});let _={"":0},y=[];i.sections.map(t=>{_[t.id.toString()]=t.section_order,y[t.section_order]=t.id});let b=y[_[t.section_id]+1]||t.project_id,$="";if(r||JSON.stringify(l).includes("%input%")||!s.length&&["actions_content","actions_description"].includes(e)){let i=e.slice(8),s="Please enter a new value for "+e.slice(8)+":",o=t[e.slice(8)]||"";r&&([s,o]=r.split("|")),i=/(?<=%).*(?=%)/.exec(o),i&&t[i]&&(o=o.replaceAll("%"+i+"%",t[i])),$=window.prompt(s,o)||""}let w=(new Date).format(this.myConfig.date_format||"mmm dd H:mm");var v={"%user%":this.hass.user.name,"%date%":`${w}`,"%str_labels%":f};if(l.length||c.length){let e=d.push({type:"item_update",uuid:this.getUUID(),args:{id:t.id,labels:g}})-1,i={};Object.entries(l).map(([s,o])=>{let n=Object.keys(o)[0];["content","description","due","priority","collapsed","assigned_by_uid","responsible_uid","day_order",""].includes(n)&&(i={[n]:dt(o[n],v,t[n],$)},Object.assign(d[e].args,i))})}if(u.length&&this.emphasizeItem(t,u),s.includes("move")){let e=d.push({type:"item_move",uuid:this.getUUID(),args:{id:t.id}})-1;d[e].args[b!==t.project_id?"section_id":"project_id"]=b}let A={actions_close:{type:"item_close",uuid:this.getUUID(),args:{id:t.id}},actions_dbl_close:{},actions_content:{type:"item_update",uuid:this.getUUID(),args:{id:t.id,content:$}},actions_dbl_content:{},actions_description:{type:"item_update",uuid:this.getUUID(),args:{id:t.id,description:$}},actions_dbl_description:{},actions_label:{},actions_dbl_label:{},actions_delete:{type:"item_delete",uuid:this.getUUID(),args:{id:t.id}},actions_dbl_delete:{},actions_uncomplete:{type:"item_uncomplete",uuid:this.getUUID(),args:{id:t.id}},actions_dbl_uncomplete:{}};return Array.from(["close","uncomplete","delete"]).forEach(t=>{!s.includes(t)||null==t&&0===t.length||d.push(A["actions_"+t])}),!s.length&&A[e]&&d.push(A[e]),n&&!window.confirm(n)||p.length&&!p.includes(this.hass.user.name)?[[],[],"",""]:(m.forEach(([e,i,s])=>{(Array.isArray(t[e])&&t[e].includes(i)||t[e]==i)&&this.itemAction(t,s)}),[d,h,o,a])}async showToast(t,e,i=0){if(!t)return;const s=this.shadowRoot.querySelector("#powertodoist-toast");s&&(setTimeout(()=>{s.innerText=s.innerText+" "+t,this.toastText=t,s.style.display="block"},1e3),setTimeout(()=>{s.innerText="",this.toastText="",s.style.display="none"},e+1e3))}emphasizeItem(t,e){var i=this.shadowRoot.querySelector("#item_"+t.id);i&&(i.classList.add("powertodoist-"+e),setTimeout(()=>{i.classList.remove("powertodoist-"+e)},3e3))}async clearSpecialCSSNOTNOTNOT(t){this.shadowRoot.querySelectorAll(".powertodoist-special").forEach(e=>{setTimeout(()=>{e.classList.remove("powertodoist-special"),this.itemsEmphasized=[]},t)})}async processAdds(t){for(const e of t)this.hass.callService("rest_command","todoist",{url:"quick/add",payload:"text="+e})}itemAction(t,e){if(void 0===t)return;e=e.toLowerCase();let i=[],s=[],o=[],n="";[i,s,o,n]=this.buildCommands(t,"actions_"+e),this.showToast(n,3e3),this.processAdds(s),this.hass.callService("rest_command","todoist",{url:"sync",payload:"commands="+JSON.stringify(i)}).then(i=>{switch(e){case"close":this.itemsJustCompleted.length>=this.config.show_completed&&this.itemsJustCompleted.splice(0,this.itemsJustCompleted.length-this.config.show_completed+1),this.itemsJustCompleted.push(t);break;case"content":case"delete":break;case"unlist_completed":case"uncomplete":this.itemsJustCompleted=this.itemsJustCompleted.filter(e=>e.id!=t.id)}}),o.length&&this.hass.callService(o.includes("script.")?"homeassistant":"automation",o.includes("script.")?"turn_on":"trigger",{entity_id:o}).then(function(){console.log("Automation triggered successfully from todoist JS!")}).catch(function(t){console.error("Error triggering automation from todoist JS:",t)}),this.hass.callService("homeassistant","update_entity",{entity_id:this.config.entity})}itemUncompleteNOT(t){let e=[{type:"item_uncomplete",uuid:this.getUUID(),args:{id:t.id}}];this.hass.callService("rest_command","todoist",{url:"sync",payload:"commands="+JSON.stringify(e)}).then(e=>{this.itemUnlistCompleted(t)})}itemUnlistCompleted(t){this.itemsJustCompleted=this.itemsJustCompleted.filter(e=>e.id!=t.id),this.hass.callService("homeassistant","update_entity",{entity_id:this.config.entity})}filterDates(t){if(void 0!==this.myConfig.sort_by_due_date&&!1!==this.myConfig.sort_by_due_date&&t.sort((t,e)=>t.due&&e.due?"ascending"==this.myConfig.sort_by_due_date?new Date(t.due.date).getTime()-new Date(e.due.date).getTime():new Date(e.due.date).getTime()-new Date(t.due.date).getTime():0),void 0!==this.myConfig.filter_show_dates_starting||void 0!==this.myConfig.filter_show_dates_ending){let s=Number(this.myConfig.filter_show_dates_starting),o=Number(this.myConfig.filter_show_dates_ending);var e,i;s="string"!=typeof this.myConfig.filter_show_dates_starting||isNaN(s)?(new Date).getTime()+1*s*60*60*1e3:(new Date).setHours(0,0,0,0)+24*s*60*60*1e3,o="string"!=typeof this.myConfig.filter_show_dates_ending||isNaN(o)?(new Date).getTime()+1*o*60*60*1e3:(new Date).setHours(23,59,59,999)+24*o*60*60*1e3,t=t.filter(t=>{if(!t.due)return!1!==this.myConfig.filter_show_dates_empty;let n=0;t.duration&&(n="day"==t.duration.unit?24*t.duration.amount*60*60*1e3:1*t.duration.amount*1*60*1e3),/^\d{4}-\d{2}-\d{2}$/.test(t.due.date)?(e=new Date(t.due.date+"T23:59:59").getTime(),i=new Date(t.due.date+"T00:00:00").getTime()):(e=new Date(t.due.date).getTime(),i=e),isNaN(o)&&n&&(s-=n,o=(new Date).getTime());let r=!!isNaN(s)||s<=e,a=!!isNaN(o)||o>=i;return r&&a})}return t}filterPriority(t){return void 0!==this.myConfig.sort_by_priority&&!1!==this.myConfig.sort_by_priority&&t.sort((t,e)=>t.priority&&e.priority?"ascending"===this.myConfig.sort_by_priority?t.priority-e.priority:e.priority-t.priority:0),t}render(){this.myConfig=this.parseConfig(this.config);let t=this.hass.states[this.config.entity]||void 0;if(!t)return I`
                <ha-card>
                    <div class="card-header">
                        <div class="name">PowerTodoist Configuration Error</div>
                    </div>
                    <div class="powertodoist-list" style="padding: 20px; text-align: center; color: var(--error-color, red);">
                        <ha-icon icon="mdi:alert-circle-outline" style="width: 64px; height: 64px; margin-bottom: 16px;"></ha-icon>
                        <br>
                        <b>Entity '${this.config.entity}' not found!</b>
                        <br><br>
                        Please make sure the entity exists in Home Assistant.
                        <br>
                        Check the <a href="https://github.com/pgorod/power-todoist-card" target="_blank" style="text-decoration: underline;">README</a> for configuration instructions.
                    </div>
                </ha-card>
            `;var e=this.hass.states["sensor.label_colors"]||void 0;if(!e)return I`
                <ha-card>
                     <div class="powertodoist-list" style="padding: 20px; text-align: center;">
                        <ha-icon icon="mdi:palette-swatch-outline" style="width: 48px; height: 48px; margin-bottom: 10px;"></ha-icon>
                        <br>
                        <b>Waiting for Label Colors...</b>
                        <br><br>
                        If this persists, check if 'sensor.label_colors' is configured.
                    </div>
                </ha-card>
            `;e=e.attributes.label_colors;var i=void 0!==this.config.icons&&4==this.config.icons.length?this.config.icons:["checkbox-marked-circle-outline","circle-medium","plus-outline","trash-can-outline"];let s=t.attributes.items||[];s=this.filterDates(s),s=this.filterPriority(s);let o=[];!this.myConfig.filter_section_id&&this.myConfig.filter_section&&t.attributes.sections.map(t=>{o[t.name]=t.id});let r=this.myConfig.filter_section_id||o[this.myConfig.filter_section]||void 0;var a,d;r&&(s=s.filter(t=>t.section_id===r));var l=[];this.myConfig.filter_labels&&(s=s.filter(t=>(a=d=0,this.myConfig.filter_labels.forEach(e=>{let i=e;i.startsWith("!")?d+=t.labels.includes(i.slice(1)):(a+=t.labels.includes(i)||"*"===i,l.includes(i)||l.push(i))}),0==d&&a>0)));let c=this.config.filter_section||"ToDoist";try{c=t.attributes.sections.find(t=>t.id===r).name}catch(t){}return c=this.config.friendly_name||c,I`<ha-card>
        ${void 0===this.config.show_header||!1!==this.config.show_header?I`<h1 class="card-header">
                <div class="name">${c}
                ${void 0===this.config.show_card_labels||!1!==this.config.show_card_labels?I`${this.renderLabels(void 0,1==l.length?l:[],[],e)}`:I``}
                </div>
                </h1>
                <div id="powertodoist-toast">${this.toastText}</div>`:I``}
        <div class="powertodoist-list">
            ${s.length?s.map(t=>I`<div class="powertodoist-item" .id=${"item_"+t.id}>
                        ${void 0===this.config.show_item_close||!1!==this.config.show_item_close?I`<ha-icon-button
                                class="powertodoist-item-close"
                                @click=${()=>this.itemAction(t,"close")} 
                                @dblclick=${()=>this.itemAction(t,"dbl_close")} >
                                <ha-icon .icon=${"mdi:"+i[0]}></ha-icon>
                            </ha-icon-button>`:I`<ha-icon .icon=${"mdi:"+i[1]}></ha-icon>`}
                            <div class="powertodoist-item-text"><div 
                                    @click=${()=>this.itemAction(t,"content")} 
                                    @dblclick=${()=>this.itemAction(t,"dbl_content")}
                            >
                                <span class="powertodoist-item-content ${this.itemsEmphasized[t.id]?n`powertodoist-special`:n``}" >
                                ${t.content}</span></div>
                                ${t.description?I`<div
                                        @click=${()=>this.itemAction(t,"description")} 
                                        @dblclick=${()=>this.itemAction(t,"dbl_description")}   
                                    ><span class="powertodoist-item-description">${t.description}</span></div>`:I``}
                                ${this.renderLabels(t,[this.myConfig.show_dates&&t.due?ut(t.due.date,"🗓 "+(this.config.date_format?this.config.date_format:"dd-mmm H'h'MM")):[],...t.labels].filter(String),[...1==l.length?l:[],...t.labels.filter(t=>t.startsWith("_"))],e)}
                            </div>
                            ${void 0===this.config.show_item_delete||!1!==this.config.show_item_delete?I`<ha-icon-button
                                    class="powertodoist-item-delete"
                                    @click=${()=>this.itemAction(t,"delete")} 
                                    @dblclick=${()=>this.itemAction(t,"dbl_delete")} >
                                    <ha-icon .icon=${"mdi:"+i[3]}></ha-icon>
                                </ha-icon-button>`:I``}    
                        </div>
                    </div>`):I`<div class="powertodoist-list-empty">No uncompleted tasks!</div>`}
            ${this.renderLowerPart(i)}
        </div>
        ${this.renderFooter()}
        </ha-card>`}renderLabels(t,e,i,s){return void 0!==t&&!1===this.config.show_item_labels&&(e=this.myConfig.show_dates&&t.due?Array(e[0]):[]),I`
            ${e.length-i.length>0?I`<div class="labelsDiv"><ul class="labels">${e.map(e=>i.includes(e)?I``:I`<li 
                        .style=${"background-color: "+at[s.filter(t=>t.name===e).length?s.filter(t=>t.name===e)[0].color:"black"]}
                        @click=${()=>this.itemAction(t,"label")}
                        @dblclick=${()=>this.itemAction(t,"dbl_label")}
                        ><span>${e}</span></li>`)}</ul></div>`:I``}
        `}renderLowerPart(t){return I`
        ${this.config.show_completed&&this.itemsJustCompleted?this.itemsJustCompleted.map(e=>I`<div class="powertodoist-item todoist-item-completed">
                        ${void 0===this.config.show_item_close||!1!==this.config.show_item_close?I`<ha-icon-button
                                class="powertodoist-item-close"
                                @click=${()=>this.itemAction(e,"uncomplete")} 
                                @dblclick=${()=>this.itemAction(e,"dbl_uncomplete")} >
                                <ha-icon .icon=${"mdi:"+t[2]}></ha-icon>
                            </ha-icon-button>`:I`<ha-icon .icon=${"mdi:"+t[0]} ></ha-icon>`}
                        <div class="powertodoist-item-text">
                            ${e.description?I`<span class="powertodoist-item-content">${e.content}</span>
                                    <span class="powertodoist-item-description">${e.description}</span>`:e.content}
                        </div>
                        ${void 0===this.config.show_item_delete||!1!==this.config.show_item_delete?I`<ha-icon-button
                                class="powertodoist-item-delete"
                                @click=${()=>this.itemAction(e,"unlist_completed")} 
                                @dblclick=${()=>this.itemAction(e,"dbl_unlist_completed")} >
                                <ha-icon .icon=${"mdi:"+t[3]}></ha-icon>
                            </ha-icon-button>`:I``}
                    </div>`):I``}
        `}renderFooter(){let t=I`
            ${void 0===this.config.show_item_add||!1!==this.config.show_item_add?I`<input
            id="powertodoist-card-item-add"
            type="text"
            class="powertodoist-item-add"
            placeholder="New item..."
            enterkeyhint="enter"
            @keyup=${this.itemAdd}
        />`:I``}
        `;return this.config.error&&(this.showToast(this.config.error,15e3,3e3),delete this.config.error),t}static get styles(){return n`
            .card-header {
                padding-bottom: unset;
            }
            
            .powertodoist-list {
                display: flex;
                flex-direction: column;
                padding: 15px;
            }
            
            .powertodoist-list-empty {
                padding: 15px;
                text-align: center;
                font-size: 24px;
            }
            
            .powertodoist-item {
                display: flex;
                flex-direction: row;
                line-height: 40px;
            }

            .powertodoist-item-completed {
                              /*  border: 1px solid red; border-width: 1px 1px 1px 1px; */
                color: #808080;
            }
            
            .powertodoist-item-text, .powertodoist-item-text > span, .powertodoist-item-text > div {
                font-size: 16px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                                /* border: 1px solid green; border-width: 1px 1px 1px 1px; */
            }

            .powertodoist-item-content {
                display: block;
                margin: -6px 0 -6px;
                                 /* border: 1px solid red; border-width: 1px 1px 1px 1px; */
            }
            .powertodoist-special {
                font-weight: bolder;
                color: darkred;
            }

            .powertodoist-item-description {
                display: block;
                opacity: 0.5;
                font-size: 12px !important;
                margin: -12px 0;
                                  /* border: 1px solid blue; border-width: 1px 1px 1px 1px; */
            }
            
            .powertodoist-item-close {
                /* border: 1px solid green; border-width: 1px 1px 1px 1px; */
                color: #008000;
            }

            .powertodoist-item-completed .powertodoist-item-close {
                color: #808080;
            }
            
            .powertodoist-item-delete {
                margin-left: auto;
                color: #800000;
                                /* border: 1px solid red; border-width: 1px 1px 1px 1px; */

            }

            .powertodoist-item-completed .powertodoist-item-delete {
                color: #808080;
            }
            
            .powertodoist-item-add {
                width: calc(100% - 30px);
                height: 32px;
                margin: 0 15px 30px;
                padding: 10px;
                box-sizing: border-box;
                border-radius: 5px;
                font-size: 16px;
            }

            .powertodoist-item ha-icon-button ha-icon {
                margin-top: -24px;
            }

            /*General Label Style*/

            ul.labels {
                /* font-family: Verdana,Arial,Helvetica,sans-serif;*/
                font-weight: 100;
                line-height: 13px;
                padding: 0px 0px;
                margin-top: 6px;
                margin-bottom: 6px;
            }
            ul.labels li {
                display: inline;
                color: #CCCCCC;
                float: left;
                margin: -5px 2px 3px 0px;
                height: 15px;
                border-radius: 4px;
            }

            ul.labels li span {
                /* background: url(label_front.gif) no-repeat center left;*/
                font-size: 11px;
                font-weight: normal;
                white-space: nowrap;
                padding: 0px 3px;
                color: white;
                vertical-align: top;
                float: left;
            }

            ul.labels li a {
                padding: 1px 4px 0px 11px;
                padding-top  /***/: 0px9; /*Hack for IE*/
                /* background: url(labelx.gif) no-repeat center right; */
                cursor: pointer;
                border-left: 1px dotted white;
                outline: none;
            }
            #powertodoist-toast {
                position: relative;
                bottom: 20px;
                left: 40%;
                transform: translateX(-50%);
                background-color: #333;
                color: #fff;
                padding: 10px 20px;
                border-radius: 14px;
                border: 1px solid red; 
                /*border-width: 1px 1px 1px 1px;*/
                z-index: 999;
                display: none;
                text-align: center;
                margin: 15px 35px -30px 45px
              }
            .labelsDiv{
                display: inline-flex;
            }

            /*
            ul.labels li a:hover {
                background: url(labelx_hover.gif) no-repeat center right;
            } 
            */

        `}}),window.customCards=window.customCards||[],window.customCards.push({preview:!0,type:"powertodoist-card",name:"PowerTodoist Card",description:"Custom card to interact with Todoist items."}),console.info("%c POWERTODOIST-CARD ","color: white; background: orchid; font-weight: 700");var ct,ht,pt,mt,ut=(ct=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,ht=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,pt=/[^-+\dA-Z]/g,mt=function(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t},function(t,e,i){var s=ut;if(1!=arguments.length||"[object String]"!=Object.prototype.toString.call(t)||/\d/.test(t)||(e=t,t=void 0),t=t?new Date(t):new Date,isNaN(t))throw SyntaxError("invalid date");"UTC:"==(e=String(s.masks[e]||e||s.masks.default)).slice(0,4)&&(e=e.slice(4),i=!0);var o=i?"getUTC":"get",n=t[o+"Date"](),r=t[o+"Day"](),a=t[o+"Month"](),d=t[o+"FullYear"](),l=t[o+"Hours"](),c=t[o+"Minutes"](),h=t[o+"Seconds"](),p=t[o+"Milliseconds"](),m=i?0:t.getTimezoneOffset(),u={d:n,dd:mt(n),ddd:s.i18n.dayNames[r],dddd:s.i18n.dayNames[r+7],m:a+1,mm:mt(a+1),mmm:s.i18n.monthNames[a],mmmm:s.i18n.monthNames[a+12],yy:String(d).slice(2),yyyy:d,h:l%12||12,hh:mt(l%12||12),H:l,HH:mt(l),M:c,MM:mt(c),s:h,ss:mt(h),l:mt(p,3),L:mt(p>99?Math.round(p/10):p),t:l<12?"a":"p",tt:l<12?"am":"pm",T:l<12?"A":"P",TT:l<12?"AM":"PM",Z:i?"UTC":(String(t).match(ht)||[""]).pop().replace(pt,""),o:(m>0?"-":"+")+mt(100*Math.floor(Math.abs(m)/60)+Math.abs(m)%60,4),S:["th","st","nd","rd"][n%10>3?0:(n%100-n%10!=10)*n%10]};return e.replace(ct,function(t){return t in u?u[t]:t.slice(1,t.length-1)})});ut.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"},ut.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]};try{Date.prototype.format=function(t,e){return ut(this,t,e)}}catch(C){console.warn("PowerTodoist: Could not patch Date.prototype.format",C)}
