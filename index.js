import { setupDateSelectorEventListeners } from "./dateSelector.js";
import {
    getAttendanceByQuarter,
    getAttendanceByYear,
    getAttendanceByMonth,
} from "./assets/charts/dummyData.js";

import { initializeAttendanceMonthlyChart } from "./assets/charts/attendance/attendanceMonthly.js";
import { initializeAttendanceQuarterlyChart } from "./assets/charts/attendance/attendanceQuarterly.js";
import { initializeAttendanceYearlyChart } from "./assets/charts/attendance/attendanceYearly.js";

function initAttndCharts_ONLOAD() {
    // Call setupEventListeners after updating the main content
    setupDateSelectorEventListeners();

    let attndY_DUMMYDATA = getAttendanceByYear();
    console.log("dummyData: ", attndY_DUMMYDATA);

    let attndM_DUMMYDATA = getAttendanceByMonth();
    console.log("dummyData: ", attndM_DUMMYDATA);

    let attndQ_DUMMYDATA = getAttendanceByQuarter();
    console.log("dummyData: ", attndQ_DUMMYDATA);

    initializeAttendanceYearlyChart(
        attndY_DUMMYDATA.YEARLY_DATA,
        attndY_DUMMYDATA.YEARLY_LABELS
    );

    initializeAttendanceMonthlyChart(
        attndM_DUMMYDATA.MONTHLY_DATA,
        attndM_DUMMYDATA.MONTHLY_LABELS
    );
    initializeAttendanceQuarterlyChart(attndQ_DUMMYDATA.QUARTERLY_DATA);
}

function initializeDataTable() {
    jQuery("#data-table").DataTable();
    console.log("Data table initialized");
}

document.addEventListener("DOMContentLoaded", function (event) {
    initAttndCharts_ONLOAD();

    const navLinks = document.querySelectorAll(".nav_link"); // Get all navigation links
    const mainElement = document.querySelector("main"); // Get the main element

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
                        initAttndCharts_ONLOAD();
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
