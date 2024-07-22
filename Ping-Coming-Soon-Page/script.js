function myFun(event){
    event.preventDefault();
    var a = document.forms["form"]["email"].value;
    const error=document.getElementsByTagName("p")[0];
    const red=document.getElementsByTagName("input")[0];
    
    error.style.visibility="hidden";
    red.classList.remove("error");
    red.classList.remove("correct");

    if (a.indexOf("@")<=0) {
        error.style.visibility="visible";
        red.classList.add("error");
        event.preventDefault();
        return false;
    }
    if (a.charAt(a.length-4)!=="." && a.charAt(a.length-3)!==".") {
        error.style.visibility="visible";
        red.classList.add("error");
        event.preventDefault();
        return false;
    }
    var domain=a.split("@")[1];
    var extensions=[".com",".in",".co",".org"];
    var valid=extensions.some((e)=>{
        return domain.endsWith(e);
    });
    if (!valid) {
        error.style.visibility="visible";
        red.classList.add("error");
        event.preventDefault();
        return false;
    }

    red.classList.add("correct");
    
}