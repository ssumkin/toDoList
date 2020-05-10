const writing = document.querySelector(".writing"),
writeToDo = document.querySelector("#writeToDo"),
blind = document.querySelector(".blind");

let qwer = document.querySelector("#qwer");


function hideWriteToDo(){
    writeToDo.style.display = "none";
    blind.style.display = "none";
}



function showWriteToDo(){
    writeToDo.style.display = "block";
    blind.style.display = "block";
    qwer.focus();
}




function init(){
    writing.addEventListener("click", showWriteToDo);
    blind.addEventListener("click", hideWriteToDo);
}
init()