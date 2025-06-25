const tasksContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
let newListInput = document.querySelector('[data-new-list-input')
const deleteListButton = document.querySelector('[data-delete-list-button')
const taskTitle = document.querySelector('[data-list-title]')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const listsContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.getElementById('task-template')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'selected.list'

let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

let selectedList = null

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) ||[];

newListForm.addEventListener("submit", e => {
    e.preventDefault();
    if (newListInput.value === null || newListInput.value == "") return
    const listName = createList(newListInput.value)
    newListInput.value = ""
    lists.push(listName)
    saveAndRender()
})

newTaskForm.addEventListener("submit", e =>{
    e.preventDefault()
const taskName = newTaskInput.value
if(taskName === null || taskName == '') return
const task = createTask(taskName)
const selectedList = lists.find(list => list.id === selectedListId)
selectedList.tasks.push(task)
taskRender()
})

tasksContainer.addEventListener("click",e => {
    if(e.target.tagName.toLowerCase() == 'li'){
        selectedListId = e.target.dataset.listId 
        selectedList = e.target
        taskTitle.innerText = selectedList.innerText
    }
    saveAndRender()
})

deleteListButton.addEventListener('click', e =>{
lists = lists.filter(list => list.id !== selectedListId)
saveAndRender()
})


function taskRender(){
    clearElement(listsContainer)
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content,true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = task.id
       checkbox.checked = task.complete
       const label = taskElement.querySelector('label')
       label.htmlFor = task.id
       label.append(task.name)
       listsContainer.appendChild(taskElement)
    })
    
}
function render(){
    clearElement(tasksContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.classList.add('list-name')
        listElement.dataset.listId = list.id
        if (list.id === selectedListId){
            listElement.classList.add("active-list")
        }
        listElement.innerText = list.name
        tasksContainer.appendChild(listElement)
    });
    taskRender()
}



function saveAndRender(){
    save()
    render()
}

function createList (name){
    return { 
        id:Date.now().toString() , name:name ,tasks:[] 
    }
}

function createTask(name){
    return {
        id:Date.now().toString(),name:name,complete:false
    }
}

function save (){
localStorage.setItem(LOCAL_STORAGE_LIST_KEY , JSON.stringify(lists))
localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
}

function clearElement (element){
    while(element.firstChild){
    element.removeChild(element.firstChild)
    }
}

render()