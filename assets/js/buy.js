const dialog = document.getElementById("purchaseDialog");

const buyButton = document.getElementById("buyButton");

const closeButton = document.getElementById("closeDialog");

const productsContainer = document.getElementById("productsContainer");


buyButton.addEventListener("click", async () => {

    dialog.showModal();

    await loadProducts();

});


closeButton.addEventListener("click", () => {

    dialog.close();

});


async function loadProducts() {

    productsContainer.innerHTML = "Cargando productos...";

    const response = await fetch(
        "https://api.recursivaediciones.com/api/products"
    );

    const products = await response.json();

    productsContainer.innerHTML = "";

    products.forEach(product => {

        productsContainer.innerHTML += `
            <label style="display:block; margin-bottom:15px; cursor:pointer;">

                <input
                    type="radio"
                    name="product"
                    value="${product.code}">

                <strong>${product.title}</strong><br>

                ${product.price.toFixed(2)} ${product.currency}

            </label>
        `;

    });

}