//Getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");


inputBox.onkeyup = () => {
    let userData = inputBox.value; // Getting user entered value
    if (userData.trim() != 0) {   //if user values aren't only spaces
        addBtn.classList.add("active"); // active the add button
    } else {
        addBtn.classList.remove("active"); // unactive the add button
    }
}

showTasks() // Calling showTasks

//if user click on the add button
addBtn.onclick = ()=>{
    let userData = inputBox.value; // Getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); // Getting localstorage
    if(getLocalStorage == null){ //if local storage is null
        listArr = [];
    }else {
        listArr = JSON.parse(getLocalStorage); // transorming json string into a js object
    }
    listArr.push(userData); //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks(); // calling showTasks function
    addBtn.classList.remove("active"); // unactive the add button
}

// function to add task list inside ul
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo"); // Getting localstorage
    if(getLocalStorage == null){ //if local storage is null
        listArr = [];
    }else {
        listArr = JSON.parse(getLocalStorage); // transorming json string into a js object
    }

    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length; //passing the lenght value in pendingNumb
    if(listArr.length > 0){
        deleteAllBtn.classList.add("active");
    }else{
        deleteAllBtn.classList.remove("active");
    }

    let newLiTag = "";
    listArr.forEach((element,index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`       
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inputBox.value = "" // once task added leave the input field
}

//delete task function
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage)
    listArr.splice(index, 1); // delete or remove the particular indexed li
    //after remove the li again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks(); // calling showTasks function
}

//delete all task function
deleteAllBtn.onclick = ()=>{
    listArr = [];
    //after delte all task again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks(); // calling showTasks function
}