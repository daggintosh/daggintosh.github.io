let img = document.getElementById("fox");
fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(res => {
        img.src = res.image;
        document.querySelector("meta[name='og:image']")
            .setAttribute("content", res.image);
    })
    .catch(err => console.error(err));