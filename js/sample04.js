//sample04.js

//.saveBtn
const saveBtn = document.querySelector(".saveBtn");

//local storage key

const storageKey = "sample04";

const storageValue = {
    name: "さかくら",
    class: "WD2A",
    no: 99,
};

//local storage からデータを読み込む
console.log(JSON.parse(localStorage.getItem(storageKey)));

saveBtn.addEventListener("click", () => {
    //localStorage へ保存
    localStorage.setItem(storageKey, JSON.stringify(storageValue));
});
// saveBtn.addEventListener("click", () => {
//     //localStorage へ保存
//     localStorage.setItem(storageKey, storageValue);
// });
