const writing = document.querySelector(".writing"),
writeToDo = document.querySelector("#writeToDo"),
blind = document.querySelector(".blind");

var qwer = document.querySelector("#qwer");


function hideWriteToDo(){
    writeToDo.style.display = "none";
    blind.style.display = "none";
}



function showWriteToDo(){
    writeToDo.style.display = "block";
    blind.style.display = "block";
    qwer.value = "1234";
}




function init(){
    writing.addEventListener("click", showWriteToDo);
    blind.addEventListener("click", hideWriteToDo);
}
init()