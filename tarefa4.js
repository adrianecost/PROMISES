// Simulação de uma lista de pessoas com nome e idade
const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 18 },
    { nome: "Pedro", idade: 30 },
    { nome: "Ana", idade: 35 },
  ];
  
  // Função para encontrar a pessoa mais velha
  function encontrarPessoaMaisVelha() {
    return new Promise((resolve, reject) => {
      if (pessoas.length === 0) {
        reject("A lista de pessoas está vazia.");
        return;
      }
  
      let pessoaMaisVelha = pessoas[0];
  
      for (let i = 1; i < pessoas.length; i++) {
        if (pessoas[i].idade > pessoaMaisVelha.idade) {
          pessoaMaisVelha = pessoas[i];
        }
      }
  
      resolve(pessoaMaisVelha);
    });
  }
  
  // Função para encontrar a pessoa mais nova
  function encontrarPessoaMaisNova() {
    return new Promise((resolve, reject) => {
      if (pessoas.length === 0) {
        reject("A lista de pessoas está vazia.");
        return;
      }
  
      let pessoaMaisNova = pessoas[0];
  
      for (let i = 1; i < pessoas.length; i++) {
        if (pessoas[i].idade < pessoaMaisNova.idade) {
          pessoaMaisNova = pessoas[i];
        }
      }
  
      resolve(pessoaMaisNova);
    });
  }