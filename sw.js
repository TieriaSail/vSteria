if(!self.define){let s,n={};const e=(e,l)=>(e=new URL(e+".js",l).href,n[e]||new Promise((n=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=n,document.head.appendChild(s)}else s=e,importScripts(e),n()})).then((()=>{let s=n[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let u={};const a=s=>e(s,r),o={module:{uri:r},exports:u,require:a};n[r]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-4ee7f24a"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/arrow_container.2c596d8e.png",revision:null},{url:"assets/Cant Help Falling in Love with You.518f3745.mp3",revision:null},{url:"assets/favicon.779e0134.ico",revision:null},{url:"assets/I Found The Love.b9306d1f.mp3",revision:null},{url:"assets/index-legacy.d5fce972.js",revision:null},{url:"assets/index.28219ab2.css",revision:null},{url:"assets/index.a53d684b.js",revision:null},{url:"assets/Iris_崎.f4386f6f.png",revision:null},{url:"assets/jing.de6b5eb2.png",revision:null},{url:"assets/juanzhoufanye.f11e8076.png",revision:null},{url:"assets/juanzhoushangban.68f74f5a.png",revision:null},{url:"assets/KYOKAKO.af4b8a95.png",revision:null},{url:"assets/le.b3220ff4.png",revision:null},{url:"assets/liwu.27d9ac4a.png",revision:null},{url:"assets/men.9164c06d.png",revision:null},{url:"assets/mubu.12b1bad6.png",revision:null},{url:"assets/op.56100ad3.mp4",revision:null},{url:"assets/polyfills-legacy.f72ccfa5.js",revision:null},{url:"assets/step2-bg.825cc40d.png",revision:null},{url:"assets/vv.f0e31430.png",revision:null},{url:"assets/wink.773fe9b1.png",revision:null},{url:"assets/winmusic.84542926.mp3",revision:null},{url:"assets/wtm.a5edb2c4.png",revision:null},{url:"assets/youmen.3a06c09d.png",revision:null},{url:"assets/不可燃_（1）.8166490a.png",revision:null},{url:"assets/不可燃_（2）.08afd2b8.png",revision:null},{url:"assets/不可燃_（3）.54f577d7.png",revision:null},{url:"assets/东东咚咚哒哒哒.1396f6ae.png",revision:null},{url:"assets/尹不聃-.7b5d8cab.png",revision:null},{url:"assets/借我玩两天.5a32075b.png",revision:null},{url:"assets/冷冻白开水.9984c478.png",revision:null},{url:"assets/唐失宋辞（1）.dfcb62e0.png",revision:null},{url:"assets/唐失宋辞（2）.78ea4475.png",revision:null},{url:"assets/唐失宋辞（3）.bae01b13.png",revision:null},{url:"assets/噬云轩（1）.78f0b4ba.png",revision:null},{url:"assets/噬云轩（2）.2a23e458.png",revision:null},{url:"assets/噬云轩（3）.d896daba.png",revision:null},{url:"assets/声带（1）.b60858c3.png",revision:null},{url:"assets/声带（2）.1cdb8054.png",revision:null},{url:"assets/壹库塔里安.e74837f1.png",revision:null},{url:"assets/微微.12fabe17.mp3",revision:null},{url:"assets/末路狂薇.1c5151f3.png",revision:null},{url:"assets/本节目由薇他命赞助播出.59fbfb6f.wav",revision:null},{url:"assets/清源正则-.62396d6a.png",revision:null},{url:"assets/蜜桃冰茶（1）.0162f2bd.png",revision:null},{url:"assets/蜜桃冰茶（2）.dc43e634.png",revision:null},{url:"assets/蜜桃冰茶（3）.0913b729.png",revision:null},{url:"assets/蜜桃冰茶（4）.5eb90115.png",revision:null},{url:"assets/蜜桃冰茶（5）.27a89360.png",revision:null},{url:"assets/零四号无证流动餐车.292d2d29.png",revision:null},{url:"index.html",revision:"f7e3950330af0e65350ea743c96fb5bf"},{url:"manifest.webmanifest",revision:"768099ecd1241f210a8c2afb8d977781"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
