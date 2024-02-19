alert('Boas vindas ao nosso site')
let nome = 'Lua';
let idade = 25;
let numeroVendas = 50;
let saldoDisponivel = 1000;
let mensagemErro = 'Erro, preencha todos os campos';
alert(mensagemErro)
nome = prompt('Digite o seu nome')
alert(nome)
idade = prompt('Digite a sua idade')
if (idade >= 18){
    alert('Pode tirar a habilitação')
}
else{
    alert('Não pode tirar habilitação')
}
