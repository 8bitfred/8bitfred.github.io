---
layout: page
title: Scratch Code
parent: Documentation
grand_parent: Retro-Fred Project
nav_order: 4
has_toc: false
---

Individual Files
----------------

[Download All in PDF](/assets/pdf/ScratchCodePDF.zip)

[Download All in SVG](/assets/svg/ScratchCodeSVG.zip)

Script Viewer by Object
-----------------------

<div style="margin-bottom: 20px;"></div>

<style>
.object-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.object-left {
  width: 260px;       /* 👈 ancho fijo */
  flex-shrink: 0;     /* 👈 evita que se reduzca */
}

.object-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.method {
  display: block;
  cursor: pointer;
  color: #4ea1ff;
  text-decoration: none;
  margin-left: 10px;
  font-size: 0.8em;   /* 👈 más pequeño */
}

.method:hover {
  text-decoration: underline;
}

.object-viewer {
  flex-grow: 1;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 10px;
  text-align: center;
  min-height: 120px;
}

.object-viewer img {
  max-width: 100%;
  max-height: 220px;
  height: auto;
  cursor: zoom-in;
}

.object-viewer {
  flex-grow: 1;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 10px;
  text-align: center;
  min-height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.object-viewer svg {
  width: 100%;
  height: 100%;
  cursor: zoom-in;   /* 👈 vuelve la lupa */
}

#lightbox {
  display: none;
  position: fixed;
  z-index: 9999;
  inset: 0;
  background: rgba(0, 0, 0, 0.88);
  justify-content: center;
  align-items: center;
  padding: 20px;
}

#lightbox img {
  max-width: 95%;
  max-height: 95%;
  width: auto;
  height: auto;
}
</style>

{% for object in site.data.code %}
<div class="object-row">

  <div class="object-left">
    <div class="object-title">{{ object[0] | capitalize }}</div>

    {% for method in object[1] %}
      <a class="method"
         href="#"
         onclick="showSVG(this, '/assets/svg/Code/{{ object[0] }}/{{ method }}.svg'); return false;">
         {{ method }}
      </a>
    {% endfor %}
  </div>

  <div class="object-viewer">
    <em>Select a script</em>
  </div>

</div>
{% endfor %}

<div id="lightbox">
  <img id="lightbox-img" src="" alt="">
</div>

<script>
function showSVG(el, path) {
  const row = el.closest('.object-row');
  const viewer = row.querySelector('.object-viewer');

  fetch(path)
    .then(response => response.text())
    .then(svg => {
      viewer.innerHTML = svg;
    });
  viewer.dataset.src = path;
}

document.addEventListener('click', function (e) {
  const viewer = e.target.closest('.object-viewer');

  if (viewer && viewer.dataset.src) {
    openLightbox(viewer.dataset.src);
    return;
  }

  if (e.target.id === 'lightbox') {
    closeLightbox();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

function openLightbox(path) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = path;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  lightbox.style.display = 'none';
  img.src = '';
}

document.addEventListener('click', function (e) {
  const viewer = e.target.closest('.object-viewer');
  if (viewer && viewer.dataset.src) {
    openLightbox(viewer.dataset.src);
    return;
  }

  if (e.target.id === 'lightbox') {
    closeLightbox();
  }
});
</script>