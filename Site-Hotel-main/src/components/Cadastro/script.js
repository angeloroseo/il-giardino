document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const images = document.querySelectorAll(".gallery .image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.querySelector(".close-lightbox");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            images.forEach(image => {
                if (filter === "all" || image.getAttribute("data-category") === filter) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });
        });
    });

    images.forEach(image => {
        image.addEventListener("click", () => {
            const imgSrc = image.querySelector("img").src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = "flex";
        });
    });

    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    });
});
