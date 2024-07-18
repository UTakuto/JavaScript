// フォーム要素を取得します
const form = document.querySelector(".add-form");

// フォームが送信されたときのイベントリスナーを追加します
form.addEventListener("submit", function (event) {
    // デフォルトの送信動作をキャンセルします
    event.preventDefault();

    // FormDataオブジェクトを作成し、フォーム要素からデータを取得します
    const formData = new FormData(form);
    console.log(formData);

    // フォームデータ内の特定の input の値を取得します
    const commentValue = formData.get("comment");

    // ログに値を出力します
    // console.log("コメント:", commentValue);

    if (commentValue.trim() !== "") {
        //一つ目のtdを追加
        const td = document.createElement("td");
        td.innerText = commentValue;
        //一つ目のtdにclass comment を追加
        td.classList.add("comment");

        //trの追加
        const tr = document.createElement("tr");
        // trの中にtdを追加
        tr.appendChild(td);

        const tbody = document.querySelector("tbody");
        //tbodyの中にtrを追加
        tbody.appendChild(tr);

        //2つ目のtdの追加
        const control = document.createElement("td");
        //2つ目のtdにclass control を追加
        control.classList.add("control");

        //removeBtnの追加
        const removeBtn = document.createElement("button");
        //removeBtn add text "削除"
        removeBtn.innerText = "削除";
        //removeBtn add remove class
        removeBtn.classList.add("remove");

        //control(td)の中にremoveBtn の追加
        control.appendChild(removeBtn);

        //trの中にremove の追加
        tr.appendChild(control);

        //removeBtn click remove
        removeBtn.addEventListener("click", () => {
            tr.remove();
        });

        //form submit click reset
        form.reset();
    } else {
        alert("コメントを入力してください");
    }
});
