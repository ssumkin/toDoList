const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList"),
modifyToDo = document.querySelector(".modifyToDo")
modifyForm = document.querySelector(".js-modifyForm"),
modifyInput = modifyToDo.querySelector("input");




const TODOS_LS = "toDos";

let toDos  = [];

 


function deleteToDo(event){
    setTimeout(function(){
        const btn = event.target;
        const li = btn.parentNode;
        toDoList.removeChild(li);

        const cleanToDos = toDos.filter(function(toDo){
            return toDo.id !== parseInt(li.id);
        });
        toDos = cleanToDos;
        saveToDos();
    },300);
}


function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //JSON.stringify()는 object를 string형으로 바꿔줌
}
 

function paintToDo(text){ // li, 버튼, span을 만들고 span에 form에서 입력받은 값을 넣음 list 형태로 보여주고 그걸 오브젝트 형태로 만들어서 toDos 배열에 넣음 
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const p = document.createElement("p");

    const currentDate = new Date;
    let month = currentDate.getMonth()+1;
    let date = currentDate.getDate();


    p.innerHTML = `${month}월 ${date}일`;
    p.style.fontSize = "12px";
    p.style.marginLeft = "28px";
    p.style.color = "#DB4455";

    const newID = toDos.length+1;

    delBtn.innerHTML = `X`
    delBtn.addEventListener("click", deleteToDo);
    //delBtn.id = newID;
    span.innerText = ` ${text}`;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.appendChild(p)
    li.id = newID;
    toDoList.appendChild(li);  

    

    const toDoObj = {
        text: text,
        id: newID
    }; 

    

    li.onclick = function(){
        modifyToDo.style.display = "block";
        modifyInput.value = toDos[li.id-1].text;
        modifyForm.addEventListener("submit", function(event){ 
            event.preventDefault(); 
            if(modifyInput.value !== ""){
                toDos[li.id-1].text = modifyInput.value;
                saveToDos();
                modifyToDo.style.display = "none";
                modifyInput.value = "";
                location.reload();
            }
        });
    }

    toDos.push(toDoObj);

    saveToDos();
}




 





function handleSubmit(event){ // form에 입력하면 paintToDo를 실행하고 vlaue값을 지움
    event.preventDefault();
    const currentInputValue = toDoInput.value;
    if(currentInputValue !== ""){
        paintToDo(currentInputValue);
        toDoInput.value="";
        document.querySelector("#writeToDo").style.display = "none";
        document.querySelector(".blind").style.display = "none";
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