/*
const a = 222;
let b = a - 199;
console.log(b, a);
*/
/*이것들은 Array
const daysOfWeek = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);
*/
/*
const chaeInfo = {
  name: "Chae",
  age: 28,
  gender: "female",
  lovesArt: true,
  favMovies: [
    { name: "아버지와 이토씨", genre: "feature film" },
    { name: "파프리카", genre: "animation" },
  ],
};
console.log(chaeInfo.favMovies[0]);
console.log(chaeInfo.favMovies[0].genre);
console.log(console);
*/
/*function sayHello(userName, age) {
  //console.log("hello!", userName, "I am ", age, "years old.");
  console.log(`Hello! ${userName}, you are ${age} years old, right?`);
}
sayHello("채영!", 28);
*/
/*function sayHello(userName, age) {
  return `Hello! ${userName}, you are ${age} years old, right?`;
}
const greetChae = sayHello("채영!", 28);
console.log(greetChae);
*/
/*const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};
const p = calculator.plus(10, 5);
const mi = calculator.minus(10, 5);
const d = calculator.divide(10, 5);
const mu = calculator.multiply(10, 5);

console.log(
  `10 plus 5 is ${p}, 10 minus 5 is ${mi}, 10 divide 5 is ${d}, and 10 multiply 5 is ${mu}! Great Job!!ᕦ(ò_óˇ)ᕤ `
);
*/
const title = document.getElementById("title");
title.innerHTML = "안녀영어엉 (*´∇｀*)";

function handleResize() {
  console.log("사이즈가 변경되었습니닷");
}

window.addEventListener("resize", handleResize);

function handleClick() {
  title.style.color = "tomato";
}
window.addEventListener("click", handleClick);

if (10 > 5) {
  console.log("10은 5보다 큽니다.");
} else {
  console.log("10은 5보다 작습니다.");
}

if (20 > 5 && "chae" === "chae") {
  console.log("yes");
} else {
  console.log("no");
}
