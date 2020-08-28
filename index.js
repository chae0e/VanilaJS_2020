const a = 222;
let b = a - 199;
console.log(b, a);
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
