const menuToggle=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");if(menuToggle){menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)})}
document.querySelectorAll(".dropdown-btn").forEach(btn=>btn.addEventListener("click",e=>{if(window.innerWidth<=850){e.preventDefault();btn.parentElement.classList.toggle("open")}}));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));
document.querySelectorAll("#year").forEach(el=>el.textContent=new Date().getFullYear());

const FORM_ENDPOINT="https://formsubmit.co/ajax/hello@kwcemergencyrestorations.ca";
document.querySelectorAll(".quote-form").forEach(form=>{
  form.addEventListener("submit",async e=>{
    e.preventDefault();
    const btn=form.querySelector('button[type="submit"]');
    const btnLabel=btn?btn.innerHTML:"";
    if(btn){btn.disabled=true;btn.textContent="Sending...";}
    try{
      const res=await fetch(FORM_ENDPOINT,{
        method:"POST",
        headers:{"Content-Type":"application/json",Accept:"application/json"},
        body:JSON.stringify(Object.fromEntries(new FormData(form)))
      });
      if(!res.ok)throw new Error("Request failed");
      form.innerHTML='<p class="form-success">Thanks — we\'ve received your request and will follow up shortly.</p>';
    }catch(err){
      if(btn){btn.disabled=false;btn.innerHTML=btnLabel;}
      alert("Sorry, something went wrong sending your request. Please call us at 647-607-6347.");
    }
  });
});
