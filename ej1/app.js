//declaramos objeto de tareas
let tasks = [];

function addTask() {
    //leemos campo
    const taskText = document.getElementById("taskText").value;
    //validamos campo vacio
    if (taskText.trim() === "") return;
    //añadimos tarea
    const task = { text: taskText, completed: false };
    tasks.push(task);
    //limpiamos campo
    document.getElementById("taskText").value = "";
    //actualizamos listado
    showTasks();
    
}

//tarea cumnplida/no cumplida
function checkTask(index) {
    //identificamos tarea seleccioanda
    let taskChecked = document.getElementById(`task_${index}`);
    taskChecked.checked = !taskChecked.checked; // Alterna el estado;
    tasks[index].completed = !tasks[index].completed;    
    showTasks();
}

//editamos tarea
function editTask(index) {
    const newText = prompt("Editar:", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText;
        showTasks();
    }
}

///eliminamos tarea
function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}

function showTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 
    //reiniciamos conteo  
    let completedCount = 0;
    let leftCount = 0; 

    //generamos lista
    tasks.forEach((task, index) => {        
        const li = document.createElement("li");
        li.className = "task";
        //realizamos conteo de completados
        if (task.completed) {
            li.classList.add("completed");
            completedCount++;
        } 
        else {leftCount++;}
        //agregamos tarea
        li.innerHTML = `
            <div class="taskContainer">

            <div class="taskDiv">
            <input type="checkbox" onclick="checkTask(${index})" id="task_${index}" ${task.completed ? "checked" : ""}>
            <label for="task_${index}" >${task.text}</label>
            </div>

            <div class="taskButtons">            
            <span class="editButton" onclick="editTask(${index})">editar</span>
            <span class="deleteButton" onclick="deleteTask(${index})">eliminar</span>
            </div>

            </div>
        `;
        taskList.appendChild(li);
    });
    
    // mostramos conteos    
    document.getElementById("completedTag").textContent = completedCount;
    document.getElementById("leftTag").textContent = leftCount;
}

//evento para añadir tarea
let addButtn = document.getElementById("addButton");
addButtn.addEventListener('click', function(){
    addTask();    
})