/* 
Estrutura de Repetição - LOOP

    -FOR
        1) INICIALIZAÇÃO - Criar uma variavel e colocar um valor inicial pra ela.
        2) CONDIÇÃO - Enquanto for true, o laço continuará iterando.
                    Ele irá verificar antes de cada iteração
        3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso loop

        for ([inicialização]; [condição]; [expressão final]){
            Seu código aqui
        }
*/

for(let i = 0; i < 15; i++){
    console.log(i);
}

const users = ["Maria", "Aline", "João", "Carolina"]

for(let i = 0; i < users.length ; i++)