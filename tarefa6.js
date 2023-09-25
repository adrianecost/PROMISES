// Lista de frutas
const frutas = ["Maçã", "Banana", "Pêssego", "Laranja", "Abacaxi"];

// Função para verificar se a lista contém uma fruta que começa com "m"
function verificarFrutasComM() {
  return new Promise((resolve, reject) => {
    if (!frutas || frutas.length === 0) {
      reject("A lista de frutas está vazia ou indisponível.");
      return;
    }

    const frutasComM = frutas.filter(fruta => fruta.toLowerCase().startsWith("m"));

    if (frutasComM.length > 0) {
      resolve("A lista contém pelo menos uma fruta que começa com 'm'.");
    } else {
      resolve("A lista não contém frutas que começam com 'm'.");
    }
  });
}