
const addProject = document.querySelector(".tasks")

const arr = []

export function projectHandle(btn){
    btn.addEventListener("click",function(event){
        event.preventDefault();
        const name = prompt("Please Enter The Project Name")
       formHandle(name)

    })
}

function formHandle(name){
    if (!name || !name.trim() || !isNaN(name)){
        alert("Add Valid Name ")
        return;
    };
    const projectName = name;
createProject(projectName)

}


function createProject(name){
const divEl = document.createElement("div")
const proName = document.createElement("h2")
const delBtn = document.createElement("button")
proName.innerHTML = name;
delBtn.innerHTML = "Delete"
addProject.appendChild(divEl);
divEl.appendChild(proName)
divEl.appendChild(delBtn)
divEl.classList.add("delDiv") 
delBtn.classList.add("delBtn")
arr.push(name)
delBtn.addEventListener("click",(e)=>{
    console.log(this.divEl);
    
divEl.remove()
    
})

}

