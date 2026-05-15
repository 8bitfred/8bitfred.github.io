---
layout: page
title: Comprar libro
nav_exclude: true
lang: en
ref: buy
permalink: /en/buy/
---

<h2>Buy <em>Guía del programador de Scratch avanzado</em></h2>

<p>
Select shipping region:
</p>

<div style="margin-top:30px;">

<select id="shipping"
        onchange="updatePrice()"
        style="
          padding:10px;
          font-size:18px;
        ">

  <option value="6">Spain (+6 €)</option>
  <option value="15">Europe (+15 €)</option>
  <option value="28">International (+28 €)</option>

</select>

</div>

<div id="summary"
     style="
       margin-top:30px;
       font-size:17px;
       line-height:1.7;
       max-width:320px;
     ">
</div>

<div style="margin-top:30px;">

<a id="paypalButton"
   href="https://paypal.me/retrofredproject/51EUR"
   target="_blank"
   onclick="gtag('event', 'click_paypal');"
   style="
      display:inline-block;
      width:190px;
      text-align:center;
      background:#0070ba;
      color:white;
      padding:16px 34px;
      border-radius:10px;
      text-decoration:none;
      font-size:22px;
      font-weight:bold;
   ">

💳 PayPal

</a>

</div>

<div style="margin-top:20px;">

<a href="https://www.amazon.es/dp/TUASIN"
   target="_blank"
   onclick="gtag('event', 'click_amazon');"
   style="
      display:inline-block;
      width:190px;
      text-align:center;
      background:#ff9900;
      color:black;
      padding:16px 34px;
      border-radius:10px;
      text-decoration:none;
      font-size:22px;
      font-weight:bold;
   ">

🛒 Amazon

</a>

</div>

<script>

function updatePrice() {

  const bookBase = 43;

  const shippingBase =
    parseFloat(
      document.getElementById("shipping").value
    );

  const bookVAT =
    bookBase * 0.04;

  const shippingVAT =
    shippingBase * 0.21;

  const total =
    bookBase +
    bookVAT +
    shippingBase +
    shippingVAT;

  document.getElementById("summary").innerHTML =

    "Book price: " +
    bookBase.toFixed(2) +
    " €<br>" +

    "VAT on book (4%): " +
    bookVAT.toFixed(2) +
    " €<br><br>" +

    "Shipping: " +
    shippingBase.toFixed(2) +
    " €<br>" +

    "VAT on shipping (21%): " +
    shippingVAT.toFixed(2) +
    " €<br><br>" +

    "<b>Total: " +
    total.toFixed(2) +
    " €</b>";

  document.getElementById("paypalButton").href =

    "https://paypal.me/retrofredproject/" +
    total.toFixed(2) +
    "EUR";
}

updatePrice();

</script>

<div style="
  margin-top:35px;
  font-size:18px;
  line-height:1.6;
">

If you have any questions about payment or shipping,
feel free to contact me at:

<br><br>
<a href="mailto:alfredo@8bitfred.com">
alfredo@8bitfred.com
</a>

</div>

