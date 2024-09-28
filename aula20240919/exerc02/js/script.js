// Tipos primitivos de dados em JS: number, string e boolean
// idade = 10;
// console.log(typeof(idade)); // number (integer, float ...)

// // ja vimos :
// // alert = mensagem
// // confirm = abaixo condição

// // javascript é uma linguagem fracamente tipada
// // linguagem de tipagem dinamica;

// // idade=10;
// // console.log(typof (idade)); //number (interger,float ...AbortController.)

// // idade= "wilton";
// // console.log(typof (idade)); //string

// // idade= "true";
// // console.log(typof (idade)); //boolean


// nome = prompt("Qual o seu nome?", "claudio");
// // indica mensagem mencionada acima e indica a mensagem a ser digitada.
// // é possível colocar uma informação antecipada como meu nome;

// idade = prompt("Qual a sua idade?");
// if(idade >= 18)
//     alert(`${nome},Você tem idade suficiente para retirar CNH`);
// // no item alert ( é possivel foi incluida na mensagem usando apostrofe `${nome}, virgula ....)
// else
// alert(`${nome},Você não tem idade suficiente para retirar CNH`);
// // no item alert ( é possivel foi incluida na mensagem usando apostrofe `${nome}, virgula ....)

// comparação;
nome = prompt("Qual é o seu nome?" );
// utilizei um auto prenchimento com meu nome;
if ((nome == null) || (nome.trim() == ""))
    alert("que pena, vc nao informou o nome")
    // nome == null , Verifica se a variável nome é nula. No JavaScript, isso significa que a variável não foi definida ou foi explicitamente atribuída o valor null.
    // nome.trim() == "espaço"; remove espaços em branco do início e do fim da string.
// Verifica se, depois de remover os espaços, a string está vazia (igual a ""). Isso significa que mesmo se o usuário inseriu apenas espaços, a condição será verdadeira.
    
else {
    console.log(nome);
    // perguntar quando usar o console.log?
    idade = prompt("Qual é a sua idade?");
    // determina a condiçao abaixo, 

    while ((idade <= 0) || (idade >= 130) || (idade == null)) 
        idade = prompt("Informe uma idade entre 1 e 130:");


    if (idade >= 18)
        alert(`${nome}, você tem idade suficiente para tirar CNH`);
    else
        alert(`${nome}, você não tem idade suficiente para tirar CNH`);
}