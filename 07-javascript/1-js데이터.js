//string (문자열)
const string1 = "hello"; // 큰따움표 가능
const string2 = "artnook"; // 작은따움표 가능
const string3 = `bye ${string1} ${1 + 1}`; // 뺵틱 가능

console.log(string1, string2, string3);

//number (숫자)
const number = 123;
const negative = -123;
const float = 0.123;

console.log(number + 1);
console.log(negative + number);
console.log(float + number);

const number2 = -123.123;

console.log(number2 + undefined);
// NAN not number
console.log(typeof (number2 + undefined));

// 숫자로 변환
const a = 0.1;
const b = 0.2;

console.log(a + b);

// 소수점 첫번째 자리만 나옴
console.log((a + b).toFixed(1));
console.log(typeof (a + b).toFixed(1));
console.log(Number(a + b).toFixed(1));

// boolean (참과 거짓)
const truty = true;
const falsy = false;

// 실행가능
if (truty) {
  console.log("truty");
}
// 실행불가능
if (falsy) {
  console.log("truty");
}

// null

let age = null;
console.log(age);
//  재할당의 경후 let 사용하지 않음
age = 20;
console.log(age);

// undefined
let height;
console.log(height);

height = "artnook";
console.log(height);

// ex
const user1 = {
  name: "artnook",
  age: 20,
  height: 180,
  email: null,
};

console.log(user1.name, user1.age, user1.height, user1);
console.log(user1.email);
// null
console.log(user1.weight);
// undefined

// array(배열)
const animals = ["dong", "cat", "monkey"];

console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals.length);
console.log(animals[animals.length - 1]);

// objact
const user2 = {
  name: "artnook",
  age: 20,
};

console.log(user2);
console.log(user2.name);
console.log(user2.age);
console.log(user2["name"]);
console.log(user2["age"]);

//ex
const userA = {
  name: "kim",
  age: 50,
};
const userB = {
  name: "lee",
  age: 20,
  parent: userA,
};

console.log(userB);
console.log(userB.parent.name);
console.log(userB["parent"]["name"]);

// 배열에 객체 넣기
const users = [userA, userB];
console.log(users[0]);
console.log(users[0].name);
console.log(users[0]["name"]);

// function(함수)
function printHello() {
  console.log("hello");
}
// printHllo;

console.log(printHello);
console.log(printHello());

const getNumber = function () {
  return 123;
};

console.log(getNumber);
console.log(typeof getNumber);
console.log(getNumber());
console.log(typeof getNumber());

// Type coverstion

const aa = 1;
const bb = "1";

console.log(aa == bb);
console.log(aa === bb);

const cc = false;
const dd = 0;

console.log(cc == dd);
console.log(cc === dd);

const ee = true;
const ff = 1;

console.log(ee == ff);
console.log(ee === ff);

// truthy (참 같은 값) & falasy(거짓 같은 값)

if (true) {
  console.log("true");
}
// if (false) {
//   console.log("true");
// }

// 데이터 타입 확인 (typeof)
console.log(typeof "123");
// ""문자
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
// []배열
console.log(typeof function () {});
