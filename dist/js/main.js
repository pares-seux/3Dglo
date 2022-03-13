(()=>{"use strict";const e=e=>{(()=>{switch(e.type){case"text":return e.value.trim().length<3||/^([^\s]*\s){3,}[^\s]*$/.test(e.value.trim().replace(/\s+/g," "))?(e.classList.add("error"),e.classList.remove("success"),!1):(e.classList.remove("error"),e.classList.add("success"),!0);case"email":return/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(e.value.trim())?(e.classList.remove("error"),e.classList.add("success"),!0):(e.classList.add("error"),e.classList.remove("success"),!1);case"tel":/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(e.value.trim())?(e.classList.remove("error"),e.classList.add("success")):(e.classList.add("error"),e.classList.remove("success"))}})()},t=({formId:t,someElem:a=[]})=>{const r=document.getElementById(t);try{if(!r)throw new Error("Верните форму");r.addEventListener("submit",(t=>{t.preventDefault(),(()=>{const t=r.querySelectorAll("input"),s=new FormData(r),o={};var c;r.append(statusBlock),s.forEach(((e,t)=>{o[t]=e})),a.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?o[e.id]=t.textContent:"input"===e.type&&(o[e.id]=t.value)})),(t=>{let a=!0;return t.forEach((t=>{e(t),t.classList.contains("error")&&(a=!1)})),a})(t)&&(c=o,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{console.log(e),t.forEach((e=>{e.value="",e.classList.remove("success")}))})).catch((e=>{console.log(e)}))})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-days"),a=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),s=document.getElementById("timer-seconds");let o;const c=()=>{let e=(()=>{let e=new Date("17 march 2022").getTime(),t=(new Date).getTime();if(t>e)return{timeRemaining:-1,hours:"00",minutes:"00",seconds:"00"};let a=(e-t)/1e3;return{timeRemaining:a,days:Math.floor(a/60/60/24),hours:Math.floor(a/60/60%24),minutes:Math.floor(a/60%60),seconds:Math.floor(a%60)}})();var c,l;e.days>0?t.textContent=(l=["день","дня","дней"],1===(c=e.days)||c%10==1&&11!==c?`${c} ${l[0]}`:c>1&&c<5||c%10>1&&c%10<5&&c>20?`${c} ${l[1]}`:`${c} ${l[2]}`):t.textContent="",a.textContent=(e.hours+"").padStart(2,"0"),r.textContent=(e.minutes+"").padStart(2,"0"),s.textContent=(e.seconds+"").padStart(2,"0"),e.timeRemaining<0&&clearInterval(o)};c(),o=setInterval((()=>{c()}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),a=t.querySelector(".close-btn"),r=document.querySelector("main>a"),s=e=>{let t=e.getAttribute("href");document.getElementById(t.slice(1)).scrollIntoView({block:"center",behavior:"smooth"})},o=()=>{t.classList.toggle("active-menu")};document.addEventListener("click",(c=>{c.target.closest(".active-menu")?(c.preventDefault(),c.target===a?o():"a"===c.target.localName&&(s(c.target),o())):((t.classList.contains("active-menu")||c.target===e||c.target.closest(".menu"))&&(c.preventDefault(),o()),c.target!==r&&r!==c.target.parentElement||(c.preventDefault(),s(r)))}))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-content"),a=document.querySelectorAll(".popup-btn");let r;a.forEach((a=>{a.addEventListener("click",(()=>{e.style.display="block",console.log(screen.width),+screen.width>768&&(r=0,t.style.opacity=0,function({timing:e,draw:t,duration:a}){let r=performance.now();requestAnimationFrame((function s(o){let c=(o-r)/a;c>1&&(c=1);let l=e(c);t(l),c<1&&requestAnimationFrame(s)}))}({duration:1e3,timing:e=>e,draw(e){t.style.opacity=100*e+"%"}}),t.style.opacity="")}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),document.addEventListener("input",(t=>{if(t.target.classList.contains("calc-item"))t.target.value=t.target.value.replace(/[\D]+/,"");else switch(t.target.type){case"text":if(t.target.value=t.target.value.replace(/[^а-яА-ЯёЁ\s-]+/g,""),"user_name"===t.target.name&&(t.target.classList.contains("error")||t.target.classList.contains("success"))){let a=document.getElementById(t.target.id);e(a)}break;case"email":if(t.target.value=t.target.value.replace(/[^a-zA-z0-9@-_\.!~\*\']+/g,""),t.target.classList.contains("error")||t.target.classList.contains("success")){let a=document.getElementById(t.target.id);e(a)}break;case"tel":if(t.target.value=t.target.value.replace(/[^\d-()+]+/g,""),t.target.classList.contains("error")||t.target.classList.contains("success")){let a=document.getElementById(t.target.id);e(a)}}})),document.addEventListener("blur",(e=>{if("input"===e.target.localName&&!e.target.classList.contains("calc-item"))switch(e.target.type){case"text":e.target.value=e.target.value.replace(/(^[^а-яА-ЯёЁ]+)|([^а-яА-ЯёЁ]+)$/g,"").replace(/([-()@_.!~*'])(?=[-()@_.!~*']*\1)/g,"").replace(/\s+/g," ").replace(/(^|\s)\S/g,(e=>e.toUpperCase()));break;case"email":case"tel":e.target.value=e.target.value.replace(/([-()@_.!~*'])(?=[-()@_.!~*']*\1)/g,"")}}),!0),document.addEventListener("invalid",(e=>{e.preventDefault(),"input"!==e.target.localName||e.target.classList.contains("calc-item")||e.target.classList.add("error")}),!0),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),a[t].classList.remove("d-none")):(e.classList.remove("active"),a[t].classList.add("d-none"))}))}}))})(),((e,t)=>{let a,r,s,o,c=document.querySelector(".portfolio-dots"),l=0;const n=(e,t,a)=>{e[t].classList.remove(a)},i=(e,t,a)=>{e[t].classList.add(a)},d=()=>{n(o,l,"portfolio-item-active"),n(r,l,"dot-active"),l++,l>=o.length&&(l=0),i(o,l,"portfolio-item-active"),i(r,l,"dot-active")},u=(e=1500)=>{a=setInterval(d,e)};s=document.querySelector("."+e),console.log(s,t),null!==s?(o=s.querySelectorAll("."+t),null!==s?(c.innerHTML=Array(o.length+1).join("<li class='dot'></li>"),c=document.querySelector(".portfolio-dots"),r=c.querySelectorAll(".dot"),r[l].classList.add("dot-active"),u(2e3),s.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(n(o,l,"portfolio-item-active"),n(r,l,"dot-active"),e.target.matches("#arrow-right")?l++:e.target.matches("#arrow-left")?l--:e.target.classList.contains("dot")&&r.forEach(((t,a)=>{e.target===t&&(l=a)})),l>=o.length&&(l=0),l<0&&(l=o.length-1),i(o,l,"portfolio-item-active"),i(r,l,"dot-active"))})),s.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(a)}),!0),s.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&u(2e3)}),!0)):console.log("error")):console.log("error")})("portfolio-content","portfolio-item"),((e=100)=>{const t=document.querySelector(".calc-block"),a=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),s=document.querySelector(".calc-count"),o=document.querySelector(".calc-day"),c=document.getElementById("total");let l,n,i=0;t.addEventListener("blur",(t=>{t.target!==a&&t.target!==r&&t.target!==s&&t.target!==o||(()=>{const t=+a.options[a.selectedIndex].value,d=+r.value;let u=0,m=1,g=1;s.value>1&&(m+=+s.value/10),o.value<5&&o.value?g=2:o.value<10&&o.value&&(g=1.5),u=a.value&&r.value?e*t*d*m*g:0,l=(e=>{const t=(e-+c.textContent)/100;return function(){n=requestAnimationFrame(l),i<e||i>e?(i+=t,c.textContent=i):cancelAnimationFrame(n)}})(u),l()})()}),!0)})(),t({formId:"form1",someElement:[{type:"block",id:"total"}]}),t({formId:"form2",someElement:[{type:"block",id:"total"}]}),t({formId:"form3",someElement:[{type:"block",id:"total"}]})})();