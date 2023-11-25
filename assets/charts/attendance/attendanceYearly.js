let chartCanvas = document.getElementById("yearly-chart");
let attendanceYearlyChart;

let AttendanceYearlyData = [];
let AttendanceYearlyLabels = [];

export function initializeAttendanceYearlyChart(chartData, chartLabels) {
    chartCanvas = document.getElementById("yearly-chart");

    // If the chart canvas doesn't exist, exit the function
    if (!chartCanvas) {
        return;
    }

    attendanceYearlyChart = new Chart(chartCanvas, {
        type: "bar",
        data: {
            labels: AttendanceYearlyLabels,
            datasets: [
                {
                    label: "Attendance",
                    backgroundColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 0,
                    borderColor: "rgba(54, 162, 235, 0.8)",
                    hoverBackgroundColor: "rgba(54, 162, 235, 0.6)",
                    hoverBorderWidth: 3,
                    borderRadius: 15,
                    data: AttendanceYearlyData,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },

            layout: {
                padding: 20,
            },
        },
    });

    attendanceYearlyChart.data.datasets[0].data = chartData;
    attendanceYearlyChart.data.labels = chartLabels;
    attendanceYearlyChart.update();
    console.log("Attendance YEARLY chart INITIALIZED!!!");
}

export function attendanceYearly(chartData, chartLabels) {
    if (!chartData) {
        console.log("Attendance Yearly: Passed chart data is undefined");
        return;
    }
    if (!chartLabels) {
        console.log("Attendance Yearly: Passed chart labels is undefined");
        return;
    }
    if (!attendanceYearlyChart) {
        console.log("Attendance YEARLY chart not initialized!!!");
        return;
    }

    attendanceYearlyChart.data.datasets[0].data = chartData;
    attendanceYearlyChart.data.labels = chartLabels;
    attendanceYearlyChart.update();
    console.log("Attendance YEARLY chart updated");
}
