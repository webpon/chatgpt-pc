if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-08214dba.css",revision:null},{url:"assets/index-4efaa0cf.js",revision:null},{url:"assets/index-55b223b7.js",revision:null},{url:"assets/index-a6c9935d.css",revision:null},{url:"assets/index-e423130f.js",revision:null},{url:"assets/index-efb1ffb5.js",revision:null},{url:"assets/index-f02684cc.js",revision:null},{url:"index.html",revision:"7521447e44903b9805825731e0957594"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"pwa-192x192.png",revision:"e8edb535529201a3b8a82f2fe3b07b09"},{url:"pwa-512x512.png",revision:"2a5ea0072f596f4b1006b3943aac2a9e"},{url:"manifest.webmanifest",revision:"2ba951a6a1cfe633cb13aedeb311f672"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));