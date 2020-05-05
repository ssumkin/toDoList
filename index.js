const writing = document.querySelector(".writing"),
writeToDo = document.querySelector("#writeToDo");




function showWriteToDo(){
    writeToDo.style.display = "block";
}




function init(){
    writing.addEventListener("click", showWriteToDo)
}
init()