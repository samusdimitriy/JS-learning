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

const calculator = {
  a: 0,
  b: 0,
  read(a, b) {
    this.a = a;
    this.b = b;
    return this;
  },
  add() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};

calculator.read(3, 5);
console.log(calculator);

console.log(calculator.add());
console.log(calculator.mult());

console.log(calculator.read(55, 10).mult());
