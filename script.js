const inputBox= document.getElementById("input-box")
const listcontainer= document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("Please write something..!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML =`<i class="fa-solid fa-trash-can"></i>`;
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();