// const inputData = [
//   {
//     id: 1,
//     name: 'Item 1',
//   },
//   {
//     id: 2,
//     name: 'Item 2',
//   },
//   {
//     id: 4,
//     name: 'Item 4',
//   },
//   {
//     id: 7,
//     name: 'Item 7',
//   },
// ];

// const normalizeData = array => {
//   const resultObjectData = {};
//   const objectData = {};
//   const arrayId = [];

//   array.forEach(item => {
//     arrayId.push(item.id);
//     console.log(arrayId);

//     objectData[item.id] = item;
//   });

//   resultObjectData.entities = objectData;
//   resultObjectData.byID = arrayId;
//   return resultObjectData;
// };

// console.log(normalizeData(inputData));

// const numbers = [-90, 45, 0, 16, -18, 24, -67, 43];

// const totalPosAndNegSum = function (arr) {
//   return arr.reduce(
//     (acc, element) => {
//       if (element > 0) {
//         acc.pos += element;
//       } else {
//         acc.neg += element;
//       }
//       return acc;
//     },
//     { pos: 0, neg: 0 }
//   );
// };

// console.log(totalPosAndNegSum(numbers));

// const chopShop = {
//   stones: [
//     { name: "diamond", price: 1000, quantity: 2 },
//     { name: "emerald", price: 500, quantity: 5 },
//     { name: "sapphire", price: 300, quantity: 10 },
//     { name: "ruby", price: 200, quantity: 20 },
//   ],
//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find(({ name }) => name === stoneName);
//     return currentStone.price * currentStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("ruby"));

// const calculator = {
//   a: 0,
//   b: 0,
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//     return this;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(3, 5);
// console.log(calculator);

// console.log(calculator.add());
// console.log(calculator.mult());

// console.log(calculator.read(55, 10).mult());

// const customer = {
//   name: "John",
//   lastName: "Doe",
//   getFullName() {
//     console.log(this);
//     return `${this.name} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   console.log(`Hello, ${callback()}!`);
// }

// const user = {
//   name: "James",
//   lastName: "Bond",
// };

// makeMessage(customer.getFullName.bind(user));

// const obj = {
//   name: "John",
//   sayHi: () => {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const obj2 = {
//   obj,
// };

// obj2.obj.sayHi();

// class Blogger {
//   constructor({ name, age, numbersOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numbersOfPosts = numbersOfPosts;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `Blogger ${this.name} is ${this.age} years old and has ${this.numbersOfPosts} posts`;
//   }
//   updatePostCount(value) {
//     this.numbersOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numbersOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// const poly = new Blogger({
//   name: "poly@mail.com",
//   age: 18,
//   numbersOfPosts: 10,
//   topics: ["sport", "cooking"],
// });

// console.table(mango);

// console.log(mango.getInfo());

// mango.updatePostCount(7);

// console.log(mango.getInfo());

// console.log(poly);

// class Rectangle {
//   constructor({ height, width }) {
//     this.name = "Rectangle";
//     this.width = width;
//     this.height = height;
//   }
//   calculateArea() {
//     return this.width * this.height;
//   }

//   sayHello() {
//     console.log(
//       `Hello, I am ${
//         this.name
//       }. My area is ${this.calculateArea()} square units.`
//     );
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super({ height: length, width: length });
//     this.name = "Square";
//   }
// }

// const rectangle = new Rectangle({ height: 10, width: 20 });
// const square = new Square(10);
// rectangle.sayHello();
// square.sayHello();

// const person = { name: "Mango" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 18));
// console.log(sayHi.bind(person, 19)());

// function slider(sliderCount) {
//   let photoNumber = sliderCount;

//   function animation(time) {
//     return `Animation ${photoNumber} in ${time}ms`;
//   }

//   return animation;
// }

// const slider1 = slider(10);
// console.log(slider1(200));

// const slider2 = slider(20);
// console.log(slider2(300));

// const slider3 = slider(30);
// console.log(slider3(400));

// const user = {
//   name: "John",
//   age: 30,
//   status: "Premium",
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.status);

// const userChoice = prompt("Enter object key");
// console.log(user[userChoice]);

// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["status"]);

// class Samurai {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     alert(`My name is ${this.name}`);
//   }
// }

// let shogun = new Samurai("Shogun");
// console.log(shogun.__proto__.__proto__ === Object.prototype);
// console.log(shogun.__proto__.constructor.__proto__ === Function.prototype);
// console.log(shogun.__proto__.__proto__.__proto__ === null);

// const students = ["Alex Simak", "Ivan Ivanov", "Petr Petrov"];

// const studentUpd = students.reduce((acc, student) => {
//   const [firstName, lastName] = student.split(" ");
//   const studentObj = {
//     firstName,
//     lastName,
//     group: "GoIT-74",
//   };
//   acc.push(studentObj);
//   debugger;

//   return acc;
// }, []);

// console.log(studentUpd);

// const studentsUpd1 = students.map((student) => {
//   const [firstName, lastName] = student.split(" ");
//   return {
//     firstName,
//     lastName,
//     group: "GoIT-74",
//   };
// });

// console.log(studentsUpd1);

// const fruits = ["apple", "pear", "cherry", "apple", "banana", "apple"];

// const occ = fruits.reduce((acc, fruit) => {
//   acc[fruit] = acc[fruit] ? acc[fruit] + 1 : 1;
//   return acc;
// }, {});

// console.log(occ);

// const users = { name: "Mango", age: 2, hobby: "html", premium: true };

// function convertHashToArray(hash) {
//   return Object.entries(hash);
// }

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   console.log(select.options);
//   const selectedOptionValue = select.value;
//   console.log(selectedOptionValue);
//   const selectedOptionIndex = select.selectedIndex;
//   console.log(selectedOptionIndex);
//   const selectedOptionText = select.options[selectedOptionIndex].text;
//   console.log(selectedOptionText);

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

// const targetBtn = document.querySelector("#btn");
// const addListenerBtn = document.querySelector("#add-btn");
// const removeListenerBtn = document.querySelector("#remove-btn");

// addListenerBtn.addEventListener("click", (event) => {
//   console.log(event);
//   console.log("add ListenerBtn");

//   targetBtn.addEventListener("click", onTargetBtnClick);
// });

// removeListenerBtn.addEventListener("click", (event) => {
//   console.log("remove ListenerBtn");

//   targetBtn.removeEventListener("click", onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//   console.log("click on targetBtn");
// }

// const form = document.querySelector(".js-register-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     alert("Please fill in all fields");
//     return;
//   }

//   const formData = {
//     email: email.value,
//     password: password.value,
//   };

//   console.log(formData);
//   event.currentTarget.reset();
// }

// "use strict";

// const fn = (arguments) => {
//   console.log(arguments);
// };

// fn(1, 2, 3, 4, 5);

function User(userObject) {
  const { userName, age, numbersOfPost } = userObject;
  this.userName = userName;
  this.age = age;
  this.numbersOfPost = numbersOfPost;
  this.getInfo = function () {
    console.log(
      `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
    );
  };
}

const mango = new User({ userName: "Mango", age: 36, numbersOfPost: 10 });
mango.getInfo();
