import{a as o,p as u}from"./chunk-PVWAREVJ-BeAWct5i.js";import{c as h}from"./context-kPolJz0x.js";import"./Canvas-C5qiJpk2.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,s)=>s?s.toUpperCase():r.toLowerCase()),m=t=>{const e=g(t);return e.charAt(0).toUpperCase()+e.slice(1)},p=(...t)=>t.filter((e,r,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===r).join(" ").trim(),k=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=o.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:a="",children:n,iconNode:l,...c},d)=>o.createElement("svg",{ref:d,...E,width:e,height:e,stroke:t,strokeWidth:s?Number(r)*24/Number(e):r,className:p("lucide",a),...!n&&!k(c)&&{"aria-hidden":"true"},...c},[...l.map(([f,i])=>o.createElement(f,i)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(t,e)=>{const r=o.forwardRef(({className:s,...a},n)=>o.createElement(x,{ref:n,iconNode:e,className:p(`lucide-${C(m(t))}`,`lucide-${t}`,s),...a}));return r.displayName=m(t),r};function L(t,e,r=globalThis,s){const a=o.useRef(e);a.current=e,o.useEffect(()=>{const n=l=>a.current(l);return r.addEventListener(t,n,s),()=>r.removeEventListener(t,n,s)},[t,r,s])}function b(t,e){o.useEffect(()=>{function r(s){e.current?.contains(s.target)||t(s)}return window.addEventListener("click",r),()=>{window.removeEventListener("click",r)}},[t,e])}function $({children:t,target:e,openOn:r="click"}){const[s,a]=o.useState(!1),n=o.useRef(null),l=o.useRef(null),c=o.useCallback((i=!s)=>a(i),[s]);b(()=>a(!1),l),L("keydown",i=>{s&&i.key==="Escape"&&a(!1)});let d=o.useMemo(()=>{if(r!=="hover")return{};let i=null;function w(){clearTimeout(i),c(!0)}function v(){i=setTimeout(()=>c(!1),250)}return{onMouseEnter:w,onMouseLeave:v}},[r,c]),f=o.useMemo(()=>r==="click"?{onClick:i=>{i.stopPropagation(),c()}}:{},[r,c]);return u.jsxs("div",{ref:l,...d,children:[u.jsx("div",{className:"w-min cursor-pointer",...f,children:e}),u.jsx("div",{className:"relative",children:u.jsx("div",{ref:n,className:h("absolute top-1 flex items-center justify-center overflow-hidden rounded-lg shadow-xl transition",!s&&"hidden"),children:t})})]})}export{$ as D,b as a,A as c,L as u};
