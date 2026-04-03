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

<div class="table-container">
<table class="compact-table">
  <tr>
    <th>Object</th>
    <th>Diagrams</th>
  </tr>
  <tr>
    <td>Fred</td>
    <td>
      <a href="#" onclick="openFile('/assets/images/state/fred/StateDiagram_Fred_State_0_v04.pdf'); return false;">Main</a><br>
      <a href="#" onclick="openFile('/assets/images/state/fred/StateDiagram_Fred_State_2_v02.pdf'); return false;">State 2</a><br>
      <a href="#" onclick="openFile('/assets/images/state/fred/StateDiagram_Fred_State_4_v03.pdf'); return false;">State 4</a><br>
      <a href="#" onclick="openFile('/assets/images/state/fred/StateDiagram_Fred_State_5_v04.pdf'); return false;">State 5</a><br>
      <a href="#" onclick="openFile('/assets/images/state/fred/StateDiagram_Fred_State_6_v03.pdf'); return false;">State 6</a><br>
      <a href="#" onclick="openFile('/assets/images/state/fred/StateDiagram_Fred_State_7_v04.pdf'); return false;">State 7</a><br>
      <a href="#" onclick="openFile('/assets/images/state/fred/StateDiagram_Fred_State_8_v02.pdf'); return false;">State 8</a>
    </td>
  </tr>
  <tr>
    <td>Acid Drop</td>
    <td>
      <a href="#" onclick="openFile('/assets/images/state/aciddrop/StateDiagram_Acid Drop_State 0_v04.pdf'); return false;">Main</a><br>
    </td>
  </tr>
  <tr>
    <td>Chameleon</td>
    <td>
      <a href="#" onclick="openFile('/assets/images/state/chameleon/StateDiagram_Chameleon_State 0_v04.pdf'); return false;">Main</a><br>
    </td>
  </tr>
  <tr>
    <td>Ghost</td>
    <td>
      <a href="#" onclick="openFile('/assets/images/state/ghost/StateDiagram_Ghost_State 0_v03.pdf'); return false;">Main</a><br>
    </td>
  </tr>
  <tr>
    <td>Mummy</td>
    <td>
      <a href="#" onclick="openFile('/assets/images/state/mummy/StateDiagram_Mummy_State 0_v06.pdf'); return false;">Main</a><br>
      <a href="#" onclick="openFile('/assets/images/state/mummy/StateDiagram_Mummy_State 3_v04.pdf'); return false;">State 3</a><br>
      <a href="#" onclick="openFile('/assets/images/state/mummy/StateDiagram_Mummy_State 4_v02.pdf'); return false;">State 4</a><br>
      <a href="#" onclick="openFile('/assets/images/state/mummy/StateDiagram_Mummy_State 5_v02.pdf'); return false;">State 5</a><br>
    </td>
  </tr>
  <tr>
    <td>Rat</td>
    <td>
      <a href="#" onclick="openFile('/assets/images/state/rat/StateDiagram_Rat_State 0_v03.pdf'); return false;">Main</a><br>
    </td>
  </tr>
  <tr>
    <td>Skeleton</td>
    <td>
      <a href="#" onclick="openFile('/assets/images/state/skeleton/StateDiagram_Skeleton_State 0_v03.pdf'); return false;">Main</a><br>
    </td>
  </tr>
  <tr>
    <td>Vampire</td>
    <td>
      <a href="#" onclick="openFile('/assets/images/state/vampire/StateDiagram_Vampire_State0_v04.pdf'); return false;">Main</a><br>
      <a href="#" onclick="openFile('/assets/images/state/vampire/StateDiagram_Vampire_State5_v02.pdf'); return false;">State 5</a><br>
      <a href="#" onclick="openFile('/assets/images/state/vampire/StateDiagram_Vampire_State6_v02.pdf'); return false;">State 6</a><br>
      <a href="#" onclick="openFile('/assets/images/state/vampire/StateDiagram_Vampire_State7_v02.pdf'); return false;">State 7</a><br>
    </td>
  </tr>
</table>
</div>

<div id="lightbox" onclick="closeLightbox()">
  <img id="lightbox-img" style="display:none;">
  <iframe id="lightbox-pdf" style="display:none;"></iframe>
</div>

<script>
function openFile(src) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const pdf = document.getElementById("lightbox-pdf");

  if (src.endsWith(".pdf")) {
    pdf.src = src;
    pdf.style.display = "block";
    img.style.display = "none";
  } else {
    img.src = src;
    img.style.display = "block";
    pdf.style.display = "none";
  }

  lb.style.display = "flex";
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const pdf = document.getElementById("lightbox-pdf");

  lb.style.display = "none";
  img.src = "";
  pdf.src = "";
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeLightbox();
});
</script>