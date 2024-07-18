//add  - form
const todoForm = document.querySelector(".add-form");
//add  - form [ type = text ]
const todoTextFiled = document.querySelector(".add-form [ type = 'text' ]");
//add - form [ type = "submit" ]
const todoSubmit = document.querySelector(".add-form [ type = 'submit' ]");
//todo-wrap
const todoWrap = document.querySelector(".todo-wrap");
//.todo-wrap tbody
const todoContainer = todoWrap.querySelector("tbody");

todoSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const todoText = todoTextFiled.value;
    todoContainer.insertAdjacentHTML(
        "beforeend",
        `<tr> <td class="comment"> ${todoText}</td> <td class= "control"> <button type = "button"> 削除 </button> </td> </tr>`
    );
    todoTextFiled.value = "";
});

todoContainer.addEventListener("click", (event) => {
    const elem = event.target;

    if (elem.tagName === "BUTTON") {
        elem.closest("tr").remove();
    }
});
