const inputItem = document.getElementById("input-item");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputItem.value == ''){
        alert("write something in the box");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputItem.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputItem.value = "";
    saveData();
}
listContainer.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }else if(event.target.tagName === "SPAN"){
      event.target.parentElement.remove();
      saveData();
    }
});

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();