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

<div id="productImageContainer"
     style="
         margin:20px 0;
         text-align:center;
         clear:both;
     ">

    <img id="productImage"
         src=""
         alt=""
         style="
             display:none;
             height:100%;
             max-height:300px;
             width:auto;
         ">
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

<!-- <script src="https://www.paypal.com/sdk/js?client-id=AfFQEdbuA6LCS8EVm5GJ8e-39P5LFMml4yVeqGZJKYeUpEmqBvWEsvQHVkklXd7Qxs0xQ5A28uCInFmS&currency=EUR&locale=es_ES"></script> -->
<script src="https://www.paypal.com/sdk/js?client-id=BAAAs_UJH4u-grfavV9pKHTMyIVA3MF3wzEQby1pw6fTmZ40VvKhgQiyr_UY6edgKa4SidJIX3Dp6ah5wg&currency=EUR&locale=es_ES"></script>

<script src="{{ '/assets/js/buy.js' | relative_url }}?v=4"></script>

<p style="margin-top:40px;font-size:90%;color:#666;line-height:1.5;">
El precio no incluye los impuestos, aranceles o gastos de gestión que, en su caso, puedan exigir las autoridades o el operador postal del país de destino. Estos importes serán responsabilidad del destinatario.
<br><br>
¿Necesita realizar un pedido de varios ejemplares o tiene alguna consulta sobre la compra, el envío o la factura?
<br><br>
Puede ponerse en contacto con nosotros en
<a href="mailto:pedidos@recursivaediciones.com">
pedidos@recursivaediciones.com
</a>.
</p>

</div>

<div id="order-result" style="margin-top:30px;"></div>