
// nome = prompt("Qual o seu nome?");
//  nota1 = parseFloatprompt(`insira sua primeira nota obtida [0-50]: `);
//  // observaçã para somar as notas usar o perseFloatprompt( ou int ou double).

//  nota2 = parseFloatprompt(`insira sua segunda nota obtida [0-50]: `);
//  notafinal = nota1 +nota2;

//  if ( notatotal>=60);
// alert(`${nome} Você está APROVADO. \n nota final = $()`);

// // else 
// // alert(notafinal + "Você foi REPROVADO");
// // diferença = 60 - notafinal;

nome = prompt('Informe o seu nome','Claudio Alves');
// ainda não foi utilizado nenhuma maneira como java para inserir tipo Scanner;

nota1 = parseFloat(prompt('Informe a nota 1 [0 - 50]:'));
nota2 = parseFloat(prompt('Informe a nota 2 [0 - 50]:'));

soma = nota1 + nota2;

if (soma >= 60) 
    alert(`${nome}, você está APROVADO. \nSua nota final = ${soma} pontos`);
// utiliza apostrofe
// utiliza cifrão; chaves, virgula 
// primeira mensagem, barra ene, para pular uma linha 
// utilizou cifrão, chaves e mensagem
else 
    alert(`${nome}, você está REPROVADO. \nFaltaram ${60-soma} pontos`);

