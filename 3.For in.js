/* 
Estrutura de repetição LOOP 
    "for...in"
*/

const users = { name: 'João', age: 33, street: "Rua dos Bobos"}

for (const key in users) {
    console.log(key + " : " + users[key])//concatenação
             //(`${key} : ${users[key]) //template string
}

//userus.name -> João
//users['name] -> João

//for (const key in users) {
//    console.log(key)
//}