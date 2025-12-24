/* 
    ForEach(item, index, Array)
*/

const users = [
        {name: "Ana", age: 33, contact: "1234-5678"},
        {name: "Bruno", age: 21, contact: "2345-6789"},
        {name: "Carla", age: 40, contact: "3456-7890"},
        {name: "Daniel", age: 12, contact: "4567-8901"},
        {name: "Eva", age: 25, contact: "5678-9012"},
]

users.forEach(function (item, index, array) {
    console.log(index)
    console.log(`${index + 1}) Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
});