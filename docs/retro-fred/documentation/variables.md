---
layout: page
title: Scratch Variables
parent: Documentation
grand_parent: Retro-Fred Project
nav_order: 6
has_toc: true
---

<div style="margin-bottom:20px;">
  <strong>Contents</strong>
  <ul>
    <li><a href="#global">Global</a></li>
    <li><a href="#local">Local</a></li>
  </ul>
</div>

<h2 id="global">Global</h2>


<div style="overflow-x:auto;">
<table style="border-collapse: collapse; width: auto;">
  <tr>
    <th style="text-align:left; padding:6px;">Variable name</th>
    <th style="text-align:left; padding:6px;">Description</th>
  </tr>

  <tr><td>gBlockType</td><td>Block type: empty, stone, stone1, stone2, stone3, rope start, rope main, rope end, sky, sand, trapdoor.</td></tr>
  <tr><td>gBullet</td><td>Number of bullets available.</td></tr>
  <tr><td>gBulletChar_x</td><td>X coordinate of the map character where the bullet is located.</td></tr>
  <tr><td>gBulletChar_y</td><td>Y coordinate of the map character where the bullet is located.</td></tr>
  <tr><td>gBulletDirection</td><td>Movement direction along the X axis of the bullet: -1, 1.</td></tr>
  <tr><td>gBulletFired</td><td>true while the bullet is on screen.</td></tr>
  <tr><td>gCell_x</td><td>X coordinate of a cell in the map.</td></tr>
  <tr><td>gCell_y</td><td>Y coordinate of a cell in the map.</td></tr>
  <tr><td>gCloneSetup</td><td>true if the clone is initialized.</td></tr>
  <tr><td>gCloneSetupText</td><td>true if the Text clone is initialized.</td></tr>

  <tr><td>gCollisionBullet</td><td>true if the bullet collides with an enemy.</td></tr>
  <tr><td>gCollisionEnemy</td><td>true if Fred collides with an enemy.</td></tr>
  <tr><td>gCollisionObject</td><td>true if Fred collides with an object.</td></tr>

  <tr><td>gDebugMap</td><td>true to use the debug map instead of generating a random maze.</td></tr>
  <tr><td>gExitInMinimap</td><td>true to display the exit trapdoor on the minimap.</td></tr>

  <tr><td>gFred_x / gFred_y</td><td>Coordinates of Fred in the map.</td></tr>
  <tr><td>gFredChar_x / gFredChar_y</td><td>Coordinates of the map character where Fred is located.</td></tr>
  <tr><td>gFredDirection</td><td>Fred’s orientation along the X axis: -1, 1.</td></tr>
  <tr><td>gFredFrame</td><td>Current animation frame: standing, big step, small step, clamp, extend.</td></tr>
  <tr><td>gFredState</td><td>State machine: walk, climb, side jump, vertical jump, exit maze.</td></tr>

  <tr><td>gGameLevel</td><td>Current game level.</td></tr>
  <tr><td>glBestScoreName</td><td>Initials of the best scores.</td></tr>
  <tr><td>glBestScoreNumber</td><td>Best scores.</td></tr>

  <tr><td>glMap</td><td>Map matrix.</td></tr>
  <tr><td>glObjectType</td><td>Object types.</td></tr>

  <tr><td>gMinimap</td><td>true to display the minimap.</td></tr>
  <tr><td>gMinimap_x / gMinimap_y</td><td>Minimap position.</td></tr>

  <tr><td>gPower</td><td>Available life units.</td></tr>
  <tr><td>gScoreCurrent</td><td>Current score.</td></tr>
  <tr><td>gScoreHigh</td><td>Highest score achieved.</td></tr>

  <tr><td>gSoundFire</td><td>true to play the shooting sound.</td></tr>
  <tr><td>gSoundJump</td><td>true to play the jump sound.</td></tr>
  <tr><td>gSoundStep</td><td>true to play the walking sound.</td></tr>

  <tr><td>gText_x / gText_y</td><td>Text sprite coordinates.</td></tr>
  <tr><td>gTextColor</td><td>Color: black, white.</td></tr>
  <tr><td>gTextType</td><td>Screen: scoreboard, hall of fame, new record, end of level.</td></tr>

  <tr><td>gTracker</td><td>true to display a tracker on the minimap.</td></tr>
  <tr><td>gTrapdoor_x</td><td>Position of the exit trapdoor.</td></tr>
  <tr><td>gTreasuresCollected</td><td>Number of collected treasures.</td></tr>

</table>
</div>


<h2 id="local">Local</h2>
-----

<div style="overflow-x:auto;">
<table style="border-collapse: collapse; width: auto;">
<tr>
<th>Object</th>
<th>Variable name</th>
<th>Description</th>
</tr>

<tr><td>Acid Drop</td><td>sBlk</td><td>Block type name: empty, stone, rope start, rope main, rope end, sky, sand, trapdoor.</td></tr>
<tr><td>Acid Drop</td><td>sBlockCode</td><td>Block code: 0 to 9.</td></tr>
<tr><td>Acid Drop</td><td>sCondMet</td><td>true if the cell conditions to place the sprite are met.</td></tr>
<tr><td>Acid Drop</td><td>sFrame</td><td>Frame name: drop1, drop2, drop3, drop4, drop5, drop6, splash.</td></tr>
<tr><td>Acid Drop</td><td>sHeight</td><td>Sprite height in characters.</td></tr>
<tr><td>Acid Drop</td><td>sIsClone</td><td>true if the sprite is a clone.</td></tr>
<tr><td>Acid Drop</td><td>sIsOnScreen</td><td>true if the sprite is on screen.</td></tr>
<tr><td>Acid Drop</td><td>sIsOverlapping</td><td>true if there is overlap between bounding boxes.</td></tr>

<tr><td>Acid Drop</td><td>sSprite_cx</td><td>X coordinate of the map cell character where the sprite is located (map reference system).</td></tr>
<tr><td>Acid Drop</td><td>sSprite_cy</td><td>Y coordinate of the map cell character where the sprite is located (map reference system).</td></tr>
<tr><td>Acid Drop</td><td>sSprite_x</td><td>X coordinate of the map cell where the sprite is located (map reference system).</td></tr>
<tr><td>Acid Drop</td><td>sSprite_y</td><td>Y coordinate of the map cell where the sprite is located (map reference system).</td></tr>
<tr><td>Acid Drop</td><td>sSpriteChar_x</td><td>X coordinate of the map character where the sprite is located (map reference system).</td></tr>
<tr><td>Acid Drop</td><td>sSpriteChar_y</td><td>Y coordinate of the map character where the sprite is located (map reference system).</td></tr>

<tr><td>Acid Drop</td><td>sWidth</td><td>Sprite width in characters.</td></tr>
<tr><td>Acid Drop</td><td>sX</td><td>Sprite X coordinate in the Scratch reference system.</td></tr>
<tr><td>Acid Drop</td><td>sY</td><td>Sprite Y coordinate in the Scratch reference system.</td></tr>

<tr><td>Bullet</td><td>sDirection_x</td><td>Movement direction along the X axis: -1, 1.</td></tr>
<tr><td>Bullet</td><td>sHeight</td><td>Sprite height in characters.</td></tr>
<tr><td>Bullet</td><td>sIsClone</td><td>true if the sprite is a clone.</td></tr>
<tr><td>Bullet</td><td>sIsOnScreen</td><td>true if the sprite is on screen.</td></tr>
<tr><td>Bullet</td><td>sWidth</td><td>Sprite width in characters.</td></tr>
<tr><td>Bullet</td><td>sX</td><td>Sprite X coordinate in the Scratch reference system.</td></tr>
<tr><td>Bullet</td><td>sY</td><td>Sprite Y coordinate in the Scratch reference system.</td></tr>

<tr><td>Chameleon</td><td>sAltFrame</td><td>Frame number: 1, 2.</td></tr>
<tr><td>Chameleon</td><td>sDirection_x</td><td>Movement direction along the X axis: -1, 0, 1.</td></tr>
<tr><td>Chameleon</td><td>sDirection_y</td><td>Movement direction along the Y axis: -1, 0, 1.</td></tr>
<tr><td>Chameleon</td><td>sFrame</td><td>Frame name (e.g., chameleon1_left_up).</td></tr>

<tr><td>Main</td><td>sCollisionTimer</td><td>Collision timer: 0 to 5.</td></tr>
<tr><td>Main</td><td>sGameOver</td><td>true when the game ends.</td></tr>
<tr><td>Main</td><td>sEndOfLevel</td><td>true when a level is completed.</td></tr>
<tr><td>Main</td><td>sInput_x</td><td>Horizontal movement input: 0, 1.</td></tr>
<tr><td>Main</td><td>sInput_y</td><td>Vertical movement input: 0, 1.</td></tr>
<tr><td>Main</td><td>sInputFire</td><td>Fire input: 0, 1.</td></tr>

<tr><td>Main</td><td>sInfiniteAmmo</td><td>true means ammo is automatically refilled with gRefillBullet.</td></tr>
<tr><td>Main</td><td>sInfinitePower</td><td>true means life is automatically refilled to 15 units.</td></tr>

<tr><td>Main</td><td>sJumpStage</td><td>Fred’s jump stage: 0 to 3.</td></tr>

<tr><td>Map</td><td>sDirection</td><td>Movement direction number: 1 to 4.</td></tr>
<tr><td>Map</td><td>sIsInside</td><td>true if the cell coordinates are inside the map.</td></tr>

<tr><td>Minimap</td><td>sColumn</td><td>Column index in the minimap generation loop.</td></tr>
<tr><td>Minimap</td><td>sRow</td><td>Row index in the minimap generation loop.</td></tr>
<tr><td>Minimap</td><td>sValueInput</td><td>Takes successive powers of 2: 1, 2, 4, 8.</td></tr>
<tr><td>Minimap</td><td>sValueOutput</td><td>Takes value 0 or the value of sValueInput.</td></tr>

<tr><td>Mummy</td><td>sFlip</td><td>true if the mummy changed horizontal movement direction.</td></tr>
<tr><td>Mummy</td><td>sFrame</td><td>Frame name: step, standing, fall, pop.</td></tr>
<tr><td>Mummy</td><td>sState</td><td>State machine: walk, fall, bounce.</td></tr>

<tr><td>Object</td><td>slTreasureName</td><td>List of treasure names: bust, hieroglyph, statuette, mask, cross.</td></tr>
<tr><td>Object</td><td>slTreasureScore</td><td>List of scores for each treasure type.</td></tr>

<tr><td>Screen</td><td>sKey</td><td>“pressed” if the key is pressed, otherwise “none”.</td></tr>
<tr><td>Screen</td><td>sLetterSet</td><td>String containing the set of letters.</td></tr>

<tr><td>Skeleton</td><td>sDelta</td><td>Distance between Fred and the skeleton, in cells.</td></tr>
<tr><td>Skeleton</td><td>sRotation</td><td>Rotation direction: counterclockwise/clockwise (-1, 1).</td></tr>

<tr><td>Text</td><td>sTextCharNumber</td><td>Character index counted from right to left.</td></tr>
<tr><td>Text</td><td>sTextColor</td><td>Color: black, white.</td></tr>
<tr><td>Text</td><td>sTextType</td><td>Screen: scoreboard, hall of fame, new record, end of level.</td></tr>

<tr><td>Tracker</td><td>sX</td><td>Sprite X coordinate in the Scratch reference system.</td></tr>
<tr><td>Tracker</td><td>sY</td><td>Sprite Y coordinate in the Scratch reference system.</td></tr>

<tr><td>Vampire</td><td>sMode</td><td>Movement mode.</td></tr>
<tr><td>Vampire</td><td>sRandom</td><td>Random number.</td></tr>
<tr><td>Vampire</td><td>sRotation</td><td>Rotation direction: counterclockwise/clockwise (-1, 1).</td></tr>

</table>
</div>