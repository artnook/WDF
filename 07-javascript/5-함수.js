// 함수 선언하기

hello();

// 함수 선언문

function hello() {
  console.log("hello");
}
// 함수 표현식

const world = function () {
  console.log("world");
};
world();

//return(반환) & 종료
//함수는 return을 만나면 종료된다.
//return 뒤에 오는 코드는 실행되지 않는다.

function hello1() {
  return "hello1";
  console.log("hi");
}
function hello2() {
  return;
}
function hello3() {
  return 1;
  //return2;
}
function hello4() {
  console.log("4");
  return 3;
}
console.log(hello1());
console.log(hello2());
console.log(hello3());
console.log(hello4());

//예시
function getGrade(score) {
  if (score === 100) {
    //A+
    return "A+";
  } else if (score >= 90) {
    //A
    return "A";
  } else if (score >= 80) {
    //B
    return "B";
  } else if (score >= 70) {
    //C
    return "C";
  } else if (score >= 60) {
    //D
    return "D";
  } else if (score >= 50) {
    //F
    return "F";
  }
}

console.log(getGrade(50));

//매개변수 패턴
function sum(x, y) {
  return x + y;
}

console.log(sum(1, 5));
console.log(sum(1));

//객체 구조 분해 할당
const user = {
  name: "winter",
  age: 2,
};

function getName({ name }) {
  return name;
}

function getEmail({ email = "이메일이 없습니다." }) {
  return email;
}

console.log(getName(user));
console.log(getEmail(user));

//배열의 구조 분해 할당
const animals = ["dog", "cat", "fish"];

function getSecond([, b, c]) {
  return b, c;
}

console.log(getSecond(animals));

//화살표 함수
function 함수이름(매개변수) {
  실행문;
}

(매개변수) => {
  실행문;
};

function hello() {
  console.log("hello");
}

const hello11 = function () {
  console.log("hello11");
};
const hello12 = () => {
  console.log("hello12");
};
hello();
hello11();
hello12();

//sum 함수
//선언문
function sum1(x, y) {
  return x + y;
}

//표현식
function sum2(x, y) {
  return x + y;
}

//화살표 함수
const sum3 = (x, y) => {
  return x + y;
};

//화살표 함수 축약
const sum4 = (x, y) => x + y;

console.log(sum1(1, 2)); //3
console.log(sum2(1, 2)); //3
console.log(sum3(1, 2)); //3
console.log(sum4(1, 2)); //3

//화살표 함수 예시
const a = () => {};
const b = (x) => {};
const c = (x, y) => {};
const d = (x) => {
  return x + x;
};
const e = (x) => x + x;
const f = (x) => {
  console.log(x);
  return x * x;
};

const g = () => {
  {
    return { a: 1 };
  }
};

const h = () => ({ a: 1 });

const i = () => {
  return [1, 2];
};
const j = () => [1, 2];

//객체 구조 분해 할당
const user1 = {
  name: "가을",
  age: 2,
};

function print({ name, age }) {
  // const { name, age } = u;
  return `${name}은 ${age}살 입니다`;
}

console.log(print(user1));

//배열의 구조 분해 할당
const animals1 = ["개", "고양이", "참새"];

function print2(arr) {
  // const [, b] = arr;
  return b; //고양이
}

console.log(print2(animals1));

//나머지 매개변수
function sum9(a, b, ...rest) {
  console.log(a, rest);
}

console.log(sum9(1, 2));
console.log(sum9(1, 2, 3, 4, 5, 6));

//화살표 함수
//기본문법
// const name = () => {};
// (x) => {}; //매개변수 하나일 때 소괄호 생략 가능
// (x, y) => {};
// (x) => {
//   return x + x;
// };
// (x) => x + x; //중괄호 생략시 return 문 생략 가능
// (x) => {
//   console.log(x);
//   return x * x;
// }; //return 문이 있는 경우 중괄호 생략 불가능

const gg = () => {
  return { a: 1 };
};
const ggg = () => ({ a: 1 });

const hh = () => {
  return [1, 2];
};
const hhh = () => [1, 2];

//콜백 함수
//함수 매개변수로 전달되는 ㅎㅁ수

const aa = (callback) => {
  callback();
  console.log("a");
};

const bb = () => {
  console.log("b");
};

aa();

//매개변수 기본값
function sum10(x, y = 1) {
  return x + y;
}

console.log(sum10(1, 3));
console.log(sum10(1)); //1 + undefined = NaN
console.log(sum10(1)); //2

//콜백 함수

const cc = (c) => {
  c();
  console.log("cc");
};

const dd = () => {
  console.log("dd");
};

cc(dd);
