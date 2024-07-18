const setBtn = document.querySelectorAll(".set-btn");
const clearBtn = document.querySelector(".clear-btn");
const img = document.querySelector("#img-field img");
const src = img.src;

setBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const ex = btn.dataset.ex;
        // console.log(img);
        img.src = `img/${name}.${ex}`;
    });
});

clearBtn.addEventListener("click", () => {
    img.src = src;
});

// setBtn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         const target = btn.dataset.target;
//         const value = btn.dataset.value;
//         document.querySelector(target).style.fontSize = value + "px";
//     });
// });
