const inputData = [
  {
    id: 1,
    name: 'Item 1',
  },
  {
    id: 2,
    name: 'Item 2',
  },
  {
    id: 4,
    name: 'Item 4',
  },
  {
    id: 7,
    name: 'Item 7',
  },
];

const normalizeData = array => {
  const resultObjectData = {};
  const objectData = {};
  const arrayId = [];

  array.forEach(item => {
    arrayId.push(item.id);
    console.log(arrayId);

    objectData[item.id] = item;
  });

  resultObjectData.entities = objectData;
  resultObjectData.byID = arrayId;
  return resultObjectData;
};

console.log(normalizeData(inputData));
