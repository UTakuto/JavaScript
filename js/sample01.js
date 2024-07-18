// .lesson
const lesson = document.querySelector(".lesson");
console.log(lesson.dataset.className);

//data属性を追加
lesson.dataset.no = 30;
console.log(lesson.dataset);

//datasetの上書きはできない（読み取り専用だから）
// lesson.dataset = { hoge: "aaa", foo: "bbb" };
