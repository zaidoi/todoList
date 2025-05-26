import { activeProject } from "./index.js";


export function task(btn){
btn.addEventListener("click", (e)=>{
e.preventDefault();
const formSee = document.querySelector("form")
formSee.classList.toggle("dis");
})
}

export function formDetail(btn){
btn.addEventListener("click",(e) => {
    e.preventDefault()
const title = document.querySelector("#title").value;
const description = document.querySelector("#description").value;
const duedate = document.querySelector("#duedate").value;
const priorty = document.querySelector("#priorty").value;
cardMake(title,description,duedate)
const formSee = document.querySelector("form")
formSee.classList.toggle("dis");

})
}

function cardMake(title, description, duedate) {
  if (!activeProject) {
    alert("Please select a project first!");
    return;
  }

    const cards = document.querySelector(".cards");
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-project", activeProject);
  
    const titleHead = document.createElement("h4");
    titleHead.innerHTML = "Title:";
    const titlePara = document.createElement("p");
    titlePara.innerHTML = title;
  
    const descriptionHead = document.createElement("h4");
    descriptionHead.innerHTML = "Description:";
    const descriptionPara = document.createElement("p");
    descriptionPara.innerHTML = description;
  
    const duedateHead = document.createElement("h4");
    duedateHead.innerHTML = "DueDate:";
    const duedatePara = document.createElement("p");
    duedatePara.innerHTML = duedate;
  
    const completed = document.createElement("h4");
    completed.innerHTML = "Completed";
    const checkPara = document.createElement("input");
    checkPara.type = 'checkbox';
    checkPara.id = "done";
  
    //  Toggle active class on checkbox
    checkPara.addEventListener("change", function () {
      card.classList.toggle("active", this.checked);
    });
  
    card.appendChild(titleHead);
    card.appendChild(titlePara);
    card.appendChild(descriptionHead);
    card.appendChild(descriptionPara);
    card.appendChild(duedateHead);
    card.appendChild(duedatePara);
    card.appendChild(completed);
    card.appendChild(checkPara);
  
    cards.appendChild(card);
  }

  export function filterCardsByProject(projectName) {
    const allCards = document.querySelectorAll(".card");
    allCards.forEach(card => {
      const cardProject = card.getAttribute("data-project");
      card.style.display = (cardProject === projectName) ? "block" : "none";
    });
  }
  
  