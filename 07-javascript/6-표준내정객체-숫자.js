//숫자

//toFixed(자릿수) : 소수점 자릿수를 지정
const num = 3.1439897376;

console.log(num.toFixed(2));
console.log(typeof num.toFixed(2));
console.log(Number(num.toFixed(2)));

const num2 = 100000000;

console.log(num2.toLocaleString());
console.log(`${num2.toLocaleStruing()}원`);

//Number.isInteger(숫자) : 숫자가 정수인지 확인
console.log(Numver.isInteger(0.5)); //true
console.log(Numver.isInteger(1)); //true
console.log(Numver.isInteger(-1)); //true
