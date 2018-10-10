const firstArr = [1, 2, 3, 4];
const secondArr = [5, 6, 7, 8];
const names = ["January", "February", "March", "April"];

// Takes two arrays, one of data and one of labels, and matches them by building an object.
const nameVector = (vector, names) => {
  const vLength = vector.length;
  const nLength = names.length;
  if (vLength !== nLength) {
    console.log(
      "The two values must match in length to accurately name the vector."
    );
  } else {
    const namedVector = {};
    for (let i = 0; i < vector.length; i++) {
      namedVector[names[i]] = vector[i];
    }
    return namedVector;
  }
};

// With a label, data, and a label array, constructs a named vector and allows selection of data by key.
const selectName = (name, dataVector, labelVector) => {
  const assc = nameVector(dataVector, labelVector);
  return `${name}: ${assc[name]}`;
};

// Same as above, only you can plug in multiple keys and see their values.
const selectNameRange = (namesArr, dataVector, labelVector) => {
  const assc = nameVector(dataVector, labelVector);
  const res = [];
  for (let i = 0; i < namesArr.length; i++) {
    res.push(assc[namesArr[i]]);
  }
  return `${namesArr} \n ${res}`;
};

// Compares two vectors by index. Will edit this for all operators intead of merely addition.
const totalByIndex = (arrOne, arrTwo) => {
  const totaled = [];
  for (let i = 0; i < arrOne.length; i++) {
    totaled.push(arrOne[i] + arrTwo[i]);
  }
  return totaled;
};

// The big M: constructs a matrix based on 4 parameters (byrow / col not yet working): min val, max val, and the number of rows desired, and constructs a matrix from said values.
const matrix = (min, max, byrow, nrow) => {
  const range = max - min + 1;
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
};

const exampleMatrix = matrix(1, 9, true, 3);
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
};

// So, findVal at row 1, column 2 for the above matrix = 2;
const index = findVal(exampleMatrix, 1, 2);

// Construct matrix from existing array. Essentially the same as above only it doesn't need to construct the matrix from scratch.
const matrixFromArray = (arr, nrow) => {
  const perRow = arr.length / nrow;
  const matrix = [];
  let focus = 0;
  let slice = perRow;
  for (let i = 0; i < nrow; i++) {
    let row = arr.slice(focus, slice);
    matrix.push(row);
    focus += perRow;
    slice += perRow;
  }
  return matrix;
};

const matrixOperator = (matrix, operator, operand) => {
  const newMatrix = matrix.map(e => e.map(subE => {
    console.log(subE);
    switch (operator) {
      case '-':
        return subE - operand;
        break;
      case '+':
        return subE + operand;
        break;
      case '*':
        return subE * operand;
        break;
      case '/':
        return subE / operand;
        break;
      case '%':
        return subE % operand;
        break;
      case '^':
        return Math.pow(subE, operand);
        break;
      default:
        break;
    }
  }));
  return newMatrix;
}

// Takes two matrices and an operator and returns an outcome.
const twoMatrices = (matrixOne, matrixTwo, operator) => {
  const newMatrix = [];
  for (let i = 0; i < matrixOne.length; i++){
    const row = [];
    for (let k = 0; k < matrixOne[i].length; k++){
      switch(operator){
        case '+':
          row.push(matrixOne[i][k] + matrixTwo[i][k]);
          break;
        case '-':
          row.push(matrixOne[i][k] - matrixTwo[i][k]);
          break;
        case '*':
          row.push(matrixOne[i][k] * matrixTwo[i][k]);
          break;
        case '/':
          row.push(matrixOne[i][k] / matrixTwo[i][k]);
          break;
        case '%':
          row.push(matrixOne[i][k] % matrixTwo[i][k]);
          break;
        case '^':
          row.push(Math.pow(matrixOne[i][k], matrixTwo[i][k]));
          break;
      }
    }
    newMatrix.push(row);
  }
  return newMatrix;
}

// Selects a whole row from the matrix
const getRow = (matrix, row) => {
  const ind = row - 1
  return matrix[ind];
}

// Selects a column from the matrix
const getCol = (matrix, col) => {
  const ind = col - 1;
  const res = matrix.map(row => row.filter(val => row.indexOf(val) === ind));
  return res;
}

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const newArr = [2, 2, 4, 2, 2, 4, 2, 2, 1, 2, 4, 2];

const testMatrix = matrixFromArray(testArr, 3);
const testMatrixTwo = matrixFromArray(newArr, 3);
// matrixOperator(testMatrix, '^', 2);

const bigMatrix = twoMatrices(testMatrix, testMatrixTwo, '/');
console.log(bigMatrix);
console.log(getCol(bigMatrix, 1));
