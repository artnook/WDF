// 산술 연산자

console.log(1 + 2);
console.log(5 - 7);
console.log(5 * 7); //곱하기
console.log(10 / 2); //나누기
console.log(7 % 5); //배수 (배수 인지 확인 방법은 0이 나왔을때)

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(3));
console.log(isEven(4));

let a = 2;
console.log(a);

a = 3;
console.log(a);

// a = a + 3;
a += 3;
console.log(a);

// 증가 연산자
let b = 1;

b = b + 1;
console.log(++b);
console.log(++b);

// 감소 연산자
let c = 1;

//  c = c -1
console.log(c--);
console.log(c);

// 부정 연산자
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);
console.log(!!0);

console.log(![]);
console.log(!{});
console.log(!null);
console.log(!function () {});

// 비교 연산자
// ==, ===, !=, !==, >, >=, <, <=

console.log(1 == "1");
console.log(1 === "1");
console.log(1 != "1");
console.log(1 !== "1");

const f = true;
const g = true;

if (f && g) {
  console.log("둘 다 참입니다");
}

console.log(true && false);
console.log(1 && 0);
console.log(1 && 2 && 0);
console.log(1 && 0 && 3);
console.log("a" && "b");
console.log(a && b && c);

// 또(||)는 연산자
const h = false;
const i = true;

if (h || i) {
  console.log("둘 중 하나라도 참입니다.");
}

// 연산자를 기준으로 가장 먼저 만나는 참 데이터
console.log(true || false);
console.log(1 || 0);
console.log(false || {} || 0);
console.log(false || [] || null);
console.log(function () {} || "" || undefined);
console.log(false || 0 || "" || NaN);

// 병합 연산자
// a??b
const j = 0;

console.log(j || 5);
console.log(j ?? 5);
console.log(null ?? 1);
console.log(undefined ?? 1);
console.log(undefined || null);
console.log(null ?? 1 ?? 2);
console.log(0 ?? 1 ?? 2);

// 삼항 연산자
// 조건 ? 참 : 거짓

console.log(true ? 1 : 2);
console.log(false ? 1 : 2);

// if문
let p = 5;

// if (p < 3) {
//   console.log("p는 3보다 작습니다");
// } else {
//   console.log("ps는 3보다 큽니다");
// }

console.log(p < 3 ? "참" : "거짓");

//예시
function isAnimal(text) {
  return text === "고양이" ? "고양이" : "고양이 아님";
}

console.log(isAnimal("고양이"));
console.log(isAnimal("개"));

// 전개 연산자
// 배열의 전개
const q = [1, 2, 3];
const r = [4, 5, 6];

console.log(q.concat(r));
console.log([...q, ...r]);

// 객채의 전개
const userC = {
  name: "김부모",
  age: 50,
};
const userD = {
  ncik: "김자식",
  age: 20,
  // parent : userC
  ...userC,
};

console.log(userD);

// 함수의 전개
function sum(a, b, c) {
  console.log(a + b + c);
}

sum(1, 2, 3);

const num = [1, 2, 3];
sum(num[0], num[1], num[2]);

sum(...num);
