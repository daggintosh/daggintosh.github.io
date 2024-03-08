let img = document.getElementById("fox");
img.addEventListener("load", () => img.style.animationPlayState = "running")

let header = document.getElementById("header");
let container = document.getElementById("container")

addEventListener("resize", () => fixHeight())

function firstLoad() {
    fixHeight()
    getFox()
}

function fixHeight() {
    let offset = (100 * header.offsetHeight) / window.innerHeight
    container.style.height = `${100 - offset}vh`
}

function getFox() {
    fetch("https://randomfox.ca/floof/", { cache: "no-store" })
        .then(res => res.json())
        .then(res => img.src = res.image)
        .catch(err => console.error(err))
}