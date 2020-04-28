const clock_color = document.querySelector(".clock"); 
 
const Clicked_class = "clicked";


function handleClick(){
    clock_color.classList.toggle(Clicked_class);
}



function init(){ 
    clock_color.addEventListener("click", handleClick)
}

init() 