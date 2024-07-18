// RESAS API関連

const APIKey = "FP93jNInkB3RkUl94NzBYKMQoZLD3eORqDSZqd6s";
const APIEndpoint = "https://opendata.resas-portal.go.jp";

// 都道府県API（GET）
const prefAPI = APIEndpoint + "/api/v1/prefectures";

//市区町村API（GET）
const cityAPI = APIEndpoint + "/api/v1/cities";

// #pref 都道府県
const prefField = document.querySelector("#pref");

// #city 市区町村
const cityField = document.querySelector("#city");



// 都道府県情報をAPIから取得
fetch(prefAPI,  // 非同期通信をおこなうURL
    {
    headers: {
        "X-API-KEY": APIKey, // RESAS APIはheader情報としてAPI KEYを送信する必要がある
    },
}
)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const prefs = data.result;
        prefs.forEach((pref) => {
            // console.log(pref);
            // elementの作成
            const item = document.createElement("option");
            // 作成したelementのプロパティ設定（value属性と表示）
            item.value = pref.prefCode;
            item.textContent = pref.prefName;

            // selectに作成したelementを追加
            prefField.append(item);
        }); // endforeach
    });

// .then((response) => response.json())
// .then((prefJsonData) => {
//     console.log(prefJsonData);
//     const prefs = prefJsonData.result;
//     // optionの生成
//     prefs.forEach((pref) => {
//         let option = `
//     <option value="${pref.prefCode}">${pref.prefName}</option>
//     `;

//         prefField.insertAdjacentHTML("beforeend", option);
//     });
// });

//都道府県選択イベント
prefField.addEventListener("change", (event) => {
    const prefCode = event.currentTarget.value;
    console.log(prefCode);
    //市区町村情報をAPIから取得
    fetch(cityAPI + `?prefCode=${prefCode}`, {
        headers: {
            "X-API-KEY": APIKey,
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const cities = data.result;
            cities.forEach((city) => {
                console.log(city);
                // elementの作成
                const item = document.createElement("p");
                // 作成したelementのプロパティ設定（value属性と表示）
                item.textContent = city.cityCode;
                item.textContent = city.cityName;

                // selectに作成したelementを追加
                cityField.append(item);
            }); // endforeach
        });
});
