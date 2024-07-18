//sample02.js

//createElement
const p = document.createElement("p");
// console.log(p);

//body へ作成した p を追加
document.body.insertAdjacentElement("beforeend", p);
p.textContent = "createElementで作成した pタグ";

//body へ テキストでタグを追加
document.body.insertAdjacentHTML("beforeend", "<h1>タグの動的な操作</h1>");

//.btnInsert
const insertBtn = document.querySelector(".btnInsert");

//.insertWrap
const insertArea = document.querySelector(".insertWrap");

//insertWrap p
const textElems = insertArea.querySelectorAll("p");
console.log(textElems);

//click event
insertBtn.addEventListener("click", () => {
    //insertWrap へ挿入
    insertArea.insertAdjacentHTML("beforeend", "<p>挿入されたタグ</p>");
});

//上位の存在に event を予約する
insertArea.addEventListener("click", (event) => {
    if (
        event.target.tagName === "P" &&
        event.target.parentNode.classList.contains("insertWrap")
    ) {
        console.log(event.target);
        event.target.remove();
    }
});
