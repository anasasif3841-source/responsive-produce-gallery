
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        const filter = this.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        galleryItems.forEach(item => {

            const category = item.dataset.category;

            if (filter === "all" || filter === category) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }

        });

    });

});
