---
layout: page
title: Comprar libro
nav_exclude: true
lang: es
ref: buy
permalink: /es/buy/
---

<div id="checkout">

<h2>Tramitar pedido</h2>

<div style="margin-bottom: 20px;"></div>

<p>
Edición:
</p>

<div id="productsContainer">

    Cargando productos...

</div>

<hr style="margin:40px 0;">

<div id="customerData">

    <p>
    Zona de envío:
    </p>

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

<div id="zone-group">

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

</div>

<hr style="margin:40px 0;">

<div id="summary">

</div>

<div
    id="paypal-button-container"
    style="margin-top:30px;">
</div>

<script src="https://www.paypal.com/sdk/js?client-id=AfFQEdbuA6LCS8EVm5GJ8e-39P5LFMml4yVeqGZJKYeUpEmqBvWEsvQHVkklXd7Qxs0xQ5A28uCInFmS&currency=EUR&locale=es_ES"></script>

<script src="{{ '/assets/js/buy.js' | relative_url }}"></script>

<p style="margin-top:40px;font-size:90%;color:#666;line-height:1.5;">
¿Necesita realizar un pedido de varios ejemplares o tiene alguna consulta sobre la compra, el envío o la factura?
<br>
Puede ponerse en contacto con nosotros en
<a href="mailto:pedidos@recursivaediciones.com">
pedidos@recursivaediciones.com
</a>.
</p>

</div>

<div id="order-result" style="margin-top:30px;"></div>