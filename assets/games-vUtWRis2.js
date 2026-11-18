import{j as e,R as c,r as n}from"./client-C2z1imTY.js";/* empty css               */const r=[{id:"afterglow",title:"AFTERGLOW 艺术家晚宴",image:"/assets/games/afterglow.webp",href:"https://xianyun790-afk.github.io/artist-dinner-game/"},{id:"horror",title:"恐怖童谣",image:"/assets/games/horror.webp",href:"https://xianyun790-afk.github.io/kongbu-tongyao/"},{id:"huaijie",title:"槐树街小剧场",image:"/assets/games/huaijie.webp",href:"https://xianyun790-afk.github.io/huai-tree-theatre/"}],o=639,l=73,g=r.length*(o+l),p=`
.gd{position:absolute;inset:0;background:#fff}
.gd-sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.gd-back{position:absolute;left:40px;top:34px;z-index:3;display:flex;align-items:center;gap:8px;font-family:"Bitcount Grid Single","PingFang SC",sans-serif;font-size:18px;letter-spacing:.04em;color:#000;opacity:.5;transition:opacity .2s;text-decoration:none}
.gd-back:hover{opacity:1}
.gd-logo{position:absolute;left:50%;top:119px;height:30px;width:auto;transform:translateX(-50%)}
.gd-head{position:absolute;left:0;top:180px;width:1920px;height:115px;display:flex;align-items:center;justify-content:center;gap:44px}
.gd-rule{display:block;width:347px;height:1px;background:#c0c0c0;flex:none}
.gd-title{display:block;width:495px;height:115px}
.gd-marquee{position:absolute;left:0;top:446px;width:1920px;height:320px;overflow:hidden}
.gd-track{display:flex;gap:${l}px;width:max-content;margin-left:-79px;animation:gdscroll 44s linear infinite;will-change:transform}
.gd-track:hover{animation-play-state:paused}
.gd-group{display:flex;gap:${l}px}
.gd-card{position:relative;flex:none;display:block;width:${o}px;height:320px;overflow:hidden;background:#f1f1f1}
.gd-card img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .9s cubic-bezier(.22,.61,.36,1)}
.gd-card:hover img{transform:scale(1.04)}
.gd-card-title{position:absolute;left:16px;bottom:14px;padding:6px 12px;background:rgba(0,0,0,.66);color:#fff;font-size:16px;letter-spacing:.02em;opacity:0;transition:opacity .3s}
.gd-card:hover .gd-card-title{opacity:1}
.gd-arrow{position:absolute;left:0;top:858px;width:1920px;text-align:center;font-size:22px;line-height:1;color:#000}
.gd-hint{position:absolute;left:0;top:888px;width:1920px;margin:0;text-align:center;font-size:40px;line-height:44px;letter-spacing:.06em;color:#000}
@keyframes gdscroll{from{transform:translateX(0)}to{transform:translateX(-${g}px)}}
`;function m(){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:p}),e.jsxs("div",{className:"gd",children:[e.jsx("h1",{className:"gd-sr",children:"互动游戏"}),e.jsx("a",{className:"gd-back",href:"/#work",children:"← 返回作品"}),e.jsx("img",{className:"gd-logo",src:"/assets/games/nia-logo.webp",alt:"NIA"}),e.jsxs("div",{className:"gd-head",children:[e.jsx("span",{className:"gd-rule"}),e.jsx("img",{className:"gd-title",src:"/assets/games/gd-title.png",alt:"互动游戏"}),e.jsx("span",{className:"gd-rule"})]}),e.jsx("div",{className:"gd-marquee",children:e.jsx("div",{className:"gd-track",children:[0,1].map(a=>e.jsx("div",{className:"gd-group",children:r.map(t=>e.jsxs("a",{className:"gd-card",href:t.href,target:"_blank",rel:"noopener noreferrer","aria-label":t.title,children:[e.jsx("img",{src:t.image,alt:t.title,loading:"lazy",decoding:"async"}),e.jsx("span",{className:"gd-card-title",children:t.title})]},`${a}-${t.id}`))},a))})}),e.jsx("p",{className:"gd-arrow","aria-hidden":"true",children:"▲"}),e.jsx("p",{className:"gd-hint",children:"点击即可跳转游戏"})]})]})}const x=`
.gm{min-height:100vh;background:#fff;padding:0 0 48px;font-family:"PingFang SC",-apple-system,BlinkMacSystemFont,sans-serif;color:#000}
.gm-back{display:inline-flex;align-items:center;margin:18px 20px 0;font-family:"Bitcount Grid Single","PingFang SC",sans-serif;font-size:14px;letter-spacing:.04em;color:#000;opacity:.55;text-decoration:none}
.gm-head{padding:10px 20px 0;text-align:center}
.gm-logo{display:block;height:22px;width:auto;margin:0 auto}
.gm-title-row{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:16px}
.gm-rule{flex:1 1 auto;max-width:64px;height:1px;background:#c0c0c0}
.gm-title{display:block;width:58vw;max-width:250px;height:auto}
.gm-marquee{overflow:hidden;margin-top:28px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}
.gm-track{display:flex;gap:16px;width:max-content;animation:gm 26s linear infinite}
.gm-group{display:flex;gap:16px}
.gm-card{flex:none;display:block;width:78vw;max-width:520px;aspect-ratio:2/1;overflow:hidden;background:#f1f1f1;border-radius:2px}
.gm-card img{width:100%;height:100%;object-fit:cover;display:block}
.gm-hint{margin:28px 20px 0;text-align:center;font-size:15px;letter-spacing:.04em;line-height:1.5}
.gm-hint span{display:block;font-size:10px;margin-bottom:6px}
.gm-list{list-style:none;margin:24px 20px 0;padding:0;border-top:1px solid #e8e8e8}
.gm-list li{border-bottom:1px solid #e8e8e8}
.gm-list a{display:flex;justify-content:space-between;align-items:center;padding:15px 2px;font-size:15px;color:#000;text-decoration:none}
.gm-list a:active{opacity:.55}
@keyframes gm{to{transform:translateX(calc(-50% - 8px))}}
`;function h(){return e.jsxs("div",{className:"gm",children:[e.jsx("style",{children:x}),e.jsx("a",{className:"gm-back",href:"/#work",children:"← 返回作品"}),e.jsxs("header",{className:"gm-head",children:[e.jsx("img",{className:"gm-logo",src:"/assets/games/nia-logo.webp",alt:"NIA"}),e.jsxs("div",{className:"gm-title-row",children:[e.jsx("span",{className:"gm-rule"}),e.jsx("img",{className:"gm-title",src:"/assets/games/gd-title.png",alt:"互动游戏"}),e.jsx("span",{className:"gm-rule"})]})]}),e.jsx("div",{className:"gm-marquee",children:e.jsx("div",{className:"gm-track",children:[0,1].map(a=>e.jsx("div",{className:"gm-group",children:r.map(t=>e.jsx("a",{className:"gm-card",href:t.href,target:"_blank",rel:"noopener noreferrer","aria-label":t.title,children:e.jsx("img",{src:t.image,alt:t.title,loading:"lazy",decoding:"async"})},`${a}-${t.id}`))},a))})}),e.jsxs("p",{className:"gm-hint",children:[e.jsx("span",{"aria-hidden":"true",children:"▲"}),"点击即可跳转游戏"]}),e.jsx("ul",{className:"gm-list",children:r.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.href,target:"_blank",rel:"noopener noreferrer",children:[e.jsx("span",{children:a.title}),e.jsx("span",{"aria-hidden":"true",children:"↗"})]})},a.id))})]})}function f(){const a=n.useRef(null),[t,s]=n.useState(Math.min(window.innerWidth,1920)/1920);return n.useEffect(()=>{if(!a.current)return;const i=new ResizeObserver(([d])=>s(d.contentRect.width/1920));return i.observe(a.current),()=>i.disconnect()},[]),e.jsx("div",{ref:a,className:"scene",style:{"--scene-scale":t},children:e.jsx("div",{className:"canvas",children:e.jsx(m,{})})})}function u(){const[a,t]=n.useState(()=>window.matchMedia("(max-width: 899px)").matches);return n.useEffect(()=>{const s=window.matchMedia("(max-width: 899px)"),i=()=>t(s.matches);return i(),s.addEventListener("change",i),()=>s.removeEventListener("change",i)},[]),a?e.jsx(h,{}):e.jsx(f,{})}c.createRoot(document.getElementById("root")).render(e.jsx(u,{}));
