const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function handleSubmit(event) {
    event.preventDefault();

    const currentValue = toDoInput.value;
    
    paintToDo(currentValue);
    toDoInput.value = "";
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.addEventListener("click", deleteToDo);
    delBtn.innerText = "X";
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.style.backgroundColor = "blue";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    
    const toDoObj = {
        text: text,
        id: newId
    }
    
    toDos.push(toDoObj);
    saveToDo();
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        // String -> Int
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDo();
}

function saveToDo() {
    // Object -> String
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null) {
        // String -> Object
        const parsedToDos = JSON.parse(loadedToDos);

        parsedToDos.forEach(function(text){
            paintToDo(text.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();