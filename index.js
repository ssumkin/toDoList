const writing = document.querySelector(".writing"),
writeToDo = document.querySelector("#writeToDo"),
blind = document.querySelector(".blind");




function hideWriteToDo(){
    writeToDo.style.display = "none";
    blind.style.display = "none";
}



function showWriteToDo(){
    writeToDo.style.display = "block";
    blind.style.display = "block";
}




function init(){
    writing.addEventListener("click", showWriteToDo);
    blind.addEventListener("click", hideWriteToDo);
}
init()