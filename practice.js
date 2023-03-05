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

const numbers = [-90, 45, 0, 16, -18, 24, -67, 43];

const totalPosAndNegSum = function (arr) {
  return arr.reduce(
    (acc, element) => {
      if (element > 0) {
        acc.pos += element;
      } else {
        acc.neg += element;
      }
      return acc;
    },
    { pos: 0, neg: 0 }
  );
};

console.log(totalPosAndNegSum(numbers));
