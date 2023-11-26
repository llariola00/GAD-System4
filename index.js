import {
    setupAttendanceEventListeners,
    selectedYear as attndSelectedYear,
    selectedMonth as attndSelectedMonth,
} from "./assets/charts/attendance/attendanceDateSelector.js";

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
    setupAttendanceEventListeners();

    let attndY_DUMMYDATA = getAttendanceByYear(attndSelectedYear);
    console.log("dummyData: ", attndY_DUMMYDATA);

    let attndM_DUMMYDATA = getAttendanceByMonth(
        attndSelectedYear,
        attndSelectedMonth
    );
    console.log("dummyData: ", attndM_DUMMYDATA);

    let attndQ_DUMMYDATA = getAttendanceByQuarter(attndSelectedYear);
    console.log("dummyData: ", attndQ_DUMMYDATA);

    initializeAttendanceYearlyChart(
        attndY_DUMMYDATA.YEARLY_DATA,
        attndY_DUMMYDATA.YEARLY_LABELS,
        attndY_DUMMYDATA.YEARLY_TITLE
    );

    initializeAttendanceMonthlyChart(
        attndM_DUMMYDATA.MONTHLY_DATA,
        attndM_DUMMYDATA.MONTHLY_LABELS,
        attndM_DUMMYDATA.MONTHLY_TITLE
    );
    initializeAttendanceQuarterlyChart(
        attndQ_DUMMYDATA.QUARTERLY_DATA,
        attndQ_DUMMYDATA.QUARTERLY_TITLE
    );
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

                    const mainContent = tempDom.querySelector("main").innerHTML; // Get the main content from the fetched HTML
                    mainElement.innerHTML = mainContent; // Replace the content of the main element

                    try {
                        // Get the dateSelector content from the fetched HTML
                        const dateSelectorContent =
                            tempDom.querySelector("#dateSelector").innerHTML;
                        // Get the dateSelector element in the current page
                        const dateSelectorElement =
                            document.querySelector("#dateSelector");
                        // Replace the content of the dateSelector element
                        dateSelectorElement.innerHTML = dateSelectorContent;
                    } catch (error) {
                        console.log("ERROR: Loading dateSelector: ", error);
                        console.log(
                            "If called when trying to load logs page, its because logs.html doesnt have a dateSelector element"
                        );
                    }

                    if (link.id === "attendance") {
                        initAttndCharts_ONLOAD();
                        console.log("Attendance link clicked");
                    }
                    if (link.id === "gender") {
                        // Call setupEventListeners after updating the main content

                        console.log("gender link clicked");
                    }
                    if (link.id === "events") {
                        // Call setupEventListeners after updating the main content

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
