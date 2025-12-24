/* 

    Calcula Desconto:
    
    Todos os produtos acima de R$ 30,00 tem desconto de 10%
*/

const cart = [10, 244, 99, 2, 20, 33, 250];

let finalValueWithDiscount = 0;
let totalDiscount = 0;

function calculateDiscount(price, discount) {
  return (price * discount) / 100;
}

cart.forEach(value => {
  if (value > 30) {
    const discount = calculateDiscount(value, 10);
    finalValueWithDiscount += value - discount;
    totalDiscount += discount;
  } else {
    finalValueWithDiscount += value;
  }
});

console.log(`
O valor final da compra foi de R$ ${finalValueWithDiscount.toFixed(2)},
Porém você teve desconto, e irá pagar apenas R$ ${finalValueWithDiscount.toFixed(2)},
Você economizou R$ ${totalDiscount.toFixed(2)}
`);
