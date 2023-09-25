function generateRandomNumber(min, max) {
    return new Promise((resolve, reject) => {
      if (typeof min !== 'number' || typeof max !== 'number') {
        reject("Os limites do intervalo devem ser números.");
      }
  
      if (min >= max) {
        reject("O valor mínimo deve ser menor que o valor máximo.");
      }
  
      const randomNumber = Math.random() * (max - min) + min;
      resolve(randomNumber);
    });
  }
  
  function getRandomNumberInRange(min = 0, max = 10) {
    return generateRandomNumber(min, max)
      .then(randomNumber => {
        return Math.floor(randomNumber); // Arredonda para um número inteiro
      });
  }