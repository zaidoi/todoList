const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = [ 
    {
    id: 1,
    name: "name"
    } , {
    id: 2,
    name: "surname"
    }]

    newListForm.addEventListener('submit', e => {
        e.preventDefault()
        if (listName == null || listName === '') returnadd 
        const listName = newListInput.value
    })

function render(){
    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name")
        listElement.innerText = list.name
        listsContainer.appendChild(listElement)
        console.log(listElement);
        
    })
}

function clearElement(element){
while (element.firstChild) {
    element.removeChild(element.firstChild)
}
}

render()