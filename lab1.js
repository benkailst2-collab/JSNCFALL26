console.log("day la lab 1");
// PHP ; $_tenbien
// JS let, const

let name = "hoadv"; // string
let age = 36; // number
age = "30"; // string
let myName = "hoadv21"; // string
// boolean: true / false
let online = true;
let isActive = true;
// Nếu đúng thì xảy ra
if (isActive) {
  console.log("hoat dong ", isActive);
}

// tham trị, tham chiếu, địa chỉ bộ nhớ máy tính
name = "hoadv21";
age = 40;
const a = 10;
const b = 3;
console.log(a * b);
console.log(a / b);
console.log("Ten toi la: ", name);
console.log("Tuoi cua toi la:", age);

// Ham
function sayHello() {
  console.log("xin chao");
  return 10;
}
sayHello();
function whatsup(name){
  console.log(name);
}
whatsup("hoadv");

function sum(a, b) {
  return a + b;
}
  sum(10, 20);

  function sum2(c, d){
    total=c*d;
    console.log("tong la: ", total);
    return;
}
sum2(10, 20);

const math = 8;
const english = 7;
const javascript = 9;
function calculateAverage(math, english, javascript) {
  const average = (math + english + javascript) / 3;
  console.log("Diem trung binh la: ", average);
  return average;
}

