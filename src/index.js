import "./styles.css"
import { projectHandle } from "./addproject"
import { task,formDetail } from "./addtodo"

export let activeProject = null;
export function setActiveProject(name) {
  activeProject = name;
}


// Project Logic
const btnAddProject  = document.querySelector('#addproject')
projectHandle(btnAddProject) // handle add project

const addProject = document.querySelector(".tasks")

const taskBtn = document.querySelector(".tasksright")
task(taskBtn) // taskaddform

const subForm = document.querySelector("#sub")
formDetail(subForm)


