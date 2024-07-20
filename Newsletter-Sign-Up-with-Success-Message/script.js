const sub=document.getElementById("Sub");
const GoHome=document.getElementsByClassName("Go-back")[0];
const wrong=document.getElementById("wrong");
const placeholder=document.getElementsByTagName("input")[0];
var email=placeholder.value;
const container=document.querySelector(".container");
const container2=document.querySelector(".container2");
const span=document.querySelector(".container2 span");
function myFun(event){
    event.preventDefault();

    // Get the email value from the input field
    const email = placeholder.value.trim();
    // Reset error state
    placeholder.classList.remove("error");
    wrong.style.visibility = "hidden";


    if (email.indexOf("@")<=0) {
        placeholder.classList.add("error");
        wrong.style.visibility="visible";
        return;
    }
    var domain=email.split("@")[1];
    var extensions=[".com",".in",".org",".co"];
    var valid=extensions.some((e)=>{
        return domain.endsWith(e);
    });
    if (!valid) {
        placeholder.classList.add("error");
        wrong.style.visibility="visible";
        return;
    }
    if(email.charAt(email.length-4)!=="." && email.charAt(email.length-3)!=="."){
        placeholder.classList.add("error");
        wrong.style.visibility="visible";
        return;
    }
    span.textContent = email;

    // Toggle classes for transition
    if (container.classList.contains('green')) {
        container.classList.remove('green');
        container2.classList.remove('green2');
    } else {
        container.classList.add('green');
        container2.classList.add('green2');
    }
}
GoHome.addEventListener("click",myFun);
sub.addEventListener("click",myFun);
const image=document.getElementById("desk");
function updateImage(){
    if (window.innerWidth<500) {
        image.src="./assets/images/illustration-sign-up-mobile.svg";
    }else{
        image.src="./assets/images/illustration-sign-up-desktop.svg";
    }
}

//Initial Check
updateImage();
window.addEventListener("resize",updateImage);