const buttons=document.querySelectorAll(".filters button"),cards=document.querySelectorAll(".card");
buttons.forEach(btn=>btn.addEventListener("click",()=>{buttons.forEach(b=>b.classList.remove("active"));btn.classList.add("active");const f=btn.dataset.filter;cards.forEach(c=>c.classList.toggle("hidden",f!=="all"&&!c.classList.contains(f)));}));
const modal=document.getElementById("modal"),modalImg=document.getElementById("modalImg");
cards.forEach(c=>c.addEventListener("click",()=>{modalImg.src=c.dataset.img;modal.classList.add("open");}));
document.getElementById("closeModal").addEventListener("click",()=>modal.classList.remove("open"));
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});
document.addEventListener("mousemove",e=>{const g=document.querySelector(".cursor-glow");g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});