const countLetters = function(letters) {
  // Cria um objeto vazio para armazenar as contagens de letras.
  const result = {};

  // Itera sobre cada letra na string.
  for (const letter of letters) {
    // Verifica se a letra já foi contada.
    if (result[letter]) {
      // Se a letra já foi contada, incrementa a contagem.
      result[letter]++;
    } else {
      // Se a letra ainda não foi contada, adiciona uma nova entrada no objeto com uma contagem de 1.
      result[letter] = 1;
    }
  }

  // Retorna o objeto com as contagens de letras.
  return result;
};

// Chama a função com a string "hello" e imprime o resultado no console.
console.log(countLetters("hello"));

console.log(countLetters('hello world'))


const str = "hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}