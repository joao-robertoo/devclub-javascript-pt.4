/* 
    Functions / Funções

    Funções podem receber argumentos ou parâmetros.
*/


function sayMyName(name) {
    console.log(` O nome é: ${name}`);
}

sayMyName("João")
sayMyName("Maria")
sayMyName("Rodolfo")

function sum(value, value2) {
  console.log(value + value2);
}

sum(20, 30)

function sayMyName(name = "Rodolfo") { //Se não passar nenhum nome, o padrão será "Rodolfo"
    console.log(name)
}

sayMyName()