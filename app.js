const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const input= document.querySelector("#input")
const lists = document.querySelector(".lists")
const search = document.querySelector(".search input")
const searchForm = document.querySelector(".search")

const generateTemplate = todo => {
    const html = `
    <li class="liler addtodo list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i style="color:#cca98a" class="fas fa-check"></i>
    </li>`

    list.innerHTML += html
};

let todosArray=[]
addForm.addEventListener("submit", e => {

    e.preventDefault();
    const todo = input.value.trim();

    if(todo.length){
        generateTemplate(todo)
        input.value= ""
    };

    todosArray.push(todo)
    localStorage.setItem("todo",JSON.stringify(todosArray));
      
});

if(localStorage.getItem("todo")){
    const data = JSON.parse(localStorage.getItem("todo"))
    data.forEach(e=>{
        generateTemplate(e)
        todosArray.push(e)
    });
};

searchForm.addEventListener("submit", e => {
    e.preventDefault();
});

lists.addEventListener("click", e => {
    if(e.target.classList.contains("fas")){
    e.target.parentElement.remove()

    const data = JSON.parse(localStorage.getItem("todo"))
    const newArray = data.filter(element => element != e.target.parentElement.children[0].innerHTML)
    localStorage.setItem('todo',JSON.stringify(newArray))    
    };
});

const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add("none"));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove("none"));    
};

search.addEventListener("keyup", () => {
    const term = search.value.toLowerCase().trim();
    filterTodos(term);
});