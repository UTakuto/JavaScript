//sample03.js

//sessionStorageの利用

//.btnSave
const sessionSaveBtn = document.querySelector(".btnSave");
//sessionStorage key
const sessionKey = "sample03";

//sessionStorageからのデータ読み込み
let sessionValue = sessionStorage.getItem(sessionKey);

console.log(`sessionデータ : ${sessionValue}`);

sessionSaveBtn.addEventListener("click", () => {
    //sessionStorageへデータを保存
    sessionStorage.setItem(sessionKey, "2024-04-26");
});
