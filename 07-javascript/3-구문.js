const arr = [1, 2, 3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// 구조 분해 할당
const [a, b, c] = arr;

console.log(a, b, c);

// 변수가 미리 할당되어 있을 경우
let e = 5;
let f = 6;

const arr2 = [1, 2, 3];

// const d = arr2[0]
// 구조 분해 할당
[, e, f] = arr2;

console.log(e, f);

// 나머지 할당
const arr3 = [6, 7, 8];
const [g, rest] = arr3;

console.log(g, rest);

//객채 구조 분해 할당
const obj = {
  h: 1,
  i: 2,
  j: 3,
};

// const ee = obj.e;
// const ff = obj.f;
// const gg = obj.g;

//구조 분해 할당
const { h = 4, i: free, k: kk = 10 } = obj;

console.log(h, free, kk);

//선택적 체이닝(?.)
let user = null;

// console.log(user.name);
console.log(user?.name);

//예시
let user2 = {
  name: "winter",
  age: 2,
  address: {
    city: "seoul",
    zipcode: "12345",
  },
};

let user3 = {
  name: "fall",
  age: 3,
};

function printCity(user) {
  return user.address?.city || "주소 정보가 없습니다";
}

console.log(printCity(user2));
console.log(printCity(user3));
