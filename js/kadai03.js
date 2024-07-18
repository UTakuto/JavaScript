//form 読み込み
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // FormDataオブジェクトを作成し、フォーム要素からデータを取得
    const formData = new FormData(form);
    // フォームデータ内のvalue の値を取得
    //各form value を取ってくる
    const name = formData.get("name");
    const author = formData.get("author_name");
    const productUrl = formData.get("product_url");
    const videoUrl = formData.get("video_url");
    const category = formData.get("product_category");
    const description = formData.get("description");
    //各form value を sessionStorage に保存
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("author", author);
    sessionStorage.setItem("productUrl", productUrl);
    sessionStorage.setItem("videoUrl", videoUrl);
    sessionStorage.setItem("category", category);
    sessionStorage.setItem("description", description);
});

if (form !== "") {
    //id , sessionStorage 読み込み
    const nameID = document.querySelector("#product_name");
    const authorID = document.querySelector("#author_name");
    const productUrlID = document.querySelector("#product_url");
    const videoID = document.querySelector("#video_url");
    const categoryID = document.querySelector("#product_category");
    const descriptionID = document.querySelector("#description");

    //sessionStorage 復元
    nameID.value = sessionStorage.getItem("name");
    authorID.value = sessionStorage.getItem("author");
    productUrlID.value = sessionStorage.getItem("productUrl");
    videoID.value = sessionStorage.getItem("videoUrl");
    categoryID.value = sessionStorage.getItem("category");
    descriptionID.value = sessionStorage.getItem("description");
}
