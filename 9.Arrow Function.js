/* Functions / Funções 

    functions padrão -> function() {}
    arrow functions -> () => {}

    Não escrevemos "function".
    Além disso, usamos o sinal "=>" para cria-los,
    o que lembra uma flecha, por isso o nome "arrow function". 
*/

Function sayMyName(name) {
    return `Seu mome é ${name}`
}

const sayMyName2 = (name) => `Seu nome é ${name}`

console.log(sayMyName("João"))
console.log(sayMyName2("Maria"))