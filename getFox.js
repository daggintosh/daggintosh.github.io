let img = document.getElementById("fox");
fetch("https://randomfox.ca/floof")
    .then(res => res.json())
    .then(res => img.src = res.image)
    .catch(err => console.error(err));