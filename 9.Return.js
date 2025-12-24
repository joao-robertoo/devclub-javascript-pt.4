/* 

    Calcula Desconto:
    
    Todos os produtos acima de R$ 30,00 tem desconto de 10%
*/

const cart = [10, 244, 99, 2, 20, 33, 250];

function calculateDiscount(cart) {
  const discountedCart = [];

  for (let i = 0; i < cart.length; i++) {
    let price = cart[i];

    if (price > 30) {
      price = price * 0.9; // aplica 10% de desconto
    }

    discountedCart.push(Number(price.toFixed(2)));
  }

  return discountedCart;
}

const result = calculateDiscount(cart);
console.log(result);
