const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 499 },
    { id: 3, name: 'Headphones', price: 199 },
    { id: 4, name: 'PlayStation', price: 599 },
    { id: 5, name: 'Smart Watch', price: 299 },


  ];

  const cart = [];

  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    gsap.fromTo(".cart-items", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });

    renderCart();
  }

  function removeFromCart(productId) {
    const cartIndex = cart.findIndex(item => item.id === productId);

    if (cartIndex !== -1) {
      if (cart[cartIndex].quantity > 1) {
        cart[cartIndex].quantity--;
      } else {
        cart.splice(cartIndex, 1);
      }
    }

    renderCart();
  }

  function renderCart() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
      const cartElement = document.createElement('div');
      cartElement.classList.add('cart-item');
      cartElement.innerHTML = `
        <span class="cart-item-title">${item.name} - $${item.price} x ${item.quantity}</span>
        <button onclick="removeFromCart(${item.id})"><i class="ri-delete-bin-6-line icon"></i>Remove</button>
      `;
      cartContainer.appendChild(cartElement);
    });

    document.getElementById('cart-total').textContent = total;
  }