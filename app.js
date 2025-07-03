const inputvalue = document.getElementById("inputbox");
// const btn = document.querySelector(".btn");
const task = document.querySelector(".task-list");

function appendvalue(){
    
    let element = document.createElement("li");
    element.innerHTML = inputvalue.value;
    task.appendChild(element);
    let cross = document.createElement("span");
    cross.innerHTML = "X";
    element.appendChild(cross);

    inputvalue.value= " ";

    element.addEventListener("click", function(e){
    if (e.target.tagName == "LI"){
     e.target.classList.toggle("checked");
    }
})

    cross.addEventListener("click", function(e){
        if (e.target.tagName == "SPAN"){
            e.target.parentElement.remove();
        }
    })
}




