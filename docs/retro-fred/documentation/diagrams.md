---
layout: page
title: Diagrams
parent: Documentation
grand_parent: Retro-Fred Project
nav_order: 2
has_toc: true
---

State diagrams
--------------

<a href="/assets/images/state/state%20diagrams.zip" download>
  Download All (PDF and SVG)
</a>

<style>
#lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,255);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

#lightbox img {
  display: block;
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  border: 12px solid white;
  box-sizing: border-box;
}
</style>

<div class="table-container">
<table class="compact-table">
  <tr>
    <th>Object</th>
    <th>Diagrams</th>
  </tr>
  <tr>
    <td>Fred</td>
    <td>
      <a href="/assets/images/state/fred/StateDiagram_Fred_State_0_v04.svg" onclick="openFile(this.href); return false;">Main</a><br>
      <a href="/assets/images/state/fred/StateDiagram_Fred_State_2_v02.svg" onclick="openFile(this.href); return false;">State 2</a><br>
      <a href="/assets/images/state/fred/StateDiagram_Fred_State_4_v03.svg" onclick="openFile(this.href); return false;">State 4</a><br>
      <a href="/assets/images/state/fred/StateDiagram_Fred_State_5_v04.svg" onclick="openFile(this.href); return false;">State 5</a><br>
      <a href="/assets/images/state/fred/StateDiagram_Fred_State_6_v03.svg" onclick="openFile(this.href); return false;">State 6</a><br>
      <a href="/assets/images/state/fred/StateDiagram_Fred_State_7_v04.svg" onclick="openFile(this.href); return false;">State 7</a><br>
      <a href="/assets/images/state/fred/StateDiagram_Fred_State_8_v02.svg" onclick="openFile(this.href); return false;">State 8</a>
    </td>
  </tr>
  <tr>
    <td>Acid Drop</td>
    <td>
      <a href="/assets/images/state/aciddrop/StateDiagram_Acid%20Drop_State%200_v04.svg" onclick="openFile(this.href); return false;">Main</a><br>
    </td>
  </tr>
  <tr>
    <td>Chameleon</td>
    <td>
      <a href="/assets/images/state/chameleon/StateDiagram_Chameleon_State%200_v04.svg" onclick="openFile(this.href); return false;">Main</a><br>
    </td>
  </tr>
  <tr>
    <td>Ghost</td>
    <td>
      <a href="/assets/images/state/ghost/StateDiagram_Ghost_State%200_v03.svg" onclick="openFile(this.href); return false;">Main</a><br>
    </td>
  </tr>
  <tr>
    <td>Mummy</td>
    <td>
      <a href="/assets/images/state/mummy/StateDiagram_Mummy_State%200_v06.svg" onclick="openFile(this.href); return false;">Main</a><br>
      <a href="/assets/images/state/mummy/StateDiagram_Mummy_State%203_v04.svg" onclick="openFile(this.href); return false;">State 3</a><br>
      <a href="/assets/images/state/mummy/StateDiagram_Mummy_State%204_v02.svg" onclick="openFile(this.href); return false;">State 4</a><br>
      <a href="/assets/images/state/mummy/StateDiagram_Mummy_State%205_v02.svg" onclick="openFile(this.href); return false;">State 5</a><br>
    </td>
  </tr>
  <tr>
    <td>Rat</td>
    <td>
      <a href="/assets/images/state/rat/StateDiagram_Rat_State%200_v03.svg" onclick="openFile(this.href); return false;">Main</a><br>
    </td>
  </tr>
  <tr>
    <td>Skeleton</td>
    <td>
      <a href="/assets/images/state/skeleton/StateDiagram_Skeleton_State%200_v03.svg" onclick="openFile(this.href); return false;">Main</a><br>
    </td>
  </tr>
  <tr>
    <td>Vampire</td>
    <td>
      <a href="/assets/images/state/vampire/StateDiagram_Vampire_State0_v04.svg" onclick="openFile(this.href); return false;">Main</a><br>
      <a href="/assets/images/state/vampire/StateDiagram_Vampire_State5_v02.svg" onclick="openFile(this.href); return false;">State 5</a><br>
      <a href="/assets/images/state/vampire/StateDiagram_Vampire_State6_v02.svg" onclick="openFile(this.href); return false;">State 6</a><br>
      <a href="/assets/images/state/vampire/StateDiagram_Vampire_State7_v02.svg" onclick="openFile(this.href); return false;">State 7</a><br>
    </td>
  </tr>
</table>
</div>

<div id="lightbox" onclick="closeLightbox()">
  <img id="lightbox-img" style="display:none;" onclick="event.stopPropagation()">
</div>

<script>
function openFile(src) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = src;
  img.style.display = "block";

  lb.style.display = "flex";
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  lb.style.display = "none";
  img.src = "";
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeLightbox();
});
</script>