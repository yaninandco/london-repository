const menuToggle=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");if(menuToggle){menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)})}
document.querySelectorAll(".dropdown-btn").forEach(btn=>btn.addEventListener("click",e=>{if(window.innerWidth<=850){e.preventDefault();btn.parentElement.classList.toggle("open")}}));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));
document.querySelectorAll("#year").forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector("#quoteForm");if(form){form.addEventListener("submit",e=>{e.preventDefault();alert("The form is ready for a form service or Cloudflare Worker endpoint. Connect your preferred email/form backend before launch.");});}
