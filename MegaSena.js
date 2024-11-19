// Função para gerar 50 números aleatórios de 1 a 60
function gerar50NumerosAleatorios() {
  let numerosSorteados = [];
  let todosNumerosGerados = []; // Lista que vai armazenar todos os números gerados

  while (numerosSorteados.length < 50) {
    // Gera um número aleatório entre 1 e 60
    const numeroAleatorio = Math.floor(Math.random() * 60) + 1;

    // Adiciona o número à lista de todos os gerados
    todosNumerosGerados.push(numeroAleatorio);

    // Adiciona o número à lista de sorteados se ele ainda não estiver presente
    if (!numerosSorteados.includes(numeroAleatorio)) {
      numerosSorteados.push(numeroAleatorio);
    }
  }

  // Retorna as duas listas: sorteados e todos gerados
  return { numerosSorteados, todosNumerosGerados };
}

// Função para obter os números sorteados e o tempo de execução
function obterNumerosSorteados() {
  // Inicia o cronômetro
  console.time('tempo');

  // Gera os 50 números aleatórios e armazena as duas listas
  const { numerosSorteados, todosNumerosGerados } = gerar50NumerosAleatorios();

  // Finaliza o cronômetro e exibe o tempo de execução
  console.timeEnd('tempo');

  // Retorna as duas listas: sorteados e todos gerados
  return { numerosSorteados, todosNumerosGerados };
}

// Chama a função e armazena o retorno
const { numerosSorteados, todosNumerosGerados } = obterNumerosSorteados();

// Exibe os números sorteados e todos os números gerados
console.log("Números sorteados:", numerosSorteados);
console.log("Todos os números gerados (incluindo duplicados):", todosNumerosGerados);
