!function(){const n=document.getElementById("cards"),t=document.body,a=document.getElementById("theme-toggler");"dark"===localStorage.getItem("theme")&&t.classList.add("dark");const e=({img:n,name:t,status:a,nickname:e,birthday:c,occupation:i,portrayed:s})=>`\n    <section class="card">\n        <div class="img-content">\n            <img src="${n}" alt="${t}">\n        </div>\n        <div class="content">\n            <div class="title">\n                <h1>${t}</h1>\n                <span>${"Alive"===a?"🤍":"💀"}</span>\n            </div>\n            <div class="info">\n                <p>Nickname: ${e}</p>\n                <p>Birthday: ${c}</p>\n                <p>Occupation: ${i}</p>\n                <p>Portrayed: ${s}</p>\n            </div>\n        </div>\n    </section>\n    `;a.addEventListener("click",(()=>{t.classList.toggle("dark"),localStorage.setItem("theme",t.classList.contains("dark")?"dark":"light")})),(async()=>{const t=await fetch("https://www.breakingbadapi.com/api/characters"),a=(await t.json()).map((n=>e(n))).join(" ");n.innerHTML=a})()}();
//# sourceMappingURL=index.eeb2c836.js.map