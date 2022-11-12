// Desafio 1
function compareTrue(fezSol, dinheiroGasolina) {
  return fezSol && dinheiroGasolina;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(array) {
  return array.split(' ');
}

// Desafio 4
function concatName(array) {
  let final = array[array.length - 1];
  let inicial = array[0];
  let result = `${final}, ${inicial}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let numero = array[0];

  let repeticao = 0;
  for (let index in array) {
    if (numero === array[index]) {
      numero = array[index];
      repeticao += 1;
    } else if (numero < array[index]) {
      numero = array[index];
      repeticao = 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  }
  if (Math.abs(mouse - cat2) === Math.abs(mouse - cat1)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    let resposta = 'bug!';
    if (array[index] % 15 === 0) {
      resposta = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      resposta = 'fizz';
    } else if (array[index] % 5 === 0) {
      resposta = 'buzz';
    }
    array[index] = resposta;
  }
  return array;
}

// Desafio 9
function encode(troca) {
  let nova = '';
  nova = troca.replace(/a/g, 1);
  nova = nova.replace(/e/g, 2);
  nova = nova.replace(/i/g, 3);
  nova = nova.replace(/o/g, 4);
  nova = nova.replace(/u/g, 5);
  return nova;
}
function decode(troca) {
  let nova = '';
  nova = troca.replace(/1/g, 'a');
  nova = nova.replace(/2/g, 'e');
  nova = nova.replace(/3/g, 'i');
  nova = nova.replace(/4/g, 'o');
  nova = nova.replace(/5/g, 'u');
  return nova;
}

// Desafio 10
function techList(techno, name) {
  let objectOrder = techno.sort();
  let object = [];
  if (techno.length === 0) {
    return 'Vazio!';
  }
  if (techno.length >= 1) {
    for (let index = 0; index < techno.length; index += 1) {
      object.push({
        tech: objectOrder[index],
        name,
      });
    }
  }

  return object;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
