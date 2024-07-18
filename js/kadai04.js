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

//kadai04 add
const storageKey = "kadai04";
let todoList = [];
//localStorage から todo データを読み込み
if (localStorage.getItem(storageKey)) {
    todoList = JSON.parse(localStorage.getItem(storageKey));
}
console.log(todoList);
todoList.forEach((todo) => {
    todoContainer.insertAdjacentHTML(
        "beforeend",
        `<tr> <td class="comment"> ${todo}</td> <td class= "control"> <button type = "button"> 削除 </button> </td> </tr>`
    );
});

todoSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const todoText = todoTextFiled.value;
    todoContainer.insertAdjacentHTML(
        "beforeend",
        `<tr> <td class="comment"> ${todoText}</td> <td class= "control"> <button type = "button"> 削除 </button> </td> </tr>`
    );
    todoTextFiled.value = "";

    //kadai04 add
    todoList[todoList.length] = todoText;
    localStorage.setItem(storageKey, JSON.stringify(todoList));
});

todoContainer.addEventListener("click", (event) => {
    const elem = event.target;

    if (elem.tagName === "BUTTON") {
        const row = elem.closest("tr").remove();
        const index = Array.from(todoContainer.children).indexOf(row); // クリックされた行のインデックスを取得
        todoList.splice(index, 1); // todoList から該当するインデックスの要素を削除
        localStorage.setItem(storageKey, JSON.stringify(todoList)); // 更新されたリストを保存
        row.remove();
        // elem.closest("tr").remove();
        // localStorage.removeItem(storageKey, todoList.length);
    }
});
