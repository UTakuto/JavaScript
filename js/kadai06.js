// shop 件数 , 検索 btn , 表示 領域
const searchCount = document.querySelectorAll('input[name="count]');
const searchBtn = document.querySelector("#btn_search");
const searchResult = document.querySelector("#search_result");

// pagination 領域 , prev and next btn 取得
const pagination = document.querySelector("#pagination");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const pageNumbers = document.querySelector("#page-numbers");

// pagination let
// currentPage -> 現在のページ番号
let currentPage = 1;
// itemsPrePage -> 1ページあたりの表示件数
let itemsPrePage = 10;
// totalItems -> 取得データの総数 , totalPage -> 総ページ数
let totalItems = 0;
let totalPages = 0;
// shopStorage -> shop data の保管場所
let shopData = [];

// enterで検索btn押せる
const searchBox = document.querySelector("#keyword");
//search時に対応
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
        searchBox.focus();
    }
});

// searchBtn押した時にかけるイベント
searchBtn.addEventListener("click", () => {
    //keywordValue 指定
    const keywordValue = document.querySelector("#keyword").value;

    // checked（表示件数）指定
    const checkedCount = document.querySelector(
        'input[name="count"]:checked'
    ).value;

    // parking（駐車場）指定
    const parkingValue = document.querySelector(
        'input[name="parking"]:checked'
    ).value;

    // API繋げる
    const APIEndpoint =
        "https://click.ecc.ac.jp/ecc/tuemori/js2/kadai06_api/gourmet.php";

    // keywordAPI に keywordValue・parkingValue・checkedCount を追加
    const keywordAPI = `?keyword=${keywordValue}&parking=${parkingValue}&count=${checkedCount}`;
    // APIEndpoint と keywordAPI をくっつける
    fetch(`${APIEndpoint}${keywordAPI}`)
        .then((response) => response.json())
        // APIデータ表示
        .then((data) => {
            // shop 情報 を保管
            shopData = data.results.shop;

            // totalItemsにshopData総数保管
            totalItems = shopData.length;
            // itemsPrePage(20件表示) と totalItems(取得データ総数) 割った数を totalPages(層ページ数)を計算
            // 必要なページ数を計算している
            totalPages = Math.ceil(totalItems / itemsPrePage);
            // 現在のページをリセット
            currentPage = 1;
            // 最初のページを表示
            displayPage(currentPage);
            // ページネーションを更新
            updatePagination();
        });
});

// 指定ページ番号に基づいて表示データの計算・表示
const displayPage = (page) => {
    // 表示するデータの開始と終了の計算
    const startPage = (page - 1) * itemsPrePage;
    const endPage = startPage + itemsPrePage;
    // 上記2つのデータをpaginationItemsに収納 , 現在のページに表示するデータの更新
    const paginatedItems = shopData.slice(startPage, endPage);

    // shop 内容・表示
    searchResult.innerHTML = "";
    // 複数あるshop 情報を一つ一つ出す(forEach)・logに出してみる
    paginatedItems.forEach((shop) => {
        console.log(shop);
        // 取得したshop情報をhtmlに表示
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
};

//ページ番号を表示するbtnの生成・表示
const updatePagination = () => {
    // 現在の表示しているページ番号を削除, 新しいページ番号btn作成の前に古いbtnデータを削除し、更新してくれる
    pageNumbers.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        // ページ番号btn作成
        const pageNumber = document.createElement("button");
        pageNumber.textContent = i;

        // buttonのstyle作成
        pageNumber.classList.add(
            "px-3",
            "py-1",
            "rounded-md",
            "bg-gray-300",
            "text-gray-600"
        );
        // 現在表示されているページ番号btnにstyle add
        if (i === currentPage) {
            pageNumber.classList.add("bg-blue-500", "text-white");
        }
        pageNumber.addEventListener("click", () => {
            currentPage = i;
            displayPage(currentPage);
            updatePagination();
        });
        // ページ番号btn htmlに追加
        pageNumbers.appendChild(pageNumber);
    }
};

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
        updatePagination();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
        updatePagination();
    }
});
