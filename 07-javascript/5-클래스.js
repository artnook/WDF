// const animals = ["개", "고양이", "참새"]; //배열 리터럴

//생성자 함수로 배열을 만들 수 있다
// const animals = new Array("개", "고양이", "참새");

// console.log(animals);
// console.log(animals.length);
// console.log(animals[1]);
// console.log(animals.includes("개"));
// console.log(animals.includes("인간"));
//위와 같이 legth, includes 등을 프로토타입 속성이라고 한다.

//prototype을 이용한 메소드 생성
const animals = new Array("dog", "cat", "bird");

//배열의 프로토타입에 artnook 메소드 추가

Array.prototype.artnook = function () {
  console.log(this);
};

animals.artnook();

const arr = [1, 2, 3];
arr.artnook();

//메소드를 사용한 fullname 출력
// const winter = {
//   firstName: "winter",
//   lastName: "son",
//   getFullName: function () {
//     //일반 함수에서 this는 호출한 객체를 가리킨다.
//     return `${this.firstName} ${this.lastName}`;
//   }, //메소드
// };

// const fall = {
//   firstName: "fall",
//   lastName: "kim",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

console.log(winter);
console.log(fall);
console.log(winter.getFullName());
// console.log(fall.getFullName());
console.log(winter.getFullName.call(fall));

//생성자 함수를 통해 객체 만들기

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

//class함수를 이용한 생성자 함수
class User {
  constructor(first, last) {
    this.firstName;
    last.lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
//new를 통해 객체를 생성한다.
const winter = new User("winter", "son");
const fall = new User("fall", "winter");

console.log(winter);
console.log(fall);
console.log(winter.getFullName);
console.log(fall.getFullName);
