!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),l=document.querySelector("body");function n(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"));l.style.backgroundColor=e}t.disabled=!0,l.style.display="flex",l.style.flexDirection="column",l.style.alignItems="center",l.style.gap="20px",e.style.padding="40px",e.style.textTransform="uppercase",e.style.width="150px",e.style.fontSize="20px",t.style.padding="40px",t.style.textTransform="uppercase",t.style.width="150px",t.style.fontSize="20px",e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,timerId=setInterval((function(){n()}),1e3),console.log("Почав таймер у ID: ".concat(timerId))})),t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,clearInterval(timerId),console.log("Зупинив таймер у ID: ".concat(timerId))}))}();
//# sourceMappingURL=01-color-switcher.a047d3a5.js.map