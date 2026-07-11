---
layout: page
title: Comprar libro
nav_exclude: true
lang: es
ref: buy
permalink: /es/buy/
---

<h2>Comprar <em>Guía del programador de Scratch avanzado</em></h2>

<p>
Seleccione la edición:
</p>

<div id="productsContainer">

    Cargando productos...

</div>

<hr style="margin:40px 0;">

<div id="customerData">

    <h3>Datos de contacto</h3>

    <p>
        <label>
            Nombre *<br>
            <input type="text"
                   id="firstName"
                   style="width:350px;padding:8px;">
        </label>
    </p>

    <p>
        <label>
            Apellidos *<br>
            <input type="text"
                   id="lastName"
                   style="width:350px;padding:8px;">
        </label>
    </p>

    <p>
        <label>
            Correo electrónico *<br>
            <input type="email"
                   id="email"
                   style="width:350px;padding:8px;">
        </label>
    </p>

    <p>
        <label>
            Teléfono<br>
            <input type="tel"
                   id="phone"
                   style="width:350px;padding:8px;">
        </label>
    </p>

    <h3>Envío</h3>

    <p>

    <label>

    País *<br>

    <select id="country"
            style="width:370px;padding:8px;">

    <option>

    Cargando países...

    </option>

    </select>

    </label>

    </p>

</div>

<p>

<label>

Zona *<br>

<select id="zone"
        style="width:370px;padding:8px;">

<option>

Cargando zonas...

</option>

</select>

</label>

</p>

<hr style="margin:40px 0;">

<div id="summary">

</div>

<div
    id="paypal-button-container"
    style="margin-top:30px;">
</div>

<script src="https://www.paypal.com/sdk/js?client-id=AfFQEdbuA6LCS8EVm5GJ8e-39P5LFMml4yVeqGZJKYeUpEmqBvWEsvQHVkklXd7Qxs0xQ5A28uCInFmS&currency=EUR"></script>

<script src="{{ '/assets/js/buy.js' | relative_url }}"></script>