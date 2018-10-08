const firstArr = [1, 2, 3, 4];
const secondArr = [5, 6, 7, 8];
const names = ['January', 'February', 'March', 'April'];

// Takes two arrays, one of data and one of labels, and matches them by building an object. 
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

// With a label, data, and a label array, constructs a named vector and allows selection of data by key. 
const selectName = (name, dataVector, labelVector) => {
  const assc = nameVector(dataVector, labelVector);
  return `${name}: ${assc[name]}`
}

// Same as above, only you can plug in multiple keys and see their values.
const selectNameRange = (namesArr, dataVector, labelVector) => {
  const assc = nameVector(dataVector, labelVector);
  const res = [];
  for (let i = 0; i < namesArr.length; i++) {
    res.push(assc[namesArr[i]]);
  }
  return `${namesArr} \n ${res}`;
}

// Compares two vectors by index. Will edit this for all operators intead of merely addition. 
const totalByIndex = (arrOne, arrTwo) => {
  const totaled = [];
  for (let i = 0; i < arrOne.length; i++) {
    totaled.push(arrOne[i] + arrTwo[i]);
  }
  return totaled;
}

// The big M: constructs a matrix based on 4 parameters (byrow / col not yet working): min val, max val, and the number of rows desired, and constructs a matrix from said values.  
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
  return matrix;
  // for each row in nrow parameter...
}

const exampleMatrix = matrix(1, 9, true, 3);
console.log(exampleMatrix);
/*Returns the functional equivalent of: 
      0  1  2
0  [  1  2  3  ]
1  [  4  5  6  ] 
2  [  7  8  9  ]
*/

// Translates row/col into base 0 and returns the value at index (x,y) in the matrix.
const findVal = (matrix, row, col) => {
  const x = row - 1;
  const y = col - 1;
  return matrix[x][y];
}

// So, findVal at row 1, column 2 for the above matrix = 2;
const index = findVal(exampleMatrix, 1, 2);
