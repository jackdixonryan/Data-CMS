const firstArr = [1, 2, 3, 4];
const secondArr = [5, 6, 7, 8];
const names = ['January', 'February', 'March', 'April'];

const nameVector = (vector, names) => {
  const vLength = vector.length;
  const nLength = names.length;
  if (vLength !== nLength) {
    console.log('The two values must match in length to accurately name the vector.');
  } else {
    const namedVector = {}
    for (let i = 0; i < vector.length; i++) {
      namedVector[names[i]] = vector[i];
    }
    return namedVector
  }
}

const selectName = (name, dataVector, labelVector) => {
  const assc = nameVector(dataVector, labelVector);
  return `${name}: ${assc[name]}`
}

const selectNameRange = (namesArr, dataVector, labelVector) => {
  const assc = nameVector(dataVector, labelVector);
  const res = [];
  for (let i = 0; i < namesArr.length; i++) {
    res.push(assc[namesArr[i]]);
  }
  return `${namesArr} \n ${res}`;
}

const totalByIndex = (arrOne, arrTwo) => {
  const totaled = [];
  for (let i = 0; i < arrOne.length; i++) {
    totaled.push(arrOne[i] + arrTwo[i]);
  }
  return totaled;
}

const matrix = (min, max, byrow, nrow) => {
  const range = max - min + 1
  const perRow = range / nrow;
  const data = [];
  for (let i = 0; i < range; i++) {
    data.push(i + 1);
  }  

  const matrix = [];
  let focus = 0;
  let slice = perRow;
  for (let k = 0; k < nrow; k++) {
    let row = data.slice(focus, slice);
    matrix.push(row);
    focus += perRow;
    slice += perRow;
  }
  for (let l = 0; l < matrix.length; l++){
    console.log(matrix[l]);
  }
  // for each row in nrow parameter...
}

matrix(1, 20, true, 5);