console.log("Boas vindas!");

let nome = 'Bruno C.S. da Costa Esposito';
console.log(`Olá ${nome}`);

let nome = 'Bruno C.S. da Costa Esposito';
alert(`Olá ${nome}`);

ja armazenei a respostas na pergunta
pergunta = prompt('Qual a linguagem de programção que você mais gosta?')
console.log(pergunta);

let valor1 = 10;
let valor2 = 20;
resultado = (valor1 + valor2);
console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultado}`);

let valor1 = 10;
let valor2 = 20;
resultado = valor1 - valor2;
console.log(`A subtração de ${valor1} - ${valor2} é igual a ${resultado}`);

idade = prompt('Por favor, insira sua idade');
if (idade >= 18){
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

let numero = prompt('Digite um numero');
if (numero == 0){
        alert(`O numero ${numero} é o zero`);
} else{
    if dentro do else
    if (numero > 0){
        alert(`O número ${numero} é positivo`);
    } else{
        alert(`O número ${numero} é negativo`);
    }
}


let numero = 1;
while(numero <= 10){
    console.log(numero);
    numero ++;
}

nota = prompt('Qual a sua nota?');
if (nota >= 7){
    console.log('Aprovado!');
} else {
    console.log('Reprovado!');
}

//nao esquecer dos () no Math.random
let numero = Math.random();
console.log(numero);

let numero = parseInt(Math.random() * 10) + 1;
console.log(numero);

let numero = parseInt(Math.random() * 1000) + 1;
console.log(numero);
