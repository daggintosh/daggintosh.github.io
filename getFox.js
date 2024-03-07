let img = document.getElementById("fox");
img.addEventListener("load", () => img.style.animationPlayState = "running")
fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(res => img.src = res.image)
    .catch(() => {
        let container = document.getElementById("container")
        let node1 = document.createElement("h1")
        let node2 = document.createElement("p")
        node1.textContent = "You're offline"
        node1.style.animation = "fade 1s ease-out"
        node2.textContent = "Connect to the internet to continue"
        node2.style.animation = "fade 1s ease-out"
        container.style.alignItems = "center"
        container.style.justifyContent = "center"
        container.style.flexDirection = "column"
        container.append(node1, node2)
        img.remove()
    })