// 조건문

// if문
// if (조건) {
//   실행문;
// }

// if-else문
// if (조건) {
//   실행문;
// } else {
//   실행문;
// }

// if-else if문
// if (조건) {
//   실행문;
// } else if (조건) {
//   실행문;
// } else {
//   실행문;
// }

// 예시
function isPositive(num) {
  if (num > 0) {
    return "양수입니다.";
  } else if (num < 0) {
    return "음수입니다.";
  } else {
    return "0입니다.";
  }
}

console.log(isPositive(1)); // 양수입니다.
console.log(isPositive(-1)); // 음수입니다.
console.log(isPositive(0)); // 0입니다.

// switch문
// switch (조건) {
//   case 값1:
//     실행문; // 조건과 값1이 일치하면 실행
//     break;

//   case 값2:
//     실행문; // 조건과 값2가 일치하면 실행
//     break;

//   default:
//     실행문; // 조건과 일치하는 값이 없을 때 실행
// }

// 예시
function getSound(animal) {
  switch (animal) {
    case "개":
      return "멍멍";
    case "고양이":
      return "야옹 ㅇㅇㅇㅇ";
    case "참새":
      return "짹짹";
    case "비둘기":
      return "구구 구 구";
    default:
      return "...?";
  }
}

console.log(getSound("개")); // 멍멍
console.log(getSound("고양이")); // 야옹
console.log(getSound("여울이")); // ...?

// if문으로 변환=
function getSound2(animal) {
  if (animal === "개") return "멍멍";
  if (animal === "고양이") return "야옹";
  if (animal === "참새") return "짹짹";
  if (animal === "비둘기") return "구구 구 구";
  return "...?";
}

console.log(getSound2("개")); // 멍멍

// 반복문
// for문

// for (초기화; 조건; 종료식) {
//   실행문;
// }

for (let i = 0; i < 10; i = i + 1) {
  console.log(i); // 0부터 9까지 출력
}

// dog cat fish 배열로 만들어서 animalsA 변수에 할당
const animalsA = ["dog", "cat", "fish", "lion"];

// console.log(animalsA[0]); // dog
// console.log(animalsA[1]); // cat
// console.log(animalsA[2]); // fish

// for (초기화; 조건; 종료식) {
//   실행문;
// }
// 배열의 길이 : animalsA length

// for (let i = 0; i < 3;) i가 3보다 작을때까지.
// for (let i = 0; i < 3; i = i + 1) i는 0 i는 3보다 작을시 i + 1 = 1.... 3이될때까지+1
// for (let i = 0; i < animalsA.length; i = i + 1) i는 animalsA.length(배열의길이) 보다작을시 i + 1  배열의길이는4이기때문에 4가될때까지+1
// length는 4개 i는 4보다 작아야하니 i는 0,1,2,3 이될때까지
// length 를쓰는이유는 animalA가 추가될때마다 값을바꿀수는없으니 length로 길이를정의해논것.
for (let i = 0; i < animalsA.length; i = i + 1) {
  console.log(animalsA[i]); // dog, cat, fish, lion
}

// for of문

// for (변수 of 배열) {
//   실행문;
// }

for (let animal of animalsA) {
  console.log(animal); //dog, cat, fish, lion
}

// 예시2
const users = [
  { name: "겨울이", age: 2 },
  { name: "여울이", age: 8 },
  { name: "가을이", age: 1 },
];

console.log(users[0]); //  { name: '겨울이', age: 2},
console.log(users[1]); //  { name: '여울이', age: 8},
console.log(users[2]); //  { name: '가을이', age: 1},

// i++ 선출력 후연산
for (let i = 0; i < 3; i = i++) {
  console.log(users[i]); //  { name: '겨울이', age: 2}, { name: '여울이', age: 8},{ name: '가을이', age: 1},
}

// user = 변수 of users = 배열
for (let user of users) {
  console.log(user); //  { name: '겨울이', age: 2}, { name: '여울이', age: 8},{ name: '가을이', age: 1},
  console.log(user.name); // 겨울이, 여울이, 가을이
}

const user = {
  name: "겨울이",
  age: 2,
  cute: true,
};

//변수는 따옴표x
for (let key in user) {
  console.log(key); // name, age, cute
  console.log(user[key]); // 겨울이, 2, ture
}

// while (조건) { 실행문 }

// 0 ~ 9 까지 출력
let j = 0;

while (j < 10) {
  console.log(j);
  j = j + 1; // j++ 이랑 같음
}
// 0 ~ 9 까지 출력
let k = 0;

do {
  console.log(k);
  k++;
} while (k < 10); // 조건이
