let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    updateCart();
}


function removeFromCart(index) {
    total -= cart[index].price; // Subtract the price of the item being removed
    cart.splice(index, 1); // Remove the item from the cart
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Clear the cart display

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('li');
        itemDiv.className = 'list-group-item';
        itemDiv.textContent = `${item.name} - $${item.price}`;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'btn btn-danger btn-sm mx-2';
        removeButton.onclick = () => removeFromCart(index); // Set the onclick to remove the item

        itemDiv.appendChild(removeButton); // Append the button to the item div
        cartItemsDiv.appendChild(itemDiv); // Append the item div to the cart
    });

    document.getElementById('total-price').textContent = total;
}