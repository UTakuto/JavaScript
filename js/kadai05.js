const APIEndpoint = "https://click.ecc.ac.jp/ecc/sakakura";
const URLSelector = "/ajax/selector-list.php";
const APISelector = APIEndpoint + URLSelector;

fetch(APISelector)
    .then((response) => {
        return response.json();
        // console.log(response.json());
    })
    .then((data) => {
        console.log(data);

        //dataからcategories一覧指定
        const categoriesList = data.categories;
        // console.log(categoriesList);

        //dataからselectors一覧指定
        const selectorsList = data.selectors;
        // console.log(selectorsList);

        //サイドメニュー 取得
        const categoryNavi = document.querySelector("#category-navi ul");
        //categories をサイドメニュー表示
        categoriesList.forEach((category) => {
            const categoriesItem = document.createElement("li");
            categoriesItem.textContent = category;
            categoryNavi.append(categoriesItem);
        });

        //categoryWrap 取得
        const categoryWrap = document.querySelector("#category-wrap");
        selectorsList.forEach((selector) => {
            console.log(selector);
            categoryWrap.insertAdjacentHTML(
                "beforeend",
                `<div class="category">
                    <h2>${selector.category}</h2>
                    <dl>
                    ${selector.list.map((list) => {
                        return `<dt>${list.type}</dt><dd>${list.range}</dd>`;
                    })}
                    </dl>
                </div>`
            );
        });

        const navLi = document.querySelectorAll("#category-navi ul li");
        const navCategory = document.querySelectorAll(".category");
        // console.log(navLi);
        // console.log(navCategory);

        navLi.forEach((e, index) => {
            e.addEventListener("click", () => {
                navLi.forEach((a) => {
                    a.classList.remove("active");
                });
                // console.log(index);
                navCategory.forEach((category, i) => {
                    if (index - 1 === i) {
                        category.style.display = "block";
                        e.classList.add("active");
                    } else if (index === 0) {
                        category.style.display = "block";
                        e.classList.add("active");
                    } else {
                        category.style.display = "none";
                    }
                });
            });
        });
    });
