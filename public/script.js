let isImageAnimated = false;

window.addEventListener('scroll', function () {
    const imageElement = document.getElementById('myImage');
    const position = imageElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!isImageAnimated && position < windowHeight * 0.75) {
        imageElement.classList.add('visible');
        isImageAnimated = true;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Example of JavaScript functionality (e.g., animations)
    const portfolioImage = document.getElementById('portfolioImage');

    // Apply a simple animation effect
    portfolioImage.style.opacity = 0;
    setTimeout(() => {
        portfolioImage.style.transition = "opacity 1s";
        portfolioImage.style.opacity = 1;
    }, 500);
});

function ShowProjects() {

}

