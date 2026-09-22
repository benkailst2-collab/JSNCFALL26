const studentNames=["john wick", "jane doe", "alice smith", "bob brown", "charlie davis"];
const ids=[1, 2, 3, 4, 5];
const active=[true, false, true, false, true];

console.log("ban dau: ", studentNames[0]);
studentNames[0]="hoadv";
// studentNames="hoadv";
// console.log("sau khi thay doi: ", studentNames[0]);
console.log("do dai array: ", studentNames.length);

studentNames.push("new student");
console.log("sau khi thay doi: ", studentNames);

for(let i=0; i<studentNames.length; i++){
    console.log("student: ", studentNames[i]);
}

const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  email: "an@gmail.com",
  major: "CNTT",
};
console.log("student: ", student);
console.log("student name: ", student.name);
console.log("student age: ", student.age);
console.log("student email: ", student.email);
student.age = 21;
student.phone = "0123456789";

const students = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
  },
  {
    id: 2,
    name: "Trần Văn Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Lê Văn Nam",
    age: 20,
  },
];
console.log("Danh sách sinh viên:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
console.log("Tên sinh viên đầu tiên:", students[0].name);
console.log("Tuổi sinh viên thứ hai:", students[1].age);
for (let i = 0; i < students.length; i++) {
  console.log("Tên sinh viên:", students[i].name);
}
let html=document.getElementById("students");
let content='';
for(let i=0; i<students.length; i++){
    content+=`Tên sinh viên: ${students[i].name}<br>ID sinh viên: ${students[i].id}<br>`;
}
html.innerHTML=content;
console.log(html);

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 20000000,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 18000000,
  },
  {
    id: 3,
    name: "Xiaomi 14",
    price: 12000000,
  },
];
const list=products.map(function(product){
    return product.id,product.name, product.price;
});
console.log(list);
for(let i=0; i<products.length; i++){
    console.log("Tên sản phẩm: ", list[i]);
};
for(let i=0; i<products.length; i++){
    console.log("Tên sản phẩm: ", list[i].name, " - Giá: ", list[i].price);
};
let totalPrice=0;
for(let i=0; i<products.length; i++){
    totalPrice+=products[i].price;
}
let productList=document.getElementById("products");
let productContent='';
for(let i=0; i<products.length; i++){
    productContent+=`Tên sản phẩm: ${products[i].name}<br>Giá: ${products[i].price}<br>`;
}
productList.innerHTML=productContent;