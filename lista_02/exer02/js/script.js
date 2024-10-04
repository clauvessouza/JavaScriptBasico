var passaHomens = [];
var passagMulheres = [];
var sexo;
var nome;

var totalPasasgeiros = prompt("Quantos passageiros vão entrar");
 for (var i=0 ; i< totalPasasgeiros.length; i++){
    sexo = prompt(`Qual o sexo do passageiro ${i+1} (H ou M )?`);

    nome = prompt (`Qual o nome do passageiro ${i+1} ?`);
    if (sexo =="H")
        passaHomens.push(nome);
       else  passagMulheres.push(nome);
 }
 
 document.write('<table>');
 document.write('<tr>');
 document.write(' <td></td>');
 document.write(' <td></td>');
 document.write('</tr>');
 document.write('</table>');
 
 
    
     
 
