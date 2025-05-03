exports.id=516,exports.ids=[516],exports.modules={4450:(e,a,r)=>{Promise.resolve().then(r.bind(r,6673)),Promise.resolve().then(r.bind(r,7798)),Promise.resolve().then(r.t.bind(r,114,23))},7625:(e,a,r)=>{Promise.resolve().then(r.t.bind(r,3724,23)),Promise.resolve().then(r.t.bind(r,5365,23)),Promise.resolve().then(r.t.bind(r,4900,23)),Promise.resolve().then(r.t.bind(r,4714,23)),Promise.resolve().then(r.t.bind(r,5392,23)),Promise.resolve().then(r.t.bind(r,8898,23))},6673:(e,a,r)=>{"use strict";r.r(a),r.d(a,{ScrollProgress:()=>ScrollProgress});var t=r(784),s=r(8715),n=r(8453),i=r(9885);function ScrollProgress(){let{scrollYProgress:e}=(0,s.v)(),[a,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let handleScroll=()=>{r(window.scrollY>100)};return window.addEventListener("scroll",handleScroll),handleScroll(),()=>window.removeEventListener("scroll",handleScroll)},[]),t.jsx(n.E.div,{className:`fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50 transition-opacity duration-300 ${a?"opacity-100":"opacity-0"}`,style:{scaleX:e,transition:"transform 0.1s linear"}})}},7798:(e,a,r)=>{"use strict";r.r(a),r.d(a,{ThemeProvider:()=>ThemeProvider});var t=r(784),s=r(2288);function ThemeProvider({children:e,...a}){return t.jsx(s.f,{...a,enableSystem:!0,attribute:"class",children:e})}},3922:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>RootLayout,metadata:()=>j});var t=r(4656),s=r(1849),n=r.n(s);r(7272);var i=r(5153);let l=(0,i.createProxy)(String.raw`C:\Users\Feitan\Desktop\velora.studio\components\theme-provider.tsx`),{__esModule:o,$$typeof:c}=l;l.default;let d=l.ThemeProvider;var m=r(9704),p=r.n(m),h=r(2282),u=r.n(h),v=r(6107),f=r.n(v),b=r(8624),x=r.n(b);let g=(0,i.createProxy)(String.raw`C:\Users\Feitan\Desktop\velora.studio\components\scroll-progress.tsx`),{__esModule:y,$$typeof:P}=g;g.default;let S=g.ScrollProgress;var w=r(554),C=r.n(w);let j={title:"Velora Studio",description:"A modern web studio",viewport:{width:"device-width",initialScale:1,maximumScale:1}};function RootLayout({children:e}){return(0,t.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,className:`${p().variable} ${u().variable} ${f().variable} ${x().variable} min-h-screen font-sans antialiased ${n().variable} scroll-smooth`,children:[t.jsx("head",{children:t.jsx(C(),{id:"cal-script",strategy:"lazyOnload",children:`
            (function (C, A, L) { 
              let p = function (a, ar) { a.q.push(ar); }; 
              let d = C.document; 
              C.Cal = C.Cal || function () { 
                let cal = C.Cal; 
                let ar = arguments; 
                if (!cal.loaded) { 
                  cal.ns = {}; 
                  cal.q = cal.q || []; 
                  d.head.appendChild(d.createElement("script")).src = A; 
                  cal.loaded = true; 
                } 
                if (ar[0] === L) { 
                  const api = function () { p(api, arguments); }; 
                  const namespace = ar[1]; 
                  api.q = api.q || []; 
                  if(typeof namespace === "string"){
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else p(cal, ar); 
                  return;
                } 
                p(cal, ar); 
              }; 
            })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "30min", {origin:"https://cal.com"});
            Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
          `})}),t.jsx("body",{className:`min-h-screen bg-background font-sans antialiased ${n().variable}`,children:(0,t.jsxs)(d,{attribute:"class",defaultTheme:"dark",enableSystem:!0,children:[t.jsx(S,{}),t.jsx("div",{className:"relative flex min-h-screen flex-col",children:e})]})})]})}},7272:()=>{}};