---
layout: page
title: Comprar libro
nav_exclude: true
lang: en
ref: buy
permalink: /en/buy/
---

<div id="checkout">

<h2>Checkout</h2>

<div style="margin-bottom: 20px;"></div>

<p>
Edition:
</p>

<div id="productsContainer">

    Loading products...

</div>

<div id="customerData">

    <p>
    Shipping zone:
    </p>

    <p>

    <label>

    Country *<br>

    <select id="country"
            style="width:370px;padding:8px;">

    <option>

    Loading countries...

    </option>

    </select>

    </label>

    </p>

</div>

<div id="zone-group">

<p>

<label>

Zone *<br>

<select id="zone"
        style="width:370px;padding:8px;">

<option>

Loading zones...

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

<script src="https://www.paypal.com/sdk/js?client-id=AfFQEdbuA6LCS8EVm5GJ8e-39P5LFMml4yVeqGZJKYeUpEmqBvWEsvQHVkklXd7Qxs0xQ5A28uCInFmS&currency=EUR&locale=en_GB"></script>

<script src="{{ '/assets/js/buy.js' | relative_url }}"></script>

<p style="margin-top:40px;font-size:90%;color:#666;line-height:1.5;">
Do you need to order multiple copies or do you have any questions about your purchase, shipping or invoice?
<br>
Please contact us at
<a href="mailto:pedidos@recursivaediciones.com">
pedidos@recursivaediciones.com
</a>.
</p>

</div>

<div id="order-result" style="margin-top:30px;"></div>