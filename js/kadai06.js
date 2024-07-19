const searchCount = document.querySelectorAll('input[name="count]');
const searchBtn = document.querySelector("#btn_search");

//enterで検索btn押せる
const searchBox = document.querySelector("#keyword");
//search時に対応
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
        searchBox.focus();
    }
});

//searchBtn押した時にかけるイベント
searchBtn.addEventListener("click", () => {
    //keywordValue 指定
    const keywordValue = document.querySelector("#keyword").value;

    //checked（表示件数）指定
    const checkedCount = document.querySelector(
        'input[name="count"]:checked'
    ).value;

    //parking（駐車場）指定
    const parkingValue = document.querySelector(
        'input[name="parking"]:checked'
    ).value;

    //API繋げる
    const APIEndpoint =
        "https://click.ecc.ac.jp/ecc/tuemori/js2/kadai06_api/gourmet.php";

    //keywordAPI に keywordValue and  and checkedCount を追加
    const keywordAPI = `?keyword=${keywordValue}&parking=${parkingValue}&count=${checkedCount}`;
    //APIEndpoint と keywordAPI をくっつける
    fetch(`${APIEndpoint}${keywordAPI}`)
        .then((response) => response.json())
        //APIデータ表示・logに出す
        .then((data) => {
            console.log(data.results.shop);
            //shop 情報
            const shopData = data.results.shop;

            //shop 内容・表示
            const searchResult = document.querySelector("#search_result");
            searchResult.innerHTML = "";

            //複数あるshop 情報を一つ一つ出す(forEach)・logに出してみる
            shopData.forEach((shop) => {
                console.log(shop);
                //取ってきたshop情報をhtmlに表示
                searchResult.insertAdjacentHTML(
                    "beforeend",
                    `<div class="shop flex flex-col sm:flex-row gap-5 bg-neutral-50 p-5 mx-5 mb-10 border border-gray-200 border-solid">
                    <figure class="bg-white p-2 border border-neutral-200 border-solid">
                        <img src="${shop.photo.pc.l}"
                            class="object-cover w-full h-full">
                    </figure>
                    <div class="grow">
                        <p class="text-sm sm:text-base">${shop.genre.name} | ${shop.station_name}</p>
                        <p class="text-sm sm:text-base my-2">${shop.genre.catch}</p>

                        <h4 class="text-lg sm:text-2xl my-3"><a href="${shop.urls.pc}" target="_blank">${shop.name}</a></h4>
                        <p class="text-sm sm:text-base mb-3">${shop.address}</p>
                        <p class="text-sm sm:text-base mb-8">駐車場${shop.parking}</p>

                        <div class="mb-10">
                        <p class="text-sm sm:text-base text-pink-400">食べ放題${shop.free_food}</p>
                        <p class="text-sm sm:text-base text-pink-400">飲み放題${shop.free_drink}</p>
                        </div>

                        <a href="${shop.coupon_urls.pc}"  target="_blank"
                            class="text-base text-white bg-yellow-300 px-3 py-2 border-2 border-solid border-yellow-400 rounded-md">このお店のお得なクーポン</a>
                    </div>
                </div>
        `
                );
            });
        });
});
