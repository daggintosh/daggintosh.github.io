let img = document.getElementById("fox");
img.addEventListener("load", () => img.style.animationPlayState = "running")

function getFox() {
    fetch("https://randomfox.ca/floof/", { cache: "no-store" })
        .then(res => res.json())
        .then(res => img.src = res.image)
        .catch(err => console.error(err))
}