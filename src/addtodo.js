export function task(btn){
btn.addEventListener("click", (e)=>{
e.preventDefault();
const formSee = document.querySelector("form")
formSee.classList.toggle("dis");
})
}

export function formDetail(btn){
btn.addEventListener("click",(e) => {
const title = document.querySelector("#title").value;
const description = document.querySelector("#description").value;
const duedate = document.querySelector("#duedate").value;
const priorty = documnet.querySelector("#priorty").value;
})
}