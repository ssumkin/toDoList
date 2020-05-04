const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");



const TODOS_LS = "toDos";

let toDos  = [];

 


function changePage(){
    onclick="location.href='details.html'"
}




function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}


function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //JSON.stringify()는 object를 string형으로 바꿔줌
}
 

function paintToDo(text){ // li, 버튼, span을 만들고 span에 form에서 입력받은 값을 넣음 list 형태로 보여주고 그걸 오브젝트 형태로 만들어서 toDos 배열에 넣음 
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = toDos.length+1;

    delBtn.innerText = "⭕"
    delBtn.addEventListener("click", deleteToDo);
    //delBtn.id = newID;
    span.innerText = ` ${text}`;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newID;
    toDoList.appendChild(li);  

    const toDoObj = {
        text: text,
        id: newID
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event){ // form에 입력하면 paintToDo를 실행하고 vlaue값을 지움
    event.preventDefault();
    const currentInputValue = toDoInput.value;
    if(currentInputValue !== ""){
        paintToDo(currentInputValue);
        toDoInput.value="";
    }
    
}



function loadeToDos(){ // todos 불러옴
    const loadeToDos = localStorage.getItem(TODOS_LS);

    if(loadeToDos !== null){ // loadeToDos안에 값이 있으면 오브젝트로 변환 후 값의 개수 만큼 paintToDo함수 실행
        const parsedToDos = JSON.parse(loadeToDos); // JSON.parse()는 string를 object로 변환
        
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text) // forEach인자랑 paintToDo인자 .으로 붙여서 써야함
        });
    }  
}


function init(){
    loadeToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();