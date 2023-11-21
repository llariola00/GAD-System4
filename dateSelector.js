import { attendanceChart } from "./assets/charts/attendance.js";

export function setupDateSelectorEventListeners() {
    const selectedYear = document.getElementById("selectedYear");
    const selectedMonth = document.getElementById("selectedMonth");
    const year = document.getElementById("card-year");
    const month = document.getElementById("card-month");

    const chartData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const chartLabels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    function setAttendanceChart() {
        attendanceChart(chartData, chartLabels);
    }

    function setCardDate() {
        if (year && year.innerHTML) {
            year.innerHTML = selectedYear.value;
        }

        if (month && month.innerHTML) {
            month.innerHTML = selectedMonth.value;
        }
    }

    function setTitle() {}

    if (selectedMonth) {
        selectedMonth.addEventListener("change", setCardDate);
    }

    if (selectedYear) {
        selectedYear.addEventListener("change", setCardDate);
        selectedYear.addEventListener("change", setAttendanceChart);
    }

    // Call test_setData to set initial values
    setCardDate();
    setAttendanceChart();
}
