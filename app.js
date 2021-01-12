const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const input= document.querySelector("#input")
const deleteFar = document.querySelector(".far")
const items = document.querySelectorAll("li")
const lists = document.querySelector(".lists")
const search = document.querySelector(".search input")
const searchForm = document.querySelector(".search")

const generateTemplate = todo => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`

    list.innerHTML += html
};

addForm.addEventListener("submit", e => {

    e.preventDefault();
    const todo = input.value.trim();

    if(todo.length){
        generateTemplate(todo)
        input.value= ""
    }

});

searchForm.addEventListener("submit", e => {

    e.preventDefault();
})


 
// delete tools
lists.addEventListener("click", e => {
    if(e.target.classList.contains("far")){
    e.target.parentElement.remove()
    }
});


const filterTodos = (term) => {
    Array.from(list.children)
        //filtrelenenler dışındakilere filtred clası ver displayi none olsun;
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add("none"));

    Array.from(list.children)
        //search.value yi silince busefer bu kod hepsini tutuyor ve tuttuklarından filtred classlarını siliyor.
        // Bu şekilde hepsini tekrardan görmüş oluyoruz
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove("none"));    
};

// keyup tools
search.addEventListener("keyup", () => {
    const term = search.value.toLowerCase().trim();
    filterTodos(term);
})
    