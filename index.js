import { setupDateSelectorEventListeners } from "./dateSelector.js";

document.addEventListener("DOMContentLoaded", function (event) {
    // ... existing code ...

    // Call setupEventListeners when the page initially loads
    setupDateSelectorEventListeners();

    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav_link");

    // Get the main element
    const mainElement = document.querySelector("main");

    // Add event listener to each link
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            // Prevent default action
            e.preventDefault();

            // Fetch the content of the page
            fetch(this.href)
                .then((response) => response.text())
                .then((data) => {
                    // Create a temporary DOM div element
                    const tempDom = new DOMParser().parseFromString(
                        data,
                        "text/html"
                    );

                    // Get the main content from the fetched HTML
                    const mainContent = tempDom.querySelector("main").innerHTML;

                    // Replace the content of the main element
                    mainElement.innerHTML = mainContent;

                    // Call setupEventListeners after updating the main content
                    setupDateSelectorEventListeners();
                });
        });
    });
});
