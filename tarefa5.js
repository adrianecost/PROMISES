// Simulação de uma lista de compras
const listaDeCompras = ["Maçãs", "Bananas", "Uvas", "Laranjas", "Pêssegos"];

// Função para verificar a presença de um item na lista de compras
function verificarItemNaLista(item) {
  return new Promise((resolve, reject) => {
    if (!item) {
      reject("Item não fornecido.");
      return;
    }

    if (listaDeCompras.includes(item)) {
      resolve(`${item} foi encontrado na lista de compras.`);
    } else {
      resolve(`${item} não foi encontrado na lista de compras.`);
    }
  });
}
