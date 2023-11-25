import { setupDateSelectorEventListeners } from "./dateSelector.js";

function initializeDataTable() {
    jQuery("#data-table").DataTable();
    console.log("Data table initialized");
}

document.addEventListener("DOMContentLoaded", function (event) {
    // Call setupEventListeners when the page initially loads
    setupDateSelectorEventListeners();

    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav_link");

    // Get the main element
    const mainElement = document.querySelector("main");

    // Add event listener to each link
    navLinks.forEach((link) => {
        // If the link is the 'import' link, skip this iteration
        if (link.id === "import") {
            return;
        }

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

                    if (link.id === "attendance") {
                        // Call setupEventListeners after updating the main content
                        setupDateSelectorEventListeners();
                        console.log("Attendance link clicked");
                    }
                    if (link.id === "gender") {
                        // Call setupEventListeners after updating the main content
                        setupDateSelectorEventListeners();
                        console.log("gender link clicked");
                    }
                    if (link.id === "events") {
                        // Call setupEventListeners after updating the main content
                        setupDateSelectorEventListeners();
                        console.log("events link clicked");
                    }
                    if (link.id === "logs") {
                        // Call initializeDataTable after updating the main content
                        initializeDataTable();
                        console.log("logs link clicked");
                    }
                });
        });
    });
});
