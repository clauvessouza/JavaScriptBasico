nome = prompt("qual o seu  nome? " , "Claudio");

//total = prompt("Quantas vezes quer exibir seu nome?" , "5");
let total = parseInt(prompt("Quantas vezes você quer exibir seu nome?"));
// utilizei a função let para colocar quantas vezes eu quiser o nome 
// utilizei o parseInt para enquadrar o prompt com a informação

cor = prompt ("Qual a cor você quer ver o seu nome")

for (i=0 ; i<total; i++)
    // utiliza um loop para fazer a repetição do nome;
// na condição do loop utilizei a string que o indentifica.
document.write(`<p style="color: ${cor};"> ${i+1} - ${nome}</p>`)
// configura a área escrita do texto
// 