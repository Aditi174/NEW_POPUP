function showmodel(){
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".loginform").classList.add("showloginform");
}

function closemodel(){
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".loginform").classList.remove("showloginform");
}

var cross = document.querySelector("span");
cross.addEventListener('click',closemodel)