// Simulação de uma lista de usuários bancários
const usuarios = [
    { id: 1, nome: "João", saldo: 1000 },
    { id: 2, nome: "Maria", saldo: 2500 },
    { id: 3, nome: "Pedro", saldo: 500 },
  ];
  
  // Função para obter informações de um cliente por ID
  function getClientePorId(id) {
    return new Promise((resolve, reject) => {
      const usuario = usuarios.find(user => user.id === id);
  
      if (!usuario) {
        reject(`Usuário com ID ${id} não encontrado.`);
        return;
      }
  
      resolve(usuario);
    });
  }
  
  // Função para verificar se o saldo de um cliente é maior que zero
  function verificarSaldoMaiorQueZero(usuario) {
    return new Promise((resolve, reject) => {
      if (usuario.saldo > 0) {
        resolve(`${usuario.nome} tem saldo maior que zero.`);
      } else {
        reject(`${usuario.nome} não tem saldo maior que zero.`);
      }
    });
  }
  
  // Função para obter a lista completa de usuários
  function getListaCompletaDeUsuarios() {
    return new Promise((resolve, reject) => {
      resolve(usuarios);
    });
  }