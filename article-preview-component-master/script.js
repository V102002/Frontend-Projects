const but=document.querySelector("button");
const links=document.querySelector(".socials");
but.addEventListener("click",()=>{
    but.classList.toggle("reverse");
    links.classList.toggle("after");
});
