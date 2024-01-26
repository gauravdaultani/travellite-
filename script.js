document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        header.style.backgroundPositionY = -scrollPosition * 0.5 + "px";
    });
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        });
    });
    ScrollReveal().reveal(".header-content", { delay: 200, distance: "50px", origin: "bottom" });
    ScrollReveal().reveal(".events .row", { delay: 400, distance: "50px", origin: "bottom" });
    ScrollReveal().reveal(".explore-content", { delay: 200, distance: "50px", origin: "bottom" });
    ScrollReveal().reveal(".tours .row", { delay: 400, distance: "50px", origin: "bottom" });
    ScrollReveal().reveal(".footer", { delay: 200, distance: "50px", origin: "bottom" });
});
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    setTimeout(function () {
        preloader.style.display = "none";
        document.body.style.overflow = "visible";
    }, 1000); // Adjust the time as needed
});