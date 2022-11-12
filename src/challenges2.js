// Desafio 11
function repetidaSum(array, index) {
  let repetida = 0;
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2] === index) {
      repetida += 1;
    }
  }
  return repetida >= 3;
}

function invalidNumber(array) {
  let invalido = false;
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2] < 0 || array[index2] > 9) {
      invalido = true;
    }
  }
  return invalido;
}

function validNumbers(array) {
  let check = false;
  for (let index = 0; index <= 9; index += 1) {
    if (repetidaSum(array, index) || invalidNumber(array)) {
      check = true;
    }
  }
  return check;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  const isValid = validNumbers(array);
  if (isValid) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  const ddd = `(${array[0]}${array[1]})`;
  const inicial = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  const final = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  return `${ddd} ${inicial}-${final}`;
}

// Desafio 12
function ladoMaior(lineA, lineB, lineC) {
  const ifOnePartA = lineA > lineB + lineC;
  const ifOnePartB = lineB > lineA + lineC || lineC > lineA + lineB;
  const ifOne = ifOnePartA || ifOnePartB;
  return ifOne;
}

function triangleCheck(lineA, lineB, lineC) {
  const ifTwoPartA = lineA < Math.abs(lineB - lineC);
  const ifTwoPartB = lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB);
  const ifTwo = ifTwoPartA || ifTwoPartB;
  if (ladoMaior(lineA, lineB, lineC) || ifTwo) {
    return false;
  }
  return true;
}

// Desafio 13
function number(string, index, index2) {
  if (string[index2] === JSON.stringify(index)) {
    return index;
  }
  return 0;
}

function sum(string) {
  let soma = 0;
  for (let index = 1; index <= 9; index += 1) {
    for (let index2 = 0; index2 < string.length; index2 += 1) {
      soma += number(string, index, index2);
    }
  }
  return soma;
}

function hydrate(string) {
  if (sum(string) === 1) {
    return '1 copo de água';
  }
  if (sum(string) > 1) {
    return `${sum(string)} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
