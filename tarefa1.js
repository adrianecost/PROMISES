// Lista de pessoas com nome e idade
const pessoas = [
    { nome: "João", idade: 18 },
    { nome: "Hobe", idade: 15 },
    { nome: "Minho", idade: 30 }
  ];
  
  // Função para verificar se uma pessoa é maior de 18 anos
  function isMaiorDe18(pessoa) {
    return new Promise((resolve, reject) => {
      if (pessoa.idade > 18) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }
  
  // Função para contar quantas pessoas são maiores de 18 anos
  function contarPessoasMaioresDe18(pessoas) {
    return new Promise((resolve, reject) => {
      if (!pessoas || pessoas.length === 0) {
        reject("Lista vazia ou indisponível");
        return;
      }
  
      let contador = 0;
  
      const promises = pessoas.map(pessoa => {
        return isMaiorDe18(pessoa).then(result => {
          if (result) {
            contador++;
          }
        });
      });
  
      Promise.all(promises)
        .then(() => {
          resolve(contador);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  
  // Chama a função para contar pessoas maiores de 18 anos
  contarPessoasMaioresDe18(pessoas)
    .then(contagem => {
      console.log(`Total de pessoas maiores de 18 anos: ${contagem}`);
    })
    .catch(err => {
      console.error(err);
    });
  