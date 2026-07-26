// Flora Boutique Website JavaScript

// Show welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Flora Boutique!");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Button click message
const shopButton = document.querySelector(".btn");

if (shopButton) {
    shopButton.addEventListener("click", () => {
        alert("Welcome to Flora Boutique! Happy Shopping 🌸");
    });
}
