// const inputData = [
//   {
//     id: 1,
//     name: "Item 1",
//   },
//   {
//     id: 2,
//     name: "Item 2",
//   },
//   {
//     id: 4,
//     name: "Item 4",
//   },
//   {
//     id: 7,
//     name: "Item 7",
//   },
// ];

// const normalizeData = (array) => {
//   const resultObjectData = {};
//   const objectData = {};
//   const arrayId = [];

//   array.forEach((item) => {
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

// ("use strict");

// const fn = (arguments) => {
//   console.log(arguments);
// };

// fn(1, 2, 3, 4, 5);

// function User(userObject) {
//   const { userName, age, numbersOfPost } = userObject;
//   this.userName = userName;
//   this.age = age;
//   this.numbersOfPost = numbersOfPost;
//   this.getInfo = function () {
//     console.log(
//       `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
//     );
//   };
// }

// const mango = new User({ userName: "Mango", age: 36, numbersOfPost: 10 });
// mango.getInfo();

// const technologies = ["html", "css", "js", "react", "node", "mongo"];

// const listEl = document.createElement("ul");

// for (const technology of technologies) {
//   const liEl = document.createElement("li");
//   // liEl.textContent = technology;
//   const text = document.createTextNode(technology);
//   liEl.appendChild(text);
//   listEl.appendChild(liEl);
// }

// document.body.appendChild(listEl);

// const markup = `<ul>${technologies
//   .map((technology) => `<li>${technology}</li>`)
//   .join("")}</ul>`;
// document.body.insertAdjacentHTML("beforeend", markup);

// const markup = `<ul>${technologies.reduce(
//   (acc, technology) => (acc += `<li>${technology}</li>`),
//   ""
// )}</ul>`;
// document.body.insertAdjacentHTML("beforeend", markup);

// const colors = [
//   {
//     label: "Choose color",
//     color: "#FF0000",
//   },
//   {
//     label: "Tomato",
//     color: "tomato",
//   },
//   {
//     label: "Orange",
//     color: "orange",
//   },
//   {
//     label: "Yellow",
//     color: "yellow",
//   },
// ];

// const fragment = document.createDocumentFragment();

// colors.map(({ label, color }) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.textContent = label;
//   buttonEl.style.backgroundColor = color;
//   fragment.appendChild(buttonEl);
// });

// document.body.appendChild(fragment);

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler");
// });

// const petsList = [
//   {
//     kind: "Dog",
//     year: 2015,
//     name: "lassie",
//   },
//   {
//     kind: "Cat",
//     year: 2016,
//     name: "einstein",
//   },
//   {
//     kind: "Hedgehod",
//     year: 2019,
//     name: "elizabeth",
//   },
//   {
//     kind: "Hamster",
//     year: 2020,
//     name: "alcatraz",
//   },
// ];

// function generatePetCard({ kind, year, name }) {
//   const li = document.createElement("li");
//   li.classList.add("pet-card");

//   li.innerHTML = `
//     <h2 class="pet-card__title">${kind}</h2>
//     <p class="pet-card__text">Year: ${getAge(year)} ${getYearsEndWord(
//     getAge(year)
//   )}</p>
//     <p class="pet-card__text">Name: ${name}</p>
//     <button class="pet-card__btn">Delete</button>
//   `;

//   // The deleteBtn variable and the event listener are now uncommented
// const deleteBtn = li.querySelector(".pet-card__btn");
// deleteBtn.addEventListener("click", () => {
//   li.remove();
// });

// function getAge(year) {
//   return new Date().getFullYear() - year;
// }

// function getYearsEndWord(age) {
//   if (age % 10 === 1 && age % 100 !== 11) {
//     return "year";
//   } else if (
//     age % 10 >= 2 &&
//     age % 10 <= 4 &&
//     (age % 100 < 10 || age % 100 >= 20)
//   ) {
//     return "years";
//   } else {
//     return "years";
//   }
// }

// const petsContainer = document.querySelector(".pets");

// petsList.forEach((pet) => {
//   const petCard = generatePetCard(pet);
//   petsContainer.appendChild(petCard);
// });

// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error("Set state error: ", error.message);
//   }
// };

// const load = (key) => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }
// };

// const remove = (key) => {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.error("Remove state error: ", error.message);
//   }
// };
// import Parcel from "parcel";

// const greet = () => {
//   console.log("Hello!");
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"
// Change value of isSuccess variable to call resolve or reject
// Change value of isSuccess variable to call resolve or reject
// Change value of isSuccess variable to call resolve or reject
// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = false;

//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then((user) => console.log(user))
//   .catch((error) => console.error(error));

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         resolve("resolved");
//       }
//       reject("rejected");
//     });
//   }, 2000);
// };

// makePromise().then((result) => console.log(result)),
//   (error) => console.log(error);

// doSomething().then(function () {
//   return doSomethingElse();
// });

// doSomething().then(function () {
//   doSomethingElse();
// });

// doSomething().then(doSomethingElse());

// doSomething().then(doSomethingElse);

// Promise.resolve("foo")
//   .then(Promise.resolve("bar"))
//   .then(function (result) {
//     console.log(result);
//   });

// Promise.resolve("foo")
//   .then(null)
//   .then(function (result) {
//     console.log(result);
//   });

// Promise.resolve("foo")
//   .then(function () {
//     return Promise.resolve("bar");
//   })
//   .then(function (result) {
//     console.log(result);
//   });

// const promise = new Promise((resolve) => {
//   resolve(10);
// });

// promise
//   .then((value) => {
//     new Promise((resolve) => {
//       resolve(value * 2);
//     });
//   })
//   .then((value) => console.log(value));

// setTimeout(function timeout() {
//   console.log("A");
// }, 0);

// let p = new Promise(function (resolve, reject) {
//   console.log("B");
//   resolve();
// });

// p.then(function () {
//   console.log("C");
// });

// console.log("D");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const user = {
//       id: 0,
//       name: "Vladilen",
//       age: 25,
//       status: true,
//     };
//     if (user.id === undefined) reject(new Error("No id"));
//     resolve(user);
//   }, 2000);
// });

// promise.then((data) => {
//   return new Promise((resolve, reject) => {
//     data.status = false;
//     resolve(data);
// setTimeout(() => {
//   console.log("Data received", data);
//   data.status = false;
// }, 2000);
//   })
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// });

// setTimeout(() => {
//   console.log("Preparing data...");
//   const user = {
//     id: 0,
//     name: "Vladilen",
//     age: 25,
//     status: true,
//   };

//   setTimeout(() => {
//     user.status = false;
//     console.log("Data received", user);
//   }, 1000);
// }, 2000);

const sleep = (ms) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (ms === 3000) reject("1000");
      resolve(ms);
    }, ms)
  );

// sleep(2000).then(() => console.log("After 2 sec"));
// sleep(3000).then(() => console.log("After 3 sec"));

Promise.race([sleep(2000), sleep(3000), sleep(1000)])
  .then((data) => {
    console.log("race promises");
    console.log(data);
  })
  .catch((error) => console.error(error));
