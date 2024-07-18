const num=document.querySelectorAll(".rating");
const container1=document.querySelector(".container");
const container2=document.querySelector(".container2");
const tn=document.querySelector("#select");
for (let index = 0; index < num.length; index++) {
    num[index].addEventListener("click",()=>{
        num.forEach(num=>num.classList.remove("click"));
        num[index].classList.add("click");
        tn.textContent=index+1+" ";
    }); 
}
const button=document.getElementsByTagName("button")[0];

button.addEventListener("click",()=>{
    if (container1.classList.contains('hidden')) {
        container1.classList.remove('hidden');
        container2.classList.remove('visible');
    } else {
        container1.classList.add('hidden');
        container2.classList.add('visible');
    }
    
});