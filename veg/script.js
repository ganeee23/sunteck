const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');

let total = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const product = event.target.parentElement;
  const productName = product.querySelector('h2').textContent;
  const productPrice = parseFloat(product.querySelector('p').textContent.split('$')[1]);

  const cartItem = document.createElement('li');
  cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
  cartItemsList.appendChild(cartItem);

  total += productPrice;
  cartTotal.textContent = `$${total.toFixed(2)}`;
}
