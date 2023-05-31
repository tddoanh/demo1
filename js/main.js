"use strict";
// let a1;
// a1 = 10;
// alert(a1);
/*
function sayHi(){
    alert('Hello world!!!');
}
*/
//Khai báo biến

var a = 10; //number
let name = "Lê Văn A"; //string
let b = "Hello";

// console.log(typeof (a > 5))
//Hằng số
const BIRTH_YEAR = 2000;

//scope
{
  let b = 10;
}
// alert(b);

a = 100;
name = "Nguyễn Thị B";

// alert(BIRTH_YEAR);
// console.log(name)

// Toán tử - operator
a = 2;
a *= 5; //a = a * 5;

a++; //a +=1 hay a = a + 1;

b = 2 * (5 + 3 - 2);
// alert(b);

//Phép nối chuỗi +
let c = 100 + (2 + "@");
// alert(c);
a = 4;
b = 5;
c = a * b;

//alert(a + ' * ' + b + " = " + c)
// alert(`${a} * ${b} = ${c}`)

// Lệnh rẽ nhánh/điều kiện

let dtb = 6.0;
// if(dtb >= 5)
//     alert("Đậu");
// else
// //if(dtb < 5)
//     alert("Rớt");

// dtb >= 5 ? alert("Đậu") : alert("Rớt");

// let month = 5;

//Khai báo/định nghĩa hàm
function monthToQuarter(month = 1) {
  if (month < 1 || month > 12) alert(`Tháng ${month} không hợp lệ`);
  else if (month <= 3) alert(`Tháng ${month} thuộc Qúy 1`);
  else if (month <= 6) alert(`Tháng ${month} thuộc Qúy 2`);
  else if (month <= 9) alert(`Tháng ${month} thuộc Qúy 3`);
  else alert(`Tháng ${month} thuộc Qúy 4`);
}

//Gọi/sử dụng hàm
// monthToQuarter(5);
// monthToQuarter(10);
// monthToQuarter(8);
// monthToQuarter(15);
// monthToQuarter();


const oddOrEven = (number) => {
    monthToQuarter(number);
    if(number % 2 == 0)
        return number + " is even number";
    else
        return number + " is odd number";
}

// let result = oddOrEven(10);
// console.log("Result:" + result);
// result = oddOrEven(5);
// alert(result);


// month = 10;
// if(month < 1 || month > 12)
//     alert("Tháng không hợp lệ");
// else if(month <= 3)
//     alert("Q1");
// else if(month <= 6)
//     alert("Q2");
// else if(month <= 9)
//     alert("Q3");
// else
//     alert("Q4");

// switch(month){
//     case 1://month === 1
//     case 2:
//     case 3:
//         alert("Q1");break;
//     case 4:
//     case 5:
//     case 6:
//         alert("Q2");break;
//     case 7:
//     case 8:
//     case 9:
//         alert("Q3");break;
//     case 10:
//     case 11:
//     case 12:
//         alert("Q4");break;
//     default:
//         alert("Tháng không hợp lệ");
// }

//Array - Mang

//Khai bao
let arr = [4,10,9,5,7,10,"A","Hello"];
// console.log(arr);

//Truy xuat
// alert(arr[7]);
arr[6] = "B";
// console.log(arr);

//Them phan tu
arr.push(100);//them vao cuoi mang
arr.unshift(-100);//them vao dau mang

//Lay phan tu ra
arr.pop();//Lay cuoi mang
arr.shift();//Lay dau mang

//Xoa
arr.splice(1,2);//Xoa 2 phan tu bat dau tu vi tri 1

//Vong lap
// for(let i = 10; i > 0; i--)
//   console.log(i);

// let i = 0;
// while(i < 10){
//   console.log("i:"+i);
//   i++;
// }

arr = [4,10,9,5,7,10,100,-50];
let s = 0;
console.log(arr);
for(let i = 0; i < arr.length; i++){
  s = s + arr[i];
  console.log(s);
}
// alert(s);

//Object
let person = {
    //Properties
    name: "Nguyen Van A",
    birthYear: 2000,
    gender: "Male",
    //Methods
    getAge: function(){
       return new Date().getFullYear() - this.birthYear;
    }
}
console.log(person);
//Truy xuat
//alert(person.getAge());
console.log(person["gender"])
console.log(person.gender)