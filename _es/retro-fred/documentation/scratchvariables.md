---
layout: page
title: Variables de Scratch
parent: Documentación
grand_parent: Proyecto Retro-Fred
nav_order: 6
has_toc: true
lang: es
ref: variables
---

<style>
/* Tabla de variables globales → columna 1 */
.table-global td:nth-child(1) {
  color: #0969da;
  font-weight: bold;
  font-family: monospace;
}

/* Tabla de variables locales → columna 2 */
.table-local td:nth-child(2) {
  color: #0969da;
  font-weight: bold;
  font-family: monospace;
}
</style>

<div style="margin-bottom:20px;">
  <strong>Contenido</strong>
  <ul>
    <li><a href="#global">Globales</a></li>
    <li><a href="#local">Locales</a></li>
  </ul>
</div>


<h2 id="global">Globales</h2>

<div style="overflow-x:auto;">
<table class="table-global" style="border-collapse: collapse; width: auto;">
  <tr>
    <th style="text-align:left; padding:6px;">Nombre variable</th>
    <th style="text-align:left; padding:6px;">Descripción</th>
  </tr>

  <tr><td>gBlockType</td><td>Tipo de bloque: empty, stone, stone1, stone2, stone3, rope start, rope main, rope end, sky, sand, trapdoor.</td></tr>
  <tr><td>gBullet</td><td>Número de balas disponible.</td></tr>
  <tr><td>gBulletChar_x</td><td>Coordenada X del carácter del mapa donde está la bala, expresada en el sistema de referencia del mapa.</td></tr>
  <tr><td>gBulletChar_y</td><td>Coordenada Y del carácter del mapa donde está la bala, expresada en el sistema de referencia del mapa.</td></tr>
  <tr><td>gBulletDirection</td><td>Dirección de movimiento en el eje X de la bala: -1, 1.</td></tr>
  <tr><td>gBulletFired</td><td>true mientras la bala se encuentra en la pantalla.</td></tr>

  <tr><td>gCell_x</td><td>Coordenada X de una celda en el mapa.</td></tr>
  <tr><td>gCell_y</td><td>Coordenada Y de una celda en el mapa.</td></tr>

  <tr><td>gCloneSetup</td><td>true si el clon está inicializado.</td></tr>
  <tr><td>gCloneSetupText</td><td>true si el clon de Text está inicializado.</td></tr>

  <tr><td>gCollisionBullet</td><td>true si hay colisión de la bala con un enemigo.</td></tr>
  <tr><td>gCollisionEnemy</td><td>true si hay colisión de Fred con un enemigo.</td></tr>
  <tr><td>gCollisionObject</td><td>true si hay colisión de Fred con un objeto.</td></tr>

  <tr><td>gDebugMap</td><td>true para utilizar el mapa de depuración en lugar de generar un laberinto aleatorio.</td></tr>
  <tr><td>gExitInMinimap</td><td>true para representar en el minimapa la trampilla de salida.</td></tr>

  <tr><td>gFred_x / gFred_y</td><td>Coordenadas de Fred en el mapa.</td></tr>
  <tr><td>gFredChar_x / gFredChar_y</td><td>Coordenadas del carácter del mapa donde está Fred.</td></tr>
  <tr><td>gFredDirection</td><td>Dirección de orientación de Fred en el eje X: -1, 1.</td></tr>
  <tr><td>gFredFrame</td><td>Fotograma actual: standing, big step, small step, clamp, extend.</td></tr>
  <tr><td>gFredState</td><td>Máquina de estados: walk, climb, side jump, vertical jump, exit maze.</td></tr>

  <tr><td>gGameLevel</td><td>Nivel de juego activo.</td></tr>
  <tr><td>glBestScoreName</td><td>Iniciales de las mejores puntuaciones.</td></tr>
  <tr><td>glBestScoreNumber</td><td>Mejores puntuaciones.</td></tr>

  <tr><td>glMap</td><td>Matriz del mapa.</td></tr>
  <tr><td>glObjectType</td><td>Tipos de objetos.</td></tr>

  <tr><td>gMinimap</td><td>true para mostrar el minimapa.</td></tr>
  <tr><td>gMinimap_x / gMinimap_y</td><td>Posición del minimapa.</td></tr>

  <tr><td>gPower</td><td>Unidades de vida disponibles.</td></tr>
  <tr><td>gScoreCurrent</td><td>Puntuación actual.</td></tr>
  <tr><td>gScoreHigh</td><td>Máxima puntuación obtenida.</td></tr>

  <tr><td>gSoundFire</td><td>true para reproducir el sonido de disparo.</td></tr>
  <tr><td>gSoundJump</td><td>true para reproducir el sonido de salto.</td></tr>
  <tr><td>gSoundStep</td><td>true para reproducir el sonido de caminar.</td></tr>

  <tr><td>gText_x / gText_y</td><td>Coordenadas del sprite Text.</td></tr>
  <tr><td>gTextColor</td><td>Color: black, white.</td></tr>
  <tr><td>gTextType</td><td>Pantalla: scoreboard, hall of fame, new record, end of level.</td></tr>

  <tr><td>gTracker</td><td>true para mostrar un localizador en el minimapa.</td></tr>
  <tr><td>gTrapdoor_x</td><td>Posición de la trampilla de salida.</td></tr>
  <tr><td>gTreasuresCollected</td><td>Número de tesoros recogidos.</td></tr>

</table>
</div>


<h2 id="local">Locales</h2>

<div style="overflow-x:auto;">
<table class="table-local" style="border-collapse: collapse; width: auto;">
<tr>
<th>Objeto</th>
<th>Nombre de la variable</th>
<th>Descripción</th>
</tr>

<tr><td>Acid Drop</td><td>sBlk</td><td>Nombre del tipo de bloque: empty, stone, rope start, rope main, rope end, sky, sand, trapdoor.</td></tr>
<tr><td>Acid Drop</td><td>sBlockCode</td><td>Código del bloque: 0 a 9.</td></tr>
<tr><td>Acid Drop</td><td>sCondMet</td><td>true si se cumplen las condiciones de la celda para colocar el sprite.</td></tr>
<tr><td>Acid Drop</td><td>sFrame</td><td>Nombre del fotograma: drop1, drop2, drop3, drop4, drop5, drop6, splash.</td></tr>
<tr><td>Acid Drop</td><td>sHeight</td><td>Altura del sprite en caracteres.</td></tr>
<tr><td>Acid Drop</td><td>sIsClone</td><td>true si el sprite es un clon.</td></tr>
<tr><td>Acid Drop</td><td>sIsOnScreen</td><td>true si el sprite está en pantalla.</td></tr>
<tr><td>Acid Drop</td><td>sIsOverlapping</td><td>true si existe solapamiento entre las cajas de colisión.</td></tr>

<tr><td>Acid Drop</td><td>sSprite_cx</td><td>Coordenada X del carácter de la celda del mapa donde está el sprite (sistema de referencia del mapa).</td></tr>
<tr><td>Acid Drop</td><td>sSprite_cy</td><td>Coordenada Y del carácter de la celda del mapa donde está el sprite (sistema de referencia del mapa).</td></tr>
<tr><td>Acid Drop</td><td>sSprite_x</td><td>Coordenada X de la celda del mapa donde está el sprite (sistema de referencia del mapa).</td></tr>
<tr><td>Acid Drop</td><td>sSprite_y</td><td>Coordenada Y de la celda del mapa donde está el sprite (sistema de referencia del mapa).</td></tr>
<tr><td>Acid Drop</td><td>sSpriteChar_x</td><td>Coordenada X del carácter del mapa donde está el sprite (sistema de referencia del mapa).</td></tr>
<tr><td>Acid Drop</td><td>sSpriteChar_y</td><td>Coordenada Y del carácter del mapa donde está el sprite (sistema de referencia del mapa).</td></tr>

<tr><td>Acid Drop</td><td>sWidth</td><td>Anchura del sprite en caracteres.</td></tr>
<tr><td>Acid Drop</td><td>sX</td><td>Coordenada X del sprite en el sistema de referencia de Scratch.</td></tr>
<tr><td>Acid Drop</td><td>sY</td><td>Coordenada Y del sprite en el sistema de referencia de Scratch.</td></tr>

<tr><td>Bullet</td><td>sDirection_x</td><td>Dirección de movimiento en el eje X: -1, 1.</td></tr>
<tr><td>Bullet</td><td>sHeight</td><td>Altura del sprite en caracteres.</td></tr>
<tr><td>Bullet</td><td>sIsClone</td><td>true si el sprite es un clon.</td></tr>
<tr><td>Bullet</td><td>sIsOnScreen</td><td>true si el sprite está en pantalla.</td></tr>
<tr><td>Bullet</td><td>sWidth</td><td>Anchura del sprite en caracteres.</td></tr>
<tr><td>Bullet</td><td>sX</td><td>Coordenada X del sprite en el sistema de referencia de Scratch.</td></tr>
<tr><td>Bullet</td><td>sY</td><td>Coordenada Y del sprite en el sistema de referencia de Scratch.</td></tr>

<tr><td>Chameleon</td><td>sAltFrame</td><td>Número de fotograma: 1, 2.</td></tr>
<tr><td>Chameleon</td><td>sDirection_x</td><td>Dirección de movimiento en el eje X: -1, 0, 1.</td></tr>
<tr><td>Chameleon</td><td>sDirection_y</td><td>Dirección de movimiento en el eje Y: -1, 0, 1.</td></tr>
<tr><td>Chameleon</td><td>sFrame</td><td>Nombre del fotograma (por ejemplo, chameleon1_left_up).</td></tr>

<tr><td>Main</td><td>sCollisionTimer</td><td>Temporizador de colisión: 0 a 5.</td></tr>
<tr><td>Main</td><td>sGameOver</td><td>true cuando termina la partida.</td></tr>
<tr><td>Main</td><td>sEndOfLevel</td><td>true cuando se completa un nivel.</td></tr>
<tr><td>Main</td><td>sInput_x</td><td>Entrada de movimiento horizontal: 0, 1.</td></tr>
<tr><td>Main</td><td>sInput_y</td><td>Entrada de movimiento vertical: 0, 1.</td></tr>
<tr><td>Main</td><td>sInputFire</td><td>Entrada de disparo: 0, 1.</td></tr>

<tr><td>Main</td><td>sInfiniteAmmo</td><td>true significa que la munición se recarga automáticamente con gRefillBullet.</td></tr>
<tr><td>Main</td><td>sInfinitePower</td><td>true significa que la vida se recarga automáticamente hasta 15 unidades.</td></tr>

<tr><td>Main</td><td>sJumpStage</td><td>Fase del salto de Fred: 0 a 3.</td></tr>

<tr><td>Map</td><td>sDirection</td><td>Número de dirección de movimiento: 1 a 4.</td></tr>
<tr><td>Map</td><td>sIsInside</td><td>true si las coordenadas de la celda están dentro del mapa.</td></tr>

<tr><td>Minimap</td><td>sColumn</td><td>Índice de columna en el bucle de generación del minimapa.</td></tr>
<tr><td>Minimap</td><td>sRow</td><td>Índice de fila en el bucle de generación del minimapa.</td></tr>
<tr><td>Minimap</td><td>sValueInput</td><td>Toma sucesivas potencias de 2: 1, 2, 4, 8.</td></tr>
<tr><td>Minimap</td><td>sValueOutput</td><td>Toma el valor 0 o el valor de sValueInput.</td></tr>

<tr><td>Mummy</td><td>sFlip</td><td>true si la momia cambió de dirección horizontal.</td></tr>
<tr><td>Mummy</td><td>sFrame</td><td>Nombre del fotograma: step, standing, fall, pop.</td></tr>
<tr><td>Mummy</td><td>sState</td><td>Máquina de estados: walk, fall, bounce.</td></tr>

<tr><td>Object</td><td>slTreasureName</td><td>Lista de nombres de tesoros: bust, hieroglyph, statuette, mask, cross.</td></tr>
<tr><td>Object</td><td>slTreasureScore</td><td>Lista de puntuaciones para cada tipo de tesoro.</td></tr>

<tr><td>Screen</td><td>sKey</td><td>“pressed” si la tecla está pulsada; en caso contrario “none”.</td></tr>
<tr><td>Screen</td><td>sLetterSet</td><td>Cadena que contiene el conjunto de letras.</td></tr>

<tr><td>Skeleton</td><td>sDelta</td><td>Distancia entre Fred y el esqueleto, en celdas.</td></tr>
<tr><td>Skeleton</td><td>sRotation</td><td>Dirección de rotación: antihoraria/horaria (-1, 1).</td></tr>

<tr><td>Text</td><td>sTextCharNumber</td><td>Índice del carácter contado de derecha a izquierda.</td></tr>
<tr><td>Text</td><td>sTextColor</td><td>Color: black, white.</td></tr>
<tr><td>Text</td><td>sTextType</td><td>Pantalla: scoreboard, hall of fame, new record, end of level.</td></tr>

<tr><td>Tracker</td><td>sX</td><td>Coordenada X del sprite en el sistema de referencia de Scratch.</td></tr>
<tr><td>Tracker</td><td>sY</td><td>Coordenada Y del sprite en el sistema de referencia de Scratch.</td></tr>

<tr><td>Vampire</td><td>sMode</td><td>Modo de movimiento.</td></tr>
<tr><td>Vampire</td><td>sRandom</td><td>Número aleatorio.</td></tr>
<tr><td>Vampire</td><td>sRotation</td><td>Dirección de rotación: antihoraria/horaria (-1, 1).</td></tr>

</table>
</div>