---
layout: page
title: El juego
nav_order: 3
lang: es
ref: game
---

<div style="overflow-x:auto;">
<table>
  <tr>
    <td align="center">
      <img src="/assets/images/zx/loadingscreen.png" width="270">
    </td>
    <td align="center">
      <img src="/assets/images/zx/snapshot.png" width="270">
    </td>
  </tr>
</table>
</div>


El juego
--------
Cuantas más tumbas (laberintos) explore Fred, más difícil será avanzar. El número de enemigos aumentará y serán cada vez más agresivos y rápidos.

Enemigos
--------

<span style="color: #0969da; font-weight: bold;">Ratas:</span> Se desplazan por el laberinto, y la única forma de evitarlas es saltar en el momento preciso.

<span style="color: #0969da; font-weight: bold;">Gotas de ácido:</span> Resultado de las mezclas en descomposición elaboradas por los sacerdotes egipcios. Será necesario calcular bien el momento adecuado para pasar junto a ellas.

<span style="color: #0969da; font-weight: bold;">Fantasmas:</span> Cuidado con ellos: pueden atravesar las paredes. Cambian de dirección al recibir un disparo.

<span style="color: #0969da; font-weight: bold;">Camaleones:</span> Puedes evitarlos trepando por la cuerda del lado opuesto, ¡pero ellos también pueden cambiar de lado!

<span style="color: #0969da; font-weight: bold;">Momias:</span> Caen a través de los corredores verticales. Pueden teletransportarse cuando terminan de caer o al recibir un disparo.

<span style="color: #0969da; font-weight: bold;">Vampiros:</span> Persiguen a Fred por el laberinto y pueden dejar de volar o incluso moverse a gran velocidad. Pueden detenerse disparándoles.

<span style="color: #0969da; font-weight: bold;">Esqueletos:</span> Persiguen a Fred sin descanso y solo pueden detenerse con disparos.

<div style="overflow-x:auto;">
<table style="background-color: black; color: white;">
  <tr>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/ghost.png" width="48">
    </td>
  <td style="background-color:black; color:white; text-align: center; vertical-align: bottom;">
    <img src="/assets/images/sprites/rat.png" width="32">
  </td>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/aciddrop.png" width="32">
    </td>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/vampire.png" width="48">
    </td>
  </tr>
  <tr>
    <td align="center" style="background-color:black; color:white;">
      Fantasma
    </td>
    <td align="center" style="background-color:black; color:white;">
      Rata
    </td>
    <td align="center" style="background-color:black; color:white;">
      Gota de ácido
    </td>
    <td align="center" style="background-color:black; color:white;">
      Vampiro
    </td>
  </tr>
  <tr>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/mummy.png" width="48">
    </td>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/chameleon.png" width="16">
    </td>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/skeleton.png" width="64">
    </td>
    <td align="center" style="background-color:black; color:white;">
      <!-- celda vacía para mantener alineación -->
    </td>
  </tr>
  <tr>
    <td align="center" style="background-color:black; color:white;">
      Momia
    </td>
    <td align="center" style="background-color:black; color:white;">
      Camaleón
    </td>
    <td align="center" style="background-color:black; color:white;">
      Esqueleto
    </td>
    <td align="center" style="background-color:black; color:white;">
      <!-- celda vacía para mantener alineación -->
    </td>
  </tr>
</table>
</div>

Objetos
-------

<span style="color: #0969da; font-weight: bold;">Vida:</span> Fred dispone de un máximo de 15 unidades de energía, que disminuirán cuando un monstruo lo alcance. Recuperará dos unidades cada vez que beba el elixir mágico de Nefertiti y al llegar a la salida.

<span style="color: #0969da; font-weight: bold;">Balas:</span> Cuenta con una pistola y seis balas, que podrá recuperar durante el recorrido. No puede disparar mientras trepa por una cuerda.

<span style="color: #0969da; font-weight: bold;">Tesoros:</span> Su valor varía y pueden recogerse simplemente pasando sobre ellos. Al llegar a la salida se concederán puntos extra.

<span style="color: #0969da; font-weight: bold;">Mapa:</span> Al encontrar un minimapa en el laberinto, este aparecerá en pantalla. Fred se mostrará en el centro y los corredores se representarán en blanco.

<div style="overflow-x:auto;">
<table style="background-color: black; color: white;">
  <tr>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/object_1x_1.png" width="32">
    </td>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/object_1x_2.png" width="32">
    </td>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/object_1x_3.png" width="32">
    </td>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/object_1x_4.png" width="32">
    </td>
  </tr>
  <tr>
    <td align="center" style="background-color:black; color:white;">
      Mapa
    </td>
    <td align="center" style="background-color:black; color:white;">
      Vida
    </td>
    <td align="center" style="background-color:black; color:white;">
      Tesoro-Busto
    </td>
    <td align="center" style="background-color:black; color:white;">
      Tesoro-Tablilla jeroglífica
    </td>
  </tr>
  <tr>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/object_1x_5.png" width="32">
    </td>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/object_1x_6.png" width="32">
    </td>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/object_1x_7.png" width="32">
    </td>
    <td align="center" style="background-color:black; color:white;">
      <img src="/assets/images/sprites/object_1x_8.png" width="32">
    </td>
  </tr>
  <tr>
    <td align="center" style="background-color:black; color:white;">
      Balas
    </td>
    <td align="center" style="background-color:black; color:white;">
      Tesoro-Estatuílla
    </td>
    <td align="center" style="background-color:black; color:white;">
      Tesoro-Máscara
    </td>
    <td align="center" style="background-color:black; color:white;">
      Tesoro-Amuleto
    </td>
  </tr>
</table>
</div>

Elementos de la pantalla
-------------

<p align="center">
  <img src="{{ '/assets/images/screen/frame zones_es.png' | relative_url }}" width="500">
</p>

Niveles
-------
Existen seis pantallas de dificultad creciente. Tras completarlas, podrá regresar a la pantalla 1 o redefinir el laberinto. El número de monstruos deberá introducirse utilizando dos cifras; por ejemplo, 09.


<div style="display: flex; align-items: left; gap: 10px;">
  <a href="/assets/images/levels/level_1.png">
    <img src="/assets/images/levels/level_1.png" width="150">
  </a>
  <div>
    <a href="/assets/images/levels/level_1.png">Level 1</a><br>
    <sub> gotas de ácido, fantasmas y ratas</sub>
  </div>
</div>

<div style="display: flex; align-items: flex-start; gap: 10px;">
  <a href="/assets/images/levels/level_2.png">
    <img src="/assets/images/levels/level_2.png" width="150">
  </a>
  <div>
    <a href="/assets/images/levels/level_2.png">Level 2</a><br>
    <sub> gotas de ácido, camaleones, momias,</sub><br>
    <sub> fantasmas y ratas </sub>
  </div>
</div>

<div style="display: flex; align-items: left; gap: 10px;">
  <a href="/assets/images/levels/level_3.png">
    <img src="/assets/images/levels/level_3.png" width="150">
  </a>
  <div>
    <a href="/assets/images/levels/level_3.png">Level 3</a><br>
    <sub> gotas de ácido, camaleones, momias,</sub><br>
    <sub> fantasmas, ratas y vampiros </sub>
  </div>
</div>

<div style="display: flex; align-items: left; gap: 10px;">
  <a href="/assets/images/levels/level_4.png">
    <img src="/assets/images/levels/level_4.png" width="150">
  </a>
  <div>
    <a href="/assets/images/levels/level_4.png">Level 4</a><br>
    <sub> gotas de ácido, camaleones, momias,</sub><br>
    <sub> fantasmas, ratas, esqueletos y vampiros</sub>
  </div>
</div>

<div style="display: flex; align-items: left; gap: 10px;">
  <a href="/assets/images/levels/level_5.png">
    <img src="/assets/images/levels/level_5.png" width="150">
  </a>
  <div>
    <a href="/assets/images/levels/level_5.png">Level 5</a><br>
    <sub> gotas de ácido, camaleones, momias,</sub><br>
    <sub> fantasmas, ratas, esqueletos y vampiros</sub>
  </div>
</div>

<div style="display: flex; align-items: left; gap: 10px;">
  <a href="/assets/images/levels/level_6.png">
    <img src="/assets/images/levels/level_6.png" width="150">
  </a>
  <div>
    <a href="/assets/images/levels/level_6.png">Level 6</a><br>
    <sub> número de enemigos especificado</sub>
  </div>
</div>


Carátulas de casete
-----------

<div style="overflow-x:auto;">
<table>
  <tr>
    <td align="center">
      Investrónica (ES)<br>
      ZX Spectrum
    </td>
    <td align="center">
      <a href="/assets/images/tape_inlay/tape_inlay-fred-investronica.jpg">
        <img src="/assets/images/tape_inlay/tape_inlay-fred-investronica.jpg" width="100">
      </a>
      <a href="/assets/images/tape_inlay/Investronica_inlay_2.png">
        <img src="/assets/images/tape_inlay/Investronica_inlay_2.png" width="100">
      </a>
      <a href="/assets/images/tape_inlay/Investronica_Instrucciones_1.jpeg">
        <img src="/assets/images/tape_inlay/Investronica_Instrucciones_1.jpeg" width="100">
      </a>
      <a href="/assets/images/tape_inlay/Investronica_Instrucciones_2.jpeg">
        <img src="/assets/images/tape_inlay/Investronica_Instrucciones_2.jpeg" width="100">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      Quicksilva (UK)<br>
      ZX Spectrum
    </td>
    <td align="center">
      <a href="/assets/images/tape_inlay/tape_inlay-fred-quicksilva-front.jpg">
        <img src="/assets/images/tape_inlay/tape_inlay-fred-quicksilva-front.jpg" width="160">
      </a>
      <a href="/assets/images/tape_inlay/tape_inlay-fred-quicksilva-back.jpg">
        <img src="/assets/images/tape_inlay/tape_inlay-fred-quicksilva-back.jpg" width="160">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      Quicksilva (UK)<br>
      Commodore 64
    </td>
    <td align="center">
      <a href="/assets/images/tape_inlay/Quicksilva_C64_inlay_1.jpeg">
        <img src="/assets/images/tape_inlay/Quicksilva_C64_inlay_1.jpeg" width="160">
      </a>
      <a href="/assets/images/tape_inlay/Quicksilva_C64_inlay_2.jpeg">
        <img src="/assets/images/tape_inlay/Quicksilva_C64_inlay_2.jpeg" width="160">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      Amsoft (UK)<br>
      CPC 464
    </td>
    <td align="center">
      <a href="/assets/images/tape_inlay/Amsoft_118_inlay_1.jpeg">
        <img src="/assets/images/tape_inlay/Amsoft_118_inlay_1.jpeg" width="160">
      </a>
      <a href="/assets/images/tape_inlay/Amsoft_118_inlay_2.jpeg">
        <img src="/assets/images/tape_inlay/Amsoft_118_inlay_2.jpeg" width="160">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      Amsoft (ES)<br>
      CPC 464
    </td>
    <td align="center">
      <a href="/assets/images/tape_inlay/Amsoft_s118_inlay_1.jpeg">
        <img src="/assets/images/tape_inlay/Amsoft_s118_inlay_1.jpeg" width="220">
      </a>
      <a href="/assets/images/tape_inlay/Amsoft_s118_instrucciones.jpeg">
        <img src="/assets/images/tape_inlay/Amsoft_s118_instrucciones.jpeg" width="80">
      </a>
    </td>
  </tr>
</table>
</div>