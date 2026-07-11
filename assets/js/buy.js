const productsContainer =
    document.getElementById("productsContainer");

const API_BASE_URL = "http://127.0.0.1:5000";

const language =
    window.location.pathname.startsWith("/en/")
        ? "en"
        : "es";

const countrySelect =
    document.getElementById("country");

const zoneSelect =
    document.getElementById("zone");

const summary =
    document.getElementById("summary");

let shippingRate = null;
let products = [];
let countries = [];
let zones = [];

function getSelectedProductCode() {

    return document.querySelector(
        "input[name='product']:checked"
    ).value;

}

document.addEventListener("DOMContentLoaded", async () => {

    await loadProducts();

    await loadCountries();

});

async function loadProducts() {

    productsContainer.innerHTML = "Cargando productos...";

    try {

        const response = await fetch(
            `${API_BASE_URL}/api/products`
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        products = await response.json();

        productsContainer.innerHTML = "";

        products.forEach((product, index) => {

            productsContainer.innerHTML += `
                <label style="display:block; margin-bottom:15px; cursor:pointer;">

                    <input
                        type="radio"
                        name="product"
                        value="${product.code}"
                        ${index === 0 ? "checked" : ""}>

                    <strong>${product.title}</strong><br>

                    ${Number(product.price).toFixed(2)} ${product.currency}

                </label>
            `;

        });

        document
            .querySelectorAll("input[name='product']")
            .forEach(radio => {

                radio.addEventListener("change", updateSummary);

            });


    }
    catch (error) {

        console.error(error);

        productsContainer.innerHTML =
            "Error cargando los productos.";

    }

}

async function loadCountries() {

    countrySelect.innerHTML =
        "<option>Cargando...</option>";

    try {

        const response = await fetch(
            `${API_BASE_URL}/api/countries?lang=${language}`
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        countries = await response.json();

        countrySelect.innerHTML = "";

        countries.forEach(country => {

            const selected =
                country.code === "ES"
                    ? "selected"
                    : "";

            countrySelect.innerHTML += `
                <option
                    value="${country.code}"
                    ${selected}>
                    ${country.name}
                </option>
            `;

        });

    }
    catch (error) {

        console.error(error);

        countrySelect.innerHTML =
            "<option>Error cargando países</option>";

    }

    await loadZones(countrySelect.value);

    await updateSummary();
}

async function loadZones(country) {

    zoneSelect.innerHTML =
        "<option>Cargando...</option>";

    try {

        const response = await fetch(
            `${API_BASE_URL}/api/zones?country=${country}&lang=${language}`
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        zones = await response.json();

        zoneSelect.innerHTML = "";

        zones.forEach(zone => {

            const selected =
                zone.code === "SPAIN_PENINSULA"
                    ? "selected"
                    : "";

            zoneSelect.innerHTML += `
                <option
                    value="${zone.code}"
                    ${selected}>
                    ${zone.name}
                </option>
            `;

        });

    }
    catch (error) {

        console.error(error);

        zoneSelect.innerHTML =
            "<option>Error cargando zonas</option>";

    }

}

countrySelect.addEventListener("change", async () => {

    await loadZones(countrySelect.value);

    await updateSummary();

});

zoneSelect.addEventListener("change", () => {

    updateSummary();

});

async function updateSummary() {

    const selectedProduct =
        document.querySelector(
            "input[name='product']:checked"
        );

    if (
        !selectedProduct ||
        !countrySelect.value ||
        !zoneSelect.value
    ) {
        summary.innerHTML = "";
        return;
    }

    const productCode =
        selectedProduct.value;

    const product =
        products.find(
            p => p.code === productCode
        );

    const country =
        countries.find(
            c => c.code === countrySelect.value
        );

    const zone =
        zones.find(
            z => z.code === zoneSelect.value
        );

    const response = await fetch(
        `${API_BASE_URL}/api/orders/quote`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                product_code: product.code,

                country: country.code,

                zone: zone.code,
                
                language: language

            })

        }
    );

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const quote =
        await response.json();

    summary.innerHTML = `
    <h3>Resumen del pedido</h3>

    <table style="width:100%;max-width:520px">

    <tr>
        <td>${product.title}</td>
        <td style="text-align:right">
            ${quote.product.price.toFixed(2)} €
        </td>
    </tr>

    <tr>
        <td>
            Gastos de envío y manipulación<br>
            <span style="font-size:90%;color:#666;">
                ${quote.shipping.description}
            </span>
        </td>
        <td style="text-align:right">
            ${quote.shipping.price.toFixed(2)} €
        </td>
    </tr>

    <tr>
        <td colspan="2"><hr></td>
    </tr>

    <tr>
        <td>Base imponible</td>
        <td style="text-align:right">
            ${quote.taxable_amount.toFixed(2)} €
        </td>
    </tr>

    <tr>
        <td>IVA (${quote.vat_rate} %)</td>
        <td style="text-align:right">
            ${quote.vat.toFixed(2)} €
        </td>
    </tr>

    <tr style="font-size:18px;font-weight:bold">
        <td>Total</td>
        <td style="text-align:right">
            ${quote.total.toFixed(2)} €
        </td>
    </tr>

    </table>

    <p style="margin-top:15px;font-size:90%;color:#666;">
        Todos los importes incluyen IVA.
    </p>
    `;
}

paypal.Buttons({

    createOrder() {

        return fetch(
            `${API_BASE_URL}/api/paypal/create-order`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    product_code: getSelectedProductCode(),

                    country: countrySelect.value,

                    zone: zoneSelect.value,

                    language: language

                })

            }

        )
        .then(response => response.json())
        .then(data => {

            console.log(data);

            return data.id;

        });

    },

    onClick() {

        console.log("CLICK");

    },

    onApprove(data) {

        console.log("onApprove", data);

        return fetch(

            `${API_BASE_URL}/api/paypal/capture-order`,

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    order_id: data.orderID,

                    product_code: getSelectedProductCode(),

                    country: countrySelect.value,

                    zone: zoneSelect.value,

                    language: language

                })

            }

        )
        .then(response => {

            console.log("HTTP", response.status);

            return response.json();

        })
        .then(result => {

            console.log(result);

        })
        .catch(err => {

            console.error(err);

        });

    },

    onCancel(data) {

        console.log("CANCELLED");

    },

    onError(err) {

        console.error(err);

    }

}).render("#paypal-button-container");