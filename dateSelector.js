import {
    months,
    numbers,
    getRandomInt,
    randomStrings,
} from "./assets/charts/Utils.js";

import { attendanceMonthly } from "./assets/charts/attendance/attendanceMonthly.js";
import { attendanceYearly } from "./assets/charts/attendance/attendanceYearly.js";
import { attendanceQuarterly } from "./assets/charts/attendance/attendanceQuarterly.js";

const selectedYear = document.getElementById("selectedYear");
const selectedMonth = document.getElementById("selectedMonth");
const year = document.getElementById("card-year");
const month = document.getElementById("card-month");

let chartLabels = months({ count: 12 });

// console.log("chartData", chartData);
// console.log("chartLabels", chartLabels);
// console.log("chartDataQuarterly", chartDataQuarterly);

export function setupDateSelectorEventListeners() {
    if (selectedMonth) {
        selectedMonth.addEventListener("change", setCardDate);
        selectedMonth.addEventListener("change", setAttendanceMonthlyChart);
    }
    if (selectedYear) {
        selectedYear.addEventListener("change", setCardDate);
        selectedYear.addEventListener("change", setAttendanceMonthlyChart);
        selectedYear.addEventListener("change", setAttendanceYearlyChart);
        selectedYear.addEventListener("change", setAttendanceQuarterlyChart);
    }

    // Call Functions to set initial values
    setCardDate();
}

function setAttendanceYearlyChart() {
    const newData = numbers({ count: 12, min: 100, max: 350 });
    attendanceYearly(newData, chartLabels);
}

function setAttendanceMonthlyChart() {
    const newData = numbers({ count: 12, min: 5, max: 100 });
    const newLabels = randomStrings({
        count: getRandomInt(2, 15),
        minLen: 3,
        maxLen: 10,
    });
    attendanceMonthly(newData, newLabels);
}

function setAttendanceQuarterlyChart() {
    const newData = numbers({ count: 4, min: 20, max: 500 });
    attendanceQuarterly(newData);
}

function setCardDate() {
    if (year && year.innerHTML) {
        year.innerHTML = selectedYear.value;
    }

    if (month && month.innerHTML) {
        month.innerHTML = selectedMonth.value;
    }
}
