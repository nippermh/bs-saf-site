document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth >= 992) { // Desktop only
        let dropdowns = document.querySelectorAll(".navbar .dropdown");

        dropdowns.forEach(function (dropdown) {
            dropdown.addEventListener("mouseover", function () {
                let menu = this.querySelector(".dropdown-menu");
                if (menu) {
                    menu.classList.add("show");
                }
            });

            dropdown.addEventListener("mouseleave", function () {
                let menu = this.querySelector(".dropdown-menu");
                if (menu) {
                    menu.classList.remove("show");
                }
            });
        });
    }
});
