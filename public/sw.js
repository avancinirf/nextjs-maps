if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0b7b90cd.539b91aab173d0302c2a.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/15.5767685fb761f4ff70ab.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/93a0e03811f15329e8595a2c2b99fe49e58c0483.8c59130a989d7403f7ad.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/976863da2d8d864f0c2d4a98a3aa25169944d37f.a0861fea2504f9438b00.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/97c988d16d0bc80970c6863d20822cb9c7f52d3e.3c030285bb2215b5bd2c.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/f5e56d3f88d11bc08ca07b6cd0e262e20632c39a.bcc509f3071d18bbd112.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/framework.349d8128c43083da4feb.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/main-bf7cca36931937f9b768.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/pages/%5Bslug%5D-a21c69e92c72375b03d4.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/pages/_app-4215e8f2503f847575cd.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/pages/_documents-7ed1da076a656d9e7429.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/pages/_error-9ec42c89179ef9e7e5f8.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/pages/index-65b46c5d85f82caa9c7a.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/pages/maps-566838ea520e4dc4ae3a.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/polyfills-f9f7258084ca4d945e7b.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/chunks/webpack-73fb8686e7baffead2e4.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/nA7M-02GGivU_dESfmYB9/_buildManifest.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/_next/static/nA7M-02GGivU_dESfmYB9/_ssgManifest.js",revision:"nA7M-02GGivU_dESfmYB9"},{url:"/img/cover.png",revision:"93d8e53a82ab29ef372c9f2afd642ea5"},{url:"/img/icon-640.png",revision:"781d841947d3868f0e2ed9f50c3d72de"},{url:"/img/illustration.svg",revision:"a1ef207bbadd5748f81de0fecbdb5f6a"},{url:"/img/logo.svg",revision:"6239b2e9bded15aa708ec712e3da83ec"},{url:"/manifest.json",revision:"535dbaabb5c6aefee339886bb32e4f82"},{url:"/robots.txt",revision:"722ace96eca10aafb63c96e62c5c512e"},{url:"/sitemap.xml",revision:"0529e6a18d7ff3586dfa1c7b3cc61224"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
