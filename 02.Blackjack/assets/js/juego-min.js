const moduleBJ=function(){"use strict";let e=[];const t=["C","D","H","S"],n=["A","J","Q","K"];let s=[];const l=document.querySelectorAll("small"),a=document.querySelectorAll(".divCards"),r=(t=2)=>{e=o(),s=[];for(let e=0;e<t;e++)s.push(0);getBtn.disabled=!1,stopBtn.disabled=!1,l.forEach(e=>e.innerText=0),a.forEach(e=>e.innerHTML="")},o=()=>{e=[];for(let n=2;n<=10;n++)for(let s of t)e.push(n+s);for(let s of n)for(let n of t)e.push(s+n);return _.shuffle(e)},d=()=>{if(0===e.length)throw"No hay más cartas en el deck.";return e.pop()},c=(e,t)=>(s[t]=s[t]+(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e),l[t].innerText=s[t],s[t]),i=(e,t)=>{const n=document.createElement("img");n.src=`assets/cartas/${e}.png`,n.className="animate__animated animate__slideInLeft",n.classList.add("carta"),a[t].append(n)},u=e=>{do{const e=d();c(e,s.length-1),i(e,s.length-1)}while(s[s.length-1]<e&&e<=21);getBtn.disabled=!0,stopBtn.disabled=!0,setTimeout(()=>{s[s.length-1]===s[0]?alert("EMPATADIS"):s[s.length-1]>21?alert("WINNER WINNER CHICKEN DINNER!1"):alert("NOO PERDISTES :CC")},500)};return newBtn.addEventListener("click",()=>{r()}),getBtn.addEventListener("click",()=>{const e=d();c(e,0),i(e,0),s[0]>=21&&u(s[0])}),stopBtn.addEventListener("click",()=>{getBtn.disabled=!0,stopBtn.disabled=!0,u(s[0])}),{newGame:r}}();