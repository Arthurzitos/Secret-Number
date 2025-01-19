alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 29;
let tentativas = prompt('Escolha um número entre 1 e 30');

if (tentativas == numeroSecreto) {
    alert(`Boa! Acertou o número secreto: ${numeroSecreto}`);
} else {
    alert('Número Incorreto.');
};