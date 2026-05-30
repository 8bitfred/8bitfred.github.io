---
layout: home
permalink: /
nav_order: 1
---

<script>
(function() {
    const lang = (navigator.language || '').toLowerCase();

    if (lang.startsWith('es')) {
        window.location.replace('/es/');
    } else {
        window.location.replace('/en/');
    }
})();
</script>

<noscript>
<meta http-equiv="refresh" content="0; url=/en/">
</noscript>